describe("BlockFactory", function() {
  var factory;
  var json = {
    name:"name",
    surveys: [
      "ACTA"
    ]
  };

  beforeEach(function() {
    angular.mock.module('otusjs.survey');

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.survey.BlockFactory');
    });
  });

  describe(" the ccreate method", function() {
    it("should return a new instance", function() {
      expect(factory.create(json)).toBeDefined();
    });

    it("should create a well formed object", function () {
      let block = factory.create(json);
      expect(json.name).toEqual(block.getName());
      expect(block.getSurveys().length).toEqual(1);

      block.addSurvey("DSO");
      expect(block.getSurveys().length).toEqual(2);

      block.removeSurvey("ACTA");
      expect(block.getSurveys().length).toEqual(1);
      expect(block.getSurveys()[0]).toEqual("DSO");

    });
  });

});