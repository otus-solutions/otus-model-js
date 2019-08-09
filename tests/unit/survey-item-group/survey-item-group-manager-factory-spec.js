    // .module('otusjs.surveyItemGroup')
    // .service('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory', Factory);
fdescribe('the SurveyItemGroupManagerFactory', function () {
  var factory;
  var Mock;

  beforeEach(function () {
    angular.mock.module('otusjs.surveyItemGroup');


    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory');
    });
  });

  describe('the creation method', function () {
    it('should create an defined object', function () {

    })
  })


});