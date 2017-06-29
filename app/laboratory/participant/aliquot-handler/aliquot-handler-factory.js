(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.AliquotHandlerFactory', factory);

  function factory() {
    var self = this;

    self.creat = create;

    function create(type, moment, cq){
      return new AliquotHandler(type, moment, cq);
    }

    return self;
  }

  function AliquotHandler(type, moment, cq){
    var self = this;
  }
}());
