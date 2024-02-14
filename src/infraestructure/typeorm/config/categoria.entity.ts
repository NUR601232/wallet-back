import { UUID } from 'crypto';
import { UsuarioEntity } from './usuario.entity';
import { PrimaryColumn, ManyToOne, Column, Entity } from 'typeorm';
import { CategoriaAbstract } from '../../../domain/model-abstracts/categoria.abstract';
import { UsuarioAbstract } from '../../../domain/model-abstracts/usuario.abstract';

@Entity({ name: 'categorias' })
export class CategoriaEntity extends CategoriaAbstract {
  @PrimaryColumn()
  id: UUID;

  @Column()
  nombre: string;

  @ManyToOne(() => UsuarioEntity, { nullable: true })
  usuario: UsuarioAbstract;
}
