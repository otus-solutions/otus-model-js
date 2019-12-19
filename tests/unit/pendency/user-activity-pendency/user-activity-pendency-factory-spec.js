(function () {
  'use restrict';

  describe('UserActivityPendencyFactory_UnitTest_Suite', () => {
    let factory;
    let Injections = [];
    let Mock = {};

    beforeEach(() => {
      angular.mock.module('otusjs');
      angular.mock.inject($injector => {
        //Injections. = $injector.get(' ');
        factory = $injector.get('otusjs.model.pendency.UserActivityPendency');

        //Mock.json = JSON.stringify(Mock.userActivityPendencyParameters);

        Mock.ActivityFactory = $injector.get('otusjs.model.activity.ActivityFactory');
        _prepareMockParameters();
      });
    });

    it('serviceExistence_check', () => {
      expect(factory).toBeDefined();
    });

    it('serviceMethodsExistence_check', () => {
      expect(factory.create).toBeDefined();
      expect(factory.fromJsonObject).toBeDefined();
      expect(factory.createActivityInfo).toBeDefined();
    });

    it('createMethod_should_return_instanceOf_userActivityPendency', () => {
      //Destruct ES6
      const {requester, receiver, dueDate, activity} = Mock.userActivityPendencyParameters;
      //console.log(activityInfo)
      let expectPendency = factory.create(requester, receiver, dueDate, activity);
      console.log(expectPendency)
      expect(expectPendency.objectType).toBe('userActivityPendency');
    });
    //
    // it('fromJsonObjectMethod_should_fit_attributes_of_json_and_return_userActivityPendency', () => {
    //   let expectPendency = factory.fromJsonObject(Mock.json);
    //   console.log(expectPendency.getID());
    // });
    //
    // it('toJsonMethod_should ', function () {
    //   //Destruct ES6
    //   const {acronym, recruitmentNumber, receiver, requester, id} = Mock.userActivityPendencyParameters;
    //   let expectPendency = factory.create(acronym, recruitmentNumber, receiver, requester, id);
    //
    //   console.log(expectPendency.toJSON());
    // });


    function _prepareMockParameters() {
      let activity = Mock.ActivityFactory.fromJsonObject(Test.utils.data.activityPASC);
      let activityInfo = factory.createActivityInfo(activity);

      Mock.userActivityPendencyParameters = {
        requester: "otus_supervisor@otus.com",
        receiver: "otus_revisor@otus.com",
        dueDate: new Date(),
        activityInfo : activityInfo,
        activity: activity,
        id: "001"
      }
    }
  });

})();


