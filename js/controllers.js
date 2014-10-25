'use strict';

/* Controllers */

function MainCtrl($scope, $http, angularFire, angularFireAuth) {
	$scope.loginBusy = false;
	$scope.userData = $scope.userData || {};

	var ref = new Firebase('https://brilliant-fire-7870.firebaseio.com/');
	angularFireAuth.initialize(ref, {scope: $scope, name: 'user'});

	/*//////////////LOGIN - LOGOUT - REGISTER////////////////////*/
	
	$scope.login = function() {
		$scope.loginMessage = "";
		if ((angular.isDefined($scope.inputEmail) && $scope.inputEmail != "") && (angular.isDefined($scope.inputPassword) && $scope.inputPassword != "")) {
			$scope.loginBusy = true;
			angularFireAuth.login('password', {
				email: $scope.inputEmail,
				password: $scope.inputPassword
			});
		} else {
			$scope.loginMessage = "Please enter a username and password!";
		}
	};
	
	$scope.logout = function() {
		$scope.loginBusy = true;
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
			});
		} else	{
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
}
function DressingCtrl($scope, $http, angularFire, angularFireAuth) {
	console.log('somthign new');
	(function(){
	var max = 500;  
	console.log(max);
	$('.slider').slider({
	    min: 0,
	    max: 50,
	    slide: function (ev, ui) {
	        var total = ui.value;
	        $('.slider').not(this).each(function () {
	            total += $(this).slider('value');
	        })
	        if (total > 200) {
	            return false;
	        }
	        var dataTotal = $(this).data('total');
	        dataTotal = '#'+dataTotal;
	        console.log(dataTotal);
	        $(dataTotal).text(ui.value);
	        // $('#total').text(total);
	    }
	});
	// $('.seasoning').slider("option", "step", 1 );
	// $('.seasoning').slider("option", "max", 5 );
})(jQuery);




}
function DemoCtrl($scope, $http, angularFire, angularFireAuth) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
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
};
