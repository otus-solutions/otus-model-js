describe('QuestionFill', function() {

    var QID1 = 'QID1';
    var COMMENT = 'Este é o meu comentário: comentário.';
    var Mock = {};
    var factory;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockAnswerFill(_$injector_);
            mockMetadataFill(_$injector_);
            mockJson();

            factory = _$injector_.get('QuestionFillFactory');
        });

    });

    describe('isFilled method', function() {
        var answerFill;
        var metadataFill;
        var commentFill;
        var unfilledQuestion;

        beforeEach(function() {
            answerFill = factory.create(QID1, 'Yes', null, null);
            metadataFill = factory.create(QID1, null, 1, null);
            commentFill = factory.create(QID1, null, null, COMMENT);
            unfilledQuestion = factory.create(QID1, null, null, '');
        });

        it('should return true when answer is filled', function() {
            expect(answerFill.isFilled()).toEqual(true);
        });

        it('should return true when metadata is filled', function() {
            expect(metadataFill.isFilled()).toEqual(true);
        });

        it('should return true when comment is filled', function() {
            expect(commentFill.isFilled()).toEqual(true);
        });

        it('should return false when answer, metadata and comment are not filled', function() {
            expect(unfilledQuestion.isFilled()).toEqual(false);
        });

    });

    describe('toJson method', function() {

        it('should return a well formatted json based on instance of MetadataFill', function() {
            fill = factory.create(QID1, 'Yes', 1, COMMENT);

            expect(fill.toJson()).toEqual(Mock.json);
        });

    });

    function mockAnswerFill($injector) {
        Mock.answer = $injector.get('AnswerFillFactory').create('Yes');
    }

    function mockMetadataFill($injector) {
        Mock.metadata = $injector.get('MetadataFillFactory').create(1);
    }

    function mockJson() {
        Mock.json = JSON.stringify({
            objectType: 'QuestionFill',
            questionID: QID1,
            answer: Mock.answer,
            metadata: Mock.metadata,
            comment: COMMENT,
        });
    }

});