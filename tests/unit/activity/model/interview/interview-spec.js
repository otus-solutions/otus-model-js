describe('InterviewFactory', function() {

  var INTERVIEW = 'Interview';
  var INTERVIEWER = 'Interviewer';
  var Mock = {};
  var factory;
  var interview;
  var baseDate;

  beforeEach(function() {
    angular.mock.module('otusjs');


    inject(function(_$injector_) {
      factory = _$injector_.get(
        'otusjs.model.activity.InterviewFactory', {
          InterviewerFactory: mockInterviewerFactory(_$injector_)
        });
    });

    mockUser();
    interview = factory.create(Mock.user);
  });

  describe('toJson method', function() {

    it(
      'should return a well formatted json based on instance of Interview',
      function() {
        baseDate = new Date();
        jasmine.clock().mockDate(baseDate);
        console.log(baseDate);
        mockJson();

        expect(interview.toJson()).toEqual(Mock.json);
      });

  });

  function mockJson() {
    Mock.json = JSON.stringify({
      objectType: 'Interview',
      date: new Date(),
      interviewer: Mock.InterviewerFactory.create(Mock.user)
    });
  }

  function mockUser() {
    Mock.user = {
      name: 'Tex',
      email: 'tex@tex.com'
    };
  }

  function mockInterviewerFactory($injector) {
    Mock.InterviewerFactory = $injector.get(
      'otusjs.model.activity.InterviewerFactory');

    spyOn(Mock.InterviewerFactory, 'create').and.callThrough();

    return Mock.InterviewerFactory;
  }

});
