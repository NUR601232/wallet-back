import { UUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { UsuarioAbstract } from '../../../domain/model-abstracts/usuario.abstract';

@Entity({ name: 'usuarios' })
export class UsuarioEntity extends UsuarioAbstract {
  @PrimaryColumn()
  id: UUID;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  contrasenha: string;
}
