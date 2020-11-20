describe('ParticipantTubeFactory Suite Test', function() {
  var Injections = [];
  var factory;
  var Mock = {};

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    angular.mock.inject(($injector) => {
      Injections.TubeCollectionDataFactory = $injector.get('otusjs.laboratory.participant.TubeCollectionDataFactory');
      Injections.ParticipantAliquotFactory = $injector.get('otusjs.laboratory.participant.ParticipantAliquotFactory');
      Injections.LaboratoryConfigurationService = $injector.get('otusjs.laboratory.configuration.LaboratoryConfigurationService');

      factory = $injector.get('otusjs.laboratory.participant.ParticipanTubeFactory', Injections);
    });

    spyOn(Injections.TubeCollectionDataFactory, 'create').and.callThrough();
    spyOn(Injections.ParticipantAliquotFactory, 'create').and.callThrough();

    _mockInitialize();

    Injections.LaboratoryConfigurationService.initializeParticipantConfiguration(Mock.SelectedParticipant, "DEFAULT");
    Injections.LaboratoryConfigurationService.initializeLaboratoryConfiguration(Mock.LabDescriptors);
  });

  describe("create method", function() {
    it('should_create_a_ParticipantTubeFactory_object', function() {
      var object = factory.create(Mock.singleTube, Mock.LoggedUser);
      expect(object.objectType).toEqual("Tube");
    });
  });

  describe("buildFromArray_method", function() {
    it('should_build_a_tube_from_Array', function() {
      var object = factory.buildFromArray([Mock.singleTube], Mock.LoggedUser);
      spyOn(factory, 'buildFromArray').and.callThrough();
      expect(object[0].objectType).toEqual("Tube");
    });
  });

  describe("tube_customMetadata_methods", function() {
    var tube;

    beforeEach(function () {
      tube = factory.create(Mock.singleTube, Mock.LoggedUser);
    });

    it('pushCustomMetadata_method_should_add_element_in_customMetadata_array', function() {
      tube.pushCustomMetadata("");
      expect(tube.tubeCollectionData.customMetadata.length).toBe(2);
    });

    it('removeCustomMetadata_method_should_remove_element_from_customMetadata_array', function() {
      tube.removeCustomMetadata(tube.tubeCollectionData.customMetadata[0]);
      expect(tube.tubeCollectionData.customMetadata.length).toBe(0);
    });
  });


  function _mockInitialize() {
    Mock.SelectedParticipant = angular.copy(Test.utils.data.selectedParticipant); //json-importer.js
    Mock.ParticipantLaboratory = angular.copy(Test.utils.data.participantLaboratory); //json-importer.js
    Mock.LabDescriptors = angular.copy(Test.utils.data.laboratoryConfiguration); //json-importer.js
    Mock.singleTube = angular.copy(Mock.ParticipantLaboratory.tubes[0]);
    Mock.LoggedUser = angular.copy(Test.utils.data.otusLoggedUser);
  }
});
