describe('TubeCollectionDataFactory_Suite_Test', function() {
  var Mock = {};
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    angular.mock.inject(function($injector) {
      factory = $injector.get('otusjs.laboratory.participant.TubeCollectionDataFactory');
    });

    _mockInitialize();
  });

  describe("create_method", function() {
    beforeEach(function() {
      spyOn(factory, 'create').and.callThrough();
    });

    it('should_create_a_ParticipantTubeFactory_object ', function() {
      expect(factory.create.calls.any()).toEqual(false);
      var item = factory.create(Mock.tubeCollectionData);

      expect(factory.create.calls.any()).toEqual(true);
      expect(factory.create).toHaveBeenCalled();
      expect(factory.create).toHaveBeenCalledWith(Mock.tubeCollectionData);
      expect(item.objectType).toEqual('TubeCollectionData');
    });
  });

  describe("customMetadata_methods", function() {
    var tubeCollectionData;

    beforeEach(function () {
      tubeCollectionData = factory.create(Mock.tubeCollectionData);
      expect(tubeCollectionData.customMetadata).toBeDefined();
      expect(tubeCollectionData.customMetadata.length).toBe(1);
    });

    it('pushCustomMetadata_method_should_add_element_in_customMetadata_array', function() {
      tubeCollectionData.pushCustomMetadata("");
      expect(tubeCollectionData.customMetadata.length).toBe(2);
    });

    it('removeCustomMetadata_method_should_remove_element_from_customMetadata_array', function() {
      tubeCollectionData.removeCustomMetadata(tubeCollectionData.customMetadata[0]);
      expect(tubeCollectionData.customMetadata.length).toBe(0);
    });

  });

  function _mockInitialize() {
    Mock.SelectedParticipant = angular.copy(Test.utils.data.selectedParticipant); //json-importer.js
    Mock.ParticipantLaboratory = angular.copy(Test.utils.data.participantLaboratory); //json-importer.js
    Mock.LabDescriptors = angular.copy(Test.utils.data.laboratoryConfiguration); //json-importer.js
    Mock.tubeCollectionData = angular.copy(Test.utils.data.participantLaboratory.tubes[0].tubeCollectionData);
  }
});
