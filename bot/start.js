var Twitter = require('twitter');
const express = require('express');
const cors = require('cors');
const automator = require('./automator');
const readTests = require('./tests/readTests');
const app = express();
const port = 3001;

app.use(cors());

const client = new Twitter({
  consumer_key: '5bj9IHxE0ZsdtHZGDCSMuCQwo',
  consumer_secret: 'fYduoWLjRoxmoky8gxMbuE9gm6GmwdIzDNYM7IqOb6f08LPwtm',
  access_token_key: '912337569081364480-tVb4lFcgXcJmkPw7TnEXsQTSPuXL1kb',
  access_token_secret: 'opSFB9hkrT4zi29QArCJNmVLnGsilIQjPaRwLjoVOROF8'
});
 
var params = {
	q: 'giveaway -filter:retweets exclude:replies',
	tweet_mode: 'extended'
};

/*
  Tweet object Structure
  {
    text: String,
    hasLink: Boolean,
    linkUrl: String (optional)
    isFollow: Boolean,
    isRetweet: Boolean,
    isLike: Boolean,
    isTagFriend: Boolean,
    isComment: Boolean,
    commentString: String (optional)
  }
*/

function processTweet(tweet) {
  const processedTweet = {
    text: tweet.full_text
  };

  const tweetString = tweet.full_text.toLowerCase();

  processedTweet.date = tweet.created_at;

  if (tweet.entities.urls.length >= 1) {
    processedTweet.hasLink = true;
    processedTweet.linkUrl = tweet.entities.urls[0];
  }

  if (tweetString.includes("follow") ) {
    processedTweet.isFollow = true;
  }

  if (tweetString.includes("retweet") || tweet.full_text.toLowerCase().includes("rt ") ) {
    processedTweet.isRetweet = true;
  }

  if (tweetString.includes("like") ) {
    processedTweet.isLike = true;
  }

  if (tweetString.includes("tag") ) {
    processedTweet.isTagFriend = true;
  }

  if (tweetString.includes("comment") ) {
    processedTweet.isComment = true;
  }

  return processedTweet;
}

var searchTweets = (query) => new Promise(function(resolve, reject) {

  var params = {
  q: query + ' giveaway -filter:retweets exclude:replies',
  tweet_mode: 'extended'
  };
  client.get('search/tweets.json', params, function(error, tweets, response) {
    var tweetTextResponse = [];
    var processedTweets = [];
    if (!error) {
      tweets.statuses.forEach(tweet => {
        // console.log(tweet)
        processedTweets.push(processTweet(tweet));
      })
      resolve(processedTweets);
    }
  });
});

app.get('/search', (req, res) => {
  var query = req.query.query;
  searchTweets(query).then(function(tweets) {
    const response = {
      tweets: tweets
    }
    res.send(response);
  });
})

app.post('/automate', (req, res) => {
  // console.log(req)
  console.log("Automate Request Received.")
  automator.automate();
})

app.get('/tests/scenarios', (req, res) => {
  let scenarios = readTests.read();
  res.send(scenarios);
})

app.listen(port, () => console.log(`App listening on port: ${port}`))