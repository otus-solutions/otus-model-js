(function() {
    'use strict';

    angular.module('utils', []);

}());

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

(function() {
    'use strict';

    angular
        .module('utils')
        .service('StringNormalizer', StringNormalizer);

    function StringNormalizer() {
        var self = this;

        self.normalizeString = normalizeString;

        function normalizeString(directiveName) {
            var tokenSeparator = (directiveName.indexOf('-') != -1) ? '-' : '.';

            var directiveParts = directiveName.split(tokenSeparator),
                loopSize = directiveParts.length,
                normalizedString = directiveParts[0].toLowerCase();

            for (var i = 1; i < loopSize; i++) {
                var firstLetter = directiveParts[i].slice(0, 1),
                    restOfString = directiveParts[i].slice(1);
                normalizedString = normalizedString.concat(firstLetter.toUpperCase().concat(restOfString.toLowerCase()));
            }
            return normalizedString;
        }
    }

}());

 (function() {
     'use strict';

     angular
         .module('utils')
         .service('SurveyUUIDGenerator', SurveyUUIDGenerator);

     SurveyUUIDGenerator.$inject = ['$window', 'UUIDService'];

     function SurveyUUIDGenerator($window, UUIDService) {
         var self = this;

         self.generateSurveyUUID = generateSurveyUUID;

         function generateSurveyUUID() {
             var userUUID = "userUUID:[" + $window.sessionStorage.userUUID + "]";
             var surveyUUID = "surveyUUID:[" + UUIDService.generateUUID() + "]";
             var repositoryUUID = "repositoryUUID:[ Not done yet ]";
             return Base64.encode(userUUID + surveyUUID + repositoryUUID);
         }
     }

 }());

(function() {
    'use strict';

    angular
        .module('utils')
        .service('UUIDService', UUIDService);

    function UUIDService() {
        var self = this;

        self.generateUUID = generateUUID;

        /**
         * node-uuid package
         * Generate a v1 (time-based) id
         */
        function generateUUID() {
            return uuid.v1();
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('utils')
        .service('ValidatorIDService', ValidatorIDService);

    function ValidatorIDService() {
        var self = this;

        self.isAvailable = isAvailable;

        function isAvailable(survey, id) {
            return survey.isAvailableID(id);
        }
    }

}());
