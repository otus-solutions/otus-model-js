describe('SurveyFormFactory', function() {
  var Mock = {};
  var factory;
  var surveyForm;
  var options = {
    sender: "tiago.matana@gmail.com",
    sendingDate : "2017-09-28T23:25:31.274Z",
    isDiscarded: true,
    surveyFormType : "FORM_INTERVIEW",
    surveyTemplate : {}
  }

  beforeEach(function() {
    angular.mock.module('otusjs');

    Mock.surveyTemplate = Test.utils.data.latestSurveyTemplate;

    inject(function(_$injector_) {
      factory = _$injector_.get('SurveyFormFactory', {
        'SurveyFactory': _$injector_.get('SurveyFactory')
      });
    });
  });

  describe('SurveyFormFactory.create()', function() {

    beforeEach(function() {
      surveyForm = factory.create(options);
    });

    it('should return a SurveyForm that extends from StudioObject', function() {
      expect(surveyForm.extents).toEqual('StudioObject');
    });

    it('should return a SurveyForm object type', function() {
      expect(surveyForm.objectType).toEqual('SurveyForm');
    });
    it('should return a SurveyForm isDiscarded value', function() {
      expect(surveyForm.isDiscarded).toEqual(true);
    });
  });


});
