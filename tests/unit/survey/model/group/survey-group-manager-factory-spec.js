fdescribe("GroupFactory", function() {
  let factory;
  const jsonGroups = {
    name:"name",
    surveys: [
      "ACTA"
    ]
  };

  beforeEach(function() {
    angular.mock.module('otusjs.survey');

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.survey.GroupManagerFactory', {
        "otusjs.model.survey.GroupFactory":  _$injector_.get('otusjs.survey.GroupFactory')

      });
    });
  });

  describe(" the ccreate method", function() {
    it("should return a new instance", function() {
      expect(factory.create(json)).toBeDefined();
    });

  });

});