import { IReportType } from './ireporttype';

export class Report<T extends IReportType> {

  constructor(private readonly reportMetadata: T) { }

  public getReportTypeName(): string {
    return this.reportMetadata.getTypeName();
  }

}
