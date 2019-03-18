(function () {
  'use strict';

  angular
    .module('otusjs.user.permission')
    .factory('otusjs.user.permission.PermissionManagerFactory', Factory);

  Factory.$inject = ['otusjs.user.permission.PermissionMapper'];

  function Factory(PermissionMapper) {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(permissions, userEmail) {
      return new UserPermissionManager(PermissionMapper, permissions, userEmail);
    }

    return self;
  }


  function UserPermissionManager(PermissionMapper, permissions, userEmail) {
    let self = this;
    let email = userEmail;

    self.objectType = 'UserPermissionManager';
    self.permissionList =  _resolvePermissions(permissions) || [];
    
    function _resolvePermissions(permissions) {
      return permissions.map(permission => PermissionMapper.create(permission, email));
    }
  }
}());
