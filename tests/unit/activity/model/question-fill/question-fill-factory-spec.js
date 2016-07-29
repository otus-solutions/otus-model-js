describe('QuestionFillFactory', function() {

    var QUESTION_FILL_TYPE = 'QuestionFill';
    var QID1 = 'QID1';
    var ANSWER_FILL_TYPE = 'AnswerFill';
    var METADATA_FILL_TYPE = 'MetadataFill';
    var EMPTY_STRING = '';
    var COMMENT = 'Este é o meu comentário: comentário.';
    var Mock = {};

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockAnswerFill(_$injector_);
            mockMetadataFill(_$injector_);

            factory = _$injector_.get('QuestionFillFactory');
        });
    });

    describe('create method', function() {

        var questionFill;

        beforeEach(function() {
            questionFill = factory.create(QID1, Mock.answer, Mock.metadata);
        });

        it('should return an object of type QuestionFill', function() {
            expect(questionFill.objectType).toEqual(QUESTION_FILL_TYPE);
        });

        it('should return attribute questionID equal to contructor paramenter', function() {
            expect(questionFill.questionID).toEqual(QID1);
        });

        it('should return an object with answer attribute of type AnswerFill', function() {
            expect(questionFill.answer.objectType).toEqual(ANSWER_FILL_TYPE);
        });

        it('should return an object with metadata attribute of type MetadataFillFactory', function() {
            expect(questionFill.metadata.objectType).toEqual(METADATA_FILL_TYPE);
        });

        it('should return an object with attribute comment equal to empty string', function() {
            expect(questionFill.comment).toEqual(EMPTY_STRING);
        });

        it('should return an object with attribute comment equal to paramenter when is provided', function() {
            questionFill = factory.create(QID1, Mock.answer, Mock.metadata, COMMENT);

            expect(questionFill.comment).toEqual(COMMENT);
        });

    });

    function mockAnswerFill($injector) {
        Mock.answer = $injector.get('AnswerFillFactory').create();
    }

    function mockMetadataFill($injector) {
        Mock.metadata = $injector.get('MetadataFillFactory').create();
    }

});
