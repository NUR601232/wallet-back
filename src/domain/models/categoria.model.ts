import { UUID, randomUUID } from 'crypto';
import { CategoriaAbstract } from '../model-abstracts/categoria.abstract';
import { UsuarioAbstract } from '../model-abstracts/usuario.abstract';

export class Categoria extends CategoriaAbstract {
  id: UUID;
  nombre: string;
  usuario: UsuarioAbstract | UUID | undefined;
  constructor(nombre: string, usuario?: UsuarioAbstract | UUID) {
    super();
    this.id = randomUUID();
    this.nombre = nombre;
    this.usuario = usuario;
  }
}
