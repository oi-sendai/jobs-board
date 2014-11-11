
SystemApp.filter('makeLowercase', function(){
	return function (item) {
		return item.toLowerCase();
	};
});



CloudDirective = angular.module('CloudDirective', []);

// CloudDirective.directive( 'goku', function() {
//     return {
//       	restrict: 'AE',
//      	replace: true,
//       	template: '<button class="tc tc-{{value}}" ng-click="filterSkills(skill)">{{skill}}</button>',
//       	scope: {
//        		skill: '@skill',
//        		value: '@value',
//       	},
//       	controller:'CloudCtrl',
//       	link: function(scope, elem, attrs) {
      		
//       		var skill = scope.skill;
//       		console.log(skill)
//       		var value = scope.value;
//       		console.log(value);
//       	},
//     }
// });

CloudCtrl = angular.module('CloudCtrl', []);
CloudCtrl.controller('CloudCtrl', function($scope, _){
	// $scope.keepArray = false; //{skill:'',value:'0'}

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

		// {"skills": ['javascript' 'accounting', 'gardening', 'polite', 'hardworking', 'design', 'sewing', 'italian',]},
		// {"skills": ['javascript', 'gardening', 'polite', 'hardworking', 'design', 'sewing', 'italian',]},
		// {"skills": ['javascript', 'php',  'polite', 'hardworking', 'design', 'sewing', 'italian',]},
		// {"skills": ['javascript', 'accounting', 'gardening', 'hardworking', 'design', 'sewing', 'italian',]},
		// {"skills": ['javascript', 'php', 'gardening', 'polite', 'design', 'sewing', 'italian',]},
		// {"skills": ['javascript', 'php', 'accounting', 'polite', 'hardworking', 'sewing',]},
		// {"skills": ['javascript', 'php', 'gardening', 'polite', 'hardworking', 'design', 'italian',]},
		// {"skills": ['javascript', 'php', 'accounting', 'gardening', 'polite', 'hardworking', 'design', 'sewing', ]},
		// {"skills": [ 'php', 'accounting', 'gardening', 'polite', 'hardworking', 'design', 'sewing', ]},
		// {"skills": ['javascript', 'php', 'accounting', 'gardening', 'polite', 'hardworking', 'design', 'sewing', ]},
		// {"skills": ['javascript', 'php', 'gardening', 'polite', 'hardworking', 'design', 'sewing', ]},
		// {"skills": ['javascript', 'php', 'accounting', 'gardening',  'hardworking', 'design', 'sewing', ]}

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
		console.log('filter');
		$scope.hasSkillArray = [];
		console.log('skill:',skill);
		var skillName = skill.name;
		var skillName = skill;
		var users = $scope.users;
		console.log('users:',users)
		users.forEach( function (userObject){
			var hasSkill  = _.contains(_.pluck(userObject.skills, 'name'), skillName);
			console.log('hasSkill:', hasSkill);
			console.log('userObject:',userObject);
			if(hasSkill){
				console.log('pushing to array')
				$scope.hasSkillArray.push(userObject);
				console.log('hasSkillArray', $scope.hasSkillArray);
			} else {
				console.log('does nothing')
			}
		});

		// Add skill to active skills array
		$scope.activeSkillsArray.push(skill);
		console.log($scope.activeSkillsArray);
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
});

	/*! A splice of !!!!!
 * Angular jQCloud
 * For jQCloud 2 (https://github.com/mistic100/jQCloud) 
 * Copyright 2014 Damien "Mistic" Sorel (http://www.strangeplanet.fr)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */ /* !!! and !!! */
 /** Angular Word Cloud
 * Author: Derek Gould
 * Date: 8/29/13
 * Time: 5:34 PM
 */



// CloudDirective.directive('cloud', ['$parse', function($parse) {
//   // get existing options
//   var defaults = jQuery.fn.jQCloud.defaults.get(),
//       jqcOptions = [];
  
//   for (var opt in defaults) {
//     if (defaults.hasOwnProperty(opt)) {
//       jqcOptions.push(opt);
//     }
//   }
  
