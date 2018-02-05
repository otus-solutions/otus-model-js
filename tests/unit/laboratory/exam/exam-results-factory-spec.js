describe('the exam results factory', function() {
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

      mockExamResultsFactory(_$injector_, injections);
      //TODO: refazer
      // mockLabDescriptors();
      // mockParticipantLaboratory();
      // mockSelectedParticipant();
      // mockExamResults();
      // mockWorkAliquot();
      // service = _$injector_.get(
      //   'otusjs.laboratory.configuration.LaboratoryConfigurationService', {}
      // );
      // service.initializeLaboratoryConfiguration(Mock.LabDescriptors);
      // service.initializeParticipantConfiguration(Mock.SelectedParticipant,
      //   Mock.ParticipantLaboratory.collectGroupName);

    });

  });

  xdescribe('toJSON method', function() {
    beforeEach(function() {
      mockExamResultsJson();
      mockExamResultsFromJson();
    });

    it('expect return from toJson method to equal the mocked JSON',
      function() {
        expect(JSON.stringify(Mock.ExamResultsFromJson)).toEqual(JSON.stringify(
          Mock.ExamResultsJson));
      });

  });

  describe("objectType ExamResults verify ", function() {
    beforeEach(function() {
      mockExamResultsJson();
    });

    it('objectType should be equal "ExamResults" ', function() {
      expect(Mock.ExamResultsJson.objectType).toEqual("ExamResults");
    });


  });

  function mockExamResultsJson() {
    Mock.ExamResultsJson = {
      objectType: 'ExamResults',
      aliquotCode: "354005001",
      examName: "HEMOGRAMA",
      label: "Basofilos",
      value: 32,
      releaseDate: "2018-01-10T09:49:50.000Z"
    }
  }

  function mockExamResultsFactory(_$injector_, injections) {
    Mock.ExamResultsFactory = _$injector_.get(
      'otusjs.laboratory.exam.sending.ExamResults', injections);
  }

  function mockExamResults() {
    Mock.ExamResults = Mock.ExamResultsFactory.create();
  }

  function mockExamResultsFromJson() {
    Mock.ExamResultsFromJson = Mock.ExamResultsFactory.fromJson(Mock.ExamResultsJson);
  }
});
