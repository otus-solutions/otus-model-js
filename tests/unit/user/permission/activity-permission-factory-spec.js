describe("ActivityPermissionFactory", function () {
  let factory;

  const USER_EMAIL = "email@provider.com";

  const PERMISSION_JSON = {
    objectType: "ActivityPermission",
    email: "other_email@provider.com",
    participantActivityAccess: false,
    offlineActivitySincAccess: false
  };

  beforeEach(function () {
    angular.mock.module('otusjs.user.permission');


    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.user.permission.ActivityPermissionFactory');
    });

  });

  describe("the creation method", function () {
    it("should create with given json", function () {
      let permission = factory.create(PERMISSION_JSON);

      expect(permission.objectType).toEqual(PERMISSION_JSON.objectType);
      expect(permission.participantActivityAccess).toEqual(PERMISSION_JSON.participantActivityAccess);
      expect(permission.offlineActivitySincAccess).toEqual(PERMISSION_JSON.offlineActivitySincAccess);
      expect(permission.toJSON().email).toEqual(PERMISSION_JSON.email);
    });

    it("should create with given email when given", function () {
      let permission = factory.create(PERMISSION_JSON, USER_EMAIL);

      expect(permission.toJSON().email).toEqual(USER_EMAIL);
    });
  });

});