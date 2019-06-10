console.log("The bot has started");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
//console.log(config);

tweetIt();


function tweetIt(){
var r =  Math.floor(Math.random()*100);
var tweet = { 
    status: 'Here is a random number of: ' + r
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) { 
    if (err) {
        console.log(err);
    }else{
        console.log("It Worked!");
    }
  }
}