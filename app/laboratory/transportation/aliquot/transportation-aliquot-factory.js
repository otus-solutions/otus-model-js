(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .factory('otusjs.laboratory.transportation.TransportationAliquotFactory', factory);

  function factory() {
    var self = this;
    self.create = create;

    function create(aliquotInfo) {
      return new TransportationAliquot(aliquotInfo);
    }

    return self;
  }

  function TransportationAliquot() {
    var self = this;
  }
}());
