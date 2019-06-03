describe('SurveyFormFactory', function() {
  var Mock = {};
  var Injections = {};
  var factory;
  var surveyForm;
  var surveyJson;

  beforeEach(function() {
    angular.mock.module('otusjs');

    Mock.survey = Test.utils.data.survey;

    inject(function(_$injector_) {
      Injections.SurveyFactory = _$injector_.get('SurveyFactory')
      factory = _$injector_.get('SurveyFormFactory', Injections);
    });
  });

  describe('SurveyFormFactory.create()', function() {

    beforeEach(function() {
      surveyForm = factory.create(jasmine.any(Object));
    });

    it('should return a SurveyForm that extends from StudioObject', function() {
      expect(surveyForm.extents).toEqual('StudioObject');
    });

    it('should return a SurveyForm that version value', function() {
      expect(surveyForm.version).toEqual(null);
    });

    it('should return a SurveyForm that isDiscarded value', function() {
      expect(surveyForm.isDiscarded).toEqual(false);
    });

    it('should return a SurveyForm that acronym value', function() {
      expect(surveyForm.acronym).toEqual(null);
    });

    it('should return a SurveyForm that name value', function() {
      expect(surveyForm.name).toEqual(null);
    });

    it('should return a SurveyForm object type', function() {
      expect(surveyForm.objectType).toEqual('SurveyForm');
    });

  });

  describe('SurveyFormFactory.fromJsonObject() with surveyTemplate', function() {

    beforeEach(function() {
      spyOn(Injections.SurveyFactory, "fromJsonObject").and.callThrough();
      surveyForm = factory.fromJsonObject(Mock.survey);
    });

    it('should return a SurveyForm that extends from StudioObject', function() {
      expect(surveyForm.extents).toEqual('StudioObject');
    });

    it('should return a SurveyForm that version value', function() {
      expect(typeof surveyForm.version).toEqual("number");
      expect(surveyForm.version).toEqual(1);
    });

    it('should return a SurveyForm that acronym value', function() {
      expect(surveyForm.acronym).toEqual('ANTC');
    });

    it('should return a SurveyForm that name value', function() {
      expect(surveyForm.name).toEqual('ANTROPOMETRIA');
    });

    it('should return a SurveyForm that isDiscarded value', function() {
      expect(surveyForm.isDiscarded).toEqual(true);
    });

    it('should return a SurveyForm object type', function() {
      expect(surveyForm.objectType).toEqual('SurveyForm');
    });

    it('should call SurveyFactory.fromJsonObject method', function () {
      expect(Injections.SurveyFactory.fromJsonObject).toHaveBeenCalledTimes(1);
    });

  });

  describe('SurveyFormFactory.fromJsonObject() without surveyTemplate', function() {

    beforeEach(function() {
      delete Mock.survey.surveyTemplate;
      surveyForm = factory.fromJsonObject(Mock.survey);
      spyOn(Injections.SurveyFactory, "fromJsonObject").and.callThrough();

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

    it('should return a SurveyForm that acronym value', function() {
      expect(surveyForm.acronym).toEqual('ANTC');
    });

    it('should return a SurveyForm that name value', function() {
      expect(surveyForm.name).toEqual('ANTROPOMETRIA');
    });

    it('should return a SurveyForm object type', function() {
      expect(surveyForm.objectType).toEqual('SurveyForm');
    });

    it('should call SurveyFactory.fromJsonObject method', function () {
      expect(Injections.SurveyFactory.fromJsonObject).toHaveBeenCalledTimes(0);
    });

  });

  describe('SurveyFormFactory.toJSON()', function() {

    beforeEach(function() {
      surveyForm = factory.fromJsonObject(Mock.survey);
      surveyJson = surveyForm.toJSON();
    });

    xit('should return a SurveyForm that extends from StudioObject', function() {
      expect(JSON.stringify(surveyJson)).toEqual(JSON.stringify(Mock.survey));
    });
  });


});
