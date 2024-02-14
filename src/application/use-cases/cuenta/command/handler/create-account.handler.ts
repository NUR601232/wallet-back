import { ICuentaFactory } from '../../../../../domain/factories/cuenta/icuenta.factory';
import { ICuentaRepository } from '../../../../../domain/repositories/icuenta.repository';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateAccountCommand } from '../impl/create-account.command';
import { Inject } from '@nestjs/common';
@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler
  implements ICommandHandler<CreateAccountCommand>
{
  constructor(
    @Inject(ICuentaRepository) private accountRepository: ICuentaRepository,
    @Inject(ICuentaFactory) private accountFactory: ICuentaFactory,
    private readonly publisher: EventPublisher,
  ) {}
  async execute(command: CreateAccountCommand): Promise<any> {
    const { account } = command;
    const newAccount = this.accountFactory.createAccount(
      account.nombre,
      account.usuario,
      account.saldo,
    );
    const savedAccount = this.publisher.mergeObjectContext(
      await this.accountRepository.create(newAccount),
    );

    savedAccount.commit();
    return savedAccount;
  }
}
