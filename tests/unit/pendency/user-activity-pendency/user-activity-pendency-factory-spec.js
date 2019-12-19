(function () {
  'use restrict';

  describe('UserActivityPendencyFactory_UnitTest_Suite', () => {
    let factory, pendency;
    let Mock = {};

    beforeEach(() => {
      angular.mock.module('otusjs');
      angular.mock.inject($injector => {
        factory = $injector.get('otusjs.model.pendency.UserActivityPendency');

        Mock.ActivityFactory = $injector.get('otusjs.model.activity.ActivityFactory');
        _prepareMockParameters();

        //Destruct ES6
        const {requester, receiver, dueDate, activity, id} = Mock.userActivityPendencyParameters;
        pendency = factory.create(requester, receiver, dueDate, activity, id);
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
      expect(pendency.objectType).toBe('userActivityPendency');
    });

    it('fromJsonObjectMethod_should_fit_attributes_of_json_and_return_userActivityPendency', () => {
      Mock.json = pendency.toJSON();
      let expectPendency = factory.fromJsonObject(Mock.json);
      expect(expectPendency.getID()).toBe("58ee02de28110d317f1ad75x");
    });

    it('getterMethods_should_return_values', function () {
      expect(pendency.getID()).toBe("58ee02de28110d317f1ad75x");
      expect(pendency.getCreationDate() instanceof Date).toBeTruthy();
      expect(pendency.getDueDate() instanceof Date).toBeTruthy();
      expect(pendency.getRequester()).toBe("otus_supervisor@otus.com");
      expect(pendency.getReceiver()).toBe("otus_revisor@otus.com");
      expect(pendency.getActivityID()).toBe("58ee02de28110d317f1ad09b");
      expect(pendency.getActivityAcronym()).toBe("PASC");
      expect(pendency.getActivityRecruitmentNumber()).toBe(1234567);
      expect(pendency.getActivitylastStatusName()).toBe("FINALIZED");
      expect(pendency.getActivityExternalID()).toBe("ABC123");
    });

    it('setReceiverMethod_should_update_receiverAttribute ', function () {
      expect(pendency.getReceiver()).toBe('otus_revisor@otus.com');
      pendency.setReceiver('otus_other_revisor@otus.com');
      expect(pendency.getReceiver()).toBe('otus_other_revisor@otus.com');
    });

    it('setDueDateMethod_should_update_dueDateAttribute ', function () {
      let expectedDueDate = new Date();
      expect(pendency.getDueDate()).not.toBe(expectedDueDate);
      pendency.setDueDate(expectedDueDate);
      expect(pendency.getDueDate()).toBe(expectedDueDate);
    });

    function _prepareMockParameters() {
      let activity = Mock.ActivityFactory.fromJsonObject(Test.utils.data.activityPASC);
      let activityInfo = factory.createActivityInfo(activity);

      Mock.userActivityPendencyParameters = {
        requester: "otus_supervisor@otus.com",
        receiver: "otus_revisor@otus.com",
        dueDate: new Date(),
        activityInfo: activityInfo,
        activity: activity,
        id: "58ee02de28110d317f1ad75x"
      }
    }
  });

})();


