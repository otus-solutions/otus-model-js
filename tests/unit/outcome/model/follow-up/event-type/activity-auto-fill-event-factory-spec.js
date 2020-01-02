describe('ActivityAutoFillEventFactory_TestSuite', function () {
  var factory;
  var Mock = {
    autoFillEvent1: {
      _id: '789',
      objectType: 'ActivityAutoFillEvent',
      name: 'evento 1',
      acronym: 'abc',
      description: 'abc'

    },
    autoFillEvent2: {
      _id: '987',
      objectType: 'ActivityAutoFillEvent',
      name: 'evento 2',
      acronym: 'def',
      description: 'def'
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
    expect(object.name).toEqual('');
    expect(object.acronym).toEqual('')
    expect(object.description).toEqual('');
  });


  it('should create fromJson method', function () {
    var object = factory.fromJson(Mock.autoFillEvent1);
    expect(object._id).toEqual(Mock.autoFillEvent1._id);
    expect(object.objectType).toEqual(Mock.autoFillEvent1.objectType);
    expect(object.name).toEqual(Mock.autoFillEvent1.name);
    expect(object.acronym).toEqual(Mock.autoFillEvent1.acronym);
    expect(object.description).toEqual(Mock.autoFillEvent1.description);
  });

  it('should create events formArray method', function () {
    var array = factory.fromArray([Mock.autoFillEvent1, Mock.autoFillEvent2]);
    expect(array.length).toEqual(2);
    expect(array[0].toJSON()).toEqual(Mock.autoFillEvent1);
    expect(array[1].toJSON()).toEqual(Mock.autoFillEvent2);
  });


});

