describe("ParticipantFactory", function () {

  var PARTICIPANT_OBJECT_TYPE = 'Participant';
  var RECURIMENT_NUMBER = 123456;
  var PARTICIPANT_NAME = 'Nome Participante';
  var PARTICIPANT_SEX = 'M';
  var PARTICIPANT_BIRTHDATE = '1954-09-22T00:00:00.000Z';
  var PARTICIPANT_LATE = false;
  var FIELD_CENTER = 'RS';
  var EMAIL = 'otus.mock@gmail.com'
  var Mock = {};
  var participantData;
  var factory;

  beforeEach(function () {
    angular.mock.module('otusjs');

    inject(function (_$injector_) {
      mockParticipant();

      factory = _$injector_.get('otusjs.model.participant.ParticipantFactory');
    });

    participantData = factory.fromJson(Mock.participant);
  });

  describe('create method', function () {

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

    it('should return an object with name attribute value equal to participant email', function () {
      expect(participantData.email).toEqual(Mock.participant.email);
    });

    it('should return stringify of toJson method', function() {
      expect(participantData.toJSON()).toEqual(Mock.participant);
    });

  });

  function mockParticipant() {
    Mock.participant = {
      objectType: PARTICIPANT_OBJECT_TYPE,
      recruitmentNumber: RECURIMENT_NUMBER,
      name: PARTICIPANT_NAME,
      sex: PARTICIPANT_SEX,
      email: EMAIL,
      birthdate: PARTICIPANT_BIRTHDATE,
      fieldCenter: FIELD_CENTER,
      identified: true,
      late: PARTICIPANT_LATE
    };

    // Mock.participant = {
    //   "recruitmentNumber" : 5555563,
    //   "name" : "A",
    //   "sex" : "M",
    //   "birthdate" : {
    //     "objectType" : "ImmutableDate",
    //     "value" : "1959-04-22 00:00:00.000"
    //   },
    //   "fieldCenter" : {
    //     "code" : 5,
    //     "acronym" : "RS"
    //   },
    //   "late" : false,
    //   "email" : "a@gmail.com",
    //   "password" : "TXUEOePzmEg0XG73TvPXGeNOcRE=",
    //   "tokenList" : [
    //     "eyJhbGciOiJIUzI1NiJ9.eyJtb2RlIjoicGFydGljaXBhbnQiLCJpc3MiOiJicnVub3dza3lAZ21haWwuY29tIn0.ALxt5L3-9tYC7Lx6r1Vvw8qq8fHUskiFTiZF_2AvPmw"
    //   ]
    // }

  }

});
