describe("ParticipantFactory", function () {

  var PARTICIPANT_OBJECT_TYPE = 'Participant';
  var RECURIMENT_NUMBER = 123456;
  var PARTICIPANT_NAME = 'Nome Participante';
  var PARTICIPANT_SEX = 'M';
  var PARTICIPANT_BIRTHDATE = '1954-09-22T00:00:00.000Z';
  var PARTICIPANT_LATE = false;
  var FIELD_CENTER = 'RS';
  var Mock = {};
  var participantData;
  var factory;

  beforeEach(function () {
    angular.mock.module('otusjs');

    inject(function (_$injector_) {
      mockParticipant();

      factory = _$injector_.get('otusjs.model.participant.ParticipantFactory');
    });

    participantData = factory.create(Mock.participant);
  });

  describe('creat method', function () {

    it('should return an object of type Participant', function () {
      expect(participantData.objectType).toEqual(PARTICIPANT_OBJECT_TYPE);
    });

    it('should return an object with recruitmentNumber attribute value equal to participant recruitment number', function () {
      expect(participantData.recruitmentNumber).toEqual(Mock.participant.recruitmentNumber);
    });

    it('should return an object with name attribute value equal to participant name', function () {
      expect(participantData.name).toEqual(Mock.participant.name);
    });

    it('should return an object with name attribute value equal to participant sex', function () {
      expect(participantData.sex).toEqual(Mock.participant.sex);
    });

    it('should return an object with name attribute value equal to participant birthdate', function () {
      expect(participantData.birthdate).toEqual(Mock.participant.birthdate);
    });

    it('should return an object with name attribute value equal to participant field center', function () {
      expect(participantData.fieldCenter).toEqual(Mock.participant.fieldCenter);
    });

    it('should return an object with name attribute value equal to participant late', function () {
      expect(participantData.late).toEqual(Mock.participant.late);
    });

    it('should return stringify of toJson method', function() {
      expect(participantData.toJson()).toEqual(JSON.stringify(Mock.participant));
    });

  });

  function mockParticipant() {
    Mock.participant = {
      objectType: PARTICIPANT_OBJECT_TYPE,
      recruitmentNumber: RECURIMENT_NUMBER,
      name: PARTICIPANT_NAME,
      sex: PARTICIPANT_SEX,
      birthdate: PARTICIPANT_BIRTHDATE,
      fieldCenter: FIELD_CENTER,
      late: PARTICIPANT_LATE
    };
  }

});
