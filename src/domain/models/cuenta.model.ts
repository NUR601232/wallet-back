import { UUID, randomUUID } from 'crypto';
import { CuentaAbstract } from '../model-abstracts/cuenta.abstract';
import { UsuarioAbstract } from '../model-abstracts/usuario.abstract';
export class Cuenta extends CuentaAbstract {
  id: UUID;
  nombre: string;
  usuario: UUID | UsuarioAbstract;
  saldo: number;

  constructor(nombre: string, usuario: UUID | UsuarioAbstract, saldo: number) {
    super();
    this.id = randomUUID();
    this.nombre = nombre;
    this.usuario = usuario;
    this.saldo = saldo;
  }
}
