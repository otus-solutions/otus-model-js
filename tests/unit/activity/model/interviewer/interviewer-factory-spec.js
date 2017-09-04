describe('InterviewerFactory', function() {

    var factory;
    var interviewer;
    var Mock = {};
    var INTERVIEWER = 'Interviewer';

    beforeEach(function() {
        angular.mock.module('otusjs');
        mockUser();

        inject(function(_$injector_) {
            factory = _$injector_.get('otusjs.model.activity.InterviewerFactory');
        });

        interviewer = factory.create(Mock.user);
    });

    describe('create method', function() {

        it('should return an object of type Interviewer', function() {
            expect(interviewer.objectType).toEqual(INTERVIEWER);
        });

        it('should return an object with attribute name equal to parameter', function() {
            expect(interviewer.name).toEqual(Mock.user.name);
        });

        it('should return an object with attribute email equal to parameter', function() {
            expect(interviewer.email).toEqual(Mock.user.email);
        });

    });

    function mockUser() {
        Mock.user = {
            name: 'Test',
            email: 'test@test.com'
        };
    }

});
