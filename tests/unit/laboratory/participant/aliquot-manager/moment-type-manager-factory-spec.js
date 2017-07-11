fdescribe('moment type manager factory', function(a) {
  var Mock = {};
  var manager;
  var $scope;

  beforeEach(function() {
    module('otusjs.laboratory');

    inject(function(_$injector_, $q, _$rootScope_) {
      var injections = {
        '$q': $q
      };
      $scope = _$rootScope_.$new()
      factory = _$injector_.get('otusjs.laboratory.MomentTypeManagerFactory', injections);
    });

    mockParticipantLaboratory();
    mockSingleTube();
    mockAnsweredAliquot();

    manager = factory.create(Mock.singleTube);
  });

  it('should', function() {
    manager.persist(Mock.AnsweredAliquots, true)
      .then(function(asd) {
        console.log('asd');
      });
    $scope.$apply();
  });

  function mockParticipantLaboratory() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockLabDescriptors() {
    Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
  }

  function mockSingleTube() {
    Mock.singleTube = Mock.ParticipantLaboratory.tubes[0];
  }

  function mockAnsweredAliquot() {
    Mock.AnsweredAliquots =  [
      {
        "aliquotCode": "342002521",
        "tubeCode": "341002263",
        "container": "",
        "placeholder": "341002263",
        "aliquotMessage": "",
        "tubeMessage": "",
        "isSaved": false,
        "name": "PCR",
        "label": "PCR",
        "aliquotId": "examAliquot1",
        "tubeId": "examTube1",
        "role": "exam",
        "index": 1
  },
      {
        "aliquotCode": "342002522",
        "tubeCode": "341002263",
        "container": "",
        "placeholder": "341002263",
        "aliquotMessage": "",
        "tubeMessage": "",
        "isSaved": false,
        "name": "FASTING_INSULINE",
        "label": "Insulina Jejum",
        "aliquotId": "examAliquot2",
        "tubeId": "examTube2",
        "role": "exam",
        "index": 2
  },
      {
        "aliquotCode": "342002523",
        "tubeCode": "341002263",
        "container": "",
        "placeholder": "341002263",
        "aliquotMessage": "",
        "tubeMessage": "",
        "isSaved": false,
        "name": "STORAGE",
        "label": "Armazenamento",
        "aliquotId": "storageAliquot2",
        "tubeId": "storageTube2",
        "role": "storage",
        "index": 2
  }
];

  }
});
