var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var Twit = require('twit');

var T = new Twit({
   consumer_key: process.env.CONSUMER_KEY,
   consumer_secret: process.env.CONSUMER_SECRET,
   access_token: process.env.ACCESS_TOKEN,
   access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})

var stream = T.stream('statuses/filter', { track: '#wheresISS' })

stream.on('tweet', function (tweet) {
  console.log(tweet);
});

var request = require('request');
request('http://api.open-notify.org/iss-now.json?callback=?', function (error, response, data) {
  if (!error && response.statusCode == 200) {
    console.log(data)
  }
})

