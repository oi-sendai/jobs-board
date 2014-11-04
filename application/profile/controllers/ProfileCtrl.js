var ProfileCtrl = angular.module('ProfileCtrl', []);

ProfileCtrl.controller('ProfileCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	// console.log('ProfileCtrl');
	$scope.user = 	{ 
		"username":"me",
		"name"   : { 
			"last" : "Kafka", 
			"first" : "Franz"
		}, 
		"profile": { 
			"Introduction" : "I know it might affect my art if I leave my Brotberuf but I really think I could be doing something better with my time",
			"Experience" : "Just a guy who writes short stories after work",
		},
		"stats": {
			"location" : "Prague, Czechoslovakia", 
			"website"  : "careersuici.de",
			"rating"   : 6, 
		},
		"skills": [
			{"name":"design", "tooltip": "Studied Product Desing & Innovation at University of Strathclyde"},
			{"name":"javascript", "tooltip": "MEAN"},
			{"name":"information architecture", "tooltip": "Is the structural design of shared information environment"},
			{"name":"php", "tooltip": "Is the structural design of shared information environment"},
			{"name":"command line", "tooltip": "Is the structural design of shared information environment"},
			{"name":"build tools", "tooltip": "Is the structural design of shared information environment"},
			{"name":"oop", "tooltip": "Is the structural design of shared information environment"},
			{"name":"magento", "tooltip": "Is the structural design of shared information environment"},
			{"name":"wordpress", "tooltip": "Is the structural design of shared information environment"},
			{"name":"design", "tooltip": "Studied Product Desing & Innovation at University of Strathclyde"},
			{"name":"javascript", "tooltip": "MEAN"},
			{"name":"information architecture", "tooltip": "Is the structural design of shared information environment"},
			{"name":"php", "tooltip": "Is the structural design of shared information environment"},
			{"name":"command line", "tooltip": "Is the structural design of shared information environment"},
			{"name":"build tools", "tooltip": "Is the structural design of shared information environment"},
			{"name":"oop", "tooltip": "Is the structural design of shared information environment"},
			{"name":"magento", "tooltip": "Is the structural design of shared information environment"},
			{"name":"wordpress", "tooltip": "Is the structural design of shared information environment"},
			{"name":"design", "tooltip": "Studied Product Desing & Innovation at University of Strathclyde"},
			{"name":"javascript", "tooltip": "MEAN"},
			{"name":"information architecture", "tooltip": "Is the structural design of shared information environment"},
			{"name":"php", "tooltip": "Is the structural design of shared information environment"},
			{"name":"command line", "tooltip": "Is the structural design of shared information environment"},
			{"name":"build tools", "tooltip": "Is the structural design of shared information environment"},
			{"name":"oop", "tooltip": "Is the structural design of shared information environment"},
			{"name":"magento", "tooltip": "Is the structural design of shared information environment"},
			{"name":"wordpress", "tooltip": "Is the structural design of shared information environment"},
		]

	};
}]);

