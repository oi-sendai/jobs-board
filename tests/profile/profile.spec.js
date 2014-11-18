describe("Unit: ProfileCtrl", function() {
 
    var testScope;

    var ProfileCtrl, mockUserService, mockUsers, q, deferred;
 
    beforeEach( module( 'SystemApp' ) );
 
    beforeEach(function() {

      // mockUserObject = [
      //   { "username": "user3", "skills": [ {"name":"design"}, {"name":"javascript"}, {"name":"testing"} ] },
      //   { "username": "user2", "skills": [ {"name":"design"}, {"name":"javascript"}] },
      //   { "username": "user1", "skills": [ {"name":"design"}] }
      // ];
 
      // mockUserService = {
      //       users: function(){
      //         console.log(q);
      //           deferred = q.defer();
      //           deferred.resolve('data');
      //           return deferred.promise;
      //       }
      //   }
 
    });
 
    beforeEach( inject( function( $controller, _$q_, $rootScope, $stateParams ) {
        
        q = _$q_;
 
        testScope = $rootScope.$new();
         
        ProfileCtrl.UserInit = $controller( 'ProfileCtrl.UserInit', { 
            // CloudFactory: mockUserService, 
            user: 'this',
            $scope: testScope 
        });
         
    }));

    
    it('test(): should test stuff', function(){
      // spyOn(mockUserService, 'users').andCallThrough();
      expect(testScope).toBeDefined();
      // expect(mockUserService.users).toHaveBeenCalled();
    });

 
});