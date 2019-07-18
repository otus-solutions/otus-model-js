describe('ActivityImportService_TestSuite', function () {

  var service, Injections = [];

  beforeEach(function () {
    angular.mock.module('otusjs');
    angular.mock.inject($injector => {
      Injections.ElementRegisterFactory = $injector.get('ElementRegisterFactory');
      Injections.ValidationService = $injector.get('otusjs.validation.api.ValidationService');
      Injections.ActivityFactory = $injector.get('otusjs.model.activity.ActivityFactory');
      Injections.QuestionFillFactory = $injector.get('otusjs.model.activity.QuestionFillFactory');
      Injections.InterviewFactory = $injector.get('otusjs.model.activity.InterviewFactory');
      Injections.ValidationTypeService = $injector.get('otusjs.model.activity.ValidationTypeService');
      Injections.FillingManagerFactory = $injector.get('otusjs.model.activity.FillingManagerFactory');

      service = $injector.get('otusjs.model.activity.ActivityImportService', Injections);
    });

    it('serviceExistence_check', function () {
      console.log(service);
      expect(service).toBeDefined();

    });

    it('serviceMethodsExistence_check', function () {
      expect(service.fromJsonObject).toBeDefined();
      expect(service.create).toBeDefined();
    });
  });
})
