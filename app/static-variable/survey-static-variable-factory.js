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

    function create(name, label, sending, wholeTemplate, customizations, bindTo) {
      return new StaticVariable(name, sending, wholeTemplate, customizations, bindTo);
    }

    function fromJsonObject(jsonObject) {
      var variable = create(jsonObject.name, jsonObject.label, jsonObject.sending, jsonObject.wholeTemplate, jsonObject.customizations, jsonObject.bindTo);
      variable.value = jsonObject.value;
    }

    return self;
  }

  function StaticVariable(name, label, sending, wholeTemplate, customizations, bindTo) {
    var self = this;

    self.name = name || '';
    self.label = label || '';
    self.sending = sending || -1;
    self.customized = false;
    self.bindToWholeTemplate = wholeTemplate || true;
    self.bindTo = bindTo || [];
    self.value = '';

    self.customizations = customizations || [];

    _init();

    self.setCustomizations = setCustomizations;
    self.addCustomization = addCustomization;
    self.removeCustomization = removeCustomization;
    self.updateCustomization = updateCustomization;
    self.setValue = setValue;

    function _init() {
      self.customized = !!self.customizations;
      self.lastSending = self.sending === -1;
    }


    function setCustomizations(customizations) {
      self.customizations = customizations.map(custom => {
        return new StaticVariableCustomization(custom.answer, custom.label);
      });
    }

    function addCustomization(answer, label) {
      self.customizations.push(new StaticVariableCustomization(answer, label));
    }

    function removeCustomization(answer) {
      var answerIndex = _findAnswerCustomizationIndex(answer);
      self.customizations.splice(answerIndex, 1);
    }

    function updateCustomization(answer, label) {
      var answerIndex = _findAnswerCustomizationIndex(answer);
      if (answerIndex > -1) {
        self.customizations[answerIndex].label = label;
      }
    }

    function setValue(value) {
      self.value = value;
    }

    function _findAnswerCustomizationIndex(answer) {
      self.customizations.findIndex(custom => {
        return custom.answer === answer;
      });
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