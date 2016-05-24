describe('MetadataGroupFactory', function() {
    var Mock = {};
    var factory, metadataGroup;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            factory = _$injector_.get('MetadataGroupFactory', {
                MetadataAnswerFactory: mockMetadataAnswerFactory(_$injector_)
            });
        });

        metadataGroup = factory.create();
    });

    describe('create method', function() {

        it('should return an object defined', function() {
            expect(metadataGroup).toBeDefined();
        });

        it('returned object should extends StudioObject', function() {
            expect(metadataGroup.extents).toBe('StudioObject');
        });

        it('should return a MetadataGroup ObjectType', function() {
            expect(metadataGroup.objectType).toBe('MetadataGroup');
        });

        it('should return a metadataGroup options', function() {
            expect(metadataGroup.options).toEqual(jasmine.any(Object));
        });

    });

    function mockMetadataAnswerFactory($injector) {
        Mock.MetadataAnswerFactory = $injector.get('MetadataAnswerFactory');
        return Mock.MetadataAnswerFactory;
    }

});
