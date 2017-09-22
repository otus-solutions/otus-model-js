describe('SurveyMetaInfoFactory', function() {
  var Mock = {};
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs');

    mockJsonObject();
    mockDate();

    inject(function(_$injector_) {
      factory = _$injector_.get('SurveyMetaInfoFactory');
    });
  });

  describe('SurveyMetaInfoFactory.create()', function() {
    beforeEach(function() {
      mockSurveyMetaInfo();
    });

    it('should return an SurveyMetaInfo with creation date time equal to now date', function() {
      expect(Mock.surveyMetaInfo.creationDatetime).toEqual(new Date());
    });

    it('should return an SurveyMetaInfo that extends from StudioObject', function() {
      expect(Mock.surveyMetaInfo.extents).toBe('StudioObject');
    });

    it('should return an SurveyMetaInfo object type', function() {
      expect(Mock.surveyMetaInfo.objectType).toBe('SurveyMetaInfo');
    });

  });

  describe('fromJsonObject method', function() {

    beforeEach(function () {
      mockSurveyMetaInfoFromJson();
    });

    it('should create a SurveyMetaInfo type object with extents equal to StudioObject', function() {
      expect(Mock.surveyMetaInfoFromJson.extents).toEqual('StudioObject');
    });

    it('should create a SurveyMetaInfo type object with objectType equal to SurveyMetaInfo', function() {
      expect(Mock.surveyMetaInfoFromJson.objectType).toEqual('SurveyMetaInfo');
    });

    it('should create a SurveyMetaInfo type object with creationDatetime equal to 2017-09-22T16:50:28.708Z', function() {
      expect(Mock.surveyMetaInfoFromJson.creationDatetime).toEqual('2017-09-22T16:50:28.708Z');
    });

    it('should create a SurveyMetaInfo type object with creationDatetime equal to 2017-09-22T16:50:28.708Z', function() {

      var ERROR_MESSAGE = "otusjs.model.survey.model.SurveyMetaInfoFactory.fromJsonObject() method expects to receive a object instead a String";

      var fromJsonObjectFunction = function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      };

      expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
    });
  });

  function mockDate() {
    Mock.now = Date.now();
    spyOn(Date, 'now').and.returnValue(Mock.now);
  }

  function mockJsonObject() {
    Mock.jsonObject = {
      "extents": "StudioObject",
      "objectType": "SurveyMetaInfo",
      "creationDatetime": '2017-09-22T16:50:28.708Z',
      "otusStudioVersion": ""
    };
  }

  function mockSurveyMetaInfo() {
    Mock.surveyMetaInfo = factory.create();
  }

  function mockSurveyMetaInfoFromJson() {
    Mock.surveyMetaInfoFromJson = factory.fromJsonObject(Mock.jsonObject);
  }
});
