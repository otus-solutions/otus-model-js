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


  it('should execute calling the method on surveys StaticVariableManager', function() {
    spyOn(Mock.StaticVariableManager, 'remove');
    service.execute(Mock.survey, Mock.indexToRemove);

    expect(Mock.StaticVariableManager.remove).toHaveBeenCalledTimes(1);
    expect(Mock.StaticVariableManager.remove).toHaveBeenCalledWith(Mock.indexToRemove);
  });


  function mock() {
    Mock.StaticVariableManager = {
      add: function (variable) {},
      update: function (variable) {},
      remove: function (variable) {}
    };

    Mock.survey = {
      StaticVariableManager: Mock.StaticVariableManager
    };

    Mock.variable = {};

    Mock.indexToRemove = 1;
  }
});
