import { ICuentaRepository } from './../../../../../domain/repositories/icuenta.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserAccountsQuery } from '../impl/get-user-accounts.query';
import { Inject } from '@nestjs/common';

@QueryHandler(GetUserAccountsQuery)
export class GetUserAccountsHandler
  implements IQueryHandler<GetUserAccountsQuery>
{
  constructor(
    @Inject(ICuentaRepository)
    private readonly accountRepository: ICuentaRepository,
  ) {}
  execute(query: GetUserAccountsQuery): Promise<any> {
    return this.accountRepository.getAccountsByUserId(query.userId);
  }
}
