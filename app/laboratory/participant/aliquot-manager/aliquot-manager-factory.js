(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.AliquotManagerFactory', factory);

    factory.$inject = [
      'otusjs.laboratory.ParticipantAliquotFactory',
      'otusjs.laboratory.LaboratoryConfigurationService'
    ];

  function factory(ParticipantAliquotFactory, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;

    function create(participantCQ, tubeList) {
      return new AliquotManager(ParticipantAliquotFactory, LaboratoryConfigurationService, participantCQ, tubeList);
    }

    return self;
  }

}());


function AliquotManager(ParticipantAliquotFactory, LaboratoryConfigurationService, participantCQ, tubeList) {
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



  function getAliquotsList(moment, type) {
    return _momentTypeMap[moment][type];
  }

  function _buildMap() {
    //momentName, tubeType, groupName
    //TODO provide groupName - for now, it will be the cq
    tubeList.forEach(function(tube) {
      var moment = tube.moment;
      var type = tube.type;
      var avaiableAliquots;
      if (_momentTypeMap.hasOwnProperty(moment)) {
        if (!_momentTypeMap[moment].hasOwnProperty(type)) {
          avaiableAliquots = LaboratoryConfigurationService.getAvaiableAliquots(moment, type, tube.groupName);
          _momentTypeMap[moment][type] = ParticipantAliquotFactory.fromJSON(avaiableAliquots, tube);
        }
      } else {
        _momentTypeMap[moment] = {};
        avaiableAliquots = LaboratoryConfigurationService.getAvaiableAliquots(moment, type, tube.groupName);
        _momentTypeMap[moment][type] = ParticipantAliquotFactory.fromJSON(avaiableAliquots, tube);

      }
      // _fillCollecterdAliquots(tube);
    });
    console.log(JSON.stringify(_momentTypeMap));
  }

  function _fillCollecterdAliquots(tube) {
    var moment = tube.moment;
    var type = tube.type;
    tube.aliquotes.forEach(function(aliquot) {  //se entrou no forEach, tem alíquota coletada
      var desc = _momentTypeMap[moment][type].find(function(mappedAlquot){
        return mappedAlquot.name === aliquot.name;
      });
      desc.fillFromJson(aliquot);
    });
  }

}
