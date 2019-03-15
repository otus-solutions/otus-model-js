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

    function create(permissions) {
      return new UserPermissionManager(PermissionMapper, permissions);
    }

    return self;
  }


  function UserPermissionManager(PermissionMapper, permissions) {
    let self = this;

    self.objectType = 'UserPermissionManager';
    self.permissionList =  _resolvePermissions(permissions) || [];

    /* Public methods */



    function _resolvePermissions(permissions) {
      return permissions.map(permission => PermissionMapper.resolve(permission));
    }
  }
}());
