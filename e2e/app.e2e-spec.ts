import { ArmPage } from './app.po';

describe('arm App', () => {
  let page: ArmPage;

  beforeEach(() => {
    page = new ArmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
