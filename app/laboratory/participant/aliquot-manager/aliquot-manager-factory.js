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

  onInit();

  /* Public Interface*/
  self.getMomentType = getMomentType;

  function onInit() {
    _buildMap();
  }

  function _buildMap() {
    //momentName, tubeType, groupName
    //TODO provide groupName - for now, it will be the cq
    tubeList.forEach(function(tube) {
      var moment = tube.moment;
      var type = tube.type;
      var avaiableAliquots;
      var momentType;
      if (_momentTypeMap.hasOwnProperty(moment)) {
        if (!_momentTypeMap[moment].hasOwnProperty(type)) {
          avaiableAliquots = LaboratoryConfigurationService.getAvaiableAliquots(moment, type, tube.groupName);
          momentType = {
            type: type,
            moment: moment,
            momentLabel: tube.momentLabel,
            typeLabel: tube.typeLabel,
            boxColor: tube.boxColor,
            aliquotsConfig: avaiableAliquots,
            aliquots: ParticipantAliquotFactory.fromJSON(tube),
            tubeList: []
          };
          momentType.tubeList.push(tube);
          momentType.aliquots = ParticipantAliquotFactory.buildEmptyAliquots(avaiableAliquots);
          _momentTypeMap[moment][type] = momentType;
        }
      } else {
        _momentTypeMap[moment] = {};
        avaiableAliquots = LaboratoryConfigurationService.getAvaiableAliquots(moment, type, tube.groupName);
        momentType = {
          type: type,
          moment: moment,
          momentLabel: tube.momentLabel,
          typeLabel: tube.typeLabel,
          boxColor: tube.boxColor,
          tubeList: []
        };
        momentType.tubeList.push(tube);
        momentType.aliquotsConfig = ParticipantAliquotFactory.buildEmptyAliquots(avaiableAliquots);
        _momentTypeMap[moment][type] = momentType;

      }
      // _fillCollecterdAliquots(tube);
    });
    console.log(_momentTypeMap);


  }

  function getMomentType(type, moment){
    return _momentTypeMap[moment][type];
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
