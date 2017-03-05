import { EzoomctrlPage } from './app.po';

describe('ezoomctrl App', function() {
  let page: EzoomctrlPage;

  beforeEach(() => {
    page = new EzoomctrlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
