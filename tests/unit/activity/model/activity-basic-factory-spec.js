describe('ActivityBaseFactory_UnitTest_Suite', () => {
  let factory;
  let Injections = [];
  let Mock = {};

  beforeEach(() => {
    angular.mock.module('otusjs.model.activity');
    angular.mock.inject($injector => {
      //Injections. = $injector.get(' ');
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

  xit('factoryMethodsExistence_check', () => {
    //expect(factory.).toBeDefined();
  });

  it('should ', () => {
    let activityBasic = factory.fromJsonObject(Mock.data);
    console.log(activityBasic.acronym);
  });
});
