describe('ActivityBaseFactory_UnitTest_Suite', () => {
  let factory;
  let Injections = [];
  let Mock = {};

  beforeEach(() => {
    angular.mock.module('otusjs.model.activity');
    angular.mock.inject($injector => {
      factory = $injector.get('otusjs.model.activity.ActivityBasicFactory', Injections);
      mockInitialize();
    });
  });

  function mockInitialize(){
    Mock.data = Test.utils.data.activityBaseModel;
  }

  it('factoryExistence_check', () => {
    expect(factory).toBeDefined();
  });

  it('factoryMethodsExistence_check', () => {
    expect(factory.fromJsonObject).toBeDefined();
  });

  it('should ', () => {
    let activityBasic = factory.fromJsonObject(Mock.data);
    expect(activityBasic.objectType).toBe("ActivityBasicModel");
  });
});
