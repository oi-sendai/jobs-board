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

    // it('should return all skills held by users')
    // it('should count all duplicate skills')
    // it('should remove all users that dont have currently filtered skill')
    // it('should recount skills when filter is removed')