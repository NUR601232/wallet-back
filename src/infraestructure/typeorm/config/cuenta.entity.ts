import { UUID } from 'crypto';
import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { CuentaAbstract } from '../../../domain/model-abstracts/cuenta.abstract';
import { UsuarioAbstract } from '../../../domain/model-abstracts/usuario.abstract';

@Entity({ name: 'cuentas' })
export class CuentaEntity extends CuentaAbstract {
  @PrimaryColumn()
  id: UUID;

  @Column()
  nombre: string;

  @Column()
  saldo: number;

  @ManyToOne(() => UsuarioEntity, { eager: true })
  usuario: UsuarioAbstract | UUID;
}
