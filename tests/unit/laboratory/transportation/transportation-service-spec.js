describe('the transportation service', function() {
  var Mock = {};
  var transportationService;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    mockTransportationLot();

    inject(function(_$injector_) {
      transportationService = _$injector_.get(
        'otusjs.laboratory.transportation.TransportationService', {}
      );
    });
  });

  it('objectType should be equal TransportationLot', function() {
    var lot = transportationService.createAliquotLot();
    expect(lot.objectType).toEqual('TransportationLot');
  });

  it('lot should be equal json', function() {
    var lot = transportationService.buildAliquotLotFromJson(Mock.LotJson);
    expect(lot.objectType).toEqual(Mock.LotJson.objectType);
    expect(lot.code).toEqual(Mock.LotJson.code);
    expect(lot.shipmentDate).toEqual(Mock.LotJson.shipmentDate);
    expect(lot.processingDate).toEqual(Mock.LotJson.processingDate);
    expect(lot.operator).toEqual(Mock.LotJson.operator);
    expect(lot.aliquotList).toEqual(Mock.LotJson.aliquotList);
  });

  function mockTransportationLot() {
    Mock.LotJson = {
      objectType: "TransportationLot",
      code: "30513515",
      shipmentDate: "2017-09-21T15:36:56.929Z",
      processingDate: "2017-09-21T15:36:56.929Z",
      operator: "teste@email.com",
      aliquotList: []
    }
  }
});