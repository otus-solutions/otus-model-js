describe("GroupFactory", function() {
  var factory;

  var NAME = "name";
  var SURVEY_ACRONYMS = [
    "ACTA"
  ];

  beforeEach(function() {
    angular.mock.module('otusjs.survey');

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.survey.GroupFactory');
    });
  });

  describe(" the create method", function() {
    it("should return a new instance", function() {
      expect(factory.create(NAME, SURVEY_ACRONYMS)).toBeDefined();
    });

    it("should create a well formed object", function () {
      let group = factory.create(NAME, SURVEY_ACRONYMS);
      expect(group.getName()).toEqual(NAME);
      expect(group.getSurveys().length).toEqual(1);

      group.addSurvey("DSO");
      expect(group.getSurveys().length).toEqual(2);

      group.removeSurvey("ACTA");
      expect(group.getSurveys().length).toEqual(1);
      expect(group.getSurveys()[0]).toEqual("DSO");

    });
  });

});