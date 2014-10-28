var StatsCtrl = angular.module('StatsCtrl', ['WeatherDirective']);

StatsCtrl.controller('StatsCtrl', ['$scope','$stateParams', function($scope,$stateParams) {
	console.log('StatsCtrl');
	$scope.username = $stateParams.username;
	$scope.stats = {
		'username': 'urbanquack',
		'location': 'Aberdeen, Scotland',
		'rating': 3
	};
}]);
