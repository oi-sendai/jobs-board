var AuthLoginDirective = angular.module('AuthLoginDirective', []);

AuthLoginDirective.directive('systemauthlogin', function() {
    return {
        restrict: 'AE',
        replace: true,
        // controller:'AuthCtrl',
        templateUrl: 'application/system/auth/auth-login.html'
    };
});
