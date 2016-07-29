describe('CheckboxAnswerOptionFactory', function() {
    var Mock = {};
    var option;
    var factory;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            factory = _$injector_.get('CheckboxAnswerOptionFactory');
        });

        Mock.TEMPLATE_ID = 'TPL-ID';
        option = factory.create(Mock.TEMPLATE_ID);
    });

    describe('create method', function() {

        it('returned object should extends StudioObject', function() {
            expect(option.extents).toBe('StudioObject');
        });

        it('returned object should have objectType equal to CheckboxAnswerOptionFactory', function() {
            expect(option.objectType).toBe('CheckboxAnswerOption');
        });

        it('returned object should have dataType equal to Boolean', function() {
            expect(option.dataType).toBe('Boolean');
        });

        it('returned object should have a label object for ptBR locale', function() {
            expect(option.label.ptBR).not.toBeNull();
            expect(option.label.ptBR).not.toBeUndefined();
        });

        it('returned object should have a label object for enUS locale', function() {
            expect(option.label.enUS).not.toBeNull();
            expect(option.label.enUS).not.toBeUndefined();
        });

        it('returned object should have a label object for enUS locale', function() {
            expect(option.label.esES).not.toBeNull();
            expect(option.label.esES).not.toBeUndefined();
        });

    });

});
