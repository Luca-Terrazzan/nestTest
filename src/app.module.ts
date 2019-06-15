import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AamonModule } from './aamon/aamon.module';
import { ReportService } from './report/report.service';
import { AamonController } from './aamon/aamon.controller';

/**
 * Main app module
 *
 * @class AppModule
 */
@Module({
  imports: [AamonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
