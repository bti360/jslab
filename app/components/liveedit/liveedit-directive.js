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
