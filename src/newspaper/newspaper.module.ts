import { Module } from '@nestjs/common';
import { NewspaperController } from './newspaper.controller';
import { NewspaperService } from './newspaper.service';

@Module({
  controllers: [NewspaperController],
  providers: [NewspaperService]
})
export class NewspaperModule {}
