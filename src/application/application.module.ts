import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { InfraestructureModule } from '../infraestructure/infraestructure.module';
import { CommandHandlers } from './commands';
import { DomainModule } from 'src/domain/domain.module';
import { AuthModule } from '../utils/auth/auth.module';
import { EventHandlers } from './events';
import { QueryHandlers } from './queries';

@Module({
  imports: [CqrsModule, InfraestructureModule, DomainModule, AuthModule],
  providers: [...CommandHandlers, ...EventHandlers, ...QueryHandlers],
  exports: [...CommandHandlers, ...EventHandlers, ...QueryHandlers],
})
export class ApplicationModule {}
