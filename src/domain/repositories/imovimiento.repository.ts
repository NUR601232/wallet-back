import { IRepository } from 'wallet-kernel/src/core/iRepository';
import { Movimiento } from '../models/movimiento.model';
import { UUID } from 'crypto';
import { TipoMovimiento } from '../enum/tipo-movimiento.enum';

export interface IMovimientoRepository extends IRepository<Movimiento> {
  filterTransaction(
    userId: UUID,
    startDate?: Date,
    endDate?: Date,
    accountIds?: UUID[],
    categoryId?: UUID,
    type?: TipoMovimiento,
  ): Promise<Movimiento[]>;

  findById(Id: UUID): Promise<Movimiento>;
}
export const IMovimientoRepository = Symbol('IMovimientoRepository');
