fdescribe('the transportation service', function() {
  var Mock = {};
  var service;
  var $httpBackend;

  beforeEach(function() {
    module('otusjs.laboratory.transportation');

    mockParticipantLaboratory();
    mockShipmentAliquot();

    inject(function(_$injector_) {
      var injections = {
        'LotFactory': mockTransportationLotFactory(_$injector_),
        '$http': _$injector_.get('$http')
      };
      $httpBackend = _$injector_.get('$httpBackend');
      $httpBackend.when('GET', 'app/laboratory/transportation/aliquot-list.json')
        .respond(Mock.shipmentAliquotsList);
      service = _$injector_.get('otusjs.laboratory.transportation.TransportationService', injections);
      $httpBackend.flush(); //run the http request on onInit method
    });
  });

  it('should', function() {
     var lot = Mock.LotFactory.create();
     lot.code = '30513515';
     Mock.shipmentAliquotsList.slice(0,3).forEach(function(aliquot) {
        lot.insertAliquot(aliquot);
     });
     lot.operator = 'fulanodetal@gmail.com';
     lot.processingDate = new Date().toISOString();
     lot.shipmentDate = new Date().toISOString();
     console.log(JSON.stringify(lot));
 });

  function mockTransportationLotFactory(_$injector_) {
    var injections = {
      'TransportationAliquotFactory': _$injector_.get('otusjs.laboratory.transportation.TransportationAliquotFactory')
    };
    Mock.LotFactory = _$injector_.get('otusjs.laboratory.transportation.LotFactory', injections);
  }

  function mockParticipantLaboratory() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockShipmentAliquot() {
    // this mocks backend role attaching sex and birthdate into aliquots
    Mock.shipmentAliquotsList = Test.utils.data.shipmentAliquotsList; //json-importer
  }
});
