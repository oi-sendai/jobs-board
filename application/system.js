'use strict';

// Declare app level module which depends on filters, and services
var SystemApp = angular.module('SystemApp', 
	['ui.router','ngResource','ngAnimate','ui.bootstrap','ngRoute','firebase'
	// ,'AuthCtrl'
	,'HeaderCtrl'
	,'HeaderDirective'
	,'FooterCtrl'
	,'FooterDirective'
	// ,'ProfileCtrl'
	// ,'DreamsCtrl'
	// ,'SkillsCtrl'
	// ,'StatsCtrl'
	,'EditProfileCtrl'
	,'EditSkillsCtrl'
	,'CloudCtrl'
	,'CloudDirective'
	]);

SystemApp.factory('_', function() {
	return window._; // assumes underscore has already been loaded on the page
}); 

SystemApp.value('firebase_url', 'https://brilliant-fire-7870.firebaseio.com	'); 

SystemApp.config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider ) {
    
    var auth = {
    	name: 'auth',

	    // Make this state abstract so it can never be
    	// loaded directly
    	abstract: true,
    	// url:'/auth',
    	template: '<ui-view></ui-view>',
	   	resolve: {
	   		auth: ['CheckAuthStatus', function(CheckAuthStatus){
	   			console.log('called')
	   			console.log(CheckAuthStatus)
	   			console.log(CheckAuthStatus())
	   		}]
	   	} ,
    };

	var home = { 
	    name: 'auth.home',  //mandatory
	    templateUrl: 'application/home/home-layout.html',
	    abstract:true
	    // resolve: {
	    // 	auth: 'title'
	    // }
	};
	var homeLayout = { 
	    name: 'auth.home.layout',  //mandatory
	    url: '^/',
	    views:{
            'welcome':{
                templateUrl:'application/home/home-welcome.html',
            },
            'pitch': {
                templateUrl: 'application/home/home-pitch.html',
            }
        }
	};

	var account= { 
	    name: 'auth.account',  //mandatory
	    templateUrl: 'application/profile/profile-layout.html',
	    // controller: 'AuthCtrl',
	    // resolve: {

	    // }
	};
	var accountView = { 
	    name: 'auth.account.edit',  //mandatory
	    url: '^/account',
	    views:{
            'dreams':{
                templateUrl:'application/profile/edit-profile-dreams.html',
	    		controller: 'EditProfileCtrl'
                // controller: 'DreamsCtrl'
            },
            'stats':{
            	templateUrl: 'application/profile/edit-profile-stats.html',
	    		controller: 'EditSkillsCtrl'
                // controller: 'StatsCtrl'
            },
            'skills': {
            	templateUrl: 'application/profile/edit-profile-skills.html',
	    		controller: 'EditProfileCtrl'
                // controller: 'SkillsCtrl'
            }
        }
	};

	var profile= { 
	    name: 'auth.profile',  //mandatory
	    templateUrl: 'application/profile/profile-layout.html',
	};

	var profileView = { 
	    name: 'auth.profile.view',  //mandatory
	    url: '/profile/:username', 
	   	resolve: {
	   		user: ['$stateParams','ProfileByUid', function($stateParams, ProfileByUid){
	   			return ProfileByUid($stateParams.username);
	   		}]
	   	} ,
	    views:{
            'dreams':{
                templateUrl:'application/profile/profile-dreams.html',
                controller: 'ProfileCtrl'
            },
            'stats':{
            	templateUrl: 'application/profile/profile-stats.html',
                controller: 'ProfileCtrl'
            },
            'skills': {
            	templateUrl: 'application/profile/profile-skills.html',
                controller: 'ProfileCtrl'
            }
        }
	};

	$stateProvider
   	  .state(auth)
	  .state(home)
	  .state(homeLayout)
	  // .state(listings)
	  // .state(listingsLayout)
	  // .state(listingsShow)
	  .state(account)
	  .state(accountView)
	  .state(profile)
	  .state(profileView)
	  // .state(profileViewIntroduction)
	  // .state(profileViewExperience)
	;
	$urlRouterProvider.otherwise('/');


}]);

// var routeLoadingIndicator = function($rootScope){
//   return {
//     restrict:'E',
//     template:"<h1 ng-if='isRouteLoading'>Loading...</h1>",
//     link:function(scope, elem, attrs){
//       scope.isRouteLoading = false;

//       $rootScope.$on('$routeChangeStart', function(){
//         scope.isRouteLoading = true;
//       });

//       $rootScope.$on('$routeChangeSuccess', function(){
//         scope.isRouteLoading = false;
//       });
//     }
//   };
// };