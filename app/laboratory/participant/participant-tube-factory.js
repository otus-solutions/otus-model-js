(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.ParticipanTubeFactory', factory);

    factory.$inject = [
      'otusjs.laboratory.TubeCollectionDataFactory'
   ];

  function factory(TubeCollectionDataFactory) {
    var self = this;

    _onInit();

    function _onInit() {}

    /* Public Methods */
    self.create = create;
    self.buildFromArray = buildFromArray;


    function create(tubeInfo, laboratoryConfiguration, operator) {
      var tube = new Tube(tubeInfo, laboratoryConfiguration, TubeCollectionDataFactory, operator);
      return tube;
    }

    function buildFromArray(tubeArray, laboratoryConfiguration, operator) {
      return tubeArray.map(function(tubeInfo) {
        return new Tube(tubeInfo, laboratoryConfiguration, TubeCollectionDataFactory, operator);
      });
    }


    return self;
  }

  function Tube(tubeInfo, laboratoryConfiguration, TubeCollectionDataFactory, operator) {
    var self = this;
    var _labConfig;
    var _operator;


    /* Public Interface */
    self.objectType = "Tube";

    self.type = tubeInfo.type;
    self.code = tubeInfo.code;
    self.moment = tubeInfo.moment;
    self.groupName = tubeInfo.groupName;
    self.aliquotes = tubeInfo.aliquotes;
    self.order = tubeInfo.order;
    self.tubeCollectionData = TubeCollectionDataFactory.create(tubeInfo.tubeCollectionData, operator);

    self.collect = collect;
    self.toJSON = toJSON;

    _onInit();

    function _onInit() {
      _operator = operator;
      _labConfig = laboratoryConfiguration;
      _fillDescriptors();
    }

    function _fillDescriptors() {
      var tubeDescriptor = _labConfig.tubeConfiguration.tubeDescriptors.find(function(descriptor) {
        return descriptor.name == self.type;
      });

      var momentDescriptor = _labConfig.collectMomentConfiguration.collectMomentDescriptors.find(function(descriptor) {
         return descriptor.name == self.moment;
      });

      self.label = tubeDescriptor ? tubeDescriptor.label : '';
      self.boxColor = tubeDescriptor ? tubeDescriptor.color : '';
      self.momentLabel = momentDescriptor.label !== '' ? momentDescriptor.label : 'Nenhum';
    }

    function collect() {
      self.tubeCollectionData.fill(_operator);
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
