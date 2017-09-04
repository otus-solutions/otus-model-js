describe('GridIntegerLineFactory', function () {
  var gridIntegerLine;
  var factory;

  var Mock = {};

  beforeEach(function () {
    angular.mock.module('otusjs');

    mockJsonObject();

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.model.question.GridIntegerLineFactory', {
        'GridIntegerFactory': mockGridIntegerFactory(_$injector_)
      });
    });
  });

  describe('create method', function () {
    beforeEach(function () {
      gridIntegerLine = factory.create();
    });

    it('Should return created list when method create is called', function () {
      expect(gridIntegerLine.getGridIntegerList()).toBeDefined();
    });

    it('Should return list the type of array', function () {
      expect(Array.isArray(gridIntegerLine.getGridIntegerList())).toEqual(true);
    });

    it('Should return list with size equals zero', function () {
      expect(gridIntegerLine.getGridIntegerListSize()).toEqual(0);
    });

  });

  describe('getGridIntegerList method', function () {
    beforeEach(function () {
      gridIntegerLine = factory.create();
    });

    it('Should return list the type of array', function () {
      expect(Array.isArray(gridIntegerLine.getGridIntegerList())).toEqual(true);
    });

  });

  describe('addGridInteger method', function () {
    beforeEach(function () {
      gridIntegerLine = factory.create();
    });

    it('should add a new element in list when method is called', function () {
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_0, Mock.prototype_0);

      expect(gridIntegerLine.getGridIntegerList().length).toEqual(1);
    });

    it('should return element created with the parameters used', function () {
      var result = gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_1, Mock.prototype_0);

      expect(result.templateID).toEqual(Mock.TEMPLATE_ID_1);
    });

  });

  describe('getGridIntegerListSize method', function () {
    beforeEach(function () {
      gridIntegerLine = factory.create();
    });

    it('when method is called with list empty then should return size equals zero', function () {
      expect(gridIntegerLine.getGridIntegerListSize()).toEqual(0);
    });

    it('when method is called with list not empty then should return size equals quantity of elements', function () {
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_0, Mock.prototype_0);

      expect(gridIntegerLine.getGridIntegerListSize()).toEqual(2);
    });

  });

  describe('removeGridInteger method', function () {
    beforeEach(function () {
      gridIntegerLine = factory.create();
    });

    it('When method is called then should remove equal index row', function () {
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      expect(gridIntegerLine.getGridIntegerListSize()).toEqual(1);

      gridIntegerLine.removeGridInteger(0);
      expect(gridIntegerLine.getGridIntegerListSize()).toEqual(0);
    });

    it('Should remove only the index passed as an argument', function () {
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_1, Mock.prototype_1);
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_2, Mock.prototype_2);
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_3, Mock.prototype_3);
      expect(gridIntegerLine.getGridIntegerListSize()).toEqual(4);

      gridIntegerLine.removeGridInteger(0);
      expect(gridIntegerLine.getGridIntegerListSize()).toEqual(3);
    });

  });

  describe('removeLastGridInteger method', function () {
    beforeEach(function () {
      gridIntegerLine = factory.create();
    });

    it('When method is called then should remove last row', function () {
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_1, Mock.prototype_1);
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_2, Mock.prototype_2);
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_3, Mock.prototype_3);

      var removed = gridIntegerLine.removeLastGridInteger();
      expect(gridIntegerLine.getGridIntegerListSize()).toEqual(3);
      expect(removed[0].templateID).toEqual(Mock.TEMPLATE_ID_3);

    });

  });

  describe('getGridIntegerIndex method', function () {
    beforeEach(function () {
      gridIntegerLine = factory.create();
    });

    it('when method is called then return element in the position the list equal to the parameter', function () {
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_1, Mock.prototype_1);

      var result = gridIntegerLine.getGridIntegerIndex(0);
      expect(result[0].templateID).toEqual(Mock.TEMPLATE_ID_0);

    });
  });

  describe('toJson method', function () {
    beforeEach(function () {
      gridIntegerLine = factory.create();
    });

    it('when called method then return json with structure expected', function () {
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_0, Mock.prototype_0);
      gridIntegerLine.addGridInteger(Mock.TEMPLATE_ID_1, Mock.prototype_1);
      var object = JSON.parse(gridIntegerLine.toJson());

      expect(object.gridIntegerList[1].templateID).toEqual(Mock.TEMPLATE_ID_1);
    });
  });

  function mockGridIntegerFactory($injector) {
    Mock.GridIntegerFactory = $injector.get('otusjs.model.question.GridIntegerLineFactory');
    return Mock.GridIntegerFactory;
  }

  function mockJsonObject() {

    Mock.jsonObject = {
      "extents": "SurveyItem",
      "objectType": "GridIntegerLine",
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
