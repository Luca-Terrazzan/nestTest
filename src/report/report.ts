import { IReportType } from './ireporttype';
import { ReportMetadata } from './types/reportMetadata';

export class Report<T extends IReportType> {

  constructor(private readonly reportMetadata: T) { }

  public getReportTypeName(): string {
    return this.reportMetadata.getTypeName();
  }

  public getReportMetadata(): ReportMetadata {
    return this.reportMetadata.getReportTypeMetadata();
  }

}
