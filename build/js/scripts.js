var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use('/app',express.static(__dirname+"/app"));
app.use('/node_modules',express.static(__dirname+"/node_modules"));

app.get('/',function(req,res) {
  console.log("loading angular mean stack app");

  res.sendfile('index.html');

});


// watching from grunt 

app.listen(2000);
console.log("server running on port 2000");

(function(){

angular.module('app',['ngAnimate','ui.router','ngMaterial'])

.config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('home',{
       url:'/',
         templateUrl:'app/home/home.html',
         controller:'GuessTheNumberController'
     });



})

}());
