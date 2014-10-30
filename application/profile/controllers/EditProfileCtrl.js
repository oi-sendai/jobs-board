// 'use strict';
var EditProfileCtrl = angular.module('EditProfileCtrl', []);

EditProfileCtrl.controller('EditProfileCtrl', function(
    $resource,
    $scope, 
    $http,
    $stateParams,
    ProfileFactory
    ) { 

    $scope.debug = 'js/listing/EditProfileCtrl';
    $scope.class = 'account';
    $scope.formData = {};


    $scope.createProfile = function(){
        // ListingModel.insertListing($scope.formData).then(function(response) {
        // $scope.formData = {}; // clear the form so our user is ready to enter another
        // $scope.ingredients = response.data;
    }; 
});