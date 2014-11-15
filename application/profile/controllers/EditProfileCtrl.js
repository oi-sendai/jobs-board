// 'use strict';
var EditProfileCtrl = angular.module('EditProfileCtrl', ['ngAnimate']);

EditProfileCtrl.controller('EditProfileCtrl', function(
    $resource,
    $scope, 
    $http,
    $stateParams
    // ProfileFactory
    ) { 

    // $scope.debug = 'js/listing/EditProfileCtrl';
    // $scope.class = 'account';
    // $scope.formData = {};

    // $scope.skillData = {};

    // $scope.editswitch =  false;
 //    $scope.user = 	{ 
	// 	"username":"me",
	// 	"name"   : { 
	// 		"last" : "Kafka", 
	// 		"first" : "Franz"
	// 	}, 
	// 	"profile": { 
	// 		"Introduction" : "I know it might affect my art if I leave my Brotberuf but I really think I could be doing something better with my time",
	// 		"Experience" : "Just a guy who writes short stories after work",
	// 	},
	// 	"stats": {
	// 		"location" : "Prague, Czechoslovakia", 
	// 		"website"  : "careersuici.de",
	// 		"rating"   : 6, 
	// 	},
	// 	"skills": [
	// 		{"name":"design", "tooltip": "Studied Product Desing & Innovation at University of Strathclyde"},
	// 		{"name":"javascript", "tooltip": "MEAN"},
	// 		{"name":"information architecture", "tooltip": "Is the structural design of shared information environment"}
	// 	]

	// };


    // $scope.createProfile = function(){
    //     // ListingModel.insertListing($scope.formData).then(function(response) {
    //     // $scope.formData = {}; // clear the form so our user is ready to enter another
    //     // $scope.ingredients = response.data;
    // }; 
    // $scope.addItem = function(){
    // 	newSkill = {"name":$scope.skillData.newItem, "tooltip":""};
    // 	$scope.user.skills.push(newSkill);
    // 	$scope.skillData = {}
    // }
});