'use strict';

angular.module('jslab.router', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'nav': { templateUrl: 'home/nav.html' },
        'content': { templateUrl: 'home/content.html' },
        'repl': { templateUrl: 'home/repl.html' }
      }
    })
    .state('objects', {
      url: '/objects',
      views: {
        'nav': { templateUrl: 'home/nav.html' },
        'content': { templateUrl: 'objects/content.html' },
        'repl': { templateUrl: 'objects/repl.html' }
      }
    });
}]);
