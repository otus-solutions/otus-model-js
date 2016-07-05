(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('DecimalQuestionFactory', DecimalQuestionFactory);

    DecimalQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
        'UnitFactory',
        'ValidationOptionFactory'
    ];

    function DecimalQuestionFactory(LabelFactory, MetadataGroupFactory, UnitFactory, ValidationOptionFactory) {
        var self = this;
        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new DecimalQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory, ValidationOptionFactory);
        }

        return self;
    }

    function DecimalQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory, ValidationOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'DecimalQuestion';
        self.templateID = templateID;
        self.dataType = 'Decimal';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.validate = ValidationOptionFactory.create();
        self.unit = {
            ptBR: UnitFactory.create(),
            enUS: UnitFactory.create(),
            esES: UnitFactory.create()
        };

        /* Public methods */
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory',
                'distinct',
                'lowerLimit',
                'upperLimit',
                'in',
                'scale'
            ];

            return validatorsList;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.unit = self.unit;
            json.validate = self.validate;


            return JSON.stringify(json);
        }
    }
}());
