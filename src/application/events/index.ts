import { TransactionCreatedHandler } from '../use-cases/movimiento/events/handler/transaction-created.handler';
import { UserAccountHandler } from '../use-cases/usuario/events/handler/user-Account.handler';
import { UserRegisteredHandler } from '../use-cases/usuario/events/handler/user-registered.handler';

export const EventHandlers = [UserRegisteredHandler, TransactionCreatedHandler,UserAccountHandler];
