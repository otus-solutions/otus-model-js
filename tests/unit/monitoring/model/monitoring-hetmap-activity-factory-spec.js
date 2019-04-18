fdescribe("HeatMap Activity Factory Tests", function () {
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

  it('should test', function () {
    var STATUS = factory.getStatus();
    expect(factory.create(Mock.activityCreated).toJSON().status).toEqual(STATUS.CREATED);
    expect(factory.create(Mock.activitySaved).toJSON().status).toEqual(STATUS.SAVED);
    expect(factory.create(Mock.activityFinalized).toJSON().status).toEqual(STATUS.FINALIZED);
    expect(factory.create(Mock.activityAmbiguity).toJSON().status).toEqual(STATUS.AMBIGUITY);
    expect(factory.create(Mock.activityMultiple).toJSON().status).toEqual(STATUS.MULTIPLE);
    expect(factory.create(Mock.activityNotApply).toJSON().status).toEqual(STATUS.DOES_NOT_APPLY);
    expect(factory.create(Mock.activityUndefined).toJSON().status).toEqual(STATUS.UNDEFINED);
    var mapa = factory.fromJsonObject(Mock.activities);
  });


  function mockData() {
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
    }

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