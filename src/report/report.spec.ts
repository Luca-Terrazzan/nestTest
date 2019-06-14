import { Report } from './report';
import { Users } from './reportTypes/users';
import { Courses } from './reportTypes/courses';

describe('Report', () => {
  const report = new Report<Users, Courses>(new Users(), new Courses());

  it('Should have a report type name', () => {
    expect(report.getReportMetadata()).toBeDefined();
  });

});
