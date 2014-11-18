'use strict';

// Declare app level module which depends on filters, and services
var SystemApp = angular.module('SystemApp', 
	['ui.router','ngResource','ngAnimate','ui.bootstrap','ngRoute','firebase'
	,'AuthCtrl'
	,'HeaderCtrl'
	,'HeaderDirective'
	,'FooterCtrl'
	,'FooterDirective'
	,'ProfileCtrl'
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

SystemApp.value('firebase_url', 'https://brilliant-fire-7870.firebaseio.com/'); 

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

	var account= { 
	    name: 'account',  //mandatory
	    templateUrl: 'application/profile/profile-layout.html',
	    // controller: 'AuthCtrl',
	    // resolve: {

	    // }
	};
	var accountView = { 
	    name: 'account.edit',  //mandatory
	    url: '/account',
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
	    name: 'profile',  //mandatory
	    templateUrl: 'application/profile/profile-layout.html',
	};

	var profileView = { 
	    name: 'profile.view',  //mandatory
	    url: '/profile/:username', 
	   	resolve: {
	    	userData: ['$stateParams','ProfileFactory', function($stateParams, ProfileFactory) {
	    		var username = $stateParams.username;
	    		return ProfileFactory.getUid(username).then(function(data){
	    			if(data !== 'error'){
	    				return data;
	    			} else {
	    				return 'error'
	    			}
	    		});
         	}],
         	user: ['ProfileFactory', 'userData', function(ProfileFactory, userData) {
	    		if( userData === 'error' ){
	    			return 'There is an error processing this page'
	    		} 
	    		else if( userData.active ) {
	    			return ProfileFactory.getUser(userData.uid).then(function(data){
		    			if(data !== 'error'){
		    				return data;
		    			} else {
		    				return 'error'
		    			}
		    		});
	    		}
	    		else {
	    			return 'This account is currently inactive'
	    		}
         	}],
        },
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
	// #################################################
	// var profileView = { 
	//     name: 'profile.me',  //mandatory
	//     url: '/me', // !! This must be loaded after other routes !!
	//     views:{
 //            'dreams':{
 //                templateUrl:'application/profile/me.html',
 //                controller: 'MeCtrl'
 //            },
 //            'stats':{
 //            	templateUrl: 'application/profile/profile-stats.html',
 //                controller: 'StatsCtrl'
 //            },
 //            'skills': {
 //            	templateUrl: 'application/profile/profile-skills.html',
 //                controller: 'SkillsCtrl'

 //            }
 //        };
      //   var profileView = { 
		    // name: 'profile.franzkafka',  //mandatory
		    // url: '/franzkafka', // !! This must be loaded after other routes !!
		    // views:{
	     //        'dreams':{
	     //            templateUrl:'application/games/taste-test.html',
	     //            controller: 'TasteTest'
	     //        },
	     //        'stats':{
	     //        	templateUrl: 'application/profile/profile-stats.html',
	     //            controller: 'StatsCtrl'
	     //        },
	     //        'skills': {
	     //        	templateUrl: 'application/profile/profile-skills.html',
	     //            controller: 'SkillsCtrl'

	     //        }
      //   };

     //    	var profileView = { 
	    // name: 'profile.view',  //mandatory
	    // url: '/:username', // !! This must be loaded after other routes !!
	    // views:{
     //        'dreams':{
     //            templateUrl:'application/profile/profile-dreams.html',
     //            controller: 'DreamsCtrl'
     //        },
     //        'stats':{
     //        	templateUrl: 'application/profile/profile-stats.html',
     //            controller: 'StatsCtrl'
     //        },
     //        'skills': {
     //        	templateUrl: 'application/profile/profile-skills.html',
     //            controller: 'SkillsCtrl'

     //        }
     //    } ####################################################
     
	// var profileViewExperience = { 
	//     name: 'profile.view.experience',  //mandatory
	//     url: '/experience',
	//     views:{
 //            'dreamsInner':{
 //                templateUrl:'application/profile/tabs/profile-experience.html',
 //                controller: 'DreamsCtrl'
 //            },
 //        }
	// };
	// var profileViewIntroduction = { 
	//     name: 'profile.view.introduction',  //mandatory
	//     url: '/introduction',
	//     views:{
 //            'dreamsInner':{
 //                templateUrl:'application/profile/tabs/profile-introduction.html',
 //                controller: 'DreamsCtrl'
 //            },
 //        }
	// };

	$stateProvider
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

var routeLoadingIndicator = function($rootScope){
  return {
    restrict:'E',
    template:"<h1 ng-if='isRouteLoading'>Loading...</h1>",
    link:function(scope, elem, attrs){
      scope.isRouteLoading = false;

      $rootScope.$on('$routeChangeStart', function(){
        scope.isRouteLoading = true;
      });

      $rootScope.$on('$routeChangeSuccess', function(){
        scope.isRouteLoading = false;
      });
    }
  };
};