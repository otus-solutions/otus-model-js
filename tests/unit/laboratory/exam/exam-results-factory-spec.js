describe('the exam results factory', function() {
  var Mock = {};
  var injections;


  beforeEach(function() {
    angular.mock.module("otusjs.laboratory.exam.sending");

    inject(function(_$injector_) {
      var injections = {
        ExamObservation: _$injector_.get("otusjs.laboratory.exam.sending.ExamObservation")
      };
      mockExamResultsFactory(_$injector_, injections);
      mockExamResults();
      mockExamResultsFromJson(jasmine.any(Object));
      mockExamResultsJson();
      mockObservation();
      mockInsertObservation();
      mockRemoveObservation();
    });
  });

  describe("expect method create been called", function() {
    var _obj;
     beforeEach(function() {
      spyOn(Mock.ExamResultsFactory, "create");
      Mock.ExamResultsFactory.create();
      mockExamResultsJson();
    });

    it("should build a factory", function() {
      expect(Mock.ExamResultsFactory.create).toHaveBeenCalled();
      expect(Mock.ExamResultsFactory.create).not.toHaveBeenCalledWith(jasmine.any(Object));
      expect(Mock.ExamResultsFactory.create).not.toHaveBeenCalledWith(Mock.ExamResultsJsonNotValue);
      expect(Mock.ExamResultsFactory.create).toBeDefined();
      expect(Mock.ExamResultsFactory).toEqual(jasmine.any(Object));
    });
  });

  describe("expect method fromJson been called", function() {
    beforeEach(function functionName() {
      spyOn(Mock.ExamResultsFactory, "fromJson");
      Mock.ExamResultsFactory.fromJson(jasmine.any(Object));
      mockExamResultsJson();
    });

    it("should call method fromJson", function() {
      expect(Mock.ExamResultsFactory.fromJson).toHaveBeenCalled();
      expect(Mock.ExamResultsFactory.fromJson).toHaveBeenCalledWith(jasmine.any(Object));
      expect(Mock.ExamResultsFactory.fromJson).toHaveBeenCalledWith(Mock.ExamResultsJson);
      expect(Mock.ExamResultsFactory.fromJson).toBeDefined();
      expect(Mock.ExamResultsFactory.fromJson).not.toBe(null);
    });
  });

  describe('toJSON method', function() {
    beforeEach(function() {
      mockExamResultsJson();
      mockExamResultsFromJson(Mock.ExamResultsJson);
    });

    it('expect return from toJson method to equal the mocked JSON',
      function() {
        expect(JSON.stringify(Mock.ExamResultsFromJson)).toEqual(JSON.stringify(Mock.ExamResultsJson));
      });

    });


  describe("objectType ExamResults verify ", function() {
    it('objectType should be equal "ExamResults" ', function() {
      expect(Mock.ExamResultsJson[0].objectType).toEqual("ExamResults");
    });
 });

 describe("insert observation method",function() {
   it("should insert a observation exam", function() {
     expect(Mock.insertObservation).toBeDefined();
     expect(Mock.insertObservation).not.toBeNull();
     expect(Mock.insertObservation).toEqual(jasmine.any(Object));
   });
 });

 describe("remove observation method",function() {
   it("should insert a observation exam", function() {
     expect(Mock.removeObservation).toBeDefined();
     expect(Mock.removeObservation).not.toBeNull();
     expect(Mock.removeObservation).toEqual(jasmine.any(Object));
   });
 });

  function mockExamResultsJson() {
    Mock.ExamResultsJson = [{
      objectType: 'ExamResults',
      examName: "HEMOGRAMA",
      observations: Mock.observation,
      aliquotCode: "354005001",
      resultName: "Basofilos",
      releaseDate: "2018-01-10T09:49:50.000Z",
      observations: [],
      value: 32,
      aliquotValid: true
    }];
  }

  function mockObservation() {
    Mock.observation = [{
      name: "OBS",
      value: 123
    }]
  }

  function mockExamResultsFactory(_$injector_, injections) {
    Mock.ExamResultsFactory = _$injector_.get(
      'otusjs.laboratory.exam.sending.ExamResults', injections);
  }

  function mockExamResults() {
    Mock.ExamResults = Mock.ExamResultsFactory.create();
  }

  function mockExamResultsFromJson(json) {
    Mock.ExamResultsFromJson = Mock.ExamResultsFactory.fromJson(json);
  }

  function mockInsertObservation() {
    Mock.insertObservation = Mock.ExamResults.insertObservation(Mock.observation);
  }

  function mockRemoveObservation() {
    Mock.removeObservation = Mock.ExamResults.removeObservationByIndex(jasmine.any(Number));
  }
});
