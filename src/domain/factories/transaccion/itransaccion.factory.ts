import { Transaccion } from '../../models/transaccion.model';
import { MovimientoAbstract } from '../../model-abstracts/movimiento.abstract';
import { UUID } from 'crypto';
export interface ITransaccionFactory {
  createFactory(
    da: MovimientoAbstract | UUID,
    recive: MovimientoAbstract | UUID,
  ): Transaccion;
}

export const ITransaccionFactory = Symbol('ITransaccionFactory');
