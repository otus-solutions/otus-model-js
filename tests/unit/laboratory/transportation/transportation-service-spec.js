fdescribe('the transportation service', function() {
   var Mock = {};
   var service;
   var $httpBackend;

   beforeEach(function() {
     module('otusjs.laboratory.transportation');


     inject(function(_$injector_) {
       var injections = {
         'LotFactory': mockTransportationLotFactory(_$injector_),
         '$http':  _$injector_.get('$http')
       };
       $httpBackend = _$injector_.get('$httpBackend');
       $httpBackend.when('GET', 'app/laboratory/transportation/aliquot-list.json')
                            .respond({userId: 'userX'}, {'A-Token': 'xxx'});
       service = _$injector_.get('otusjs.laboratory.transportation.TransportationService', injections);
     });
   });

   it('should', function () {
      service.get();
      $httpBackend.flush();

   });

   function mockTransportationLotFactory(_$injector_) {
      var injections = {
        'TransportationAliquotFactory': _$injector_.get('otusjs.laboratory.transportation.TransportationAliquotFactory')
      };
      Mock.LotFactory = _$injector_.get('otusjs.laboratory.transportation.LotFactory', injections);
   }
});
