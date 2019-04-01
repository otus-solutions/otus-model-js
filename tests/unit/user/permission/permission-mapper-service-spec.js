describe("PermissionMapper service", function () {
  let Mock = {};
  let service;

  const USER_EMAIL = "email@provider.com";


  const PERMISSION_JSON = {
    objectType: "SurveyGroupPermission",
    email: "email@provider.com",
    groups: ["Centro de Investigação", "Controle de qualidade"]
  };

  beforeEach(function () {
    angular.mock.module('otusjs.user.permission');


    inject(function (_$injector_) {
      _mock(_$injector_);

      service = _$injector_.get('otusjs.user.permission.PermissionMapper', {
        "otusjs.user.permission.SurveyGroupPermissionFactory": Mock.SurveyGroupPermissionFactory
      });
    });

  });

  it("should create accordingly to objectType", function () {
    spyOn(Mock.SurveyGroupPermissionFactory, "create");

    service.create(PERMISSION_JSON, USER_EMAIL);

    expect(Mock.SurveyGroupPermissionFactory.create).toHaveBeenCalledWith(PERMISSION_JSON, USER_EMAIL);
  });

  function _mock(_$injector_) {
    Mock.SurveyGroupPermissionFactory = _$injector_.get('otusjs.user.permission.SurveyGroupPermissionFactory');
  }

});