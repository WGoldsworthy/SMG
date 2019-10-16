Feature('Twitter App Search');

Scenario('Check Search @twitter',
  (I) => {
    I.amOnPage('http://localhost:3000');
    I.see('Search')
    I.waitForElement('#search-tweets');
    I.fillField('#search-tweets', 'Testing Twitter Search');
    I.waitForElement('.tweetRow')
  });
