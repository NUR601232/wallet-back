import { UsuarioDto } from '../../../../dto/usuario.dto';
export class RegisterUserCommand {
  constructor(public readonly user: UsuarioDto) {}
}