//   return {
//     restrict: 'E',
//     template: '<div class="junm">test</div>',
//     replace: true,
//     scope: {
//       words: '=words'
//     },
//     link: function($scope, $elem, $attr) {
//       var options = {};
//       console.log($scope.words);
//       console.log();
//       console.log($elem);
      
//       for (var i=0, l=jqcOptions.length; i<l; i++) {
//         var opt = jqcOptions[i];
//         if ($attr[opt] !== undefined) {
//           options[opt] = $parse($attr[opt])();
//         }
//       }
      
//       $elem.jQCloud($scope.words);
      
//       $scope.$watchCollection('words', function() {
//         $scope.$evalAsync(function() {
//           var words = [];
//           $.extend(words,$scope.words);
//           $elem.jQCloud('update', words);
//         });
//       });
    
//       $elem.bind('$destroy', function() {
//         $elem.jQCloud('destroy');
//       });
//     }
//   };
// }]);


/**
 * Author: Derek Gould
 * Date: 7/17/13
 * Time: 10:05 AM
 */

// CloudDirective.directive('cloud', ['$interpolate', function($interpolate) {
// 		return {
// 			restrict: 'EA',
// 			replace: true,
// 			transclude: true,
// 			scope: {
// 				words: '=',
// 				sort: '@'
// 			},
// 			template:
// 				"<div class='word-cloud-group'>" +
// 					"<span class='word-cloud-group-item' ng-repeat='word in mywords | orderBy:param:reverse' ng-transclude>{{word}}</span>" +
// 				"</div>",
// 			controller: ['$scope', '$transclude', function($scope, $transclude) {

// 				// set up the click function
// 				$scope.initClick = function(clickFn) {
// 					$transclude(function(clone,scope) {
// 						// pull the click function from the transcluded scope
// 						$scope.clickFn = scope[clickFn];
// 					});
// 				};
// 			}],
// 			compile: function(elem, attr) {

// 				// extract the type of cloud
// 				var type = angular.isUndefined(attr.type) ? 'list' : attr.type;
// 				switch(type) {
// 					case 'cloud':
// 						elem.children().eq(0).attr('style',"font-size: "+$interpolate.startSymbol()+" fontSize(word.size) "+$interpolate.endSymbol()+";");
// 						break;
// 					case 'list':
// 						break;
// 				}

// 				return function(scope, elem, attr) {

// 					// initialize the click function to nothing
// 					scope.clickFn = function() {};
// 					if(!angular.isUndefined(attr.ngClick)) {
// 						// initialize the click function to whatever we've been given
// 						scope.initClick(attr.ngClick);
// 					}

// 					// normalize the word array
// 					var convertWords = function() {
// 						var words = angular.copy(scope.words);

// 						if(angular.isArray(words) && words.length > 0) {
// 							if(!angular.isObject(words[0])) {
// 								words = words.map(function(e) { return { word: e, size: 1 }});
// 							} else if(angular.isUndefined(words[0].word) || angular.isUndefined(words[0].size)) {
// 								words = [];
// 							}
// 						} else {
// 							words = [];
// 						}

// 						words = words.map(function(e) { return {word: e.word, size: e.size, rawSize: parseFloat(e.size) }; });

// 						scope.mywords = words;
// 					};

// 					scope.fontSize = function(size) {
// 						if((''+size).search("(px|em|in|cm|mm|ex|pt|pc|%)+") == -1) {
// 							return size+'em';
// 						}
// 						return size;
// 					};

// 					scope.$watch('words',function() {
// 						convertWords();
// 					},true);

// 					scope.$watch('sort',function(newVal) {
// 						if(!newVal) { newVal = 'no' }
// 						scope.param = newVal.substr(0,5) == 'alpha' ? 'word' : (newVal == 'no' ? '' : 'rawSize');
// 						scope.reverse = newVal.substr(-4).toLowerCase() == 'desc';
// 					});

// 				}
// 			}
// 		};
// 	}]);
