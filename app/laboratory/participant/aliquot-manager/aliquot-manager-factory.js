(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.AliquotManagerFactory', factory);

  function factory() {
    var self = this;

    self.create = create;

    function create(participantCQ, tubeList) {
      return new AliquotManager(participantCQ, tubeList);
    }

    return self;
  }

}());


function AliquotManager(participantCQ, tubeList) {
  var self = this;
  var _momentTypeMap = {};

  var t = {
    "FASTING": {
      "GEL": {},
      "EDTA": {},
      "FLUORIDE": {}
    },
    "POST_OVERLOAD": {
      "GEL": {},
      "FLUORIDE": {}
    },
    "NONE": {
      "URINE": {}
    }
  };

  onInit();

  function onInit() {
    _buildMap();
  }

  function _buildMap() {
    tubeList.forEach(function(tube) {
      var moment = tube.moment;
      var type = tube.type;
      console.log(moment, type);
      if (_momentTypeMap.hasOwnProperty(moment)) {
        if (!_momentTypeMap[moment].hasOwnProperty(type)) {
          _momentTypeMap[moment][type] = {};
        }
      } else {
        _momentTypeMap[moment] = {};
        _momentTypeMap[moment][type] = {};

      }
    });
    console.log(JSON.stringify(_momentTypeMap));
  }

}
