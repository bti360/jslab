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