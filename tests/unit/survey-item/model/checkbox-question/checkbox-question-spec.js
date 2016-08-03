describe('CheckboxQuestion', function() {
    var Mock = {};
    var question;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockQuestion(_$injector_);
            mockJson(_$injector_);

            var factory = _$injector_.get('CheckboxQuestionFactory', {
                LabelFactory: mockLabelFactory(_$injector_),
                MetadataGroupFactory: mockMetadataGroupFactory(_$injector_),
                CheckboxAnswerOptionFactory: mockCheckboxAnswerOptionFactory(_$injector_)
            });
            question = factory.create(Mock.TEMPLATE_ID, Mock.Question);
        });
    });

    describe('getOptionListSize method', function() {

        it('should return the size of option list', function() {
            question.createOption();
            expect(question.getOptionListSize()).toBe(1);

            question.createOption();
            expect(question.getOptionListSize()).toBe(2);

            question.createOption();
            expect(question.getOptionListSize()).toBe(3);

            question.removeOption(2);
            expect(question.getOptionListSize()).toBe(2);
        });

    });

    describe('createOption method', function() {

        beforeEach(function() {
            question.createOption();
        });

        it('should call CheckboxAnswerOptionFactory.create', function() {
            expect(Mock.CheckboxAnswerOptionFactory.create).toHaveBeenCalled();
        });

        it('should add a new metadata answer option in group', function() {
            expect(question.getOptionListSize()).toBe(1);
        });

        it('should create a new option with optionID TPL_IDa', function() {
          expect(question.getOptionByOptionID('TPL_IDa').optionID).toBe('TPL_IDa');
        });

        it('should create a new option with optionID TPL_IDb', function() {
          question.createOption();
          expect(question.getOptionByOptionID('TPL_IDb').optionID).toBe('TPL_IDb');
        });

    });

    describe('getOptionByOptionID method', function() {
        var createdOption;
        beforeEach(function() {
            createdOption = question.createOption();
        });

        it('should get a object option by id - TPL_IDa', function() {
          expect(question.getOptionByOptionID('TPL_IDa')).toBe(createdOption);
        });

        it('should return null if id is not found', function() {
          expect(question.getOptionByOptionID('ID_NOT_FOUND')).toBe(null);
        });

    });

    describe('removeOption method', function() {

        beforeEach(function() {
            question.createOption();
            question.createOption();
            question.createOption();
            question.createOption();
        });

        it('should reomve an option by value from option list', function() {
            question.removeOption(3);

            expect(question.getOptionListSize()).toBe(3);
        });

        it('should reorder the option values', function() {
            question.removeOption(2);

            expect(question.getOptionByValue(1).value).toBe(1);
            expect(question.getOptionByValue(2).value).toBe(2);
            expect(question.getOptionByValue(3).value).toBe(3);
        });

    });

    describe('removeLastOption method', function() {

        beforeEach(function() {
            question.createOption();
            question.createOption();
            question.createOption();
            question.createOption();
        });

        it('should reomve the last option from option list', function() {
            question.removeLastOption();

            expect(question.getOptionListSize()).toBe(3);

        });

    });

    describe('toJson method', function() {

        it('should return a well formatted json based on CheckboxQuestion', function() {
            expect(question.toJson()).toEqual(Mock.json);
        });

    });

    function mockLabelFactory($injector) {
        Mock.LabelFactory = $injector.get('LabelFactory');

        spyOn(Mock.LabelFactory, 'create').and.callThrough();

        return Mock.LabelFactory;
    }

    function mockMetadataGroupFactory($injector) {
        Mock.MetadataGroupFactory = $injector.get('MetadataGroupFactory');

        spyOn(Mock.MetadataGroupFactory, 'create').and.callThrough();

        return Mock.MetadataGroupFactory;
    }

    function mockCheckboxAnswerOptionFactory($injector) {
        Mock.CheckboxAnswerOptionFactory = $injector.get('CheckboxAnswerOptionFactory');

        spyOn(Mock.CheckboxAnswerOptionFactory, 'create').and.callThrough();

        return Mock.CheckboxAnswerOptionFactory;
    }

    function mockQuestion($injector) {
        Mock.TEMPLATE_ID = 'TPL_ID';
        Mock.Question = $injector.get('SurveyItemFactory').create('CheckboxQuestion', Mock.TEMPLATE_ID);
    }

    function mockJson($injector) {
        Mock.json = JSON.stringify({
            extents: 'CheckboxQuestion',
            objectType: 'CheckboxQuestion',
            templateID: Mock.TEMPLATE_ID,
            customID: Mock.TEMPLATE_ID,
            dataType: 'Group',
            label: {
                ptBR: $injector.get('LabelFactory').create(),
                enUS: $injector.get('LabelFactory').create(),
                esES: $injector.get('LabelFactory').create()
            },
            options: [],
            metadata: $injector.get('MetadataGroupFactory').create()
        });
    }

});
