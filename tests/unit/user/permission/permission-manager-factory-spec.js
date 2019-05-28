describe("PermissionManagerFactory", function () {
  let Mock = {};
  let factory;
  let permissionManager;

  const USER_EMAIL = "email@provider.com";

  const PERMISSION_LIST = [
    {
      objectType: "SurveyGroupPermission",
      email: "email@provider.com",
      groups: ["Centro de Investigação", "Controle de qualidade"]
    }
  ];

  beforeEach(function () {
    angular.mock.module('otusjs.user.permission');


    inject(function (_$injector_) {
      _mock(_$injector_);

      factory = _$injector_.get('otusjs.user.permission.PermissionManagerFactory', {
        "otusjs.user.permission.PermissionMapper": Mock.PermissionMapper

      });
    });

  });

  describe("the creation method", function () {
    it("should create a UserPermissionManager", function () {
      permissionManager = factory.create(PERMISSION_LIST, USER_EMAIL);
      expect(permissionManager).toBeDefined();
      expect(permissionManager.objectType).toEqual("UserPermissionManager");
    });

    it("should throw an error when the email is not provided", function () {
      let functionCall = function () {
        factory.create(PERMISSION_LIST);
      };

      expect(functionCall).toThrowError("Undefined user email");
    })
  });

  describe("the findByType method", function () {
    beforeAll(function () {
      permissionManager = factory.create(PERMISSION_LIST, USER_EMAIL);

    });

    it("should fetch a permission given the object type", function () {
      let found = permissionManager.findByType("SurveyGroupPermission");
      expect(found.objectType).toEqual("SurveyGroupPermission")
    });

    it("should throw an error when doesn't found the given objectType", function () {
      let functionCall = function () {
        permissionManager.findByType("UnpredictedObjectType")
      };
      expect(functionCall).toThrowError("Permission not found: " + "UnpredictedObjectType");
    });

  });

  describe("the _resolvePermissions private method", function () {
    beforeEach(function () {
      spyOn(Mock.PermissionMapper, "create");
    });

    it("should call the PermissionMapper for each permission on the list", function () {
      let permissionList = [
        {objectType:"Type 1"},
        {objectType:"Type 2"},
        {objectType:"Type 3"},
        {objectType:"Type 4"}
      ];
      permissionManager = factory.create(permissionList, USER_EMAIL);

      expect(Mock.PermissionMapper.create).toHaveBeenCalledTimes(4)
      expect(Mock.PermissionMapper.create).toHaveBeenCalledWith({objectType:"Type 1"}, USER_EMAIL)

    });
  });

  function _mock(_$injector_) {
    Mock.PermissionMapper = _$injector_.get('otusjs.user.permission.PermissionMapper');
  }
});