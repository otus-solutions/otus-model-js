describe('QuestionAddService', function() {
    var Mock = {};

    var QUESTION_TYPE = 'IntegerQuestion';
    var TEMPLATE_ID = 'Q1';

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            service = _$injector_.get('QuestionAddService', {
                QuestionRemoveService: mockQuestionContainerService(_$injector_)
            });
        });
    });

    describe('execute method', function() {

        it('should call QuestionContainerService.createQuestion with question type', function() {
            spyOn(Mock.QuestionContainerService, 'createQuestion');

            service.execute(QUESTION_TYPE, TEMPLATE_ID);

            expect(Mock.QuestionContainerService.createQuestion).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID);
        });

        it('should call QuestionContainerService.createQuestion with templateID', function() {
            spyOn(Mock.QuestionContainerService, 'createQuestion');

            service.execute(QUESTION_TYPE, TEMPLATE_ID);

            expect(Mock.QuestionContainerService.createQuestion).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID);
        });

        it('should return the new question created', function() {
            var question = service.execute(QUESTION_TYPE, TEMPLATE_ID);

            expect(question).toBeDefined();
        });

    });

    function mockQuestionContainerService($injector) {
        Mock.QuestionContainerService = $injector.get('QuestionContainerService');
        return Mock.QuestionContainerService;
    }

});
