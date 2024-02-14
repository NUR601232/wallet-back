import { UUID, randomUUID } from 'crypto';
import { TransaccionAbstract } from '../model-abstracts/transaccion.abstract';
import { MovimientoAbstract } from '../model-abstracts/movimiento.abstract';
export class Transaccion extends TransaccionAbstract {
  id: UUID;
  da: MovimientoAbstract | UUID;
  recive: MovimientoAbstract | UUID;

  constructor(
    da: MovimientoAbstract | UUID,
    recive: MovimientoAbstract | UUID,
  ) {
    super();
    this.id = randomUUID();
    this.da = da;
    this.recive = recive;
  }
}
