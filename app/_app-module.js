'use strict';

var jslab = angular.module('jslab', [
  'jslab.router',
  'jslab.templates',
  'jslab.components',
  'jslab.home',
  'jslab.objects',
  'jslab.functions',
  'jslab.gotchas',
  'jslab.angular'
]);

jslab.directive('jslabWarning', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'templates/warning.html'
	};
});
