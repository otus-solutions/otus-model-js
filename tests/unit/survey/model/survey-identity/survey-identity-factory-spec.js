describe('SurveyIdentity', function() {
  var Mock = {},
    factory;

  var NAME = 'Identity Name',
    ACRONYM = 'ACRONYM',
    VERSION = 'A';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('SurveyIdentityFactory');
    });

    surveyIdentity = factory.create(NAME, ACRONYM, VERSION);
  });

  describe('SurveyIdentityFactory.create()', function() {

    it('should return an SurveyIdentity that extends from StudioObject', function() {
      expect(surveyIdentity.extents).toBe('StudioObject');
    });

    it('should return an SurveyIdentity object type', function() {
      expect(surveyIdentity.objectType).toBe('SurveyIdentity');
    });

    it('should return an SurveyIdentity with name', function() {
      expect(surveyIdentity.name).toBe(NAME);
    });

    it('should return an SurveyIdentity with acronym', function() {
      expect(surveyIdentity.acronym).toBe(ACRONYM);
    });

    it('should return an SurveyIdentity with recommendedTo equal to empty String', function() {
      expect(surveyIdentity.recommendedTo.length).toBe(0);
    });

    it('should return an SurveyIdentity with description equal to empty String', function() {
      expect(surveyIdentity.description.length).toBe(0);
    });

    it('should return an SurveyIdentity an empty array of keywords', function() {
      expect(Array.isArray(surveyIdentity.keywords)).toBe(true);
    });

  });

  describe('SurveyIdentityFactory.fromJson(json)', function() {

    beforeEach(function () {
      surveyIdentity = factory.fromJson(Mock.json);
    });

    it('should return an SurveyIdentity with name equal to json value property', function() {
      expect(surveyIdentity.name).toBe(Mock.json.name);
    });

    it('should return an SurveyIdentity with acronym equal to json value property', function() {
      expect(surveyIdentity.acronym).toBe(Mock.json.acronym);
    });

    it('should return an SurveyIdentity with recommendedTo equal to empty String equal to json value property', function() {
      expect(surveyIdentity.recommendedTo).toBe(Mock.json.recommendedTo);
    });

    it('should return an SurveyIdentity with description equal to empty String equal to json value property', function() {
      expect(surveyIdentity.description).toBe(Mock.json.description);
    });

    it('should return an SurveyIdentity with array of keywords equal to json value property', function() {
      expect(surveyIdentity.keywords).toBe(Mock.json.keywords);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.survey.model.SurveyIdentityFactory.fromJson() method expects to receive a object instead a String");
    });

  });

  Mock.json = {
    "extents": "StudioObject",
    "objectType": "SurveyIdentity",
    "name": "Test Name",
    "acronym": "TNA",
    "recommendedTo": "Everyone",
    "description": "Some description.",
    "keywords": ['Health', 'Blood']
  };

});
