xdescribe("NavigationInsertionTask service", function () {
  let Mock = {};
  let service;

  beforeEach(function () {
    angular.mock.module('otusjs');

    inject(function (_$injector_) {
      service = _$injector_.get('otusjs.model.navigation.NavigationInsertionTask', {
        'otusjs.model.navigation.DefaultRouteCreationTaskService': Mock.DefaultRouteCreationTaskService,
        'otusjs.model.navigation.RouteRemovalTaskService': Mock.RouteRemovalTaskService
      });
      _mock(_$injector_);
      _mockNavigationContainerService(_$injector_);
    });
  });

  describe('setContainer method', function () {
    it('when setContainer method is called then container variable should to be not undefined ', function () {

    });
  });

  describe('execute method', function () {
    it('should call method execute in DefaultRouteCreationTaskService', function () {

    });
  });

  function _mock(_$injector_) {
    Mock.DefaultRouteCreationTaskService = _$injector_.get('otusjs.model.navigation.DefaultRouteCreationTaskService');
    Mock.RouteRemovalTaskService = _$injector_.get('otusjs.model.navigation.RouteRemovalTaskService');

    Mock.navigationToMove = {
      origin: 'Q1',
      clearNavigation: function () { }
    };
  }

  function _mockNavigationContainerService($injector) {
    mockQuestions($injector);

    Mock.NavigationContainerService = $injector.get('otusjs.model.navigation.NavigationContainerFactory');
    Mock.NavigationContainerService.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
    Mock.NavigationContainerService.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);

    spyOn(Mock.NavigationContainerService, 'getNavigationByPosition').and.callThrough();

    return Mock.NavigationContainerService;
  }

  function mockQuestions($injector) {
    Mock.questionOne = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
    Mock.questionTwo = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q2');
    Mock.questionThree = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q3');
  }

});