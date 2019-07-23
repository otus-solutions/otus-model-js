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

  it('should create an empty variable for template', function () {
    var variableTemplate = factory.fromJson(Mock.variableObject);
    expect(variableTemplate).toBeDefined();
    expect(variableTemplate.customized).toBeTruthy();
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

    Mock.blankCustomization = {
      value: "1",
      label: ""
    };

    Mock.variableObject = {
      name: "CSJ11",
      label: "Tem diabetes?",
      sending: -1,
      bindToWholeTemplate: true,
      bindTo: [],
      customizations: Mock.customizations,
      value: ""
    };
  }

});