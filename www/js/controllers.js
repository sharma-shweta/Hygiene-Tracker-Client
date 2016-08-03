angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope, $state, $http, $ionicPopup) {
	$scope.data = {};
	$scope.reloadRoute = function() {
	   window.location.reload();
	}
	$scope.login = function() {
		$http({
			method: 'POST',
			url: 'http://h4h-tracker.herokuapp.com/login' ,
			data: {username:$scope.data.username, password:$scope.data.password}
			}).success(function(data) {
	            $state.go('tabsController.clientRegistration');
	        }).error(function(data) {
	            var alertPopup = $ionicPopup.alert({
	                title: 'Login failed!',
	                template: 'Please check your credentials!'
	          });
	    });
	};
 })

.controller('educationCtrl', function($scope) {
})
   
.controller('progressCtrl', function($scope) {
	$scope.clients = [{name: 'Amar'}, {name: 'Meenakumari'}, {name: 'Raj Kishore Singh'}];
	$scope.selectedClient = $scope.clients[0];
	$scope.clientTypes = [{name: 'Weekly Checks'}, {name: 'Monthly Checks'}];
	$scope.selectedClientType = $scope.clientTypes[0];
	$scope.reloadRoute = function() {
	   window.location.reload();
	}
})
   
.controller('clientRegistrationCtrl', function($scope, $state) {
	$scope.next = function() {
	  $state.go('tabsController.clientDetails');
	};
})

.controller('clientDetailsCtrl', function($scope, $state) {
	// $http({
	// 		method: 'POST',
	// 		url: 'http://h4h-tracker.herokuapp.com/occupations/' ,
	// 		}).success(function(data) {
	// 			var alertPopup = $ionicPopup.alert({
	//                 date: data.results
	//           	});
	//             //$state.go('tabsController.clientRegistration');
	//         }).error(function(data) {
	//             var alertPopup = $ionicPopup.alert({
	//                 title: 'Login failed!',
	//                 template: 'Please check your credentials!'
	//           	});
	//     });
	$scope.occupations = [{name: 'Farmer'}, {name: 'Govt. Staff'}, {name: 'Daily Labourer'}, 
			{name: 'Self-Employed'}, {name: 'Not Working'}, {name: 'Private Employee'}];
	$scope.selectedOccupation = $scope.occupations[0];
	$scope.houseTypes = [{name: 'Thatched'}, {name: 'Tiled'}, {name: 'RCC'}, {name: 'Tinsheet'}, {name: 'AC Sheet'}];
	$scope.selectedHouseType = $scope.houseTypes[0];
	$scope.surveyTypes = [{name: 'Pre Survey'}, {name: 'Post Survey'}];
	$scope.selectedSurveyType = $scope.surveyTypes[0];
	$scope.submit = function() {
	  $state.go('tabsController.clientRegistration');
	};
	$scope.reloadRoute = function() {
	   window.location.reload();
	}
})
      
.controller('surveyCtrl', function($scope) {
	$scope.clients = [{name: 'Amar'}, {name: 'Meenakumari'}, {name: 'Raj Kishore Singh'}];
	$scope.selectedClient = $scope.clients[0];
	$scope.ans1 = [{name: 'Streets'}, {name: 'Soak Pit'}, {name: 'Kitchen Garden'}, 
		{name: 'Collection Pit'}, {name: 'Drains'}];
	$scope.selectedA1 = $scope.ans1[0];
	$scope.ans2 = [{name: 'Dustbin'}, {name: 'Compost Pit'}, {name: 'Road Side'}, 
		{name: 'Burning'}, {name: 'Dumping Land'}];
	$scope.selectedA2 = $scope.ans2[0];
	$scope.reloadRoute = function() {
	   window.location.reload();
	}
})
 