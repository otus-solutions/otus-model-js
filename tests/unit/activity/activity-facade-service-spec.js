describe('ActivityFacadeService', function() {
    var Mock = {};
    var service;

    /* @BeforeScenario */
    beforeEach(function() {
        module('otusjs');
        module('otusjs.activity');

        inject(function(_$injector_) {
            /* @InjectMocks */
            service = _$injector_.get('ActivityFacadeService', {
                AnswerFactory: mockAnswerFactory(_$injector_)
            });
        });
    });

    describe('fillQuestion method', function() {
      
        it('should call AnswerFactory.create', function() {
            spyOn(Mock.AnswerFactory, 'create');
            service.fillQuestion(jasmine.any(Object), jasmine.any(String), jasmine.any(Object));
            expect(Mock.AnswerFactory.create).toHaveBeenCalledWith(jasmine.any(Object), jasmine.any(String), jasmine.any(Object));
        });

    });

    function mockAnswerFactory($injector) {
        Mock.AnswerFactory = $injector.get('AnswerFactory');
        return Mock.AnswerFactory;
    }
});
