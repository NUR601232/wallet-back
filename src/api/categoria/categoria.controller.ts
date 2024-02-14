import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UUID } from 'crypto';
import { CategoriaDto } from 'src/application/dto/categoria.dto';
import { CreateCategoryCommand } from 'src/application/use-cases/categoria/command/impl/create-category.command';
import { GetCategoriesQuery } from 'src/application/use-cases/categoria/queries/impl/get-categories.query';


@Controller('categoria')
export class CategoriaController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
      ) {}
    
      @Post()
      async createCategory(@Body() category: CategoriaDto) {
        return await this.commandBus.execute(new CreateCategoryCommand(category));
      }
    
      @Get('user/:id')
      async getCategoriesByUserId(@Param('id') id: UUID) {
        return await this.queryBus.execute(new GetCategoriesQuery(id));
      }

      @Get('user')
      async getCategoriesId(@Param('id') id: UUID) {
        return await this.queryBus.execute(new GetCategoriesQuery(id));
      }
}
