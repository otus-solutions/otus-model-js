(function() {
    'use strict';

    angular.module('utils', []);

}());

(function() {
    'use strict';

    angular
        .module('utils')
        .service('JsonClonerService', JsonClonerService);

    function JsonClonerService() {
        var self = this;

        var internal = 1;

        /* Public interface */
        self.clone = clone;

        function clone(original) {
            var clone = {};

            if (Array.isArray(original) || (original instanceof Function)) {
                return original;
            } else if (original instanceof Object) {
                var propertyNames = Object.getOwnPropertyNames(original);

                propertyNames.forEach(function(propertyName) {
                    var property = original[propertyName];
                    if (property instanceof Function) {
                        var formattedName = '';
                        if (/^get/.test(propertyName)) {
                            var fl = propertyName.substring(3, 4).toLowerCase();
                            formattedName = fl + propertyName.substring(4);
                            var value = property();

                            if (Array.isArray(value)) {
                                var aray = [];
                                value.forEach(function(el) {
                                    var subEl = self.clone(el);
                                    aray.push(subEl);
                                });
                                clone[formattedName] = aray;
                            } else if (value instanceof Object) {
                                var subObj = self.clone(value);
                                clone[formattedName] = subObj;
                            } else {
                                clone[formattedName] = value;
                            }
                        }
                    } else {
                        clone[propertyName] = original[propertyName];
                    }
                });
                return JSON.stringify(clone).replace(/\\/g, '').replace(/"{/g, '{').replace(/\}"/g, '}');
            } else {
                return original;
            }
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('utils')
        .service('ClonerService', ClonerService);

    function ClonerService() {
        var self = this;

        /* Public interface */
        self.clone = clone;

        function clone(original) {
            var clone = {};

            for (var property in original) {
                clone[property] = original[property];
            }

            return clone;
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
         var userUUID = "userUUID:[" + $window.sessionStorage.userUUID + "]";
         var surveyUUID = "surveyUUID:[" + UUIDService.generateUUID() + "]";
         var repositoryUUID = "repositoryUUID:[ Not done yet ]";

         self.generateSurveyUUID = generateSurveyUUID;

         function generateSurveyUUID() {
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
