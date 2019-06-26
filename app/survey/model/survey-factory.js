(function () {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('SurveyFactory', SurveyFactory);

  SurveyFactory.$inject = [
    'SurveyIdentityFactory',
    'SurveyMetaInfoFactory',
    'SurveyUUIDGenerator',
    'otusjs.model.navigation.NavigationManagerFactory',
    'SurveyItemManagerFactory',
    'otusjs.model.survey.DataSourceDefinitionManagerFactory'
  ];

  var Inject = {};

  function SurveyFactory(SurveyIdentityFactory, SurveyMetaInfoFactory, SurveyUUIDGenerator, NavigationManagerFactory, SurveyItemManagerFactory, DataSourceDefinitionManagerFactory) {
    var self = this;

    self.OBJECT_TYPE = 'Survey';

    Inject.SurveyItemManagerFactory = SurveyItemManagerFactory;
    Inject.NavigationManagerFactory = NavigationManagerFactory;
    Inject.DataSourceDefinitionManagerFactory = DataSourceDefinitionManagerFactory;

    /* Public interface */
    self.create = create;
    self.load = load;
    self.fromJsonObject = fromJsonObject;
    self.createDictionary = createDictionary;

    /**
     TODO :

     Quando for implementado o novo método de carregamento no projeto OTUS-STUDIO,
     deve-se excluir o método load e usar somente o fromJsonObject.

     */
    function load(jsonObject) {
      var metainfo = SurveyMetaInfoFactory.fromJsonObject(jsonObject.metainfo);
      var identity = SurveyIdentityFactory.fromJsonObject(jsonObject.identity);
      var UUID = jsonObject.oid;

      var survey = new Survey(metainfo, identity, UUID);
      survey.DataSourceManager.loadJsonData(jsonObject.dataSources);

      return survey;
    }

    function create(name, acronym) {
      var UUID = SurveyUUIDGenerator.generateSurveyUUID();
      var metainfo = SurveyMetaInfoFactory.create();
      var identity = SurveyIdentityFactory.create(name, acronym);


      var survey = new Survey(metainfo, identity, UUID);
      survey.initialize();

      return survey;
    }

    function fromJsonObject(jsonObject) {
      var metainfo = SurveyMetaInfoFactory.fromJsonObject(jsonObject.metainfo);
      var identity = SurveyIdentityFactory.fromJsonObject(jsonObject.identity);
      var UUID = jsonObject.oid;
      var survey = new Survey(metainfo, identity, UUID);

      survey.SurveyItemManager.loadJsonDataObject(jsonObject.itemContainer);
      survey.NavigationManager.loadJsonData(jsonObject.navigationList);
      survey.DataSourceManager.loadJsonData(jsonObject.dataSources);

      return survey;
    }

    function createDictionary(jsonObject) {
      return _mountDictionaryInstances(jsonObject);
    }

    return self;
  }

  function _mountDictionaryInstances(jsonObject) {
    let dictionary = [];
    jsonObject.itemContainer.forEach(item => {
      let json = {};
      json.acronym = jsonObject.identity.acronym;
      json.extractionID = item.customID;
      json.label = item.label.ptBR.formattedText;
      json.dataType = item.dataType;
      json.extractionValues = _itemContainerCaptureValues(item);
      json.metadata = _itemContainerCaptureMetadata(item);
      json.validatorTypes = _itemContainerCaptureValidatorTypes(item);
      dictionary.push(json);
    });
    return dictionary;
  }

  function _itemContainerCaptureMetadata(item) {
    let metadataList = new Map();
    item.metadata.options.map(md => {
      metadataList.set( md.label.ptBR.formattedText, md.extractionValue);
    });
    return metadataList;
  }

  function _itemContainerCaptureValues(item) {
    let values = new Map();
    if (Array.isArray(item.options)) {
      item.options.map(option => {
        switch (option.objectType) {
          case "CheckboxAnswerOption":
            values.set(option.optionID, option.label.ptBR.formattedText);
            break;
          case "AnswerOption":
             values.set(option.label.ptBR.formattedText, option.extractionValue);
             break;
        }
      });
    }
    return values;
  }

  function _itemContainerCaptureValidatorTypes(item) {
    let validators = new Map();

    if (item.fillingRules.options.mandatory) {
      validators.set(item.fillingRules.options.mandatory.validatorType,
        item.fillingRules.options.mandatory.data.reference);
    }
    if (item.fillingRules.options.accept) {
      validators.set(item.fillingRules.options.accept.validatorType,
        item.fillingRules.options.accept.data.reference);
    }
    if (item.fillingRules.options.distinct) {
      validators.set(item.fillingRules.options.distinct.validatorType,
        item.fillingRules.options.distinct.data.reference);
    }
    if (item.fillingRules.options.lowerLimit) {
      validators.set(item.fillingRules.options.lowerLimit.validatorType,
        item.fillingRules.options.lowerLimit.data.reference);
    }
    if (item.fillingRules.options.upperLimit) {
      validators.set(item.fillingRules.options.upperLimit.validatorType,
        item.fillingRules.options.upperLimit.data.reference);
    }
    if (item.fillingRules.options.precision) {
      validators.set(item.fillingRules.options.precision.validatorType,
        item.fillingRules.options.precision.data.reference);
    }
    if (item.fillingRules.options.scale) {
      validators.set(item.fillingRules.options.scale.validatorType,
        item.fillingRules.options.scale.data.reference);
    }
    if (item.fillingRules.options.in) {
      validators.set(item.fillingRules.options.in.validatorType,
        [item.fillingRules.options.in.data.reference.initial + '~' +
        item.fillingRules.options.in.data.reference.end]);
    }
    if (item.fillingRules.options.minDate) {
      validators.set(item.fillingRules.options.minDate.validatorType,
        item.fillingRules.options.minDate.data.reference.value,
      );
    }
    if (item.fillingRules.options.maxDate) {
      validators.set(item.fillingRules.options.maxDate.validatorType,
        item.fillingRules.options.maxDate.data.reference.value,
      );
    }
    if (item.fillingRules.options.futureDate) {
      validators.set(item.fillingRules.options.futureDate.validatorType,
        item.fillingRules.options.futureDate.data.reference,
      );
    }
    if (item.fillingRules.options.pastDate) {
      validators.set(item.fillingRules.options.pastDate.validatorType,
        item.fillingRules.options.pastDate.data.reference,
      );
    }
    if (item.fillingRules.options.rangeDate) {
      validators.set(item.fillingRules.options.rangeDate.validatorType,
        [item.fillingRules.options.rangeDate.data.reference.initial.value +'~'+
        item.fillingRules.options.rangeDate.data.reference.end.value]
      );
    }
    if (item.fillingRules.options.minSelected) {
      validators.set(item.fillingRules.options.minSelected.validatorType,
        item.fillingRules.options.minSelected.data.reference);
    }
    if (item.fillingRules.options.maxSelected) {
      validators.set(item.fillingRules.options.maxSelected.validatorType,
        item.fillingRules.options.maxSelected.data.reference);
    }
    if (item.fillingRules.options.quantity) {
      validators.set(item.fillingRules.options.quantity.validatorType,
        item.fillingRules.options.quantity.data.reference);
    }


    return validators;
  };

  function Survey(surveyMetainfo, surveyIdentity, uuid) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'Survey';
    self.oid = uuid;
    self.identity = surveyIdentity;
    self.metainfo = surveyMetainfo;
    self.SurveyItemManager = Inject.SurveyItemManagerFactory.create();
    self.NavigationManager = Inject.NavigationManagerFactory.create(self);
    self.DataSourceManager = Inject.DataSourceDefinitionManagerFactory.create();

    /* Public methods */
    self.initialize = initialize;
    self.addItem = addItem;
    self.removeItem = removeItem;
    self.moveItem = moveItem;
    self.updateItem = updateItem;
    self.loadItem = loadItem;
    self.getItems = getItems;
    self.getItemByTemplateID = getItemByTemplateID;
    self.getItemByCustomID = getItemByCustomID;
    self.getItemByID = getItemByID;
    self.isAvailableID = isAvailableID;
    self.isAvailableCustomID = isAvailableCustomID;
    self.getDataSource = getDataSource;
    self.getAllDataSources = getAllDataSources;
    self.toJSON = toJSON;

    function initialize() {
      self.SurveyItemManager.init();
      self.NavigationManager.initialize();
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

    function moveItem(item, position) {
      self.SurveyItemManager.moveItem(item, position);
      self.NavigationManager.moveNavigation(item.templateID, position);
    }

    function updateItem(item) {
      self.navigationList[item.templateID] = item;
    }

    function loadItem(type, templateID) {
      var item = self.SurveyItemManager.loadItem(type, templateID, self.identity.acronym);
      self.NavigationManager.addNavigation();
      return item;
    }

    function getItems() {
      return self.SurveyItemManager.getItemList();
    }

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

    function getDataSource(name) {
      return self.DataSourceManager.getDataSourceDefinition(name);
    }

    function getAllDataSources() {
      return angular.copy(self.DataSourceManager.list());
    }

    function isAutocomplete(item) {
      return item.objectType === "AutocompleteQuestion";
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.oid = self.oid;
      json.identity = self.identity;
      json.metainfo = self.metainfo;
      if (self.DataSourceManager.toJSON().length) {
        json.dataSources = self.DataSourceManager;
      } else {
        json.dataSources = [];
      }

      json.itemContainer = [];
      self.SurveyItemManager.getItemList().forEach(function (item) {
        json.itemContainer.push(item);
      });

      json.navigationList = [];
      self.NavigationManager.getNavigationList().forEach(function (navigation) {
        if (navigation) {
          json.navigationList.push(navigation);
        } else {
          json.navigationList.push({});
        }
      });

      return json;
    }


  }
}());
