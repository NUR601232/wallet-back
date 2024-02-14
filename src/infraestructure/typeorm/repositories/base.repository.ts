import { IRepository } from '../../../../wallet-kernel/src/core/iRepository';
import { AggregateRoot } from '../../../../wallet-kernel/src/core/aggregateRoot';
import { DeepPartial, DeleteResult, Repository, FindOneOptions } from 'typeorm';
import { UUID } from 'crypto';

export abstract class BaseRepositoryTypeOrm<T extends AggregateRoot>
  implements IRepository<T>
{
  protected baseRepo: Repository<T>;

  constructor(repo: Repository<T>) {
    this.baseRepo = repo;
  }

  create(dto: Partial<T>): Promise<T> {
    return this.baseRepo.save(<DeepPartial<T>>dto);
  }
  save(dto: Partial<T>): Promise<T> {
    return this.baseRepo.save(<DeepPartial<T>>dto);
  }
  update(id: UUID, dto: Partial<T>): Promise<T> {
    const newDto = { ...dto, id };
    return this.baseRepo.save(<DeepPartial<T>>newDto);
  }
  findById(id: any): Promise<T> {
    const options: FindOneOptions<T> = { where: { id } };
    return this.baseRepo.findOne(options);
  }
  getAll(): Promise<T[]> {
    return this.baseRepo.find();
  }
  delete(id: UUID): Promise<DeleteResult> {
    return this.baseRepo.delete(id);
  }
}
