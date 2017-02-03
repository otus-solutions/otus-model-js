describe('InitialNodesAddService', function() {

  var Mock = {};
  var service = {};
  var injections = {};

  var routeData = {
    'origin': 'BEGIN NODE',
    'destination': 'END NODE'
  };

  beforeEach(function() {
    module('otusjs.model.navigation');

    inject(function(_$injector_) {
      mockNavigationContainerService(_$injector_);
      mockCreateDefaultRouteTaskService(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.InitialNodesCreationTaskService', injections);
    });
  });

  it('should execute setInitialNodes on NavigationContainerService', function() {
    spyOn(Mock.NavigationContainerService, 'setInitialNodes').and.callThrough();
    service.execute();

    expect(Mock.NavigationContainerService.setInitialNodes).toHaveBeenCalledWith();
  });

  it('should execute execute CreateDefaultRouteTaskService', function() {
    spyOn(Mock.CreateDefaultRouteTaskService, 'execute');

    service.execute();

    expect(Mock.CreateDefaultRouteTaskService.execute).toHaveBeenCalled();
  });



  function mockNavigationContainerService($injector) {
    Mock.NavigationContainerService = $injector.get('otusjs.model.navigation.NavigationContainerService');
    injections.NavigationContainerService = Mock.NavigationContainerService;
  }

  function mockCreateDefaultRouteTaskService($injector) {
    Mock.CreateDefaultRouteTaskService = $injector.get('otusjs.model.navigation.DefaultRouteCreationTaskService');
    injections.CreateDefaultRouteTaskService = Mock.CreateDefaultRouteTaskService;
  }

});
