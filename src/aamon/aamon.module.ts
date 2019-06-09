import { Module } from '@nestjs/common';
import { AamonController } from './aamon.controller';

@Module({
  controllers: [AamonController]
})
export class AamonModule {}
