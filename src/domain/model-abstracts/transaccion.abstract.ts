import { Entity } from 'wallet-kernel/src/core/entity';
import { MovimientoAbstract } from './movimiento.abstract';
import { UUID } from 'crypto';

export abstract class TransaccionAbstract extends Entity {
  abstract da: MovimientoAbstract | UUID;
  abstract recive: MovimientoAbstract | UUID;
}
