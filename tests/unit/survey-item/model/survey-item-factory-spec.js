describe('SurveyItemFactory', function() {
  var Mock = {};
  var OID = 'OID';
  var factory;
  var injections = {};

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      injections = {
        'CalendarQuestionFactory': mockCalendarQuestionFactory(
          _$injector_),
        'IntegerQuestionFactory': mockIntegerQuestionFactory(
          _$injector_),
        'SingleSelectionQuestionFactory': mockSingleSelectionQuestionFactory(
          _$injector_),
        'TextQuestionFactory': mockTextQuestionFactory(
          _$injector_),
        'TimeQuestionFactory': mockTimeQuestionFactory(
          _$injector_),
        'DecimalQuestionFactory': mockDecimalQuestionFactory(
          _$injector_),
        'CheckboxQuestionFactory': mockCheckboxQuestionFactory(
          _$injector_),
        'EmailQuestionFactory': mockEmailQuestionFactory(
          _$injector_),
        'PhoneQuestionFactory': mockPhoneQuestionFactory(
          _$injector_),
        'AutocompleteQuestionFactory': mockAutocompleteQuestionFactory(
          _$injector_),
        'FileUploadQuestionFactory': mockFileUploadQuestionFactory(
          _$injector_),
        'GridTextQuestionFactory': mockGridTextQuestionFactory(
          _$injector_),
        'GridIntegerQuestionFactory': mockGridIntegerQuestionFactory(
          _$injector_),
        'TextItemFactory': mockTextItemFactory(_$injector_),
        'ImageItemFactory': mockImageItemFactory(_$injector_)
      }
      factory = _$injector_.get('SurveyItemFactory', injections);
    });

  });

  describe('Specialized factory use', function() {

    it(
      'CalendarQuestionFactory.create should be called when parameter is CalendarQuestion',
      function() {
        spyOn(Mock.CalendarQuestionFactory, 'create');

        factory.create('CalendarQuestion', jasmine.any(String));

        expect(Mock.CalendarQuestionFactory.create).toHaveBeenCalled();
      });

    it(
      'IntegerQuestionFactory.create should be called when parameter is integer-question',
      function() {
        spyOn(Mock.IntegerQuestionFactory, 'create');

        factory.create('IntegerQuestion', jasmine.any(String));

        expect(Mock.IntegerQuestionFactory.create).toHaveBeenCalled();
      });

    it(
      'SingleSelectionQuestionFactory.create should be called when parameter is SingleSelectionQuestion',
      function() {
        spyOn(Mock.SingleSelectionQuestionFactory, 'create');

        factory.create('SingleSelectionQuestion', jasmine.any(String));

        expect(Mock.SingleSelectionQuestionFactory.create).toHaveBeenCalled();
      });

    it(
      'TextQuestionFactory.create should be called when parameter is TextQuestion',
      function() {
        spyOn(Mock.TextQuestionFactory, 'create');

        factory.create('TextQuestion', jasmine.any(String));

        expect(Mock.TextQuestionFactory.create).toHaveBeenCalled();
      });

    it(
      'TimeQuestionFactory.create should be called when parameter is TimeQuestion',
      function() {
        spyOn(Mock.TimeQuestionFactory, 'create');

        factory.create('TimeQuestion', jasmine.any(String));

        expect(Mock.TimeQuestionFactory.create).toHaveBeenCalled();
      });

  });

  describe('Question', function() {

    it('returned object should extends Question', function() {
      var question = factory.create('CalendarQuestion', jasmine.any(
        String));

      expect(question.extents).toBe('SurveyItem');
    });

    it('returned object should have a not null templateID', function() {
      var question = factory.create('CalendarQuestion', OID);

      expect(question.templateID).toBe(OID);
    });

    it('returned object should have a label object for ptBR locale',
      function() {
        var question = factory.create('CalendarQuestion', OID);

        expect(question.label.ptBR).not.toBeNull();
        expect(question.label.ptBR).not.toBeUndefined();
      });

    it('returned object should have a label object for enUS locale',
      function() {
        var question = factory.create('CalendarQuestion', OID);

        expect(question.label.enUS).not.toBeNull();
        expect(question.label.enUS).not.toBeUndefined();
      });

    it('returned object should have a label object for enUS locale',
      function() {
        var question = factory.create('CalendarQuestion', OID);

        expect(question.label.esES).not.toBeNull();
        expect(question.label.esES).not.toBeUndefined();
      });

  });



  describe('Load', function() {
    beforeEach(function() {
      mockTemplate();
      spyOn(factory, "load").and.callThrough();

    })
    it('should load a template', function() {
      //spyOn(factory.load(Mock.template)).toHaveBeenCalled();
      //console.log(template.extents);
      var template = factory.load(Mock.template);

      expect(factory.load).toHaveBeenCalled();
      expect(factory.load).toHaveBeenCalledWith(Mock.template);
      expect(template.extents).toEqual('SurveyItem');

    })
  });

  function mockCalendarQuestionFactory($injector) {
    Mock.CalendarQuestionFactory = $injector.get('CalendarQuestionFactory');
    return Mock.CalendarQuestionFactory;
  }

  function mockIntegerQuestionFactory($injector) {
    Mock.IntegerQuestionFactory = $injector.get('IntegerQuestionFactory');
    return Mock.IntegerQuestionFactory;
  }

  function mockSingleSelectionQuestionFactory($injector) {
    Mock.SingleSelectionQuestionFactory = $injector.get(
      'SingleSelectionQuestionFactory');
    return Mock.SingleSelectionQuestionFactory;
  }

  function mockTextQuestionFactory($injector) {
    Mock.TextQuestionFactory = $injector.get('TextQuestionFactory');
    return Mock.TextQuestionFactory;
  }

  function mockTimeQuestionFactory($injector) {
    Mock.TimeQuestionFactory = $injector.get('TimeQuestionFactory');
    return Mock.TimeQuestionFactory;
  }

  function mockDecimalQuestionFactory($injector) {
    Mock.DecimalQuestionFactory = $injector.get('DecimalQuestionFactory');
    return Mock.DecimalQuestionFactory;
  }

  function mockCheckboxQuestionFactory($injector) {
    Mock.CheckboxQuestionFactory = $injector.get('CheckboxQuestionFactory');
    return Mock.CheckboxQuestionFactory;
  }

  function mockEmailQuestionFactory($injector) {
    Mock.EmailQuestionFactory = $injector.get('EmailQuestionFactory');
    return Mock.EmailQuestionFactory;
  }

  function mockPhoneQuestionFactory($injector) {
    Mock.PhoneQuestionFactory = $injector.get('PhoneQuestionFactory');
    return Mock.PhoneQuestionFactory;
  }

  function mockAutocompleteQuestionFactory($injector) {
    Mock.AutocompleteQuestionFactory = $injector.get(
      'AutocompleteQuestionFactory');
    return Mock.AutocompleteQuestionFactory;
  }

  function mockFileUploadQuestionFactory($injector) {
    Mock.FileUploadQuestionFactory = $injector.get(
      'FileUploadQuestionFactory');
    return Mock.FileUploadQuestionFactory;
  }

  function mockGridTextQuestionFactory($injector) {
    Mock.GridTextQuestionFactory = $injector.get(
      'otusjs.model.question.GridTextQuestionFactory');
    return Mock.GridTextQuestionFactory;
  }

  function mockGridIntegerQuestionFactory($injector) {
    Mock.GridIntegerQuestionFactory = $injector.get(
      'otusjs.model.question.GridIntegerQuestionFactory');
    return Mock.GridIntegerQuestionFactory;
  }

  function mockTextItemFactory($injector) {
    Mock.TextItemFactory = $injector.get('TextItemFactory');
    return Mock.TextItemFactory;
  }

  function mockImageItemFactory($injector) {
    Mock.ImageItemFactory = $injector.get('ImageItemFactory');
    return Mock.ImageItemFactory;
  }



  function mockTemplate() {
    Mock.template = Test.utils.data.SurveyTemplate;

  }

});
