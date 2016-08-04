describe('ValidatorIDService', function() {
    var Mock = {};

    beforeEach(function() {
        module('utils');

        inject(function(_$injector_) {

            service = _$injector_.get('ValidatorIDService');

        });
    });

    describe('isAvailable method', function() {

        it('should return true when on the survey does not exists a item with a passed id', function() {
            
        });
    });

});
