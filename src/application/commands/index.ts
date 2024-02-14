import { CreateAccountHandler } from '../use-cases/cuenta/command/handler/create-account.handler';
import { CreateCategoryHandler } from '../use-cases/categoria/command/handler/create-category.handler';
import { CreateTransactionHandler } from '../use-cases/movimiento/command/handler/create-transaction.handler';
import { CreateTransferHandler } from '../use-cases/transaccion/handler/create-transfer.handler';
import { LoginHandler } from '../use-cases/usuario/command/handler/login.handler';
import { RegisterUserHandler } from '../use-cases/usuario/command/handler/register-user.handler';

export const CommandHandlers = [
  RegisterUserHandler,
  LoginHandler,
  CreateAccountHandler,
  CreateCategoryHandler,
  CreateTransactionHandler,
  CreateTransferHandler,
];
