describe('the exam lot factory', function() {
  var Mock = {};
  var service;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    inject(function(_$injector_) {

      var injections = {
        '$filter': _$injector_.get(
          '$filter'
        )
      };

      mockExamLotFactory(_$injector_, injections);
      mockLabDescriptors();
      mockParticipantLaboratory();
      mockSelectedParticipant();
      mockExamLot();
      mockAliquot();
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
      Mock.ExamLot.aliquotList=[];
      Mock.ExamLot.insertAliquot(Mock.Aliquot);
    });

    it('inserted Aliquot should have name equal to BIOCHEMICAL_SERUM',
      function() {
        expect(Mock.ExamLot.aliquotList[0].name).toBe('BIOCHEMICAL_SERUM');
      });

    it('inserted Aliquot should have fieldCenter name equal to Bahia',
      function() {
        expect(Mock.ExamLot.aliquotList[0].fieldCenter.name).toBe('Bahia');
      });

    it('inserted Aliquot should have role equal to EXAM', function() {
      expect(Mock.ExamLot.aliquotList[0].role).toBe('EXAM');
    });

    it('inserted Aliquot should have code equal to 333000001', function() {
      expect(Mock.ExamLot.aliquotList[0].code).toBe('333000001');
    });

    it('inserted Aliquot should have container equal to CRYOTUBE',
      function() {
        expect(Mock.ExamLot.aliquotList[0].container).toBe('CRYOTUBE');
      });

  });

  describe('removeAliquotByIndex method', function() {

    beforeEach(function() {
      mockAliquot2();
      Mock.ExamLot.aliquotList=[];
      Mock.ExamLot.insertAliquot(Mock.Aliquot);
      Mock.ExamLot.insertAliquot(Mock.Aliquot2);
    });

    it('should remove 1 Aliquot from de list', function() {
      Mock.ExamLot.removeAliquotByIndex(0);
      expect(Mock.ExamLot.aliquotList.length).toBe(1);
    });

    it('should remove Aliquot with code equal to 333000002', function() {
      Mock.ExamLot.removeAliquotByIndex(0);
      expect(Mock.ExamLot.aliquotList[0].code).toBe('333000002');
    });

  });

  describe('toJSON method', function() {
    beforeEach(function() {
      mockExamLotJson();
      mockExamLotFromJson();
    });

    it('expect return from toJson method to equal the mocked JSON',
      function() {
        expect(JSON.stringify(Mock.ExamLotFromJson)).toEqual(JSON.stringify(
          Mock.ExamLotJson));
      });

  });


  describe("setAliquotName method ", function () {
    beforeEach(function () {
      mockExamLotJson();
      mockExamLotFromJson();
    });

    it('aliquotName should be equal BIOCHEMICAL_SERUM ', function () {
      expect(Mock.ExamLotFromJson.aliquotName).toEqual("BIOCHEMICAL_SERUM");
    });

    it('aliquotName should be equal FASTING_SERUM ', function () {
      Mock.ExamLotFromJson.setAliquotName("FASTING_SERUM");
      expect(Mock.ExamLotFromJson.aliquotName).toEqual("FASTING_SERUM");
    });
  });


  describe("_updateAliquotLabel method ", function () {
    beforeEach(function () {
      mockExamLotJson();
      mockExamLotFromJson();
    });

    it('aliquotLabel should be equal "Bioquímica Soro" ', function () {
      expect(Mock.ExamLotFromJson.aliquotLabel).toEqual("Bioquímica Soro");
    });

    it('aliquotLabel should be equal "Soro Jejum" ', function () {
      Mock.ExamLotFromJson.setAliquotName("FASTING_SERUM");
      expect(Mock.ExamLotFromJson.aliquotLabel).toEqual("Soro Jejum");
    });
  });


  describe("getAliquotsToCsv method ", function () {
    beforeEach(function () {
      Mock.ExamLot.aliquotList=[];
      Mock.ExamLot.insertAliquot(Mock.Aliquot);
      mockAliquotStructuresToCsv();
    });

    it('should have the aliquota attribute on object ', function () {
      expect(Mock.AliquotStructuresToCsv[0].aliquota).not.toBeUndefined();
    });

    it('should have the sexo attribute on object ', function () {
      expect(Mock.AliquotStructuresToCsv[0].sexo).not.toBeUndefined();
    });

    it('should have the nascimento attribute on object ', function () {
      expect(Mock.AliquotStructuresToCsv[0].nascimento).not.toBeUndefined();
    });
  });


  function mockExamLotJson() {
    Mock.ExamLotJson = {
      objectType: "ExamLot",
      _id: "",
      code: "30513515",
      aliquotName: "BIOCHEMICAL_SERUM",
      fieldCenter: {
        name: "Bahia",
        acronym: "BA",
        code: 1
      },
      realizationDate: "2017-09-21T15:36:56.929Z",
      operator: "teste@email.com",
      aliquotList: []
    }
  }

  function mockExamLotFactory(_$injector_, injections) {
    Mock.ExamLotFactory = _$injector_.get(
      'otusjs.laboratory.exam.ExamLotFactory', injections);
  }

  function mockExamLot() {
    Mock.ExamLot = Mock.ExamLotFactory.create();
  }

  function mockExamLotFromJson() {
    Mock.ExamLotFromJson = Mock.ExamLotFactory.fromJson(Mock.ExamLotJson);
  }

  function mockLabDescriptors() {
    Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
  }

  function mockAliquot() {
    Mock.Aliquot = Test.utils.data.workAliquotsList[0]; //json-importer
  }

  function mockAliquot2() {
    Mock.Aliquot2 = Test.utils.data.workAliquotsList[1]; //json-importer
  }

  function mockAliquotStructuresToCsv() {
    Mock.AliquotStructuresToCsv = Mock.ExamLot.getAliquotsToCsv(); //json-importer
  }

  function mockParticipantLaboratory() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockSelectedParticipant() {
    Mock.SelectedParticipant = Test.utils.data.selectedParticipant; //json-importer.js
  }
});
