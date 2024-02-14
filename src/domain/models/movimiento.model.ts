import { UUID, randomUUID } from 'crypto';
import { CuentaAbstract } from '../model-abstracts/cuenta.abstract';
import { TipoMovimiento } from '../enum/tipo-movimiento.enum';
import { CategoriaAbstract } from '../model-abstracts/categoria.abstract';
import { MovimientoAbstract } from '../model-abstracts/movimiento.abstract';
export class Movimiento extends MovimientoAbstract {
  id: UUID;
  monto: number;
  cuenta: UUID | CuentaAbstract;
  fecha: Date;
  tipo: TipoMovimiento;
  categoria: CategoriaAbstract | UUID;

  constructor(
    monto: number,
    cuenta: UUID | CuentaAbstract,
    fecha: Date,
    tipo: TipoMovimiento,
    categoria: CategoriaAbstract | UUID,
  ) {
    super();
    this.id = randomUUID();
    this.monto = monto;
    this.cuenta = cuenta;
    this.fecha = fecha;
    this.tipo = tipo;
    this.categoria = categoria;
  }
}
