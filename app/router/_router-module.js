'use strict';

angular.module('jslab.router', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'content': { templateUrl: 'home/content.html' },
        'repl': { templateUrl: 'home/repl.html' }
      }
    })
    .state('objects', {
      url: '/objects',
      views: {
        'content': { templateUrl: 'objects/content.html' },
        'repl': { templateUrl: 'objects/repl.html' }
      }
    })
    .state('functions', {
      url: '/functions',
      views: {
        'content': { templateUrl: 'functions/content.html' },
        'repl': { templateUrl: 'functions/repl.html' }
      }
    });
}]);
