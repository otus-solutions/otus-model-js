describe('SurveyFactory', function() {
  var Mock = {};
  var factory;
  var survey;
  var Injections = {};

  beforeEach(function() {
    angular.mock.module('otusjs');

    Mock.surveyTemplate = Test.utils.data.latestSurveyTemplate;
    inject(function(_$injector_) {
      Injections = {
        'SurveyIdentityFactory': mockSurveyIdentityFactory(_$injector_),
        'SurveyMetaInfoFactory': mockSurveyMetaInfoFactory(_$injector_),
        'SurveyUUIDGenerator': mockSurveyUUIDGenerator(_$injector_),
        'NavigationManagerFactory': mockNavigationManagerFactory(_$injector_),
        'SurveyItemManagerFactory': mockSurveyItemManagerFactory(_$injector_),
        'DataSourceDefinitionManagerFactory': mockDataSourceFactory(_$injector_)
      };
      factory = _$injector_.get('SurveyFactory', Injections);
    });
  });

  describe('SurveyFactory.create()', function() {

    beforeEach(function() {
      survey = factory.create(jasmine.any(String), jasmine.any(String));
    });

    it('should return a Survey that extends from StudioObject', function() {
      expect(survey.extents).toBe('StudioObject');
    });

    it('should return a Survey object type', function() {
      expect(survey.objectType).toBe('Survey');
    });

    it('should return a Survey version', function() {
      expect(survey.version).toBeDefined();
      expect(survey.version).toBeNull();
    });

    it('should return a Survey isDiscarded', function() {
      expect(survey.isDiscarded).toBe(false);
    });

    it('should return a Survey with a SurveyMetaInfo object type', function() {
      expect(survey.metainfo.objectType).toBe('SurveyMetaInfo');
    });

    it('should return a Survey with an OID', function() {
      expect(survey.oid).toBeDefined();
    });

    it('should return a Survey with a SurveyIdentity object type', function() {
      expect(survey.identity.objectType).toBe('SurveyIdentity');
    });

    it('should call SurveyUUIDGenerator.generateSurveyUUID()', function() {
      expect(Mock.SurveyUUIDGenerator.generateSurveyUUID).toHaveBeenCalled();
    });

    xit('should call SurveyItemManagerFactory.init()', function() {
      spyOn(Mock.SurveyItemManagerFactory, 'init');

      factory.create(jasmine.any(String), jasmine.any(String));

      expect(Mock.SurveyItemManagerFactory.init).toHaveBeenCalled();
    });

  });

  describe("SurveyFactory.fromJsonObject(jsonObject)", function() {
    var json = {};

    beforeEach(function() {
      survey = factory.fromJsonObject(Mock.surveyTemplate);
    });


    it('should return a Survey version', function() {
      expect(survey.version).toBeDefined();
      expect(survey.version).toBe(1);
    });

    it('should return a Survey isDiscarded', function() {
      expect(survey.isDiscarded).toBe(false);
    });

    xit("should call SurveyMetaInfoFactory.fromJsonObject method with Mock.surveyTemplate.metainfo", function() {
      expect(Mock.SurveyMetaInfoFactory.fromJsonObject).toHaveBeenCalledWith(Mock.surveyTemplate.metainfo);
    });

  xdescribe("should create an instance with the same values of", function() {

      beforeEach(function () {
        stringifiedSurvey = survey.toJson();
        parsedSurvey = JSON.parse(stringifiedSurvey);
      });

      xit("Mock.surveyTemplate", function() {
        expect(JSON.stringify(parsedSurvey)).toEqual(JSON.stringify(Mock.surveyTemplate));
      });

      xit("Mock.surveyTemplate.identity", function() {
        expect(JSON.stringify(parsedSurvey.identity)).toEqual(JSON.stringify(Mock.surveyTemplate.identity));
      });

      it("Mock.surveyTemplate.metainfo", function() {
        expect(JSON.stringify(parsedSurvey.metainfo)).toEqual(JSON.stringify(Mock.surveyTemplate.metainfo));
      });

      it("Mock.surveyTemplate.itemContainer", function() {
        expect(JSON.stringify(parsedSurvey.itemContainer)).toEqual(JSON.stringify(Mock.surveyTemplate.itemContainer));
      });

      it("Mock.surveyTemplate.navigationList", function() {
        expect(JSON.stringify(parsedSurvey.navigationList)).toEqual(JSON.stringify(Mock.surveyTemplate.navigationList));
      });

    });

  });

  function mockSurveyIdentityFactory($injector) {
    Mock.SurveyIdentityFactory = $injector.get('SurveyIdentityFactory');
    return Mock.SurveyIdentityFactory;
  }

  function mockSurveyMetaInfoFactory($injector) {
    Mock.SurveyMetaInfoFactory = $injector.get('SurveyMetaInfoFactory');
    return Mock.SurveyMetaInfoFactory;
  }

  function mockSurveyUUIDGenerator($injector) {
    Mock.SurveyUUIDGenerator = $injector.get('SurveyUUIDGenerator');
    spyOn(Mock.SurveyUUIDGenerator,'generateSurveyUUID').and.callFake(function() {
      return '123456';
    });
    return Mock.SurveyUUIDGenerator;
  }

  function mockNavigationManagerFactory($injector) {
    Mock.NavigationManagerFactory = $injector.get('otusjs.model.navigation.NavigationManagerFactory');
    return Mock.NavigationManagerFactory;
  }

  function mockSurveyItemManagerFactory($injector) {
    Mock.SurveyItemManagerFactory = $injector.get('SurveyItemManagerFactory');
    return Mock.SurveyItemManagerFactory;
  }

  function mockDataSourceFactory($injector) {
    Mock.DataSourceDefinitionManagerFactory = $injector.get('otusjs.model.survey.DataSourceDefinitionManagerFactory');
    return Mock.DataSourceDefinitionManagerFactory;
  }

});
