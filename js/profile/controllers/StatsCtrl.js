console.log('StatsCtrl');
var StatsCtrl = angular.module('StatsCtrl', []);
StatsCtrl.controller('StatsCtrl', ['$scope', function($scope) {
	$scope.stats = {
		'username': 'urbanquack',
		'location': 'Aberdeen, Scotland',
		'rating': 3
	};
	//* eaching voted profile gets a vote per vote? */
}]);
