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
				{"name":"insurance broker"},
				{"name":"design"}
				]
			},
			{	"username":"me",
				"skills": [
				{"name":"hardworking"},
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
	// // $scope.users = [

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

	// if word inArray is truthy push array to array

	// $scope.activeFilters = [];

	$scope.users = [];
	$scope.activeUsers = []
	$scope.skills = [];
	$scope.filters = [];
	// test 1
	$scope.init = function(){
		UserFactory.fetchUsers().then(function(data){
			// cache returned users object
			$scope.users = data; // cache users object
			// $scope.activeUsers = $scope.users;

			$scope.gatherSkills($scope.users);
			// console.log($scope.skills);
		});
	};
	$scope.init();

	// returns array of skill object values
	$scope.gatherSkills = function(users){
		// if($scope.filters.length < 0){
		// 	console.log('filterUsers()');
		// } 
		console.log('calle');
		$scope.skills = []
		var gather = function(user){
			console.log('gathering', user);
			// reset scope object
			// add to rain array
			_.each(user.skills, function(input){
				$scope.countSkills(input.name);
			});
			// console.log($scope.skills);
		}
		_.each(users, gather);
	};

	// Checks to see if the skill exists
	// if false adds the skill to the array
	// if true increments the counter for the skill
	$scope.countSkills = function(input){ 
		var existingSkill = _.contains(_.pluck($scope.skills, 'text'), input);
		var filteredSkill = _.contains($scope.filters, input);

		if(!existingSkill && !filteredSkill){ // 
			var thing = {
				text: input, 
				weight: 1, 
				link: { href: "#", title: input}
			}

			$scope.skills.push(thing);
		}
		else if(!filteredSkill){ // really inefficient i think 
			_.select($scope.skills, function(obj){

			    if (obj.text === input){
			    	obj.weight = ++obj.weight;
			    }; 
					    
			});

		}
	};

	$scope.addFilter = function(filter){
		$scope.filters.push(filter); 
		console.log('1',$scope.filters);
		$scope.filterUsers($scope.filters);
	}
	$scope.removeFilter = function(filter){
		$scope.filters = _.without($scope.filters, filter);
		$scope.filterUsers($scope.filters);
		
	}
	$scope.filterUsers = function(filters){
		var users = $scope.users ;
		var result = [];
		
		var numberOfFilters = filters.length;
		console.log('numberOfFilters',numberOfFilters)
		
		// iterate over user
		_.each(users, function(user){
			console.log('---------------', user, '------------------')
			var hasSkill = 0; // set skills to zero
			// iterate over skills array	
			_.each(user.skills, function(skill){
				console.log('4',skill.name)
				// if(_.contains(filters, skill.name)){
				if(_.contains(filters, skill.name)){
					hasSkill = ++hasSkill
					console.log('true', hasSkill);
				}
			});
			if(hasSkill === numberOfFilters){
					result.push(user)
			}
		})
		$scope.activeUsers = result;
		console.log('6', $scope.activeUsers)
		$scope.gatherSkills(result);
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