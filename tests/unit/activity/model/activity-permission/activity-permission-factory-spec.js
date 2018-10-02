describe('Activity Permission Factory Test', function () {
  var Mock = {};
  var factory;
  var permission = null;
  var EMAIL = 'otus@gmail.com';

  beforeEach(function () {
    angular.mock.module('otusjs.model.activity');

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.model.activity.ActivityPermissionFactory');
      mockValues()
      permission = factory.create(Mock.surveyFormObject);
      spyOn(permission, 'showError').and.callThrough();
      spyOn(permission, 'isUserExists').and.callThrough();
    });
  });

  it('should create an object activity permission', function () {
    expect(permission.addUser).toBeDefined();
    expect(typeof permission.addUser === "function").toBeDefined();
    expect(permission.removeUser).toBeDefined();
    expect(typeof permission.removeUser === "function").toBeDefined();
    expect(permission.showError).toBeDefined();
    expect(typeof permission.showError === "function").toBeDefined();
    expect(permission.isUserExists).toBeDefined();
    expect(typeof permission.isUserExists === "function").toBeDefined();
    expect(permission.toJSON()).toEqual(Mock.Permission);
  });

  it('should add user in exclusive disjunction', function () {
    expect(permission.exclusiveDisjunction.length).toEqual(0);
    permission.addUser(EMAIL);
    expect(permission.isUserExists).toHaveBeenCalledWith(EMAIL);
    expect(permission.isUserExists).toHaveBeenCalledTimes(1)
    expect(permission.exclusiveDisjunction.length).toEqual(1);
  });

  it('should not add user in exclusive disjunction', function () {
    expect(permission.exclusiveDisjunction.length).toEqual(0);
    expect(function () {
      permission.addUser(jasmine.any(String));
      expect(permission.isUserExists).toHaveBeenCalledWith(EMAIL);
      expect(permission.isUserExists).toHaveBeenCalledTimes(1)
      expect(permission.showError).toHaveBeenCalledTimes(1);
    }).toThrowError('Email invalid!');
    expect(permission.exclusiveDisjunction.length).toEqual(0);
  });

  it('should remove user in exclusive disjunction', function () {
    permission.addUser(EMAIL);
    expect(permission.exclusiveDisjunction.length).toEqual(1);
    permission.removeUser(EMAIL);
    expect(permission.isUserExists).toHaveBeenCalledWith(EMAIL);
    expect(permission.isUserExists).toHaveBeenCalledTimes(2);
    expect(permission.exclusiveDisjunction.length).toEqual(0);
  });

  it('should not remove user in exclusive disjunction', function () {
    permission.addUser(EMAIL);
    expect(permission.exclusiveDisjunction.length).toEqual(1);
    expect(function () {
      permission.removeUser(jasmine.any(String));
      expect(permission.showError).toHaveBeenCalledTimes(1);
      expect(permission.isUserExists).toHaveBeenCalledWith(EMAIL);
      expect(permission.isUserExists).toHaveBeenCalledTimes(2);
    }).toThrowError('Email invalid!');
    expect(permission.exclusiveDisjunction.length).toEqual(1);
  });


  function mockValues() {
    Mock.surveyFormObject = {
      surveyTemplate: {
        identity: {
          acronym: 'acta'
        }
      },
      version: 1
    };

    Mock.Permission = {
      objectType: 'ActivityPermission',
      version: 1,
      acronym: 'ACTA',
      exclusiveDisjunction: []
    };
  }
})