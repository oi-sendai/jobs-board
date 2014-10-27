console.log('DreamsCtrl');
// $scope.debug = 'console.log('DreamsContrl');';
var DreamsCtrl = angular.module('DreamsCtrl', []);
DreamsCtrl.controller('DreamsCtrl', ['$scope', function($scope) {
  $scope.user ={
		'name': 'urbanquack:',
		'message': 'I want to cut patterns'
	} 
}]);

