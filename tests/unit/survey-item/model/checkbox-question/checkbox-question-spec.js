describe('CheckboxQuestion', function() {
    var Mock = {};
    var question;

    beforeEach(function() {
        angular.mock.module('otusjs');

        inject(function(_$injector_) {
            mockQuestion(_$injector_);
            mockJson(_$injector_);

            var factory = _$injector_.get('CheckboxQuestionFactory', {
                IdiomFactory: mockIdiomFactory(_$injector_),
                MetadataGroupFactory: mockMetadataGroupFactory(_$injector_),
                CheckboxAnswerOptionFactory: mockCheckboxAnswerOptionFactory(_$injector_)
            });
            question = factory.create(Mock.TEMPLATE_ID, Mock.Question);
        });
    });

    describe('getOptionList method', function() {

        it('should return the option list', function() {
            var optionList = [];
            optionList.push(question.createOption('TPL_IDa'));
            optionList.push(question.createOption('TPL_IDb'));
            optionList.push(question.createOption('TPL_IDc'));
            optionList.push(question.createOption('TPL_IDd'));
            expect(question.getOptionList()).toEqual(optionList);
        });

    });

    describe('getOptionListSize method', function() {

        it('should return the size of option list', function() {
            question.createOption('TPL_IDa');
            expect(question.getOptionListSize()).toBe(1);

            question.createOption('TPL_IDb');
            expect(question.getOptionListSize()).toBe(2);

            question.createOption('TPL_IDc');
            expect(question.getOptionListSize()).toBe(3);

            question.removeOption(2);
            expect(question.getOptionListSize()).toBe(2);
        });

    });

    describe('createOption method', function() {

        beforeEach(function() {
            question.createOption('TPL_IDa');
        });

        it('should call CheckboxAnswerOptionFactory.create', function() {
            expect(Mock.CheckboxAnswerOptionFactory.create).toHaveBeenCalled();
        });

        it('should add a new option in group', function() {
            expect(question.getOptionListSize()).toBe(1);
        });

        it('should create a new option with optionID TPL_IDa', function() {
          expect(question.getOptionByOptionID('TPL_IDa').optionID).toBe('TPL_IDa');
        });

        it('should create a new option with customOptionID TPL_IDa', function() {
          expect(question.getOptionByOptionID('TPL_IDa').customOptionID).toBe('TPL_IDa');
        });

    });

    describe('loadJsonOption method', function() {

        beforeEach(function() {
            var option = Mock.CheckboxAnswerOptionFactory.create('TPL_IDa');
            var optionJSON = option.toJson();
            question.loadJsonOption(optionJSON);

        });

        it('should call CheckboxAnswerOptionFactory.createWithData', function() {
            expect(Mock.CheckboxAnswerOptionFactory.createWithData).toHaveBeenCalled();
        });

        it('should add a new option in group', function() {
            expect(question.getOptionListSize()).toBe(1);
        });

        it('should create a new option with optionID TPL_IDa', function() {
          expect(question.getOptionByOptionID('TPL_IDa').optionID).toBe('TPL_IDa');
        });

        it('should create a new option with customOptionID TPL_IDa', function() {
          expect(question.getOptionByOptionID('TPL_IDa').customOptionID).toBe('TPL_IDa');
        });

    });

    describe('getOptionByOptionID method', function() {

        var createdOption;

        beforeEach(function() {
            createdOption = question.createOption('TPL_IDa');
        });

        it('should get a object option by id - TPL_IDa', function() {
          expect(question.getOptionByOptionID('TPL_IDa')).toBe(createdOption);
        });

        it('should return null if id is not found', function() {
          expect(question.getOptionByOptionID('ID_NOT_FOUND')).toBe(null);
        });

    });

    describe('getOptionByCustomOptionID method', function() {

        var createdOption;

        beforeEach(function() {
            createdOption = question.createOption('TPL_IDa');
        });

        it('should get a object option by id - TPL_IDa', function() {
          expect(question.getOptionByCustomOptionID('TPL_IDa')).toBe(createdOption);
        });

        it('should return null if id is not found', function() {
          expect(question.getOptionByCustomOptionID('ID_NOT_FOUND')).toBe(null);
        });

    });

    describe('removeOption method', function() {

        beforeEach(function() {
            question.createOption('TPL_IDa');
            question.createOption('TPL_IDb');
            question.createOption('TPL_IDc');
            question.createOption('TPL_IDd');
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
            question.createOption('TPL_IDa');
            question.createOption('TPL_IDb');
            question.createOption('TPL_IDc');
            question.createOption('TPL_IDd');
        });

        it('should reomve the last option from option list', function() {
            question.removeLastOption();

            expect(question.getOptionListSize()).toBe(3);

        });

    });

    describe('getAllCustomOptionID', function() {

        beforeEach(function() {
            question.createOption('TPL_IDa');
        });

        it('should return all customOptionID with one option', function() {
            expect(question.getAllCustomOptionsID()).toContain('TPL_IDa');
        });

        it('should return all customOptionID with two options', function() {
            question.createOption('TPL_IDb');
            expect(question.getAllCustomOptionsID()).toEqual(['TPL_IDa', 'TPL_IDb']);
        });

    });

    describe('toJson method', function() {

        it('should return a well formatted json based on CheckboxQuestion', function() {
            expect(question.toJson()).toEqual(Mock.json);
        });

    });

    function mockIdiomFactory($injector) {
        Mock.IdiomFactory = $injector.get('IdiomFactory');

        spyOn(Mock.IdiomFactory, 'create').and.callThrough();

        return Mock.IdiomFactory;
    }

    function mockMetadataGroupFactory($injector) {
        Mock.MetadataGroupFactory = $injector.get('MetadataGroupFactory');

        spyOn(Mock.MetadataGroupFactory, 'create').and.callThrough();

        return Mock.MetadataGroupFactory;
    }

    function mockCheckboxAnswerOptionFactory($injector) {
        Mock.CheckboxAnswerOptionFactory = $injector.get('CheckboxAnswerOptionFactory');

        spyOn(Mock.CheckboxAnswerOptionFactory, 'create').and.callThrough();
        spyOn(Mock.CheckboxAnswerOptionFactory, 'createWithData').and.callThrough();

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
            dataType: 'Array',
            label: {
                ptBR: $injector.get('IdiomFactory').create(),
                enUS: $injector.get('IdiomFactory').create(),
                esES: $injector.get('IdiomFactory').create()
            },
            options: [],
            metadata: $injector.get('MetadataGroupFactory').create(),
            fillingRules: $injector.get('FillingRulesOptionFactory').create()
        });
    }

});
