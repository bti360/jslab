'use strict';

angular.module('jslab.components')
.directive('jslabEditor', [function() {
  return {
      restrict: 'E',
      scope: {
        code: '='
      },
      templateUrl: 'components/editor/editor.html'
    };
}]);
