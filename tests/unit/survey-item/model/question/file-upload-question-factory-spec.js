describe("FileUploadQuestionFactory", function() {
  var Mock = {};
  var factory;

  /* @BeforeScenario */
  beforeEach(function() {
    angular.mock.module('otusjs');
    mockParams();

    inject(function(_$injector_) {
      var injections = {
        'LabelFactory': mockLabelFactory(_$injector_),
        'MetadataGroupFactory': mockMetadataGroupFactory(
          _$injector_),
        'FillingRulesOptionFactory': mockFillingRulesOptionFactory(
          _$injector_)
      }

      factory = _$injector_.get('FileUploadQuestionFactory',
        injections);
    });
  });


  it("create method", function() {

    spyOn(factory, "create");
    expect(factory.create.calls.any()).toEqual(false);
    factory.create(Mock.templateID, Mock.prototype);
    expect(factory.create.calls.any()).toEqual(true);

    expect(factory.create).toHaveBeenCalled();
    expect(factory.create).toHaveBeenCalledWith(Mock.templateID, Mock.prototype);
    expect(factory.create(Mock.templateID, Mock.prototype)).not.toEqual(
      null);
  });



  function mockLabelFactory(_$injector_) {
    Mock.LabelFactory = _$injector_.get('LabelFactory');
    return Mock.LabelFactory;
  }

  function mockMetadataGroupFactory(_$injector_) {
    Mock.MetadataGroupFactory = _$injector_.get('MetadataGroupFactory');
    return Mock.MetadataGroupFactory;
  }

  function mockFillingRulesOptionFactory(_$injector_) {
    Mock.FillingRulesOptionFactory = _$injector_.get(
      'FillingRulesOptionFactory');
    return Mock.FillingRulesOptionFactory;
  }

  function mockParams() {
    Mock.prototype = {
      objectType: "TESTE"
    };
    Mock.templateID = "TST1";
  }
});
