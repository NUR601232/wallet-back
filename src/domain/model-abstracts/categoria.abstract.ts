import { UUID } from 'crypto';
import { Entity } from '../../../wallet-kernel/src/core/entity';
import { UsuarioAbstract } from './usuario.abstract';

export abstract class CategoriaAbstract extends Entity {
  abstract nombre: string;
  abstract usuario: UsuarioAbstract | UUID | undefined;
}
