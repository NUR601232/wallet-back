import { BaseRepositoryTypeOrm } from './base.repository';
import { ICuentaRepository } from '../../../domain/repositories/icuenta.repository';
import { CuentaEntity } from '../config/cuenta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Cuenta } from 'src/domain/models/cuenta.model';
import { UUID } from 'crypto';
@Injectable()
export class CuentaRepository
  extends BaseRepositoryTypeOrm<CuentaEntity>
  implements ICuentaRepository
{
  constructor(
    @InjectRepository(CuentaEntity)
    private accountRepo: Repository<CuentaEntity>,
  ) {
    super(accountRepo);
  }
 
  async getAccountsByUserId(userId: UUID): Promise<Cuenta[]> {
    return this.accountRepo.find({ where: { usuario: { id: userId } } });
  }

  async getTotalBalance(userId: UUID): Promise<number> {
    return (
      await this.accountRepo.find({ where: { usuario: { id: userId } } })
    ).reduce((total, current) => {
      total += current.saldo;
      return total;
    }, 0);
  }
}
