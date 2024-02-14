import { UUID } from 'crypto';
import { IRepository } from '../../../wallet-kernel/src/core/iRepository';
import { Cuenta } from '../models/cuenta.model';

export interface ICuentaRepository extends IRepository<Cuenta> {
  getAccountsByUserId(userId: UUID): Promise<Cuenta[]>;
  getTotalBalance(userId: UUID): Promise<number>;
}
export const ICuentaRepository = Symbol('ICuentaRepository');
