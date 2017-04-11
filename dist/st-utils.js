(function() {
    'use strict';

    angular.module('utils', []);

}());

(function() {
  'use strict';
  angular
    .module('utils')
    .service('otusjs.utils.DatasourceService', service);

  service.$inject = [
      '$q'
   ];

  function service($q, DataSourceDefinitionManagerFactory) {
    var self = this;
    var _datasources,
      _provided,
      _fetchDatasources = function() {}; //this will teach player where to get the ds on otus db

    /* Public Methods */
    self.fetchDatasources = fetchDatasources;    
    self.provideDatasourcesAddress = provideDatasourcesAddress;


    function fetchDatasources(itemId) {
      var deferred = $q.defer();
      _datasources = _fetchDatasources();
      if (_provided) {
        if (_datasources) {
          deferred.resolve(_fetchDatasourcesByItemID(itemId));
        } else {
          deferred.reject();
        }
      } else {
        deferred.resolve(_getFakeList());
      }
      return deferred.promise;
    }

    function _fetchDatasourcesByItemID(itemId){
      var _arrayResult = [];
      Object.keys(_datasources).forEach(function(dsName){
         if (_datasources[dsName].bindedItems.includes(itemId)) {
            _arrayResult = _arrayResult.concat(_datasources[dsName].data);
         }
      });
      return _arrayResult;
   }

    function provideDatasourcesAddress(dsAddress) {
      _fetchDatasources = dsAddress;
      _provided = true;
    }

    function _getFakeList() { //for studio purposes
      return [
        {
          'value': 'Atroveran'
          },
        {
          'value': 'Paracetamol'
          },
        {
          'value': 'Dorflex'
          },
        {
          'value': 'Cataflan'
          },
        {
          'value': 'Tylenol'
          }
      ];
    }

  }
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
      self.getHours = getHours;
      self.setMinutes = setMinutes;
      self.getMinutes = getMinutes;
      self.setSeconds = setSeconds;
      self.getSeconds = getSeconds;
      self.setMilliseconds = setMilliseconds;
      self.setDate = setDate;
      self.setMonth = setMonth;
      self.setFullYear = setFullYear;
      self.getTime = getTime;
      self.resetDate = resetDate;
      self.resetTime = resetTime;
      self.toString = toString;

      function setHours(hours) {
        self.date.setHours(hours);
      }

      function getHours() {
        return self.date.getHours();
      }

      function setMinutes(minutes) {
        self.date.setMinutes(minutes);
      }

      function getMinutes() {
        return self.date.getMinutes();
      }

      function setSeconds(seconds) {
        self.date.setSeconds(seconds);
      }

      function getSeconds() {
        return self.date.getSeconds();
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
        self.date.setFullYear(fullYear);
      }

      function getTime() {
        return self.date.getTime();
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
    .factory('otusjs.utils.SearchQueryFactory', factory);

  factory.$inject = [
     '$q'
      ];

  function factory($q) {
    var self = this;


    /* Public Interface */
    self.newStringSearch = function(datasource) {
      return new StringSearch(datasource);
    };


    /* -------- */
    function StringSearch(datasource, opt) { //perform a search in arrays of string
      var self = this;
      var options = opt || {
        threshold: 0.2,
        maxPatternLength: 10,
        minMatchCharLength: 1,
        keys: [
          "value"
        ]
      };
      var fuse = new Fuse(datasource, options); // "datasource" is the item array

      /* Public Interface */
      self.perform = perform;


      function perform(text) {
        var deferred = $q.defer();
        deferred.resolve(text ? _filter(text) : datasource);
        return deferred.promise;
      }

      function _filter(typedText) {
        var matchIndexes = fuse.search(typedText);
        return matchIndexes;
      }

    }
    return self;
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
