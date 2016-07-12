describe('ActivitySurveyFactory', function() {

    var activity;
    var ACTIVITY = 'Activity';
    var CATEGORY = 'category_test';
    var GROUP = 'group_test';
    var TEMPLATE_IOD = '123456';
    var Mock = {};

    beforeEach(function() {

        module('otusjs');

        inject(function(_$injector_) {
            mockUser(_$injector_);

            factory = _$injector_.get('ActivitySurveyFactory', {
                StatusHistoryManagerService: mockStatusHistoryManagerService(_$injector_),
                FillingManagerService: mockFillingManagerService(_$injector_)
            });

            activity = factory.create(CATEGORY, GROUP, TEMPLATE_IOD, Mock.user);
        });
    });

    describe('create method', function() {
        it('should return an object of type Activity', function() {
            expect(activity.objectType).toEqual(ACTIVITY);
        });

        it('should return attribute category equal to contructor paramenter', function() {
            expect(activity.category).toEqual(CATEGORY);
        });

        it('should return attribute group equal to contructor paramenter', function() {
            expect(activity.group).toEqual(GROUP);
        });

        it('should return attribute templateOID equal to contructor paramenter', function() {
            expect(activity.templateOID).toEqual(TEMPLATE_IOD);
        });

        it('should return attribute fillContainer equal of FillingManagerService', function() {
            expect(activity.fillContainer).toEqual(Mock.FillingManagerService);
        });

        it('should return attribute statusHistory equal of StatusHistoryManagerService', function() {
            expect(activity.statusHistory).toEqual(Mock.StatusHistoryManagerService);
        });

    });

    function mockUser() {
        Mock.user = {
            name: 'Test',
            email: 'test@test.com'
        };
    }

    function mockStatusHistoryManagerService($injector) {
        Mock.StatusHistoryManagerService = $injector.get('StatusHistoryManagerService');
        return Mock.StatusHistoryManagerService;
    }

    function mockFillingManagerService($injector) {
        Mock.FillingManagerService = $injector.get('FillingManagerService');
        return Mock.FillingManagerService;
    }
});
