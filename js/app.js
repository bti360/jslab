'use strict';

angular.module('jslab', [
  'jslab.router',
  'jslab.templates',
  'jslab.components',
  'jslab.home',
  'jslab.objects',
  'jslab.functions',
  'jslab.gotchas',
  'jslab.debugging',
  'jslab.angular'
]);

angular.module('jslab.angular', [
  'jslab.angular.modules',
  'jslab.angular.controllers',
	'jslab.angular.directives',
  'jslab.angular.services',
  'jslab.angular.routing'
]);

angular.module('jslab.angular.controllers', []);

angular.module('jslab.angular.directives', []);

angular.module('jslab.angular.modules', []);

angular.module('jslab.angular.routing', []);

angular.module('jslab.angular.services', []);

angular.module('jslab.components', ['ui.ace']);

'use strict';

angular.module('jslab.debugging', []);

angular.module('jslab.functions', []);

'use strict';

angular.module('jslab.gotchas', []);

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
      .state('gotchas', {
        url: '/gotchas',
        views: {
          'content': { templateUrl: 'gotchas/content.html' },
          'repl': { templateUrl: 'gotchas/repl.html' }
        }
      })
      .state('styling', {
        url: '/styling',
        views: {
          'content': { templateUrl: 'styling/content.html' },
          'repl': { templateUrl: 'styling/repl.html' }
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
      .state('angular-modules', {
        url: '/angular/modules',
        views: {
          'content': { templateUrl: 'angular/modules/content.html' },
          'repl': { templateUrl: 'angular/modules/repl.html' }
        }
      })
      .state('angular-controllers', {
        url: '/angular/controllers',
        views: {
          'content': { templateUrl: 'angular/controllers/content.html' },
          'repl': { templateUrl: 'angular/controllers/repl.html' }
        }
      })
      .state('angular-services', {
        url: '/angular/services',
        views: {
          'content': { templateUrl: 'angular/services/content.html' },
          'repl': { templateUrl: 'angular/services/repl.html' }
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
.directive('jslabEditor', ['_', function(_) {
  'use strict';

  var controller = ['$scope', function($scope) {
    $scope.aceLoaded = function(editor) {
      editor.$blockScrolling = Infinity;
      if ($scope.mode !== 'js') {
        editor.session.setOption('useWorker', false);
      }
    };
    $scope.aceChanged = _.debounce(function(e) {
      $scope.update();
    }, 500);
  }];

  return {
      restrict: 'E',
      scope: {
        code: '=',
        mode: '@',
        update: '&'
      },
      templateUrl: 'components/editor/editor.html',
      controller: controller
    };
}]);

angular.module('jslab.components')
.directive('jslabLiveEdit', ['$document', function($document) {
  'use strict';

  return {
      restrict: 'E',
      scope: {
        js: '@',
        css: '@',
        html: '@',
        panes: '@'
      },
      templateUrl: 'components/liveedit/liveedit.html',
      controller: ['$element', function(element) {
        this.randomId = Math.round((Math.random() * 10) + 1);
        console.log('randomId', this.randomId);
        var paneList = this.panes.split(',');
        this.openCount = paneList.length;
        paneList.forEach(function(paneName) {
          if (paneName === 'js') {
            this.showJs = true;
          } else if (paneName === 'css') {
            this.showCss = true;
          } else if (paneName === 'html') {
            this.showHtml = true;
          }
        }.bind(this));

        this.update = function() {
          var jsSource = '<script type="text/javascript">' + this.js + '</script>';
          var cssSource = '<style media="screen" type="text/css">' + this.css + '</style>';
          var htmlSource = this.html.replace('{', '{{');

          element.find('.outputIframe').contents().find('head').html(jsSource + cssSource);
          element.find('.outputIframe').contents().find('body').html(htmlSource);
        }.bind(this);
      }],
      controllerAs: 'ctrl',
      bindToController: true
    };
}]);

angular.module('jslab.components')
.factory('_', ['$window', function($window) {
  'use strict';

  return $window._;
}]);

angular.module('jslab.components')
.directive('jslabTip', function() {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'components/tip/tip.html'
  };
});

angular.module('jslab.components')
.directive('jslabWarning', function() {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'components/warning/warning.html'
  };
});

//# sourceMappingURL=app.js.map