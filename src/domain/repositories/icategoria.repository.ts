import { IRepository } from 'wallet-kernel/src/core/iRepository';
import { Categoria } from '../models/categoria.model';
import { UUID } from 'crypto';

export interface ICategoriaRepository extends IRepository<Categoria> {
  getCategoriesByUserId(userId: UUID): Promise<Categoria[]>;
}
export const ICategoriaRepository = Symbol('ICategoriaRepository');
