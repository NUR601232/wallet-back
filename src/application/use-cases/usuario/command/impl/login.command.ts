import { LoginDto } from 'src/application/dto/login.dto';
export class LoginCommand {
  constructor(public readonly user: LoginDto) {}
}
