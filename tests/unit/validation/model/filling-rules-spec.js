describe('FillingRulesOption', function() {
  var Mock = {};
  var fillingRules;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('FillingRulesOptionFactory', {
        'RulesFactory': mockRulesFactory(_$injector_)
      });
    });
    fillingRules = factory.create();
  });


  describe('createOption method', function() {

    beforeEach(function() {
      fillingRules.createOption("mandatory");
    });

    it("should call Mock.RulesFactory.create with mandatory", function() {
      expect(Mock.RulesFactory.create).toHaveBeenCalledWith("mandatory");
    });

    it("should populate options object", function() {
      expect(fillingRules.options).not.toEqual({});
    });

  });

  describe('removeFillingRules method', function() {

    beforeEach(function() {
      fillingRules.createOption("mandatory");
      fillingRules.removeFillingRules("mandatory");
    });

    it("should remove mandatory of options object", function() {
      expect(fillingRules.options).toEqual({});
    });

  });

  function mockRulesFactory($injector) {
    Mock.RulesFactory = $injector.get('RulesFactory');
    spyOn(Mock.RulesFactory, 'create').and.callThrough();
    return Mock.RulesFactory;
  }

});
