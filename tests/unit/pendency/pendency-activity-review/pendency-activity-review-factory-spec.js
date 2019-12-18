describe('PendencyActivityReviewFactory_UnitTest_Suite', () => {
  let factory;
  let Injections = [];
  let Mock = {};

  beforeEach(() => {
    angular.mock.module('otusjs.model.pendency');
    angular.mock.inject($injector => {
      //Injections. = $injector.get(' ');
      factory = $injector.get('otusjs.model.pendency.PendencyActivityReview');
    });
  });

  it('serviceExistence_check', () => {
    expect(factory).toBeDefined();
  });

  it('serviceMethodsExistence_check', () => {
    expect(factory.create).toBeDefined();
  });

  it('createMethod_should_return_ ', () => {
    console.log(factory.create())
  });
});