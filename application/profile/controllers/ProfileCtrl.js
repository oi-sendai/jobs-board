var ProfileCtrl = angular.module('ProfileCtrl', []);

ProfileCtrl.controller('ProfileCtrl', ['$scope', '$stateParams', 'user', function($scope, $stateParams, user) {	
	$scope.user = user;
	$scope.uid 	= user.uid;
	$scope.username = user.username;
	$scope.profile = user.profile;
	$scope.skills = _.map(user.skills);


}]);

ProfileCtrl.UserInit = ['$stateParams','ProfileFactory', function($stateParams, ProfileFactory) {
	var username = $stateParams.username;
	return ProfileFactory.getUid(username).then(function(data){
		if(data !== 'error'){
			return data;
		} else {
			return 'error'
		}
	});
}];

ProfileCtrl.UserData = ['ProfileFactory', 'userInit', function(ProfileFactory, userInit) {
	if( userInit === 'error' ){
		return 'There is an error processing this page'
	} 
	else if( userInit.active ) {
		return ProfileFactory.getUser(userInit.uid).then(function(data){
			if(data !== 'error'){
				return data;
			} else {
				return 'error'
			}
		});
	}
	else {
		return 'This account is currently inactive'
	}
}];

