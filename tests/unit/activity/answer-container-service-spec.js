describe('AnswerContainerService', function() {
    var MockAnswer = {};
    var MockQuestionIDFirstAnswer = {};
    var MockQuestionIDSecondAnswer = {};
    var containerService;
    var answerFactory;

    beforeEach(function() {
        module('otusjs');

        mocksQuestionID();
        mockAnswerProperties();

        inject(function(_$injector_) {
            containerService = _$injector_.get('AnswerContainerService');
            answerFactory = _$injector_.get('AnswerFactory');
        });
    });

    describe('addAnswer method', function() {

        it('should to include new answer on list', function() {

        });

    });

    describe('searchAnswer method', function() {

        var answer;

        beforeEach(function() {
            answer = answerFactory.create(MockAnswer.Question, MockAnswer.ANSWER, MockAnswer.Metadata);
            // containerService.updateAnswer(answer);
        });

        fit('should return correct answer, exist answer on list', function() {
            var foundAnswer = containerService.searchAnswer(MockQuestionIDFirstAnswer.questionID);

            expect(foundAnswer.questionID).toEqual(answer.questionID);
        });

        fit('should return undefined answer, does not exist answer on list', function() {
            var answer = containerService.searchAnswer(MockQuestionIDSecondAnswer.questionID);

            expect(answer).toEqual(undefined);
        });

    });

    function mocksQuestionID() {
        MockQuestionIDFirstAnswer.questionID = 'PW1';
        MockQuestionIDSecondAnswer.questionID = 'PW2';
    }

    function mockAnswerProperties() {
        var question = {
            objectType: 'objectTypeQuestion',
            templateID: 'PW1'
        };
        var metadata = {
            objectType: 'MetadataGroup',
            value: 1,
            label: 'Test'
        };
        MockAnswer.Question = question;
        MockAnswer.ANSWER = 'test';
        MockAnswer.Metadata = metadata;
    }
});
