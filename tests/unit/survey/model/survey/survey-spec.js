describe('Survey', function() {
    var Mock = {};
    var survey;

    var QUESTION_TYPE = 'IntegerQuestion';
    var Q1 = 'Q1';
    var Q2 = 'Q2';

    beforeEach(function() {
        module('otusjs');

        mockDatetime();
        mockIdentityData();

        inject(function(_$injector_) {
            mockQuestion(_$injector_);

            factory = _$injector_.get('SurveyFactory', {
                'SurveyIdentityFactory': mockSurveyIdentityFactory(_$injector_),
                'SurveyMetaInfoFactory': mockSurveyMetaInfoFactory(_$injector_),
                'SurveyUUIDGenerator': mockSurveyUUIDGenerator(_$injector_),
                'SurveyItemManagerService': mockSurveyItemManagerService(_$injector_),
                'NavigationManagerService': mockNavigationManagerService(_$injector_)
            });

            mockJson();

            survey = factory.create(Mock.NAME, Mock.ACRONYM);
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
                survey.addItem();
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
                survey.addItem();
                survey.addItem();
            });

            it('should call SurveyItemManagerService.getItemByTemplateID with template id', function() {
                survey.getItemByTemplateID(Q1);

                expect(Mock.SurveyItemManagerService.getItemByTemplateID).toHaveBeenCalledWith(Q1);
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
        Mock.NavigationManagerService = $injector.get('NavigationManagerService');

        spyOn(Mock.NavigationManagerService, 'addNavigation');
        spyOn(Mock.NavigationManagerService, 'removeNavigation');

        return Mock.NavigationManagerService;
    }

    function mockSurveyItemManagerService($injector) {
        Mock.SurveyItemManagerService = $injector.get('SurveyItemManagerService');

        spyOn(Mock.SurveyItemManagerService, 'addItem').and.returnValue(Mock.item);
        spyOn(Mock.SurveyItemManagerService, 'removeItem');
        spyOn(Mock.SurveyItemManagerService, 'getItemByTemplateID');

        return Mock.SurveyItemManagerService;
    }

    function mockIdentityData() {
        Mock.NAME = 'NAME';
        Mock.ACRONYM = 'ACRONYM';
        Mock.VERSION = 'VERSION';
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
                // version: Mock.VERSION,
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

});
