var ListingsCtrl = angular.module('ListingsCtrl', []);
ListingsCtrl.controller('ListingsCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
	console.log('ListingsCtrl');

	$scope.currentListing = $stateParams.listing_id || 'Please select a listing';

	$scope.listings = [
		{	'username': 'me',
			'profile' : {
				'cv' : 'cv content',
				'cover' : 'cover-content'
			}
		},
		{	'username': 'urbanquack',
			'profile' : {
				'cv' : 'cv content',
				'cover' : 'cover-content'
			}
		},
		{	'username': 'i-want-to-cut-patterns',
			'profile' : {
				'cv' : 'cv content',
				'cover' : 'cover-content'
			}
		},
	]
	
}]);

