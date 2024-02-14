import { Provider } from '@nestjs/common/interfaces';
import { IUsuarioRepository } from '../../../domain/repositories/iusuario.repository';
import { UsuarioRepository } from './usuario.repository';
import { ICuentaRepository } from '../../../domain/repositories/icuenta.repository';
import { CuentaRepository } from './cuenta.repository';
import { ICategoriaRepository } from '../../../domain/repositories/icategoria.repository';
import { CategoriaRepository } from './categoria.repository';
import { IMovimientoRepository } from '../../../domain/repositories/imovimiento.repository';
import { MovimientoRepository } from './movimiento.repository';
import { ITransaccionRepository } from '../../../domain/repositories/itransaccion.repository';
import { TransaccionRepository } from './transaccion.repository';

export const RepositoriesProvider: Provider[] = [
  { provide: IUsuarioRepository, useClass: UsuarioRepository },
  { provide: ICuentaRepository, useClass: CuentaRepository },
  { provide: ICategoriaRepository, useClass: CategoriaRepository },
  { provide: IMovimientoRepository, useClass: MovimientoRepository },
  { provide: ITransaccionRepository, useClass: TransaccionRepository },
];
