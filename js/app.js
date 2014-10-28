'use strict';

// Declare app level module which depends on filters, and services
var SystemApp = angular.module('SystemApp', 
	['ui.router','ngResource','ngAnimate','ui.bootstrap','ngRoute'
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


SystemApp.config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider ) {

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
                controller: 'ListingsCtrl' 
            },
            'sidebar': {
                templateUrl: 'js/listings/listings-sidebar.html',
                controller: 'ListingsCtrl' 
            }
        }
	};
	var listingsShow = { 
	    name: 'listings.show',  //mandatory
	    url: '/listings/:listing_id',
	    views:{
            'main':{
                templateUrl:'js/listings/listings-main.html',
                controller: 'ListingsCtrl' 
            },
            'sidebar': {
                templateUrl: 'js/listings/listings-sidebar.html',
                controller: 'ListingsCtrl' 
            }
        }
	};
	var profile= { 
	    name: 'profile',  //mandatory
	    templateUrl: 'js/profile/profile-layout.html',
	    controller: 'ProfileCtrl'
	};
	var profileView = { 
	    name: 'profile.view',  //mandatory
	    url: '/:username',
	    views:{
            'dreams':{
                templateUrl:'js/profile/profile-dreams.html',
                controller: 'DreamsCtrl'
            },
            'stats':{
            	templateUrl: 'js/profile/profile-stats.html',
                controller: 'StatsCtrl'
            },
            'skills': {
            	templateUrl: 'js/profile/profile-skills.html',
                controller: 'SkillsCtrl'

            }
        }
	};
	var profileViewExperience = { 
	    name: 'profile.view.experience',  //mandatory
	    url: '/experience',
	    views:{
            'dreamsInner':{
                templateUrl:'js/profile/tabs/profile-experience.html',
                controller: 'DreamsCtrl'
            },
        }
	};
	var profileViewIntroduction = { 
	    name: 'profile.view.introduction',  //mandatory
	    url: '/introduction',
	    views:{
            'dreamsInner':{
                templateUrl:'js/profile/tabs/profile-introduction.html',
                controller: 'DreamsCtrl'
            },
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
	  .state(listingsShow)
	  .state(profile)
	  .state(profileView)
	  .state(profileViewIntroduction)
	  .state(profileViewExperience)
	  .state(profileEdit)
	;


}]);