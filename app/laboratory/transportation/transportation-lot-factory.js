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

    self.chartDataSet = {labels: [], data: [], backgroundColor: []};

    _onInit();

    function _onInit() {
      self.aliquotsInfo = lotInfo.aliquotsInfo || [];
      _fillAliquotInfoLabel();
    }

    function _fillAliquotInfoLabel(){
      self.aliquotsInfo.forEach(function(aliquotInfo){
        var aliquot = self.aliquotList.find(function(aliquot){
          return aliquot.name === aliquotInfo.aliquotName;
        });

        if(aliquot) aliquotInfo.aliquotLabel = aliquotName.label;
      });
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
          self.chartDataSet.labels.push(aliquotInfo.aliquotLabel);
          self.chartDataSet.data.push(aliquotInfo.quantity);
        });
      }

      return self.chartDataSet;
    }

    function _addAliquotInfo(aliquot) {
      var aliquotInfo = self.aliquotsInfo.find(function (aliquotInfo) {
        return aliquotInfo.aliquotName === aliquot.name;
      });
      var newAliquotsInfo = self.aliquotsInfo.filter(function (aliquotInfo) {
        return aliquotInfo.aliquotName !== aliquot.name;
      });

      aliquotInfo = aliquotInfo || { aliquotName: aliquot.name, aliquotLabel: aliquot.label, quantity: 0 }
      aliquotInfo.quantity++;

      newAliquotsInfo.push(aliquotInfo);

      self.aliquotsInfo = newAliquotsInfo;
      _generateDataSetForChart();
    }

    function _removeAliquotInfo(aliquot) {
      var aliquotInfo = self.aliquotsInfo.find(function (aliquotInfo) {
        return aliquotInfo.aliquotName === aliquot.name;
      });
      var newAliquotsInfo = self.aliquotsInfo.filter(function (aliquotInfo) {
        return aliquotInfo.aliquotName !== aliquot.name;
      });

      if (aliquotInfo && aliquotInfo.quantity > 1) {
        aliquotInfo.quantity--;
        newAliquotsInfo.push(aliquotInfo);
      }

      self.aliquotsInfo = newAliquotsInfo;
      _generateDataSetForChart();
    }

    self.insertAliquot = insertAliquot;
    self.removeAliquotByIndex = removeAliquotByIndex;

    self.toJSON = toJSON;


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
        aliquotsInfo: self.aliquotsInfo.map(function (aliquotInfo) { return { aliquotName: aliquotInfo.aliquotName, quantity: aliquotInfo.quantity }; })
      };

      return json;
    }
  }
}());
