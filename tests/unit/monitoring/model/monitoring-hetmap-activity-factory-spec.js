describe("HeatMap Activity Factory Tests", function () {
  var Mock = {};
  var Injections = {};
  var factory;

  beforeEach(function () {
    mockData();
    angular.mock.module('otusjs.model.monitoring');
  });

  beforeEach(function () {
    inject(function (_$injector_) {
      Injections.$filter = _$injector_.get('$filter');
      factory = _$injector_.get('otusjs.model.monitoring.HeatMapActivityFactory', Injections);

    });
  });

  it('should test status of activities created', function () {
    var STATUS = factory.getStatus();
    expect(factory.create(Mock.activityCreated).toJSON().status).toEqual(STATUS.CREATED);
    expect(factory.create(Mock.activitySaved).toJSON().status).toEqual(STATUS.SAVED);
    expect(factory.create(Mock.activityFinalized).toJSON().status).toEqual(STATUS.FINALIZED);
    expect(factory.create(Mock.activityAmbiguity).toJSON().status).toEqual(STATUS.AMBIGUITY);
    expect(factory.create(Mock.activityMultiple).toJSON().status).toEqual(STATUS.MULTIPLE);
    expect(factory.create(Mock.activityNotApply).toJSON().status).toEqual(STATUS.DOES_NOT_APPLY);
    expect(factory.create(Mock.activityUndefined).toJSON().status).toEqual(STATUS.UNDEFINED);
  });

  it('should build map activities for heatmap', function () {
    var STATUS = factory.getStatus();
    expect(factory.fromJsonObject()).toEqual(jasmine.any(Array));
    var activities = factory.fromJsonObject(Mock.activities);
    expect(activities.length).toEqual(7);
    expect(activities[0].status).toEqual(STATUS.UNDEFINED);
    expect(activities[1].status).toEqual(STATUS.DOES_NOT_APPLY);
    expect(activities[2].status).toEqual(STATUS.MULTIPLE);
    expect(activities[3].status).toEqual(STATUS.AMBIGUITY);
    expect(activities[4].status).toEqual(STATUS.CREATED);
    expect(activities[5].status).toEqual(STATUS.SAVED);
    expect(activities[6].status).toEqual(STATUS.FINALIZED);
  });

  it('should create method', function () {
    expect(factory.create().toJSON().objectType).toEqual('HeatMapActivity');
    expect(factory.create().toJSON().acronym).toEqual(null);
    expect(factory.create().toJSON().name).toEqual(null);
    expect(factory.create().toJSON().date).toEqual(null);
    expect(factory.create().toJSON().information).toEqual(null);
    expect(factory.create().toJSON().observation).toEqual(null);
    expect(factory.create().toJSON().status).toEqual(null);
    expect(factory.create(Mock.activity).toJSON().status).toEqual(Mock.activity.status);
    delete Mock.activity.status;
    expect(factory.create(Mock.activity).toJSON().status).toEqual('UNDEFINED');
  });

  function mockData() {
    Mock.activity = {
      activities : {},
      status: "TEST"
    };
    Mock.status = ['CREATED','SAVED','FINALIZED','DOES_NOT_APPLY','UNDEFINED','MULTIPLE','AMBIGUITY'];
    Mock.statusModel = {
      'CREATED': 'CREATED',
      'SAVED': 'SAVED',
      'FINALIZED': 'FINALIZED',
      'DOES_NOT_APPLY': 'DOES_NOT_APPLY',
      'UNDEFINED': 'UNDEFINED',
      'MULTIPLE': 'MULTIPLE',
      'AMBIGUITY': 'AMBIGUITY'
    };
    Mock.activityAmbiguity = {
      acronym: "DSOC",
      name: "DIÁRIO DO SONO",
      activities: [
        {
          statusHistory:{
            objectType: "ActivityStatus",
            name:"CREATED",
            date: "2018-10-22T14:59:02.227Z",
            user:{
              email: "otus@otus-solutions.com",
              name: "Otus",
              phone: "5151515151",
              surname: "Solutions"
            }
          }
        }
      ],
      doesNotApply: {
        acronym: "DSOC",
        observation: "",
        recruitmentNumber: 9015648
      }
    };

    Mock.activityNotApply = {
      acronym: "DSOC",
      name: "DIÁRIO DO SONO",
      activities: [

      ],
      doesNotApply: {
        acronym: "DSOC",
        observation: "Não será realizado",
        recruitmentNumber: 9015648
      }
    };

    Mock.activityUndefined = {
      acronym: "DSOC",
      name: "DIÁRIO DO SONO",
      activities: [

      ],
      doesNotApply: null
    };

    Mock.activityCreated = {
      acronym: "DSOC",
      name: "DIÁRIO DO SONO",
      activities: [
        {
          statusHistory:{
            objectType: "ActivityStatus",
            name:"CREATED",
            date: "2018-10-22T14:59:02.227Z",
            user:{
              email: "otus@otus-solutions.com",
              name: "Otus",
              phone: "5151515151",
              surname: "Solutions"
            }
          }
        }
      ],
      doesNotApply: null
    };

    Mock.activitySaved = {
      acronym: "DSOC",
      name: "DIÁRIO DO SONO",
      activities: [
        {
          statusHistory:{
            objectType: "ActivityStatus",
            name:"SAVED",
            date: "2018-10-22T14:59:02.227Z",
            user:{
              email: "otus@otus-solutions.com",
              name: "Otus",
              phone: "5151515151",
              surname: "Solutions"
            }
          }
        }
      ],
      doesNotApply: null
    };

    Mock.activityFinalized = {
      acronym: "DSOC",
      name: "DIÁRIO DO SONO",
      activities: [
        {
          statusHistory:{
            objectType: "ActivityStatus",
            name:"FINALIZED",
            date: "2018-10-22T14:59:02.227Z",
            user:{
              email: "otus@otus-solutions.com",
              name: "Otus",
              phone: "5151515151",
              surname: "Solutions"
            }
          }
        }
      ],
      doesNotApply: null
    };

    Mock.activityMultiple = {
      acronym: "DSOC",
      name: "DIÁRIO DO SONO",
      activities: [
        {
          statusHistory:{
            objectType: "ActivityStatus",
            name:"FINALIZED",
            date: "2018-10-22T14:59:02.227Z",
            user:{
              email: "otus@otus-solutions.com",
              name: "Otus",
              phone: "5151515151",
              surname: "Solutions"
            }
          }
        },
        {
          statusHistory:{
            objectType: "ActivityStatus",
            name:"FINALIZED",
            date: "2018-10-22T14:59:02.227Z",
            user:{
              email: "otus@otus-solutions.com",
              name: "Otus",
              phone: "5151515151",
              surname: "Solutions"
            }
          }
        }
      ],
      doesNotApply: null
    };
    Mock.activities = [Mock.activityUndefined, Mock.activityNotApply, Mock.activityMultiple, Mock.activityAmbiguity, Mock.activityCreated, Mock.activitySaved, Mock.activityFinalized]
  }
});