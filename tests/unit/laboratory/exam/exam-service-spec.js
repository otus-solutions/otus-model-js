describe('the transportation service', function() {
  var Mock = {};

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory.transportation');
    angular.mock.module('otusjs.laboratory.configuration');

    mockTransportationLot();

    inject(function(_$injector_) {
      mockLaboratoryTransportationService(_$injector_);
    });
  });

  it('objectType should be equal TransportationLot', function() {
    var lot = Mock.LaboratoryTransportationService.createAliquotLot();
    expect(lot.objectType).toEqual('TransportationLot');
  });

  it('lot should be equal json', function() {
    var lot = Mock.LaboratoryTransportationService.buildAliquotLotFromJson(Mock.LotJson);
    expect(lot.objectType).toEqual(Mock.LotJson.objectType);
    expect(lot.code).toEqual(Mock.LotJson.code);
    expect(lot.shipmentDate).toEqual(Mock.LotJson.shipmentDate);
    expect(lot.processingDate).toEqual(Mock.LotJson.processingDate);
    expect(lot.operator).toEqual(Mock.LotJson.operator);
    expect(lot.aliquotList).toEqual(Mock.LotJson.aliquotList);
  });

  function mockLaboratoryTransportationService(_$injector_) {
    Mock.LaboratoryTransportationService = _$injector_.get('otusjs.laboratory.transportation.TransportationService');
  }

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