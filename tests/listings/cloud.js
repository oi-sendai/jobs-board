describe("Unit: CloudCtrl", function() {
 
    var testScope;

    var testData
 
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

    // 

    //   take array of users 
    // get all skills (skill counting seperate)
    //   display


    //   take array of users
    // get all users with desired skill
    //   display
    // get all other skills held by users with desired skill
    //   display
    // create a list of desired skills
    //   refresh display
    // allow removal of desired from list
    //   refresh displa 

    //   take array of users
    // get all users with all desired skills
    //   display
    // it('should not return user without desired skill')

