import { UUID } from 'crypto';
import { Categoria } from '../../models/categoria.model';
import { Usuario } from '../../models/usuario.model';

export interface ICategoriaFactory {
  createCategory(nombre: string, usuario?: Usuario | UUID): Categoria;
}

export const ICategoriaFactory = Symbol('ICategoriaFactory');
