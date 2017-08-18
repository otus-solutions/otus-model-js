fdescribe('aliquot collection data factory', function() {
  var Mock = {};

  beforeEach(function() {
    module('otusjs.laboratory');

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.laboratory.AliquotCollectionDataFactory');
    });

    //...............
    mockCollectionInfo();
    mockInstanceOfAliquotCollectionDataFull();
    mockInstanceOfAliquotCollectionDataEmpty();
    //...............
  });


  //...............
  fit('should create an AliquotCollectionData object', function() {
    var object = factory.create(Mock.CollectionInfo);
    expect(object.objectType).toEqual("AliquotCollectionData");
  });
  
  fit('should stringfy an AliquotCollectionData', function() {
    var object = factory.create(Mock.CollectionInfo);
    expect(JSON.stringify(object)).toEqual(JSON.stringify(Mock.InstanceOfAliquotCollectionDataFull));
  });

  fit('should empty instance of AliquotCollectionData', function() {
    var object = factory.create({});
    expect(JSON.stringify(object)).toEqual(JSON.stringify(Mock.InstanceOfAliquotCollectionDataEmpty));
  });
  //...............


  //..........................
  function mockCollectionInfo() {
    Mock.CollectionInfo = {
      metadata: 'SKIP',
      operator: 'jose@jose.eu',
      time: 'mytime'
    };
  }

  function mockInstanceOfAliquotCollectionDataFull() {
    Mock.InstanceOfAliquotCollectionDataFull = {
      objectType: 'AliquotCollectionData',
      metadata: 'SKIP',
      operator: 'jose@jose.eu',
      time: 'mytime'
    };
  }

  function mockInstanceOfAliquotCollectionDataEmpty() {
    Mock.InstanceOfAliquotCollectionDataEmpty = {
      objectType: 'AliquotCollectionData',
      metadata: '',
      operator: '',
      time: ''
    };
  }
  //..........................


});
