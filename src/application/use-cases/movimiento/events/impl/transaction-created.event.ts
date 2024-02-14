import { UUID } from 'crypto';
import { TipoMovimiento } from '../../../../../domain/enum/tipo-movimiento.enum';

export class TransactionCreatedEvent {
  constructor(
    public readonly accountId: UUID,
    public readonly amount: number,
    public readonly type: TipoMovimiento,
  ) {}
}
