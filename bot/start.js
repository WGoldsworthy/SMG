var Twitter = require('twitter');
const express = require('express');
const cors = require('cors');
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
	q: 'giveaway -filter:retweets',
	tweet_mode: 'extended'
};

function printTweet(tweet) {
	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
	console.log(tweet.full_text)
}

var searchTweets = new Promise(function(resolve, reject) {
  client.get('search/tweets.json', params, function(error, tweets, response) {
    var tweetTextResponse = [];
    if (!error) {
      tweets.statuses.forEach(tweet => {
        tweetTextResponse.push(tweet.full_text)
      })

      console.log(tweetTextResponse)
      resolve(tweetTextResponse);
    }
  });
});

app.get('/search', (req, res) => {
  searchTweets.then(function(tweets) {
    const response = {
      tweets: tweets
    }
    res.send(response);
  });
})

app.listen(port, () => console.log(`App listening ong port: ${port}`))