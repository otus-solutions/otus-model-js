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

    self._id = data._id;
    self.objectType = 'ActivityBasicModel';
    self.acronym = data.acronym;
    self.name = data.name;
    self.mode = data.mode;
    self.category = data.category;
    self.lastStatus = data.lastStatus;
    self.externalId = data.externalId;
  }

}());