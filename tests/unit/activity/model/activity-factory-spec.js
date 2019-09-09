describe('ActivityImportService_TestSuite', function () {
  var Mock = {};
  var Injections = [];

  beforeEach(function () {
    angular.mock.module('otusjs.model.activity');
    angular.mock.inject($injector => {
      Injections.StatusHistoryManagerFactory = $injector.get('otusjs.model.activity.StatusHistoryManagerFactory');
      Injections.FillingManagerFactory = $injector.get('otusjs.model.activity.FillingManagerFactory');
      Injections.NavigationTrackerFactory = $injector.get('otusjs.model.navigation.NavigationTrackerFactory');
      Injections.InterviewManagerFactory = $injector.get('otusjs.model.activity.InterviewManagerFactory');
      Injections.SurveyFormFactory = $injector.get('SurveyFormFactory');

      Mock.factory = $injector.get('otusjs.model.activity.ActivityFactory', Injections);
      spyOn(Mock.factory, "create").and.callThrough();
      spyOn(Injections.InterviewManagerFactory, 'create').and.callThrough();
      spyOn(Injections.InterviewManagerFactory, 'newRegistry').and.callThrough();
    });

    describe('basic tests scenarios', function () {
      it('check created factory', function () {
        expect(Mock.factory).toBeDefined();
      });
    });

    describe('create method', function () {
      beforeEach(function () {
        Mock.factory.create();
      });

      it('check created factory', function () {
        expect(Mock.factory.create).toHaveBeenCalled();
        expect(Injections.InterviewManagerFactory.create).toHaveBeenCalled();
      });
    });

    describe('createPaperActivity method', function () {
      it('check created factory', function () {
        expect(Mock.factory).toBeDefined();
        expect(Injections.InterviewManagerFactory.create).toHaveBeenCalled();
      });
    });

  });
})