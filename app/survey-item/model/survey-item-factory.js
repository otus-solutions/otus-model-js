(function () {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('SurveyItemFactory', SurveyItemFactory);

  SurveyItemFactory.$inject = [
    /* Question items */
    'CalendarQuestionFactory',
    'IntegerQuestionFactory',
    'DecimalQuestionFactory',
    'SingleSelectionQuestionFactory',
    'CheckboxQuestionFactory',
    'TextQuestionFactory',
    'TimeQuestionFactory',
    'EmailQuestionFactory',
    'PhoneQuestionFactory',
    'AutocompleteQuestionFactory',
    'FileUploadQuestionFactory',
    'otusjs.model.question.GridTextQuestionFactory',
    'otusjs.model.question.GridNumericQuestionFactory',
    /* Miscelaneous items */
    'TextItemFactory',
    'ImageItemFactory'
  ];

  function SurveyItemFactory(
    CalendarQuestionFactory,
    IntegerQuestionFactory,
    DecimalQuestionFactory,
    SingleSelectionQuestionFactory,
    CheckboxQuestionFactory,
    TextQuestionFactory,
    TimeQuestionFactory,
    EmailQuestionFactory,
    PhoneQuestionFactory,
    AutocompleteQuestionFactory,
    FileUploadQuestionFactory,
    GridTextQuestionFactory,
    GridNumericQuestionFactory,
    TextItemFactory,
    ImageItemFactory) {

    var self = this;

    var factoryMap = {
      /* Question items */
      'CalendarQuestion': CalendarQuestionFactory,
      'IntegerQuestion': IntegerQuestionFactory,
      'DecimalQuestion': DecimalQuestionFactory,
      'SingleSelectionQuestion': SingleSelectionQuestionFactory,
      'CheckboxQuestion': CheckboxQuestionFactory,
      'TextQuestion': TextQuestionFactory,
      'TimeQuestion': TimeQuestionFactory,
      'EmailQuestion': EmailQuestionFactory,
      'PhoneQuestion': PhoneQuestionFactory,
      'AutocompleteQuestion': AutocompleteQuestionFactory,
      'FileUploadQuestion': FileUploadQuestionFactory,
      'GridTextQuestion': GridTextQuestionFactory,
      'GridNumericQuestion': GridNumericQuestionFactory,
      /* Miscelaneous items */
      'TextItem': TextItemFactory,
      'ImageItem': ImageItemFactory
    };

    /* Public interface */
    self.create = create;
    self.load = load;

    function create(itemType, templateID) {
      var item = new SurveyItem(templateID);
      return factoryMap[itemType].create(templateID, item);
    }

    function load(itemObject) {
      return factoryMap[itemObject.objectType].fromJsonObject(itemObject);
    }

    return self;
  }

  function SurveyItem(templateID) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'SurveyItem';
    self.templateID = templateID;
  }

}());
