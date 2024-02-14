import { Usuario } from '../../models/usuario.model';
import { IUsuarioFactory } from './iusuario.factory';

export class UsuarioFactory implements IUsuarioFactory {
  createUser(
    nombre: string,
    correo: string,
    contrasenha: string,
  ): Usuario {
    return new Usuario(nombre, correo, contrasenha);
  }
}
