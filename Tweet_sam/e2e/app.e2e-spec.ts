import { TweetSamPage } from './app.po';

describe('tweet-sam App', function() {
  let page: TweetSamPage;

  beforeEach(() => {
    page = new TweetSamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
