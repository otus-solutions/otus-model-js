(function() {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('SurveyFactory', SurveyFactory);

  SurveyFactory.$inject = [
    'SurveyIdentityFactory',
    'SurveyMetaInfoFactory',
    'SurveyUUIDGenerator',
    'otusjs.model.navigation.NavigationManagerFactory',
    'SurveyItemManagerFactory'
  ];

  function SurveyFactory(SurveyIdentityFactory, SurveyMetaInfoFactory, SurveyUUIDGenerator, NavigationManagerFactory, SurveyItemManagerFactory) {
    var self = this;

    self.OBJECT_TYPE = 'Survey';

    /* Public interdace */
    self.create = create;
    self.load = load;
    self.fromJsonObject = fromJsonObject;

    /**
    TODO :

    Quando for implementado o novo método de carregamento no projeto OTUS-STUDIO,
    deve-se excluir o método load e usar somente o fromJsonObject.

    */
    function load(jsonObject) {
      var metainfo = SurveyMetaInfoFactory.fromJsonObject(jsonObject.metainfo);
      var identity = SurveyIdentityFactory.fromJsonObject(jsonObject.identity);
      var UUID = jsonObject.oid;
      var itemManager = SurveyItemManagerFactory.create();

      return new Survey(metainfo, identity, UUID, NavigationManagerFactory.create(itemManager), itemManager);
    }

    function create(name, acronym) {
      var metainfo = SurveyMetaInfoFactory.create();
      var identity = SurveyIdentityFactory.create(name, acronym);
      var UUID = SurveyUUIDGenerator.generateSurveyUUID();
      var itemManager = SurveyItemManagerFactory.create();

      return new Survey(metainfo, identity, UUID, NavigationManagerFactory.create(itemManager), itemManager);
    }

    function fromJsonObject(jsonObject) {
      var metainfo = SurveyMetaInfoFactory.fromJsonObject(jsonObject.metainfo);
      var identity = SurveyIdentityFactory.fromJsonObject(jsonObject.identity);
      var UUID = jsonObject.oid;
      var itemManager = SurveyItemManagerFactory.create();
      var survey = new Survey(metainfo, identity, UUID, NavigationManagerFactory.create(itemManager), itemManager);

      survey.SurveyItemManager.loadJsonDataObject(jsonObject.itemContainer);
      survey.NavigationManager.loadJsonData(jsonObject.navigationList);

      return survey;
    }

    return self;
  }

  function Survey(surveyMetainfo, surveyIdentity, uuid, NavigationManagerService, SurveyItemManager) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'Survey';
    self.oid = uuid;
    self.identity = surveyIdentity;
    self.metainfo = surveyMetainfo;
    self.SurveyItemManager = SurveyItemManager;
    self.NavigationManager = NavigationManagerService;

    self.NavigationManager.init();
    self.SurveyItemManager.init();

    /* Public methods */
    self.addItem = addItem;
    self.loadItem = loadItem;
    self.removeItem = removeItem;
    self.getItemByTemplateID = getItemByTemplateID;
    self.getItemByCustomID = getItemByCustomID;
    self.getItemByID = getItemByID;
    self.isAvailableID = isAvailableID;
    self.isAvailableCustomID = isAvailableCustomID;
    self.updateItem = updateItem;
    self.toJson = toJson;

    function getItemByTemplateID(templateID) {
      return self.SurveyItemManager.getItemByTemplateID(templateID);
    }

    function getItemByCustomID(customID) {
      return self.SurveyItemManager.getItemByCustomID(customID);
    }

    function getItemByID(id) {
      return self.SurveyItemManager.getItemByID(id);
    }

    function isAvailableID(id) {
      return !self.SurveyItemManager.existsItem(id);
    }

    function isAvailableCustomID(id) {
      return self.SurveyItemManager.isAvailableCustomID(id);
    }

    function addItem(type) {
      var item = self.SurveyItemManager.addItem(type, self.identity.acronym);
      self.NavigationManager.addNavigation();
      return item;
    }

    function loadItem(type, templateID) {
      var item = self.SurveyItemManager.loadItem(type, templateID, self.identity.acronym);
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
        if (navigation) {
          json.navigationList.push(navigation.toJson());
        } else {
          json.navigationList.push({});
        }
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
    }
  }

}());
