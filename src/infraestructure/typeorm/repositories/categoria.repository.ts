import { ICategoriaRepository } from 'src/domain/repositories/icategoria.repository';
import { CategoriaEntity } from '../config/categoria.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Categoria } from 'src/domain/models/categoria.model';
import { UUID } from 'crypto';
@Injectable()
export class CategoriaRepository
  extends BaseRepositoryTypeOrm<CategoriaEntity>
  implements ICategoriaRepository
{
  constructor(
    @InjectRepository(CategoriaEntity)
    private categoryRepo: Repository<CategoriaEntity>,
  ) {
    super(categoryRepo);
  }
  async getCategoriesByUserId(userId: UUID): Promise<Categoria[]> {
    return await this.categoryRepo.find({ where: { usuario: { id: userId } } });
  }
}
