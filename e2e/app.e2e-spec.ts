import { ExtinfirePage } from './app.po';

describe('extinfire App', function() {
  let page: ExtinfirePage;

  beforeEach(() => {
    page = new ExtinfirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
