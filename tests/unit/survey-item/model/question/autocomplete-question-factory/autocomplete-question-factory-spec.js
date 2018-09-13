describe('AutocompleteQuestionFactory', function() {
  var Mock = {};
  var question;
  var factory;

  Mock.VALUE = 1;
  Mock.EXTRACTION_VALUE = '.extractionValue';



  beforeEach(function() {
    angular.mock.module('otusjs');
    Mock.AutocompleteQuestion = Test.utils.data.autocompleteQuestion;
    inject(function(_$injector_) {
      factory = _$injector_.get('AutocompleteQuestionFactory');
    });

  });

  describe('toJSON method', function() {

    beforeEach(function() {
      question = factory.create("ID_1", {"objectType":"AutocompleteQuestion"});
    });

    it('returned object should have a label object for enUS locale', function() {
      expect(JSON.stringify(question.toJSON())).toEqual(JSON.stringify(Mock.AutocompleteQuestion));
    });
  });

});
