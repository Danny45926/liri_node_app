var action = process.argv[2];
var value = process.argv[3];
var Twitter = require("twitter");
var keys = require("./keys.js");
var client = new Twitter(keys.twitter);
var Spotify = require("node-spotify-api")
  var mySpotify = mySpotify({
  id: "573255d3dffa4fd88b97e536797c2ac3"
  secret: "26559d65167f4f3d9baeae6d4e4e679d"
  }
var params = {
  screen_name: 'JohnDoe08203578',
  count: 20
}
var request= require('request');
var fs = require('fs');



function spotifyNow(value) {

  if (value === null) {
    value = "The+Sign+Ace+of+Base";
  }

}

 request('https://api.spotify.com/v1/search?q=' + value + '&type=track', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      jsonBody = JSON.parse(body);
      console.log(' ');
      console.log('Artist: ' + jsonBody.tracks.items[0].artists[0].name);
      console.log('Song: ' + jsonBody.tracks.items[0].name);
      console.log('Preview Link: ' + jsonBody.tracks.items[0].preview_url);
      console.log('Album: ' + jsonBody.tracks.items[0].album.name);
      console.log(' ');


}

});

function omdbThis(value) {
  if (value === null) {
    value = "Mr. + Nobody";
  }

  request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece") {
    if (!error && response.statusCode == 200) {
      jsonBody = JSON.parse(body);
      console.log('Title: ' + jsonBody.Title);
      console.log('Year: ' + jsonBody.Year);
      console.log('IMDb Rating: ' + jsonBody.imdbRating);
      console.log('Country: ' + jsonBody.Country);
      console.log('Language: ' + jsonBody.Language);
      console.log('Plot: ' + jsonBody.Plot);
      console.log('Actors: ' + jsonBody.Actors); 
      console.log("The movie's Rotten Tomatoes Rating: " + JSON.parse(data)["tomatoRating"]);
      console.log("The movie's Rotten Tomatoes URL: " + JSON.parse(data)["tomatoURL"]); 
        fs.appendFile('log.txt', ('===== LOG ENTRY BEGIN =====\r\n' + Date() + '\r\n \r\nTERMINAL COMMANDS: ' + process.argv + '\r\nDATA OUTPUT:\r\n' + 'Title: ' + jsonBody.Title + '\r\nYear: ' + jsonBody.Year + '\r\nIMDb Rating: ' + jsonBody.imdbRating + '\r\nCountry: ' + jsonBody.Country + '\r\nLanguage: ' + jsonBody.Language + '\r\nPlot: ' + jsonBody.Plot + '\r\nActors: ' + jsonBody.Actors + '\r\n ===== LOG ENTRY END =====\r\n \r\n'), function(err) {
          if (err) throw err;
      });
  }
};


switch (action) {
  case 'myTweets';
  myTweets()
  break;

  case 'spotify':
    spotifyNow(value)
    break;

  case 'omdb':
    omdbThis(value)
    break;

  case 'random':
  random()
  break;
}
