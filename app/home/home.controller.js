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
