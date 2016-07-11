describe('AnswerFillFactory', function() {

    var ANSWER_VALUE = 'Pw1';
    var factory;

    beforeEach(function() {

        module('otusjs');

        inject(function(_$injector_) {
            factory = _$injector_.get('AnswerFillFactory');
        });

    });

    describe('create method', function() {

        it('should return an object of type AnswerFill', function() {
            var answer = factory.create();

            expect(answer.objectType).toEqual('AnswerFill');
        });

        it('should return an object with attribute value defined', function() {
            var answer = factory.create();

            expect(answer.value).toBeDefined();
        });

        it('should return a new object with attribute value equal to null', function() {
            var answer = factory.create();

            expect(answer.value).toBe(null);
        });

        it('should return an object with attribute value equal to parameter', function() {
            var answer = factory.create(ANSWER_VALUE);

            expect(answer.value).toEqual(ANSWER_VALUE);
        });

    });

});
