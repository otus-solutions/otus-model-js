xdescribe('StatusHistoryManagerService', function() {

  var Mock = {};
  var service;
  var baseDate;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockUser(_$injector_);

      service = _$injector_.get('otusjs.model.activity.StatusHistoryManagerService', {
        ActivityStatusFactory: mockActivityStatusFactory(_$injector_)
      });
    });
  });

  describe('init method', function() {

    it('should reset history', function() {
      service.newCreatedRegistry(Mock.user);

      service.init();

      expect(service.historySize()).toBe(0);
    });

  });

  describe('historySize method', function() {

    it('should return the number of history occurrences', function() {
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);

      expect(service.historySize()).toBe(3);
    });

  });

  describe('getHistory method', function() {

    it('should return history list', function() {
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);
      service.newCreatedRegistry(Mock.user);

      expect(service.getHistory()).toEqual(jasmine.any(Array));
    });

  });

  describe('newCreatedRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newCreatedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createCreatedStatus', function() {
      service.newCreatedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createCreatedStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  describe('newInitializedOfflineRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newInitializedOfflineRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createInitializedOfflineStatus', function() {
      service.newInitializedOfflineRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createInitializedOfflineStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  describe('newInitializedOnlineRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newInitializedOnlineRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createInitializedOnlineStatus', function() {
      service.newInitializedOnlineRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createInitializedOnlineStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  describe('newOpenedRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newOpenedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createOpenedStatus', function() {
      service.newOpenedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createOpenedStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  describe('newSavedRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newSavedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createSavedStatus', function() {
      service.newSavedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createSavedStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  describe('newFinalizedRegistry method', function() {

    it('should add a new ActivityStatus in the list', function() {
      service.newFinalizedRegistry(Mock.user);

      expect(service.historySize()).toBe(1);
    });

    it('should call ActivityStatusFactory.createFinalizedStatus', function() {
      service.newFinalizedRegistry(Mock.user);

      expect(Mock.ActivityStatusFactory.createFinalizedStatus).toHaveBeenCalledWith(Mock.user);
    });

  });

  describe('toJson method', function() {

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

});
