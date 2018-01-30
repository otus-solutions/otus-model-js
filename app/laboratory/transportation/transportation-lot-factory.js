(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .factory('otusjs.laboratory.transportation.LotFactory', factory);

  factory.$inject = [
    'otusjs.laboratory.WorkAliquotFactory'
  ];

  function factory(WorkAliquot) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new TransportationLot(WorkAliquot, {});
    }

    function fromJson(lotInfo) {
      return new TransportationLot(WorkAliquot, lotInfo);
    }

    return self;
  }

  function TransportationLot(WorkAliquot, lotInfo) {
    var self = this;

    self.objectType = 'TransportationLot';
    self.code = lotInfo.code || '';
    self.fieldCenter = lotInfo.fieldCenter || '';
    self.aliquotList = WorkAliquot.fromJson(lotInfo.aliquotList);
    self.shipmentDate = lotInfo.shipmentDate || '';
    self.processingDate = lotInfo.processingDate || '';
    self.operator = lotInfo.operator || '';
    self.aliquotsInfo = lotInfo.aliquotsInfo || [];

    self.chartDataSet = {
      labels: [], 
      data: [], 
      backgroundColor: [],
      fieldCenter: self.fieldCenter,
      chartId: self.code
    };

    self.insertAliquot = insertAliquot;
    self.removeAliquotByIndex = removeAliquotByIndex;
    self.toJSON = toJSON;

    _onInit();

    function _onInit() {
      _fillAliquotInfoLabel();
    }

    function _fillAliquotInfoLabel(){
      self.aliquotsInfo.forEach(function(aliquotInfo){
        var aliquot = self.aliquotList.find(function(aliquot){
          return aliquot.name === aliquotInfo.aliquotName;
        });
        if(aliquot) {
          aliquotInfo.aliquotLabel = aliquot.label;
          aliquotInfo.role = aliquot.role;
          aliquotInfo.roleLabel = aliquot.roleLabel;
        }
      });
      
      if(self.aliquotList.length && !self.aliquotsInfo.length){
        self.aliquotList.forEach(function(aliquot){
          _addAliquotInfo(aliquot);
        });
      }

      _generateDataSetForChart();
    }

    function _generateDataSetForChart() {
      self.chartDataSet.labels = [];
      self.chartDataSet.data = [];

      if(self.aliquotsInfo.length){
        self.aliquotsInfo.sort(function (a, b) {
          if (a.aliquotLabel < b.aliquotLabel)
            return -1;
          if (a.aliquotLabel > b.aliquotLabel)
            return 1;
          return 0;
        });
  
        self.aliquotsInfo.forEach(function(aliquotInfo){
          self.chartDataSet.labels.push(aliquotInfo.aliquotLabel + " (" + aliquotInfo.roleLabel + ")");
          self.chartDataSet.data.push(aliquotInfo.quantity);
        });
      }

      var tmpDataSet = angular.copy(self.chartDataSet)
      self.chartDataSet = undefined;
      self.chartDataSet = angular.copy(tmpDataSet);
      return self.chartDataSet;
    }

    function _findAliquotInfo(aliquot){
      return self.aliquotsInfo.find(function (aliquotInfo) {
        return (
          aliquotInfo.aliquotName === aliquot.name
          && aliquotInfo.role === aliquot.role
        );
      });
    }

    function _findOthersAliquotInfo(aliquot){
      return self.aliquotsInfo.filter(function (aliquotInfo) {
        return (
          aliquotInfo.aliquotName !== aliquot.name
          || aliquotInfo.role !== aliquot.role
        );
      });
    }

    function _addAliquotInfo(aliquot) {
      var aliquotInfo = _findAliquotInfo(aliquot);
      var newAliquotsInfo = _findOthersAliquotInfo(aliquot);

      aliquotInfo = aliquotInfo || {
        aliquotName: aliquot.name,
        aliquotLabel: aliquot.label,
        role: aliquot.role,
        roleLabel: aliquot.roleLabel,
        quantity: 0
      }
      aliquotInfo.quantity++;

      newAliquotsInfo.push(aliquotInfo);

      self.aliquotsInfo = newAliquotsInfo;
      _generateDataSetForChart();
    }

    function _removeAliquotInfo(aliquot) {
      var aliquotInfo = _findAliquotInfo(aliquot);
      var newAliquotsInfo = _findOthersAliquotInfo(aliquot);

      if (aliquotInfo && aliquotInfo.quantity > 1) {
        aliquotInfo.quantity--;
        newAliquotsInfo.push(aliquotInfo);
      }

      self.aliquotsInfo = newAliquotsInfo;
      _generateDataSetForChart();
    }

    function insertAliquot(aliquotInfo) {
      var newAliquot = WorkAliquot.create(aliquotInfo);
      self.aliquotList.push(newAliquot);
      _addAliquotInfo(newAliquot);
      return newAliquot;
    }

    function removeAliquotByIndex(index) {
      _removeAliquotInfo(self.aliquotList[index]);
      return self.aliquotList.splice(index, 1);
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        fieldCenter: self.fieldCenter,
        shipmentDate: self.shipmentDate,
        processingDate: self.processingDate,
        operator: self.operator,
        aliquotList: self.aliquotList,
        aliquotsInfo: self.aliquotsInfo.map(function (aliquotInfo) { return { aliquotName: aliquotInfo.aliquotName, role: aliquotInfo.role, quantity: aliquotInfo.quantity }; })
      };

      return json;
    }
  }
}());
