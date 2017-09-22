describe('SurveyMetaInfo', function() {
    var Mock = {};
    var surveyMetainfo;
    var factory;

    beforeEach(function() {
        angular.mock.module('otusjs');

        mockJsonObject();
        inject(function(_$injector_) {
            factory = _$injector_.get('SurveyMetaInfoFactory');
            surveyMetainfo = factory.create();
        });
    });

    describe('toJson method', function() {
        it('should return a well formatted json based on instance of SurveyMetaInfo', function() {
          Mock.jsonObject.creationDatetime = new Date();
          expect(surveyMetainfo.toJson()).toEqual(JSON.stringify(Mock.jsonObject));
        });
    });

    function mockJsonObject() {
      Mock.jsonObject = {
        extents: 'StudioObject',
        objectType: 'SurveyMetaInfo',
        creationDatetime: "2017-09-22T16:50:28.708Z",
        otusStudioVersion: ''
      }
    }


});
