SystemApp.factory('UserFactory', function() {
	var debug = 'profile factory';
	var factory = {};

	factory.fetchUsers = function(){
		return debug;
	};
	return factory
}); 

CloudCtrl = angular.module('CloudCtrl', []);

CloudCtrl.controller('CloudCtrl', function($scope, _
	,UserFactory
	){
	// $scope.keepArray = false; //{skill:'',value:'0'}
	$scope.debug = 'CloudCtrl';
	$scope.users = [

		{	"username": "franz-kafka",
			"skills": [
			{"name":"polite"},
			{"name":"javascript"},
			{"name":"insurance broker","tooltip":"mongoose does this out the box"}
			]
		},
		{	"username":"me",
			"skills": [
			{"name":"hardworking"},
			{"name":"design"},
			{"name":"sewing"},
			{"name":"javascript"},
			{"name":"information architecture"}
			]
		},
		{
			"username": "another-user",
			"skills": [
			{"name":"hardworking"},
			{"name":"design"},
			{"name":"italian"},
			{"name":"javascript"},
			{"name":"design"}
			]
		},
		{
			"username": "more-data",
			"skills": [
			{"name":"hardworking"},
			{"name":"design"},
			{"name":"design"}
			]
		},
		{
			"username": "even-more",
			"skills": [
			{"name":"javascript"},
			{"name":"design"},
			{"name":"polite"}
			]
		}
	];

	// if word inArray is truthy push array to array
	console.log(UserFactory);

	$scope.activeFilters = [];
	$scope.apiMockArray = [];

	// test 1
	$scope.gatherSkills = function(){
		console.log(UserFactory.fetchUsers());
		UserFactory.fetchUsers();
	};

	$scope.activeSkills = []; // will be used to to pass data to repeat on view
	// for each skillsArray 
	$scope.sumSkills = function(users){
		// Reset mock array ready for iteration
		var activeSkills = [];
		// this is the array of skillName / numberOfPeople with skill
		var cloudArray = []; 
		// array object of user skill sets passed to function 
		var users = users; //expect array
		console.log('user passed to function', users);

		// iterate over users - should probably use underscore for support
		users.forEach( function (userObject) {
			// store the array of skills held by current user
			var skillsArray = userObject.skills;
			// iterate again
			skillsArray.forEach( function (skill){
				// store the skill in a variable
				var skillName = skill.name;

				console.log('$scope.activeFilters', $scope.activeFilters);

				// pluck array of values stored against the 'name' key of the activeSkills object array
				// and return true if plucked array contains current skill name
				var existingSkill = _.contains(_.pluck(activeSkills, 'name'), skillName);
				console.log('existingSkill', existingSkill);
				
				// return array of value stored against the 'name' key of the activeSkills object array
				// and return true if plucked array contains current skill name
				var alreadyFilteredSkill = _.contains(_.pluck($scope.activeFilters, 'name'), skillName);
				console.log('alreadyFilteredSkill', alreadyFilteredSkill);

				if(alreadyFilteredSkill ){
					console.log('nothing else');
				} 
				else if(existingSkill){
					// _.find($scope.activeSkills)
					// console.log('number++');
					var existingObject = _.select(activeSkills, function(obj){
					    return obj.name === skillName; // this returns array - why?
					});
					// console.log(existingObject[0]); // hacky stuff
					// console.log(existingObject['value']);
					var incrementThis = existingObject[0].value;
					// console.log(incrementThis);
					incrementThis++;
					existingObject[0].value = incrementThis; 
					// console.log(existingObject);
				} 
				else {
					activeSkills.push({name:skillName,value:1});
				}
				console.log(activeSkills);
				$scope.activeSkills = activeSkills;

			});
		});
	};
	$scope.sumSkills($scope.users); // mocks service call
	
	$scope.filterSkills = function(skill) {
		$scope.hasSkillArray = [];
		console.log(skill);
		var skillName = skill.name;
		var users = $scope.users;
		users.forEach( function (userObject){
			var hasSkill  = _.contains(_.pluck(userObject.skills, 'name'), skillName);
			// console.log(hasSkill);
			// console.log(userObject);
			if(hasSkill){
				$scope.hasSkillArray.push(userObject);
			} else {

			}
		});

		// Add skill to active skills array
		$scope.activeFilters.push(skill);
		// run new array through main cloud logic

		$scope.sumSkills($scope.hasSkillArray);
		// update scope with filtered candidates
		$scope.filteredCandidatesArray = $scope.hasSkillArray;
	};


	$scope.removeFilter = function(skill) {
		alert('this feature is under development, please refresh the page to start again');
		// // $scope.activeFilters.remove(skill);
		// console.log($scope.activeFilters);
		// 		_.select($scope.activeFilters, function(obj){
		// 	console.log(obj);
		// 			    // return obj.name === skillName; // this returns array - why?
		// });

		// $scope.sumSkills($scope.hasSkillArray);
	}
});




		// 	var golf = arrayItem.skills;
		// 	// _.uniq(personArray, function(person) { return person.age; });
		// 	_.each(cloudArray, boom)
		// 	// golf.forEach( function (skill){
		// 	// 	if(!$scope.keepArray) {

		// 	// 	}
		// 	// 	// var skill = _.map(skill);
		// 	// 	console.log(skill.name);
		// 	// 	// if(jQuery.inArray(skill, cloudArray)!==-1){
		// 	// // 		console.log('true');
		// 	// // 	} else {
		// 	// // 		cloudArray.push({quality:skill, value:0});
		// 	// // 	}
		// 	// // 	console.log(cloudArray);
		// 	// // 	// _.pick(object, *keys) 

		// 	// });

		// });
	// $scope.hasThis = function(quality){
	// 	var arrayObject = [];
	// 	var quality = quality;

	// 	if(jQuery.inArray(quality, $scope.keepArray)!==-1){
	// 		$scope.keepArray.push(quality);
	// 	} 
		
	// }