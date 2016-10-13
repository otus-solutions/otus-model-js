describe('TextQuestion', function() {
    var Mock = {};

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockQuestion(_$injector_);
            mockJson(_$injector_);

            factory = _$injector_.get('SurveyItemFactory');
        });
    });

    describe('toJson method', function() {

        it('should return a well formatted json based on TextQuestion', function() {
            var question = factory.create('TextQuestion', Mock.TEMPLATE_ID);

            expect(question.toJson()).toEqual(Mock.json);
        });

    });

    function mockQuestion($injector) {
        Mock.TEMPLATE_ID = 'TPL_ID';
        Mock.Question = $injector.get('SurveyItemFactory').create('TextQuestion', Mock.TEMPLATE_ID);
    }

    function mockJson($injector) {
        Mock.json = JSON.stringify({
            extents: 'SurveyItem',
            objectType: 'TextQuestion',
            templateID: Mock.TEMPLATE_ID,
            customID: Mock.TEMPLATE_ID,
            dataType: 'String',
            label: {
                ptBR: $injector.get('IdiomFactory').create(),
                enUS: $injector.get('IdiomFactory').create(),
                esES: $injector.get('IdiomFactory').create()
            },
            metadata: $injector.get('MetadataGroupFactory').create(),
            fillingRules: $injector.get('FillingRulesOptionFactory').create()
        });
    }

});
