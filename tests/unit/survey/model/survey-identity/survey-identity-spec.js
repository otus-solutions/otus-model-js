describe('SurveyIdentity', function() {
  var Mock = {};
  var factory;
  Mock.NAME = 'Identity Name';
  Mock.ACRONYM = 'ACRONYM';

  var surveyIdentity;

  beforeEach(function() {
    angular.mock.module('otusjs');

    mockJson();

    inject(function(_$injector_) {
      factory = _$injector_.get('SurveyIdentityFactory');
    });

    surveyIdentity = factory.create(Mock.NAME, Mock.ACRONYM);
  });

  describe('toJSON method', function() {

    it('should return a well formatted json based on instance of SurveyIdentity', function() {
      expect(JSON.stringify(surveyIdentity.toJSON())).toEqual(Mock.json);
    });

  });

  function mockJson() {
    Mock.json = JSON.stringify({
      extents: 'StudioObject',
      objectType: 'SurveyIdentity',
      name: Mock.NAME,
      acronym: Mock.ACRONYM,
      recommendedTo: '',
      description: '',
      keywords: []
    });
  }

});
