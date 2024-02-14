import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ApplicationModule } from '../application/application.module';
import { CuentaController } from './cuenta/cuenta.controller';
import { CategoriaController } from './categoria/categoria.controller';
import { MovimientoController } from './movimiento/movimiento.controller';
import { TransferenciaController } from './transferencia/transferencia.controller';

@Module({
  imports: [CqrsModule, ApplicationModule],
  controllers: [UsuarioController, CuentaController, CategoriaController, MovimientoController, TransferenciaController],
})
export class ApiModule {}
