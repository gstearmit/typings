import { AppmobilePage } from './app.po';

describe('appmobile App', function() {
  let page: AppmobilePage;

  beforeEach(() => {
    page = new AppmobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
