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
