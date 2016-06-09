(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('SurveyItemFactory', SurveyItemFactory);

    SurveyItemFactory.$inject = [
        /* Question items */
        'CalendarQuestionFactory',
        'IntegerQuestionFactory',
        'DecimalQuestionFactory',
        'SingleSelectionQuestionFactory',
        'CheckboxQuestionFactory',
        'TextQuestionFactory',
        'TimeQuestionFactory',
        'EmailQuestionFactory',
        'PhoneQuestionFactory',
        /* Miscelaneous items */
        'TextItemFactory',
        'ImageItemFactory'
    ];

    function SurveyItemFactory(
        CalendarQuestionFactory,
        IntegerQuestionFactory,
        DecimalQuestionFactory,
        SingleSelectionQuestionFactory,
        CheckboxQuestionFactory,
        TextQuestionFactory,
        TimeQuestionFactory,
        EmailQuestionFactory,
        PhoneQuestionFactory,
        TextItemFactory,
        ImageItemFactory) {

        var self = this;

        var factoryMap = {
            /* Question items */
            'CalendarQuestion': CalendarQuestionFactory,
            'IntegerQuestion': IntegerQuestionFactory,
            'DecimalQuestion': DecimalQuestionFactory,
            'SingleSelectionQuestion': SingleSelectionQuestionFactory,
            'CheckboxQuestion' : CheckboxQuestionFactory,
            'TextQuestion': TextQuestionFactory,
            'TimeQuestion': TimeQuestionFactory,
            'EmailQuestion': EmailQuestionFactory,
            'PhoneQuestion': PhoneQuestionFactory,
            /* Miscelaneous items */
            'TextItem': TextItemFactory,
            'ImageItem': ImageItemFactory
        };

        /* Public interface */
        self.create = create;

        function create(itemType, templateID) {
            var item = new SurveyItem(templateID);
            return factoryMap[itemType].create(templateID, item);
        }

        return self;
    }

    function SurveyItem(templateID, LabelFactory, MetadataGroupFactory) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'SurveyItem';
        self.templateID = templateID;
    }

}());
