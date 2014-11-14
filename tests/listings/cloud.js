describe("Unit: CloudCtrl", function() {
 
    var testScope;

    var CloudCtrl, $location, mockUserService, mockUsers, q, deferred;
 
    beforeEach( module( 'SystemApp' ) );
 
    beforeEach(function() {
 
      mockUsers = [
        { "username": "user3", "skills": [ {"name":"design"}, {"name":"javascript"}, {"name":"testing"} ] },
        { "username": "user2", "skills": [ {"name":"design"}, {"name":"javascript"}] },
        { "username": "user1", "skills": [ {"name":"design"}] }
      ];
 
      mockUserService = {
            fetchUsers: function(){
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
            UserFactory: mockUserService, 
            $scope: testScope 
        });
         
    }));

    
    it('init(): should return all skills held by users', function(){
      spyOn(mockUserService, 'fetchUsers').andCallThrough();
      testScope.init();
      expect(mockUserService.fetchUsers).toHaveBeenCalled();
      expect()
    });

    it('countSkills(): should add new skills to array', function(){
      testScope.rain = [] ;
      testScope.countSkills('javascript');
      expect(testScope.rain[0].text).toEqual('javascript');

    });

    it('countSkills(): should increment existing skill weighting', function(){
      testScope.rain = [{text:'javascript',weight:1}] ;
      testScope.countSkills('javascript');
      expect(testScope.rain[0].weight).toEqual(2);

    });
    // it('sumSkills(): should count skill density in user array', function(){

    // });
    // it('addFilter(filter); should run build again with one extra filter', function(){

    // });
    // it('removeFilter(filter); should run build again with one less filter', function(){

    // });
 
});
 
 
 
    // it('should load scope', function() {

    //     expect(testScope.debug).toEqual('CloudCtrl');
    // });

    // it('usersService(): should look for users with given skill set', function(){
    //     expect(returnObject).toBeDefined

    // });

      // $scope.users = [
      //   { "username": "user3", "skills": [ {"name":"design"}, {"name":"javascript"}, {"name":"testing"} ] },
      //   { "username": "user2", "skills": [ {"name":"design"}, {"name":"javascript"}] },
      //   { "username": "user1", "skills": [ {"name":"design"}] }
      // ]


      // if filter == testing
      //   return user3
      //   design(1), javascript(1)
      // if filter == design 
      //   return user3, user2, user1
      //   design(3), javascript(2), testing(1)
      // if filter == design && javascript
      //   return user3, user2
      //     testing(1)






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

