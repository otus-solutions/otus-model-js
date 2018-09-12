describe('TimeQuestion', function() {
    var Mock = {};
    var factory;

    beforeEach(function() {
        angular.mock.module('otusjs');

        inject(function(_$injector_) {
            mockQuestion(_$injector_);
            mockJson(_$injector_);

            factory = _$injector_.get('SurveyItemFactory');
        });
    });

    describe('toJson method', function() {

        it('should return a well formatted json based on TimeQuestion', function() {
            var question = factory.create('TimeQuestion', Mock.TEMPLATE_ID);

            expect(JSON.stringify(question)).toEqual(Mock.json);
        });

    });

    function mockQuestion($injector) {
        Mock.TEMPLATE_ID = 'TPL_ID';
        Mock.Question = $injector.get('SurveyItemFactory').create('TimeQuestion', Mock.TEMPLATE_ID);
    }

    function mockJson($injector) {
        Mock.json = JSON.stringify({
            extents: 'SurveyItem',
            objectType: 'TimeQuestion',
            templateID: Mock.TEMPLATE_ID,
            customID: Mock.TEMPLATE_ID,
            dataType: 'LocalTime',
            label: {
                ptBR: $injector.get('IdiomFactory').create(),
                enUS: $injector.get('IdiomFactory').create(),
                esES: $injector.get('IdiomFactory').create()
            },
            metadata: $injector.get('MetadataGroupFactory').create(),
            fillingRules: $injector.get('FillingRulesOptionFactory').create(),
            options: $injector.get('QuestionOptionFactory').create()
        });
    }

});
