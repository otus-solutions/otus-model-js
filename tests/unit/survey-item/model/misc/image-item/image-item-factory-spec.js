describe('ImageItemFactory', function() {
  var Mock = {};
  var factory;
  var survey;

  beforeEach(function() {
    angular.mock.module('otusjs.surveyItem');
    angular.mock.module('otusjs.misc');

    Mock.surveyTemplate = Test.utils.data.imageItem;

    angular.mock.inject(function (_$injector_) {
      factory = _$injector_.get('ImageItemFactory');
    });
  });

  describe('ImageItemFactory.fromJsonObject(jsonObject)', function() {
    it('factoryExistence check', function () {
      expect(factory).toBeDefined();
    });
  });

  describe('ImageItemFactory.fromJsonObject(jsonObject)', function() {

    beforeEach(function() {
      survey = factory.fromJsonObject(Mock.surveyTemplate);
    });

    it('should return a ImageItemFactory that extents', function() {
      expect(survey.extents).toEqual('SurveyItem');
    });

    it('should return a ImageItemFactory that objectType', function() {
      expect(survey.objectType).toEqual('ImageItem');
    });

    it('should return a ImageItemFactory that dataType', function() {
      expect(survey.dataType).toEqual('String');
    });
  });

  describe('should create an instance with the same values of toJson()', function() {

    beforeEach(function () {
      survey = factory.fromJsonObject(Mock.surveyTemplate);
    });

    it('Mock.surveyTemplate', function() {
      expect(JSON.stringify(survey)).toEqual(JSON.stringify(Mock.surveyTemplate));
    });

  });

});