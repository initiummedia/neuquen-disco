'use strict';

/**
 * @ngdoc overview
 * @name neuqueninitiumdatacomApp
 * @description
 * # neuqueninitiumdatacomApp
 *
 * Main module of the application.
 */
angular
  .module('neuqueninitiumdatacomApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/rotate-css', {
        templateUrl: 'views/rotate-css.html',
        controller: 'TestCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
