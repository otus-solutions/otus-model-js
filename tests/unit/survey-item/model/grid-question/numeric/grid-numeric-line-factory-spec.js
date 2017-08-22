describe('GridNumericLineFactory', function () {
  var gridNumericLine;

  var Mock = {};

  beforeEach(function () {
    module('otusjs');

    mockJsonObject();

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.model.question.GridNumericLineFactory', {
        'GridNumericFactory': mockGridNumericFactory(_$injector_)
      });
    });
  });

  describe('create method', function () {
    beforeEach(function () {
      gridNumericLine = factory.create();
    });

    it('Should return created list when method create is called', function () {
      expect(gridNumericLine.getGridNumericList()).toBeDefined();
    });

    it('Should return list the type of array', function () {
      expect(Array.isArray(gridNumericLine.getGridNumericList())).toEqual(true);
    });

    it('Should return list with size equals zero', function () {
      expect(gridNumericLine.getGridNumericListSize()).toEqual(0);
    });

  });

  describe('getGridNumericList method', function () {
    beforeEach(function () {
      gridNumericLine = factory.create();
    });

    it('Should return list the type of array', function () {
      expect(Array.isArray(gridNumericLine.getGridNumericList())).toEqual(true);
    });

  });

  describe('addGridNumeric method', function () {
    beforeEach(function () {
      gridNumericLine = factory.create();
    });

    it('should add a new element in list when method is called', function () {
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_0, Mock.prototype_0);

      expect(gridNumericLine.getGridNumericList().length).toEqual(1);
    });

    it('should return element created with the parameters used', function () {
      var result = gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_1, Mock.prototype_0);

      expect(result.templateID).toEqual(Mock.TEMPLATE_ID_1);
    });

  });

  describe('getGridNumericListSize method', function () {
    beforeEach(function () {
      gridNumericLine = factory.create();
    });

    it('when method is called with list empty then should return size equals zero', function () {
      expect(gridNumericLine.getGridNumericListSize()).toEqual(0);
    });

    it('when method is called with list not empty then should return size equals quantity of elements', function () {
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_0, Mock.prototype_0);

      expect(gridNumericLine.getGridNumericListSize()).toEqual(2);
    });

  });

  describe('removeGridNumeric method', function () {
    beforeEach(function () {
      gridNumericLine = factory.create();
    });

    it('When method is called then should remove equal index row', function () {
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      expect(gridNumericLine.getGridNumericListSize()).toEqual(1);

      gridNumericLine.removeGridNumeric(0);
      expect(gridNumericLine.getGridNumericListSize()).toEqual(0);
    });

    it('Should remove only the index passed as an argument', function () {
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_1, Mock.prototype_1);
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_2, Mock.prototype_2);
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_3, Mock.prototype_3);
      expect(gridNumericLine.getGridNumericListSize()).toEqual(4);

      gridNumericLine.removeGridNumeric(0);
      expect(gridNumericLine.getGridNumericListSize()).toEqual(3);
    });

  });

  describe('removeLastGridNumeric method', function () {
    beforeEach(function () {
      gridNumericLine = factory.create();
    });

    it('When method is called then should remove last row', function () {
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_1, Mock.prototype_1);
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_2, Mock.prototype_2);
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_3, Mock.prototype_3);

      var removed = gridNumericLine.removeLastGridNumeric();
      expect(gridNumericLine.getGridNumericListSize()).toEqual(3);
      expect(removed[0].templateID).toEqual(Mock.TEMPLATE_ID_3);

    });

  });

  describe('getGridNumericIndex method', function () {
    beforeEach(function () {
      gridNumericLine = factory.create();
    });

    it('when method is called then return element in the position the list equal to the parameter', function () {
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_1, Mock.prototype_1);

      var result = gridNumericLine.getGridNumericIndex(0);
      expect(result[0].templateID).toEqual(Mock.TEMPLATE_ID_0);

    });
  });

  describe('toJson method', function () {
    beforeEach(function () {
      gridNumericLine = factory.create();
    });

    it('when called method then return json with structure expected', function () {
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridNumericLine.addGridNumeric(Mock.TEMPLATE_ID_1, Mock.prototype_1);
      var object = JSON.parse(gridNumericLine.toJson());

      expect(object.gridNumericList[1].templateID).toEqual(Mock.TEMPLATE_ID_1);
    });
  });

  function mockGridNumericFactory($injector) {
    Mock.GridNumericFactory = $injector.get('otusjs.model.question.GridNumericLineFactory');
    return Mock.GridNumericFactory;
  }

  function mockJsonObject() {

    Mock.jsonObject = {
      "extents": "SurveyItem",
      "objectType": "GridNumericLine",
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
