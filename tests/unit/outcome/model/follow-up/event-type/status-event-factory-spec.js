describe('StatusEventFactory_TestSuite', function () {
  var factory;
  var Mock = {
    status: {
      objectType: "StatusEvent",
      label: "FINISH",
      statusDate: new Date().toISOString()
    }
  };

  beforeEach(function () {
    angular.mock.module('otusjs');
    angular.mock.inject($injector => {
       factory = $injector.get('otusjs.model.outcome.StatusEventFactory');
    });
  });

  it('factoryExistence_check', function () {
    expect(factory).toBeDefined();
    expect(factory.create).toBeDefined();
    expect(factory.fromJson).toBeDefined();
  });

  it('create a object', function () {
    var object = factory.create();
    expect(object.objectType).toEqual('StatusEvent');
    expect(object.label).toEqual('WAITING');
    expect(object.statusDate).toBeDefined();
    expect(object.toJSON).toBeDefined();
  });

  it('start event', function () {
    var object = factory.create();
    expect(object.label).toEqual('WAITING');
    object.start();
    expect(object.label).toEqual('PENDING');
  });

  it('finish event', function () {
    var object = factory.create();
    expect(object.label).toEqual('WAITING');
    object.finish();
    expect(object.label).toEqual('FINALIZED');
  });

  it('abort event', function () {
    var object = factory.create();
    expect(object.label).toEqual('WAITING');
    object.abort();
    expect(object.label).toEqual('ABORTED');
  });

  it('wait event', function () {
    var object = factory.fromJson(Mock.status);
    expect(object.label).toEqual('FINISH');
    object.wait();
    expect(object.label).toEqual('WAITING');
  });

  it('fromJson method', function () {
    var object = factory.fromJson(Mock.status);
    expect(object.label).toEqual('FINISH');
    expect(object.toJSON()).toEqual(Mock.status);
  });

});

