xdescribe('Survey', function() {
  var Mock = {};
  var factory;
  var survey;

  var QUESTION_TYPE = 'IntegerQuestion';
  var CHECKBOX_TYPE = 'CheckboxQuestion';
  var Q1 = 'Q1';
  var Q2 = 'Q2';
  var AVAILABLE_ID = 'AvailableID';
  var AVAILABLE_CUSTOM_ID = 'AvailableCustomID';

  beforeEach(function() {
    angular.mock.module('otusjs');

    mockDatetime();
    mockIdentityData();

    inject(function(_$injector_) {
      mockQuestion(_$injector_);

      factory = _$injector_.get('SurveyFactory', {
        'SurveyIdentityFactory': mockSurveyIdentityFactory(_$injector_),
        'SurveyMetaInfoFactory': mockSurveyMetaInfoFactory(_$injector_),
        'SurveyUUIDGenerator': mockSurveyUUIDGenerator(_$injector_),
        'SurveyItemManagerService': mockSurveyItemManagerService(_$injector_),
        'NavigationManagerService': mockNavigationManagerService(_$injector_),
        'UpdateSurveyItemCustomID': mockUpdateSurveyItemCustomID(_$injector_)
      });

      mockJson();

      survey = factory.create(Mock.NAME, Mock.ACRONYM, Mock.VERSION);
    });
  });

  describe('item management', function() {

    describe('addItem method', function() {

      it('should call SurveyItemManagerService.addItem with item type', function() {
        survey.addItem(QUESTION_TYPE);

        expect(Mock.SurveyItemManagerService.addItem).toHaveBeenCalledWith(QUESTION_TYPE, Mock.ACRONYM);
      });

      it('should call SurveyItemManagerService.addItem with template id prefix', function() {
        survey.addItem(QUESTION_TYPE);

        expect(Mock.SurveyItemManagerService.addItem).toHaveBeenCalledWith(QUESTION_TYPE, Mock.ACRONYM);
      });

      it('should call NavigationManagerService.addNavigation with item list', function() {
        survey.addItem(QUESTION_TYPE);

        expect(Mock.NavigationManagerService.addNavigation).toHaveBeenCalledWith();
      });

      it('should return the new created item', function() {
        var item = survey.addItem(QUESTION_TYPE);

        expect(item).toBeDefined();
      });

    });

    describe('removeItem method', function() {

      beforeEach(function() {
        survey.addItem(QUESTION_TYPE);
      });

      it('should call SurveyItemManagerService.removeItem with new item ID', function() {
        survey.removeItem(Q1);

        expect(Mock.SurveyItemManagerService.removeItem).toHaveBeenCalledWith(Q1);
      });

      it('should call NavigationManagerService.removeNavigation with new item ID', function() {
        survey.removeItem(Q1);

        expect(Mock.NavigationManagerService.removeNavigation).toHaveBeenCalledWith(Q1);
      });

    });

    describe('getItemByTemplateID method', function() {

      beforeEach(function() {
        spyOn(Mock.SurveyItemManagerService, 'getItemByTemplateID');
        survey.addItem(QUESTION_TYPE);
        survey.addItem(QUESTION_TYPE);
      });

      it('should call SurveyItemManagerService.getItemByTemplateID with template id', function() {
        survey.getItemByTemplateID(Q1);

        expect(Mock.SurveyItemManagerService.getItemByTemplateID).toHaveBeenCalledWith(Q1);
      });
    });

    describe('getItemByCustomID method', function() {

      beforeEach(function() {
        spyOn(Mock.SurveyItemManagerService, 'getItemByCustomID');

        survey.addItem(QUESTION_TYPE);
        survey.addItem(QUESTION_TYPE);
      });

      it('should call SurveyItemManagerService.getItemByCustomID with template id', function() {
        survey.getItemByCustomID(Q1);

        expect(Mock.SurveyItemManagerService.getItemByCustomID).toHaveBeenCalledWith(Q1);
      });
    });

    describe('getItemByID method', function() {

      beforeEach(function() {
        survey.addItem(QUESTION_TYPE);
        survey.addItem(QUESTION_TYPE);
      });

      it('should call SurveyItemManagerService.getItemByID with template id', function() {
        survey.getItemByID(Q1);

        expect(Mock.SurveyItemManagerService.getItemByID).toHaveBeenCalledWith(Q1);
      });
    });

    describe('isAvailableID method', function() {

      it('should return true when passed id is not used', function() {
        expect(survey.isAvailableID(AVAILABLE_ID)).toBe(true);
      });

      it('should return false when id is used', function() {
        survey.addItem(QUESTION_TYPE);
        expect(survey.isAvailableID('ACRONYM1')).toBe(false);
      });
    });

    describe('isAvailableCustomID method', function() {

      it('should return true if a customID of first item was changed', function() {
        var item1 = survey.addItem(QUESTION_TYPE); //ACRONYM1
        var item2 = survey.addItem(QUESTION_TYPE); //ACRONYM2

        Mock.UpdateSurveyItemCustomID.execute(item1, 'teste');
        expect(survey.isAvailableCustomID('ACRONYM1')).toBe(true);
      });

      it('should return true when passed id is not used', function() {
        expect(survey.isAvailableCustomID(AVAILABLE_ID)).toBe(true);
      });

      it('should return false when id is used', function() {
        survey.addItem(QUESTION_TYPE);
        expect(survey.isAvailableCustomID('ACRONYM1')).toBe(false);
      });

      it('should verify questions and custom options id', function() {
        var IntegerQuestion = survey.addItem(QUESTION_TYPE);
        var CheckboxQuestion = survey.addItem(CHECKBOX_TYPE);
        CheckboxQuestion.createOption('ACRONYM2a');
        CheckboxQuestion.createOption('ACRONYM2b');

        expect(survey.isAvailableCustomID('ACRONYM2a')).toBe(false);
      });
    });
  });

  function mockSurveyIdentityFactory($injector) {
    Mock.SurveyIdentityFactory = $injector.get('SurveyIdentityFactory');
    Mock.identity = Mock.SurveyIdentityFactory.create();
    return Mock.SurveyIdentityFactory;
  }

  function mockSurveyMetaInfoFactory($injector) {
    return $injector.get('SurveyMetaInfoFactory');
  }

  function mockSurveyUUIDGenerator($injector) {
    Mock.SurveyUUIDGenerator = $injector.get('SurveyUUIDGenerator');
    spyOn(Mock.SurveyUUIDGenerator, 'generateSurveyUUID').and.returnValue('0');
    return Mock.SurveyUUIDGenerator;
  }

  function mockNavigationAddFactory($injector) {
    Mock.NavigationAddFactory = $injector.get('NavigationAddFactory');

    spyOn(Mock.NavigationAddFactory, 'create');

    return Mock.NavigationAddFactory;
  }

  function mockNavigationRemoveFactory($injector) {
    Mock.NavigationRemoveFactory = $injector.get('NavigationRemoveFactory');

    spyOn(Mock.NavigationRemoveFactory, 'create');

    return Mock.NavigationRemoveFactory;
  }

  function mockNavigationManagerService($injector) {
    Mock.NavigationManagerService = $injector.get('otusjs.model.navigation.NavigationManagerService');

    spyOn(Mock.NavigationManagerService, 'addNavigation');
    spyOn(Mock.NavigationManagerService, 'removeNavigation');

    return Mock.NavigationManagerService;
  }

  function mockSurveyItemManagerService($injector) {
    Mock.SurveyItemManagerService = $injector.get('SurveyItemManagerService');

    spyOn(Mock.SurveyItemManagerService, 'addItem').and.callThrough();
    spyOn(Mock.SurveyItemManagerService, 'removeItem');
    spyOn(Mock.SurveyItemManagerService, 'getItemByID');

    return Mock.SurveyItemManagerService;
  }

  function mockIdentityData() {
    Mock.NAME = 'NAME';
    Mock.ACRONYM = 'ACRONYM';
    Mock.VERSION = 1;
  }

  function mockDatetime() {
    Mock.now = Date.now();
    spyOn(Date, 'now').and.returnValue(Mock.now);
  }

  function mockJson() {
    Mock.json = JSON.stringify({
      extents: 'StudioObject',
      objectType: 'Survey',
      oid: '0',
      identity: {
        extents: 'StudioObject',
        objectType: 'SurveyIdentity',
        name: Mock.NAME,
        acronym: Mock.ACRONYM,
        version: Mock.VERSION,
        recommendedTo: '',
        description: '',
        keywords: []
      },
      metainfo: {
        extents: 'StudioObject',
        objectType: 'SurveyMetaInfo',
        creationDatetime: Mock.now,
        otusStudioVersion: ''
      },
      itemContainer: [],
      navigationList: []
    });
  }

  function mockQuestion($injector) {
    Mock.item = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, Q1);
  }

  function mockUpdateSurveyItemCustomID($injector) {
    Mock.UpdateSurveyItemCustomID = $injector.get('UpdateSurveyItemCustomID');
  }

});
