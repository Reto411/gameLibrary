import { GameLibraryPage } from './app.po';

describe('game-library App', () => {
  let page: GameLibraryPage;

  beforeEach(() => {
    page = new GameLibraryPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
