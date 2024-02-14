import { UUID } from 'crypto';
import { Categoria } from '../../models/categoria.model';
import { Usuario } from '../../models/usuario.model';
import { ICategoriaFactory } from './icategoria.factory';

export class CategoriaFactory implements ICategoriaFactory {
  createCategory(nombre: string, usuario?: UUID | Usuario): Categoria {
    return new Categoria(nombre, usuario);
  }
}
