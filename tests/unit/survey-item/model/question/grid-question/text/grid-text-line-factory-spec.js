describe('GridTextLineFactory', function () {
  var gridTextLine;
  var factory;
  var Mock = {};

  beforeEach(function () {
    angular.mock.module('otusjs');

    mockJsonObject();

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.model.question.GridTextLineFactory', {
        'GridTextFactory': mockGridTextFactory(_$injector_)
      });
    });
  });

  describe('create method', function () {
    beforeEach(function () {
      gridTextLine = factory.create();
    });

    it('Should return created list when method create is called', function () {
      expect(gridTextLine.getGridTextList()).toBeDefined();
    });

    it('Should return list the type of array', function () {
      expect(Array.isArray(gridTextLine.getGridTextList())).toEqual(true);
    });

    it('Should return list with size equals zero', function () {
      expect(gridTextLine.getGridTextListSize()).toEqual(0);
    });

  });

  describe('getGridTextList method', function () {
    beforeEach(function () {
      gridTextLine = factory.create();
    });

    it('Should return list the type of array', function () {
      expect(Array.isArray(gridTextLine.getGridTextList())).toEqual(true);
    });

  });

  describe('addGridText method', function () {
    beforeEach(function () {
      gridTextLine = factory.create();
    });

    it('should add a new element in list when method is called', function () {
      gridTextLine.addGridText(Mock.TEMPLATE_ID_0, Mock.prototype_0);

      expect(gridTextLine.getGridTextList().length).toEqual(1);
    });

    it('should return element created with the parameters used', function () {
      var result = gridTextLine.addGridText(Mock.TEMPLATE_ID_1, Mock.prototype_0);

      expect(result.templateID).toEqual(Mock.TEMPLATE_ID_1);
    });

  });

  describe('getGridTextListSize method', function () {
    beforeEach(function () {
      gridTextLine = factory.create();
    });

    it('when method is called with list empty then should return size equals zero', function () {
      expect(gridTextLine.getGridTextListSize()).toEqual(0);
    });

    it('when method is called with list not empty then should return size equals quantity of elements', function () {
      gridTextLine.addGridText(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridTextLine.addGridText(Mock.TEMPLATE_ID_0, Mock.prototype_0);

      expect(gridTextLine.getGridTextListSize()).toEqual(2);
    });

  });

  describe('removeGridText method', function () {
    beforeEach(function () {
      gridTextLine = factory.create();
    });

    it('When method is called then should remove equal index row', function () {
      gridTextLine.addGridText(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      expect(gridTextLine.getGridTextListSize()).toEqual(1);

      gridTextLine.removeGridText(0);
      expect(gridTextLine.getGridTextListSize()).toEqual(0);
    });

    it('Should remove only the index passed as an argument', function () {
      gridTextLine.addGridText(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridTextLine.addGridText(Mock.TEMPLATE_ID_1, Mock.prototype_1);
      gridTextLine.addGridText(Mock.TEMPLATE_ID_2, Mock.prototype_2);
      gridTextLine.addGridText(Mock.TEMPLATE_ID_3, Mock.prototype_3);
      expect(gridTextLine.getGridTextListSize()).toEqual(4);

      gridTextLine.removeGridText(0);
      expect(gridTextLine.getGridTextListSize()).toEqual(3);
    });

  });

  describe('removeLastGridText method', function () {
    beforeEach(function () {
      gridTextLine = factory.create();
    });

    it('When method is called then should remove last row', function () {
      gridTextLine.addGridText(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridTextLine.addGridText(Mock.TEMPLATE_ID_1, Mock.prototype_1);
      gridTextLine.addGridText(Mock.TEMPLATE_ID_2, Mock.prototype_2);
      gridTextLine.addGridText(Mock.TEMPLATE_ID_3, Mock.prototype_3);

      var removed = gridTextLine.removeLastGridText();
      expect(gridTextLine.getGridTextListSize()).toEqual(3);
      expect(removed[0].templateID).toEqual(Mock.TEMPLATE_ID_3);

    });

  });

  describe('getGridTextIndex method', function () {
    beforeEach(function () {
      gridTextLine = factory.create();
    });

    it('when method is called then return element in the position the list equal to the parameter', function () {
      gridTextLine.addGridText(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridTextLine.addGridText(Mock.TEMPLATE_ID_1, Mock.prototype_1);

      var result = gridTextLine.getGridTextIndex(0);
      expect(result[0].templateID).toEqual(Mock.TEMPLATE_ID_0);

    });
  });

  describe('toJson method', function () {
    beforeEach(function () {
      gridTextLine = factory.create();
    });

    it('when called method then return json with structure expected', function () {
      gridTextLine.addGridText(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridTextLine.addGridText(Mock.TEMPLATE_ID_1, Mock.prototype_1);
      var object = JSON.parse(JSON.stringify(gridTextLine));

      expect(object.gridTextList[1].templateID).toEqual(Mock.TEMPLATE_ID_1);
    });
  });

  function mockGridTextFactory($injector) {
    Mock.GridTextFactory = $injector.get('otusjs.model.question.GridTextFactory');
    return Mock.GridTextFactory;
  }

  function mockJsonObject() {

    Mock.jsonObject = {
      "extents": "SurveyItem",
      "objectType": "GridTextLine",
      "templateID": "QUE1",
      "customID": "PersonalizedID"
    };

    Mock.TEMPLATE_ID_0 = 'TEMPLATE_ID_0';
    Mock.prototype_0 = {
      "extents": "StudioObject",
      "objectType": "SurveyItem",
      "templateID": "TEMPLATE_ID_0"
    };

    Mock.TEMPLATE_ID_1 = 'TEMPLATE_ID_1';
    Mock.prototype_1 = {
      "extents": "StudioObject",
      "objectType": "SurveyItem",
      "templateID": "TEMPLATE_ID_1"
    };

    Mock.TEMPLATE_ID_2 = 'TEMPLATE_ID_2';
    Mock.prototype_2 = {
      "extents": "StudioObject",
      "objectType": "SurveyItem",
      "templateID": "TEMPLATE_ID_2"
    };

    Mock.TEMPLATE_ID_3 = 'TEMPLATE_ID_3';
    Mock.prototype_3 = {
      "extents": "StudioObject",
      "objectType": "SurveyItem",
      "templateID": "TEMPLATE_ID_3"
    };

  }

});
