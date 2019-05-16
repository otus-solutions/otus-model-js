describe('ParticipantAliquotFactory', function() {
  var Mock = {};
  var Injections = [];
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    inject(function(_$injector_) {
      Injections.AliquotCollectionDataFactory = _$injector_.get('otusjs.laboratory.participant.AliquotCollectionDataFactory');
      Injections.HistoryRoleFactory = _$injector_.get('otusjs.laboratory.participant.aliquot.HistoryRoleFactory');
      Injections.LaboratoryConfigurationService = _$injector_.get('otusjs.laboratory.configuration.LaboratoryConfigurationService');

    factory = _$injector_.get('otusjs.laboratory.participant.ParticipantAliquotFactory', Injections);
  });

  mockSelectedParticipant();
  mockLabDescriptors();
  mockParticipantLaboratory();
  mockSingleTube();
  mockAliquotInfo();
  Injections.LaboratoryConfigurationService.initializeLaboratoryConfiguration(Mock.LabDescriptors);

  spyOn(Injections.AliquotCollectionDataFactory, 'create').and.callThrough();
  spyOn(Injections.HistoryRoleFactory, 'fromArray').and.callThrough();
});

  it('fatoryExistence check',function () {
    expect(factory).toBeDefined();
  });

  it('factoryMethodsExistence_check', function () {
    expect(factory.create).toBeDefined();
    expect(factory.fromJSON).toBeDefined();
  });

describe('the creation method', function() {

  beforeEach(function() {
    mockAliquotInfo();
    mockAliquot();
  });

  it('should create an aliquot typed object', function() {
    expect(Mock.aliquot.objectType).toEqual('Aliquot');
  });

  it('createMethod injection should have been evoked', function () {
    expect(Injections.AliquotCollectionDataFactory.create).toHaveBeenCalledTimes(1);
  });

  it('fromArrayMethod injection should have been evoked', function () {
    expect(Injections.HistoryRoleFactory.fromArray).toHaveBeenCalledTimes(1);
  });

  it('should generate the same values for this fields', function() {
    expect(Mock.aliquot.objectType).toEqual(Mock.aliquotInfo.objectType);
    expect(Mock.aliquot.code).toEqual(Mock.aliquotInfo.code);
    expect(Mock.aliquot.name).toEqual(Mock.aliquotInfo.name);
    expect(Mock.aliquot.container).toEqual(Mock.aliquotInfo.container);
    expect(Mock.aliquot.role).toEqual(Mock.aliquotInfo.role);
    expect(Mock.aliquot.isConverted).toBeFalsy();
    expect(Mock.aliquot.history).toEqual(Mock.aliquotInfo.history);
  });
});

describe('the fromJSON method', function() {
  beforeEach(function() {
    mockAliquotFromJson();
  });

  it('should create an aliquot typed object', function() {
    expect(Mock.AliquotFromJson[0].objectType).toEqual('Aliquot');
  });

  it('should generate the same values for this fields', function() {
    expect(Mock.AliquotFromJson[0].objectType).toEqual(Mock.aliquotInfo.objectType);
    expect(Mock.AliquotFromJson[0].code).toEqual(Mock.aliquotInfo.code);
    expect(Mock.AliquotFromJson[0].name).toEqual(Mock.aliquotInfo.name);
    expect(Mock.AliquotFromJson[0].container).toEqual(Mock.aliquotInfo.container);
    expect(Mock.AliquotFromJson[0].role).toEqual(Mock.aliquotInfo.role);
  });
});

describe('the Aliquot descriptor filler', function() {
  var aliquot;
  var aliquotDescriptor;
  beforeEach(function() {
    aliquot = factory.create(Mock.aliquotInfo, Mock.singleTube);
    aliquotDescriptor = Injections.LaboratoryConfigurationService
      .getAliquotDescriptor(Mock.aliquotInfo.name, Mock.singleTube.moment,
        Mock.singleTube.type, Mock.singleTube.groupName);
  });

  it('should attrib the right label for the given aliquot', function() {
    expect(aliquot.label).toEqual(aliquotDescriptor.label);
  });

});

function mockSelectedParticipant() {
  Mock.SelectedParticipant = angular.copy(Test.utils.data.selectedParticipant); //json-importer.js
}

function mockParticipantLaboratory() {
  Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
}

function mockLabDescriptors() {
  Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
}

function mockSingleTube() {
  Mock.singleTube = Mock.ParticipantLaboratory.tubes[0];
}

function mockAliquotInfo() {
  Mock.aliquotInfo = Mock.singleTube.aliquots[0];
}

function mockAliquot() {
  Mock.aliquot = factory.create(Mock.aliquotInfo, Mock.singleTube);
}

function mockAliquotFromJson() {
  var aliquotsArray = [Mock.ParticipantLaboratory.tubes[0].aliquots[0]];
  Mock.AliquotFromJson = factory.fromJSON(aliquotsArray, Mock.singleTube);
}

});
