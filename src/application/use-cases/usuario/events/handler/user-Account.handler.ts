import { EventPublisher, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UUID } from 'crypto';
import { UserAccountEvent } from '../impl/user-Account.event';
import { Inject } from '@nestjs/common/decorators';

import { ICuentaRepository } from 'src/domain/repositories/icuenta.repository';
import { ICuentaFactory } from 'src/domain/factories/cuenta/icuenta.factory';


@EventsHandler(UserAccountEvent)
export class UserAccountHandler implements IEventHandler<UserAccountEvent>{
  private account = process.env.DF_CUENTA;

  constructor(
    @Inject(ICuentaFactory) private accountFactory: ICuentaFactory,
    @Inject(ICuentaRepository)
    private accountRepository: ICuentaRepository,
    private readonly publisher: EventPublisher,) {}
  
    async handle(event: UserAccountEvent) {
      const newAccounts = this.accountFactory.createAccount(this.account, event.userId, 0);
      const savedAccounts = await this.accountRepository.create(newAccounts);
      savedAccounts.commit();
  }
}
