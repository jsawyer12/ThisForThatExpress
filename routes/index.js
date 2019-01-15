var express = require('express');
var router = express.Router();

var _this = ["Skynet","Digital Music Distribution","FitBit","DollarShaveClub","Realtime Data","ManPacks","Initial Coin Offering","Blockchain","Cryptocurrency","Conversion Funnel","Social Network","Airbnb","SnapChat","Bang With Friends","HTML5 App","Google Analytics","Mapreduce Query","Node.js Server","KickStarter","Match.com","Adultfriendfinder","Pinterest","Amber Alert System","Groupon","Appstore","Digital Magazine","Distributed Social Network","Quadcopter Drone","Daring Fireball","Content Distribution Network","Analytics Platform","OpenTable","LinkedIn","Brick and Mortar Solution","Aggregator","React-Native App","ProductHunt","Foursquare","YouTube","WeedMaps","Texts From Last Night","Ponzi Scheme","1-800-Flowers","Cash4Gold","Online Marketplace","Viral Marketer","Wearable Computer","Google Glass App","Facebook Marketplace","Playboy","Cloud Storage Provider","Pandora","Green Tech Program","Eco-Friendly Marketplace","Netflix","Amazon","Zappos","Reddit","Enron","Wordpress","iPhone App","Android App","Meme Generator","Crowdsourcing App","TBH App","HQ Trivia","Apartment Guide","Social CRM","Database Abstraction Layer","API","New Social Platform","Tumblr","Deal Finder","CPA Ad Network","Collaborative Filter","Shopping Site","Slack","Soylent","Optimizely","Recommendation Engine","Neural Network","Tesseract OCR engine","Unreadable CAPTCHA","Mobile Ecosystem","Flickr","Salesforce.com","Twitter Filter","Wikipedia","Yelp"];

var _that = ["Facebook Platform","Erlang Enthusiasts","Collegiate Jewish Women","The Snapchat Generation","Ex-Girlfriends","Laundromats","Celebrity Gossip","Endangered Species","Pandas","Middle Schoolers","Alpha Phi Girls","Funeral Homes","Chinese Take-out","Ex-Convicts","Fast Casual Restaurants","Marketers","Qualifying Leads","Funeral Homes","Farmers","Cougars","Pilots","Gynecologists","Cracked iPhone Apps","Stolen Goods","Adult Dancers","Hunters","High-End Pornography","Sysadmins","Bath Salts","Nootropics","California","Gay Marriages","Government Corruption","Whiskey Lovers","Parking Tickets","Highway Accidents","Traveling","Airlines","Presentation Tools","Your Boss","Ponzi Schemes","Your Finances","Restroom Attendants","Your Aquarium","Your Cat's Litter Box","Pets","Alcoholics","Camp Counselors","Models","The Army","Cheap Vodka","Tech Incubators","Star Trek Conventions","Small Businesses","Beer","Nightclub Lines","Semi-Active Volcanoes","Attractive People","Ugly People","Sanctimonial Artifacts","Traveling Abroad","Your Mom","Billionaires","Happy Hours","Ugg Boots","The Homeless","Blacking Out","Red Wine","Christian Families","Social Outcasts","Surgeons","Sorority Chicks","Pounding Jagger Bombs","Medicinal Marijuana","Textbooks","Coffee Shops","Baristas"];

function randomThis(){
  return _this[Math.floor(Math.random()*_this.length)];
}
function randomThat(){
  return _that[Math.floor(Math.random()*_that.length)] + '!';
}

// get homepage
router.get('/', function(req, res) {
  var json = {
    "this" : randomThis(),
    "that" : randomThat()
  }
  res.render('index');
});

router.post('/', function(req, res) {
  var json = {
    "this" : randomThis(),
    "that" : randomThat()
  }
  res.send(json);
})

module.exports = router;
