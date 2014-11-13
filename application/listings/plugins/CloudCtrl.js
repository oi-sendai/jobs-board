SystemApp.factory('UserFactory', function($q) {
	var debug = 'profile factory';
	var factory = {};

	factory.fetchUsers = function(){
		var deferred = $q.defer();
		var users = [

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
		deferred.resolve(users);
		return deferred.promise;
	};
	return factory
}); 

CloudCtrl = angular.module('CloudCtrl', []);

CloudCtrl.controller('CloudCtrl', function($scope, _
	,UserFactory
	){
	// $scope.keepArray = false; //{skill:'',value:'0'}
	$scope.debug = 'CloudCtrl';
	// $scope.users = [

	// 	{	"username": "franz-kafka",
	// 		"skills": [
	// 		{"name":"polite"},
	// 		{"name":"javascript"},
	// 		{"name":"insurance broker","tooltip":"mongoose does this out the box"}
	// 		]
	// 	},
	// 	{	"username":"me",
	// 		"skills": [
	// 		{"name":"hardworking"},
	// 		{"name":"design"},
	// 		{"name":"sewing"},
	// 		{"name":"javascript"},
	// 		{"name":"information architecture"}
	// 		]
	// 	},
	// 	{
	// 		"username": "another-user",
	// 		"skills": [
	// 		{"name":"hardworking"},
	// 		{"name":"design"},
	// 		{"name":"italian"},
	// 		{"name":"javascript"},
	// 		{"name":"design"}
	// 		]
	// 	},
	// 	{
	// 		"username": "more-data",
	// 		"skills": [
	// 		{"name":"hardworking"},
	// 		{"name":"design"},
	// 		{"name":"design"}
	// 		]
	// 	},
	// 	{
	// 		"username": "even-more",
	// 		"skills": [
	// 		{"name":"javascript"},
	// 		{"name":"design"},
	// 		{"name":"polite"}
	// 		]
	// 	}
	// ];
	$scope.users = '';

	// if word inArray is truthy push array to array

	$scope.activeFilters = [];
	$scope.apiMockArray = [];




	$scope.rain = [];

	// test 1
	$scope.init = function(){
		UserFactory.fetchUsers().then(function(data){
			// cache returned users object
			$scope.users = data;
			// $scope.sumSkills($scope.users); // mocks service call
			$scope.gatherSkills(data);
			console.log($scope.rain);
		});
	};
	$scope.init();

	// returns array of skill object values
	$scope.gatherSkills = function(users){

		$scope.rain = []
		var gather = function(user){
			// reset scope object
			// add to rain array
			_.each(user.skills, function(input){
				$scope.countSkills(input.name);
			});
			// console.log($scope.rain);
		}
		_.each(users, gather);
	};

	$scope.countSkills = function(input){ 
 		
		var existingSkill = _.contains(_.pluck($scope.rain, 'text'), input);

		if(!existingSkill){ // 
			var thing = {
				text: input, 
				weight: 1, 
				link: { href: "#", title: input}
			}

			$scope.rain.push(thing);
		}
		else { // really inefficient i think 
			_.select($scope.rain, function(obj){

			    if (obj.text === input){
			    	// var weight = obj.weight;
			    	// weight++
			    	// obj.weight = weight;
			    	obj.weight = ++obj.weight;
			    }; // this returns array - why?
					    
			});

		}
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
				// console.log(activeSkills);
				$scope.activeSkills = activeSkills;

			});
		});
	};

	
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