describe('FillingManagerService', function() {

    var QUESTION_FILL_TYPE = 'QuestionFill';
    var QID1 = 'QID1';
    var QID2 = 'QID2';
    var ANSWER_FILL_TYPE = 'AnswerFill';
    var METADATA_FILL_TYPE = 'MetadataFill';
    var EMPTY_STRING = '';
    var COMMENT = 'Este é o meu comentário: comentário.';
    var Mock = {};
    var questionFillFactory;
    var service;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockAnswerFill(_$injector_);
            mockMetadataFill(_$injector_);

            service = _$injector_.get('FillingManagerService');
            questionFillFactory = _$injector_.get('QuestionFillFactory');
        });
    });

    describe('answerListSize method', function() {
        var answer;

        beforeEach(function() {
            answer = questionFillFactory.create(MockAnswer.Question, MockAnswer.ANSWER, MockAnswer.Metadata);
        });

        xit('should return length of list equals one, when list has one answer', function() {
            service.add(answer);
            expect(service.answerListSize()).toEqual(1);
        });

        xit('should return length equal zero, when list is empty', function() {
            expect(service.answerListSize()).toEqual(0);
        });

    });

    describe('searchAnswerByID method', function() {

        var filling;

        beforeEach(function() {
            filling = questionFillFactory.create(QID1, Mock.answer, Mock.metadata, COMMENT);
            service.add(filling);
        });

        it('should return correct answer, exist answer on list', function() {
            expect(service.searchAnswerByID(QID1)).toEqual(filling);
        });

        it('should return undefined answer if it does not exist on list', function() {
            expect(service.searchAnswerByID(QID2)).toBeUndefined();
        });

    });

    describe('add method', function() {

        var filling;

        beforeEach(function() {
            filling = questionFillFactory.create(QID1, Mock.answer, Mock.metadata, COMMENT);
        });

        it('should to include new filling in list', function() {
            service.add(filling);

            expect(service.searchAnswerByID(QID1)).toEqual(filling);
        });

    });

    describe('getIndexAnswerOnList method', function() {
        var answer;

        beforeEach(function() {
            answer = questionFillFactory.create(MockAnswer.Question, MockAnswer.ANSWER, MockAnswer.Metadata);
            service.add(answer);
        });

        xit('should return index of elemente on list', function() {
            var index = service.getIndexAnswerOnList(MockQuestionIDFirstAnswer.questionID);
            expect(index).not.toEqual(undefined);
        });

        xit('should return index of element in list, return should to be a number zero', function() {
            var index = service.getIndexAnswerOnList(MockQuestionIDFirstAnswer.questionID);
            expect(index).toEqual(0);
        });
    });

    describe('removeAnswer method', function() {
        var answer;

        beforeEach(function() {
            answer = questionFillFactory.create(MockAnswer.Question, MockAnswer.ANSWER, MockAnswer.Metadata);
            service.add(answer);
        });

        xit('should return true when removed element in list', function() {
            var result = service.removeAnswer(MockQuestionIDFirstAnswer.questionID);
            expect(result).toEqual(true);
        });

        xit('should return false when none element removed of list', function() {
            var result = service.removeAnswer(MockQuestionIDSecondAnswer.questionID);
            expect(result).toEqual(false);
        });
    });

    describe('replaceAnswer method', function() {
        xit('should return ', function() {

        });
    });

    function mockAnswerFill($injector) {
        Mock.answer = $injector.get('AnswerFillFactory').create();
    }

    function mockMetadataFill($injector) {
        Mock.metadata = $injector.get('MetadataFillFactory').create();
    }

});
