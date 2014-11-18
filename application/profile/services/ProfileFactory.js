SystemApp.factory("ProfileFactory", ['$q','$firebase', function($q, $firebase) {

  var factory = {};
  var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';

  factory.getUid = function(username) {
  		var endpoint = new Firebase(firebase_url + 'listings/' + username);
		var deferred = $q.defer();
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot.val());
		}, function (err) {
			deferred.resolve('error');
		});
		return deferred.promise;
  }

  factory.getUser = function (uid) {
		var endpoint = new Firebase(firebase_url + '/users/' + uid);
		var deferred = $q.defer();
		endpoint.once('value', function(snapshot){
			deferred.resolve(snapshot.val());
		}, function (err) {
			deferred.resolve('error');
		});
		return deferred.promise;
  };

  return factory;

}]);