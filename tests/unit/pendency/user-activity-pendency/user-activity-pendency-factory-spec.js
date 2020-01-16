(function () {
  'use restrict';

  describe('UserActivityPendencyFactory_UnitTest_Suite', () => {
    let factory, pendency, pendencyfromJsonObject;
    let Mock = {};

    beforeEach(() => {
      angular.mock.module('otusjs');
      angular.mock.inject($injector => {
        factory = $injector.get('otusjs.model.pendency.UserActivityPendency');

        Mock.ActivityFactory = $injector.get('otusjs.model.activity.ActivityFactory');
        _prepareMockParameters();

        //Destruct ES6
        const {requester, receiver, dueDate, activityId, activityInfo, id} = Mock.userActivityPendencyParameters;
        pendency = factory.create(requester, receiver, dueDate, activityId, activityInfo, id);
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
      expect(pendency.objectType).toBe('userActivityPendency');
    });

    it('createMethod_should_fit_attributes_of_json_and_return_userActivityPendency', () => {
      Mock.json = pendency.toJSON();
      expect(JSON.stringify(Mock.json)).toBe(JSON.stringify(pendency));
    });

    it('getterMethods_should_return_values', function () {
      pendencyfromJsonObject = factory.fromJsonObject(Mock.userActivityPendencyParameters);
      expect(pendencyfromJsonObject.getID()).toBe("58ee02de28110d317f1ad75x");
      expect(pendencyfromJsonObject.getCreationDate() instanceof Date).toBeTruthy();
      expect(pendencyfromJsonObject.getDueDate() instanceof Date).toBeTruthy();
      expect(pendencyfromJsonObject.getRequester()).toBe("otus_supervisor@otus.com");
      expect(pendencyfromJsonObject.getReceiver()).toBe("otus_revisor@otus.com");
      expect(pendencyfromJsonObject.getActivityID()).toBe("58ee02de28110d317f1ad75y");
      expect(pendencyfromJsonObject.getActivityAcronym()).toBe("PASC");
      expect(pendencyfromJsonObject.getActivityName()).toBe("PRESSÃO ARTERIAL");
      expect(pendencyfromJsonObject.getActivityRecruitmentNumber()).toBe(1234567);
      expect(pendencyfromJsonObject.getActivitylastStatusName()).toBe("FINALIZED");
      expect(pendencyfromJsonObject.getActivityExternalID()).toBe("ABC123");
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
      let activityInfo = {
        acronym: "PASC",
        name: "PRESSÃO ARTERIAL",
        recruitmentNumber: 1234567,
        lastStatusName: "FINALIZED",
        externalID: "ABC123"
      };

      Mock.userActivityPendencyParameters = {
        requester: "otus_supervisor@otus.com",
        receiver: "otus_revisor@otus.com",
        dueDate: new Date(),
        activityId: "58ee02de28110d317f1ad75y",
        activityInfo: activityInfo,
        activity: activity,
        id: "58ee02de28110d317f1ad75x"
      }
    }
  });

})();


