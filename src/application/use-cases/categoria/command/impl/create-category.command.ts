import { CategoriaDto } from '../../../../dto/categoria.dto';

export class CreateCategoryCommand {
  constructor(public readonly category: CategoriaDto) {}
}
