import { UUID } from 'crypto';
import { Cuenta } from '../../models/cuenta.model';
import { Usuario } from '../../models/usuario.model';
import { ICuentaFactory } from './icuenta.factory';

export class CuentaFactory implements ICuentaFactory {
  createAccount(nombre: string, usuario: UUID | Usuario, saldo: number): Cuenta {
    return new Cuenta(nombre, usuario, saldo);
  }
}
