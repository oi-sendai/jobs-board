console.log('SkillsCtrl');
var SkillsCtrl = angular.module('SkillsCtrl', []);
SkillsCtrl.controller('SkillsCtrl', ['$scope', function($scope) {
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

