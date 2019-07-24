describe('AddStaticVariableService', function() {

  var Mock = {};
  var service = {};

  beforeEach(function() {
    angular.mock.module('otusjs.staticVariable');

    inject(function(_$injector_) {
      mock();
      service = _$injector_.get('otusjs.staticVariable.AddStaticVariableTaskService');
    });
  });


  it('should execute calling the method on survey', function() {
    spyOn(Mock.survey, 'addStaticVariable');
    service.execute(Mock.survey, Mock.variable);

    expect(Mock.survey.addStaticVariable).toHaveBeenCalledTimes(1);
    expect(Mock.survey.addStaticVariable).toHaveBeenCalledWith(Mock.variable);
  });


  function mock() {
    Mock.survey = {
      addStaticVariable: function (variable) {}
    };

    Mock.variable = {};
  }

});
