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


  it('should execute calling the method on surveys StaticVariableManager', function() {
    spyOn(Mock.StaticVariableManager, 'add');
    service.execute(Mock.survey, Mock.variable);

    expect(Mock.StaticVariableManager.add).toHaveBeenCalledTimes(1);
    expect(Mock.StaticVariableManager.add).toHaveBeenCalledWith(Mock.variable);
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

  }
});
