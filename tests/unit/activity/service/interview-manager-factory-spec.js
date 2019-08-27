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

  });

  describe('newRegistry method', function () {

    beforeEach(function () {
      instanceOfManager = factory.create();
    });

    it('', function () {
      instanceOfManager.newRegistry(Mock.user);

      expect(instanceOfManager.getInterviewSizeOfList()).toBe(1);
    })
  });

  describe('getInterviews method', function () {

  });

  describe('getLastStatus method', function () {

  });

  describe('getInterviewSizeOfList method', function () {

  });

  describe('toJSON method', function () {

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
