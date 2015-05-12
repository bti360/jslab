'use strict';

angular.module('jslab.components')
.directive('jslabEditor', [function() {
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
          // TODO: Find a way without using eval
          result = eval(value); // jshint ignore:line
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
