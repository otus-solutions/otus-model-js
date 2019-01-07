describe('StatusHistoryManagerFactory' , function() {

  var Mock = {};
  var factory;
  var baseDate;

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      mockUser(_$injector_);

      factory = _$injector_.get('otusjs.model.activity.StatusHistoryManagerFactory', {
        ActivityStatusFactory: mockActivityStatusFactory(_$injector_)
      });
    });
  });

  describe('update user in inicialize offline registry', function() {
    beforeEach(function () {
      mockOfflineData();
      factory = factory.create();
      factory.init();
    });

    it('should reset history', function() {
      expect(factory.historySize()).toBe(0);
      factory.newCreatedRegistry(Mock.user);
      factory.newInitializedOfflineRegistry(Mock.offlineData);
      expect(factory.historySize()).toBe(2);
      console.log(factory.getInitializedOfflineRegistry())
      factory.getInitializedOfflineRegistry().setUser(Mock.userNew)
      console.log(factory.getInitializedOfflineRegistry())
      expect(factory.historySize()).toBe(2);
    });

  });

  xdescribe('historySize method', function() {

    it('should return the number of history occurrences', function() {
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);

      expect(service.historySize()).toBe(3);
    });

  });

  xdescribe('getHistory method', function() {

    it('should return history list', function() {
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);

      expect(service.getHistory()).toEqual(jasmine.any(Array));
    });

  });

  describe('newCreatedRegistry method', function() {
    beforeEach(function () {
      mockOfflineData();
      factory = factory.create();
      factory.init();
    });

    it('should add a new ActivityStatus in the list', function() {
      factory.newCreatedRegistry(Mock.user);
      expect(factory.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createCreatedStatus', function() {
      factory.newCreatedRegistry(Mock.user);
      expect(Mock.ActivityStatusFactory.createCreatedStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  xdescribe('newInitializedOfflineRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newInitializedOfflineRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createInitializedOfflineStatus', function() {
      service.newInitializedOfflineRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createInitializedOfflineStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  xdescribe('newInitializedOnlineRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newInitializedOnlineRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createInitializedOnlineStatus', function() {
      service.newInitializedOnlineRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createInitializedOnlineStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  xdescribe('newOpenedRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newOpenedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createOpenedStatus', function() {
      service.newOpenedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createOpenedStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  xdescribe('newSavedRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newSavedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createSavedStatus', function() {
      service.newSavedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createSavedStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  xdescribe('newFinalizedRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newFinalizedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createFinalizedStatus', function() {
      service.newFinalizedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createFinalizedStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  xdescribe('toJson method', function() {

    xit('should return a well formatted json based history list', function() {
      baseDate = Date.now();
      jasmine.clock().mockDate(baseDate);

      mockJson();

      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);

      expect(service.toJson()).toEqual(Mock.json);
    });

  });

  function mockJson() {
    Mock.json = JSON.stringify([{
      objectType: 'ActivityStatus',
      name: 'CREATED',
      date: baseDate,
      user: Mock.user
    }, {
      objectType: 'ActivityStatus',
      name: 'CREATED',
      date: baseDate,
      user: Mock.user
    }]);
  }

  function mockUser($injector) {
    Mock.user = $injector.get('otusjs.model.activity.ActivityUserFactory').create('User Name', 'user@email.com');
    Mock.userNew = $injector.get('otusjs.model.activity.ActivityUserFactory').create('Otus', 'otus@email.com');
  }

  function mockActivityStatusFactory($injector) {
    Mock.ActivityStatusFactory = $injector.get('otusjs.model.activity.ActivityStatusFactory');

    spyOn(Mock.ActivityStatusFactory, 'createCreatedStatus').and.callThrough();
    spyOn(Mock.ActivityStatusFactory, 'createInitializedOfflineStatus').and.callThrough();
    spyOn(Mock.ActivityStatusFactory, 'createInitializedOnlineStatus').and.callThrough();
    spyOn(Mock.ActivityStatusFactory, 'createOpenedStatus').and.callThrough();
    spyOn(Mock.ActivityStatusFactory, 'createSavedStatus').and.callThrough();
    spyOn(Mock.ActivityStatusFactory, 'createFinalizedStatus').and.callThrough();

    return Mock.ActivityStatusFactory;
  }

  function mockOfflineData() {
    Mock.offlineData = {};
    Mock.offlineData.checker = Mock.user;
    Mock.offlineData.realizationDate = '12-04-2017';
  }

});
