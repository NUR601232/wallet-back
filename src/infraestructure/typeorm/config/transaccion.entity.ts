import { MovimientoAbstract } from 'src/domain/model-abstracts/movimiento.abstract';
import { TransaccionAbstract } from '../../../domain/model-abstracts/transaccion.abstract';
import { UUID } from 'crypto';
import { PrimaryColumn, Entity, OneToOne, JoinColumn } from 'typeorm';
import { MovimientoEntity } from './movimiento.entity';

@Entity({ name: 'transaccion' })
export class TransaccionEntity extends TransaccionAbstract {
  @PrimaryColumn()
  id: UUID;

  @OneToOne(() => MovimientoEntity, { eager: true })
  @JoinColumn()
  da: MovimientoAbstract;

  @OneToOne(() => MovimientoEntity, { eager: true })
  @JoinColumn()
  recive: MovimientoAbstract;
}
