fdescribe('ParticipantAliquotFactory', function() {
  var Mock = {};
  var aliquoteInfo;

  beforeEach(function() {
    module('otusjs.laboratory');

    mockLabParticipant();
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

    it('should generate the same values for this fields', function() {
      var aliquote = factory.create(aliquoteInfo);

      expect(aliquote.objectType).toEqual(aliquoteInfo.objectType);
      expect(aliquote.code).toEqual(aliquoteInfo.code);
      expect(aliquote.name).toEqual(aliquoteInfo.name);
      expect(aliquote.container).toEqual(aliquoteInfo.container);
      expect(aliquote.role).toEqual(aliquoteInfo.role);
    });

    it('should not call the AliquotCollectionDataFactory when any collectionData is given', function() {
      var aliquote = factory.create(aliquoteInfo);
      expect(Mock.AliquotCollectionDataFactory.create).not.toHaveBeenCalled();
    });


  });

  describe('the fromJSON method', function() {
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

  function mockLabParticipant() {
    Mock.AliquotConfiguration = {
      objectType: "AliquotConfiguration",
      aliquotMomentDescriptors: [{
          objectType: "AliquotMoment",
          name: "FASTING",
          aliquotTypesDescriptors: [{
             objectType: "AliquotType",
             name: "EDTA",
             aliquots: [
             {
                objectType: "AliquoteDescriptor",
                name: "STORAGE",
                label: "Armazenamento",
                quantity: 5
             }, {
                objectType: "AliquoteDescriptor",
                name: "BIOSORO_AL",
                label: "Biosoro",
                quantity: 2
             }, {
                objectType: "AliquoteDescriptor",
                name: "",
                label: "",
                quantity: 0
             }
             ]
          },
          {
             objectType: "AliquotType",
             name: "GEL",
             aliquots: [
                {
                   objectType: "AliquoteDescriptor",
                   name: "BIOSORO",
                   label: "Bioquímica Soro",
                   quantity: 1
                },
                {
                   objectType: "AliquoteDescriptor",
                   name: "PCR",
                   label: "PCR",
                   quantity: 1
                },
                {
                   objectType: "AliquoteDescriptor",
                   name: "FASTING_INSULINE",
                   label: "Insulina Jejum",
                   quantity: 1
                },
                {
                   objectType: "AliquoteDescriptor",
                   name: "BIOSORO_CQ",
                   label: "Bioquímica Soro CQ",
                   quantity: 2
                },
                {
                   objectType: "AliquoteDescriptor",
                   name: "FASTING_INSULINE_CQ",
                   label: "Insulina Jejum CQ",
                   quantity: 2
                },
                {
                   objectType: "AliquoteDescriptor",
                   name: "STORAGE",
                   label: "Armazenamento",
                   quantity: 8
                },
                {
                   objectType: "AliquoteDescriptor",
                   name: "STORAGE_CQ",
                   label: "Armazenamento",
                   quantity: 8
                }
             ]
          }]
      }, {
          objectType: "AliquotMoment",
          name: "POST_OVERLOAD",
          aliquotTypesDescriptors: []
      }],
      containerDescriptor: [{
          objectType: "ContainerDescriptor",
          name: "PALLET",
          label: "Palheta"
      }, {
          objectType: "ContainerDescriptor",
          name: "CRIOTUBE",
          label: "Criotubo"
      }]
   };

  }

});
