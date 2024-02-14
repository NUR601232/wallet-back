import { IMovimientoRepository } from './../../../../../domain/repositories/imovimiento.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetFilteredTransactionQuery } from '../impl/get-filtered-transactions.query';
import { Inject } from '@nestjs/common';

@QueryHandler(GetFilteredTransactionQuery)
export class GetFilteredTransactionsHandler
  implements IQueryHandler<GetFilteredTransactionQuery>
{
  constructor(
    @Inject(IMovimientoRepository)
    private transactionRepository: IMovimientoRepository,
  ) {}
  async execute(query: GetFilteredTransactionQuery): Promise<any> {
    const {
      userId,
      startDate,
      endDate,
      accountIds,
      categoryId,
      transactionType,
    } = query.filtersTransactionDto;
    return this.transactionRepository.filterTransaction(
      userId,
      startDate,
      endDate,
      accountIds,
      categoryId,
      transactionType,
    );
  }
}
