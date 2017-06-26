fdescribe('ParticipantAliquotFactory', function() {
  var Mock = {};
  var aliquoteInfo;

  beforeEach(function() {
    module('otusjs.laboratory');

    inject(function(_$injector_) {
      var injections = {
        'AliquotCollectionDataFactory': mockAliquoteCollectionDataFactory(_$injector_)
      };
      factory = _$injector_.get('otusjs.laboratory.ParticipantAliquotFactory', injections);
    });
  });
  aliquoteInfo = {
    "objectType": "Aliquot",
    "code": 34200252,
    "name": "storage",
    "container": "criotube",
    "role": "storage",
  };
  describe('the creation method', function() {
    it('should create an aliquote typed object', function() {
      var aliquote = factory.create(aliquoteInfo);

      expect(aliquote.objectType).toEqual('Aliquot');
    });

    it('should generate the same values for this fields', function(){
      var aliquote = factory.create(aliquoteInfo);

      expect(aliquote.objectType).toEqual(aliquoteInfo.objectType);
      expect(aliquote.code).toEqual(aliquoteInfo.code);
      expect(aliquote.name).toEqual(aliquoteInfo.name);
      expect(aliquote.container).toEqual(aliquoteInfo.container);
      expect(aliquote.role).toEqual(aliquoteInfo.role);      
    });

    it('should not call the AliquotCollectionDataFactory when any collectionData is given', function(){
      var aliquote = factory.create(aliquoteInfo);
      expect(Mock.AliquotCollectionDataFactory.create).not.toHaveBeenCalled();
    });


  });

  describe('the fromJSON method', function(){
    it('should call AliquotCollectionDataFactory.create', function() {
        aliquoteInfo.collectionData = {
          time: '2017-06-26T05:50:19.434Z',
          operator: 'lalala@gmail.com'
        };
      var aliquote = factory.create(aliquoteInfo);
      expect(Mock.AliquotCollectionDataFactory.create).toHaveBeenCalledWith(aliquoteInfo.collectionData);
    });
  });


  function mockAliquoteCollectionDataFactory(_$injector_) {
    Mock.AliquotCollectionDataFactory = _$injector_.get('otusjs.laboratory.AliquotCollectionDataFactory');
    spyOn(Mock.AliquotCollectionDataFactory, 'create').and.callThrough();
    return Mock.AliquotCollectionDataFactory;
  }

});
