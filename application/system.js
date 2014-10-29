'use strict';

// Declare app level module which depends on filters, and services
var SystemApp = angular.module('SystemApp', 
	['ui.router','ngResource','ngAnimate','ui.bootstrap','ngRoute','firebase'
	,'AuthCtrlSystem'
	,'HeaderCtrl'
	,'HeaderDirective'
	,'FooterCtrl'
	,'FooterDirective'
	,'ProfileCtrl'
	,'DreamsCtrl'
	,'SkillsCtrl'
	,'StatsCtrl'
	,'ListingsCtrl'
	]);

SystemApp.factory('_', function() {
	return window._; // assumes underscore has already been loaded on the page
});  

SystemApp.config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider ) {
    
	var home = { 
	    name: 'home',  //mandatory
	    templateUrl: 'application/home/home-layout.html',
	};
	var homeLayout = { 
	    name: 'home.layout',  //mandatory
	    url: '/',
	    views:{
            'welcome':{
                templateUrl:'application/home/home-welcome.html',
            },
            'pitch': {
                templateUrl: 'application/home/home-pitch.html',
            }
        }
	};
	// var homeLayout = { 
	//     name: 'home.register',  //mandatory
	//     url: '/register',
	//     views:{
 //            'welcome':{
 //                templateUrl:'application/system/register.html',
 //            },
 //        }
	// };
	var listings = { 
	    name: 'listings',  //mandatory
	    templateUrl: 'application/listings/listings-layout.html',
	};
	var listingsLayout = { 
	    name: 'listings.layout',  //mandatory
	    url: '/listings',
	    views:{
            'main':{
                templateUrl:'application/listings/listings-main.html',
                controller: 'ListingsCtrl' 
            },
            'sidebar': {
                templateUrl: 'application/listings/listings-sidebar.html',
                controller: 'ListingsCtrl' 
            }
        }
	};
	var listingsShow = { 
	    name: 'listings.show',  //mandatory
	    url: '/listings/:listing_id',
	    views:{
            'main':{
                templateUrl:'application/listings/listings-main.html',
                controller: 'ListingsCtrl' 
            },
            'sidebar': {
                templateUrl: 'application/listings/listings-sidebar.html',
                controller: 'ListingsCtrl' 
            }
        }
	};
	var profile= { 
	    name: 'profile',  //mandatory
	    templateUrl: 'application/profile/profile-layout.html',
	    controller: 'ProfileCtrl'
	};
	var profileView = { 
	    name: 'profile.view',  //mandatory
	    url: '/:username',
	    views:{
            'dreams':{
                templateUrl:'application/profile/profile-dreams.html',
                controller: 'DreamsCtrl'
            },
            'stats':{
            	templateUrl: 'application/profile/profile-stats.html',
                controller: 'StatsCtrl'
            },
            'skills': {
            	templateUrl: 'application/profile/profile-skills.html',
                controller: 'SkillsCtrl'

            }
        }
	};
	var profileViewExperience = { 
	    name: 'profile.view.experience',  //mandatory
	    url: '/experience',
	    views:{
            'dreamsInner':{
                templateUrl:'application/profile/tabs/profile-experience.html',
                controller: 'DreamsCtrl'
            },
        }
	};
	var profileViewIntroduction = { 
	    name: 'profile.view.introduction',  //mandatory
	    url: '/introduction',
	    views:{
            'dreamsInner':{
                templateUrl:'application/profile/tabs/profile-introduction.html',
                controller: 'DreamsCtrl'
            },
        }
	};
	var profileEdit = { 
	    name: 'profile.edit',  //mandatory
	    url: '/profile/i-want-to-cut-patterns', // :profilename
	    views:{
            'dreams':{
                template:'application/profile/edit-profile-dreams.html',
            },
            'stats':{
            	template: 'application/profile/edit-profile-stats.html' 
            },
            'skills': {
                template: 'application/profile/edit-profile-skills',
            }
        }
	};

	$stateProvider
	  .state(home)
	  .state(homeLayout)
	  .state(listings)
	  .state(listingsLayout)
	  .state(listingsShow)
	  .state(profile)
	  .state(profileView)
	  .state(profileViewIntroduction)
	  .state(profileViewExperience)
	  .state(profileEdit)
	;
	$urlRouterProvider.otherwise('/');


}]);