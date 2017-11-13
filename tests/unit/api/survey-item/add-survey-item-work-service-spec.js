describe('the AddSurveyItemService', function() {
  var service;
  var Mock = {};

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      mockJson();
      service = _$injector_.get('AddSurveyItemService');
    });
  });

  describe('execute method', function() {

    it('should exist', function() {
      var container = service.execute(Mock.validatorType, Mock.survey);
      expect(container).not.toBeDefined();
    });

  });

  function mockJson() {
    Mock.validatorType = {};
    Mock.item = {

      createOption: function() {}

    };
    Mock.survey = {
      addItem: function(itemType) {}
    }
  }


});
