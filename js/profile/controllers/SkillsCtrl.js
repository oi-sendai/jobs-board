var SkillsCtrl = angular.module('SkillsCtrl', []);

SkillsCtrl.controller('SkillsCtrl', ['$scope','$stateParams', function($scope,$stateParams) {
	console.log('SkillsCtrl');
	$scope.username = $stateParams.username;
	$scope.skills = [
	  	{ 'name':'sewing'
	  	,  'cat':'dressmaking'
	  	},
	  	{ 'name': 'pattern design'
	  	,  'cat':'dressmaking'
	  	},
	  	{ 'name': 'machine sewing'
	  	,  'cat':'dressmaking'
	  	},
	  	{ 'name': 'cutting'
	  	,  'cat':'dressmaking'
	  	}
	];
}]);

