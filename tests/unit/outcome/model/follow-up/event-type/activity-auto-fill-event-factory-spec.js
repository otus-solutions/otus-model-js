describe('ActivityAutoFillEventFactory_TestSuite', function () {
  var factory;
  var Mock = {
    autoFillEvent1: {
      _id: '789',
      objectType: 'ActivityAutoFillEvent',
      activityId: 123,
      participant: 456,
      status: {
        objectType: 'StatusEvent',
        label: 'WAITING',
        statusDate: '2019-12-11T18:01:15.129Z'
      }
    },
    autoFillEvent2: {
      _id: '987',
      objectType: 'ActivityAutoFillEvent',
      activityId: 321,
      participant: 654,
      status: {
        objectType: 'StatusEvent',
        label: 'PENDING',
        statusDate: '2019-12-11T18:01:15.129Z'
      }
    }
  };

  beforeEach(function () {
    angular.mock.module('otusjs');
    angular.mock.inject($injector => {
      factory = $injector.get('otusjs.model.outcome.ActivityAutoFillEventFactory');
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
    expect(object.objectType).toEqual('ActivityAutoFillEvent');
    expect(object.activityId).toBeNull();
    expect(object.participant).toBeNull();
    expect(object.status.objectType).toEqual('StatusEvent');
    expect(object.status.label).toEqual('WAITING');
    expect(object.setActivity).toBeDefined();
    expect(object.getActivity).toBeDefined();
  });

  it('should return a activityId', function () {
    var object = factory.create();
    const id = 123;
    object.setActivity(id);
    expect(object.getActivity()).toEqual(id);
    expect(object.getActivity()).not.toEqual(1);
  });

  it('should return a participant rn', function () {
    var object = factory.create();
    const rn = 123;
    object.setParticipant(rn);
    expect(object.getParticipant()).toEqual(rn);
    expect(object.getParticipant()).not.toEqual(1);
  });

  it('should create fromJson method', function () {
    var object = factory.fromJson(Mock.autoFillEvent1);
    expect(object._id).toEqual(Mock.autoFillEvent1._id);
    expect(object.objectType).toEqual(Mock.autoFillEvent1.objectType);
    expect(object.activityId).toEqual(Mock.autoFillEvent1.activityId);
    expect(object.participant).toEqual(Mock.autoFillEvent1.participant);
    expect(object.status.label).toEqual(Mock.autoFillEvent1.status.label);
    expect(object.status.statusDate).toEqual(Mock.autoFillEvent1.status.statusDate);
  });

  it('should create events formArray method', function () {
    var array = factory.fromArray([Mock.autoFillEvent1, Mock.autoFillEvent2]);
    expect(array.length).toEqual(2);
    expect(array[0].toJSON()).toEqual(Mock.autoFillEvent1);
    expect(array[1].toJSON()).toEqual(Mock.autoFillEvent2);
  });


});

