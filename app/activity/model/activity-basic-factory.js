(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivityBasicFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    const self = this;
    self.OBJECT_TYPE = 'ActivityBasicModelFactory';

    /* Public methods */
    self.fromJsonObject = fromJsonObject;

    function fromJsonObject(jsonObject) {
      return new ActivityBasicModel(jsonObject);
    };

    return self;
  }

  function ActivityBasicModel(data) {
    const self = this;

    self._id = data._id
    self.objectType = 'ActivityBasicModel';
    self.acronym = data.acronym;
    self.name = data.name;
    self.mode = data.mode;
    self.category = data.category;
    self.lastStatus = data.lastStatus;
    self.externalId = data.externalId;

    self.getId = getId;
    self.getAcronym = getAcronym;
    self.getName = getName;
    self.getMode = getMode;
    self.getCategory = getCategory;
    self.getLastStatus = getLastStatus;
    self.getExternalId = getExternalId;

    function getId() {
      return self._id;
    }

    function getAcronym() {
      return self.acronym;
    }

    function getName() {
      return self.name;
    }

    function getMode() {
      return self.mode;
    }

    function getCategory() {
      return self.category;
    }

    function getLastStatus() {
      return self.lastStatus;
    }

    function getExternalId() {
      return self.externalId;
    }
  }

}())