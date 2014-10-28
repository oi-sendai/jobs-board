var StatsCtrl = angular.module('StatsCtrl', ['WeatherDirective']);

StatsCtrl.controller('StatsCtrl', ['$scope', function($scope) {
	console.log('StatsCtrl');
	$scope.stats = {
		'username': 'urbanquack',
		'location': 'Aberdeen, Scotland',
		'rating': 3
	};
}]);
