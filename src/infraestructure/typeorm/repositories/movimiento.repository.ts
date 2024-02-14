import { MovimientoEntity } from '../config/movimiento.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { IMovimientoRepository } from '../../../domain/repositories/imovimiento.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Movimiento } from 'src/domain/models/movimiento.model';
import { TipoMovimiento } from 'src/domain/enum/tipo-movimiento.enum';
import { UUID } from 'crypto';

@Injectable()
export class MovimientoRepository
  extends BaseRepositoryTypeOrm<MovimientoEntity>
  implements IMovimientoRepository
{
  constructor(
    @InjectRepository(MovimientoEntity)
    private transactionRepo: Repository<MovimientoEntity>,
  ) {
    super(transactionRepo);
  }

  async filterTransaction(
    userId: UUID,
    startDate?: Date,
    endDate?: Date,
    accountIds?: UUID[],
    categoryId?: UUID,
    transactionType?: TipoMovimiento,
  ): Promise<Movimiento[]> {
    const queryBuilder = this.transactionRepo
      .createQueryBuilder('movimiento')
      .leftJoinAndSelect('movimiento.cuenta', 'account')
      .leftJoinAndSelect('movimiento.categoria', 'category')
      .where('1=1'); 

    queryBuilder.andWhere('account.usuarioId = :userId', { userId });

    if (startDate && endDate) {
      queryBuilder.andWhere(
        'movimiento.fecha BETWEEN :startDate AND :endDate',
        {
          startDate,
          endDate,
        },
      );
    }

    if (accountIds && accountIds.length > 0) {
      queryBuilder.andWhere('movimiento.cuentaId IN (:...accountIds)', {
        accountIds,
      });
    }

    if (categoryId) {
      queryBuilder.andWhere('movimiento.categoriaId = :categoryId', {
        categoryId,
      });
    }

    if (transactionType) {
      queryBuilder.andWhere('movimiento.tipo = :transactionType', {
        transactionType,
      });
    }

    const transactions = await queryBuilder.getMany();
    return transactions;
  }
}
