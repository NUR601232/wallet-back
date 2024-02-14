import { Usuario } from '../../models/usuario.model';

export interface IUsuarioFactory {
  createUser(
    nombre: string,
    correo: string,
    contrasenha: string,
  ): Usuario;
}

export const IUsuarioFactory = Symbol('IUsuarioFactory');
