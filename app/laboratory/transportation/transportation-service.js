(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .service('otusjs.laboratory.transportation.TransportationService', service);

  service.$inject = [
     'otusjs.laboratory.transportation.LotFactory',
     '$http'
  ];

  function service(LotFactory, $http) {
    var self = this;
    onInit();

    function onInit() {
      console.log('a');
      $http.get('app/laboratory/transportation/aliquot-list.json')
         .then(function(a) {
            console.log(a);
         });
    }

    return self;
  }
}());
