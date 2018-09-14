describe('SingleSelectionQuestion', function() {
  var Mock = {};
  var question, createdOption, option;

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      mockQuestion(_$injector_);
      mockJson(_$injector_);

      var factory = _$injector_.get('SingleSelectionQuestionFactory', {
        IdiomFactory: mockIdiomFactory(_$injector_),
        MetadataGroupFactory: mockMetadataGroupFactory(_$injector_),
        AnswerOptionFactory: mockAnswerOptionFactory(_$injector_)
      });
      question = factory.create('SingleSelectionQuestion', Mock.TEMPLATE_ID);
    });
  });

  describe('getOptionListSize method', function() {

    it('should return the size of option list', function() {
      question.createOption();
      expect(question.getOptionListSize()).toBe(1);

      question.createOption();
      expect(question.getOptionListSize()).toBe(2);

      question.createOption();
      expect(question.getOptionListSize()).toBe(3);

      question.removeOption(2);
      expect(question.getOptionListSize()).toBe(2);
    });

  });

  describe('getOptionByValue method', function() {

    it('should the option with parameter value', function() {
      question.createOption();
      expect(question.getOptionByValue(1).value).toBe(1);
      expect(question.getOptionByValue(1).value).not.toBe(2);
    });

  });

  describe('getOptionByExtractionValue method', function() {

    beforeEach(function () {
      createdOption = question.createOption();
      createdOption.setExtractionValue('myValue');
    });

    it('should return a createdOption when searched by myValue', function() {
      expect(question.getOptionByExtractionValue('myValue')).toEqual(createdOption);
    });

    it('should return undefined when not exists any occurrences for searched value', function() {
      expect(question.getOptionByExtractionValue('notFound')).toBeUndefined();
    });

  });

  describe('createOption method', function() {

    beforeEach(function() {
      question.createOption();
    });

    it('should call AnswerOptionFactory.create', function() {
      expect(Mock.AnswerOptionFactory.create).toHaveBeenCalled();
    });

    it('should add a new metadata answer option in group', function() {
      expect(question.getOptionListSize()).toBe(1);
    });

  });

  describe('removeOption method', function() {

    beforeEach(function() {
      question.createOption();
      question.createOption();
      question.createOption();
      question.createOption();
    });

    it('should reomve an option by value from option list', function() {
      question.removeOption(3);

      expect(question.getOptionListSize()).toBe(3);
    });

    it('should reorder the option values', function() {
      question.removeOption(2);

      expect(question.getOptionByValue(1).value).toBe(1);
      expect(question.getOptionByValue(2).value).toBe(2);
      expect(question.getOptionByValue(3).value).toBe(3);
    });

  });

  describe('removeLastOption method', function() {

    beforeEach(function() {
      question.createOption();
      question.createOption();
      question.createOption();
      question.createOption();
    });

    it('should reomve the last option from option list', function() {
      question.removeLastOption();

      expect(question.getOptionListSize()).toBe(3);

      expect(question.getOptionByValue(1).value).toBe(1);
      expect(question.getOptionByValue(2).value).toBe(2);
      expect(question.getOptionByValue(3).value).toBe(3);

      expect(question.getOptionByValue(4)).toBeUndefined();
    });

  });

  describe('isAvailableExtractionValue method', function() {

    beforeEach(function() {
      option = question.createOption();
      option.setExtractionValue("myValue");
    });

    it('should return FALSE already exists an AnswerOption with extractionValue property equals to passed argument', function() {
      expect(question.isAvailableExtractionValue("myValue")).toBe(false);
    });

    it('should return TRUE when not found an AnswerOption with extractionValue property equals to passed argument', function() {
      expect(question.isAvailableExtractionValue(3)).toBe(true);
    });

  });

  describe('isAvailableValue method', function() {

    beforeEach(function() {
      option = question.createOption();
    });

    it('should return FALSE already exists an AnswerOption with value property equals to passed argument', function() {
      expect(question.isAvailableValue(1)).toBe(false);
    });

    it('should return TRUE when not found an AnswerOption with value property equals to passed argument', function() {
      expect(question.isAvailableValue(2)).toBe(true);
    });

  });

  describe('toJson method', function() {

    xit('should return a well formatted json based on SingleSelectionQuestion', function() {
      expect(JSON.stringify(question)).toEqual(Mock.json);
    });

  });

  function mockIdiomFactory($injector) {
    Mock.IdiomFactory = $injector.get('IdiomFactory');

    spyOn(Mock.IdiomFactory, 'create').and.callThrough();

    return Mock.IdiomFactory;
  }

  function mockMetadataGroupFactory($injector) {
    Mock.MetadataGroupFactory = $injector.get('MetadataGroupFactory');

    spyOn(Mock.MetadataGroupFactory, 'create').and.callThrough();

    return Mock.MetadataGroupFactory;
  }

  function mockAnswerOptionFactory($injector) {
    Mock.AnswerOptionFactory = $injector.get('AnswerOptionFactory');

    spyOn(Mock.AnswerOptionFactory, 'create').and.callThrough();

    return Mock.AnswerOptionFactory;
  }

  function mockQuestion($injector) {
    Mock.TEMPLATE_ID = 'TPL_ID';
    Mock.Question = $injector.get('SurveyItemFactory').create('SingleSelectionQuestion', Mock.TEMPLATE_ID);
  }

  function mockJson($injector) {
    Mock.json = JSON.stringify({
      extents: 'SurveyItem',
      objectType: 'SingleSelectionQuestion',
      templateID: Mock.TEMPLATE_ID,
      dataType: 'Integer',
      label: {
        ptBR: $injector.get('IdiomFactory').create(),
        enUS: $injector.get('IdiomFactory').create(),
        esES: $injector.get('IdiomFactory').create()
      },
      option: [],
      metadata: $injector.get('MetadataGroupFactory').create()
    });
  }

});