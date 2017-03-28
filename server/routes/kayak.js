var express = require('express');
var router = express.Router();

// No need to re-connect but we do need the mongoose object
var mongoose = require('mongoose');

var KayakSchema = mongoose.Schema({
  make : String,
  model : String,
  price : Number,
  quantity : Number
});

//Collection that points to a schema which dictates how documents are saved.
var Kayak = mongoose.model('Kayaks', KayakSchema);

router.get('/', function(req, res){
  // TASK 1: BEGIN
  

  // TASK 1: END
});

router.post('/add', function(req, res){
  // TASK 2: BEGIN


  // TASK 2: END
});

router.put('/like/:id', function(req, res){
  // TASK 3: BEGIN


  // TASK 3: END
});

router.get('/search/:term', function(req, res){
  // TASK 4: BEGIN


  // TASK 4: END
});

router.delete('/delete/:id', function(req, res){
  // TASK 5: BEGIN


  // TASK 5: END
});

router.put('/buy/:id', function(req, res){
  // TASK 6: BEGIN


  // TASK 6: END
});

router.put('/restock/:id', function(req, res){
  // TASK 7: BEGIN


  // TASK 7: END
});

module.exports = router;
