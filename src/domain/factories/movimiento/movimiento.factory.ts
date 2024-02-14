import { Cuenta } from 'src/domain/models/cuenta.model';
import { Movimiento } from 'src/domain/models/movimiento.model';
import { IMovimientoFactory } from './imovimiento.factory';
import { UUID } from 'crypto';
import { TipoMovimiento } from '../../enum/tipo-movimiento.enum';
import { CategoriaAbstract } from '../../model-abstracts/categoria.abstract';
import { MovimientoAbstract } from 'src/domain/model-abstracts/movimiento.abstract';

export class MovimientoFactory implements IMovimientoFactory {
  createTransaction(
    monto: number,
    cuenta: UUID | Cuenta,
    fecha: Date,
    tipo: TipoMovimiento,
    categoria: UUID | CategoriaAbstract,
  ): Movimiento {
    return new Movimiento(monto, cuenta, fecha, tipo, categoria);
  }

  


 
}
