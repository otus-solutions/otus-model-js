describe('the exam results factory', function() {
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
          // mockExamFromJson(jasmine.any(Object));
          // mockExamJson();
          // mockInsertExam();
          //mockGetExamList();
          //mockRemoveExam();
        });
      });

      describe("expect method create been called", function() {

        beforeEach(function() {
          spyOn(Mock.ExamFactory, "create");
          Mock.ExamFactory.create();
        });

        it("should build a factory", function() {
          expect(Mock.ExamFactory.create).toHaveBeenCalled();
          expect(Mock.ExamFactory).toEqual(jasmine.any(Object));
        });
      });

      xdescribe("expect method fromJson been called", function() {
        beforeEach(function functionName() {
          spyOn(Mock.ExamFactory, "fromJson");
          Mock.ExamFactory.fromJson(jasmine.any(Object), jasmine.any(Object));
        });

        it("should call method fromJson", function() {
          expect(Mock.ExamFactory.fromJson).toHaveBeenCalledWith(jasmine.any(Object), jasmine.any(Object));
          expect(Mock.ExamFactory.fromJson).toBeDefined();
          expect(Mock.ExamFactory.fromJson).not.toBe(null);
        });
      });

      xdescribe('toJSON method', function() {
        beforeEach(function() {
          mockExamFromJson();
        });

        it('expect return from toJson method to equal the mocked JSON',
          function() {
            expect(JSON.stringify(Mock.ExamFromJson)).toEqual(JSON.stringify(Mock.ExamJson));
          });

      });

      xdescribe("insert exam method", function() {
        it("should insert a observation exam", function() {
          expect(Mock.insertedExam).toBeDefined();
          expect(Mock.insertedExam).not.toBeNull();
          expect(Mock.insertedExam).toEqual(jasmine.any(Object));
        });
      });

      xdescribe("remove exam method", function() {
        it("should insert a observation exam", function() {
          expect(Mock.removedExamByIndex).toBeDefined();
          expect(Mock.removedExamByIndex).not.toBeNull();
          expect(Mock.removedExamByIndex).toEqual(jasmine.any(Object));
        });
      });

      function mockExamJson() {
        Mock.ExamLotJson = {
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
            aliquotCode: "363027659",
            resultName: "GLICOSE.................................:",
            releaseDate: "2017-05-03T13:08:00.000Z",
            observations: [],
            value: "93"
          }]
        }];

        Mock.ExamJson = {
          "examLot": {
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
                "aliquotCode": "363027659",
                "resultName": "GLICOSE.................................:",
                "releaseDate": "2017-05-03T13:08:00.000Z",
                "observations": [],
                "value":"93",
                "aliquotValid":true}],
                "observations": []
              }]
            };

          }

          function mockExamJson() {
            var lote = Mock.ExamLot.create();
            lote = Mock.ExamLot.create();
            Mock.exams = Mock.Exams.fromJson(Mock.ExamJson);
            Mock.examLot = Mock.ExamLot.fromJson(Mock.ExamLotJson);
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
          //
          // function mockExamFromJson() {
          //   Mock.ExamFromJson = Mock.ExamFactory.fromJson(Mock.examLot, Mock.exams);
          // }

          // function mockInsertExam() {
          //   Mock.insertedExam = Mock.ExamFromJson.insertExam(Mock.exams);
          // }
          //
          // function mockRemoveExam() {
          //   Mock.removedExamByIndex = Mock.ExamFromJson.removeExamByIndex(jasmine.any(Number));
          // }
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
