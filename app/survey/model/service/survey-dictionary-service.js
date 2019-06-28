(function () {
  'use strict';

  angular.module('otusjs.survey')
    .service('SurveyDictionaryService', Service);

  function Service(){
    var self = this;

    self.itemContainerCaptureValues = itemContainerCaptureValues;
    self.customQuestionTreatment = customQuestionTreatment;

    function itemContainerCaptureValues(item){
      let values = [];
      if (Array.isArray(item.options)) {
        item.options.map(option => {
          switch (option.objectType) {
            case "CheckboxAnswerOption":
              values.push(`${option.optionID}(${option.value}):${option.label.ptBR.RCPCv2.json}`);
              break;
            case "AnswerOption":
              values.push(`(${option.extractionValue})${option.label.ptBR.plainText}`);
              break;
          }
        });
      }
      if(Array.isArray(item.lines)){
        item.lines.map(line => {
          line.gridTextList.map(gridText => {
            values.push(`${gridText.customID}(${gridText.unit.ptBR.plainText})`);
          });
        });
      }
      return values;
    }

    function customQuestionTreatment(item, json){
      if(item.objectType != "TextItem"){
        json.label = item.label.ptBR.plainText;
        json.metadata = _itemContainerCaptureMetadata(item);
        json.validatorTypes = _itemContainerCaptureValidatorTypes(item);
      }
      else{
        json.label = item.value.ptBR.plainText
      }
    }
  }

  function _itemContainerCaptureMetadata(item) {
    let metadataList = [];
    item.metadata.options.map(md => {
      metadataList.push(`${md.label.ptBR.plainText}(${md.extractionValue})`);
    });
    return metadataList;
  }

  function _itemContainerCaptureValidatorTypes(item) {
    let validators = [];

    if (item.fillingRules.options.mandatory) {
      validators.push(`${item.fillingRules.options.mandatory.validatorType}(${item.fillingRules.options.mandatory.data.reference})`);
    }
    if (item.fillingRules.options.accept) {
      validators.push(`${item.fillingRules.options.accept.validatorType}(${item.fillingRules.options.accept.data.reference})`);
    }
    if (item.fillingRules.options.distinct) {
      validators.push(`${item.fillingRules.options.distinct.validatorType}(${item.fillingRules.options.distinct.data.reference})`);
    }
    if (item.fillingRules.options.lowerLimit) {
      validators.push(`${item.fillingRules.options.lowerLimit.validatorType}(${item.fillingRules.options.lowerLimit.data.reference})`);
    }
    if (item.fillingRules.options.upperLimit) {
      validators.push(`${item.fillingRules.options.upperLimit.validatorType}(${item.fillingRules.options.upperLimit.data.reference})`);
    }
    if (item.fillingRules.options.precision) {
      validators.push(`${item.fillingRules.options.precision.validatorType}(${item.fillingRules.options.precision.data.reference})`);
    }
    if (item.fillingRules.options.scale) {
      validators.push(`${item.fillingRules.options.scale.validatorType}(${item.fillingRules.options.scale.data.reference})`);
    }
    if (item.fillingRules.options.in) {
      validators.push(`${item.fillingRules.options.in.validatorType}(${[item.fillingRules.options.in.data.reference.initial + '~' +
        item.fillingRules.options.in.data.reference.end]})`);
    }
    if (item.fillingRules.options.minDate) {
      validators.push(`${item.fillingRules.options.minDate.validatorType}(${item.fillingRules.options.minDate.data.reference.value})`);
    }
    if (item.fillingRules.options.maxDate) {
      validators.push(`${item.fillingRules.options.maxDate.validatorType}(${item.fillingRules.options.maxDate.data.reference.value})`);
    }
    if (item.fillingRules.options.futureDate) {
      validators.push(`${item.fillingRules.options.futureDate.validatorType}(${item.fillingRules.options.futureDate.data.reference})`);
    }
    if (item.fillingRules.options.pastDate) {
      validators.push(`${item.fillingRules.options.pastDate.validatorType}(${item.fillingRules.options.pastDate.data.reference})`);
    }
    if (item.fillingRules.options.rangeDate) {
      validators.push(`${item.fillingRules.options.rangeDate.validatorType}(${[item.fillingRules.options.rangeDate.data.reference.initial.value + '~' +
        item.fillingRules.options.rangeDate.data.reference.end.value]})`);
    }
    if (item.fillingRules.options.minSelected) {
      validators.push(`${item.fillingRules.options.minSelected.validatorType}(${item.fillingRules.options.minSelected.data.reference})`);
    }
    if (item.fillingRules.options.maxSelected) {
      validators.push(`${item.fillingRules.options.maxSelected.validatorType}(${item.fillingRules.options.maxSelected.data.reference})`);
    }
    if (item.fillingRules.options.quantity) {
      validators.push(`${item.fillingRules.options.quantity.validatorType}(${item.fillingRules.options.quantity.data.reference})`);
    }
    if (item.fillingRules.options.maxTime) {
      validators.push(`${item.fillingRules.options.maxTime.validatorType}(${item.fillingRules.options.maxTime.data.reference.value})`);
      if (item.fillingRules.options.minTime) {
        validators.push(`${item.fillingRules.options.minTime.validatorType}(${item.fillingRules.options.minTime.data.reference.value})`);
      }
    }
      return validators;
  };
}());