(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.ParticipanTubeFactory', factory);

  factory.$inject = [
      'otusjs.laboratory.TubeCollectionDataFactory',
      'otusjs.laboratory.ParticipantAliquotFactory',
      'otusjs.laboratory.LaboratoryConfigurationService'
   ];

  function factory(TubeCollectionDataFactory, ParticipantAliquotFactory, LaboratoryConfigurationService) {
    var self = this;

    _onInit();

    function _onInit() {}

    /* Public Methods */
    self.create = create;
    self.buildFromArray = buildFromArray;


    function create(tubeInfo, operator) {
      var tube = new Tube(tubeInfo, TubeCollectionDataFactory, operator, ParticipantAliquotFactory, LaboratoryConfigurationService);
      return tube;
    }

    function buildFromArray(tubeArray, operator) {
      return tubeArray.map(function(tubeInfo) {
        return new Tube(tubeInfo, TubeCollectionDataFactory, operator, ParticipantAliquotFactory, LaboratoryConfigurationService);
      });
    }


    return self;
  }

  function Tube(tubeInfo, TubeCollectionDataFactory, operator, ParticipantAliquotFactory, LaboratoryConfigurationService) {
    var self = this;
    var _labConfig;
    var _operator;


    /* Public Interface */
    self.objectType = "Tube";

    self.code = tubeInfo.code;

    self.type = tubeInfo.type;
    self.moment = tubeInfo.moment;
    self.groupName = tubeInfo.groupName;

    //TODO change name to self.aliquots - keep aliquotes on toJSON method
    self.aliquotes = tubeInfo.aliquotes.length ? ParticipantAliquotFactory.fromJSON(tubeInfo.aliquotes, self) : [];
    self.order = tubeInfo.order;
    self.tubeCollectionData = TubeCollectionDataFactory.create(tubeInfo.tubeCollectionData, operator);

    /* Custom Methods */
    self.collect = collect;
    self.toAliquot = toAliquot;
    self.toJSON = toJSON;

    _onInit();

    function _onInit() {
      _operator = operator;
      _labConfig = LaboratoryConfigurationService.getLaboratoryConfiguration();
      _fillDescriptors();
      _manageAliquots();
    }

    function _fillDescriptors() {
      var tubeDescriptor = LaboratoryConfigurationService.getTubeDescriptor(self.type);
      var momentDescriptor = LaboratoryConfigurationService.getMomentDescriptor(self.moment);

      self.label = tubeDescriptor ? tubeDescriptor.label : '';
      self.boxColor = tubeDescriptor ? tubeDescriptor.color : '';
      self.momentLabel = momentDescriptor.label !== '' ? momentDescriptor.label : 'Nenhum';
      self.typeLabel = tubeDescriptor.label;
    }

    function _manageAliquots() {
      var _avaiableAliquotes = LaboratoryConfigurationService.getAvaiableAliquots(self.moment, self.type, self.groupName);

    }

    function collect() {
      self.tubeCollectionData.fill(_operator);
    }

    function toAliquot(aliquotInfo, code) {
      //TODO check if code fits
      self.aliquotes.push(ParticipantAliquotFactory.create(aliquotInfo, code));
    }

    function unAliquot(code) {
      var indexToRemove = self.aliquots.findIndex(function(aliquot) {
        return aliquot.code == code;
      });
      self.aliquots.slice(indexToRemove, 1);
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        type: self.type,
        moment: self.moment,
        code: self.code,
        groupName: self.groupName,
        aliquotes: self.aliquotes,
        order: self.order,
        tubeCollectionData: self.tubeCollectionData
      };
      return json;
    }
  }
}());
