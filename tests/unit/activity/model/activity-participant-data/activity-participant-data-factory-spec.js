describe("ActivityParticipantDataFactory", function() {

    var ACTIVITY_PARTICIPANT_DATA = 'ActivityParticipantData';
    var RECURIMENT_NUMBER = 123456;
    var PARTICIPANT_NAME = 'Nome Participante';
    var FIELD_CENTER = 'RS';
    var Mock = {};
    var participantData;
    var factory;

    beforeEach(function() {
        angular.mock.module('otusjs');

        inject(function(_$injector_) {
            mockActivityParticipantData();

            factory = _$injector_.get('otusjs.model.activity.ActivityParticipantDataFactory');
        });

        participantData = factory.create(Mock.participant);
    });

    describe('creat method', function() {

        it('should return an object of type ActivityParticipantData', function() {
            expect(participantData.objectType).toEqual(ACTIVITY_PARTICIPANT_DATA);
        });

        it('should return an object with recruitmentNumber attribute value equal to participant recruitment number', function() {
            expect(participantData.recruitmentNumber).toEqual(Mock.participant.recruitmentNumber);
        });

        it('should return an object with name attribute value equal to participant name', function() {
            expect(participantData.name).toEqual(Mock.participant.name);
        });

        it('should return an object with name attribute value equal to participant field center', function() {
            expect(participantData.fieldCenter).toEqual(Mock.participant.fieldCenter);
        });

    });

    function mockActivityParticipantData() {
        Mock.participant = {
            recruitmentNumber: RECURIMENT_NUMBER,
            name: PARTICIPANT_NAME,
            fieldCenter: FIELD_CENTER
        };
    }

});
