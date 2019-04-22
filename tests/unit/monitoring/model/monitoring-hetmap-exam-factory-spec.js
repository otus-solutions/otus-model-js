describe("HeatMap Exams Factory Tests", function () {
  var Mock = {};
  var Injections = {};
  var factory;

  beforeEach(function () {
    mockData();
    angular.mock.module('otusjs.model.monitoring');
  });

  beforeEach(function () {
    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.model.monitoring.HeatMapExamFactory', Injections);

    });
  });

  it('should test status of exams created', function () {
    var STATUS = factory.getStatus();
    expect(factory.create(Mock.examNotApply).toJSON().status).toEqual(STATUS.DOES_NOT_APPLY);
    expect(factory.create(Mock.examResultAmbiguity).toJSON().status).toEqual(STATUS.AMBIGUITY);
    expect(factory.create(Mock.examExists).toJSON().status).toEqual(STATUS.HAVE);
    expect(factory.create(Mock.examNotExists).toJSON().status).toEqual(STATUS.DOES_NOT_HAVE);
  });

  it('should build map activities for heatmap', function () {
    var STATUS = factory.getStatus();
    expect(factory.fromJsonObject()).toEqual(jasmine.any(Array));
    var exams = factory.fromJsonObject(Mock.exams);
    expect(exams.length).toEqual(4);
    expect(exams[0].status).toEqual(STATUS.AMBIGUITY);
    expect(exams[1].status).toEqual(STATUS.DOES_NOT_APPLY);
    expect(exams[2].status).toEqual(STATUS.HAVE);
    expect(exams[3].status).toEqual(STATUS.DOES_NOT_HAVE);

  });

  it('should create method', function () {
    expect(factory.create().toJSON().objectType).toEqual('HeatMapExam');
    expect(factory.create().toJSON().quantity).toEqual(0);
    expect(factory.create().toJSON().name).toEqual(null);
    expect(factory.create().toJSON().observation).toEqual(null);
    expect(factory.create().toJSON().status).toEqual("UNDEFINED");
    expect(Mock.exam.status).toEqual(factory.create(Mock.exam).toJSON().status);
    delete Mock.exam.status;
    Mock.exam.doesNotApply = {};
    expect(factory.create(Mock.exam).toJSON().status).toEqual("AMBIGUITY");

  });

  function mockData() {
    Mock.status = ['HAVE','DOES_NOT_HAVE','DOES_NOT_APPLY','AMBIGUITY'];
    Mock.statusModel = {
      'DOES_NOT_HAVE': 'DOES_NOT_HAVE',
      'HAVE': 'HAVE',
      'DOES_NOT_APPLY': 'DOES_NOT_APPLY',
      'AMBIGUITY': 'AMBIGUITY'
    };
    Mock.examResultAmbiguity = {
      quantity: 1,
      name: "DIÁRIO DO SONO",
      doesNotApply: {
        name: "DIÁRIO DO SONO",
        observation: "",
        recruitmentNumber: 9015648
      }
    };

    Mock.examNotApply = {
      quantity: 0,
      name: "DIÁRIO DO SONO",
      doesNotApply: {
        acronym: "DSOC",
        observation: "Não será realizado",
        recruitmentNumber: 9015648
      }
    };

    Mock.examExists = {
      quantity: 2,
      name: "DIÁRIO DO SONO",
      doesNotApply: null
    };

    Mock.exam = {
      objectType: "HeatMapExam",
      quantity: 2,
      name: "DIÁRIO DO SONO",
      observation: "Test",
      status: "HAVE"
    };

    Mock.examNotExists = {
      quantity: 0,
      name: "DIÁRIO DO SONO",
      doesNotApply: null
    };


    Mock.exams = [Mock.examResultAmbiguity, Mock.examNotApply, Mock.examExists, Mock.examNotExists]
  }
});