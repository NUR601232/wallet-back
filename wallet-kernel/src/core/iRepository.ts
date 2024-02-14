import { UUID } from 'crypto';
import { AggregateRoot } from './aggregateRoot';
export interface IRepository<T extends AggregateRoot> {
  create(dto: Partial<T>): Promise<T>;
  update(id: UUID, dto: Partial<T>): Promise<T>;
  findById(id: UUID): Promise<T>;
  getAll(): Promise<T[]>;
  delete(id: UUID): Promise<any>;
  save(dto: Partial<T>): Promise<T>;
}
