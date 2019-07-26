describe('The SurveyStaticVariableFactory', function () {

  var Mock = {};
  var injections = {};
  var factory;

  beforeEach(function () {
    angular.mock.module('otusjs.staticVariable');

    mock();

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.staticVariable.SurveyStaticVariableFactory');
    });
  });


  it('should create an empty variable for template', function () {
    var variableTemplate = factory.create();
    expect(variableTemplate).toBeDefined();
  });

  it('should create a variable from json', function () {
    var variable = factory.fromJson(Mock.variableObject);
    expect(variable).toBeDefined();
    expect(variable.customized).toBeTruthy();
  });

  it('should add and remove customizations', function () {
    var variable = factory.create();

    variable.addCustomization("1", "Sim");
    expect(variable.customizations.length).toBe(1);

    variable.removeCustomization(0);
    expect(variable.customizations.length).toBe(0);
  });

  it('should not add customizations with empty value', function () {
    var variable = factory.create();
    expect(function () {
      variable.addCustomization("", "Sim");
    }).toThrow();
  });

  it('should not add customizations with a value already set', function () {
    var variable = factory.create();
    variable.addCustomization("1", "Sim");

    expect(function () {
      variable.addCustomization("1", "Não");
    }).toThrow();
  });

  it('should translate the value after be set', function () {
    var variable = factory.fromJson(Mock.variableObject);
    variable.setValue("1");
    expect(variable.translatedValue).toEqual("Sim");


    variable.setValue(2);
    expect(variable.translatedValue).toEqual("Não")
  });



  function mock() {
    Mock.customizations = [
      {
        value: "1",
        label: "Sim"
      },
      {
        value: "2",
        label: "Não"
      },
      {
        value: "0",
        label: "Não sabe"
      }
    ];

    Mock.value = "1";

    Mock.blankCustomization = {
      value: "1",
      label: ""
    };

    Mock.variableObject = {
      name: "CSJ11",
      label: "Tem diabetes?",
      sending: "onda 2",
      bindToWholeTemplate: true,
      bindTo: [],
      customizations: Mock.customizations,
      value: ""
    };
  }

});