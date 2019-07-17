(function () {
  'use strict';

  angular
    .module('otusjs.staticVariable')
    .factory('otusjs.staticVariable.SurveyStaticVariable', Factory);

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(name, sending, ) {
      // name
      // value
      // sending
      // lastSending
      // customized
      // customizations
      // bindToWholeTemplate
      // bindTo

      return new StaticVariable();

    }

    function fromJsonObject(jsonObject) {

    }

    return self;
  }

  function StaticVariable() {
    var self = this;

    self.name = '';
    self.sending = '';
    self.value = '';
    self.customized = false;
    self.bindToWholeTemplate = true;
    self.bindTo = [];

    self.customizations = [];

    self.setCustomizations = setCustomizations;
    self.addCustomization = addCustomization;


    function setCustomizations(customizations) {
      self.customizations = customizations.map(custom => {
        return new StaticVariableCustomization(custom.answer, custom.label);
      });
    }

    function addCustomization(answer, label) {
      self.customizations.push(new StaticVariableCustomization(answer, label));
    }

    return self;
  }

  function StaticVariableCustomization(answer, label) {
    var self = this;

    self.answer = answer;
    self.label = label;

    return self;
  }


}());