fdescribe('ActivityImportService Tests', function () {
  var Mock = {};
  var Injections = {};
  var service;
  var surveyFactory;
  var surveyForm;

  beforeEach(function () {
    angular.mock.module('otus.validation');
  });

  beforeEach(function () {
    angular.mock.module('otusjs');
  });

  beforeEach(function () {
    inject(function (_$injector_) {
      Injections['ElementRegisterFactory'] = _$injector_.get('ElementRegisterFactory');
      Injections['ValidationService'] = _$injector_.get('otusjs.validation.api.ValidationService');
      Injections['ActivityFactory'] = _$injector_.get('otusjs.model.activity.ActivityFactory');
      surveyFactory = _$injector_.get('SurveyFactory');
      surveyForm = surveyFactory.fromJsonObject(Test.utils.data.activityPASC.surveyForm.surveyTemplate);
      service = _$injector_.get('otusjs.model.activity.ActivityImportService', Injections);
    });
  });

  it('should defined service', function () {
    expect(service).toBeDefined();
    expect(service.execute).toBeDefined();
    expect(service.setAnswers).toBeDefined();
  });


  it('should create activities', function () {
    var _activities = service.execute(surveyForm, Test.utils.data.jsonObjectImport);
    expect(_activities.length).toBeGreaterThan(0);
    expect(_activities.length).toBe(2);
    expect(_activities[0].isValid).toBeFalsy();
    expect(_activities[1].isValid).toBeTruthy();
    console.log(service.execute(surveyForm, Test.utils.data.jsonObjectImport)[1].surveyForm.toJSON());
    console.log(Test.utils.data.activityPASC.surveyForm)
  });

});