import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './typeorm/config/usuario.entity';
import { CuentaEntity } from './typeorm/config/cuenta.entity';
import { CategoriaEntity } from './typeorm/config/categoria.entity';
import { MovimientoEntity } from './typeorm/config/movimiento.entity';
import { TransaccionEntity } from './typeorm/config/transaccion.entity';
import { RepositoriesProvider } from './typeorm/repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsuarioEntity,
      CuentaEntity,
      CategoriaEntity,
      MovimientoEntity,
      TransaccionEntity,
    ]),
  ],
  providers: [...RepositoriesProvider],
  exports: [...RepositoriesProvider],
})
export class InfraestructureModule {}
