describe('OutcomeFactory_TestSuite', function () {
  var factory;
  var Mock = {
    Outcome1: {
      _id: '789',
      objectType: 'Outcome',
      description: 'Seguimento 1',
      followUps: []
    },
    Outcome2: {
      _id: '987',
      objectType: 'Outcome',
      description: 'Seguimento 2',
      followUps: [
        {
          _id: '789',
          objectType: 'FollowUp',
          label: 'Seguimento 1',
          windowBetween: 20,
          time: 365,
          events: [{objectType: 'ActivityAutoFillEvent', name: 'AAA'}]
        },
        {
          _id: '987',
          objectType: 'FollowUp',
          label: 'Seguimento 2',
          windowBetween: null,
          time: 365,
          events: [{objectType: 'ActivityAutoFillEvent', name: 'BBB'},
            {objectType: 'ActivityAutoFillEvent', name: 'CCC'},
            {objectType: 'ActivityAutoFillEvent', name: 'DDD'}]
        }
      ]
    }
  };

  beforeEach(function () {
    angular.mock.module('otusjs');
    angular.mock.inject($injector => {
      factory = $injector.get('otusjs.model.outcome.OutcomeFactory');
    });
  });

  it('factoryExistence_check', function () {
    expect(factory).toBeDefined();
    expect(factory.create).toBeDefined();
    expect(factory.fromJson).toBeDefined();
  });

  it('create a object', function () {
    var object = factory.create();
    expect(object.objectType).toEqual('Outcome');
    expect(object.description).toEqual('');
    expect(object.followUps).toEqual([]);
    expect(object.toJSON).toBeDefined();
  });

  it('create a object fromJson method', function () {
    var object = factory.fromJson(Mock.Outcome1);
    expect(object.toJSON().objectType).toEqual(Mock.Outcome1.objectType);
    expect(object.toJSON().description).toEqual(Mock.Outcome1.description);
    expect(object.toJSON().followUps.length).toEqual(0);
  });

  it('should add followUp', function () {
    var object = factory.create();
    expect(object.followUps.length).toEqual(0);
    object.addFollowUp();
    expect(object.followUps.length).toEqual(1);
  });

  it('should remove event', function () {
    var object = factory.fromJson(Mock.Outcome2);
    expect(object.followUps.length).toEqual(2);
    object.removeFollowUp(5);
    expect(object.followUps.length).toEqual(2);
    object.removeFollowUp(1);
    expect(object.followUps.length).toEqual(1);
  });


});

