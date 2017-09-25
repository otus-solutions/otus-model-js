describe('AddFillingRulesService', function () {
  var service;
  var Mock = {};

  beforeEach(function () {
    angular.mock.module('otusjs');

    inject(function (_$injector_) {
      mockJson();
      service = _$injector_.get('AddFillingRulesService');
    });
  });

  describe('execute method', function () {

    xit('should exist', function () {
      expect(service.execute(Mock.item, Mock.validatorType)).toBeUndefined();
    });

  });

  function mockJson() {
    Mock.item = {};
    Mock.validatorType = {};
  }

});
