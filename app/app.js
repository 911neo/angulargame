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
