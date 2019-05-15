describe("PermissionMapper service", function () {
  let Mock = {};
  let service;

  const USER_EMAIL = "email@provider.com";

  const SURVEY_GROUP_PERMISSION_JSON = {
    objectType: "SurveyGroupPermission",
    email: "email@provider.com",
    groups: ["Centro de Investigação", "Controle de qualidade"]
  };

  const LABORATORY_PERMISSION_JSON = {
    objectType: "LaboratoryPermission",
    email: "email@provider.com",
    access: false
  };

  beforeEach(function () {
    angular.mock.module('otusjs.user.permission');


    inject(function (_$injector_) {
      _mock(_$injector_);

      service = _$injector_.get('otusjs.user.permission.PermissionMapper', {
        "otusjs.user.permission.SurveyGroupPermissionFactory": Mock.SurveyGroupPermissionFactory,
        "otusjs.user.permission.LaboratoryPermissionFactory": Mock.LaboratoryPermissionFactory
      });
    });

  });

  it("should create accordingly to objectType - SurveyGroupPermission", function () {
    spyOn(Mock.SurveyGroupPermissionFactory, "create");

    service.create(SURVEY_GROUP_PERMISSION_JSON, USER_EMAIL);

    expect(Mock.SurveyGroupPermissionFactory.create).toHaveBeenCalledWith(SURVEY_GROUP_PERMISSION_JSON, USER_EMAIL);
  });

  it("should create accordingly to objectType - LaboratoryPermission", function () {
    spyOn(Mock.LaboratoryPermissionFactory, "create");

    service.create(LABORATORY_PERMISSION_JSON, USER_EMAIL);

    expect(Mock.LaboratoryPermissionFactory.create).toHaveBeenCalledWith(LABORATORY_PERMISSION_JSON, USER_EMAIL);
  });

  function _mock(_$injector_) {
    Mock.SurveyGroupPermissionFactory = _$injector_.get('otusjs.user.permission.SurveyGroupPermissionFactory');
    Mock.LaboratoryPermissionFactory = _$injector_.get('otusjs.user.permission.LaboratoryPermissionFactory');
  }

});