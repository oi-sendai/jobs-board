var DreamsCtrl = angular.module('DreamsCtrl', []);

DreamsCtrl.controller('DreamsCtrl', ['$scope','$stateParams', function($scope,$stateParams) {
	console.log('DreamsCtrl');

$scope.username = $stateParams.username;

  	$scope.user ={
		'name': 'urbanquack:',
		'coverletter': '<h3>I want to cut patterns</h3><p>Or something. Designing and manufacturing clothes is what I do best and it is what I love to do. I only have the experience I have given myself so I do not expect to be put in the design department from day one.</p>',
		'cv': '<h3>A wisywig object</p>'
	} 
}]);

