describe('MetadataFillFactory', function() {

    var METADATA_VALUE = 1;
    var factory;

    beforeEach(function() {

        module('otusjs');

        inject(function(_$injector_) {
            factory = _$injector_.get('otusjs.model.activity.MetadataFillFactory');
        });

    });

    describe('create method', function() {

        it('should return an object of type MetadataFill', function() {
            var metadata = factory.create();

            expect(metadata.objectType).toEqual('MetadataFill');
        });

        it('should return an object with attribute value defined', function() {
            var metadata = factory.create();

            expect(metadata.value).toBeDefined();
        });

        it('should return a new object with attribute value equal to null', function() {
            var metadata = factory.create();

            expect(metadata.value).toBe(null);
        });

        it('should return an object with attribute value equal to parameter', function() {
            var metadata = factory.create(METADATA_VALUE);

            expect(metadata.value).toEqual(METADATA_VALUE);
        });

    });

});
