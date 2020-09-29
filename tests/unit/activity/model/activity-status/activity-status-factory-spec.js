describe('ActivityStatusFactory', function() {

    var factory;
    var userFactory;
    var Mock = {};
    var Injections = [];

    beforeEach(function() {
        angular.mock.module('otusjs');

        inject(function($injector) {
            Injections.ACTIVITY_CONSTANTS = $injector.get('ACTIVITY_CONSTANTS');
            factory = $injector.get('otusjs.model.activity.ActivityStatusFactory', Injections);
            userFactory = $injector.get('otusjs.model.activity.ActivityUserFactory');
        });

        Mock.STATUS = Injections.ACTIVITY_CONSTANTS.STATUS;
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
            expect(status.name).toEqual(Mock.STATUS.CREATED);
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
            expect(status.name).toEqual(Mock.STATUS.INITIALIZED_OFFLINE);
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
            expect(status.name).toEqual(Mock.STATUS.INITIALIZED_ONLINE);
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
            expect(status.name).toEqual(Mock.STATUS.OPENED);
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
            expect(status.name).toEqual(Mock.STATUS.SAVED);
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
            expect(status.name).toEqual(Mock.STATUS.FINALIZED);
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
      status.date = Mock.date;
      expect(status.name).toEqual(Mock.STATUS.INITIALIZED_OFFLINE);
      expect(status.user.name).toEqual(Mock.user.name);
      expect(status.user.email).toEqual(Mock.user.email);
      expect(status.date).toEqual(Mock.date);
      status.setUser(Mock.userNew);
      status.setDate(Mock.dateNew);
      expect(status.user.name).toEqual(Mock.userNew.name);
      expect(status.user.email).toEqual(Mock.userNew.email);
      expect(status.date).toEqual(Mock.dateNew);
    });

    it('should update user in activity status', function () {
      status = factory.createInitializedOnlineStatus(Mock.user);
      expect(status.name).not.toEqual(Mock.STATUS.INITIALIZED_OFFLINE);
      expect(status.user.name).toEqual(Mock.user.name);
      expect(status.user.email).toEqual(Mock.user.email);
      status.setUser(Mock.userNew);
      expect(status.user.name).toEqual(Mock.user.name);
      expect(status.user.email).toEqual(Mock.user.email);
    });

  });

    function mockUser() {
        Mock.user = userFactory.create('User Name', 'user@email.com');
        Mock.date = "2017-04-12T02:57:33.873Z";
        Mock.userNew = userFactory.create('New User', 'newuser@email.com');
        Mock.dateNew = "2018-04-12T02:57:33.873Z";
    }

    function mockOfflineData() {
        Mock.offlineData = {};
        Mock.offlineData.checker = Mock.user;
        Mock.offlineData.realizationDate = '12-04-2017';
    }
});
