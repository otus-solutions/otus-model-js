(function () {
  'use strict';

  angular
    .module('otusjs.model.fieldCenter')
    .factory('otusjs.model.fieldCenter.FieldCenterFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new FieldCenter({});
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (center) {
          return new FieldCenter(center);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function FieldCenter(fieldCenter) {
    var self = this;

    self.toJSON = toJSON;

    self.name = fieldCenter.name || null;
    self.code = fieldCenter.code || null;
    self.acronym = fieldCenter.acronym || null;
    self.country = fieldCenter.country || null;
    self.state = fieldCenter.state || null;
    self.address = fieldCenter.address || null;
    self.complement = fieldCenter.complement || null;
    self.zip = fieldCenter.zip || null;
    self.phone = fieldCenter.phone || null;
    self.backgroundColor = fieldCenter.backgroundColor || null;
    self.borderColor = fieldCenter.borderColor || null;


    function toJSON() {
      var json = {};

      json.name = self.name;
      json.code = self.code;
      json.acronym = self.acronym;
      json.country = self.country;
      json.state = self.state;
      json.address = self.address;
      json.complement = self.complement;
      json.zip = self.zip;
      json.phone = self.phone;
      json.backgroundColor = self.backgroundColor;
      json.borderColor = self.borderColor;

      return json;
    }


  }
}());
