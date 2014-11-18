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

    factory.Messages = function (uid) {
    	return 'under development'
  	};

  	return factory;

}]);

SystemApp.factory("StateService", function($q, $stateParams, ProfileFactory) {
	var StateService = function(input){
		
		console.log(input);
		username =  input.username
					var defer = $q.defer();
		ProfileFactory.getUid(username).then(function(params){
			console.log()
			console.log('data', params)
			if(params !== 'error'){
				if( params.active ) {
					ProfileFactory.getUser(params.uid).then(function(user){
						console.log('user', user)
						if(user !== 'error'){
							// console.
							defer.resolve(user);
						} else {
							defer.resolve({username:'error'})
							return defer.promise
						}
					});
					return defer.promise
				}
				else {
					deferred.resolve({username:'This account is currently inactive'});
					return defer.promise
				}
			} 
			else {
				return ({username:'error'})
			}
		});
		return defer.promise
	}
	return StateService

});

	// var UserData = function(initData) {
	// 	console.log('also called')
	// 	console.log(initData)
	// 	if( initData === 'error' ){
	// 		return 'There is an error processing this page'
	// 	} 
	// 	else if( initData.active ) {
	// 		return ProfileFactory.getUser(initData.uid).then(function(data){
	// 			if(data !== 'error'){
	// 				return data;
	// 			} else {
	// 				return 'error'
	// 			}
	// 		});
	// 	}
	// 	else {
	// 		return 'This account is currently inactive'
	// 	}
	// };
