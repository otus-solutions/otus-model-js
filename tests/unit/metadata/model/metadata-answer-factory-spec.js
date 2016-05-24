describe('MetadataAnswerFactory', function() {
    var Mock = {};
    var option;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            factory = _$injector_.get('MetadataAnswerFactory', {
                'LabelFactory': mockLabelFactory(_$injector_)
            });

            option = factory.create(0);
        });
    });

    describe('create method', function() {

        it('returned object should extends StudioObject', function() {
            expect(option.extends).toBe('StudioObject');
        });

        it('returned object should have objectType equal to MetadataAnswer', function() {
            expect(option.objectType).toBe('MetadataAnswer');
        });

        it('returned object should have dataType equal to Integer', function() {
            expect(option.dataType).toBe('Integer');
        });

        it('returned object should have a label object for enUS', function() {
            expect(option.label.enUS).toBeDefined();
        });

        it('returned object should have a label object for ptBR', function() {
            expect(option.label.ptBR).toBeDefined();
        });

        it('returned object should have a label object for esES', function() {
            expect(option.label.esES).toBeDefined();
        });

        it('returned object should have a value property defined', function() {
            expect(option.value).toBeDefined();
        });

    });

    function mockLabelFactory($injector) {
        Mock.LabelFactory = $injector.get('LabelFactory');
        return Mock.LabelFactory;
    }

});
