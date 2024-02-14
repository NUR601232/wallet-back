import { UUID } from 'crypto';
import { UsuarioAbstract } from './usuario.abstract';
import { AggregateRoot } from '../../../wallet-kernel/src/core/aggregateRoot';

export abstract class CuentaAbstract extends AggregateRoot {
  abstract nombre: string;
  abstract usuario: UUID | UsuarioAbstract;
  abstract saldo: number;
}
