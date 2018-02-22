describe('aliquot collection data factory', function() {
  var Mock = {};
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory.participant');

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.laboratory.participant.AliquotCollectionDataFactory');
    });

    //...............
    mockCollectionInfo();
    mockInstanceOfAliquotCollectionDataFull();
    mockInstanceOfAliquotCollectionDataEmpty();
    //...............
  });


  //...............
  it('should create an AliquotCollectionData object', function() {
    var object = factory.create(Mock.CollectionInfo);
    expect(object.objectType).toEqual("AliquotCollectionData");
  });

  it('should stringfy an AliquotCollectionData', function() {
    var object = factory.create(Mock.CollectionInfo);
    expect(JSON.stringify(object)).toEqual(JSON.stringify(Mock.InstanceOfAliquotCollectionDataFull));
  });

  it('should empty instance of AliquotCollectionData', function() {
    var object = factory.create({});
    expect(JSON.stringify(object)).toEqual(JSON.stringify(Mock.InstanceOfAliquotCollectionDataEmpty));
  });
  //...............


  //..........................
  function mockCollectionInfo() {
    Mock.CollectionInfo = {
      metadata: 'SKIP',
      operator: 'jose@jose.eu',
      time: 'mytime',
      processingDate: 'myProcessingDate'
    };
  }

  function mockInstanceOfAliquotCollectionDataFull() {
    Mock.InstanceOfAliquotCollectionDataFull = {
      objectType: 'AliquotCollectionData',
      metadata: 'SKIP',
      operator: 'jose@jose.eu',
      time: 'mytime',
      processingDate: 'myProcessingDate'
    };
  }

  function mockInstanceOfAliquotCollectionDataEmpty() {
    Mock.InstanceOfAliquotCollectionDataEmpty = {
      objectType: 'AliquotCollectionData',
      metadata: '',
      operator: '',
      time: '',
      processingDate: ''
    };
  }
  //..........................


});
