import { ICategoriaRepository } from 'src/domain/repositories/icategoria.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoriesQuery } from '../impl/get-categories.query';
import { Inject } from '@nestjs/common';

@QueryHandler(GetCategoriesQuery)
export class GetCategoriesHandler implements IQueryHandler<GetCategoriesQuery> {
  constructor(
    @Inject(ICategoriaRepository)
    private categoryRepository: ICategoriaRepository,
  ) {}

  async execute(query: GetCategoriesQuery): Promise<any> {
    return await this.categoryRepository.getCategoriesByUserId(query.userId);
  }
}
