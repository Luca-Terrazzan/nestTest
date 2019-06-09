import { Controller, Get } from '@nestjs/common';

@Controller('newspaper')
export class NewspaperController {

  /**
   * wip
   */
  @Get()
  public getHello(): string {
    return 'aaa';
  }

}
