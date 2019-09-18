describe("surveyItemGroupFactory_TestSuite", function () {
  var factory, surveyItemGroup;
  var Mock = {};
  const ERROR_LOWER_LIMIT_GROUP_MEMBER = "A group must have at least 2 members";

  beforeEach(function() {
    angular.mock.module("otusjs");
    angular.mock.inject(function ($injector) {
      factory = $injector.get("otusjs.surveyItemGroup.SurveyItemGroupFactory");
      Mock.members = Test.utils.data.groupArtefacts.members;
      surveyItemGroup = factory.create(angular.copy(Mock.members));
      Mock.surveyItemGroupJson = surveyItemGroup.toJSON();
    });
  });

  it('factoryExistence check', function() {
    expect(factory).toBeDefined();
  });

  it('factoryMethodsExistence check', () => {
    expect(factory.create).toBeDefined();
    expect(factory.fromJson).toBeDefined();
  });

  it('createMethod_should_return_instance_of_SurveyItemGroup', function() {
    expect(surveyItemGroup.hasMember).toBeDefined();
    expect(surveyItemGroup.getMember).toBeDefined();
    expect(surveyItemGroup.removeMember).toBeDefined();
    expect(surveyItemGroup.rewrite).toBeDefined();
  });

  it('toJSONMethod_should_convert_instance_to_json', function() {
    expect(JSON.stringify(surveyItemGroup.toJSON())).toBe(JSON.stringify(Mock.surveyItemGroupJson));
  });

  it('test_should_check_values_injected_by_the_createMethod', function() {
    expect(surveyItemGroup.start).toEqual("TST1");
    expect(surveyItemGroup.end).toEqual("TST4");
    expect(surveyItemGroup.members
      .filter((member) =>  {
        return member.position === "middle" && member.id === "TST2"
      }).length).toBe(1);
  });

  it('test_of_fromJsonMethod_ should_convert_json_and_test_instanceInternalMethods', function () {
    let result = factory.fromJson(Mock.surveyItemGroupJson);
    expect(JSON.stringify(result.getMember("TST1"))).toBe('{"id":"TST1","position":"start"}');
    expect(result.hasMember("TST2")).toBeTruthy();
    result.removeMember("TST2");
    expect(result.hasMember("TST2")).toBeFalsy();
  });

  it('test_of_removeMember_should_throw_error_for_lowerLimit_of_items_in_group', function () {
    let result = factory.fromJson(Mock.surveyItemGroupJson);
    result.removeMember("TST1");
    result.removeMember("TST4");
    expect(result.removeMember).toThrowError(Error, ERROR_LOWER_LIMIT_GROUP_MEMBER);
  });
});