import { AngularStudyLoginPage } from './app.po';

describe('angular-study-login App', function() {
  let page: AngularStudyLoginPage;

  beforeEach(() => {
    page = new AngularStudyLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
