describe('The SurveyStaticVariableFactory', function () {

  var Mock = {};
  var Injections = {};
  var factory;

  beforeEach(function () {
    angular.mock.module('otusjs.staticVariable');

    mock();

    inject(function (_$injector_) {
      mockInjections(_$injector_);
      factory = _$injector_.get('otusjs.staticVariable.StaticVariableManagerFactory', Injections);
    });
  });


  it('should create an empty variable for template', function () {
    var variableTemplate = factory.create();
    expect(variableTemplate).toBeDefined();
  });

  describe('the manager methods for handling the list creation', function () {
    var manager;
    var variable;

    beforeEach(function () {
      manager = factory.create();

      variable = manager.create();
      variable.name = 'name';
      variable.sending = 'sending';

    });

    it('should create an empty variable', function () {
      spyOn(Injections.SurveyStaticVariableFactory, "create").and.callThrough();
      manager.create();
      expect(Injections.SurveyStaticVariableFactory.create).toHaveBeenCalled();
    });

    it('should add a variable', function () {
      let beforeAddLength = manager.getStaticVariableList().length;
      manager.add(variable);

      expect(manager.getStaticVariableList().length).toBeGreaterThan(beforeAddLength);
      expect(manager.getStaticVariableList()[0]).toEqual(variable);
    });

    it('should remove a variable by index', function () {
      manager.add(variable);
      let indexToRemove = manager.getStaticVariableList().length - 1;
      manager.remove(indexToRemove);

      expect(manager.getStaticVariableList().length).toBe(0);
    });

    it('should update a variable', function () {
      manager.add(variable);

      let anotherVariable = manager.create();
      anotherVariable.name = 'anotherName';
      anotherVariable.sending = 'anotherSending';

      manager.update(0, anotherVariable);

      expect(manager.getStaticVariableList()[0].name).toEqual("anotherName");
    });

    it('should set the variables all at once', function () {
      spyOn(Injections.SurveyStaticVariableFactory, "fromJson").and.callThrough();
      manager.loadJsonData(Mock.variableList);

      expect(Injections.SurveyStaticVariableFactory.fromJson).toHaveBeenCalledTimes(Mock.variableList.length);
    });

    it('should get the variable list', function () {
      spyOn(Injections.SurveyStaticVariableFactory, "fromJson").and.callThrough();
      manager.loadJsonData(Mock.variableList);

      expect(manager.getStaticVariableList().length).toEqual(Mock.variableList.length);
      expect(manager.getStaticVariableList()[0].name).toEqual(Mock.variableList[0].name);
    });

    it('should throw an error when adding a variable with empty name', function () {
      variable.name = '';
      expect(function (){manager.add(variable)}).toThrow();
    });

    it('should throw an error when adding a variable with empty sending', function () {
      variable.sending = '';
      expect(function (){manager.add(variable)}).toThrow();
    });
  });

  describe('the manger methods for filling and retrieving variable values', function () {
    var manager;

    beforeEach(function () {
      manager = factory.create();
      manager.loadJsonData(Mock.variableList);

    });

    it('should fill the variable values', function () {
      manager.fillVariables(Mock.variableResponse);

      expect(manager.getStaticVariableList()[0].value).toEqual(0);
    });

    it('should fetch the whole template variables', function () {
      expect(manager.getWholeTemplateVariables().length).toEqual(2);
    });


    it('should fetch the item variables', function () {
      expect(manager.getItemVariables("CSJA").length).toEqual(1);
    });
  });


  function mockInjections($injector) {
    Injections.SurveyStaticVariableFactory = $injector.get('otusjs.staticVariable.SurveyStaticVariableFactory');
  }

  function mock() {
    Mock.variableList = [
      {
        name: "CSJ1",
        label: "Tem diabetes?",
        sending: "1",
        bindToWholeTemplate:true,
        bindTo: [],
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
        sending: "2",
        bindToWholeTemplate:true,
        bindTo: [],
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
      },
      {
        name: "CSJ2",
        label: "Peso: ",
        sending: "onda 1",
        bindToWholeTemplate: false,
        bindTo: ["CSJA"],
        customizations: []
      }
    ];

    Mock.variableResponse = [
      {
        name: "CSJ1",
        sending: "2",
        value: 1
      },
      {
        name: "CSJ1",
        sending: "1",
        value: 0
      },
      {
        name: "CSJ2",
        sending: "onda 1",
        value: "60KG",
      }
    ];

  }


});