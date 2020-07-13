describe("ParticipantPermissionFactory", function () {
  let factory;

  const USER_EMAIL = "email@provider.com";

  const PERMISSION_JSON = {
    objectType: "ParticipantPermission",
    email: "other_email@provider.com",
    participantListAccess: false,
    participantCreateAccess: false,
    anonymousParticipantAccess: false
  };

  beforeEach(function () {
    angular.mock.module('otusjs.user.permission');


    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.user.permission.ParticipantPermissionFactory');
    });

  });

  describe("the creation method", function () {
    it("should create with given json", function () {
      let permission = factory.create(PERMISSION_JSON);

      expect(permission.objectType).toEqual(PERMISSION_JSON.objectType);
      expect(permission.participantListAccess).toEqual(PERMISSION_JSON.participantListAccess);
      expect(permission.participantCreateAccess).toEqual(PERMISSION_JSON.participantCreateAccess);
      expect(permission.anonymousParticipantAccess).toEqual(PERMISSION_JSON.anonymousParticipantAccess);
      expect(permission.toJSON().email).toEqual(PERMISSION_JSON.email);
    });

    it("should create with given email when given", function () {
      let permission = factory.create(PERMISSION_JSON, USER_EMAIL);

      expect(permission.toJSON().email).toEqual(USER_EMAIL);
    });
  });

});