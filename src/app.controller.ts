import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * wip
 */
@Controller('aamon')
export class AppController {
  constructor(private readonly appService: AppService) { }

  /**
   * wip
   */
  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
}
