var lister_app = angular.module('lister_app', [
  'ngRoute',
  'myControllers'
]);

lister_app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'js/partials/search.html',
        controller: 'SearchController'
    })
    .when('/details/:itemId', {
        templateUrl: 'js/partials/details.html',
        controller: 'DetailsController'
    });
}]);
