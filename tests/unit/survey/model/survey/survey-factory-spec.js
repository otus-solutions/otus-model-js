describe('SurveyFactory', function() {
  var Mock = {};
  var survey;

  beforeEach(function() {
    module('otusjs');

    Mock.surveyTemplate = Test.utils.data.latestSurveyTemplate;

    inject(function(_$injector_) {
      factory = _$injector_.get('SurveyFactory', {
        'SurveyIdentityFactory': mockSurveyIdentityFactory(_$injector_),
        'SurveyMetaInfoFactory': mockSurveyMetaInfoFactory(_$injector_),
        'SurveyUUIDGenerator': mockSurveyUUIDGenerator(_$injector_),
        'NavigationManagerService': mockNavigationManagerService(_$injector_),
        'SurveyItemManagerService': mockSurveyItemManagerService(_$injector_)
      });
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
      spyOn(Mock.SurveyUUIDGenerator, 'generateSurveyUUID');

      factory.create(jasmine.any(String), jasmine.any(String));

      expect(Mock.SurveyUUIDGenerator.generateSurveyUUID).toHaveBeenCalled();
    });

    it('should call SurveyItemManagerService.init()', function() {
      spyOn(Mock.SurveyItemManagerService, 'init');

      factory.create(jasmine.any(String), jasmine.any(String));

      expect(Mock.SurveyItemManagerService.init).toHaveBeenCalled();
    });

  });

  describe("SurveyFactory.fromJsonObject(jsonObject)", function() {

    beforeEach(function() {
      survey = factory.fromJsonObject(Mock.surveyTemplate);
    });

    it("should call SurveyMetaInfoFactory.fromJsonObject method with Mock.surveyTemplate.metainfo", function() {
      expect(Mock.SurveyMetaInfoFactory.fromJsonObject).toHaveBeenCalledWith(Mock.surveyTemplate.metainfo);
    });

    it("should call SurveyIdentityFactory.fromJsonObject method with Mock.surveyTemplate.identity", function() {
      expect(Mock.SurveyIdentityFactory.fromJsonObject).toHaveBeenCalledWith(Mock.surveyTemplate.identity);
    });

    it("should call SurveyItemManager.loadJsonDataObject method with Mock.surveyTemplate.itemContainer", function() {
      expect(Mock.SurveyItemManagerService.loadJsonDataObject).toHaveBeenCalledWith(Mock.surveyTemplate.itemContainer);
    });

    it("should call NavigationManager.loadJsonData method with Mock.surveyTemplate.navigationList", function() {
      expect(Mock.NavigationManagerService.loadJsonData).toHaveBeenCalledWith(Mock.surveyTemplate.navigationList);
    });

    describe("should create an instance with the same values of", function() {

      beforeEach(function () {
        stringifiedSurvey = survey.toJson();
        parsedSurvey = JSON.parse(stringifiedSurvey);
      });

      it("Mock.surveyTemplate", function() {
        expect(JSON.stringify(parsedSurvey)).toEqual(JSON.stringify(Mock.surveyTemplate));
      });

      it("Mock.surveyTemplate.identity", function() {
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
    spyOn(Mock.SurveyIdentityFactory, "fromJsonObject").and.callThrough();
    return Mock.SurveyIdentityFactory;
  }

  function mockSurveyMetaInfoFactory($injector) {
    Mock.SurveyMetaInfoFactory = $injector.get('SurveyMetaInfoFactory');
    spyOn(Mock.SurveyMetaInfoFactory, "fromJsonObject").and.callThrough();
    return Mock.SurveyMetaInfoFactory;
  }

  function mockSurveyUUIDGenerator($injector) {
    Mock.SurveyUUIDGenerator = $injector.get('SurveyUUIDGenerator');
    return Mock.SurveyUUIDGenerator;
  }

  function mockNavigationManagerService($injector) {
    Mock.NavigationManagerService = $injector.get('otusjs.model.navigation.NavigationManagerService');
    spyOn(Mock.NavigationManagerService, "loadJsonData").and.callThrough();
    return Mock.NavigationManagerService;
  }

  function mockSurveyItemManagerService($injector) {
    Mock.SurveyItemManagerService = $injector.get('SurveyItemManagerService');
    spyOn(Mock.SurveyItemManagerService, "loadJsonDataObject").and.callThrough();
    return Mock.SurveyItemManagerService;
  }

});
