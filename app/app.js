'use strict';

// Declare app level module which depends on views, and components
var serket = angular.module('serket', ['ngRoute'])

serket.config(['$routeProvider', function($routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});

  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeController'
  });
}]);
