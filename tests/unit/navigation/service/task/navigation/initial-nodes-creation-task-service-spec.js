describe('InitialNodesCreationTaskService', function() {

  var Mock = {};
  var service = {};
  var injections = {};

  beforeEach(function() {
    angular.mock.module('otusjs.model.navigation');

    inject(function(_$injector_) {
      mockNavigationFactory(_$injector_);
      mockContainer(_$injector_);
      mockCreateDefaultRouteTaskService(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.InitialNodesCreationTaskService', injections);
    });
  });


  it('should execute execute CreateDefaultRouteTaskService', function() {
    spyOn(Mock.DefaultRouteCreationTaskService, 'execute');
    service.setContainer(Mock.container);

    service.execute();

    expect(Mock.DefaultRouteCreationTaskService.execute).toHaveBeenCalledTimes(1);
  });


  function mockCreateDefaultRouteTaskService($injector) {
    Mock.DefaultRouteCreationTaskService = $injector.get('otusjs.model.navigation.DefaultRouteCreationTaskService');
    injections.DefaultRouteCreationTaskService = Mock.DefaultRouteCreationTaskService;
  }

  function mockNavigationFactory($injector) {
    Mock.NavigationFactory = $injector.get('otusjs.model.navigation.NavigationFactory');
    injections.NavigationFactory = Mock.NavigationFactory;
  }

  function mockContainer($injector) {
    var factory = $injector.get('otusjs.model.navigation.NavigationContainerFactory', injections);
    Mock.container = factory.create();
  }

});
