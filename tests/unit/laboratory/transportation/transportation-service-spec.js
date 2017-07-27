fdescribe('the transportation service', function() {
   var Mock = {};
   var service;

   beforeEach(function() {
     module('otusjs.laboratory.transportation');

     inject(function(_$injector_) {
       var injections = {
         'LotFactory': mockTransportationLotFactory(_$injector_),
         '$http':  _$injector_.get('$http')
       };
       service = _$injector_.get('otusjs.laboratory.transportation.TransportationService', injections);
     });
   });

   it('should', function () {

   });

   function mockTransportationLotFactory(_$injector_) {
      Mock.LotFactory = _$injector_.get('otusjs.laboratory.transportation.LotFactory');
   }
});
