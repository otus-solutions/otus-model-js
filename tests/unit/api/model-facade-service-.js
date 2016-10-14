describe('ModelFacadeService', function() {
    var Mock = {};

    /* @BeforeScenario */
    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            /* @InjectMocks */
            service = _$injector_.get('ModelFacadeService', {
                SurveyItemFactory: mockSurveyItemFactory(_$injector_),
                IdiomFactory: mockIdiomFactory(_$injector_),
                UnitFactory: mockUnitFactory(_$injector_),
                SurveyFactory: mockSurveyFactory(_$injector_),
                SurveyIdentityFactory: mockSurveyIdentityFactory(_$injector_)
            });
        });
    });

    describe('Getting question factories', function() {

        it('getSurveyItemFactory should return a SurveyItemFactory', function() {
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

        it('getSurveyIdentityFactory should return a SurveyIdentityFactory', function() {
            var factory = service.getSurveyIdentityFactory();

            expect(factory).toBeDefined();
        });

    });

    function mockSurveyItemFactory($injector) {
        return $injector.get('SurveyItemFactory');
    }

    function mockIdiomFactory($injector) {
        return $injector.get('IdiomFactory');
    }

    function mockUnitFactory($injector) {
        return $injector.get('UnitFactory');
    }

    function mockSurveyFactory($injector) {
        return $injector.get('SurveyFactory');
    }

    function mockSurveyIdentityFactory($injector) {
        return $injector.get('SurveyIdentityFactory');
    }

});
