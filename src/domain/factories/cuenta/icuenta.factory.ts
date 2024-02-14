import { UUID } from 'crypto';
import { Cuenta } from '../../models/cuenta.model';
import { UsuarioAbstract } from '../../model-abstracts/usuario.abstract';

export interface ICuentaFactory {
  createAccount(
    nombre: string,
    usuario: UUID | UsuarioAbstract,
    saldo: number,
  ): Cuenta;
}

export const ICuentaFactory = Symbol('ICuentaFactory');
