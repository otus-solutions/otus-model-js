describe('MetadataFillFactory', function() {

    var METADATA_VALUE = 1;
    var Mock = {};
    var factory;

    beforeEach(function() {
        angular.mock.module('otusjs');

        mockJson();

        inject(function(_$injector_) {
            factory = _$injector_.get('otusjs.model.activity.MetadataFillFactory');
        });

    });

    describe('isFilled method', function() {

        it('should return true when value is not null or undefined', function() {
            var answer = factory.create(METADATA_VALUE);

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

        it('should return a well formatted json based on instance of MetadataFill', function() {
            var answer = factory.create(METADATA_VALUE);

            expect(answer.toJson()).toEqual(Mock.json);
        });

    });

    function mockJson() {
        Mock.json = JSON.stringify({
            objectType: 'MetadataFill',
            value: METADATA_VALUE
        });
    }

});
