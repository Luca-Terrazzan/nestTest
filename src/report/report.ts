import { IReportType } from './ireporttype';

export class Report<T extends IReportType> {

  private readonly reportType: T;
  constructor(reportType: T) {
    this.reportType = reportType;
  }

  public getReportTypeName(): string {
    return this.reportType.getTypeName();
  }
}
