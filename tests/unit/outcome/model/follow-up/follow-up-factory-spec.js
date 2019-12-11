describe('FollowUpFactory_TestSuite', function () {
  var factory;
  var Mock = {
    followUp1: {
      _id: '789',
      objectType: 'FollowUp',
      label: 'Seguimento 1',
      time: 365,
      initialDate: '2019-12-11T03:00:00.000Z',
      events: [951]
    },
    followUp2: {
      _id: '987',
      objectType: 'FollowUp',
      label: 'Seguimento 2',
      time: 365,
      initialDate: null,
      events: [123, 456, 789]
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
    expect(object.initialDate).toBeNull();
    expect(object.events.length).toEqual(0);
    expect(object.addEvent).toBeDefined();
    expect(object.removeEvent).toBeDefined();
    expect(object.start).toBeDefined();
    expect(object.getFinalDate).toBeDefined();
    expect(object.toJSON).toBeDefined();
  });

  it('create a object fromJson method', function () {
    var object = factory.fromJson(Mock.followUp1);
    expect(object.objectType).toEqual(Mock.followUp1.objectType);
    expect(object.label).toEqual(Mock.followUp1.label);
    expect(object.time).toEqual(Mock.followUp1.time);
    expect(object.initialDate).toEqual(Mock.followUp1.initialDate);
    expect(object.events.length).toEqual(1);
  });

  it('should create fromArray method', function () {
    var array = factory.fromArray([Mock.followUp1, Mock.followUp2]);
    expect(array[0].toJSON()).toEqual(Mock.followUp1);
    expect(array[1].toJSON()).toEqual(Mock.followUp2);
    expect(array[0].toJSON()).not.toEqual(Mock.followUp2);
    expect(array[1].toJSON()).not.toEqual(Mock.followUp1);
  });

  it('should set time method', function () {
    var object = factory.create();
    expect(object.time).toBeNull();
    object.setTime('meio dia');
    expect(object.time).toBeNull();
    object.setTime(365);
    expect(object.time).toEqual(365);
  });

  it('should start followUp', function () {
    var object = factory.create();
    expect(object.start()).toBeFalsy();
    expect(object.initialDate).toBeNull();
    object.setTime(365);
    expect(object.start()).toBeTruthy();
    expect(object.initialDate).not.toBeNull();
    var data = new Date();
    data.setHours(0, 0,0,0,);
    expect(object.initialDate).toEqual(data.toISOString());
  });

  it('should return final date', function () {
    var object = factory.create();
    expect(object.getFinalDate()).toBeNull();
    object.setTime(365);
    expect(object.getFinalDate()).toBeNull();
    object.start();
    expect(new Date(object.getFinalDate()).getFullYear()).toBeGreaterThan(new Date(object.initialDate).getFullYear());
  });

  it('should add event', function () {
    var object = factory.create();
    expect(object.events.length).toEqual(0);
    object.addEvent(123);
    expect(object.events.length).toEqual(1);
    expect(object.events.includes(123)).toBeTruthy();
  });

  it('should remove event', function () {
    var object = factory.fromJson(Mock.followUp2);
    expect(object.events.length).toEqual(3);
    object.removeEvent(777);
    expect(object.events.length).toEqual(3);
    object.removeEvent(456);
    expect(object.events).toEqual([123, 789]);
  });



});

