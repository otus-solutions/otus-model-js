describe("MonitoringPermissionFactory", function () {
  let factory;

  const USER_EMAIL = "email@provider.com";

  const PERMISSION_JSON = {
    objectType: "MonitoringPermission",
    email: "other_email@provider.com",
    centerActivitiesAccess : false,
    activityFlagsAccess : false,
    laboratoryFlagsAccess : false,
    laboratoryControlAccess : false,
    pendencyVisualizerAccess : false
  };

  beforeEach(function () {
    angular.mock.module('otusjs.user.permission');


    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.user.permission.MonitoringPermissionFactory');
    });

  });

  describe("the creation method", function () {
    it("should create with given json", function () {
      let permission = factory.create(PERMISSION_JSON);

      expect(permission.objectType).toEqual(PERMISSION_JSON.objectType);
      expect(permission.centerActivitiesAccess).toEqual(PERMISSION_JSON.centerActivitiesAccess);
      expect(permission.activityFlagsAccess).toEqual(PERMISSION_JSON.activityFlagsAccess);
      expect(permission.laboratoryFlagsAccess).toEqual(PERMISSION_JSON.laboratoryFlagsAccess);
      expect(permission.laboratoryControlAccess).toEqual(PERMISSION_JSON.laboratoryControlAccess);
      expect(permission.pendencyVisualizerAccess).toEqual(PERMISSION_JSON.pendencyVisualizerAccess);
      expect(permission.toJSON().email).toEqual(PERMISSION_JSON.email);
    });

    it("should create with given email when given", function () {
      let permission = factory.create(PERMISSION_JSON, USER_EMAIL);

      expect(permission.toJSON().email).toEqual(USER_EMAIL);
    });
  });

});