(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('MetadataFillFactory', MetadataFillFactory);

    function MetadataFillFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MetadataFill(value);
        }

        return self;
    }

    function MetadataFill(value) {
        var self = this;

        self.objectType = 'MetadataFill';
        self.value = (value === undefined) ? null : value;

        /* Public methods */
        self.isFilled = isFilled;
        self.toJson = toJson;

        function isFilled() {
            return (self.value) ? true : false;
        }

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.value = self.value;

            return JSON.stringify(json);
        }
    }

}());
