(function() {
    'use strict';

    angular
      .module('otusjs.laboratory')
      .service('otusjs.laboratory.AliquotManagerService', service);

    service.$inject = [
      'otusjs.laboratory.ParticipantAliquotFactory',
      'otusjs.laboratory.LaboratoryConfigurationService'
    ];

    function service(ParticipantAliquotFactory, LaboratoryConfigurationService) {
      var self = this;
      var _momentTypeMap = {};

      /* Public Interface*/
      self.getMomentType = getMomentType;
      self.initialize = initialize;

      function initialize(tubeList) {
        _buildMap(tubeList);
      }

      function _buildMap(tubeList) {
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
                aliquots: ParticipantAliquotFactory.fromJSON(tube.aliquotes, tube),
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

      function getMomentType(type, moment) {
        return _momentTypeMap[moment][type];
      }

      function _fillCollecterdAliquots(tube) {
        var moment = tube.moment;
        var type = tube.type;
        tube.aliquotes.forEach(function(aliquot) { //se entrou no forEach, tem alíquota coletada
          var desc = _momentTypeMap[moment][type].find(function(mappedAlquot) {
            return mappedAlquot.name === aliquot.name;
          });
          desc.fillFromJson(aliquot);
        });
      }

    }
}());
