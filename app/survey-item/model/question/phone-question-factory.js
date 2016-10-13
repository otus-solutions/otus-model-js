(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('PhoneQuestionFactory', PhoneQuestionFactory);

    PhoneQuestionFactory.$inject = [
        'IdiomFactory',
        'MetadataGroupFactory',
        'FillingRulesOptionFactory'
    ];

    function PhoneQuestionFactory(IdiomFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new PhoneQuestion(templateID, prototype, IdiomFactory, MetadataGroupFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function PhoneQuestion(templateID, prototype, IdiomFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'PhoneQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: IdiomFactory.create(),
            enUS: IdiomFactory.create(),
            esES: IdiomFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory'
            ];

            return validatorsList;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.unit = self.unit;
            json.fillingRules = self.fillingRules;


            return JSON.stringify(json);
        }
    }

}());
