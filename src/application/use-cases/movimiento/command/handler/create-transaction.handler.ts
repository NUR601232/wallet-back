import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateTransactionCommand } from '../impl/create-transaction.command';
import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { IMovimientoFactory } from 'src/domain/factories/movimiento/imovimiento.factory';
import { IMovimientoRepository } from 'src/domain/repositories/imovimiento.repository';
import { ICuentaRepository } from 'src/domain/repositories/icuenta.repository';
@CommandHandler(CreateTransactionCommand)
export class CreateTransactionHandler
  implements ICommandHandler<CreateTransactionCommand>
{
  constructor(
    @Inject(IMovimientoFactory)
    private transactionFactory: IMovimientoFactory,
    @Inject(IMovimientoRepository)
    private transactionRepository: IMovimientoRepository,
    @Inject(ICuentaRepository)
    private cuentaRepository: ICuentaRepository,

    private publisher: EventPublisher,
  ) { }
  async execute(command: CreateTransactionCommand): Promise<any> {
    const { transaction } = command;
    const cuenta = await this.cuentaRepository.findById(transaction.cuenta);
    if (transaction.tipo == 'ingreso' || cuenta.saldo >= transaction.monto) {
      const newTransaction = this.transactionFactory.createTransaction(
        transaction.monto,
        transaction.cuenta,
        transaction.fecha,
        transaction.tipo,
        transaction.categoria,
      );

      const savedTransaction = this.publisher.mergeObjectContext(
        await this.transactionRepository.create(newTransaction),
      );

      savedTransaction.updateAccountAmount();
      savedTransaction.commit();
      return savedTransaction;
    }else{
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
