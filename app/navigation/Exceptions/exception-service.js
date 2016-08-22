(function() {
  'use strict';

  angular
    .module('otusjs.navigation')
    .service('ExceptionService', ExceptionService);

  function ExceptionService() {
    var self = this;

    self.InvalidStateError = createErrorType('InvalidRouteException');

    function createErrorType(name) {
      function E(message) {
        this.message = message;
      }
      E.prototype = Object.create(Error.prototype);
      E.prototype.name = name;
      E.prototype.constructor = E;
      return E;
    }

  }

}());
