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
    .factory('otusjs.utils.FileUploadFactory', factory);

  factory.$inject = [
    '$q',
    'otusjs.model.activity.ActivityFacadeService'

  ];

  function factory($q, ActivityFacadeService) {
    var self = this;
    var _resource;
    var _provided = false; //tell if otus provided a resource

    /* Public Interface */
    self.setUploadInterface = setUploadInterface;
    self.getUploadInterface = getUploadInterface;

    function setUploadInterface(_rest) {
      var defer = $q.defer();
      _resource = _rest;
      _provided = true;
      defer.resolve(true);
      return defer.promise;
    }

    function getUploadInterface() {
      if (_provided) {
        return new UploadInterface($q, _resource, ActivityFacadeService);
      } else {
        return new FakeUploadInterface($q);
      }
    }
    return self;
  }

  function UploadInterface($q, _resource, ActivityFacadeService) {
    var self = this;
    var _recruitment_number;
    var _requestCanceler;
    var _interviewer;

    _init();

    /* Public Interface */
    self.uploadFile = uploadFile;
    self.getFile = getFile;
    self.deleteFile = deleteFile;
    self.cancelRequest = cancelRequest;

    function _init() {
      _recruitment_number = ActivityFacadeService.surveyActivity.participantData.recruitmentNumber;
      _interviewer = null;
      _requestCanceler = {};
    }



    function uploadFile(file, questionID) {
      _requestCanceler[file.control] = $q.defer();
      var type = file.type,
        name = file.name,
        size = file.size,
        sentDate = file.lastModifiedDate.toISOString();

      var formData = new FormData();
      formData.append('file', file);
      formData.append('item_id', questionID);
      formData.append('recruitment_number', _recruitment_number);
      formData.append('interviewer', _interviewer);
      formData.append('sent_date', sentDate);
      formData.append('name', name);
      formData.append('type', type);
      formData.append('size', size);

      return _resource.post(formData, _requestCanceler[file.control].promise);
    }

    function cancelRequest(controlIndex) {
      _requestCanceler[controlIndex].resolve(true);
    }

    function getFile(fileInfo) {
      var defer = $q.defer();
      _resource.getByOID(fileInfo.oid)
        .then(function(response) {
          defer.resolve(_buildFile(response.data, fileInfo));
        }, function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function deleteFile(oid) {
      return _resource.deleteByOID(oid);
    }


    function _buildFile(arrayBuffer, fileInfo) {
      var file = new File([arrayBuffer], fileInfo.name, {
        type: fileInfo.type
      });
      return file;
    }
  }

  function FakeUploadInterface($q) { //for studio purposes
    var self = this;

    /* Public Interface */
    self.uploadFile = getsNothing;
    self.getFile = getsNothing;
    self.deleteFile = getsNothing;

    function getsNothing() {
      var defer = $q.defer();
      var response = {
        data: {
          data: 'fakeOID'
        }
      };
      defer.resolve(response);
      return defer.promise;
    }
  }
}());

var global = window || global;
global.GeoJSON = (function () {

  'use strict';

  angular.module('utils')
    .factory('GeoJSON', Factory);


  function Factory() {
    var constructor = function () {
      return new GeoJSON();

    };
    return constructor;

    function GeoJSON() {
      var self = this;

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(setPosition, showError);
        } else {
          throw new Error("Geolocation is not supported by this browser.");
        }
      }

      function setPosition(position) {
        self.type = 'point';
        self.coordinates = [0,0];
        self.coordinates[0] =  position.coords.latitude;
        self.coordinates[1] = position.coords.longitude;
      }

      function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            throw new Error("User denied the request for Geolocation.");
          case error.POSITION_UNAVAILABLE:
            throw new Error("Location information is unavailable.");
          case error.TIMEOUT:
            throw new Error("The request to get user location timed out.");
          case error.UNKNOWN_ERROR:
            throw new Error("An unknown error occurred.");
        }
        return null;
      }

      getLocation();
      return self;
    }
  }

  return Factory();
})();



var ImmutableDate = (function() {
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
  return factory();
}());

