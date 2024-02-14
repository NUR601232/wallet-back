import { IRepository } from '../../../wallet-kernel/src/core/iRepository';
import { Usuario } from '../models/usuario.model';
export interface IUsuarioRepository extends IRepository<Usuario> {
  findByEmail(email: string): Promise<Usuario>;
}
export const IUsuarioRepository = Symbol('IUsuarioRepository');
