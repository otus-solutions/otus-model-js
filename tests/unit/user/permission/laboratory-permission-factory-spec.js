describe("SurveyGroupPermissionFactory", function () {
  let factory;

  const USER_EMAIL = "email@provider.com";

  const PERMISSION_JSON = {
    objectType: "LaboratoryPermission",
    email: "other_email@provider.com",
    participantLaboratoryAccess: false,
    sampleTransportationAccess: false,
    examLotsAccess:false,
    examSendingAccess:true,
    unattachedLaboratoriesAccess:false,
    laboratoryMaterialManagerAccess:false,
    aliquotManagerAccess:false
  };

  beforeEach(function () {
    angular.mock.module('otusjs.user.permission');


    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.user.permission.LaboratoryPermissionFactory');
    });

  });

  describe("the creation method", function () {
    it("should create with given json", function () {
      let permission = factory.create(PERMISSION_JSON);

      expect(permission.objectType).toEqual(PERMISSION_JSON.objectType);
      expect(permission.participantLaboratoryAccess).toEqual(PERMISSION_JSON.participantLaboratoryAccess);
      expect(permission.sampleTransportationAccess).toEqual(PERMISSION_JSON.sampleTransportationAccess);
      expect(permission.examLotsAccess).toEqual(PERMISSION_JSON.examLotsAccess);
      expect(permission.examSendingAccess).toEqual(PERMISSION_JSON.examSendingAccess);
      expect(permission.unattachedLaboratoriesAccess).toEqual(PERMISSION_JSON.unattachedLaboratoriesAccess);
      expect(permission.laboratoryMaterialManagerAccess).toEqual(PERMISSION_JSON.laboratoryMaterialManagerAccess);
      expect(permission.aliquotManagerAccess).toEqual(PERMISSION_JSON.aliquotManagerAccess);
      expect(permission.toJSON().email).toEqual(PERMISSION_JSON.email);
    });

    it("should create with given email when given", function () {
      let permission = factory.create(PERMISSION_JSON, USER_EMAIL);

      expect(permission.toJSON().email).toEqual(USER_EMAIL);
    });
  });

});