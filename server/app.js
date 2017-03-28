var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var kayaks = require('./routes/kayak.js');

var mongoose = require('mongoose');
// Location of the database
var mongoURI = 'mongodb://localhost:27017/market';
// Make the connection
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(error){
  console.log('Connection error', error);
});

MongoDB.on('open', function(){
  console.log('Connected to Mongo.');
});

// Look for index.html in the public folder
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/kayaks', kayaks);

app.listen(port, function(){
  console.log("listening on port", port);
})
