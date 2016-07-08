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
        var answer;

        beforeEach(function() {
            answer = answerFactory.create(MockAnswer.Question, MockAnswer.ANSWER, MockAnswer.Metadata);
        });

        it('should to include new answer on list', function() {
            containerService.addAnswer(answer);
            expect(containerService.searchAnswer(MockQuestionIDFirstAnswer.questionID)).toEqual(answer);
        });

    });

    describe('answerListSize method', function() {
        var answer;

        beforeEach(function() {
            answer = answerFactory.create(MockAnswer.Question, MockAnswer.ANSWER, MockAnswer.Metadata);
        });

        it('should return length of list equals one', function() {
            containerService.addAnswer(answer);
            expect(containerService.answerListSize()).toEqual(1);
        });

        it('should return length equal zero, when list is empty', function() {
            expect(containerService.answerListSize()).toEqual(0);
        });

    });

    describe('searchAnswer method', function() {
        var answer;

        beforeEach(function() {
            answer = answerFactory.create(MockAnswer.Question, MockAnswer.ANSWER, MockAnswer.Metadata);
            containerService.addAnswer(answer);
        });

        it('should return correct answer, exist answer on list', function() {
            var foundAnswer = containerService.searchAnswer(MockQuestionIDFirstAnswer.questionID);
            expect(foundAnswer.questionID).toEqual(answer.questionID);
        });

        it('should return undefined answer, does not exist answer on list', function() {
            answer = containerService.searchAnswer(MockQuestionIDSecondAnswer.questionID);

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
