describe('the transportation lot factory', function() {
  var Mock = {};
  var service;

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

    it('inserted Aliquot should have fieldCenter name equal to Bahia',
      function() {
        expect(Mock.lot.aliquotList[0].fieldCenter.name).toBe('Bahia');
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
      expect(Mock.lotWithAliquotFromJSON.chartDataSet.labels[0]).not.toBeUndefined();
    });

    it('chartDataSet should have data',function() {
      expect(Mock.lotWithAliquotFromJSON.chartDataSet.data[0]).not.toBeUndefined();
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

  function mockTransportationLotJson() {
    Mock.LotJson = {
      objectType: "TransportationLot",
      code: "30513515",
      fieldCenter: {
        name: "Bahia",
        acronym: "BA",
        code: 1
      },
      shipmentDate: "2017-09-21T15:36:56.929Z",
      processingDate: "2017-09-21T15:36:56.929Z",
      operator: "teste@email.com",
      aliquotList: [],
      aliquotsInfo: []
    }
  }

  function mockLotWithAliquotJSON() {
    if(!Mock.workAliquot) mockWorkAliquot();
    mockAliquotInfo();

    Mock.LotWithAliquotJSON = {
      objectType: "TransportationLot",
      code: "30513515",
      fieldCenter: {
        name: "Bahia",
        acronym: "BA",
        code: 1
      },
      shipmentDate: "2017-09-21T15:36:56.929Z",
      processingDate: "2017-09-21T15:36:56.929Z",
      operator: "teste@email.com",
      aliquotList: [
        Mock.workAliquot
      ],
      aliquotsInfo: [
        Mock.AliquotInfo
      ]
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

  function mockAliquotInfo2() {
    if(!Mock.workAliquot2) mockWorkAliquot2();
    Mock.AliquotInfo2 = { aliquotName: Mock.workAliquot2.name, quantity: 1 };
  }

  function mockParticipantLaboratory() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockSelectedParticipant() {
    Mock.SelectedParticipant = Test.utils.data.selectedParticipant; //json-importer.js
  }

});
