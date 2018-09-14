describe('InterviewerFactory', function() {

    var INTERVIEWER = 'Interviewer';
    var Mock = {};
    var factory;
    var interviewer;

    beforeEach(function() {
        angular.mock.module('otusjs');

        mockUser();
        mockJson();

        inject(function(_$injector_) {
            factory = _$injector_.get('otusjs.model.activity.InterviewerFactory');
        });

        interviewer = factory.create(Mock.user);
    });

    describe('toJSON method', function() {

        it('should return a well formatted json based on instance of Interview', function() {
            expect(interviewer.toJSON()).toEqual(Mock.json);
        });

    });

    function mockUser() {
        Mock.user = {
            name: 'Tex',
            email: 'tex@tex.com'
        };
    }

    function mockJson() {
        Mock.json = {
            objectType: 'Interviewer',
            name: 'Tex',
            email: 'tex@tex.com',
            surname: undefined
        };
    }

});
