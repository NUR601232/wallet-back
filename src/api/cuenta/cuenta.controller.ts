import { GetUserAccountsQuery } from './../../application/use-cases/cuenta/queries/impl/get-user-accounts.query';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CuentaDto } from 'src/application/dto/cuenta.dto';
import { CreateAccountCommand } from 'src/application/use-cases/cuenta/command/impl/create-account.command';
import { GetAccountQuery } from '../../application/use-cases/cuenta/queries/impl/get-account.query';
import { UUID } from 'crypto';

@Controller('cuenta')
export class CuentaController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
      ) {}
    
      @Post()
      async createAccount(@Body() account: CuentaDto) {
        return await this.commandBus.execute(new CreateAccountCommand(account));
      }
    
      @Get('user/:id')
      async getAccountsByUser(@Param('id') id: UUID) {
        return await this.queryBus.execute(new GetUserAccountsQuery(id));
      }
    
      @Get(':id')
      async getAccount(@Param('id') id: UUID) {
        return await this.queryBus.execute(new GetAccountQuery(id));
      }
}
