import { IMovimientoFactory } from './../../../../domain/factories/movimiento/imovimiento.factory';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateTransferCommand } from '../impl/create-transfer.command';
import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { ITransaccionRepository } from '../../../../domain/repositories/itransaccion.repository';
import { ITransaccionFactory } from 'src/domain/factories/transaccion/itransaccion.factory';
import { IMovimientoRepository } from 'src/domain/repositories/imovimiento.repository';
import { TipoMovimiento } from 'src/domain/enum/tipo-movimiento.enum';
import { ICuentaRepository } from 'src/domain/repositories/icuenta.repository';

@CommandHandler(CreateTransferCommand)
export class CreateTransferHandler
  implements ICommandHandler<CreateTransferCommand>
{
  constructor(
    @Inject(ITransaccionRepository)
    private transferRepository: ITransaccionRepository,
    @Inject(ITransaccionFactory) private transferFactory: ITransaccionFactory,
    @Inject(IMovimientoRepository)
    private transactionRepository: IMovimientoRepository,
    @Inject(IMovimientoFactory)
    private transactionFactory: IMovimientoFactory,
    @Inject(ICuentaRepository)
    private cuentaRepository: ICuentaRepository,
    private publisher: EventPublisher,
  ) { }

  async execute(command: CreateTransferCommand): Promise<any> {
    const { transfer } = command;

    const cuenta = await this.cuentaRepository.findById(transfer.da);
    if (cuenta.saldo >= transfer.monto) {
      const transactionWithdrown = this.transactionFactory.createTransaction(
        transfer.monto,
        transfer.da,
        transfer.fecha,
        TipoMovimiento.Egreso,
        transfer.categoria,
      );
      const transactionBenefited = this.transactionFactory.createTransaction(
        transfer.monto,
        transfer.recive,
        transfer.fecha,
        TipoMovimiento.Ingreso,
        transfer.categoria,
      );

      const savedTransactionWithdrown = this.publisher.mergeObjectContext(
        await this.transactionRepository.create(transactionWithdrown),
      );

      const savedTransactionBenefited = this.publisher.mergeObjectContext(
        await this.transactionRepository.create(transactionBenefited),
      );

      const newTranfer = this.transferFactory.createFactory(
        transactionWithdrown.id,
        transactionBenefited.id,
      );

      const savedTransfer = this.publisher.mergeObjectContext(
        await this.transferRepository.create(newTranfer),
      );

      savedTransactionBenefited.updateAccountAmount();
      savedTransactionWithdrown.updateAccountAmount();

      savedTransactionBenefited.commit();
      savedTransactionWithdrown.commit();
      savedTransfer.commit();
      return savedTransfer;
    }
    throw new HttpException('el que da no puede tener menos del monto', HttpStatus.FORBIDDEN);
  }
}
