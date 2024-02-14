import { GetFilteredTransactionQuery } from './../../application/use-cases/movimiento/query/impl/get-filtered-transactions.query';
import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { MovimientoDto } from '../../application/dto/movimiento.dto';
import { CreateTransactionCommand } from 'src/application/use-cases/movimiento/command/impl/create-transaction.command';
import { FiltradoDto } from '../../application/dto/filtrado.dto';


@Controller('movimiento')
export class MovimientoController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
      ) {}
    
      @Post()
      async createTransaction(@Body() transaction: MovimientoDto) {
        return await this.commandBus.execute(
          new CreateTransactionCommand(transaction),
        );
      }
    
      @Post('filter')
      async filterTransaction(@Body() filters: FiltradoDto) {
        return await this.queryBus.execute(
          new GetFilteredTransactionQuery(filters),
        );
      }
    }
    