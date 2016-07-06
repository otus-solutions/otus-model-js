describe('ActivityFacadeService', function() {
    var Mock = {};
    var service;

    /* @BeforeScenario */
    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            /* @InjectMocks */
            service = _$injector_.get('ActivityFacadeService', {
                AnswerFactory: mockAnswerFactory(_$injector_)
            });
        });
    });

    describe('create method', function() {
        it('should call function for fill of question', function() {
            service.fillQuestion(Mock.item, Mock.answer, Mock.metadata);
            expect(Mock.AnswerFactory.fillQuestion).toHaveBeenCalledWith(Mock.item);
        });
    });

    function mockAnswerFactory($injector) {
        return $injector.get('AnswerFactory');
    }
});
