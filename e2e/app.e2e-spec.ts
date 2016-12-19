import { UiMoviesPage } from './app.po';

describe('ui-movies App', function() {
  let page: UiMoviesPage;

  beforeEach(() => {
    page = new UiMoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
