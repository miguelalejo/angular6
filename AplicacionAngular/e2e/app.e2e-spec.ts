import { AplicacionAngularPage } from './app.po';

describe('aplicacion-angular App', () => {
  let page: AplicacionAngularPage;

  beforeEach(() => {
    page = new AplicacionAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
