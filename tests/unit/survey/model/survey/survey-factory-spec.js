describe('SurveyFactory', function () {
  var Mock = {};
  var factory;
  var survey;
  var Injections = {};
  var jsonObject = {};


  beforeEach(function () {
    angular.mock.module('otusjs');

    Mock.surveyTemplate = Test.utils.data.latestSurveyTemplate;
    inject(function (_$injector_) {
      Injections = {
        'SurveyIdentityFactory': mockSurveyIdentityFactory(_$injector_),
        'SurveyMetaInfoFactory': mockSurveyMetaInfoFactory(_$injector_),
        'SurveyUUIDGenerator': mockSurveyUUIDGenerator(_$injector_),
        'NavigationManagerFactory': mockNavigationManagerFactory(_$injector_),
        'SurveyItemManagerFactory': mockSurveyItemManagerFactory(_$injector_),
        'DataSourceDefinitionManagerFactory': mockDataSourceFactory(_$injector_),
        'SurveyDictionaryService': mockSurveyDictionaryService(_$injector_),
        'StaticVariableFactory': mockStaticVariableManager(_$injector_),
        'SurveyItemGroupManagerFactory': mockSurveyItemGroupManager(_$injector_),
        'ManagerCenterService': mockManagerCenterService(_$injector_)
      };
      factory = _$injector_.get('SurveyFactory', Injections);
    });
    spyOn(Injections.SurveyDictionaryService, 'dictionaryConstructionByExtractionId', jsonObject).and.callThrough();
  });

  describe('SurveyFactory.create()', function () {

    beforeEach(function () {
      survey = factory.create(jasmine.any(String), jasmine.any(String));
    });

    it('should return a Survey that extends from StudioObject', function () {
      expect(survey.extents).toBe('StudioObject');
    });

    it('should return a Survey object type', function () {
      expect(survey.objectType).toBe('Survey');
    });

    it('should return a Survey with a SurveyMetaInfo object type', function () {
      expect(survey.metainfo.objectType).toBe('SurveyMetaInfo');
    });

    it('should return a Survey with an OID', function () {
      expect(survey.oid).toBeDefined();
    });

    it('should return a Survey with a SurveyIdentity object type', function () {
      expect(survey.identity.objectType).toBe('SurveyIdentity');
    });

    it('should call SurveyUUIDGenerator.generateSurveyUUID()', function () {
      expect(Mock.SurveyUUIDGenerator.generateSurveyUUID).toHaveBeenCalled();
    });

    it("should move a SurveyItem by calling SurveyItemManager, NavigationManager and SurveyItemGroupManager", function () {
      spyOn(survey.SurveyItemManager, 'moveItem');
      spyOn(survey.NavigationManager, 'moveNavigation');
      spyOn(survey.SurveyItemGroupManager, 'allowItemMovement');
      let mockSurveyItem = {templateID: "ID", customID: "customID"};

      survey.moveItem(mockSurveyItem, 5);
      expect(survey.SurveyItemManager.moveItem).toHaveBeenCalled();
      expect(survey.NavigationManager.moveNavigation).toHaveBeenCalled();
      expect(survey.SurveyItemGroupManager.allowItemMovement).toHaveBeenCalled();
    });
  });

  describe("SurveyFactory.fromJsonObject(jsonObject)", function () {
    var json = {};

    beforeEach(function () {
      spyOn(Mock.SurveyMetaInfoFactory, 'fromJsonObject');
      survey = factory.fromJsonObject(Mock.surveyTemplate);
    });

    it("should call SurveyMetaInfoFactory.fromJsonObject method with Mock.surveyTemplate.metainfo", function () {
      expect(Mock.SurveyMetaInfoFactory.fromJsonObject).toHaveBeenCalledWith(Mock.surveyTemplate.metainfo);
    });
  });

  //fixme
  xdescribe("SurveyFactory.createDictionary", function () {
    beforeEach(function () {
      jsonObject = Test.utils.data.templateExampleWithAllQuestionsAndValidations;
      Mock.dictionary = factory.createDictionary(jsonObject);
    });

    it('createDictionaryMethod_should_convert_template_with_example_of_all_questions_in_a_list_with_21_elements', function () {
      let expectedSizeList = 21;
      expect(expectedSizeList).toBe(Mock.dictionary.length);
    });
    it('createDictionaryMethod_should_check_objectType_for_each_created_element', function () {
      expect(Mock.dictionary[0].objectType).toBe("SingleSelectionQuestion");
      expect(Mock.dictionary[1].objectType).toBe("IntegerQuestion");
      expect(Mock.dictionary[2].objectType).toBe("CalendarQuestion");
      expect(Mock.dictionary[3].objectType).toBe("DecimalQuestion");
      expect(Mock.dictionary[4].objectType).toBe("CheckboxQuestion");
      expect(Mock.dictionary[5].objectType).toBe("CheckboxQuestion");
      expect(Mock.dictionary[6].objectType).toBe("CheckboxQuestion");
      expect(Mock.dictionary[7].objectType).toBe("CheckboxQuestion");
      expect(Mock.dictionary[8].objectType).toBe("TextQuestion");
      expect(Mock.dictionary[9].objectType).toBe("EmailQuestion");
      expect(Mock.dictionary[10].objectType).toBe("TimeQuestion");
      expect(Mock.dictionary[11].objectType).toBe("PhoneQuestion");
      expect(Mock.dictionary[12].objectType).toBe("AutocompleteQuestion");
      expect(Mock.dictionary[13].objectType).toBe("FileUploadQuestion");
      expect(Mock.dictionary[14].objectType).toBe("GridTextQuestion");
      expect(Mock.dictionary[15].objectType).toBe("GridTextQuestion");
      expect(Mock.dictionary[16].objectType).toBe("GridTextQuestion");
      expect(Mock.dictionary[17].objectType).toBe("TextItem");
      expect(Mock.dictionary[18].objectType).toBe("GridIntegerQuestion");
      expect(Mock.dictionary[19].objectType).toBe("GridIntegerQuestion");
      expect(Mock.dictionary[20].objectType).toBe("GridIntegerQuestion");
    });
    it('createDictionaryMethod_should_invoke_dictionary_construction_service', function () {
      expect(Injections.SurveyDictionaryService.dictionaryConstructionByExtractionId).toHaveBeenCalledTimes(1)
    });
  });

  describe('The static variable methods', function () {
    beforeEach(function () {
      spyOn(Mock.StaticVariableManagerFactory, 'create').and.returnValue(Mock.StaticVariableManager);
      spyOn(Mock.StaticVariableManager, 'create').and.callThrough();
      spyOn(Mock.StaticVariableManager, 'getWholeTemplateVariables').and.callThrough();
      spyOn(Mock.StaticVariableManager, 'getItemVariables').and.callThrough();
      spyOn(Mock.StaticVariableManager, 'getStaticVariableList').and.callThrough();

      survey = factory.create();
    });

    it('should call the managers create method', function () {
      survey.createStaticVariable();
      expect(Mock.StaticVariableManager.create).toHaveBeenCalled();
    });

    it('should call the managers get list method', function () {
      survey.getStaticVariableList();
      expect(Mock.StaticVariableManager.getStaticVariableList).toHaveBeenCalled();
    });

    it('should call the managers getWholeTemplateVariables method', function () {
      survey.getWholeTemplateVariableList();
      expect(Mock.StaticVariableManager.getWholeTemplateVariables).toHaveBeenCalled();
    });

    it('should call the managers getItemVariables method', function () {
      let itemArray = ["CSJS"];
      survey.getItemStaticVariableList(itemArray);
      expect(Mock.StaticVariableManager.getItemVariables).toHaveBeenCalledWith(itemArray);
    });
  });

  describe('The ManagerCenterService methods', function () {

    beforeEach(function () {
      spyOn(Mock.ManagerCenterService, 'initialize');
    });

    it('should initialize the ManagerCenterService', function () {
      survey = factory.create(jasmine.any(String), jasmine.any(String));
      expect(Mock.ManagerCenterService.initialize).toHaveBeenCalled();
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
    spyOn(Mock.SurveyUUIDGenerator, 'generateSurveyUUID').and.callFake(function () {
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

  function mockSurveyDictionaryService($injector) {
    Mock.SurveyDictionaryService = $injector.get('SurveyDictionaryService');
    return Mock.SurveyDictionaryService;
  }

  function mockStaticVariableManager($injector) {
    Mock.StaticVariableManagerFactory = $injector.get('otusjs.staticVariable.StaticVariableManagerFactory');
    Mock.StaticVariableManager = Mock.StaticVariableManagerFactory.create();
    return Mock.StaticVariableManagerFactory;
  }

  function mockSurveyItemGroupManager($injector) {
    Mock.SurveyItemGroupManagerFactory = $injector.get('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory');
    Mock.SurveyItemGroupManager = Mock.StaticVariableManagerFactory.create();
    return Mock.StaticVariableManagerFactory;
  }

  function mockManagerCenterService($injector) {
    Mock.ManagerCenterService = $injector.get('otusjs.survey.ManagerCenterService');
    return Mock.ManagerCenterService;
  }
});
