describe('FollowUpFactory_TestSuite', function () {
  var factory;
  var Mock = {
    followUp1: {
      _id: '789',
      objectType: 'FollowUp',
      label: 'Seguimento 1',
      windowBetween: 20,
      time: 365,
      events: [{objectType: 'ActivityAutoFillEvent', name: 'AAA'}]
    },
    followUp2: {
      _id: '987',
      objectType: 'FollowUp',
      label: 'Seguimento 2',
      windowBetween: null,
      time: 365,
      events: [{objectType: 'ActivityAutoFillEvent', name: 'BBB'},
        {objectType: 'ActivityAutoFillEvent', name: 'CCC'},
        {objectType: 'ActivityAutoFillEvent', name: 'DDD'}]
    }
  };

  beforeEach(function () {
    angular.mock.module('otusjs');
    angular.mock.inject($injector => {
      factory = $injector.get('otusjs.model.outcome.FollowUpFactory');
    });
  });

  it('factoryExistence_check', function () {
    expect(factory).toBeDefined();
    expect(factory.create).toBeDefined();
    expect(factory.fromJson).toBeDefined();
    expect(factory.fromArray).toBeDefined();
  });

  it('create a object', function () {
    var object = factory.create();
    expect(object.objectType).toEqual('FollowUp');
    expect(object.label).toEqual('');
    expect(object.time).toBeNull();
    expect(object.windowBetween).toBeNull();
    expect(object.events.length).toEqual(0);
    expect(object.addEvent).toBeDefined();
    expect(object.removeEvent).toBeDefined();
    expect(object.toJSON).toBeDefined();
  });

  it('create a object fromJson method', function () {
    var object = factory.fromJson(Mock.followUp1);
    expect(object.objectType).toEqual(Mock.followUp1.objectType);
    expect(object.label).toEqual(Mock.followUp1.label);
    expect(object.time).toEqual(Mock.followUp1.time);
    expect(object.windowBetween).toEqual(Mock.followUp1.windowBetween);
    expect(object.events.length).toEqual(1);
  });

  it('should create fromArray method', function () {
    var array = factory.fromArray([Mock.followUp1, Mock.followUp2]);
    expect(array[0].toJSON().label).toEqual(Mock.followUp1.label);
    expect(array[1].toJSON().label).toEqual(Mock.followUp2.label);
    expect(array[0].toJSON()).not.toEqual(Mock.followUp2);
    expect(array[1].toJSON()).not.toEqual(Mock.followUp1);
  });

  it('should add event', function () {
    var object = factory.create();
    expect(object.events.length).toEqual(0);
    object.addEvent('ActivityAutoFillEvent');
    expect(object.events.length).toEqual(1);
  });

  it('should remove event', function () {
    var object = factory.fromJson(Mock.followUp2);
    expect(object.events.length).toEqual(3);
    object.removeEvent(5);
    expect(object.events.length).toEqual(3);
    object.removeEvent(2);
    expect(object.events.length).toEqual(2);
  });



});

