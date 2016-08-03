describe('ValidatorIDService', function() {
    var Mock = {};

    var QUESTION_TYPE = 'IntegerQuestion';
    var Q1 = 'Q1';

    beforeEach(function() {
        module('utils');
    });

    inject(function(_$injector_) {
        mockQuestion(_$injector_);

        service = _$injector_.get('ValidatorIDService', {
            SurveyItemFactory: mockSurveyItemFactory(_$injector_)
        });
    });

    describe('validator id', function() {

        it('is available', function() {

        });
    });

    function mockSurveyItemFactory($injector) {
        return $injector.get('SurveyItemFactory');
    }

    function mockQuestion($injector) {
        Mock.item = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, Q1);
    }
});
