import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UsuarioDto } from '../../application/dto/usuario.dto';
import { RegisterUserCommand } from 'src/application/use-cases/usuario/command/impl/register-user.command';
import { LocalAuthGuard } from 'src/utils/auth/auth.guard';
import { LoginCommand } from '../../application/use-cases/usuario/command/impl/login.command';

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
      ) {}
    
      @Post()
      async registerUser(@Body() user: UsuarioDto) {
        return await this.commandBus.execute(new RegisterUserCommand(user));
      }
    
      @Get()
      async rUser() {
        return 'auth';
      }
    
      @UseGuards(LocalAuthGuard)
      @Post('auth')
      async login(@Request() req) {
        return await this.commandBus.execute(new LoginCommand(req));
      }
}
