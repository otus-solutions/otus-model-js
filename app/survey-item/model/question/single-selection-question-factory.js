(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('SingleSelectionQuestionFactory', SingleSelectionQuestionFactory);

    SingleSelectionQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
        'AnswerOptionFactory'
    ];

    function SingleSelectionQuestionFactory(LabelFactory, MetadataGroupFactory, AnswerOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new SingleSelectionQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, AnswerOptionFactory);
        }

        return self;
    }

    function SingleSelectionQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, AnswerOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'SingleSelectionQuestion';
        self.templateID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.option = [];

        /* Public methods */
        self.addOption = addOption;
        self.removeLastOption = removeLastOption;
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

        function addOption(option) {
            self.option.push(option);
        }

        function removeLastOption() {
            self.option.splice(-1);
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.option = self.option;
            json.metadata = self.metadata;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());
