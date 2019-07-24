describe('AddStaticVariableService', function() {

  var Mock = {};
  var service = {};

  beforeEach(function() {
    angular.mock.module('otusjs.staticVariable');

    inject(function(_$injector_) {
      mock();
      service = _$injector_.get('otusjs.staticVariable.UpdateStaticVariableTaskService');
    });
  });


  it('should execute calling the method on survey', function() {
    spyOn(Mock.survey, 'updateStaticVariable');
    service.execute(Mock.survey, Mock.indexToUpdate, Mock.variable);

    expect(Mock.survey.updateStaticVariable).toHaveBeenCalledTimes(1);
    expect(Mock.survey.updateStaticVariable).toHaveBeenCalledWith(Mock.indexToUpdate, Mock.variable);
  });


  function mock() {
    Mock.survey = {
      updateStaticVariable: function (variable) {}
    };

    Mock.variable = {};

    Mock.indexToUpdate = 1;
  }

});
