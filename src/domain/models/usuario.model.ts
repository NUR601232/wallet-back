import { UUID, randomUUID } from 'crypto';
import { UsuarioAbstract } from '../model-abstracts/usuario.abstract';

export class Usuario extends UsuarioAbstract {
  id: UUID;
  nombre: string;
  correo: string;
  contrasenha: string;

  constructor(
    nombre: string,
    correo: string,
    contrasenha: string,
  ) {
    super();
    this.id = randomUUID();
    this.nombre = nombre;
    this.correo = correo;
    this.contrasenha = contrasenha;
  }
}
