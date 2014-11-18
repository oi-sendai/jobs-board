var ProfileCtrl = angular.module('ProfileCtrl', []);

ProfileCtrl.controller('ProfileCtrl', ['$scope', '$stateParams', 'user', function($scope, $stateParams, user) {	
	$scope.user = user;
	$scope.uid 	= user.uid;
	$scope.username = user.username;
	$scope.profile = user.profile;
	$scope.skills = _.map(user.skills);


}]);

