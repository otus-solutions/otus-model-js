(function() {
    'use strict';

    angular
        .module('otusjs.survey')
        .factory('SurveyFactory', SurveyFactory);

    SurveyFactory.$inject = [
        'SurveyIdentityFactory',
        'SurveyMetaInfoFactory',
        'SurveyUUIDGenerator',
        'NavigationManagerService',
        'SurveyItemManagerService'
    ];

    function SurveyFactory(SurveyIdentityFactory, SurveyMetaInfoFactory, SurveyUUIDGenerator, NavigationManagerService, SurveyItemManagerService) {
        var self = this;

        /* Public interdace */
        self.create = create;

        function create(name, acronym) {
            var metainfo = SurveyMetaInfoFactory.create();
            var identity = SurveyIdentityFactory.create(name, acronym);
            var UUID = SurveyUUIDGenerator.generateSurveyUUID();

            return new Survey(metainfo, identity, UUID, NavigationManagerService, SurveyItemManagerService);
        }

        return self;
    }

    function Survey(surveyMetainfo, surveyIdentity, uuid, NavigationManagerService, SurveyItemManagerService) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'Survey';
        self.oid = uuid;
        self.identity = surveyIdentity;
        self.metainfo = surveyMetainfo;
        self.SurveyItemManager = SurveyItemManagerService;
        self.NavigationManager = NavigationManagerService;

        self.NavigationManager.init();

        /* Public methods */
        self.getItemByTemplateID = getItemByTemplateID;
        self.addItem = addItem;
        self.addItem = addItem;
        self.removeItem = removeItem;
        self.updateItem = updateItem;
        self.toJson = toJson;

        function getItemByTemplateID(templateID) {
            return self.SurveyItemManager.getItemByTemplateID(templateID);
        }

        function addItem(type) {
            var item = self.SurveyItemManager.addItem(type, self.identity.acronym);
            self.NavigationManager.addNavigation();
            return item;
        }

        function removeItem(templateID) {
            self.SurveyItemManager.removeItem(templateID);
            self.NavigationManager.removeNavigation(templateID);
        }

        function updateItem(item) {
            self.navigationList[item.templateID] = item;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.oid = self.oid;
            json.identity = self.identity.toJson();
            json.metainfo = self.metainfo.toJson();

            json.itemContainer = [];
            self.SurveyItemManager.getItemList().forEach(function(item) {
                json.itemContainer.push(item.toJson());
            });

            json.navigationList = [];
            NavigationManagerService.getNavigationList().forEach(function(navigation) {
                json.navigationList.push(navigation.toJson());
            });

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());
