import { IUsuarioRepository } from '../../../domain/repositories/iusuario.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../config/usuario.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UsuarioAbstract } from '../../../domain/model-abstracts/usuario.abstract';

@Injectable()
export class UsuarioRepository
  extends BaseRepositoryTypeOrm<UsuarioEntity>
  implements IUsuarioRepository
{
  constructor(
    @InjectRepository(UsuarioEntity) private userRepo: Repository<UsuarioEntity>,
  ) {
    super(userRepo);
  }

  findByEmail(correo: string): Promise<UsuarioAbstract> {
    return this.userRepo.findOne({ where: { correo } });
  }
}
