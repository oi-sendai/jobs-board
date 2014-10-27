'use strict';

// Declare app level module which depends on filters, and services
var mainApp = angular.module('mainApp', 
	['firebase', 'ui.router','ngResource' ]);


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
                templateUrl:'js/listings/listings-main.html', 
                // template:'I want to cut patterns', // ie hates this trailing comma
            },
            'sidebar': {
                templateUrl: 'js/listings/listings-sidebar.html',
            }
        }
	};
	var profile= { 
	    name: 'profile',  //mandatory
	    templateUrl: 'js/profile/profile-layout.html',
	};
	var profileView = { 
	    name: 'profile.view',  //mandatory
	    url: '/i-want-to-cut-patterns', // :profilename
	    views:{
            'dreams':{
                templateUrl:'js/profile/profile-dreams.html',
            },
            'stats':{
            	templateUrl: 'js/profile/profile-stats.html',
            },
            'skills': {
            	templateUrl: 'js/profile/profile-skills.html',

            }
        }
	};
	var profileEdit = { 
	    name: 'profile.edit',  //mandatory
	    url: '/profile/i-want-to-cut-patterns', // :profilename
	    views:{
            'dreams':{
                template:'js/profile/edit-profile-dreams.html',
            },
            'stats':{
            	template: 'js/profile/edit-profile-stats.html' 
            },
            'skills': {
                template: 'js/profile/edit-profile-skills',
            }
        }
	};

	$stateProvider
	  .state(home)
	  .state(homeLayout)
	  .state(listings)
	  .state(listingsLayout)
	  .state(profile)
	  .state(profileView)
	  .state(profileEdit)
	;


}]);