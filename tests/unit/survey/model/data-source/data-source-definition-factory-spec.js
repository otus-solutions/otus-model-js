describe("DataSourceDefinitionFactory", function() {

  var factory;
  var DATA_SOURCE_NAME = "Lista de Medicamentos";

  beforeEach(function() {
    angular.mock.module('otusjs.survey');

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.model.survey.DataSourceDefinitionFactory');
    });
  });

  describe("DataSourceDefinitionFactory.create()", function() {
    it("should return a new instance", function() {
      expect(factory.create(DATA_SOURCE_NAME)).toBeDefined();
    });
  });

});
