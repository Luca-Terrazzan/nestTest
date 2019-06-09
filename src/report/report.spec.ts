import { Report } from './report';
import { Users } from './reportTypes/users';

describe('Report', () => {
  const report = new Report<Users>(new Users());

  it('Should have a report type name', () => {
    expect(report.getReportTypeName()).toBeDefined();
  });

});
