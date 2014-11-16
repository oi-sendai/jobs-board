
SystemApp.factory("CloudFactory", function($rootScope, $q, $http, $firebase) {

  var factory = {};
  var helper = {};
  var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

  factory.users = function () {
		var endpoint = new Firebase(firebase_url + '/users');
		var deferred = $q.defer();
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot);
		});
		return deferred.promise;
  };

  return factory;

});
