import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from '../impl/login.command';
import { AuthService } from '../../../../../utils/auth/auth.service';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
  constructor(private authService: AuthService) {}
  async execute(command: LoginCommand): Promise<any> {
    const { user } = command;
    return await this.authService.login(user);
  }
}
