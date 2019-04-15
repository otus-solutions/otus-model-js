describe('NavigationRemovalTaskService', function() {

  var Mock = {};
  var service = {};
  var injections = {};

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      mockNavigationFactory(_$injector_);
      mockContainer(_$injector_);
      mockQuestions(_$injector_);
      mockNavigationToManage(_$injector_);
      mockRouteUpdateTaskService(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.NavigationRemovalTaskService', injections);
    });
  });

  describe('execute method', function() {

    beforeEach(function () {
      Mock.container.createNavigationTo(Mock.questionOne.templateID);
      Mock.container.createNavigationTo(Mock.questionTwo.templateID);
      Mock.container.createNavigationTo(Mock.questionThree.templateID);
    });

    it('should getNavigationByOrigin', function () {
      spyOn(Mock.container, 'getNavigationByOrigin').and.returnValue(Mock.navigationToManage[0]);
      spyOn(Mock.container, 'getNavigationPosition');

      service.setContainer(Mock.container);

      service.execute(Mock.questionTwo.templateID);

      expect(Mock.container.getNavigationByOrigin).toHaveBeenCalledTimes(3);
    });

    it('should navigationToRemove Position', function () {
      spyOn(Mock.container, 'getNavigationByOrigin').and.returnValue(Mock.navigationToManage[1]);
      spyOn(Mock.container, 'getNavigationPosition');

      service.setContainer(Mock.container);

      service.execute(Mock.questionTwo.templateID);

      expect(Mock.container.getNavigationPosition).toHaveBeenCalledTimes(1);
    });

    it('should removeNavigationOf', function () {
      spyOn(Mock.container, 'getNavigationByOrigin').and.returnValue(Mock.navigationToManage[1]);
      spyOn(Mock.container, 'getNavigationPosition');
      spyOn(Mock.container, 'removeNavigationOf');

      service.setContainer(Mock.container);

      service.execute(Mock.questionTwo.templateID);

      expect(Mock.container.removeNavigationOf).toHaveBeenCalledTimes(1);
    });

    it('should reorderNavigationIndex', function () {
      spyOn(Mock.container, 'getNavigationByOrigin').and.returnValue(Mock.navigationToManage[1]);
      spyOn(Mock.container, 'getNavigationPosition');
      spyOn(Mock.container, 'removeNavigationOf');
      spyOn(Mock.container, 'reorderNavigationIndex');

      service.setContainer(Mock.container);

      service.execute(Mock.questionTwo.templateID);

      expect(Mock.container.reorderNavigationIndex).toHaveBeenCalledTimes(1);
    });

    it('should _updateInRoutes', function () {
      spyOn(Mock.container, 'getNavigationByOrigin').and.returnValue(Mock.navigationToManage[1]);
      spyOn(Mock.container, 'getNavigationPosition');
      spyOn(Mock.container, 'removeNavigationOf');
      spyOn(Mock.container, 'reorderNavigationIndex');

      service.setContainer(Mock.container);

      service.execute(Mock.questionTwo.templateID);

      expect(Mock.container.getNavigationByOrigin).toHaveBeenCalledTimes(3);
    });

    it('should execute RouteUpdateTaskService', function () {
      spyOn(Mock.container, 'getNavigationByOrigin').and.returnValue(Mock.navigationToManage[1]);
      spyOn(Mock.container, 'getNavigationPosition');
      spyOn(Mock.container, 'removeNavigationOf');
      spyOn(Mock.container, 'reorderNavigationIndex');
      spyOn(Mock.navigation1, 'isDefaultRoute').and.returnValue(true);
      spyOn(Mock.RouteUpdateTaskService, 'execute');

      service.setContainer(Mock.container);

      service.execute(Mock.questionTwo.templateID);

      expect(Mock.RouteUpdateTaskService.execute).toHaveBeenCalledTimes(1);
    });

    it('should update BEGIN NODE', function () {
      spyOn(Mock.container, 'getNavigationPosition');
      spyOn(Mock.container, 'removeNavigationOf');
      spyOn(Mock.container, 'reorderNavigationIndex');
      spyOn(Mock.navigation1, 'isDefaultRoute').and.returnValue(true);
      spyOn(Mock.BEGIN_NODE, 'isDefaultRoute').and.returnValue(true);
      spyOn(Mock.container, 'getNextOf').and.returnValue(Mock.navigationToManage[1]);
      spyOn(Mock.RouteUpdateTaskService, 'execute');

      service.setContainer(Mock.container);

      service.execute(Mock.questionOne.templateID);

      expect(Mock.container.getNextOf).toHaveBeenCalledTimes(1);
    });
  });

  function mockRouteUpdateTaskService($injector) {
    Mock.RouteUpdateTaskService = $injector.get('otusjs.model.navigation.RouteUpdateTaskService');
    injections.RouteUpdateTaskService = Mock.RouteUpdateTaskService;
  }

  function mockNavigationFactory($injector) {
    Mock.NavigationFactory = $injector.get('otusjs.model.navigation.NavigationFactory');
    injections.NavigationFactory = Mock.NavigationFactory;
  }

  function mockContainer($injector) {
    var factory = $injector.get('otusjs.model.navigation.NavigationContainerFactory', injections);
    Mock.container = factory.create();
    Mock.container.setInitialNodes();
    Mock.BEGIN_NODE = Mock.container.getBeginNode();
    Mock.container.getNavigationByOrigin = function (templateId) {
      if(templateId=="BEGIN NODE") {
        return Mock.BEGIN_NODE;
      }

      if(templateId=="Q1") {
        return Mock.navigationToManage[0];
      }

    }
  }

  function mockQuestions($injector) {
    Mock.questionOne = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
    Mock.questionTwo = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q2');
    Mock.questionThree = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q3');
    Mock.questionFour = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q4');
  }

  function mockNavigationToManage($injector) {
    var navigationFactory = $injector.get('otusjs.model.navigation.NavigationFactory');
    Mock.navigationToManage = [];

    Mock.navigation = navigationFactory.create(Mock.questionOne.templateID);
    Mock.navigation.inNavigations.push(Mock.container.getBeginNode());
    Mock.navigationToManage.push(Mock.navigation);

    Mock.navigation1 = navigationFactory.create(Mock.questionTwo.templateID);
    Mock.navigation1.addInNavigation(Mock.navigationToManage[0]);
    Mock.navigationToManage.push(Mock.navigation1);

    Mock.navigation2  = navigationFactory.create(Mock.questionThree.templateID);
    Mock.navigation2.addInNavigation(Mock.navigationToManage[1]);
    Mock.navigationToManage.push(Mock.navigation2);

    Mock.container.getBeginNode().setupDefaultRoute(Mock.navigationToManage[0]);
    Mock.navigationToManage[0].setupDefaultRoute(Mock.navigationToManage[1]);
    Mock.navigationToManage[1].setupDefaultRoute(Mock.navigationToManage[2]);
  }
});
