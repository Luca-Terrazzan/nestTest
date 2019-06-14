import { IReportType } from './ireporttype';
import { ReportMetadata } from './types/reportMetadata';

export class Report<T extends IReportType, K extends IReportType> {

  constructor(
    private readonly firstEntityMetadata: T,
    private readonly secondEntityMetadata: K
  ) { }

  public getReportMetadata(): {firstEntityMetadata: ReportMetadata, secondEntityMetadata: ReportMetadata} {
    return {
      firstEntityMetadata: this.firstEntityMetadata.getReportTypeMetadata(),
      secondEntityMetadata: this.secondEntityMetadata.getReportTypeMetadata()
    };
  }

}
