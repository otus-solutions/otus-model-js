describe('the MoveSurveyItemService', function() {
  var service;
  var Mock = {};

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      mockJson();
      service = _$injector_.get('MoveSurveyItemService');
    });
  });

  describe('execute method', function() {

    it('should exist', function() {
      const POSITION = 2;

      let container = service.execute(Mock.survey, Mock.item, POSITION);

      expect(container).not.toBeDefined();
      expect(Mock.survey.moveItem).toHaveBeenCalledWith(Mock.item, POSITION);

    });

  });

  function mockJson() {
    Mock.validatorType = {};
    Mock.item = {
      templateID: "TEM1"
    };
    Mock.survey = {
      moveItem: function(item, position) {}
    };
    spyOn(Mock.survey, "moveItem");

  }


});
