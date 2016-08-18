(function() {
  'use strict';

  angular
    .module('otusjs.navigation')
    .service('ExceptionService', ExceptionService);

  function ExceptionService(mensagem, type) {
    this.mensagem = mensagem;
    this.type = type;
  }

}());
