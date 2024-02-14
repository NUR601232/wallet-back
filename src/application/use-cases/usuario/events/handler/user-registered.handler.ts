import { ICategoriaRepository } from '../../../../../domain/repositories/icategoria.repository';
import { ICuentaRepository } from '../../../../../domain/repositories/icuenta.repository';
import { EventPublisher, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserRegisteredEvent } from '../impl/user-registered.event';
import { Inject } from '@nestjs/common';
import { ICategoriaFactory } from '../../../../../domain/factories/categoria/icategoria.factory';
import { ICuentaFactory } from '../../../../../domain/factories/cuenta/icuenta.factory';

@EventsHandler(UserRegisteredEvent)
export class UserRegisteredHandler
  implements IEventHandler<UserRegisteredEvent>
{
  

  private categoriesList = process.env.DF_CATEGORIAS.split(',');
  private account = process.env.DF_CUENTA;

  constructor(
    @Inject(ICategoriaFactory) private categoryFactory: ICategoriaFactory,
    @Inject(ICategoriaRepository)
    private categoryRepository: ICategoriaRepository,

    /*@Inject(ICuentaFactory) private accountFactory: ICuentaFactory,
    @Inject(ICuentaRepository)
    private accountRepository: ICuentaRepository,*/
    private readonly publisher: EventPublisher,
  ) {}

  async handle(event: UserRegisteredEvent) {
    const newCategories = this.categoriesList.map((categoryName) =>
      this.categoryFactory.createCategory(categoryName, event.userId),
    );

    const savedCategories = await Promise.all(
      newCategories.map(async (category) =>
        this.publisher.mergeObjectContext(
          await this.categoryRepository.create(category),
        ),
      ),
    );

    savedCategories.forEach((category) => category.commit());

    /*const newAccounts = this.accountFactory.createAccount(this.account, event.userId, 0);
    const savedAccounts = await this.accountRepository.create(newAccounts);
    savedAccounts.commit();*/
  }
}
