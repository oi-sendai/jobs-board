console.log('DreamsCtrl');
// $scope.debug = 'console.log('DreamsContrl');';
SystemApp.controller('DreamsCtrl', ['$scope', function($scope){
	$scope.user ={
		'name': 'urbanquack:',
		'message': 'I want to cut patterns'
	}
}]);
// shoprShop.controller('NavCtrl', ['$rootScope', '$scope', '$location', 'Auth', function($rootScope, $scope, $location, Auth) {
//     $scope.user = Auth.user;
//     $scope.userRoles = Auth.userRoles;
//     $scope.accessLevels = Auth.accessLevels;

//     $scope.logout = function() {
//         console.log('logout')
//         Auth.logout(function() {
//             $location.path('/');
//         }, function() {
//             $rootScope.error = "Failed to logout";
//         });
//     };
// }]);
