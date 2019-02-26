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


});