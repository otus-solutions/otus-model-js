describe('the AddAnswerOptionService', function() {
  var service;
  var Mock = {};

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      mockJson();
      service = _$injector_.get('AddAnswerOptionService');
    });
  });

  describe('execute method', function() {

    it('should exist', function() {
      var container = service.execute(Mock.item);
      expect(container).not.toBeDefined();
    });

  });

  function mockJson() {
    Mock.validatorType = {};
    Mock.item = {

      createOption: function() {}

    };
    // Mock.item.fillingRules.removeFillingRules: function(fillingRules = null) {}
  }


});
