(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .factory('otusjs.laboratory.transportation.LotFactory', factory);

  factory.$inject = [
    'otusjs.laboratory.WorkAliquotFactory',
    'otusjs.laboratory.WorkTubeFactory'
  ];

  function factory(WorkAliquot, WorkTube) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new TransportationLot(WorkAliquot, WorkTube, {});
    }

    function fromJson(lotInfo) {
      return new TransportationLot(WorkAliquot, WorkTube, lotInfo);
    }

    return self;
  }

  function TransportationLot(WorkAliquot, WorkTube, lotInfo) {
    var self = this;

    self.objectType = 'TransportationLot';
    self.code = lotInfo.code || '';
    self.aliquotList = WorkAliquot.fromJson(lotInfo.aliquotList);
    self.tubeList = WorkTube.fromJson(lotInfo.tubeList);
    self.shipmentDate = lotInfo.shipmentDate || '';
    self.processingDate = lotInfo.processingDate || '';
    self.operator = lotInfo.operator || '';
    self.aliquotsInfo = lotInfo.aliquotsInfo || [];
    self.tubesInfo = lotInfo.tubesInfo || [];
    self.originLocationPoint = lotInfo.originLocationPoint ? lotInfo.originLocationPoint.hasOwnProperty('$oid') ? lotInfo.originLocationPoint.$oid : lotInfo.originLocationPoint : '';
    self.destinationLocationPoint = lotInfo.destinationLocationPoint ? lotInfo.destinationLocationPoint.hasOwnProperty('$oid') ? lotInfo.destinationLocationPoint.$oid : lotInfo.destinationLocationPoint : '';

    self.chartAliquotDataSet = _getStructureDataSet();
    self.chartTubeDataSet = _getStructureDataSet();

    self.insertAliquot = insertAliquot;
    self.insertTube = insertTube;
    self.insertAliquotList = insertAliquotList;
    self.insertTubeList = insertTubeList;
    self.removeAliquotByIndex = removeAliquotByIndex;
    self.removeTubeByIndex = removeTubeByIndex;
    self.getAliquotCodeList = getAliquotCodeList;
    self.getTubeCodeList = getTubeCodeList;
    self.toJSON = toJSON;

    _onInit();

    function _onInit() {
      _fillAliquotInfoLabel();
      _fillTubeInfoLabel();
    }

    function _getStructureDataSet() {
      return {
        labels: [],
        data: [],
        backgroundColor: [],
        chartId: self.code
      }
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

      _generateDataSetForAliquotChart();
    }

    function _fillTubeInfoLabel() {
      self.tubesInfo.forEach(function (tubeInfo) {
        var tube = self.tubeList.find(function (tube) {
          return tube.label === tubeInfo.label;
        });
        if (tube) {
          tubeInfo.label = tube.label;
          tubeInfo.moment = tube.moment;
          tubeInfo.momentLabel = tube.momentLabel;
        }
      });

      if (self.tubeList.length && !self.tubesInfo.length) {
        self.tubeList.forEach(function (tube) {
          _addTubeInfo(tube);
        });
      }

      _generateDataSetForTubeChart();
    }

    function _generateDataSetForTubeChart() {
      self.chartTubeDataSet.labels = [];
      self.chartTubeDataSet.data = [];

      if (self.tubesInfo.length) {
        self.tubesInfo.sort(function (a, b) {
          if (a.typeLabel < b.typeLabel)
            return -1;
          if (a.typeLabel > b.typeLabel)
            return 1;
          return 0;
        });

        self.tubesInfo.forEach(function (tubeInfo) {
          self.chartTubeDataSet.labels.push(tubeInfo.typeLabel + " (" + tubeInfo.momentLabel + ")");
          self.chartTubeDataSet.data.push(tubeInfo.quantity);
        });
      }
      var tmpDataSet = angular.copy(self.chartTubeDataSet);
      self.chartTubeDataSet = undefined;
      self.chartTubeDataSet = angular.copy(tmpDataSet);
      return self.chartTubeDataSet;
    }
    function _generateDataSetForAliquotChart() {
      self.chartAliquotDataSet.labels = [];
      self.chartAliquotDataSet.data = [];


      if (self.aliquotsInfo.length) {
        self.aliquotsInfo.sort(function (a, b) {
          if (a.aliquotLabel < b.aliquotLabel)
            return -1;
          if (a.aliquotLabel > b.aliquotLabel)
            return 1;
          return 0;
        });

        self.aliquotsInfo.forEach(function (aliquotInfo) {
          self.chartAliquotDataSet.labels.push(aliquotInfo.aliquotLabel + " (" + aliquotInfo.roleLabel + ")");
          self.chartAliquotDataSet.data.push(aliquotInfo.quantity);
        });
      }

      var tmpDataSet = angular.copy(self.chartAliquotDataSet);
      self.chartAliquotDataSet = undefined;
      self.chartAliquotDataSet = angular.copy(tmpDataSet);
      return self.chartAliquotDataSet;
    }

    function _findAliquotInfo(aliquot) {
      return self.aliquotsInfo.find(function (aliquotInfo) {
        return (
          aliquotInfo.aliquotName === aliquot.name
          && aliquotInfo.role === aliquot.role
        );
      });
    }

    function _findTubeInfo(tube) {
      return self.tubesInfo.find(function (tubeInfo) {
        return (
          tubeInfo.type === tube.type
          && tubeInfo.moment === tube.moment
        );
      });
    }

    function _findOthersTubeInfo(tube) {
      return self.tubesInfo.filter(function (tubeInfo) {
        return (
          tubeInfo.type !== tube.type
          || tubeInfo.moment !== tube.moment
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
      _generateDataSetForAliquotChart();
    }

    function _addTubeInfo(tube) {
      var tubeInfo = _findTubeInfo(tube);
      var newTubesInfo = _findOthersTubeInfo(tube);

      tubeInfo ?
        tubeInfo.quantity++ :
        tubeInfo = new TubeInfoModel(tube);

      newTubesInfo.push(tubeInfo);

      self.tubesInfo = newTubesInfo;
      _generateDataSetForTubeChart();
    }

    function _removeAliquotInfo(aliquot) {
      var aliquotInfo = _findAliquotInfo(aliquot);
      var newAliquotsInfo = _findOthersAliquotInfo(aliquot);

      if (aliquotInfo && aliquotInfo.quantity > 1) {
        aliquotInfo.quantity--;
        newAliquotsInfo.push(aliquotInfo);
      }

      self.aliquotsInfo = newAliquotsInfo;
      _generateDataSetForAliquotChart();
    }

    function _removeTubeInfo(tube) {
      var tubeInfo = _findTubeInfo(tube);
      var newTubesInfo = _findOthersTubeInfo(tube);

      if (tubeInfo && tubeInfo.quantity > 1) {
        tubeInfo.quantity--;
        newTubesInfo.push(tubeInfo);
      }

      self.tubesInfo = newTubesInfo;
      _generateDataSetForTubeChart();
    }

    function insertAliquot(aliquotInfo) {
      var newAliquot = WorkAliquot.create(aliquotInfo);
      self.aliquotList.push(newAliquot);
      _addAliquotInfo(newAliquot);
      return newAliquot;
    }

    function insertTube(tubeInfo) {
      var newTube = WorkTube.create(tubeInfo);
      self.tubeList.push(newTube);
      _addTubeInfo(newTube);
      return newTube;
    }

    function removeAliquotByIndex(index) {
      _removeAliquotInfo(self.aliquotList[index]);
      return self.aliquotList.splice(index, 1);
    }

    function removeTubeByIndex(index) {
      _removeTubeInfo(self.tubeList[index]);
      return self.tubeList.splice(index, 1);
    }

    function getAliquotCodeList() {
      var aliquotCodeList = [];
      self.aliquotList.forEach(function (aliquot) {
        aliquotCodeList.push(aliquot.code);
      });
      return aliquotCodeList;
    }

    function getTubeCodeList() {
      var tubeCodeList = [];
      self.tubeList.forEach(function (tube) {
        tubeCodeList.push(tube.code);
      });
      return tubeCodeList;
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

      _generateDataSetForAliquotChart();
    }

    function insertTubeList(tubeList) {
      self.tubeList.push.apply(self.tubeList,
        tubeList.map(function (tube) {
          var workTube = WorkTube.create(tube);
          var tubeInfo = _findTubeInfo(workTube);

          //updates info array
          if (tubeInfo) {
            tubeInfo.quantity++;
          } else {
            self.tubesInfo.push(new TubeInfoModel(workTube));
          }

          return workTube;
        }));

      _generateDataSetForTubeChart();
    }

    function AliquotInfoModel(workAliquot) {
      this.aliquotName = workAliquot.name;
      this.aliquotLabel = workAliquot.label;
      this.role = workAliquot.role;
      this.roleLabel = workAliquot.roleLabel;
      this.quantity = 1;
    }

    function TubeInfoModel(workTube) {
      this.type = workTube.type;
      this.typeLabel = workTube.typeLabel;
      this.moment = workTube.moment;
      this.momentLabel = workTube.momentLabel;
      this.quantity = 1;
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        shipmentDate: self.shipmentDate,
        processingDate: self.processingDate,
        operator: self.operator,
        originLocationPoint: self.originLocationPoint,
        destinationLocationPoint: self.destinationLocationPoint,
        aliquotList: self.aliquotList,
        aliquotsInfo: self.aliquotsInfo.map(function (aliquotInfo) {
          return { aliquotName: aliquotInfo.aliquotName, role: aliquotInfo.role, quantity: aliquotInfo.quantity };
        })
      };

      return json;
    }
  }
}());
