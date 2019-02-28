fdescribe("GroupFactory", function () {
  let factory;
  let groupManager;

  const GROUP_LIST = [
    {
      name: "G1",
      surveyAcronyms: [
        "ACTA"
      ]
    },
    {
      name: "G2",
      surveyAcronyms: [
        "ANTC"
      ]
    }
  ];

  const GROUP_JSON = {
    name: "G3",
    surveyAcronyms: [
      "ANTC"
    ]
  };

  beforeEach(function () {
    angular.mock.module('otusjs.survey');

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.survey.GroupManagerFactory', {
        "otusjs.survey.GroupFactory": _$injector_.get('otusjs.survey.GroupFactory')

      });
    });

    groupManager = factory.create(GROUP_LIST);
  });

  it("should return a new instance", function () {
    expect(groupManager).toBeDefined();
    expect(groupManager.getGroupList().length).toEqual(2)
  });

  it("should return group list", function () {
    expect(groupManager.getGroupList().length).toEqual(2)
  });

  it("should return the groups names", function () {
    expect(groupManager.getGroupNames()).toEqual(["G1", "G2"])
  });

  it("should return a group surveys", function () {
    expect(groupManager.getGroupSurveys("G1")).toEqual(["ACTA"])
  });

  it("should, given survey, get groups in which is present", function () {
    expect(groupManager.getSurveyGroups("ACTA")).toEqual(["G1"])
  });

  it("should return a group by name", function () {
    expect(groupManager.getGroup("G1").getName()).toEqual("G1");
  });

  it("should create a new group and add it to structure", function () {
    groupManager.createGroup(GROUP_JSON.name, GROUP_JSON.surveyAcronyms);
    expect(groupManager.getGroupList().length).toEqual(3);
  });

  it("should return only the group list when called toJson", function () {
    spyOn(groupManager, 'getGroupList').and.callThrough();
    JSON.stringify(groupManager);
    expect(groupManager.getGroupList).toHaveBeenCalled();
  });

});
