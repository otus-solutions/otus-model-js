fdescribe("PermissionManagerFactory", function () {
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
      factory = _$injector_.get('otusjs.user.permission.PermissionManagerFactory', {
        "otusjs.survey.GroupFactory": _$injector_.get('otusjs.survey.GroupFactory')

      });
    });

    groupManager = factory.create(GROUP_LIST);
  });

});