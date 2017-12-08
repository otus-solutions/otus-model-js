describe('the exam service', function() {
  var Mock = {};
  var examService;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    mockExamLotJson();

    inject(function(_$injector_) {
      examService = _$injector_.get(
        'otusjs.laboratory.exam.ExamService', {}
      );
    });
  });

  it('objectType should be equal ExamLot', function() {
    var lot = examService.createAliquotLot();
    expect(lot.objectType).toEqual('ExamLot');
    mockExamLot();
  });

  it('lot should be equal json', function() {
    expect(Mock.ExamLot.objectType).toEqual(Mock.ExamLotJson.objectType);
    expect(Mock.ExamLot.code).toEqual(Mock.ExamLotJson.code);
    expect(Mock.ExamLot.aliquotName).toEqual(Mock.ExamLotJson.aliquotName);
    expect(Mock.ExamLot.fieldCenter.acronym).toEqual(Mock.ExamLotJson.fieldCenter.acronym);
    expect(Mock.ExamLot.realizationDate).toEqual(Mock.ExamLotJson.realizationDate);
    expect(Mock.ExamLot.operator).toEqual(Mock.ExamLotJson.operator);
    expect(Mock.ExamLot.aliquotList).toEqual(Mock.ExamLotJson.aliquotList);
  });

  function mockExamLotJson() {
    Mock.ExamLotJson = {
      objectType: "ExamLot",
      code: "30513515",
      aliquotName: "BIOCHEMICAL",
      fieldCenter: {
        name: "Bahia",
        acronym: "BA",
        code: 1
      },
      realizationDate: "2017-09-21T15:36:56.929Z",
      operator: "teste@email.com",
      aliquotList: []
    }
  }

  function mockExamLot() {
    Mock.ExamLot = examService.buildAliquotLotFromJson(Mock.ExamLotJson);
  }
});