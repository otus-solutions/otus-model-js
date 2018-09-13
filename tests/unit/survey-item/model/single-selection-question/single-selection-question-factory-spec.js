describe('SingleSelectionQuestionFactory', function() {
  var Mock = {};
  var question, factory,
    TEMPLATE_ID = 'TPL_ID',
    PROTOTYPE = { "objectType" : "SurveyItem"},
    EXPECTED_VALIDATORS_LIST = [ 'mandatory'];

  beforeEach(function() {
    angular.mock.module('otusjs');
    angular.mock.inject(function (_$injector_) {
      factory = _$injector_.get('SingleSelectionQuestionFactory');
    });

    Mock.singleSelectionQuestionItemJson = Test.utils.data.singleSelectionQuestionItem;

    mockJsonObject();

  });

  it('factoryExistence check', function () {
    expect(factory).toBeDefined();
  });

  it('methodFactoryExistence check', function () {
    expect(factory.create).toBeDefined();
    expect(factory.fromJsonObject).toBeDefined();
  });

  describe('methods of object fromJsonObject', function() {

    beforeEach(function () {
      question = factory.fromJsonObject(Mock.singleSelectionQuestionItemJson);
    });

    it('should create an instance with the same values of Mock.singleSelectionQuestionItemJson', function() {
      expect(JSON.stringify(question.toJSON())).toEqual(JSON.stringify(Mock.singleSelectionQuestionItemJson));
    });

    it('should throw an error when receives a string', function() {
      var ERROR_MESSAGE = 'otusjs.model.misc.model.SingleSelectionQuestionFactory.fromJsonObject() ' +
        'method expects to receive a object instead a String';

      function fromJsonObjectFunction() {
        factory.fromJsonObject(JSON.stringify(Mock.singleSelectionQuestionItemJson));
      };

      expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
    });

  });

  describe('methods of object calendar', function() {

    beforeEach(function () {
      question = factory.create(TEMPLATE_ID, PROTOTYPE);
    });

    it('returned object should have extends equal to objectType', function() {
      expect(question.extents).toBe('SurveyItem');
    });

    it('isQuestionMethod should return positive', function(){
      expect(question.isQuestion()).toBeTruthy();
    });

    it('validatorsMethod should return Array', function(){
      expect(question.validators()).toEqual(EXPECTED_VALIDATORS_LIST);
    });

    it('toJsonMethod should of create return jsonObject', function(){
      var questionJson = question.toJSON();
      expect(JSON.stringify(questionJson.label)).toEqual(JSON.stringify(Mock.label));
    });

  });

  function mockJsonObject() {

    Mock.ptBR = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.enUS = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.esES = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.label = {
      "ptBR": Mock.ptBR,
      "enUS": Mock.enUS,
      "esES": Mock.esES
    };
  }

});


// describe('SingleSelectionQuestionFactory', function() {
//   var Mock = {};
//   var factory;
//   var question;
//
//   beforeEach(function() {
//     angular.mock.module('otusjs');
//
//     mockJsonObject();
//
//     inject(function(_$injector_) {
//       mockQuestion(_$injector_);
//
//       factory = _$injector_.get('SingleSelectionQuestionFactory');
//     });
//
//   });
//
//   describe('create method', function() {
//
//     beforeEach(function() {
//       question = factory.create(Mock.TEMPLATE_ID, Mock.Question);
//     });
//
//     it('returned object should have objectType equal to SingleSelectionQuestion', function() {
//       expect(question.objectType).toBe('SingleSelectionQuestion');
//     });
//
//     it('returned object should have a not null templateID', function() {
//       expect(question.templateID).toBe(Mock.TEMPLATE_ID);
//     });
//
//     it('returned object should have dataType equal to Integer', function() {
//       expect(question.dataType).toBe('Integer');
//     });
//
//     it('returned object should have a label object for ptBR locale', function() {
//       expect(question.label.ptBR).not.toBeNull();
//       expect(question.label.ptBR).not.toBeUndefined();
//     });
//
//     it('returned object should have a label object for enUS locale', function() {
//       expect(question.label.enUS).not.toBeNull();
//       expect(question.label.enUS).not.toBeUndefined();
//     });
//
//     it('returned object should have a label object for enUS locale', function() {
//       expect(question.label.esES).not.toBeNull();
//       expect(question.label.esES).not.toBeUndefined();
//     });
//
//   });
//
//   describe("fromJsonObject method", function() {
//
//     beforeEach(function() {
//       question = factory.fromJsonObject(Mock.jsonObject);
//     });
//
//     it("should reconstruct a question object with Mock.jsonObject data", function() {
//       expect(JSON.stringify(question)).toEqual(JSON.stringify(Mock.jsonObject));
//     });
//
//   });
//
//   function mockQuestion($injector) {
//     Mock.TEMPLATE_ID = 'TPL_ID';
//     Mock.Question = $injector.get('SurveyItemFactory').create('SingleSelectionQuestion', Mock.TEMPLATE_ID);
//   }
//
//   function mockJsonObject() {

// });
