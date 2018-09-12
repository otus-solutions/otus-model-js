describe("FileUploadQuestionFactory", function() {
  var Mock = {};
  var factory;
  var survey;

  /* @BeforeScenario */
  beforeEach(function() {
    angular.mock.module('otusjs');
    mockParams();
    mockJsonObject();

    inject(function(_$injector_) {
      var injections = {
        'LabelFactory': mockLabelFactory(_$injector_),
        'MetadataGroupFactory': mockMetadataGroupFactory(
          _$injector_),
        'FillingRulesOptionFactory': mockFillingRulesOptionFactory(
          _$injector_)
      };

      factory = _$injector_.get('FileUploadQuestionFactory',
        injections);
    });
  });


  it("create method", function() {

    spyOn(factory, "create");
    expect(factory.create.calls.any()).toEqual(false);
    factory.create(Mock.templateID, Mock.prototype);
    expect(factory.create.calls.any()).toEqual(true);

    expect(factory.create).toHaveBeenCalled();
    expect(factory.create).toHaveBeenCalledWith(Mock.templateID, Mock.prototype);
    expect(factory.create(Mock.templateID, Mock.prototype)).not.toEqual(
      null);
  });

  describe('should create an instance with the same values of toJson', function() {

    beforeEach(function() {
      survey = factory.fromJsonObject(Mock.jsonObject);
    });

    it('should return a FileUploadQuestionFactory that extents', function() {
      expect(survey.extents).toEqual('SurveyItem');
    });

    it('should return a FileUploadQuestionFactory that objectType', function() {
      expect(survey.objectType).toEqual('FileUploadQuestion');
    });

    it('should return a FileUploadQuestionFactory that dataType', function() {
      expect(survey.dataType).toEqual('Binary');
    });

    it('should create an instance with the same values of Mock.jsonObject', function() {
      expect(JSON.stringify(survey)).toEqual(JSON.stringify(Mock.jsonObject));
    });

  });


  function mockLabelFactory(_$injector_) {
    Mock.LabelFactory = _$injector_.get('LabelFactory');
    return Mock.LabelFactory;
  }

  function mockMetadataGroupFactory(_$injector_) {
    Mock.MetadataGroupFactory = _$injector_.get('MetadataGroupFactory');
    return Mock.MetadataGroupFactory;
  }

  function mockFillingRulesOptionFactory(_$injector_) {
    Mock.FillingRulesOptionFactory = _$injector_.get(
      'FillingRulesOptionFactory');
    return Mock.FillingRulesOptionFactory;
  }

  function mockParams() {
    Mock.prototype = {
      objectType: "TESTE"
    };
    Mock.templateID = "TST1";
  }

  function mockJsonObject() {
    Mock.jsonObject = {
      "extents": "SurveyItem",
      "objectType": "FileUploadQuestion",
      "templateID": "DQUOTETWO1",
      "customID": "DQUOTETWO1",
      "dataType": "Binary",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "\"aspas\"",
          "formattedText": "\"aspas\""
        },
        "enUS": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "",
          "formattedText": ""
        },
        "esES": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "",
          "formattedText": ""
        }
      },
      "metadata": {
        "extents": "StudioObject",
        "objectType": "MetadataGroup",
        "options": []
      },
      "fillingRules": {
        "extends": "StudioObject",
        "objectType": "FillingRules",
        "options": {
          "mandatory": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "mandatory",
            "data": {
              "canBeIgnored": false,
              "reference": true
            }
          }
        }
      }
    };
  }

});
