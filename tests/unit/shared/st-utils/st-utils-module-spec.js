describe('Studio Utils Test Suite', function() {
    var Mock = {};
    var service, SurveyUUIDGenerator;

    beforeEach(function() {
        angular.mock.module('utils');

        inject(function(_$injector_) {
            service = _$injector_.get('UUIDService');
            SurveyUUIDGenerator = _$injector_.get('SurveyUUIDGenerator', {
                '$window': _$injector_.get('$window'),
                'UUIDService': _$injector_.get('UUIDService')
            });
        });
    });

    describe('UUID Service when UUIDService.generateUUID()', function() {
        it('should returns a random UUID', function() {
            expect(service.generateUUID()).not.toBeNull();
        });

        it('should call UUID.v1 method', function() {
            spyOn(uuid, 'v1');

            service.generateUUID();

            expect(uuid.v1).toHaveBeenCalled();
        });

    });


    describe('SurveyUUIDGenerator Service when SurveyUUIDGenerator.generateSurveyUUID()', function() {

        xit('should returns a encoded UUID', function() {
            expect(SurveyUUIDGenerator.generateSurveyUUID()).not.toBeNull();
        });

        xit('should returns a encoded UUID with userUUID, repositoryUUID, surveyUUID', function() {
            var decodedUUID = Base64.decode(SurveyUUIDGenerator.generateSurveyUUID());
            expect(decodedUUID).toContain("userUUID", "repositoryUUID", "surveyUUID");
        });

        xit('should calls a base64 encoded function', function() {
            spyOn(Base64, 'encode');

            SurveyUUIDGenerator.generateSurveyUUID();

            expect(Base64.encode).toHaveBeenCalled();
        });

    });

});
