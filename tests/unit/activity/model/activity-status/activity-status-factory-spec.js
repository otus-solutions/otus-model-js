describe('ActivityStatusFactory', function() {

    var CREATED = 'CREATED';
    var OPENED = 'OPENED';
    var SAVED = 'SAVED';
    var FINALIZED = 'FINALIZED';
    var INITIALIZED_OFFLINE = 'INITIALIZED_OFFLINE';
    var INITIALIZED_ONLINE = 'INITIALIZED_ONLINE';

    var factory;
    var Mock = {};

    beforeEach(function() {
        module('otusjs');

        mockUser();

        inject(function(_$injector_) {
            factory = _$injector_.get('ActivityStatusFactory');
        });

    });

    describe('createCreatedStatus method', function() {
        var status;

        beforeEach(function() {
            status = factory.createCreatedStatus(Mock.user);
        });

        it('should return an object of type ActivityStatus', function() {
            expect(status.objectType).toEqual('ActivityStatus');
        });

        it('should return an object with name equal to CREATED', function() {
            expect(status.name).toEqual(CREATED);
        });

        it('should return an object with a date', function() {
            expect(status.date).toBeDefined();
        });

        it('should return an object with a user', function() {
            expect(status.user).toBeDefined();
        });

    });

    describe('createInitializedOfflineStatus method', function() {
        var status;

        beforeEach(function() {
            status = factory.createInitializedOfflineStatus(Mock.user);
        });

        it('should return an object of type ActivityStatus', function() {
            expect(status.objectType).toEqual('ActivityStatus');
        });

        it('should return an object with name equal to INITIALIZED_OFFLINE', function() {
            expect(status.name).toEqual(INITIALIZED_OFFLINE);
        });

        it('should return an object with a date', function() {
            expect(status.date).toBeDefined();
        });

        it('should return an object with a user', function() {
            expect(status.user).toBeDefined();
        });

    });

    describe('createInitializedOnlineStatus method', function() {
        var status;

        beforeEach(function() {
            status = factory.createInitializedOnlineStatus(Mock.user);
        });

        it('should return an object of type ActivityStatus', function() {
            expect(status.objectType).toEqual('ActivityStatus');
        });

        it('should return an object with name equal to INITIALIZED_ONLINE', function() {
            expect(status.name).toEqual(INITIALIZED_ONLINE);
        });

        it('should return an object with a date', function() {
            expect(status.date).toBeDefined();
        });

        it('should return an object with a user', function() {
            expect(status.user).toBeDefined();
        });

    });

    describe('createOpenedStatus method', function() {
        var status;

        beforeEach(function() {
            status = factory.createOpenedStatus(Mock.user);
        });

        it('should return an object of type ActivityStatus', function() {
            expect(status.objectType).toEqual('ActivityStatus');
        });

        it('should return an object with name equal to OPENED', function() {
            expect(status.name).toEqual(OPENED);
        });

        it('should return an object with a date', function() {
            expect(status.date).toBeDefined();
        });

        it('should return an object with a user', function() {
            expect(status.user).toBeDefined();
        });

    });

    describe('createSavedStatus method', function() {
        var status;

        beforeEach(function() {
            status = factory.createSavedStatus(Mock.user);
        });

        it('should return an object of type ActivityStatus', function() {
            expect(status.objectType).toEqual('ActivityStatus');
        });

        it('should return an object with name equal to SAVED', function() {
            expect(status.name).toEqual(SAVED);
        });

        it('should return an object with a date', function() {
            expect(status.date).toBeDefined();
        });

        it('should return an object with a user', function() {
            expect(status.user).toBeDefined();
        });

    });

    describe('createFinalizedStatus method', function() {
        var status;

        beforeEach(function() {
            status = factory.createFinalizedStatus(Mock.user);
        });

        it('should return an object of type ActivityStatus', function() {
            expect(status.objectType).toEqual('ActivityStatus');
        });

        it('should return an object with name equal to FINALIZED', function() {
            expect(status.name).toEqual(FINALIZED);
        });

        it('should return an object with a date', function() {
            expect(status.date).toBeDefined();
        });

        it('should return an object with a user', function() {
            expect(status.user).toBeDefined();
        });

    });

    function mockUser() {
        Mock.user = {};
    }

});
