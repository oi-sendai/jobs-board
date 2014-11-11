describe("Unit: CloudCtrl", function() {
 
    var testScope;
 
    beforeEach(function (){
       module('SystemApp');
       inject(function($rootScope, $controller) {
          testScope = $rootScope.$new;
          $controller('CloudCtrl', {
              $scope: testScope
          });
       });
    });
 
 
 
    it('should load scope', function() {

        expect(testScope.debug).toEqual('CloudCtrl');
    });
});