var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use('/app',express.static(__dirname+"/app"));
app.use('/node_modules',express.static(__dirname+"/node_modules"));
app.use('/bower_components',express.static(__dirname+"/bower_components"));


app.get('/',function(req,res) {
  console.log("loading angular mean stack app");

  res.sendfile('index.html');

});


// watching from grunt

app.listen(2000);
console.log("server running on port 2000");

(function(){
  angular.module('app')
    .controller('GuessTheNumberController', ['$scope', '$http', "$state", function GuessTheNumberController($scope){
    	$scope.verifyGuess = function () {
    		$scope.deviation = $scope.original - $scope.guess;
    		$scope.noOfTries = $scope.noOfTries + 1;
    		$scope.falseAnswer = $scope.deviaiton != 0;
    	}
    	$scope.initializeGame = function () {
    		$scope.noOfTries = 0;
    		$scope.original = Math.floor((Math.random() * 1000) + 1);
    		$scope.guess = null;
    		$scope.deviation = null;
    	}
    	$scope.initializeGame();
    }

    
















]);
}());

(function(){

angular.module('app',['angular-timeline','ngAnimate','ui.router','ngMaterial'])

.config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/');
     $stateProvider
     .state('rules',{
       url:'/',
         templateUrl:'app/rules/rules.html',
         controller:'rulescontroller'
     })
     .state('home',{
       url:'/home',
         templateUrl:'app/home/home.html',
         controller:'GuessTheNumberController'
     });



})

}());

(function(){

	var rulescontroller = function($rootScope, $document, $timeout, $scope) {


		$scope.side = '';

		$scope.events = [{
			badgeClass: 'info',
			badgeIconClass: 'glyphicon-check',
			title: 'Diabolocom Game Task',
			when: '11 hours ago via Twitter',
			content: 'Welcome to Diabolocom game task.'
		}, {
			badgeClass: 'info',
			badgeIconClass: 'glyphicon-check',
			title: 'Step 1',
			when: '11 hours ago via Twitter',
			content: 'Enter your guessed number and hit the guess button'
		}, {
			badgeClass: 'info',
			badgeIconClass: 'glyphicon-check',
			title: 'Step 2',
			when: '11 hours ago via Twitter',
			content: 'Try to get close to the number by guessing if its higher or lower',

		},

		{
			badgeClass: 'info',
			badgeIconClass: 'glyphicon-check',
			title: 'Step3',
			when: '11 hours ago via Twitter',
			content: 'Want to give it a try press the Play Now button',
			footerContentHtml: '<a href="">Continue Reading</a>'
		}];

		$scope.addEvent = function() {
			$scope.events.push({
				badgeClass: 'info',
				badgeIconClass: 'glyphicon-check',
				title: 'First heading',
				when: '3 hours ago via Twitter',
				content: 'Some awesome content.'
			});

		};
		// optional: not mandatory (uses angular-scroll-animate)
		$scope.animateElementIn = function($el) {
			$el.removeClass('timeline-hidden');
			$el.addClass('bounce-in');
		};

		// optional: not mandatory (uses angular-scroll-animate)
		$scope.animateElementOut = function($el) {
			$el.addClass('timeline-hidden');
			$el.removeClass('bounce-in');
		};

		$scope.leftAlign = function() {
			$scope.side = 'left';
		}

		$scope.rightAlign = function() {
			$scope.side = 'right';
		}

		$scope.defaultAlign = function() {
			$scope.side = ''; // or 'alternate'
		}
	};

	angular.module('app').controller('rulescontroller',rulescontroller);
}());
