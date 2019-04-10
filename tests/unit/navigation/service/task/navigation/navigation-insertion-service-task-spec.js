describe("NavigationInsertionTask service", function () {
  let Mock = {};
  let service;

  beforeEach(function () {
    angular.mock.module('otusjs');

    inject(function (_$injector_) {
      _mock(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.NavigationInsertionTask', {
        'otusjs.model.navigation.DefaultRouteCreationTaskService': Mock.DefaultRouteCreationTaskService,
        'otusjs.model.navigation.RouteRemovalTaskService': Mock.RouteRemovalTaskService
      });
    });

  });

  it('should create accordingly to objectType', function () {

  });

  function _mock(_$injector_) {
    Mock.DefaultRouteCreationTaskService = _$injector_.get('otusjs.model.navigation.DefaultRouteCreationTaskService');
    Mock.RouteRemovalTaskService = _$injector_.get('otusjs.model.navigation.RouteRemovalTaskService');
  }

});