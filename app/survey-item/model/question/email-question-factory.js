(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('EmailQuestionFactory', EmailQuestionFactory);

    EmailQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
        'ValidationOptionFactory'
    ];

    function EmailQuestionFactory(LabelFactory, MetadataGroupFactory, ValidationOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new EmailQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, ValidationOptionFactory);
        }

        return self;
    }

    function EmailQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, ValidationOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'EmailQuestion';
        self.templateID = templateID;
        self.dataType = 'String';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.validate = ValidationOptionFactory.create();

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
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.validate = self.validate;


            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());
