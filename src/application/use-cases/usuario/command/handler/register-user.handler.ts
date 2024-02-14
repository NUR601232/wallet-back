import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { RegisterUserCommand } from '../impl/register-user.command';
import { IUsuarioRepository } from '../../../../../domain/repositories/iusuario.repository';
import { Inject } from '@nestjs/common';
import { IUsuarioFactory } from '../../../../../domain/factories/usuario/iusuario.factory';

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler
  implements ICommandHandler<RegisterUserCommand>
{
  constructor(
    @Inject(IUsuarioRepository) private readonly userRepo: IUsuarioRepository,
    @Inject(IUsuarioFactory) private readonly userFactory: IUsuarioFactory,
    private readonly publisher: EventPublisher,
  ) {}
  async execute(command: RegisterUserCommand): Promise<any> {
    const { user } = command;

    const newUser = this.userFactory.createUser(
      user.nombre,
      user.correo,
      user.contrasenha,
    );

    const savedUser = this.publisher.mergeObjectContext(
      await this.userRepo.create(newUser),
    );

    savedUser.generateCategories();
    savedUser.generateCuentas();
    savedUser.commit();

    return savedUser;
  }
}
