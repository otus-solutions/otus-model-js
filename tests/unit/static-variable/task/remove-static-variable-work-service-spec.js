describe('AddStaticVariableService', function() {

  var Mock = {};
  var service = {};

  beforeEach(function() {
    angular.mock.module('otusjs.staticVariable');

    inject(function(_$injector_) {
      mock();
      service = _$injector_.get('otusjs.staticVariable.RemoveStaticVariableTaskService');
    });
  });


  it('should execute calling the method on survey', function() {
    spyOn(Mock.survey, 'removeStaticVariable');
    service.execute(Mock.survey, Mock.indexToRemove);

    expect(Mock.survey.removeStaticVariable).toHaveBeenCalledTimes(1);
    expect(Mock.survey.removeStaticVariable).toHaveBeenCalledWith(Mock.indexToRemove);
  });


  function mock() {
    Mock.survey = {
      removeStaticVariable: function (index) {}
    };

    Mock.indexToRemove = 1;
  }

});
