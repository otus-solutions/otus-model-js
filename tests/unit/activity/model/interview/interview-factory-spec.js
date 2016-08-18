describe('InterviewFactory', function() {

    var INTERVIEW = 'Interview';
    var INTERVIEWER = 'Interviewer';
    var factory;
    var interview;
    var Mock = {};

    beforeEach(function() {
        module('otusjs');

        mockUser();

        inject(function(_$injector_) {
            factory = _$injector_.get('InterviewFactory', {
                InterviewerFactory: mockInterviewerFactory(_$injector_)
            });
        });

        interview = factory.create(Mock.user);
    });

    describe('create method', function() {

        it('should return an object of type Interview', function() {
            expect(interview.objectType).toEqual(INTERVIEW);
        });

        it('should return an object with date defined', function() {
            expect(interview.date).toBeDefined();
        });

        it('should call InterviewerFactory.create with user data', function() {
            expect(Mock.InterviewerFactory.create).toHaveBeenCalledWith(Mock.user);
        });

        it('should return an object with interviewer property of type Interviewer', function() {
            expect(interview.interviewer.objectType).toEqual(INTERVIEWER);
        });

    });

    function mockUser() {
        Mock.user = {
            name: 'Tex',
            email: 'tex@tex.com'
        };
    }

    function mockInterviewerFactory($injector) {
        Mock.InterviewerFactory = $injector.get('InterviewerFactory');

        spyOn(Mock.InterviewerFactory, 'create').and.callThrough();

        return Mock.InterviewerFactory;
    }

});