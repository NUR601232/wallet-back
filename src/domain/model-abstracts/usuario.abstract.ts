import { UserAccountEvent } from 'src/application/use-cases/usuario/events/impl/user-Account.event';
import { AggregateRoot } from '../../../wallet-kernel/src/core/aggregateRoot';
import { UserRegisteredEvent } from '../../application/use-cases/usuario/events/impl/user-registered.event';

export abstract class UsuarioAbstract extends AggregateRoot {
  abstract nombre: string;
  abstract correo: string;
  abstract contrasenha: string;

  generateCategories() {
    this.apply(new UserRegisteredEvent(this.id));
  }

  generateCuentas() {
    this.apply(new UserAccountEvent(this.id));
  }

}
