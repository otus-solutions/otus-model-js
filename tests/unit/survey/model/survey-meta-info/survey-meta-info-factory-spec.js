xdescribe('SurveyMetaInfoFactory', function() {
  var Mock = {};
  var factory;

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();
    mockDate();

    inject(function(_$injector_) {
      factory = _$injector_.get('SurveyMetaInfoFactory');
    });
  });

  describe('Dependencies uses', function() {

    beforeEach(function() {
      surveyMetaInfo = factory.create();
    });

    it('Date.now() should be called in create() method', function() {
      expect(Date.now).toHaveBeenCalled();
    });

  });

  describe('SurveyMetaInfoFactory.create()', function() {
    beforeEach(function() {
      surveyMetaInfo = factory.create();
    });

    it('should return an SurveyMetaInfo with creation date time equal to now date', function() {
      expect(surveyMetaInfo.creationDatetime).toEqual(Mock.now);
    });

    it('should return an SurveyMetaInfo that extends from StudioObject', function() {
      expect(surveyMetaInfo.extents).toBe('StudioObject');
    });

    it('should return an SurveyMetaInfo object type', function() {
      expect(surveyMetaInfo.objectType).toBe('SurveyMetaInfo');
    });

  });

  describe('SurveyMetaInfoFactory.fromJsonObject', function() {

    beforeEach(function() {
      surveyMetaInfo = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should create an instance with the same values of Mock.jsonObject", function() {
      expect(surveyMetaInfo.toJson()).toEqual(JSON.stringify(Mock.jsonObject));
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      }).toThrowError("otusjs.model.survey.model.SurveyMetaInfoFactory.fromJsonObject() method expects to receive a object instead a String");
    });

  });

  function mockOIDHashGenerator($injector) {
    Mock.OIDHashGenerator = $injector.get('OIDHashGenerator');

    /* Overrides original behavior */
    Mock.OIDHashGenerator.generateHash = function(seed) {
      return 0;
    };

    return Mock.OIDHashGenerator;
  }

  function mockDate() {
    Mock.now = Date.now();
    spyOn(Date, 'now').and.returnValue(Mock.now);
  }

  function mockJsonObject() {
    Mock.jsonObject = {
      "extents": "StudioObject",
      "objectType": "SurveyMetaInfo",
      "creationDatetime": '20/12/1991',
      "otusStudioVersion": ""
    };
  }

});
