describe('InitialNodesCreationTaskService', function() {

  var Mock = {};
  var service = {};
  var injections = {};

  beforeEach(function() {
    angular.mock.module('otusjs.model.navigation');

    inject(function(_$injector_) {
      mockCreateDefaultRouteTaskService(_$injector_);
      service = _$injector_.get('otusjs.model.navigation.DefaultRouteCreationTaskService', injections);
    });
  });


  it('should execute execute CreateDefaultRouteTaskService', function() {
    spyOn(Mock.DefaultRouteCreationTaskService, 'execute');

    service.execute();

    expect(Mock.DefaultRouteCreationTaskService.execute).toHaveBeenCalledTimes(1);
  });


  function mockCreateDefaultRouteTaskService($injector) {
    Mock.DefaultRouteCreationTaskService = $injector.get('otusjs.model.navigation.DefaultRouteCreationTaskService');
    injections.DefaultRouteCreationTaskService = Mock.DefaultRouteCreationTaskService;
  }

});
