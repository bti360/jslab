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
