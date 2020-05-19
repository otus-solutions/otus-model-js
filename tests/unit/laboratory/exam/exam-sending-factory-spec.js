describe('the exam sending factory', function() {
      var Mock = {};
      var injections;

      beforeEach(function() {
        window.module("otusjs.laboratory.exam.sending");
      });

      beforeEach(function() {
        inject(function(_$injector_) {
          injections = {
            ExamSendingLot: _$injector_.get('otusjs.laboratory.exam.sending.ExamSendingLot'),
            Exam: _$injector_.get('otusjs.laboratory.exam.sending.Exam')

          };
          mockExamSendingFactory(_$injector_, injections);
          mockExamSending();
          mockExamSendingFromJson(jasmine.any(Object));
          mockExamSendingJson();
          mockExamJson()
          mockInsertExam();
          mockGetExamList();
          mockRemoveExam();
        });
      });

      describe("expect method create been called", function() {

        beforeEach(function() {
          spyOn(Mock.ExamSendingFactory, "create");
          Mock.ExamSendingFactory.create();
        });

        it("should build a factory", function() {
          expect(Mock.ExamSendingFactory.create).toHaveBeenCalled();
          expect(Mock.ExamSendingFactory).toEqual(jasmine.any(Object));
        });
      });

      describe("expect method fromJson been called", function() {
        beforeEach(function functionName() {
          spyOn(Mock.ExamSendingFactory, "fromJson");
          Mock.ExamSendingFactory.fromJson(jasmine.any(Object), jasmine.any(Object));
        });

        it("should call method fromJson", function() {
          expect(Mock.ExamSendingFactory.fromJson).toHaveBeenCalledWith(jasmine.any(Object), jasmine.any(Object));
          expect(Mock.ExamSendingFactory.fromJson).toBeDefined();
          expect(Mock.ExamSendingFactory.fromJson).not.toBe(null);
        });
      });

      describe('toJSON method', function() {
        beforeEach(function() {
          mockExamSendingFromJson();
        });

        it('expect return from toJson method to equal the mocked JSON',
          function() {
            expect(JSON.stringify(Mock.ExamSendingFromJson)).toEqual(JSON.stringify(Mock.ExamSendingJson));
          });

      });

      describe("insert exam method", function() {
        it("should insert a observation exam", function() {
          expect(Mock.insertedExam).toBeDefined();
          expect(Mock.insertedExam).not.toBeNull();
          expect(Mock.insertedExam).toEqual(jasmine.any(Object));
        });
      });

      describe("remove exam method", function() {
        it("should insert a observation exam", function() {
          expect(Mock.removedExamByIndex).toBeDefined();
          expect(Mock.removedExamByIndex).not.toBeNull();
          expect(Mock.removedExamByIndex).toEqual(jasmine.any(Object));
        });
      });

      function mockExamSendingJson() {
        Mock.ExamSendingLotJson = {
          _id: "16541321616",
          fieldCenter: {
            acronym: "SP"
          },
          fileName: 'exams-existents.json',
          operator: "diogo.rosas.ferreira@gmail.com",
          realizationDate: "2018-02-01T13:20:59.383Z"
        };
        Mock.ExamJson = [{
          objectType: "Exam",
          name: "GLICOSE - SANGUE",
          examResults: [{
            objectType: "ExamResults",
            examName: "GLICOSE - SANGUE",
            code: "363027659",
            resultName: "GLICOSE.................................:",
            releaseDate: "2017-05-03T13:08:00.000Z",
            observations: [],
            value: "93"
          }]
        }];

        Mock.ExamSendingJson = {
          "examSendingLot": {
            "objectType": "ExamSendingLot",
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
                "observations": [],
                "value":"93",
                "isValid":true}],
                "observations": []
              }]
            };

          }

          function mockExamJson() {
            var lote = Mock.ExamSendingLot.create();
            lote = Mock.ExamSendingLot.create();
            Mock.exams = Mock.Exams.fromJson(Mock.ExamJson);
            Mock.examLot = Mock.ExamSendingLot.fromJson(Mock.ExamSendingLotJson);
          }

          function mockExamSendingFactory(_$injector_, injections) {
            Mock.ExamSendingLot = _$injector_.get('otusjs.laboratory.exam.sending.ExamSendingLot');
            Mock.Exams = _$injector_.get('otusjs.laboratory.exam.sending.Exam');
            Mock.ExamSendingFactory = _$injector_.get(
              'otusjs.laboratory.exam.sending.ExamSendingFactory', injections);
          }

          function mockExamSending() {
            Mock.ExamSending = Mock.ExamSendingFactory.create();
          }

          function mockExamSendingFromJson() {
            Mock.ExamSendingFromJson = Mock.ExamSendingFactory.fromJson(Mock.examLot, Mock.exams);
          }

          function mockInsertExam() {
            Mock.insertedExam = Mock.ExamSendingFromJson.insertExam(Mock.exams);
          }

          function mockRemoveExam() {
            Mock.removedExamByIndex = Mock.ExamSendingFromJson.removeExamByIndex(jasmine.any(Number));
          }

          function mockGetExamList() {
            mockExamSendingFromJson();
            mockInsertExam();
            Mock.getExams = Mock.ExamSendingFromJson.getExamList();
          }

          function mockExamResults() {
            var injections = {
              ExamObservation: _$injector_.get("otusjs.laboratory.exam.sending.ExamObservation")
            };
            Mock.ExamResultsFactory = _$injector_.get(
              'otusjs.laboratory.exam.sending.ExamResults', injections);
          }

        });
