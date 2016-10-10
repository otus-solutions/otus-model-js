describe('ActivityParticipantData', function() {

    var ACTIVITY_PARTICIPANT_DATA = 'ActivityParticipantData';
    var RECURIMENT_NUMBER = 123456;
    var PARTICIPANT_NAME = 'Nome Participante';
    var FIELD_CENTER = 'RS';
    var Mock = {};
    var participantData;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockActivityParticipantData();
            mockJson();

            factory = _$injector_.get('otusjs.model.activity.ActivityParticipantDataFactory');
        });

        participantData = factory.create(Mock.participant);
    });

    describe('toJson method', function() {

        it('should return a well formatted json based on instance of AnswerFill', function() {
            expect(participantData.toJson()).toEqual(Mock.json);
        });

    });

    function mockActivityParticipantData() {
        Mock.participant = {
            recruitmentNumber: RECURIMENT_NUMBER,
            name: PARTICIPANT_NAME,
            fieldCenter: FIELD_CENTER
        };
    }

    function mockJson() {
        Mock.json = JSON.stringify({
            objectType: 'ActivityParticipantData',
            recruitmentNumber: Mock.participant.recruitmentNumber,
            name: Mock.participant.name,
            fieldCenter: Mock.participant.fieldCenter
        });
    }

});
