describe('the transportation lot factory', function() {
  var CODE_LIST_EXPECTED = ["363125891", "363125892", "363321321"];
  var Mock = {};
  var service;
  var selectLotAliquot;

  selectLotAliquot = [{
    "objectType": "TransportationLot",
    "code": "300000083",
    "aliquotList": [{
      "recruitmentNumber": 1063154,
      "objectType": "WorkAliquot",
      "code": "363125891",
      "name": "FASTING_SERUM",
      "container": "CRYOTUBE",
      "role": "STORAGE"
    }, {
      "recruitmentNumber": 1063154,
      "objectType": "WorkAliquot",
      "code": "363125892",
      "name": "FASTING_SERUM",
      "container": "CRYOTUBE",
      "role": "STORAGE"
    }, {
      "recruitmentNumber": 1063154,
      "objectType": "WorkAliquot",
      "code": "363321321",
      "name": "HBA1C",
      "container": "CRYOTUBE",
      "role": "EXAM"
    }]
  }];


  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    inject(function(_$injector_) {

      var injections = {
        'WorkAliquot': _$injector_.get(
          'otusjs.laboratory.WorkAliquotFactory'
        )
      };

      mockTransportationLotFactory(_$injector_, injections);
      mockLabDescriptors();
      mockParticipantLaboratory();
      mockSelectedParticipant();
      mockTransportationLot();
      mockWorkAliquot();
      service = _$injector_.get(
        'otusjs.laboratory.configuration.LaboratoryConfigurationService', {}
      );
      service.initializeLaboratoryConfiguration(Mock.LabDescriptors);
      service.initializeParticipantConfiguration(Mock.SelectedParticipant,
        Mock.ParticipantLaboratory.collectGroupName);
    });
  });

  describe('insertAliquot method', function() {

    beforeEach(function() {
      Mock.lot.insertAliquot(Mock.workAliquot);
    });

    it('inserted Aliquot should have objectType equal to WorkAliquot',
      function() {
        expect(Mock.lot.aliquotList[0].objectType).toBe('WorkAliquot');
      });

    it('inserted Aliquot should have name equal to BIOCHEMICAL_SERUM',
      function() {
        expect(Mock.lot.aliquotList[0].name).toBe('BIOCHEMICAL_SERUM');
      });

    it('inserted Aliquot should have role equal to EXAM', function() {
      expect(Mock.lot.aliquotList[0].role).toBe('EXAM');
    });

    it('inserted Aliquot should have code equal to 333000001', function() {
      expect(Mock.lot.aliquotList[0].code).toBe('333000001');
    });

    it('inserted Aliquot should have container equal to CRYOTUBE',
      function() {
        expect(Mock.lot.aliquotList[0].container).toBe('CRYOTUBE');
      });

  });

  describe('removeAliquotByIndex method', function() {

    beforeEach(function() {
      mockWorkAliquot2();
      Mock.lot.insertAliquot(Mock.workAliquot);
      Mock.lot.insertAliquot(Mock.workAliquot2);
    });

    it('should remove 1 Aliquot from de list', function() {
      Mock.lot.removeAliquotByIndex(0);
      expect(Mock.lot.aliquotList.length).toBe(1);
    });

    it('should remove Aliquot with code equal to 333000002', function() {
      Mock.lot.removeAliquotByIndex(0);
      expect(Mock.lot.aliquotList[0].code).toBe('333000002');
    });

  });

  describe('toJSON method', function() {

    beforeEach(function() {
      mockTransportationLotJson();
      mockTransportationLotFromJson();
    });

    it('expect return from toJson method to equal the mocked JSON',
      function() {
        expect(JSON.stringify(Mock.lotFromJson)).toEqual(JSON.stringify(
          Mock.LotJson));
      });

  });

  describe('_fillAliquotInfoLabel method', function() {
    beforeEach(function() {
      mockLotWithAliquotFromJSON();
    });

    it('aliquotInfo should have aliquotName attribute',function() {
      expect(Mock.lotWithAliquotFromJSON.aliquotsInfo[0].aliquotLabel).not.toBeUndefined();
    });

    it('aliquotInfo should have roleLabel attribute',function() {
      expect(Mock.lotWithAliquotFromJSON.aliquotsInfo[0].roleLabel).not.toBeUndefined();
    });
  });

  describe('_generateDataSetForChart method', function() {
    beforeEach(function() {
      mockLotWithAliquotFromJSON();
    });

    it('chartDataSet should have labels',function() {
      expect(Mock.lotWithAliquotFromJSON.chartAliquotDataSet.labels[0]).not.toBeUndefined();
    });

    it('chartDataSet should have data',function() {
      expect(Mock.lotWithAliquotFromJSON.chartAliquotDataSet.data[0]).not.toBeUndefined();
    });
  });

  describe('_addAliquotInfo method', function() {
    beforeEach(function() {
      mockLotWithAliquotFromJSON();
      mockWorkAliquot();
    });

    it('should have BIOCHEMICAL_SERUM whith quantity equal 2 in aliquotsInfo', function() {
      Mock.lotWithAliquotFromJSON.insertAliquot(Mock.workAliquot);
      expect(Mock.lotWithAliquotFromJSON.aliquotsInfo[0].aliquotName).toBe('BIOCHEMICAL_SERUM');
      expect(Mock.lotWithAliquotFromJSON.aliquotsInfo[0].quantity).toBe(2);
    });

    it('should have BIOCHEMICAL_SERUM whith quantity equal 3 in aliquotsInfo', function() {
      Mock.lotWithAliquotFromJSON.insertAliquot(Mock.workAliquot);
      Mock.lotWithAliquotFromJSON.insertAliquot(Mock.workAliquot);
      expect(Mock.lotWithAliquotFromJSON.aliquotsInfo[0].aliquotName).toBe('BIOCHEMICAL_SERUM');
      expect(Mock.lotWithAliquotFromJSON.aliquotsInfo[0].quantity).toBe(3);
    });
  });

  describe('_removeAliquotInfo method', function() {
    beforeEach(function() {
      mockLotWithAliquotFromJSON();
      Mock.lotWithAliquotFromJSON.insertAliquot(Mock.workAliquot);
    });

    it('should have BIOCHEMICAL_SERUM whith quantity equal 1 in aliquotsInfo', function() {
      Mock.lotWithAliquotFromJSON.removeAliquotByIndex(0);
      expect(Mock.lotWithAliquotFromJSON.aliquotsInfo[0].quantity).toBe(1);
    });

    it('not should have aliquotsInfo', function() {
      Mock.lotWithAliquotFromJSON.removeAliquotByIndex(0);
      Mock.lotWithAliquotFromJSON.removeAliquotByIndex(0);
      expect(Mock.lotWithAliquotFromJSON.aliquotsInfo.length).toBe(0);
    });
  });

  describe('getAliquotCodeListMethod', function () {

    it('should deliver a code list of aliquots', function () {
      var aliquotCodeList = [];
      selectLotAliquot[0].aliquotList.forEach(function (aliquot) {
        aliquotCodeList.push(aliquot.code);
      });
      expect(aliquotCodeList).toEqual(CODE_LIST_EXPECTED);
    });
  });

  describe('the insertAliquotList method', function () {
    beforeEach(function () {
      mockWorkAliquot();
      mockLotWithAliquotFromJSON();
      Mock.lotWithAliquotFromJSON.aliquotsInfo = [];
      Mock.lotWithAliquotFromJSON.aliquotList = [];

      Mock.lotWithAliquotFromJSON.insertAliquotList([Mock.workAliquot]);
    });

    it('should update the aliquotList array', function () {

      expect(Mock.lotWithAliquotFromJSON.aliquotList.length).toEqual(1);
      expect(Mock.lotWithAliquotFromJSON.aliquotList[0].name).toEqual(Mock.workAliquot.name);
    });


    it('should update the aliquotInfo array', function () {

      var found = Mock.lotWithAliquotFromJSON.aliquotsInfo.find(function (aliquotInfo) {
        return aliquotInfo.aliquotName === Mock.workAliquot.name;
      });
      expect(found).toBeDefined();
      expect(found.quantity).toEqual(1);
    });
  });

  function mockTransportationLotJson() {
    Mock.LotJson = {
      _id: null,
      objectType: "TransportationLot",
      code: "30513515",
      shipmentDate: "2017-09-21T15:36:56.929Z",
      processingDate: "2017-09-21T15:36:56.929Z",
      operator: "teste@email.com",
      originLocationPoint: '',
      destinationLocationPoint: '',
      tubeList: [],
      aliquotList: [],
      aliquotsInfo: [],
      tubesInfo: []
    }
  }

  function mockLotWithAliquotJSON() {
    if(!Mock.workAliquot) mockWorkAliquot();
    mockAliquotInfo();

    Mock.LotWithAliquotJSON = {
      _id: null,
      objectType: "TransportationLot",
      code: "30513515",
      shipmentDate: "2017-09-21T15:36:56.929Z",
      processingDate: "2017-09-21T15:36:56.929Z",
      operator: "teste@email.com",
      tubeList: [],
      aliquotList: [
        Mock.workAliquot
      ],
      aliquotsInfo: [
        Mock.AliquotInfo
      ],
      tubesInfo: []
    }
  }

  function mockTransportationLotFactory(_$injector_, injections) {
    Mock.LotFactory = _$injector_.get(
      'otusjs.laboratory.transportation.LotFactory', injections);
  }

  function mockTransportationLot() {
    Mock.lot = Mock.LotFactory.create();
  }

  function mockTransportationLotFromJson() {
    Mock.lotFromJson = Mock.LotFactory.fromJson(Mock.LotJson);
  }

  function mockLotWithAliquotFromJSON() {
    mockLotWithAliquotJSON();
    Mock.lotWithAliquotFromJSON = Mock.LotFactory.fromJson(Mock.LotWithAliquotJSON);
  }

  function mockLabDescriptors() {
    Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
  }

  function mockWorkAliquot() {
    Mock.workAliquot = Test.utils.data.workAliquotsList[0]; //json-importer
  }

  function mockWorkAliquot2() {
    Mock.workAliquot2 = Test.utils.data.workAliquotsList[1]; //json-importer
  }

  function mockAliquotInfo() {
    mockWorkAliquot();
    Mock.AliquotInfo = { aliquotName: Mock.workAliquot.name, role: "EXAM", quantity: 1 };
  }

  function mockParticipantLaboratory() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockSelectedParticipant() {
    Mock.SelectedParticipant = Test.utils.data.selectedParticipant; //json-importer.js
  }

});
