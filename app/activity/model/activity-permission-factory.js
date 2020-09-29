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
      } else {
        return new ActivityPermission(jsonObject);
      }
    }

    return self;
  }

  function ActivityPermission(objectJson) {
    var self = this;

    /* Public methods */
    self.showError = showError;
    self.addUser = addUser;
    self.removeUser = removeUser;
    self.isUserExists = isUserExists;
    self.toJSON = toJSON;


    self._id = '_id' in objectJson ? objectJson._id : null;
    self.objectType = 'ActivityPermission';

    self.acronym = 'surveyTemplate' in objectJson ? objectJson.surveyTemplate.identity.acronym.toUpperCase(): objectJson.acronym.toUpperCase();
    self.version = objectJson.version ? objectJson.version : self.showError('Version invalid');
    self.exclusiveDisjunction = Array.isArray(objectJson.exclusiveDisjunction) ? objectJson.exclusiveDisjunction : [];


    function showError (msg) {
      throw new Error(msg);
    }

    function addUser(email) {
      if (!_validEmail(email)){
        self.showError('Email invalid!');
      } else if(!self.isUserExists(email)){
        self.exclusiveDisjunction.push(email.toLowerCase())
      }
    }

    function removeUser(email) {
      if (!_validEmail(email)){
        self.showError('Email invalid!');
      } else {
          var index = self.exclusiveDisjunction.indexOf(email.toLowerCase());
          if(index > -1){
            self.exclusiveDisjunction.splice(index, 1);
          }
        }
    }

    function isUserExists(email) {
      var index = self.exclusiveDisjunction.indexOf(email.toLowerCase());
      return index > -1;
    }

    function _validEmail(email) {
      var Regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/gi;
      return Regex.test(email);
    }

    function toJSON() {
      return {
        _id: self._id,
        objectType: self.objectType,
        acronym: self.acronym,
        version: self.version,
        exclusiveDisjunction: self.exclusiveDisjunction
      };
    }

  }
}());
