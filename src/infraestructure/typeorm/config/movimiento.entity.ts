import { UUID } from 'crypto';
import { PrimaryColumn, ManyToOne, Entity, Column } from 'typeorm';
import { CuentaAbstract } from 'src/domain/model-abstracts/cuenta.abstract';
import { CuentaEntity } from './cuenta.entity';
import { MovimientoAbstract } from '../../../domain/model-abstracts/movimiento.abstract';
import { TipoMovimiento } from '../../../domain/enum/tipo-movimiento.enum';
import { CategoriaAbstract } from 'src/domain/model-abstracts/categoria.abstract';
import { CategoriaEntity } from './categoria.entity';

@Entity({ name: 'movimientos' })
export class MovimientoEntity extends MovimientoAbstract {
  @PrimaryColumn()
  id: UUID;

  @Column()
  monto: number;

  @Column()
  fecha: Date;

  @Column({ type: 'enum', enum: TipoMovimiento })
  tipo: TipoMovimiento;

  @ManyToOne(() => CategoriaEntity)
  categoria: CategoriaAbstract;

  @ManyToOne(() => CuentaEntity)
  cuenta: CuentaAbstract;
}
