describe('otusjs.model.utils.AlphabetSuffixIDGenerator', function() {

    var service;

    beforeEach(function() {
        module('utils');

        inject(function(_$injector_) {
            service = _$injector_.get('otusjs.model.utils.AlphabetSuffixIDGenerator');
        });
    });

    describe('generateSuffixByOptionsLength method', function() {

        it('should return a alphabet letter that correspond the quantity of options', function() {
            expect(service.generateSuffixByOptionsLength(0)).toBe('a');
        });

        it('should return a alphabet letter z if quantity is 25', function() {
            expect(service.generateSuffixByOptionsLength(25)).toBe('z');
        });

        it('should concat the first letter of alphabet if quantity is greater than 25', function() {
            expect(service.generateSuffixByOptionsLength(26)).toBe('aa');
        });

        it('should concat the first letter of alphabet if quantity is greater than 50', function() {
            expect(service.generateSuffixByOptionsLength(51)).toBe('az');
        });

        it('should concat the second letter of alphabet if quantity is greater than 52', function() {
            expect(service.generateSuffixByOptionsLength(52)).toBe('ba');
        });

        it('should concat the second letter of alphabet if quantity is greater than 50', function() {
            expect(service.generateSuffixByOptionsLength(77)).toBe('bz');
        });
    });

});
