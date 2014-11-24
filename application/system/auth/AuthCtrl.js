
// var AuthCtrl = angular.module('AuthCtrl', ['firebase']);

var AuthCtrl = SystemApp.controller("AuthCtrl", function($rootScope, $scope, $http, $q, $firebase, $location
  , $state
  ,AuthFactory
  // ,authuser
  // ,authuserClient
  ) {
  // console.log('authuser',authuser)
  // $scope.loggedIn = authuser.logged;
  // $scope.username = authuser.uid;
  $scope.authData = $state.$current.locals.globals.authuser;
  $scope.logic = $state.$current.locals.globals.authuser || false;
console.log($state.$current.locals.globals.authuser)

  $rootScope.firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';
  $scope.registerData = {}
  $scope.loginData = {}
  $scope.newUser = false;

  var firebase_url = 'https://brilliant-fire-7870.firebaseio.com/';
    // Print the current login state whenever it changes
  var ref = new Firebase(firebase_url);

  var authClient = new FirebaseSimpleLogin(ref, function(error, user) {
    if (error !== null) {
      // console.log("Error authenticating:", error);
    } else if (user !== null && $scope.newUser) {
      console.log("New User is logged in:", user);
      $scope.saveNewUser(user); // save user to firebase
      $scope.newUser = false; // reset new user flag
      $rootScope.firebaseUser = user;
     //  $scope.$apply(function() {
     //    // $location.path('/list');
      // });
    } else if (user !== null) {
      console.log("User is logged in:", user);
      $rootScope.firebaseUser = user;
     //  $scope.$apply(function() {
      //     // $location.path('/list');
      // });

    } else {
      console.log("User is logged out");
     //   $scope.$apply(function() {
     //    // $location.path('/register');
      // });
    }
  });

  $scope.change = function(){
    
          $location.path('/list');
  };
  $scope.login = function(){
    
    var email = $scope.registerData.email;
    var password = $scope.registerData.password;
    AuthFactory.login(authClient, email, password);
    console.log('login');
    // $location.path('/#/list');
  };

  $scope.logout = function(){

    authClient.logout();  
  };

  $scope.register = function(){

    $scope.newUser = true;
    var email = $scope.registerData.email;
    var password = $scope.registerData.password;
    var username = $scope.registerData.username;
    $scope.uniqueUsername(username).then(function(exists){
      if(!exists) {
        console.log('creating new user')
        authClient.createUser(email, password, function(err, user) {
          AuthFactory.login(authClient, email, password);
        });
      } else {
        alert('try to be more original');
      }
    });
  };

  $scope.saveNewUser = function(user){
    var username = $scope.registerData.username;
    ref.child('users').child(user.uid).set({
          username: username,
          uid: user.uid
      });
      ref.child('listings').child(username).set({
        uid: user.uid,
          active: true
      });
      console.log('does it end here?');
      return;
  };

  $scope.uniqueUsername = function(username){
      
        var listings = new Firebase(firebase_url + 'listings');
        var exists = false;
        var deferred = $q.defer();
        listings.child(username).once('value', function(snapshot) {
            // console.log(snapshot.val);
              exists = (snapshot.val() !== null);
              // console.log(exists);
              deferred.resolve(exists);
        });
        return deferred.promise;
  };

});

AuthCtrl.loadData = function($q, $timeout, $firebase) {

    // var defer = $q.defer();
    // $timeout(function(){
    //   console.log('load data data');
    //   defer.resolve('data');
    // }, 2000);
    // return defer.promise;

    var deferred = $q.defer();
    var ref = new Firebase('https://brilliant-fire-7870.firebaseio.com/');
    var authClient = new FirebaseSimpleLogin(ref, function(error, user) {
      if (error !== null) {
        alter('eek!'); // handle error
      } 
      else if (user !== null) {
        console.log("woop:", user);
        var authuser =  {logged:true,info:user}
        deferred.resolve(authuser);
      } else {
        console.log("boo");
        var authuser =  {logged:false}
        deferred.resolve(authuser);
      }
    });

    return deferred.promise;
};
// AuthCtrlSystem.controller('UsersCtrl', function($rootScope, $scope, $http, $q, $firebase, AuthFactory) {
  
//   $scope.users = {};
//   $scope.profileData = {};

//   $scope.getUsers = function(){
//     AuthFactory.getUsers().then(function(data){
//       // console.log(data);
//       $scope.users = data;
//     });
//   };
//   $scope.getUsers();

//   $scope.updateProfile = function(){
//     var data = $scope.profileData.about|| {};
//     var uid = $rootScope.firebaseUser.uid;
//     var url =  $rootScope.firebase_url + 'users/' + uid;
//     var profile = new Firebase(url);
//         // console.log(url, data);
//         profile.update({profile: data});
//   };
//   $scope.getProfile = function(username){
//     var username = username;
//     AuthFactory.getProfile(username).then(function(data){
//       // console.log(data);
//       $scope.profile = data;
//     });
//     // AuthFactory.getUidByUsername(username).then(function(data){
//     //  console.log(data);
//     //  $scope.profile = data;
//     // });
//   };
//   $scope.getProfile('gogo');


// });





