import { ReportMetadata } from "./types/reportMetadata";

export interface IReportType {
  getTypeName(): string;
  getReportTypeMetadata(): ReportMetadata;

}
