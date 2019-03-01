describe("GroupFactory", function () {
  var factory;
  let group;

  var NAME = "name";
  var SURVEY_ACRONYMS = [
    "ACTA"
  ];

  beforeEach(function () {
    angular.mock.module('otusjs.survey');

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.survey.GroupFactory');
    });

    group = factory.create(NAME, SURVEY_ACRONYMS);
  });

  describe(" the create method", function () {
    it("should return a new instance", function () {
      expect(factory.create(NAME, SURVEY_ACRONYMS)).toBeDefined();
    });

    it("should create a well formed object", function () {
      expect(group.getName()).toEqual(NAME);
      expect(group.getSurveys().length).toEqual(1);

      group.addSurvey("DSO");
      expect(group.getSurveys().length).toEqual(2);

      group.removeSurvey("ACTA");
      expect(group.getSurveys().length).toEqual(1);
      expect(group.getSurveys()[0]).toEqual("DSO");

    });

    it("should call toJSON on stringify", function () {
      spyOn(group, 'toJSON').and.callThrough();
      let json = JSON.stringify(group);

      expect(group.toJSON).toHaveBeenCalled();

      let parse = JSON.parse(json);
      expect(parse.name).toBeDefined();
      expect(parse.surveyAcronyms).toBeDefined();

    });
  });

});