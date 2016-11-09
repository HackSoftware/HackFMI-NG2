import { HackFMING2Page } from './app.po';

describe('hack-fmi-ng2 App', function() {
  let page: HackFMING2Page;

  beforeEach(() => {
    page = new HackFMING2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
