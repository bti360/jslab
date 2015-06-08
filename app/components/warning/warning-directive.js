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
