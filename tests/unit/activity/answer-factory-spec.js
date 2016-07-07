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
        it('should return the correct answer to the question', function functionName() {
            var answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
            expect(answer.value).toEqual(Mock.ANSWER);
        });

        it('should return the correct objectType', function functionName() {
            var answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
            expect(answer.objectType).toEqual(Mock.Question.objectType);
        });

        it('should return the correct questionID', function functionName() {
            var answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
            expect(answer.questionID).toEqual(Mock.Question.templateID);
        });

        it('should return metadata how type object', function functionName() {
            var answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
            expect(answer.metadata).toEqual(Mock.Metadata);
        });
    });

    describe('getObjectAnswer method', function functionName() {
      it('should return instance of Answer', function functionName() {
          var answer = factory.create(Mock.Question, Mock.ANSWER, Mock.Metadata);
          expect(answer.getObjectAnswer()).toEqual(answer);
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
