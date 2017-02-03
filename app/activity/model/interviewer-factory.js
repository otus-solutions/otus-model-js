(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.InterviewerFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'Interviewer';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(userData) {
      return new Interviewer(userData || {});
    }

    function fromJsonObject(jsonObject) {
      return new Interviewer(jsonObject);
    }

    return self;
  }

  function Interviewer(userData) {
    var self = this;

    self.objectType = 'Interviewer';
    self.name = userData.name;
    self.surname = userData.surname;
    self.email = userData.email;

    /* Public methods */
    self.getFullname = getFullname;
    self.toJson = toJson;

    function getFullname() {
      return self.name + ' ' + self.surname;
    }

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.surname = self.surname;
      json.email = self.email;

      return JSON.stringify(json);
    }
  }

}());
