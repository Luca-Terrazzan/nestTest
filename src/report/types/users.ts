import { IReportType } from '../ireporttype';

export class User implements IReportType {
  public getTypeName(): string {
    return 'Users';
  }
}
