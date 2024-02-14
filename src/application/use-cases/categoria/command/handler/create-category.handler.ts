import { ICategoriaRepository } from '../../../../../domain/repositories/icategoria.repository';
import { ICategoriaFactory } from '../../../../../domain/factories/categoria/icategoria.factory';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateCategoryCommand } from '../impl/create-category.command';
import { Inject } from '@nestjs/common';
@CommandHandler(CreateCategoryCommand)
export class CreateCategoryHandler
  implements ICommandHandler<CreateCategoryCommand>
{
  constructor(
    @Inject(ICategoriaFactory) private categoryFactory: ICategoriaFactory,
    @Inject(ICategoriaRepository)
    private categoryRepository: ICategoriaRepository,
    private readonly publisher: EventPublisher,
  ) {}
  async execute(command: CreateCategoryCommand): Promise<any> {
    const { category } = command;
    const newCategory = this.categoryFactory.createCategory(
      category.nombre,
      category.usuario,
    );

    const savedCategory = this.publisher.mergeObjectContext(
      await this.categoryRepository.create(newCategory),
    );

    savedCategory.commit();
    return savedCategory;
  }
}
