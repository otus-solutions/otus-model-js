(function () {
  'use strict';

  angular.module('otusjs.survey')
    .service('SurveyDictionaryService', Service);

  function Service() {
    var self = this;
    self.dictionaryConstructionByExtractionId = dictionaryConstructionByExtractionId;

    function dictionaryConstructionByExtractionId(jsonObject) {
      var dictionary = [];

      jsonObject.itemContainer.forEach(item => {
        var json;
        switch (item.objectType) {
          case 'CheckboxQuestion':
          case 'GridTextQuestion':
          case 'GridIntegerQuestion':
            _itemContainerCaptureValues(item).forEach(internalItem => {
              json = {};
              _dictionaryAttributeFulfillment(jsonObject, json, item, internalItem);
              dictionary.push(json);
            });
            break;

          default:
            json = {};
            _dictionaryAttributeFulfillment(jsonObject, json, item);
            json.extractionValues = _itemContainerCaptureValues(item);
            dictionary.push(json);
            break;
        }
      });
      return dictionary;
    }
  }

  function _dictionaryAttributeFulfillment(jsonObject, json, item, internalItem) {
    json.acronym = jsonObject.identity.acronym;
    json.objectType = item.objectType;
    switch (item.objectType) {
      case 'CheckboxQuestion':
      case "GridTextQuestion":
      case "GridIntegerQuestion":
        json.extractionID = internalItem.customID;
        json.label = internalItem.label;
        json.extractionValues = internalItem.value;
        json.metadata = _itemContainerCaptureMetadata(item);
        json.validationTypes = _itemContainerCaptureValidatorTypes(item);
        break;

      default:
        json.extractionID = item.customID;
        _customQuestionTreatment(item, json);
        break;
    }
  }

  function _itemContainerCaptureValues(item) {
    let values = [];
    if (Array.isArray(item.options)) {
      item.options.map(option => {
        switch (option.objectType) {
          case "CheckboxAnswerOption":
            values.push({customID: option.optionID, label: option.label.ptBR.plainText, value: {0:false, 1:true}});
            break;
          case "AnswerOption":
            values.push({ value: option.extractionValue, label:option.label.ptBR.plainText});
            break;
        }
      });
    }
    if (Array.isArray(item.lines)) {
      item.lines.map(line => {
        if (line.objectType == "GridTextLine") {
          line.gridTextList.map(gridText => {
            values.push({customID: gridText.customID, label: gridText.label.ptBR.plainText, value:[]});
          });
        }
        if (line.objectType == "GridIntegerLine") {
          line.gridIntegerList.map(gridInteger => {
            values.push({customID: gridInteger.customID, label: gridInteger.label.ptBR.plainText, value:[]});
          });
        }
      });
    }
    return values;
  }

  function _customQuestionTreatment(item, json) {
    if (item.objectType != "TextItem") {
      json.label = item.label.ptBR.plainText;
      json.metadata = _itemContainerCaptureMetadata(item) || [];
      json.validationTypes = _itemContainerCaptureValidatorTypes(item) || [];
    } else {
      json.label = item.value.ptBR.plainText;
      json.metadata = [];
      json.validationTypes = [];
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
      validators.push({
        name: item.fillingRules.options.mandatory.validatorType,
        value: item.fillingRules.options.mandatory.data.reference
      });
    }
    if (item.fillingRules.options.accept) {
      validators.push({
        name: item.fillingRules.options.accept.validatorType,
        value: item.fillingRules.options.accept.data.reference
      });
    }
    if (item.fillingRules.options.distinct) {
      validators.push({
        name: item.fillingRules.options.distinct.validatorType,
        value: item.fillingRules.options.distinct.data.reference
      });
    }
    if (item.fillingRules.options.lowerLimit) {
      validators.push({
        name: item.fillingRules.options.lowerLimit.validatorType,
        value: item.fillingRules.options.lowerLimit.data.reference
      });
    }
    if (item.fillingRules.options.upperLimit) {
      validators.push({
        name: item.fillingRules.options.upperLimit.validatorType,
        value: item.fillingRules.options.upperLimit.data.reference
      });
    }
    if (item.fillingRules.options.precision) {
      validators.push({
        name: item.fillingRules.options.precision.validatorType,
        value: item.fillingRules.options.precision.data.reference
      });
    }
    if (item.fillingRules.options.scale) {
      validators.push({
        name: item.fillingRules.options.scale.validatorType,
        value: item.fillingRules.options.scale.data.reference
      });
    }
    if (item.fillingRules.options.in) {
      validators.push({
        name: item.fillingRules.options.in.validatorType, begin: item.fillingRules.options.in.data.reference.initial,
        end: item.fillingRules.options.in.data.reference.end
      });
    }
    if (item.fillingRules.options.minDate) {
      validators.push({
        name: item.fillingRules.options.minDate.validatorType,
        value: item.fillingRules.options.minDate.data.reference.value
      });
    }
    if (item.fillingRules.options.maxDate) {
      validators.push({
        name: item.fillingRules.options.maxDate.validatorType,
        value: item.fillingRules.options.maxDate.data.reference.value
      });
    }
    if (item.fillingRules.options.futureDate) {
      validators.push({
        name: item.fillingRules.options.futureDate.validatorType,
        value: item.fillingRules.options.futureDate.data.reference
      });
    }
    if (item.fillingRules.options.pastDate) {
      validators.push({
        name: item.fillingRules.options.pastDate.validatorType,
        value: item.fillingRules.options.pastDate.data.reference
      });
    }
    if (item.fillingRules.options.rangeDate) {
      validators.push({
        name: item.fillingRules.options.rangeDate.validatorType,
        begin: item.fillingRules.options.rangeDate.data.reference.initial.value,
        end: item.fillingRules.options.rangeDate.data.reference.end.value
      });
    }
    if (item.fillingRules.options.minSelected) {
      validators.push({
        name: item.fillingRules.options.minSelected.validatorType,
        value: item.fillingRules.options.minSelected.data.reference
      });
    }
    if (item.fillingRules.options.maxSelected) {
      validators.push({
        name: item.fillingRules.options.maxSelected.validatorType,
        value: item.fillingRules.options.maxSelected.data.reference
      });
    }
    if (item.fillingRules.options.quantity) {
      validators.push({
        name: item.fillingRules.options.quantity.validatorType,
        value: item.fillingRules.options.quantity.data.reference
      });
    }
    if (item.fillingRules.options.maxTime) {
      validators.push({
        name: item.fillingRules.options.maxTime.validatorType,
        value: item.fillingRules.options.maxTime.data.reference.value
      });
      if (item.fillingRules.options.minTime) {
        validators.push({
          name: item.fillingRules.options.minTime.validatorType,
          value: item.fillingRules.options.minTime.data.reference.value
        });
      }
    }
    return validators;
  };
}());

