console.log('StatsCtrl');
var StatsCtrl = angular.module('StatsCtrl', ['WeatherDirective']);
StatsCtrl.controller('StatsCtrl', ['$scope', function($scope) {
	$scope.stats = {
		'username': 'urbanquack',
		'location': 'Aberdeen, Scotland',
		'rating': 3
	};
}]);
