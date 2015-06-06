'use strict';

angular.module('jslab', [
  'jslab.router',
  'jslab.templates',
  'jslab.components',
  'jslab.home',
  'jslab.objects',
  'jslab.functions',
  'jslab.angular'
]);

angular.module('jslab.angular', [
	'jslab.angular.controllers',
	'jslab.angular.directives',
	'jslab.angular.routing'
]);

angular.module('jslab.angular.controllers', []);

angular.module('jslab.angular.directives', []);

'use strict';

angular.module('jslab.angular.routing', []);

angular.module('jslab.components', ['ui.ace']);

angular.module('jslab.functions', []);

angular.module('jslab.home', []);

angular.module('jslab.objects', []);

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

angular.module('jslab.components')
.directive('jslabEditor', [function() {
  'use strict';

  var controller = ['$scope', '$log', function($scope, $log) {
    $scope.aceLoaded = function(editor) {
      $log.debug('aceLoaded', editor, $scope);
      editor.$blockScrolling = Infinity;
    };
    $scope.aceChanged = function(e) {
      var editor = e[1];
      $log.debug('aceChanged', e);
      var values = editor.getValue().split('\n');
      var results = [];
      angular.forEach(values, function(value) {
        var result = '';
        try {
          result = $scope.$eval(value);
        } catch (e) {
          $log.error(e);
        }
        results.push(result);
      });
      $scope.results = results;
    };
  }];

  return {
      restrict: 'E',
      scope: {
        code: '='
      },
      templateUrl: 'components/editor/editor.html',
      controller: controller
    };
}]);

//# sourceMappingURL=app.js.map