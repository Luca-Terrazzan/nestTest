import { IReportType } from '../ireporttype';
import { Injectable } from '@nestjs/common';
import { ReportMetadata } from '../types/reportMetadata';

export class Courses implements IReportType {

  public getTypeName(): string {
    return 'Courses';
  }

  public getReportTypeMetadata(): ReportMetadata {
    return { test: 1 };
  }

}
