import { Module } from '@nestjs/common';
import { FactoriesProvider } from './factories';

@Module({
    providers: [...FactoriesProvider],
    exports: [...FactoriesProvider],
  })
export class DomainModule {}
