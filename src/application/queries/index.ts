import { GetAccountHandler } from '../use-cases/cuenta/queries/handler/get-account.handler';
import { GetUserAccountsHandler } from '../use-cases/cuenta/queries/handler/get-user-accounts.handler';
import { GetCategoriesHandler } from '../use-cases/categoria/queries/handler/get-categories.handler';
import { GetFilteredTransactionsHandler } from '../use-cases/movimiento/query/handler/get-filtered-transactions.handler';

export const QueryHandlers = [
  GetAccountHandler,
  GetUserAccountsHandler,
  GetCategoriesHandler,
  GetFilteredTransactionsHandler,
];
