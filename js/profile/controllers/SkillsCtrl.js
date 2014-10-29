var SkillsCtrl = angular.module('SkillsCtrl', []);

SkillsCtrl.controller('SkillsCtrl', ['$scope','$stateParams', function($scope,$stateParams) {
	$scope.username = $stateParams.username;
	$scope.skills = [
	  	{ 
	  		'text'  :'sewing',
	  	    'weight':'3'
	  	},
	  	{ 
	  		'text'  : 'pattern design',
	  	    'weight':'5'
	  	},
	  	{ 
	  		'text' : 'machine sewing',
	  	    'cat'  :'8'
	  	},
	  	{ 
	  		'text' : 'cutting',
	  	    'cat'  : '1'
	  	}
	];
}]);