var global = window || global;
global.ObjectId = (function () {

  'use strict';
  angular.module('utils')
    .factory('ObjectId', Factory);


  function Factory() {
    var constructor = function (value) {
      return new ObjectId(value);

    };

    function ObjectId(value) {
      var mongoObjectId = function () {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
          return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
      };

      var checkForHexRegExp = new RegExp(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i);

      if (value) {
        var rawValue;
        if (value.hasOwnProperty('$oid')) {
          rawValue = value.$oid;
        } else{
          rawValue = value;
        }
        if(checkForHexRegExp.test(rawValue)){
          this.$oid = rawValue
        } else {
          throw new Error('Invalid value for ObjectId.');
        }
      } else {
        this.$oid = mongoObjectId();
      }

      return this;
    }

    ObjectId.prototype.toString = function () {
      return ''.concat(this.$oid);
    };

    return constructor;

  }

  return Factory();
})();



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
    self.newStringSearch = newStringSearch;
    self.newParticipantFilter = newParticipantFilter;


    function newStringSearch(datasource) {
      var options = {
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "value"
         ]
      };
      return new StringSearch(datasource, options);
    }

    function newParticipantFilter(datasource) {
      var options = {
         shouldSort: true,
          tokenize: true,
          threshold: 0.2,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
        keys: [
            "name",
            "stringfiedRN"
         ]
      };
      return new StringSearch(datasource, options);
    };


    /* -------- */
    function StringSearch(datasource, opt) { //perform a search in arrays of string
      var self = this;
      var options = opt || {
        threshold: 0.2,
        maxPatternLength: 10,
        minMatchCharLength: 1,
        location: 0,
        distance: 50,
        keys: [
          "value"
        ]
      };
      var fuse = new Fuse(datasource, options); // "datasource" is the item array

      /* Public Interface */
      self.perform = perform;


      function perform(text) {
        var deferred = $q.defer();
        deferred.resolve(text ? _filter(text) : []);
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
        .service('otusjs.model.utils.AlphabetSuffixIDGenerator', Service);

    function Service() {

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

(function() {
  'use strict';

  angular
    .module('utils')
    .directive('uploadTool', directive);

  directive.$inject = [
    ];

  function directive(UploadToolService) {

    var ddo = {
      restrict: 'A',
      link: linkFunction,
      scope: {
        uploadTool: '='
      }
    };
    return ddo;

    function linkFunction($scope, $element, attributes) {
      var fileUploadElement;
      var uploadConfig = $scope.uploadTool;
      var callback = uploadConfig.callback || {};
      var uploadType = uploadConfig.type || 'any';
      var multiple = uploadConfig.multiple || false;

      $element.on('click', function(event) {
        fileUploadElement = _createInput(uploadType);
        fileUploadElement.click();

        fileUploadElement.addEventListener('change', function() {
          var filesToUpload = [];
          for (var i = 0; i < this.files.length; i++) {
            filesToUpload.push(this.files[i]);
          }
          if (filesToUpload.length !== 0) {
            callback(filesToUpload);
          }
        });
      });

      function _createInput(uploadType) {
        var acceptance = _uploadTypeResolver(uploadType);
        if (acceptance !== '') {
          fileUploadElement = document.createElement('input');
          fileUploadElement.setAttribute('type', 'file');
          fileUploadElement.setAttribute('accept', acceptance);
          if (multiple) {
             fileUploadElement.setAttribute('multiple', multiple);
          }
        } else {
          fileUploadElement = document.createElement('button');
        }

        return fileUploadElement;
      }
    }


    function _uploadTypeResolver(type) {
      var acceptance = '';
      if (type) {
        type = type.replace(/\s/g, "").split(',');
        for (var i = 0; i < type.length; i++) {
          var mappedType = _typeMapper(type[i]);
          if (mappedType) {
            acceptance += mappedType + ', ';
          }
        }
      }
      return acceptance || 'any';
    }

    function _typeMapper(type) {
      var typeMap = {
        'image': 'image/*',
        'jpg': '.jpg',
        'png': '.png',
        'json': '.json'
      };
      return typeMap[type];
    }
  }

}());
