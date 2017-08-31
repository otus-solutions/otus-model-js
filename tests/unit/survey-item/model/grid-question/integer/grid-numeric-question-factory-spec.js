describe('GridIntegerQuestionFactory', function() {
  var Mock = {};
  var question;

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.model.question.GridIntegerQuestionFactory', {
        'MetadataGroupFactory': mockMetaGroupFactory(_$injector_),
        'FillingRulesOptionFactory': mockFillingRulesOptionFactory(_$injector_),
        'GridIntegerLineFactory': mockGridIntegerLineFactory(_$injector_)
      });
    });
  });

  describe('create method', function() {
    beforeEach(function() {
      question = factory.create(Mock.TEMPLATE_ID_0, Mock.prototype_0);
    });

    it('Should return created list when method create is called', function() {
      expect(question.getLinesList()).toBeDefined();
    });

    it('Should return list the type of array', function() {
      expect(Array.isArray(question.getLinesList())).toEqual(true);
    });

    it('Should return list with size equals zero', function() {
      expect(question.getLinesListSize()).toEqual(0);
    });

  });

  describe('getLinesListSize method', function() {
    beforeEach(function() {
      question = factory.create(Mock.TEMPLATE_ID_0, Mock.prototype_0);
    });

    it('when method is called with list empty then should return size equals zero', function() {
      expect(question.getLinesListSize()).toEqual(0);
    });

    it('when method is called with list not empty then should return size equals quantity of elements', function() {
      question.createLine();
      question.createLine();

      expect(question.getLinesListSize()).toEqual(2);
    });

  });

  describe('getLinesList method', function() {
    beforeEach(function() {
      question = factory.create(Mock.TEMPLATE_ID_0, Mock.prototype_0);
    });

    it('Should return list the type of array', function() {
      expect(Array.isArray(question.getLinesList())).toEqual(true);
    });

  });

  describe('createLine method', function() {
    beforeEach(function() {
      question = factory.create(Mock.TEMPLATE_ID_0, Mock.prototype_0);
    });

    it('When method is called then must be add a new line in list', function() {
      question.createLine();

      expect(question.getLinesListSize()).toEqual(1);
    });

    it('should return a object type of GridIntegerLine', function() {
      var result = question.createLine();

      expect(result.objectType).toEqual('GridIntegerLine');
    });

  });

  describe('removeLine method', function() {
    beforeEach(function() {
      question = factory.create(Mock.TEMPLATE_ID_0, Mock.prototype_0);
    });

    it('When method is called then should remove equal index row', function() {
      question.createLine();
      expect(question.getLinesListSize()).toEqual(1);

      question.removeLine(0);
      expect(question.getLinesListSize()).toEqual(0);
    });

    it('Should remove only the index passed as an argument', function() {
      question.createLine();
      question.createLine();
      question.createLine();
      question.createLine();
      expect(question.getLinesListSize()).toEqual(4);

      question.removeLine(0);
      expect(question.getLinesListSize()).toEqual(3);
    });

  });

  describe('removeLastLine method', function() {
    beforeEach(function() {
      question = factory.create(Mock.TEMPLATE_ID_0, Mock.prototype_0);
    });

    it('When method is called then should remove last row', function() {
      question.createLine();
      expect(question.getLinesListSize()).toEqual(1);

      question.removeLastLine();
      expect(question.getLinesListSize()).toEqual(0);
    });
  });

  describe('getLineIndex method', function() {
    var line1;
    var line2;
    beforeEach(function() {
      question = factory.create(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      line1 = question.createLine();
      line2 = question.createLine();
    });

    it('should return a gridLine index', function() {
      expect(question.getLineIndex(line1)).toEqual(0);
      expect(question.getLineIndex(line2)).toEqual(1);
    });

  });

  function mockMetaGroupFactory($injector) {
    Mock.MetadataGroupFactory = $injector.get('MetadataGroupFactory');
    return Mock.MetadataGroupFactory;
  }

  function mockFillingRulesOptionFactory($injector) {
    Mock.FillingRulesOptionFactory = $injector.get('FillingRulesOptionFactory');
    return Mock.FillingRulesOptionFactory;
  }

  function mockGridIntegerLineFactory($injector) {
    Mock.GridIntegerLineFactory = $injector.get('otusjs.model.question.GridIntegerLineFactory');
    return Mock.GridIntegerLineFactory;
  }

  function mockJsonObject() {

    Mock.metadata = {
      "extents": "StudioObject",
      "objectType": "MetadataGroup",
      "options": []
    };

    Mock.TEMPLATE_ID_0 = 'TEMPLATE_ID_0';
    Mock.prototype_0 = {
      "extents": "StudioObject",
      "objectType": "SurveyItem",
      "templateID": "TEMPLATE_ID_0"
    };

    Mock.jsonObject = {
      "extents": "SurveyItem",
      "objectType": "GridIntegerQuestion",
      "templateID": "QUE1",
      "customID": "PersonalizedID",
      "metadata": Mock.metadata,
      "fillingRules": Mock.fillingRules
    };
  }

});
