describe('AnswerFactory', function() {
    var Mock = {};

    beforeEach(function() {
        module('otusjs');

        mockAnswerProperties();

        inject(function(_$injector_) {
            factory = _$injector_.get('AnswerFactory');
        });
    });

    describe('create method', function() {
        var answer;

        beforeEach(function() {
            answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
        });

        it('should return the correct answer to the question', function() {
            expect(answer.value).toEqual(Mock.ANSWER);
        });

        it('should return the correct objectType', function() {
            expect(answer.objectType).toEqual(Mock.Question.objectType);
        });

        it('should return the correct questionID', function() {
            expect(answer.questionID).toEqual(Mock.Question.templateID);
        });

        it('should return metadata how type object', function() {
            expect(answer.metadata).toEqual(Mock.Metadata);
        });
    });

    describe('getObjectAnswer method', function() {
        var answer;

        beforeEach(function() {
            answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
        });

        it('should return instance of Answer', function() {
            expect(answer.getObjectAnswer()).toEqual(answer);
        });

        it('should return instance of Answer how equal properties', function() {
            var instance = answer.getObjectAnswer();
            expect(instance.objectType).toEqual(Mock.Question.objectType);
            expect(instance.questionID).toEqual(Mock.Question.templateID);
            expect(instance.value).toEqual(Mock.ANSWER);
            expect(instance.metadata).toEqual(Mock.Metadata);
        });
    });

    describe('removeAnswer method', function() {
        var answer;

        beforeEach(function() {
            answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
        });

        it('should return undefined when removed value of question', function() {
            expect(answer.getObjectAnswer()).toEqual(answer);
            answer.removeAnswer();
            expect(answer.value).toEqual(undefined);
        });

    });

    describe('removeMetadata method', function() {
        var answer;

        beforeEach(function() {
            answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
        });

        it('should return undefined when metadata value of question', function() {
            expect(answer.getObjectAnswer()).toEqual(answer);
            answer.removeMetadata();
            expect(answer.metadata).toEqual(undefined);
        });
    });

    describe('isFilled method', function() {
        it('should return true when answer not filled', function() {
            var answer = factory.create(Mock.Question);
            var result = answer.isFilled();
            expect(result).toEqual(true);
        });

        it('should return true when removed value and metadata of answer', function() {
            var answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
            answer.removeAnswer();
            answer.removeMetadata();
            expect(answer.value).toEqual(undefined);
            expect(answer.metadata).toEqual(undefined);
        });
    });

    function mockAnswerProperties() {
        var question = {
            objectType: 'objectTypeQuestion',
            templateID: 'IdQuestion'
        };
        var metadata = {
            objectType: 'MetadataGroup',
            value: 1,
            label: 'Test'
        };
        Mock.Question = question;
        Mock.ANSWER = 'test';
        Mock.Metadata = metadata;
    }
});
