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
    expect($state.href('functions')).toEqual('#/functions');
    expect($state.href('gotchas')).toEqual('#/gotchas');
    expect($state.href('debugging')).toEqual('#/debugging');
    expect($state.href('angular')).toEqual('#/angular');
    expect($state.href('angular-modules')).toEqual('#/angular/modules');
    expect($state.href('angular-controllers')).toEqual('#/angular/controllers');
    expect($state.href('angular-directives')).toEqual('#/angular/directives');
    expect($state.href('angular-routing')).toEqual('#/angular/routing');
  });
});
