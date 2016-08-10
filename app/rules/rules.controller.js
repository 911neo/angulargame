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
