import { Provider } from '@nestjs/common';
import { IUsuarioFactory } from './usuario/iusuario.factory';
import { UsuarioFactory } from './usuario/usuario.factory';
import { IMovimientoFactory } from './movimiento/imovimiento.factory';
import { MovimientoFactory } from './movimiento/movimiento.factory';
import { ICategoriaFactory } from './categoria/icategoria.factory';
import { CategoriaFactory } from './categoria/category.factory';
import { ICuentaFactory } from './cuenta/icuenta.factory';
import { CuentaFactory } from './cuenta/cuenta.factory';
import { TransaccionFactory } from './transaccion/transaccion.factory';
import { ITransaccionFactory } from './transaccion/itransaccion.factory';

export const FactoriesProvider: Provider[] = [
  { provide: IUsuarioFactory, useClass: UsuarioFactory },
  { provide: IMovimientoFactory, useClass: MovimientoFactory },
  { provide: ICategoriaFactory, useClass: CategoriaFactory },
  { provide: ICuentaFactory, useClass: CuentaFactory },
  { provide: ITransaccionFactory, useClass: TransaccionFactory },
];
