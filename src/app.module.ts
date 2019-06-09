import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewspaperModule } from './newspaper/newspaper.module';
import { AamonModule } from './aamon/aamon.module';
import { ReportService } from './report/report.service';

/**
 * Main app module
 *
 * @class AppModule
 */
@Module({
  imports: [NewspaperModule, AamonModule],
  controllers: [AppController],
  providers: [AppService, ReportService],
})
export class AppModule { }
