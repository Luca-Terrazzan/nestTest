import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Main app controller
 *
 * @class AppController
 */
@Controller()
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
