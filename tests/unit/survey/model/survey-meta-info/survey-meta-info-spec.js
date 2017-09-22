describe('SurveyMetaInfo', function() {
    var Mock = {};
    var surveyMetainfo;
    var factory;

    beforeEach(function() {
        angular.mock.module('otusjs');

        mockJsonObject();
        inject(function(_$injector_) {
            factory = _$injector_.get('SurveyMetaInfoFactory');

            surveyMetainfo = factory.create();
        });
    });

    describe('toJson method', function() {
        it('should return a well formatted json based on instance of SurveyMetaInfo', function() {
          Mock.jsonObject.creationDatetime = new Date();
          expect(surveyMetainfo.toJson()).toEqual(JSON.stringify(Mock.jsonObject));
        });
    });

    describe('fromJsonObject method', function() {

        beforeEach(function () {
          mockSurveyMetaInfoFromJson(Mock.jsonObject);
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

    function mockJsonObject() {
      Mock.jsonObject = {
        extents: 'StudioObject',
        objectType: 'SurveyMetaInfo',
        creationDatetime: "2017-09-22T16:50:28.708Z",
        otusStudioVersion: ''
      }
    }

    function mockSurveyMetaInfoFromJson(jsonObject) {
       Mock.surveyMetaInfoFromJson = factory.fromJsonObject(jsonObject);
    }

});
