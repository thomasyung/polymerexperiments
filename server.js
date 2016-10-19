// server.js
// where your node app starts

// init project
var request = require('request');
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/meetupupcomingevents", function (req, res) {
  var group = (req.query.group)?req.query.group:"ux-design-matters-mn";
  var url = "https://api.meetup.com/"+group+"/events?"+process.env.SECRET;
  request(url, function (error, resp, body) {
    if (!error && resp.statusCode == 200) {
      data = JSON.parse(body);
      res.send(data);
    }
  });
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});