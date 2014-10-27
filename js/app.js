'use strict';

// Declare app level module which depends on filters, and services
var mainApp = angular.module('mainApp', 
	['firebase', 'ui.router','ngResource','ngAnimate' ]);

// mainApp.config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'MainCtrl'});
//     $routeProvider.when('/dressing', {templateUrl: 'partials/dressing.html', controller: 'DressingCtrl'});
//     $routeProvider.otherwise({redirectTo: '/main'});
//   }]);

mainApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $uiViewScrollProvider, $anchorScrollProvider ) {

    // console.log($uiViewScrollProvider);
    // $uiViewScrollProvider.useAnchorScroll();
    // $anchorScrollProvider.disableAutoScrolling();
    // Public routes
    
	var home = { 
	    name: 'home',  //mandatory
	    templateUrl: 'js/home/home-layout.html',
	};
	var homeLayout = { 
	    name: 'home.layout',  //mandatory
	    url: '/',
	    views:{
            'welcome':{
                templateUrl:'js/home/home-welcome.html',
            },
            'pitch': {
                templateUrl: 'js/home/home-pitch.html',
            }
        }
	};
	var listings = { 
	    name: 'listings',  //mandatory
	    templateUrl: 'js/listings/listings-layout.html',
	};
	var listingsLayout = { 
	    name: 'listings.layout',  //mandatory
	    url: '/listings',
	    views:{
            'main':{
                template:'js/listings/listings-main.html',
            },
            'sidebar': {
                template: 'js/listings/listings-sidebar.html',
            }
        }
	};

	$stateProvider
	  .state(home)
	  .state(homeLayout)
	  .state(listings)
	  .state(listingsLayout)
	;


}]);