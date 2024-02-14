import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { TransaccionDto } from '../../application/dto/transaccion.dto';
import { CreateTransferCommand } from 'src/application/use-cases/transaccion/impl/create-transfer.command';


@Controller('transferencia')
export class TransferenciaController {
    constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createTransference(@Body() transfer: TransaccionDto) {
    return await this.commandBus.execute(new CreateTransferCommand(transfer));
  }

 
}
