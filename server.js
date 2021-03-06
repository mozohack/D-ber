// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/indexdriver.html');
});

app.get('/user', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});
app.get('/driver', function(request, response) {
  response.sendFile(__dirname + '/indexdriver.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

var gun = (Gun = require('gun'))({web: require('http').createServer(Gun.serve(__dirname)).listen(8765) });