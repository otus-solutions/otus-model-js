describe('ActivityUserFactory', function() {

    var USER_NAME = 'User Name';
    var USER_EMAIL = 'user@email.com';
    var factory;
    var Mock = {};

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            factory = _$injector_.get('otusjs.model.activity.ActivityUserFactory');
        });

    });

    describe('createCreatedStatus method', function() {
        var status;

        beforeEach(function() {
            status = factory.create(USER_NAME, USER_EMAIL);
        });

        it('should return an object of type ActivityUser', function() {
            expect(status.objectType).toEqual('ActivityUser');
        });

        it('should return an object with name', function() {
            expect(status.name).toEqual(USER_NAME);
        });

        it('should return an object with email', function() {
            expect(status.email).toEqual(USER_EMAIL);
        });

    });

});
