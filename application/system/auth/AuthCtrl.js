var AuthCtrlSystem = angular.module('AuthCtrlSystem', []);



AuthCtrlSystem.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'application/system/auth/auth-modal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

AuthCtrlSystem.controller('ModalInstanceCtrl', function ($rootScope, $scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };
  $rootScope.$on('someEvent', function(event, args) {

    $modalInstance.close($scope.selected.item);
    
  });
  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

AuthCtrlSystem.controller("AuthCtrl", function($rootScope, $scope, $http,angularFire, angularFireAuth) {
    // now we can use $firebase to synchronize data between clients and the server!
  $scope.loginBusy = false;
  $scope.userData = $scope.userData || {};

  console.log('got this far');
  var ref = new Firebase('https://brilliant-fire-7870.firebaseio.com/');
  angularFireAuth.initialize(ref, {scope: $scope, name: 'user'});
  console.log('scope');
  /*//////////////LOGIN - LOGOUT - REGISTER////////////////////*/
  
  $scope.login = function() {
    $scope.loginMessage = "";
    if ((angular.isDefined($scope.inputEmail) && $scope.inputEmail != "") && (angular.isDefined($scope.inputPassword) && $scope.inputPassword != "")) {
      $scope.loginBusy = true;
      angularFireAuth.login('password', {
        email: $scope.inputEmail,
        password: $scope.inputPassword
      });
      $rootScope.$emit('someEvent');
    } else {
      $scope.loginMessage = "Please enter a username and password!";
    }
  };
  
  $scope.logout = function() {
    $scope.loginBusy = true;
    $scope.nowRegistered = false;
    $scope.loginMessage = "";
    $scope.greeting = "";
    $scope.disassociateUserData();
    $scope.userData = {};
    angularFireAuth.logout();
  };

  $scope.register = function() {
    $scope.loginMessage = "";
    if ((angular.isDefined($scope.inputEmail) && $scope.inputEmail != "") && (angular.isDefined($scope.inputPassword) && $scope.inputPassword != "")) {
      $scope.loginBusy = true;
      angularFireAuth.createUser($scope.inputEmail, $scope.inputPassword, function(err, user) {
        if (user) {
          console.log('New User Registered');
        }
        $scope.loginBusy = false;
        $scope.nowRegistered = true;
        // $rootScope.$emit('someEvent');
      });
    } else  {
      $scope.loginMessage = "Please enter a username and password!";
    }
  };
  
  $scope.$on('angularFireAuth:login', function(evt, user) {
    $scope.loginBusy = false;
    $scope.user = user;
    console.log("User is Logged In");
    angularFire(ref.child('users/' + $scope.user.id), $scope, 'userData').then(function(disassociate) {
      $scope.userData.name = $scope.userData.name || {};
      if (!$scope.userData.name.first) {
        $scope.greeting = "Hello!";
      } else {
        $scope.greeting = "Hello, " + $scope.userData.name.first + "!";
      }
      $scope.disassociateUserData = function() {
        disassociate();
      };
    });
  });
  
  $scope.$on('angularFireAuth:logout', function(evt) {
    $scope.loginBusy = false;
    $scope.user = {};
    console.log('User is Logged Out');
  });
  
  $scope.$on('angularFireAuth:error', function(evt, err) {
    $scope.greeting = "";
    $scope.loginBusy = false;
    $scope.loginMessage = "";
    console.log('Error: ' + err.code);
    switch(err.code) {
      case 'EMAIL_TAKEN':
        $scope.loginMessage = "That email address is already registered!";
        break;
      case 'INVALID_PASSWORD':
        $scope.loginMessage = "Invalid username + password";
    }
  });
});


// // a factory to create a re-usable profile object
// // we pass in a username and get back their synchronized data
// SystemApp.factory("Profile", ["$firebase", function($firebase) {
//   return function(username) {
//     // create a reference to the user's profile
//     var ref = new Firebase("https://brilliant-fire-7870.firebaseio.com/profiles/").child(username);

//     // return it as a synchronized object
//     return $firebase(ref).$asObject();
//   }
// }]);
