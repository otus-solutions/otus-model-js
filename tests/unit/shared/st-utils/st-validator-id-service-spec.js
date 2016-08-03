describe('ValidatorIDService', function() {
    var Mock = {};

    beforeEach(function() {
        module('utils');
    });

    inject(function(_$injector_) {
        mockSurvey(_$injector_);

        service = _$injector_.get('ValidatorIDService', {
            SurveyItemFactory: mockSurveyItemFactory(_$injector_)
        });
    });

    describe('validator id', function() {

        it('is available', function() {

        });
    });

    function mockSurvey($injector) {
        Mock.survey = $injector.get('SurveyFactory').create(NAME, ACRONYM);
    }

    function mockSurveyItemFactory($injector) {
        return $injector.get('SurveyItemFactory');
    }

});
