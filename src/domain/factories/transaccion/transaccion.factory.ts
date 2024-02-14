import { MovimientoAbstract } from 'src/domain/model-abstracts/movimiento.abstract';
import { Transaccion } from 'src/domain/models/transaccion.model';
import { ITransaccionFactory } from './itransaccion.factory';
import { UUID } from 'crypto';

export class TransaccionFactory implements ITransaccionFactory {
  createFactory(
    da: UUID | MovimientoAbstract,
    recive: UUID | MovimientoAbstract,
  ): Transaccion {
    return new Transaccion(da, recive);
  }
}
