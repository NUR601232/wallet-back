import { TipoMovimiento } from './../../domain/enum/tipo-movimiento.enum';
import { UUID } from 'crypto';

export class FiltradoDto {
  userId: UUID;
  startDate?: Date;
  endDate?: Date;
  accountIds?: UUID[];
  categoryId?: UUID;
  transactionType?: TipoMovimiento;
}
