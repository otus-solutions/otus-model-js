describe('the exam factory', function() {
  var Mock = {};
  var injections;

  beforeEach(function() {
    window.module("otusjs.laboratory.exam.sending");
  });

  beforeEach(function() {
    inject(function(_$injector_) {
      injections = {
        ExamResults: _$injector_.get('otusjs.laboratory.exam.sending.ExamResults'),
        ExamObservation: _$injector_.get('otusjs.laboratory.exam.sending.ExamObservation')

      };
      mockExamFactory(_$injector_, injections);
      mockExam();
      mockExamFromJson();
      mockExamJson();
      mockInsertObservation();
      mockInsertResult();
      mockRemoveResult();
      mockRemoveObservation()
    });
  });

  describe("expect method create been called", function() {

    beforeEach(function() {
      spyOn(Mock.ExamFactory, "create");
      Mock.ExamFactory.create();
    });

    it("should build a factory", function() {
      expect(Mock.ExamFactory.create).toHaveBeenCalled();
      expect(Mock.ExamFactory.create).toBeDefined();
      expect(Mock.ExamFactory.create).not.toBeNull();
    });
  });

  describe("expect method fromJson been called", function() {
    beforeEach(function functionName() {
      spyOn(Mock.ExamFactory, "fromJson");
      Mock.ExamFactory.fromJson(jasmine.any(Object));
    });

    it("should call method fromJson", function() {
      expect(Mock.ExamFactory.fromJson).toHaveBeenCalledWith(jasmine.any(Object));
      expect(Mock.ExamFactory.fromJson).toBeDefined();
      expect(Mock.ExamFactory.fromJson).not.toBeNull();
    });
  });

  describe('toJSON method', function() {
    beforeEach(function() {
      mockExamFromJson();
    });

    it('expect return from toJson method to equal the mocked JSON',
      function() {
        expect(JSON.stringify(Mock.ExamFromJson)).not.toEqual(JSON.stringify(jasmine.any(Object)));
        expect(JSON.stringify(Mock.ExamFromJson)).toEqual(JSON.stringify(Mock.ExamJson.exams));
      });

  });

  describe("insert examResults method", function() {
    it("should insert a observation exam", function() {
      expect(Mock.insertedResult).toBeDefined();
      expect(Mock.insertedResult).not.toBeNull();
      expect(Mock.insertedResult).toEqual(jasmine.any(Object));
    });
  });

  describe("insert observation method", function() {
    it("should insert a observation exam", function() {
      expect(Mock.insertedObservation).toBeDefined();
      expect(Mock.insertedObservation).not.toBeNull();
      expect(Mock.insertedObservation).toEqual(jasmine.any(Object));
    });
  });

  describe("remove examResults method", function() {
    it("should insert a observation exam", function() {
      expect(Mock.removedResultByIndex).toBeDefined();
      expect(Mock.removedResultByIndex).not.toBeNull();
      expect(Mock.removedResultByIndex).toEqual(jasmine.any(Object));
    });
  });

  describe("remove observation method", function() {
    it("should insert a observation exam", function() {
      expect(Mock.removedObservationByIndex).toBeDefined();
      expect(Mock.removedObservationByIndex).not.toBeNull();
      expect(Mock.removedObservationByIndex).toEqual(jasmine.any(Object));
    });
  });

  function mockExamJson() {
    Mock.result = {
      "objectType": "ExamResults",
      "examName": "GLICOSE - SANGUE",
      "aliquotCode": "363027659",
      "resultName": "GLICOSE.................................:",
      "releaseDate": "2017-05-03T13:08:00.000Z",
      "realizationDate": "2017-05-03T13:08:00.000Z",
      "observations": [],
      "value": "93",
      "cutOffValue": "55",
      "extraVariables": [
        {"name": "VAR_1", "value": "firstValue"}
      ],
      "aliquotValid": true
    };
    Mock.obs = {
      objectType: "ExamObservation",
      name: "",
      value: ""
    }
    Mock.ExamJson = {
      "examSendingLot": {
        "objectType": "ExamLot",
        "operator": "diogo.rosas.ferreira@gmail.com",
        "fileName": "exams-existents.json",
        "realizationDate": "2018-02-01T13:20:59.383Z",
        "resultsQuantity": "",
        "fieldCenter": {
          "acronym": "SP"
        },
        "forcedSave": false,
        "_id": "16541321616",
      },
      "exams": [{
        "objectType": "Exam",
        "name": "GLICOSE - SANGUE",
        "examResults": [{
          "objectType": "ExamResults",
          "examName": "GLICOSE - SANGUE",
          "code": "363027659",
          "resultName": "GLICOSE.................................:",
          "releaseDate": "2017-05-03T13:08:00.000Z",
          "realizationDate": "2017-05-03T13:08:00.000Z",
          "observations": [],
          "value": "93",
          "cutOffValue": "55",
          "extraVariables": [
            {name: "VAR_1", value: "firstValue"}
          ],
          "isValid": true
        }],
        "observations": []
      }]
    };

  }



  function mockExamFactory(_$injector_, injections) {
    // Mock.ExamLot = _$injector_.get('otusjs.laboratory.exam.sending.ExamLot');
    // Mock.Exams = _$injector_.get('otusjs.laboratory.exam.sending.Exam');
    Mock.ExamFactory = _$injector_.get(
      'otusjs.laboratory.exam.sending.Exam', injections);
  }

  function mockExam() {
    Mock.Exam = Mock.ExamFactory.create();
  }

  function mockExamFromJson() {
    mockExamJson();
    Mock.ExamFromJson = Mock.ExamFactory.fromJson(Mock.ExamJson.exams);
  }

  function mockInsertObservation() {
    Mock.insertedObservation = Mock.Exam.insertObservation(Mock.obs);
  }

  function mockInsertResult() {
    Mock.insertedResult = Mock.Exam.insertResult(Mock.result);
  }

  function mockRemoveResult() {
    mockInsertResult();
    Mock.removedResultByIndex = Mock.Exam.removeResultByIndex(jasmine.any(Number));
  }

  function mockRemoveObservation() {
    mockInsertObservation();
    Mock.removedObservationByIndex = Mock.Exam.removeObservationByIndex(jasmine.any(Number));
  }
  //
  // function mockGetExamList() {
  //   mockExamFromJson();
  //   mockInsertExam();
  //   Mock.getExams = Mock.ExamFromJson.getExamList();
  // }

  // function mockExamResults() {
  //   var injections = {
  //     ExamObservation: _$injector_.get("otusjs.laboratory.exam.sending.ExamObservation")
  //   };
  //   Mock.ExamResultsFactory = _$injector_.get(
  //     'otusjs.laboratory.exam.sending.ExamResults', injections);
  // }

});
