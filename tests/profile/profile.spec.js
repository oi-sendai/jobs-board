describe("Unit: ProfileCtrl", function() {
 
    var testScope;

    var ProfileCtrl, mockUserService, mockUsers, q, deferred;

    var activeUser;
    var inActiveUser;
 
    beforeEach( module( 'SystemApp' ) );
 
    beforeEach(function() {
 
    	activeUser = {ative:'true', uid:'123abc'};
    	inActiveUser = {ative:'true', uid:'123abc'};
    	}
      mockUserObject = [
        { "username": "user3", "skills": [ {"name":"design"}, {"name":"javascript"}, {"name":"testing"} ] },
        { "username": "user2", "skills": [ {"name":"design"}, {"name":"javascript"}] },
        { "username": "user1", "skills": [ {"name":"design"}] }
      ];
 
      mockUserService = {
            users: function(){
              console.log(q);
                deferred = q.defer();
                deferred.resolve('data');
                return deferred.promise;
            }
        }
 
    });
 
    beforeEach( inject( function( $controller, _$q_, $rootScope ) {
                q = _$q_;
 
        testScope = $rootScope.$new();
         
        CloudCtrl = $controller( 'CloudCtrl', { 
            CloudFactory: mockUserService, 
            $scope: testScope 
        });
         
    }));

    
    it('init(): should return all skills held by users', function(){
      spyOn(mockUserService, 'users').andCallThrough();
      testScope.init();
      expect(mockUserService.users).toHaveBeenCalled();
    });

 
});