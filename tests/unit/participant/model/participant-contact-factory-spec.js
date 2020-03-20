fdescribe("ParticipantContactFactory", function () {

    var RN = 1234567;
    var Mock = {};
    var createParticipantContact;
    var participantContactData;
    var factory;

    beforeEach(function () {
      angular.mock.module('otusjs.model.participant');

      inject(function (_$injector_) {
        mockParticipantContact();

        factory = _$injector_.get('otusjs.model.participantContact.ParticipantContactFactory');
      });

      createParticipantContact = factory.create(Mock.participant.recruitmentNumber, {});
      participantContactData = factory.fromJson(Mock.participant.recruitmentNumber, Mock.participantContact);
    });

    describe('Create method', function () {

      it("should create and return an object with attribute value equal to 'ParticipantContact'.", function () {
        expect(createParticipantContact.objectType).toEqual('ParticipantContact');
      });

      it('should return an object with recruitmentNumber attribute value equal to RN', function () {
        expect(createParticipantContact.recruitmentNumber).toEqual(RN);
      });

      it("should do something", function () {
        // console.log('Create:\n' + JSON.stringify(createParticipantContact, null, 4));
      })

    });

    describe('fromJson', function () {

      it("should return an object with attribute value equal to 'ParticipantContact'.", function () {
        // expect(participantContactData.objectType).toEqual('ParticipantContact');
      })

      it('should return an object with recruitmentNumber attribute value equal to participant recruitment number', function () {
        expect(participantContactData.recruitmentNumber).toEqual(Mock.participantContact.recruitmentNumber);
      });

      // it("should do something", function () {
      // console.log(JSON.stringify(participantContactData, null, 4));
      //   console.log('Create\n' + JSON.stringify(createParticipantContactData, null, 4));
      //   console.log('mockcontact\n' + JSON.stringify(participantContactData, null, 4));
      //   console.log('mocktudo\n' + JSON.stringify(participantContactData2, null, 4));
      // })


    });

    /*===================================================================================================*/

    function mockParticipantContact() {
      Mock.participant = {
        objectType: 'Participant',
        _id: "5e6a45dd2273ad0a40d4050b",
        recruitmentNumber: RN,
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

/*
participantContact = {
  _id: "5e6a45dd2273ad0a40d4050b",
  objectType: "ParticipantContact",
  recruitmentNumber: 7654321,
  email: {
    main: {
      value: {content: "main.email@gmail.com"},
      observation: "Pessoal"
    },
    second: {
      value: {content: "secondary0.email@gmail.com"},
      observation: "Trabalho"
    },
    third: {
      value: {content: "secondary1.email@gmail.com"},
      observation: "Universidade"
    }
  },
  address: {
    main: {
      value: {
        postalCode: "90010-907",
        street: "Rua dos Bobos",
        streetNumber: 0,
        complements: "Feita com muito esmero!",
        neighbourhood: "Centro",
        city: "Porto Alegre",
        country: "Brasil"
      },
      observations: "Casa"
    },
    second: {
      value: {
        postalCode: "91712320",
        street: "Avenida Las Heras",
        streetNumber: 727,
        complements: "Facultad de Ingeniería, segundo piso.",
        neighbourhood: "Centro",
        city: "Resistencia",
        country: "Argentina"
      },
      observations: "Universidad Nacional del Nordeste."
    }
  },
  phoneNumber: {
    main: {
      value: {content: "+55 (51) 2345-6789"},
      observation: "Casa"
    },
    second: {
      value: {content: "51987654321"},
      observation: "Celular"
    }
  }
};
*/

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


//===================================================================================
/*
{
  "_id": {{participantContactId}},
  "type": "email",
  "position": "main",
  "contactItem": {
  "value": { "content": "main.email@gmail.com" },
  "observation": "pessoal"
}
}
*/


// createParticipantContactData = factory.create(Mock.participant, {});
// participantContactData = factory.fromJson(/*Mock.participant*/{}, Mock.participantContact);
// participantContactData2 = factory.fromJson(Mock.participant, Mock.participantContact);