(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('TextItemFactory', TextItemFactory);

    TextItemFactory.$inject = ['IdiomFactory'];

    function TextItemFactory(IdiomFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new TextItem(templateID, prototype, IdiomFactory);
        }

        return self;
    }

    function TextItem(templateID, prototype, IdiomFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'TextItem';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'String';
        self.value = {
            ptBR: IdiomFactory.create(),
            enUS: IdiomFactory.create(),
            esES: IdiomFactory.create()
        };

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return false;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.value = self.value;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());
