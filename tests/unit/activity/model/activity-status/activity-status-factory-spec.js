describe('ActivityStatusFactory', function() {

    var CREATED = 'CREATED';
    var OPENED = 'OPENED';
    var SAVED = 'SAVED';
    var FINALIZED = 'FINALIZED';
    var INITIALIZED_OFFLINE = 'INITIALIZED_OFFLINE';
    var INITIALIZED_ONLINE = 'INITIALIZED_ONLINE';

    var factory;
    var userFactory;
    var Mock = {};

    beforeEach(function() {
        angular.mock.module('otusjs');

        inject(function(_$injector_) {
            factory = _$injector_.get('otusjs.model.activity.ActivityStatusFactory');
            userFactory = _$injector_.get('otusjs.model.activity.ActivityUserFactory');
        });

        mockUser();

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
            mockOfflineData();
            status = factory.createInitializedOfflineStatus(Mock.offlineData);
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

  describe('updateUserInInitializedOfflineStatus method', function() {
    var status;

    beforeEach(function() {
      mockOfflineData();
    });

    it('should update user in activity status', function () {
      status = factory.createInitializedOfflineStatus(Mock.offlineData);
      expect(status.name).toEqual(INITIALIZED_OFFLINE);
      expect(status.user.name).toEqual(Mock.user.name);
      expect(status.user.email).toEqual(Mock.user.email);
      status.setUser(Mock.userNew)
      expect(status.user.name).toEqual(Mock.userNew.name);
      expect(status.user.email).toEqual(Mock.userNew.email);
    });

    it('should update user in activity status', function () {
      status = factory.createInitializedOnlineStatus(Mock.user);
      expect(status.name).not.toEqual(INITIALIZED_OFFLINE);
      expect(status.user.name).toEqual(Mock.user.name);
      expect(status.user.email).toEqual(Mock.user.email);
      status.setUser(Mock.userNew)
      expect(status.user.name).toEqual(Mock.user.name);
      expect(status.user.email).toEqual(Mock.user.email);
    });

  });

    function mockUser() {
        Mock.user = userFactory.create('User Name', 'user@email.com');
        Mock.userNew = userFactory.create('New User', 'newuser@email.com');
    }

    function mockOfflineData() {
        Mock.offlineData = {};
        Mock.offlineData.checker = Mock.user;
        Mock.offlineData.realizationDate = '12-04-2017';
    }
});
