import { UUID } from 'crypto';
import { AggregateRoot } from '../../../wallet-kernel/src/core/aggregateRoot';
import { CuentaAbstract } from './cuenta.abstract';
import { TipoMovimiento } from '../enum/tipo-movimiento.enum';
import { CategoriaAbstract } from './categoria.abstract';
import { TransactionCreatedEvent } from '../../application/use-cases/movimiento/events/impl/transaction-created.event';

export abstract class MovimientoAbstract extends AggregateRoot {
  abstract monto: number;
  abstract cuenta: UUID | CuentaAbstract;
  abstract fecha: Date;
  abstract tipo: TipoMovimiento;
  abstract categoria: CategoriaAbstract | UUID;

  updateAccountAmount() {
    this.apply(
      new TransactionCreatedEvent(this.cuenta as UUID, this.monto, this.tipo),
    );
  }
}
