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


});