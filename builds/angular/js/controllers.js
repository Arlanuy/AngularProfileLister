//fetch all of the details in data.json
var my_controllers = angular.module('myControllers', []);

my_controllers.controller('SearchController', 
  function myController($scope, $http) {
	  $http.get("js/data.json").then(function(response) {
    $scope.artists = response.data;
    $scope.artist_order = 'name';
  });
  
});

my_controllers.controller('DetailsController', 
  function myController($scope, $http, $routeParams) {
    $http.get("js/data.json").then(function(response) {
    $scope.artists = response.data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.artists.length - 1;
    }

    if ($routeParams.itemId < $scope.artists.length - 1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }
  });
  
});