'use strict';

describe('Router', function() {
  var $rootScope;
  var $state;
  var $injector;

  beforeEach(module('jslab.router'));

  beforeEach(inject(function(_$rootScope_, _$state_, _$injector_) {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $injector = _$injector_;
  }));

  it('should respond to URLs', function() {
    expect($state.href('home')).toEqual('#/');
    expect($state.href('objects')).toEqual('#/objects');
  });
});
