CloudCtrl = angular.module('CloudCtrl', []);

CloudCtrl.controller('CloudCtrl', function($scope, _){
	// $scope.keepArray = false; //{skill:'',value:'0'}
	$scope.debug = 'CloudCtrl';
	$scope.users = [

		{	"username": "franz-kafka",
			"skills": [
			{"name":"polite", "tooltip": "I was brought up this way"},
			{"name":"javascript", "tooltip": "Is my favourite"},
			{"name":"insurance broker","tooltip":"mongoose does this out the box"}
			]
		},
		{	"username":"me",
			"skills": [
			{"name":"hardworking", "tooltip": "I was brought up this way"},
			{"name":"design", "tooltip": "Is my favourite"},
			{"name":"sewing","tooltip":"mongoose does this out the box"},
			{"name":"javascript", "tooltip": "Is actually quite fun"},
			{"name":"information architecture", "tooltip": "Something else I am interested in"}
			]
		},
		{
			"username": "another-user",
			"skills": [
						{"name":"hardworking", "tooltip": "I was brought up this way"},
			{"name":"design", "tooltip": "Is my favourite"},
			{"name":"italian", "tooltip": "I was brought up this way"},
			{"name":"javascript", "tooltip": "Is my favourite"},
			{"name":"design","tooltip":"mongoose does this out the box"}
			]
		},
		{
			"username": "more-data",
			"skills": [
			{"name":"hardworking", "tooltip": "I was brought up this way"},
			{"name":"design", "tooltip": "Is my favourite"},
			{"name":"design","tooltip":"mongoose does this out the box"}
			]
		},
		{
			"username": "even-more",
			"skills": [
			{"name":"javascript", "tooltip": "Is my favourite"},
			{"name":"design","tooltip":"mongoose does this out the box"},
			{"name":"polite", "tooltip": "I was brought up this way"}
			]
		}
	];

	// if word inArray is truthy push array to array


	$scope.activeSkillsArray = [];
	$scope.apiMockArray = [];
	// for each skillsArray 
	$scope.sumSkills = function(users){
		$scope.apiMockArray = [];
		var cloudArray = [];
		var users = users; //expect array
		// console.log(users);
		users.forEach( function (userObject) {
			var skillsArray = userObject.skills;
			skillsArray.forEach( function (skill){ // jquery, move to underscore sometime
				var skillName = skill.name;
				var alreadyFilteredSkill = _.contains(_.pluck($scope.activeSkillsArray, 'name'), skillName);
				var existingSkill = _.contains(_.pluck($scope.apiMockArray, 'name'), skillName);
				// console.log('has existingSkill logic');
				// console.log(existingSkill);
				// I still don't quite understand above syntax
				if(alreadyFilteredSkill ){
					console.log('nothing else');
				} 
				else if(existingSkill){
					// _.find($scope.apiMockArray)
					// console.log('number++');
					var existingObject = _.select($scope.apiMockArray, function(obj){
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
					$scope.apiMockArray.push({name:skillName,value:1});
				}
				console.log($scope.apiMockArray);
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
		$scope.activeSkillsArray.push(skill);
		// run new array through main cloud logic

		$scope.sumSkills($scope.hasSkillArray);
		// update scope with filtered candidates
		$scope.filteredCandidatesArray = $scope.hasSkillArray;
	};


	$scope.removeFilter = function(skill) {
		alert('this feature is under development, please refresh the page to start again');
		// // $scope.activeSkillsArray.remove(skill);
		// console.log($scope.activeSkillsArray);
		// 		_.select($scope.activeSkillsArray, function(obj){
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