import { UUID } from 'crypto';
import { Cuenta } from '../../models/cuenta.model';
import { Movimiento } from '../../models/movimiento.model';
import { CategoriaAbstract } from '../../model-abstracts/categoria.abstract';
import { TipoMovimiento } from '../../enum/tipo-movimiento.enum';
import { MovimientoAbstract } from 'src/domain/model-abstracts/movimiento.abstract';

export interface IMovimientoFactory {
  createTransaction(
    monto: number,
    cuenta: UUID | Cuenta,
    fecha: Date,
    tipo: TipoMovimiento,
    categoria: UUID | CategoriaAbstract,
  ): Movimiento;

}

export const IMovimientoFactory = Symbol('IMovimientoFactory');
