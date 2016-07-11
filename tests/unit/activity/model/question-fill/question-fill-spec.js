describe('QuestionFill', function() {

    var QID1 = 'QID1';
    var COMMENT = 'Este é o meu comentário: comentário.';
    var Mock = {};
    var questionFill;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockAnswerFill(_$injector_);
            mockMetadataFill(_$injector_);
            mockJson();

            var factory = _$injector_.get('QuestionFillFactory');
            questionFill = factory.create(QID1, Mock.answer, Mock.metadata, COMMENT);
        });

    });

    describe('toJson method', function() {

        it('should return a well formatted json based on instance of MetadataFill', function() {
            expect(questionFill.toJson()).toEqual(Mock.json);
        });

    });

    function mockAnswerFill($injector) {
        Mock.answer = $injector.get('AnswerFillFactory').create();
    }

    function mockMetadataFill($injector) {
        Mock.metadata = $injector.get('MetadataFillFactory').create();
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
