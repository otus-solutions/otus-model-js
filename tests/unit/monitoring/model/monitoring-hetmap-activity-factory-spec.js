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
    console.log(factory.create(Mock.activity))
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

  }
});