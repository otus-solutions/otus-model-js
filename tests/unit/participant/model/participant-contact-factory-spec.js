fdescribe("ParticipantContactFactory", function () {

    var Mock = {};
    var createParticipantContactData;
    var participantContactData;
    var participantContactData2;
    var factory;

    beforeEach(function () {
      angular.mock.module('otusjs.model.participant');

      mockParticipantContact();

      inject(function (_$injector_) {
        mockParticipantContact();

        factory = _$injector_.get('otusjs.model.participantContact.ParticipantContactFactory');
      });

      createParticipantContactData = factory.create(Mock.participant, {});
      participantContactData = factory.fromJson(/*Mock.participant*/{}, Mock.participantContact);
      participantContactData2 = factory.fromJson(Mock.participant, Mock.participantContact);
    });

/*===================================================================================================*/

    describe('Create method', function () {

      it("should do something", function () {
        console.log('Create\n' + JSON.stringify(createParticipantContactData, null, 4));
        console.log('mockcontact\n' + JSON.stringify(participantContactData, null, 4));
        console.log('mocktudo\n' + JSON.stringify(participantContactData2, null, 4));
        console.log(JSON.stringify(createParticipantContactData,null,4));
      })

      it("should return an object with attribute value equal to 'ParticipantContact'", function () {
        expect(createParticipantContactData.objectType).toEqual('ParticipantContact');
        expect(participantContactData.objectType).toEqual('ParticipantContact');
      })

      it("should do something again", function () {
        expect(createParticipantContactData.objectType).toEqual('ParticipantContact');
        expect(participantContactData.objectType).toEqual('ParticipantContact');
      })

    });

/*===================================================================================================*/

    function mockParticipantContact() {
      Mock.participant = {
        objectType: 'Participant',
        _id: "5e6a45dd2273ad0a40d4050b",
        recruitmentNumber: 1234567,
        name: 'Nome do Participante',
        sex: 'M',
        birthdate: '1954-09-22T00:00:00.000Z',
        fieldCenter: 'RS',
        late: false,
        email: 'participant@mail.com',
        password: 'P@$$W0rD',
        tokenList: ['gcd4w', 'ppkhc', 'y6qr8', 'tcyfy', '29rx2']
      };

      Mock.participantContact = Test.utils.data.participantContact; //json-importer.js

    }
  }
);


//===================================================================================
// //Exemplos de testes de outros projetos
// it('unitTest: should success response with body parameter', function () {
//   let body = { teste: null };
//   let valueCustom = responseApp.success(body);
//   expect(valueCustom.code).toBe(200);
//   expect(valueCustom.body.data).toBe(body);
// });

// it("should return an object named phoneNumber with attribute value equal to +55 011-1406", function () {
//   expect(participantContactData.phoneNumber).toEqual(Mock.participantContact.phoneNumber);
//   console.log(participantContactData.phoneNumber);
//   console.log(Mock.participantContact.phoneNumber);
//   console.log();
// })

// it("should return an object named email with attribute value equal to 'EMAIL'", function () {
//   expect(participantContactData.email).toEqual(EMAIL);
//   console.log(participantContactData.email);
//   console.log(Mock.participantContact.email);
//   console.log();
// })