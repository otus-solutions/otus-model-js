describe('IntegerQuestion', function() {
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

        it('should return a well formatted json based on IntegerQuestion', function() {
            var question = factory.create('IntegerQuestion', Mock.TEMPLATE_ID);

            expect(JSON.stringify(question)).toEqual(Mock.json);
        });

    });

    function mockQuestion($injector) {
        Mock.TEMPLATE_ID = 'TPL_ID';
        Mock.Question = $injector.get('SurveyItemFactory').create('IntegerQuestion', Mock.TEMPLATE_ID);
    }

    function mockJson($injector) {
        Mock.json = JSON.stringify({
            extents: 'SurveyItem',
            objectType: 'IntegerQuestion',
            templateID: Mock.TEMPLATE_ID,
            customID: Mock.TEMPLATE_ID,
            dataType: 'Integer',
            label: {
                ptBR: $injector.get('IdiomFactory').create(),
                enUS: $injector.get('IdiomFactory').create(),
                esES: $injector.get('IdiomFactory').create()
            },
            metadata: $injector.get('MetadataGroupFactory').create(),
            unit: {
                ptBR: $injector.get('UnitFactory').create(),
                enUS: $injector.get('UnitFactory').create(),
                esES: $injector.get('UnitFactory').create()
            },
            fillingRules: $injector.get('FillingRulesOptionFactory').create()
        });
    }

});
