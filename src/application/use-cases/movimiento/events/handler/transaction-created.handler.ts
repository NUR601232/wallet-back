import { ICuentaFactory } from './../../../../../domain/factories/cuenta/icuenta.factory';
import { TipoMovimiento } from './../../../../../domain/enum/tipo-movimiento.enum';
import { ICuentaRepository } from './../../../../../domain/repositories/icuenta.repository';
import { EventPublisher, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TransactionCreatedEvent } from '../impl/transaction-created.event';
import { HttpException, HttpStatus, Inject } from '@nestjs/common';

@EventsHandler(TransactionCreatedEvent)
export class TransactionCreatedHandler
  implements IEventHandler<TransactionCreatedEvent>
{
  constructor(
    @Inject(ICuentaRepository) private accountRepository: ICuentaRepository,
    @Inject(ICuentaFactory) private accountFactory: ICuentaFactory,
    private readonly publisher: EventPublisher,
  ) {}

  async handle(event: TransactionCreatedEvent) {
    const account = await this.accountRepository.findById(event.accountId);
    

    if (event.type === TipoMovimiento.Ingreso) {
      account.saldo = account.saldo + event.amount;
    }
    if (event.type === TipoMovimiento.Egreso) {
      if(account.saldo>=event.amount)
        account.saldo -= event.amount;
      else
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const savedAccount = this.publisher.mergeObjectContext(
      await this.accountRepository.create(account),
    );

    savedAccount.commit();
  }
}
