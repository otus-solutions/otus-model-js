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


  it('should execute calling the method on surveys StaticVariableManager', function() {
    spyOn(Mock.StaticVariableManager, 'update');
    service.execute(Mock.survey, Mock.indexToUpdate, Mock.variable);

    expect(Mock.StaticVariableManager.update).toHaveBeenCalledTimes(1);
    expect(Mock.StaticVariableManager.update).toHaveBeenCalledWith(Mock.indexToUpdate, Mock.variable);
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

    Mock.indexToUpdate = 1;
  }

});
