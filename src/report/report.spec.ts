import { Test, TestingModule } from '@nestjs/testing';
import { Report } from './report';
import { User } from './types/users';

describe('Report', () => {
  const report = new Report<User>(new User());

  it('Should have a report type name', () => {
    expect(report.getReportTypeName()).toEqual('Users');
  });

});
