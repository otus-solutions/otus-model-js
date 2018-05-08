describe('SurveyFormFactory', function() {
  var Mock = {};
  var factory;
  var surveyForm;
  var survey;

  beforeEach(function() {
    angular.mock.module('otusjs');

    Mock.surveyTemplate = Test.utils.data.survey;

    inject(function(_$injector_) {
      factory = _$injector_.get('SurveyFormFactory', {
        'SurveyFactory': _$injector_.get('SurveyFactory')
      });
    });
  });

  describe('SurveyFormFactory.create()', function() {

    beforeEach(function() {
      surveyForm = factory.create(jasmine.any(Object));
    });

    it('should return a SurveyForm that extends from StudioObject', function() {
      expect(surveyForm.extents).toEqual('StudioObject');
    });
    xit('should return a SurveyForm that version value', function() {
      expect(typeof surveyForm.version).toEqual("number");
      expect(surveyForm.version).toEqual(null);
    });
    it('should return a SurveyForm that isDiscarded value', function() {
      expect(surveyForm.isDiscarded).toEqual(false);
    });

    it('should return a SurveyForm object type', function() {
      expect(surveyForm.objectType).toEqual('SurveyForm');
    });

  });

  describe('SurveyFormFactory.fromJsonObject()', function() {

    beforeEach(function() {
      surveyForm = factory.fromJsonObject(Mock.surveyTemplate);
    });

    it('should return a SurveyForm that extends from StudioObject', function() {
      expect(surveyForm.extents).toEqual('StudioObject');
    });
    it('should return a SurveyForm that version value', function() {
      expect(typeof surveyForm.version).toEqual("number");
      expect(surveyForm.version).toEqual(1);
    });
    it('should return a SurveyForm that isDiscarded value', function() {
      expect(surveyForm.isDiscarded).toEqual(true);
    });

    it('should return a SurveyForm object type', function() {
      expect(surveyForm.objectType).toEqual('SurveyForm');
    });

  });


});
