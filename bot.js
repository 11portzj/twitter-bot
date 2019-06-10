console.log("The bot has started");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
//console.log(config);

var params = { 
    q: 'rainbow', 
    count: 2 
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) { 
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text)
    }
  }