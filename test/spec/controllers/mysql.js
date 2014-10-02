'use strict';

describe('Controller: MysqlCtrl', function () {

  // load the controller's module
  beforeEach(module('node01App'));

  var MysqlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MysqlCtrl = $controller('MysqlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
