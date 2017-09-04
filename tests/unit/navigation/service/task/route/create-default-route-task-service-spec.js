xdescribe('CreateDefaultRouteTaskService', function() {

  var Mock = {};
  var service = {};
  var injections = {};
  var CAD1 = 'CAD1';
  var CAD2 = 'CAD2';
  var CAD3 = 'CAD3';
  var CAD4 = 'CAD4';

  beforeEach(function() {
    angular.mock.module('otusjs.model.navigation');

    inject(function(_$injector_) {
      mockNavigationContainerService(_$injector_);
      mockNavigation(_$injector_);
      mockRoute(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.DefaultRouteCreationTaskService', injections);
    });
  });

  describe('execute method', function() {

    it('should retrieve the current default route from navigation', function() {
      spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.returnValue(Mock.navigationB);
      spyOn(Mock.navigationA, 'getDefaultRoute').and.returnValue(Mock.routeCAD1_CAD2);
      service.execute(Mock.routeCAD1_CAD2, Mock.navigationA);
      service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

      expect(Mock.navigationA.getDefaultRoute).toHaveBeenCalled();
    });

      it('should create a default route based on route data', function() {
      spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.returnValue(Mock.navigationB);
      spyOn(Mock.RouteFactory, 'createDefault').and.callThrough();
      service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

      expect(Mock.RouteFactory.createDefault).toHaveBeenCalledWith(Mock.routeCAD1_CAD3.origin, Mock.routeCAD1_CAD3.destination);
    });

    it('should setup default route of navigation', function() {
      spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.returnValue(Mock.navigationB);
      spyOn(Mock.RouteFactory, 'createDefault').and.returnValue(Mock.routeCAD1_CAD3);
      spyOn(Mock.navigationA, 'setupDefaultRoute');

      service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

      expect(Mock.navigationA.setupDefaultRoute).toHaveBeenCalledWith(Mock.routeCAD1_CAD3);
    });

    it('should notify previous default navigation', function() {
      spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.returnValue(Mock.navigationB);
      spyOn(Mock.RouteFactory, 'createDefault').and.returnValue(Mock.routeCAD1_CAD3);
      spyOn(Mock.navigationA, 'setupDefaultRoute').and.callThrough();
      spyOn(Mock.navigationB, 'removeInNavigation');

      service.execute(Mock.routeCAD1_CAD2, Mock.navigationA);
      service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

      expect(Mock.navigationB.removeInNavigation).toHaveBeenCalledWith(Mock.navigationA);
    });

    it('should notify new default navigation', function() {
      spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.returnValue(Mock.navigationC);
      spyOn(Mock.RouteFactory, 'createDefault').and.returnValue(Mock.routeCAD1_CAD3);
      spyOn(Mock.navigationA, 'setupDefaultRoute');
      spyOn(Mock.navigationC, 'updateInNavigation');
      spyOn(Mock.navigationC, 'removeInNavigation');

      service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

      expect(Mock.navigationC.updateInNavigation).toHaveBeenCalledWith(Mock.navigationA);
    });

  });

  function mockNavigation($injector) {
    Mock.NavigationFactory = $injector.get('otusjs.model.navigation.NavigationFactory');

    Mock.navigationA = Mock.NavigationContainerService.createNavigationTo(CAD1);
    Mock.navigationB = Mock.NavigationContainerService.createNavigationTo(CAD2);
    Mock.navigationC = Mock.NavigationContainerService.createNavigationTo(CAD3);
    Mock.navigationD = Mock.NavigationContainerService.createNavigationTo(CAD4);
  }

  function mockRoute($injector) {
    Mock.RouteFactory = $injector.get('otusjs.model.navigation.RouteFactory');

    Mock.routeDataCAD1_CAD2 = {'origin': 'CAD1', 'destination':'CAD2'};
    Mock.routeDataCAD1_CAD3 = {'origin': 'CAD1', 'destination':'CAD3'};

    Mock.routeCAD1_CAD2 = Mock.RouteFactory.createDefault(CAD1, CAD2);
    Mock.routeCAD1_CAD3 = Mock.RouteFactory.createDefault(CAD1, CAD3);

    injections.RouteFactory = Mock.RouteFactory;
  }

  function mockNavigationContainerService($injector) {
    Mock.NavigationContainerService = $injector.get('otusjs.model.navigation.NavigationContainerService');
  }
});
