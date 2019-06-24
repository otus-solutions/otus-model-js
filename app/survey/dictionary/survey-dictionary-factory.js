(function () {
  'use strict'

  angular

    .module('otusjs.survey')
    .factory('SurveyDictionaryFactory', SurveyDictionaryFactory);

  function SurveyDictionaryFactory() {
    var self = this;

    self.create = create;

    function create(survey) {
      return new SurveyDictionary(survey);
    }

    return self;
  }

  function SurveyDictionary(survey){
    var surveyDictionaryList = [];

      survey.itemContainer.forEach((item) => {
        var json = {};
        json.variableName = item.customID;
        surveyDictionaryList.push(json);
      })
  }

}());