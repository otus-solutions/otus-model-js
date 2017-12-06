fdescribe('the work aliquot factory', function () {
  var Mock = {};
  var factory;

  beforeEach(function () {
    angular.mock.module('otusjs.laboratory');

    inject(function (_$injector_) {
      var injections = {
        '$filter': _$injector_.get(
          '$filter'
        ),
        'LaboratoryConfigurationService': mockLaboratoryConfigurationService(_$injector_)
      };

      factory = _$injector_.get(
        'otusjs.laboratory.WorkAliquotFactory', injections
      );
    });

    mockLabDescriptors();
    Mock.LaboratoryConfigurationService.initializeLaboratoryConfiguration(Mock.LabDescriptors);
    mockAliquotInfo();
  });

  describe("create method", function () {
    beforeEach(function () {
      mockAliquotWork();
    });

    it('should create an WorkAliquot object ', function () {
      expect(Mock.aliquotWork.objectType).toEqual("WorkAliquot");
    });

    it('label should be created ', function () {
      expect(Mock.aliquotWork.label).not.toBe(null);
      expect(Mock.aliquotWork.label).not.toBe(undefined);
      expect(Mock.aliquotWork.label).not.toBe("");
    });
  });


  function mockAliquotWork() {
    Mock.aliquotWork = factory.create(Mock.aliquotInfo);
    console.log(Mock.aliquotWork.getAliquotToCsv());
    
  }

  function mockAliquotInfo() {
    Mock.aliquotInfo = {
      "objectType": "WorkAliquot",
      "code": "333000001",
      "fieldCenter": {
        "name": "Bahia",
        "acronym": "BA",
        "code": 1
      },
      "name": "BIOCHEMICAL_SERUM",
      "container": "CRYOTUBE",
      "role": "EXAM",
      "sex": "F",
      "birthdate": {
        "objectType": "ImmutableDate",
        "value": "1970-09-20 00:00:00.000"
      },
      "aliquotCollectionData": {
        "objectType": "AliquotCollectionData",
        "metadata": "",
        "operator": "fulano.detal@gmail.com",
        "time": "2017-07-27T17:02:51.417Z"
      }
    }
  }

  function mockLaboratoryConfigurationService(_$injector_) {
    Mock.LaboratoryConfigurationService = _$injector_.get(
      'otusjs.laboratory.configuration.LaboratoryConfigurationService');
    return Mock.LaboratoryConfigurationService;
  }

  function mockLabDescriptors() {
    Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
  }
});
