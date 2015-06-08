angular.module('jslab.router', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    'use strict';

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
      })
      .state('gotchas', {
        url: '/gotchas',
        views: {
          'content': { templateUrl: 'gotchas/content.html' },
          'repl': { templateUrl: 'gotchas/repl.html' }
        }
      })
      .state('debugging', {
        url: '/debugging',
        views: {
          'content': { templateUrl: 'debugging/content.html' },
          'repl': { templateUrl: 'debugging/repl.html' }
        }
      })
      .state('angular', {
        url: '/angular',
        views: {
          'content': { templateUrl: 'angular/content.html' },
          'repl': { templateUrl: 'angular/repl.html' }
        }
      })
      .state('angular-controllers', {
        url: '/angular/controllers',
        views: {
          'content': { templateUrl: 'angular/controllers/content.html' },
          'repl': { templateUrl: 'angular/controllers/repl.html' }
        }
      })
      .state('angular-routing', {
        url: '/angular/routing',
        views: {
          'content': { templateUrl: 'angular/routing/content.html' },
          'repl': { templateUrl: 'angular/routing/repl.html' }
        }
      })
      .state('angular-directives', {
        url: '/angular/directives',
        views: {
          'content': { templateUrl: 'angular/directives/content.html' },
          'repl': { templateUrl: 'angular/directives/repl.html' }
        }
      });
  }
]);
