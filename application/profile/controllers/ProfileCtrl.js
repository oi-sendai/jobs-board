var ProfileCtrl = angular.module('ProfileCtrl', []);

ProfileCtrl.controller('ProfileCtrl', ['$scope', '$stateParams', 'username', function($scope, $stateParams, username) {
	console.log(username)	

}]);