// if (item.objectType == "CheckboxQuestion") {
//   _itemContainerCaptureValues(item)
//     .forEach(valuesCheckbox => {
//       let json = {};
//       _dictionaryAttributeFulfillment(jsonObject, json, item, valuesCheckbox);
//       dictionary.push(json);
//     });
// }
// if (item.objectType == "GridTextQuestion") {
//   _itemContainerCaptureValues(item)
//     .forEach(valuesGridText => {
//       let json = {};
//       _dictionaryAttributeFulfillment(jsonObject, json, item, valuesGridText);
//       dictionary.push(json);
//     });
//
// } else {
//   let json = {};
//   _dictionaryAttributeFulfillment(jsonObject, json, item);
//   //json.extractionValues = _itemContainerCaptureValues(item);
//   dictionary.push(json);
// }
//json.extractionValues = _itemContainerCaptureValues(item);


// if(valuesCheckbox){
//    json.extractionID = valuesCheckbox.customID;
//    json.label = valuesCheckbox.label;
//    json.extractionValues = valuesCheckbox.value;
//    json.metadata = _itemContainerCaptureMetadata(item);
//    json.validationTypes = _itemContainerCaptureValidatorTypes(item);
// }
//
// }
// else{
//   json.extractionID = item.customID;
//   _customQuestionTreatment(item, json);
// }
// json.questionDataType = item.objectType;
// json.extractionValues = _itemContainerCaptureValues(item);