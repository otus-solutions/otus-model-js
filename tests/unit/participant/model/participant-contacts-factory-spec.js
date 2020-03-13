fdescribe("ParticipantContactsFactory", function () {

    var Mock = {};
    var participantContactsData;
    var factory;

    beforeEach(function () {
      angular.mock.module('otusjs.model.participant');

      mockParticipantContacts();

      inject(function (_$injector_) {
        mockParticipantContacts();

        factory = _$injector_.get('otusjs.model.participantContacts.ParticipantContactsFactory');
      });

      participantContactsData = factory.create(Mock.participant, Mock.participantContacts);
    });

/*===================================================================================================*/

    describe('Create method', function () {

      it("should do something", function () {
        console.log('\n' + JSON.stringify(participantContactsData, null, 4));
      })

      it("should return an object with attribute value equal to 'ParticipantContacts'", function () {
        expect(participantContactsData.objectType).toEqual('ParticipantContacts');
      })

      it("should do something again", function () {
        expect(participantContactsData.objectType).toEqual('ParticipantContacts');
      })

    });

/*===================================================================================================*/

    function mockParticipantContacts() {
      Mock.participant = {
        objectType: 'Participant',
        _id: "5e6a45dd2273ad0a40d4050b",
        recruitmentNumber: 123456,
        name: 'Nome Participante',
        sex: 'M',
        birthdate: '1954-09-22T00:00:00.000Z',
        fieldCenter: 'RS',
        late: false,
        email: 'email@mail.com',
        password: 'P@$$W0rD',
        tokenList: ['gcd4w', 'ppkhc', 'y6qr8', 'tcyfy', '29rx2']
      };

      Mock.participantContacts = Test.utils.data.participantContacts; //json-importer.js

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
//   expect(participantContactsData.phoneNumber).toEqual(Mock.participantContacts.phoneNumber);
//   console.log(participantContactsData.phoneNumber);
//   console.log(Mock.participantContacts.phoneNumber);
//   console.log();
// })

// it("should return an object named email with attribute value equal to 'EMAIL'", function () {
//   expect(participantContactsData.email).toEqual(EMAIL);
//   console.log(participantContactsData.email);
//   console.log(Mock.participantContacts.email);
//   console.log();
// })