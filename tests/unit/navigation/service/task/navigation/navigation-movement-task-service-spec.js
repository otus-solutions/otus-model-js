describe('InitialNodesCreationTaskService', function() {

  var Mock = {};
  var service = {};
  var injections = {};

  beforeEach(function() {
    angular.mock.module('otusjs.model.navigation');

    inject(function(_$injector_) {
      mockCreateDefaultRouteTaskService(_$injector_);
      mockNavigationRemovalTaskService(_$injector_);
      mockRouteRemovalTaskService(_$injector_);
      mockNavigationInsertionTask(_$injector_);
      mockNavigationFactory(_$injector_);
      mockContainer(_$injector_);
      service = _$injector_.get('otusjs.model.navigation.NavigationMovementTaskService', injections);
    });
  });


  it('should execute NavigationRemovalTaskService', function() {
    spyOn(Mock.NavigationInsertionTask, 'execute');
    spyOn(Mock.NavigationRemovalTaskService, 'execute');
    service.setContainer(Mock.container);
    service.execute();
    expect(Mock.NavigationRemovalTaskService.execute).toHaveBeenCalledTimes(1);

  });

  it('should execute NavigationInsertionTask', function() {
    spyOn(Mock.NavigationInsertionTask, 'execute');
    spyOn(Mock.NavigationRemovalTaskService, 'execute');
    service.setContainer(Mock.container);
    service.execute();
    expect(Mock.NavigationInsertionTask.execute).toHaveBeenCalledTimes(1);
  });

  it('should execute not execute NavigationRemovalTaskService and NavigationInsertionTask', function() {
    spyOn(Mock.NavigationInsertionTask, 'execute');
    spyOn(Mock.NavigationRemovalTaskService, 'execute');
    service.setContainer(Mock.container);
    spyOn(Mock.container, 'getNavigationPosition').and.returnValue(3);
    service.execute("BEGIN_NODE",1);
    expect(Mock.NavigationRemovalTaskService.execute).toHaveBeenCalledTimes(0);
    expect(Mock.NavigationInsertionTask.execute).toHaveBeenCalledTimes(0);
  });


  function mockNavigationInsertionTask($injector) {
    Mock.NavigationInsertionTask = $injector.get('otusjs.model.navigation.NavigationInsertionTask');
    injections.NavigationInsertionTask = Mock.NavigationInsertionTask;
  }

  function mockNavigationRemovalTaskService($injector) {
    Mock.NavigationRemovalTaskService = $injector.get('otusjs.model.navigation.NavigationRemovalTaskService');
    injections.NavigationRemovalTaskService = Mock.NavigationRemovalTaskService;
  }

  function mockRouteRemovalTaskService($injector) {
    Mock.RouteRemovalTaskService = $injector.get('otusjs.model.navigation.RouteRemovalTaskService');
    injections.RouteRemovalTaskService = Mock.RouteRemovalTaskService;
  }

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
