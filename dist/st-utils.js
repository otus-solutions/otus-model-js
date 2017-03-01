(function() {
    'use strict';

    angular.module('utils', []);

}());

(function() {
  'use strict';

  angular
    .module('utils')
    .factory('otusjs.utils.ImmutableDate', factory);

  factory.$inject = [];

  function factory() {
    var constructor = function() {
      var date;
      if (Object.values(arguments).length) {
        date = new Date(Object.values(arguments));
      } else {
        date = new Date();
      }
      return new ImmutableDate(date);
    };
    return constructor;

    function ImmutableDate(date) {
      var self = this;

      self.objectType = 'ImmutableDate';
      self.date = (date.getTime()) ? date : undefined; //this check if date is a valid Date object. undefined starts an empty datepicker
      self.toJSON = toJSON;

      /*Date Methods*/
      self.setHours = setHours;
      self.setMinutes = setMinutes;
      self.setSeconds = setSeconds;
      self.setMilliseconds = setMilliseconds;
      self.setDate = setDate;
      self.setMonth = setMonth;
      self.setFullYear = setFullYear;
      self.resetDate = resetDate;
      self.resetTime = resetTime;
      self.toString = toString;

      function setHours(hours) {
        self.date.setHours(hours);
      }

      function setMinutes(minutes) {
        self.date.setMinutes(minutes);
      }

      function setSeconds(seconds) {
        self.date.setSeconds(seconds);
      }

      function setMilliseconds(milliseconds) {
        self.date.setMilliseconds(milliseconds);
      }

      function setDate(date) {
        self.date.setDate(date);
      }

      function setMonth(month) {
        self.date.setMonth(month);
      }

      function setFullYear(fullYear) {
        self.date.setFullYear(milliseconds);
      }

      function resetDate() {
        if (!self.date) {
          return;
        }
        self.date.setDate(1);
        self.date.setMonth(0);
        self.date.setFullYear(1970);
      }

      function resetTime() {
        if (!self.date) {
          return;
        }
        self.date.setHours(0);
        self.date.setMinutes(0);
        self.date.setSeconds(0);
        self.date.setMilliseconds(0);
      }

      function toJSON() {
        return {
          objectType: self.objectType,
          value: self.toString()
        };
      }

      function toString() {
        if (!self.date) {
          return null; //TODO check what
        }
        var newDate = new Date(self.date.getTime());
        var year = '' + newDate.getFullYear(),
          month = _padLeadingZeroes(newDate.getMonth() + 1, 2),
          day = _padLeadingZeroes(newDate.getDate(), 2),
          hours = _padLeadingZeroes(newDate.getHours(), 2),
          minutes = _padLeadingZeroes(newDate.getMinutes(), 2),
          seconds = _padLeadingZeroes(newDate.getSeconds(), 2),
          milisseconds = _padLeadingZeroes(newDate.getMilliseconds(), 3);

        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + '.' + milisseconds;
      }

      function _padLeadingZeroes(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }

      return self;
    }
  }

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
