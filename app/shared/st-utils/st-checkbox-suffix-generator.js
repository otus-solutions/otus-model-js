(function() {
    'use strict';

    angular
        .module('utils')
        .service('CheckboxSuffixIDGenerator', CheckboxSuffixIDGenerator);

    function CheckboxSuffixIDGenerator() {

        var _alphabet = 'abcdefghijklmnopqrstuvwxyz';
        var self = this;

        self.generateSuffixByOptionsLength = generateSuffixByOptionsLength;

        function generateSuffixByOptionsLength(quantity) {
            var sufix;
            if (quantity > _alphabet.length - 1) {
                var firstChar = quantity / _alphabet.length;
                var secondChar = quantity % _alphabet.length;
                sufix = _alphabet.charAt(firstChar - 1) + _alphabet.charAt(secondChar);
            } else {
                sufix = _alphabet.charAt(quantity);
            }
            return sufix;
        }
    }

}());
