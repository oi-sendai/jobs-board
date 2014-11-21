SystemApp.factory("CloudFactory", function($rootScope, $q, $http, $firebase) {

  var factory = {};
  var helper = {};
  var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

  factory.users = function () {
		var endpoint = new Firebase(firebase_url + '/users');
    console.log('usersendnd---------', endpoint)
		var deferred = $q.defer();
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot);
		});
		return deferred.promise;
  };

  return factory;

});

angular.module('SystemApp').controller("cpc", function(CloudPersistance) {
	var LS = CloudPersistance;
  this.greeting = "This is a localstorage demo app";
  this.value = LS.getData();
  this.users   = LS.getData('cloud-users');
  this.skills  = LS.getData('cloud-skills');
  this.filters = LS.getData('cloud-filters');
  
  this.latestData = function() {
    return LS.getData();
  };

  this.update = function(val) {
    return LS.setData(val);
  };

  this.persistSkills = function(val) {
    return LS.setData(val, 'cloud-skills');
  };
  this.persistUsers = function(val) {
    return LS.setData(val, 'cloud-users');
  };
  this.persistFilters = function(val) {
    return LS.setFilters(val, 'cloud-filters');
  };

});

angular.module('SystemApp').factory("CloudPersistance", function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
    if (event.key === 'cloud-data') {
      $rootScope.$apply();
    }
    if (event.key === 'cloud-skills') {
      $rootScope.$apply();
    }
    if (event.key === 'cloud-users') {
      $rootScope.$apply();
    }
    if (event.key === 'cloud-filters') {
      $rootScope.$apply();
    }
  });
  return {
    setData: function(val, storageKey) {
      $window.localStorage && $window.localStorage.setItem(storageKey, val);
      return this;
    },
    getData: function(storageKey) {

      return $window.localStorage && $window.localStorage.getItem(storageKey);
    },

    // setSkills: function(val) {
    //   $window.localStorage && $window.localStorage.setItem('cloud-skills', val);
    //   return this;
    // },
    // getSkills: function() {

    //   return $window.localStorage && $window.localStorage.getItem('cloud-skills');
    // },

    // setFilters: function(val) {
    //   $window.localStorage && $window.localStorage.setItem('cloud-filters', val);
    //   return this;
    // },
    // getFilters: function() {
    //   return $window.localStorage && $window.localStorage.getItem('cloud-filters');
    // },
    
    // setUsers: function(val) {
    //   $window.localStorage && $window.localStorage.setItem('cloud-users', val);
    //   return this;
    // },
    // getUsers: function() {
    //   return $window.localStorage && $window.localStorage.getItem('cloud-users');
    // }


  };
});