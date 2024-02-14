import { IRepository } from 'wallet-kernel/src/core/iRepository';
import { Transaccion } from '../models/transaccion.model';

export interface ITransaccionRepository extends IRepository<Transaccion> {}
export const ITransaccionRepository = Symbol('ITransaccionRepository');
