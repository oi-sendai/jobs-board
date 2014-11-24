// var AuthCtrlSystem = angular.module('AuthCtrlSystem', ['ngRoute','firebase']);

// AuthCtrlSystem.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

//   $scope.items = ['item1', 'item2', 'item3'];

//   $scope.open = function (size) {

//     var modalInstance = $modal.open({
//       templateUrl: 'application/system/auth/auth-modal.html',
//       controller: 'ModalInstanceCtrl',
//       size: size,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });

//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };
// });

// AuthCtrlSystem.controller('ModalInstanceCtrl', function ($rootScope, $scope, $modalInstance, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };
//   $rootScope.$on('someEvent', function(event, args) {

//     $modalInstance.close($scope.selected.item);
    
//   });
//   $scope.ok = function () {
//     $modalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
// });