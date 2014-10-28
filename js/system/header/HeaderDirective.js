var HeaderDirective = angular.module('HeaderDirective', []);

HeaderDirective.directive('systemheader', function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'js/system/header/header.html'
    };
});
