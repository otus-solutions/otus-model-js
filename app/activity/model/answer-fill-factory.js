(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('AnswerFillFactory', AnswerFillFactory);

    function AnswerFillFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new AnswerFill(value);
        }

        return self;
    }

    function AnswerFill(value) {
        var self = this;

        self.objectType = 'AnswerFill';
        self.value = (value === undefined) ? null : value;

        /* Public methods */
        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.value = self.value;

            return JSON.stringify(json);
        }
    }

}());
