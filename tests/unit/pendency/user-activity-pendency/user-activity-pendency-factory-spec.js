(function () {
  'use restrict';

  describe('UserActivityPendencyFactory_UnitTest_Suite', () => {
    let factory;
    let Injections = [];
    let Mock = {};

    beforeEach(() => {
      angular.mock.module('otusjs.model.pendency');
      angular.mock.inject($injector => {
        //Injections. = $injector.get(' ');
        factory = $injector.get('otusjs.model.pendency.UserActivityPendency');
        _prepareMockParameters();
        Mock.json = JSON.stringify(Mock.userActivityPendencyParameters);


      });
    });

    it('serviceExistence_check', () => {
      expect(factory).toBeDefined();
    });

    it('serviceMethodsExistence_check', () => {
      expect(factory.create).toBeDefined();
      expect(factory.fromJsonObject).toBeDefined();
    });

    it('createMethod_should_return_instanceOf_userActivityPendency', () => {
      //Destruct ES6
      const {acronym, recruitmentNumber, receiver, requester, id} = Mock.userActivityPendencyParameters;
      let expectPendency = factory.create(acronym, recruitmentNumber, receiver, requester, id);
      expect(expectPendency.objectType).toBe('userActivityPendency');
    });

    it('fromJsonObjectMethod_should_fit_attributes_of_json_and_return_userActivityPendency', () => {
      let expectPendency = factory.fromJsonObject(Mock.json);
      console.log(expectPendency.getID());
    });

    it('toJsonMethod_should ', function () {
      //Destruct ES6
      const {acronym, recruitmentNumber, receiver, requester, id} = Mock.userActivityPendencyParameters;
      let expectPendency = factory.create(acronym, recruitmentNumber, receiver, requester, id);

      console.log(expectPendency.toJSON());
    });


    function _prepareMockParameters() {
      Mock.userActivityPendencyParameters = {
        id: "001",
        acronym: "ABCD",
        recruitmentNumber: "12345",
        requester: "Supervisor",
        receiver: "Revisor"
      }
    }
  });

})();


