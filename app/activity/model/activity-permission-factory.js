(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivityPermissionFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(surveyForm) {
      return new ActivityPermission(surveyForm);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)){
        return jsonObject.map(function (permission) {
          return new ActivityPermission(permission)
        });
      }
    }

    return self;
  }

  function ActivityPermission(objectJson) {
    var self = this;


    self.showError = showError;

    self._id = '_id' in objectJson ? objectJson._id : null;
    self.objectType = 'ActivityPermission';

    self.acronym = 'surveyTemplate' in objectJson ? objectJson.surveyTemplate.identity.acronym.toUpperCase(): objectJson.acronym.toUpperCase();
    self.version = objectJson.version ? objectJson.version : self.showError('Version invalid');
    self.exclusiveDisjunction = Array.isArray(objectJson.exclusiveDisjunction) ? objectJson.exclusiveDisjunction : [];


    /* Public methods */
    self.addUser = addUser;
    self.removeUser = removeUser;
    self.isUserExists = isUserExists;
    self.toJSON = toJSON;

    function showError (msg) {
      throw new Error(msg);
    }

    function addUser(email) {
      if(_validEmail(email) && !self.isUserExists(email)){
        self.exclusiveDisjunction.push(email.toLowerCase())
      } else {
        self.showError('Email invalid!');
      }
    }

    function removeUser(email) {
      if(_validEmail(email) && self.isUserExists(email)){
        var index = self.exclusiveDisjunction.indexOf(email.toLowerCase());
        if(index > -1){
          self.exclusiveDisjunction.splice(index, 1);
        }
      } else {
        self.showError('Email invalid!');
      }
    }

    function isUserExists(email) {
      var index = self.exclusiveDisjunction.indexOf(email.toLowerCase());
      return index > -1 ? true : false;
    }

    function _validEmail(email) {
      var Regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/gi;
      return Regex.test(email);
    }

    function toJSON() {
      var json = {};
      json.objectType = self.objectType;
      json.acronym = self.acronym;
      json.version = self.version;
      json.exclusiveDisjunction = self.exclusiveDisjunction;

      return json;
    }

  }
}());
