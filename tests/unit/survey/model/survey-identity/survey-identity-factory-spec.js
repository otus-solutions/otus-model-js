describe('SurveyIdentity', function() {
  var Mock = {},
    factory;

  var NAME = 'Identity Name',
    ACRONYM = 'ACRONYM',
    VERSION = 'A';

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('SurveyIdentityFactory');
    });
  });

  describe('SurveyIdentityFactory.create()', function() {

    beforeEach(function() {
      surveyIdentity = factory.create(NAME, ACRONYM, VERSION);
    });

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

  describe('SurveyIdentityFactory.fromJsonObject', function() {

    beforeEach(function() {
      surveyIdentity = factory.fromJsonObject(Mock.jsonObject);
    });

    it('should return an SurveyIdentity with name equal to json value property', function() {
      expect(surveyIdentity.name).toBe(Mock.jsonObject.name);
    });

    it('should return an SurveyIdentity with acronym equal to json value property', function() {
      expect(surveyIdentity.acronym).toBe(Mock.jsonObject.acronym);
    });

    it('should return an SurveyIdentity with recommendedTo equal to empty String equal to json value property', function() {
      expect(surveyIdentity.recommendedTo).toBe(Mock.jsonObject.recommendedTo);
    });

    it('should return an SurveyIdentity with description equal to empty String equal to json value property', function() {
      expect(surveyIdentity.description).toBe(Mock.jsonObject.description);
    });

    it('should return an SurveyIdentity with array of keywords equal to json value property', function() {
      expect(surveyIdentity.keywords).toBe(Mock.jsonObject.keywords);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      }).toThrowError("otusjs.model.survey.model.SurveyIdentityFactory.fromJsonObject() method expects to receive a object instead a String");
    });

  });

  function mockJsonObject() {
    Mock.jsonObject = {
      "extents": "StudioObject",
      "objectType": "SurveyIdentity",
      "name": "Test Name",
      "acronym": "TNA",
      "recommendedTo": "Everyone",
      "description": "Some description.",
      "keywords": ['Health', 'Blood']
    };
  }

});
