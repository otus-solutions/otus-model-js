describe('ModelFacadeService', function() {
  var Mock = {};
  var service;

  /* @BeforeScenario */
  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      /* @InjectMocks */
      var injections = {
        'SurveyItemFactory': mockSurveyItemFactory(_$injector_),
        'IdiomFactory': mockIdiomFactory(_$injector_),
        'UnitFactory': mockUnitFactory(_$injector_),
        'SurveyFactory': mockSurveyFactory(_$injector_),
        'SurveyIdentityFactory': mockSurveyIdentityFactory(
          _$injector_),
        'MetadataGroupFactory': mockMetadataGroupFactory(
          _$injector_)

      }
      service = _$injector_.get('ModelFacadeService', injections);
    });
  });

  describe('Getting question factories', function() {

    it('getSurveyItemFactory should return a SurveyItemFactory',
      function() {
        var factory = service.getSurveyItemFactory();

        expect(factory).toBeDefined();
      });

    it('getIdiomFactory should return a IdiomFactory', function() {
      var factory = service.getIdiomFactory();

      expect(factory).toBeDefined();
    });

    it('getUnitFactory should return a UnitFactory', function() {
      var factory = service.getUnitFactory();

      expect(factory).toBeDefined();
    });

    it('getSurveyFactory should return a SurveyFactory', function() {
      var factory = service.getSurveyFactory();

      expect(factory).toBeDefined();
    });

    it('getSurveyIdentityFactory should return a SurveyIdentityFactory',
      function() {
        var factory = service.getSurveyIdentityFactory();

        expect(factory).toBeDefined();
      });

    it('getMetadataGroupFactory should return a MetadataGroupFactory',
      function() {
        var factory = service.getMetadataGroupFactory();

        expect(factory).toBeDefined();
      });

  });

  function mockSurveyItemFactory($injector) {
    Mock.SurveyItemFactory = $injector.get('SurveyItemFactory');
    return Mock.SurveyItemFactory;
  }

  function mockIdiomFactory($injector) {
    Mock.IdiomFactory = $injector.get('IdiomFactory');
    return Mock.IdiomFactory;

  }

  function mockUnitFactory($injector) {
    return $injector.get('UnitFactory');
    Mock.UnitFactory = $injector.get('UnitFactory');
    return Mock.UnitFactory;
  }

  function mockSurveyFactory($injector) {
    Mock.SurveyFactory = $injector.get('SurveyFactory');
    return Mock.SurveyFactory;
  }

  function mockSurveyIdentityFactory($injector) {
    Mock.SurveyIdentityFactory = $injector.get('SurveyIdentityFactory');
    return Mock.SurveyIdentityFactory;
  }

  function mockMetadataGroupFactory($injector) {
    Mock.MetadataGroupFactory = $injector.get('MetadataGroupFactory');
    return Mock.MetadataGroupFactory;
  }

});
