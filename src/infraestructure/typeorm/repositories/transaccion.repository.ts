import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { TransaccionEntity } from '../config/transaccion.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { ITransaccionRepository } from '../../../domain/repositories/itransaccion.repository';
import { Repository } from 'typeorm';

@Injectable()
export class TransaccionRepository
  extends BaseRepositoryTypeOrm<TransaccionEntity>
  implements ITransaccionRepository
{
  constructor(
    @InjectRepository(TransaccionEntity)
    private transferRepository: Repository<TransaccionEntity>,
  ) {
    super(transferRepository);
  }
}
