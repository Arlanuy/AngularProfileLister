var myApp = angular.module('lister_app', []);
//fetch all of the details in data.json
myApp.controller('lister_controller', function myController($scope, $http) {
	$http.get("js/data.json").then(function(response) {
    $scope.artists = response.data;
    $scope.artist_order = 'name';
  });
  
});