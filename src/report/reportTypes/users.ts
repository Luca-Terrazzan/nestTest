import { IReportType } from '../ireporttype';
import { Injectable } from '@nestjs/common';
import { ReportMetadata } from '../types/reportMetadata';

@Injectable()
export class Users implements IReportType {
  public getTypeName(): string {
    return 'Users';
  }

  public getReportTypeMetadata(): ReportMetadata {
    return { test: 2 };
  }

}
