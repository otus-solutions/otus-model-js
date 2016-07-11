describe('MetadataFillFactory', function() {

    var METADATA_VALUE = 1;
    var Mock = {};
    var factory;

    beforeEach(function() {
        module('otusjs');

        mockJson();

        inject(function(_$injector_) {
            factory = _$injector_.get('MetadataFillFactory');
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
