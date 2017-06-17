import { PhukienthanhPage } from './app.po';

describe('phukienthanh App', function() {
  let page: PhukienthanhPage;

  beforeEach(() => {
    page = new PhukienthanhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
