describe('AnswerFill', function() {

    var ANSWER_VALUE = 'Pw1';
    var Mock = {};
    var factory;

    beforeEach(function() {
        module('otusjs');

        mockJson();

        inject(function(_$injector_) {
            factory = _$injector_.get('AnswerFillFactory');
        });

    });

    describe('toJson method', function() {

        it('should return a well formatted json based on instance of AnswerFill', function() {
            var answer = factory.create(ANSWER_VALUE);

            expect(answer.toJson()).toEqual(Mock.json);
        });

    });

    function mockJson() {
        Mock.json = JSON.stringify({
            objectType: 'AnswerFill',
            value: ANSWER_VALUE
        });
    }

});
