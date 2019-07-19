fdescribe('The SurveyStaticVariableFactory', function () {

  var Mock = {};
  var injections = {};
  var factory;

  beforeEach(function () {
    angular.mock.module('otusjs.staticVariable');

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.staticVariable.SurveyStaticVariableFactory');
    });
  });


  it('should create an empty variable for template', function () {
    var variableTemplate = factory.create();
    expect(variableTemplate).toBeDefined();
  });


  function mock() {
    var request = [
      {
        name: "CSJ1",
        label: "Tem diabetes?",
        sending: 1,
        customizations: [
          {
            value: 0,
            label: "Não"
          },
          {
            value: 1,
            label: "Sim"
          }
        ]
      },
      {
        name: "CSJ1",
        label: "Tem diabetes?",
        sending: 2,
        customizations: [
          {
            value: 1,
            label: "Não"
          },
          {
            value: 2,
            label: "Sim"
          }
        ]
      }
    ];

    var response = [
      {
        name: "CSJ1",
        sending: 2,
        value: 1
      }
    ];

  }


});