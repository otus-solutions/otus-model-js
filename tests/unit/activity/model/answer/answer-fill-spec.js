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

    describe('isFilled method', function() {

        it('should return true when value is not null or undefined', function() {
            var answer = factory.create(ANSWER_VALUE);

            expect(answer.isFilled()).toBe(true);
        });

        it('should return false when value is null', function() {
            var answer = factory.create(null);

            expect(answer.isFilled()).toBe(false);
        });

        it('should return false when value is undefined', function() {
            var answer = factory.create();

            expect(answer.isFilled()).toBe(false);
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
