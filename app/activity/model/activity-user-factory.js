(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivityUserFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'ActivityUser';

    /* Public methods */
    self.create = create;

    function create(name, email) {
      return new ActivityUser(name, email);
    }

    return self;
  }

  function ActivityUser(name, email) {
    var self = this;

    self.objectType = 'ActivityUser';
    self.name = name;
    self.email = email;

    self.toJson = toJson;

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.email = self.email;

      return JSON.stringify(json);
    }

  }

}());
