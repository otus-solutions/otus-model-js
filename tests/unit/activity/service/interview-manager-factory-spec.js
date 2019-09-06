describe('InterviewManagerFactory', function () {

  var Mock = {};
  var factory, service, instanceOfManager;

  beforeEach(function () {
    angular.mock.module('otusjs');

    inject(function (_$injector_) {
      mockUser(_$injector_);
      factory = _$injector_.get('otusjs.model.activity.InterviewManagerFactory', {
        InterviewFactory: mockInterviewFactory(_$injector_)
      });
      service = factory;

      spyOn(Mock.InterviewFactory, 'create').and.callThrough();
    });
  });

  describe('basic scenarios', function () {
    beforeEach(function () {
      instanceOfManager = factory.create();
    });

    it('factory should to be defined', function () {
      expect(factory).toBeDefined();
    });

    it('should all methods to be defined', function () {
      expect(instanceOfManager.init).toBeDefined();
      expect(instanceOfManager.newRegistry).toBeDefined();
      expect(instanceOfManager.getInterviews).toBeDefined();
      expect(instanceOfManager.getLastStatus).toBeDefined();
      expect(instanceOfManager.getInterviewSizeOfList).toBeDefined();
      expect(instanceOfManager.toJSON).toBeDefined();
    });
  });

  describe('init method', function () {
    it('when method is call with current ', function () {

    });
  });

  describe('newRegistry method', function () {
    beforeEach(function () {
      instanceOfManager = factory.create();
      instanceOfManager.newRegistry(Mock.user);
    });

    it('when method is call then should add new register', function () {
      expect(instanceOfManager.getInterviewSizeOfList()).toBe(1);
    });

    it('should call create method with parameter expected', function () {
      expect(Mock.InterviewFactory.create).toHaveBeenCalledWith(Mock.user);
    });
  });

  describe('getInterviews method', function () {
    beforeEach(function () {
      instanceOfManager = factory.create();
      instanceOfManager.newRegistry(Mock.user);
    });

    it('should return list', function () {
      expect(instanceOfManager.getInterviews()).toEqual(jasmine.any(Array));
    });
  });

  describe('getLastStatus method', function () {
    beforeEach(function () {
      instanceOfManager = factory.create();
      instanceOfManager.newRegistry(Mock.user);
    });

    it('should return last element in list', function () {
      var result = instanceOfManager.getLastStatus();

      expect(result.interviewer.email).toEqual('user@email.com');
    });
  });

  describe('getInterviewSizeOfList method', function () {
    beforeEach(function () {
      instanceOfManager = factory.create();
      instanceOfManager.newRegistry(Mock.user);
    });

    it('should return size of list', function () {
      expect(instanceOfManager.getInterviewSizeOfList()).toBe(1);
    });
  });

  describe('toJSON method', function () {
    beforeEach(function () {
      instanceOfManager = factory.create();
      instanceOfManager.newRegistry(Mock.user);
    });

    it('should method when called expected ', function () {
      var jsonExpected = JSON.stringify([Mock.InterviewFactory.create(Mock.user).toJSON()]);


      expect(JSON.stringify(instanceOfManager.toJSON())).toEqual(jsonExpected);
    });

  });

  function mockInterviewFactory($injector) {
    Mock.InterviewFactory = $injector.get('otusjs.model.activity.InterviewFactory');
    Mock.InstanceOfInterview = Mock.InterviewFactory.create(Mock.user);

    spyOn(Mock.InstanceOfInterview, 'toJSON').and.callThrough();

    return Mock.InterviewFactory;
  }

  function mockUser($injector) {
    Mock.user = $injector.get('otusjs.model.activity.ActivityUserFactory').create('User Name', 'user@email.com');
  }

});
