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
    self.insertAliquotList = insertAliquotList;
    self.removeAliquotByIndex = removeAliquotByIndex;
    self.getAliquotCodeList = getAliquotCodeList;
    self.toJSON = toJSON;

    _onInit();

    function _onInit() {
      _fillAliquotInfoLabel();
    }

    function _fillAliquotInfoLabel() {
      self.aliquotsInfo.forEach(function (aliquotInfo) {
        var aliquot = self.aliquotList.find(function (aliquot) {
          return aliquot.name === aliquotInfo.aliquotName;
        });
        if (aliquot) {
          aliquotInfo.aliquotLabel = aliquot.label;
          aliquotInfo.role = aliquot.role;
          aliquotInfo.roleLabel = aliquot.roleLabel;
        }
      });

      if (self.aliquotList.length && !self.aliquotsInfo.length) {
        self.aliquotList.forEach(function (aliquot) {
          _addAliquotInfo(aliquot);
        });
      }

      _generateDataSetForChart();
    }

    function _generateDataSetForChart() {
      self.chartDataSet.labels = [];
      self.chartDataSet.data = [];

      if (self.aliquotsInfo.length) {
        self.aliquotsInfo.sort(function (a, b) {
          if (a.aliquotLabel < b.aliquotLabel)
            return -1;
          if (a.aliquotLabel > b.aliquotLabel)
            return 1;
          return 0;
        });

        self.aliquotsInfo.forEach(function (aliquotInfo) {
          self.chartDataSet.labels.push(aliquotInfo.aliquotLabel + " (" + aliquotInfo.roleLabel + ")");
          self.chartDataSet.data.push(aliquotInfo.quantity);
        });
      }

      var tmpDataSet = angular.copy(self.chartDataSet)
      self.chartDataSet = undefined;
      self.chartDataSet = angular.copy(tmpDataSet);
      return self.chartDataSet;
    }

    function _findAliquotInfo(aliquot) {
      return self.aliquotsInfo.find(function (aliquotInfo) {
        return (
          aliquotInfo.aliquotName === aliquot.name
          && aliquotInfo.role === aliquot.role
        );
      });
    }

    function _findOthersAliquotInfo(aliquot) {
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

      aliquotInfo ?
        aliquotInfo.quantity++ :
        aliquotInfo = new AliquotInfoModel(aliquot);

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

    function getAliquotCodeList() {
      var aliquotCodeList = [];
      self.aliquotList.forEach(function (aliquot) {
        aliquotCodeList.push(aliquot.code);
      });
      return aliquotCodeList;
    }

    function insertAliquotList(aliquotList) {
      self.aliquotList.push.apply(self.aliquotList,
        aliquotList.map(function (aliquot) {
          var workAliquot = WorkAliquot.create(aliquot);
          var aliquotInfo = _findAliquotInfo(workAliquot);

          //updates info array
          if (aliquotInfo) {
            aliquotInfo.quantity++;
          } else {
            self.aliquotsInfo.push(new AliquotInfoModel(workAliquot));
          }

          return workAliquot;
        }));

      _generateDataSetForChart();
    }

    var AliquotInfoModel = function (workAliquot) {
      this.aliquotName = workAliquot.name;
      this.aliquotLabel = workAliquot.label;
      this.role = workAliquot.role;
      this.roleLabel = workAliquot.roleLabel;
      this.quantity = 1;
    };

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        fieldCenter: self.fieldCenter,
        shipmentDate: self.shipmentDate,
        processingDate: self.processingDate,
        operator: self.operator,
        aliquotList: self.aliquotList,
        aliquotsInfo: self.aliquotsInfo.map(function (aliquotInfo) {
          return {aliquotName: aliquotInfo.aliquotName, role: aliquotInfo.role, quantity: aliquotInfo.quantity};
        })
      };

      return json;
    }
  }
}());
