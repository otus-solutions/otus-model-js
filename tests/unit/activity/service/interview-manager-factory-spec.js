describe('StatusHistoryManagerFactory', function () {

  var Mock = {};
  var factory, service;
  var baseDate = Date.now();

  beforeEach(function () {
    angular.mock.module('otusjs');

    inject(function (_$injector_) {
      mockUser(_$injector_);

      factory = _$injector_.get('otusjs.model.activity.InterviewManagerFactory', {
        InterviewFactory: mockInterviewFactory(_$injector_)
      });
      service = factory;
    });
  });

  describe('newCreatedRegistry method', function () {
    beforeEach(function () {
      mockOfflineData();
      factory = factory.create();
      factory.init();
    });

    it('update user in inicialize offline registry should reset history', function () {
      expect(factory.historySize()).toBe(0);
      factory.newCreatedRegistry(Mock.user);
      factory.newInitializedOfflineRegistry(Mock.offlineData);
      expect(factory.historySize()).toBe(2);
      factory.getInitializedOfflineRegistry().setUser(Mock.userNew)
      expect(factory.historySize()).toBe(2);
    });

    it('newCreatedRegistryMethod should add a new ActivityStatus in the list', function () {
      factory.newCreatedRegistry(Mock.user);
      expect(factory.historySize()).toBe(1);
    });

    it('newCreatedRegistryMethod should call ActivityStatusFactory.createCreatedStatus', function () {
      factory.newCreatedRegistry(Mock.user);
      expect(Mock.ActivityStatusFactory.createCreatedStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  describe('StatusHistoryManager method', function () {
    beforeEach(function () {
      mockOfflineData();
      service = service.create();
      service.init();
    });

    it('historySizeMethod should return the number of history occurrences', function () {
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);

      expect(service.historySize()).toBe(3);
    });

    it('getHistoryMethod should return history list', function () {
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);

      expect(service.getHistory()).toEqual(jasmine.any(Array));
    });

    it('newInitializedOfflineRegistryMethod should add a new ActivityStatus in the list', function () {
      service.newInitializedOfflineRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('newInitializedOfflineRegistryMethod should call ActivityStatusFactory.createInitializedOfflineStatus', function () {
      service.newInitializedOfflineRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createInitializedOfflineStatus).toHaveBeenCalledWith(Mock.user);
    });

    it('newInitializedOnlineRegistryMethod should add a new ActivityStatus in the list', function () {
      service.newInitializedOnlineRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('newInitializedOnlineRegistryMethod should call ActivityStatusFactory.createInitializedOnlineStatus', function () {
      service.newInitializedOnlineRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createInitializedOnlineStatus).toHaveBeenCalledWith(Mock.user);
    });

    it('newOpenedRegistryMethod should add a new ActivityStatus in the list', function () {
      service.newOpenedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('newOpenedRegistryMethod should call ActivityStatusFactory.createOpenedStatus', function () {
      service.newOpenedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createOpenedStatus).toHaveBeenCalledWith(Mock.user);
    });

    it('newSavedRegistryMethod should add a new ActivityStatus in the list', function () {
      service.newSavedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('newSavedRegistryMethod should call ActivityStatusFactory.createSavedStatus', function () {
      service.newSavedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createSavedStatus).toHaveBeenCalledWith(Mock.user);
    });

    it('newFinalizedRegistryMethod should add a new ActivityStatus in the list', function () {
      service.newFinalizedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('newFinalizedRegistryMethod should call ActivityStatusFactory.createFinalizedStatus', function () {
      service.newFinalizedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createFinalizedStatus).toHaveBeenCalledWith(Mock.user);
    });

    it('toJSONMethod should return a well formatted json based history list', function () {
      baseDate = new Date();
      jasmine.clock().mockDate(baseDate);

      mockJson();

      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);

      expect(JSON.stringify(service.toJSON())).toEqual(Mock.json);
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

  function mockInterviewFactory($injector) {
    Mock.ActivityStatusFactory = $injector.get('otusjs.model.activity.InterviewFactory');

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
