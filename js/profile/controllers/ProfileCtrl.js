var ProfileCtrl = angular.module('ProfileCtrl', []);

ProfileCtrl.controller('ProfileCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	console.log('ProfileCtrl');
	$scope.username = $stateParams.username;
	console.log($stateParams);
	console.log($scope.username);
}]);

