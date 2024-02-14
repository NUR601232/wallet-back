import { ICuentaRepository } from './../../../../../domain/repositories/icuenta.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAccountQuery } from '../impl/get-account.query';
import { Inject } from '@nestjs/common';

@QueryHandler(GetAccountQuery)
export class GetAccountHandler implements IQueryHandler<GetAccountQuery> {
  constructor(
    @Inject(ICuentaRepository)
    private readonly accountRepository: ICuentaRepository,
  ) {}
  async execute(query: GetAccountQuery): Promise<any> {
    return this.accountRepository.findById(query.accountId);
  }
}
