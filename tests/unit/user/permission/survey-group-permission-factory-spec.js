describe("SurveyGroupPermissionFactory", function () {
  let factory;

  const USER_EMAIL = "email@provider.com";

  const PERMISSION_JSON = {
    objectType: "SurveyGroupPermission",
    email: "other_email@provider.com",
    groups: ["Centro de Investigação", "Controle de qualidade", "Other group", "Yet another group"]
  };

  beforeEach(function () {
    angular.mock.module('otusjs.user.permission');


    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.user.permission.SurveyGroupPermissionFactory');
    });

  });

  describe("the creation method", function () {
    it("should create with given json", function () {
      let permission = factory.create(PERMISSION_JSON);

      expect(permission.objectType).toEqual(PERMISSION_JSON.objectType);
      expect(permission.groups).toEqual(PERMISSION_JSON.groups);
      expect(permission.toJSON().email).toEqual(PERMISSION_JSON.email);
    });

    it("should create with given email when given", function () {
      let permission = factory.create(PERMISSION_JSON, USER_EMAIL);

      expect(permission.toJSON().email).toEqual(USER_EMAIL);
    });
  });

  describe("the SurveyGroupPermission methods", function () {
    let permission;

    beforeEach(function () {
      permission = factory.create(PERMISSION_JSON)
    });

    it("should add new groups to array", function () {
      let groupSize = permission.groups.length;
      permission.addGroup("new group");

      expect(permission.groups.length).toEqual(groupSize + 1);
      expect(permission.groups[groupSize]).toEqual("new group")
    });

    it("should remove groups by name", function () {
      let groupSize = permission.groups.length;
      permission.removeGroupByName("Other group");

      expect(permission.groups.length).toEqual(groupSize - 1);
      expect(permission.groups.find(perm => perm === "Other group")).not.toBeDefined();

    });

    it("should remove groups by index", function () {
      let groupSize = permission.groups.length;
      let group = permission.groups[3];

      permission.removeGroupByPosition(3);

      expect(permission.groups.length).toEqual(groupSize - 1);
      expect(permission.groups[3]).not.toEqual(group);
    });


  })


});