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
