fdescribe("ParticipantContactsFactory", function () {

  var Mock = {};
  var participantContactsData;
  var factory;

  beforeEach(function () {
    angular.mock.module('otusjs.model.participant');

    inject(function (_$injector_) {
      mockParticipantContacts();

      factory = _$injector_.get('otusjs.model.participantContacts.ParticipantContactsFactory');
    });

    participantContactsData = factory.create(Mock.participant, Mock.participantContacts);
  });

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

// TODO: dependendo de como ficar a distribuição das listas, com, ou sem 'principais", fazer um  teste
//  comparando com o mock do "participantContacts"

  });

  // it('unitTest: should success response with body parameter', function () {
  //   let body = { teste: null };
  //   let valueCustom = responseApp.success(body);
  //   expect(valueCustom.code).toBe(200);
  //   expect(valueCustom.body.data).toBe(body);
  // });

  // it('unitTest: should success response with no body parameter', function () {
  //   let valueDefault = responseApp.success();
  //   expect(valueDefault.code).toBe(200);
  //   expect(valueDefault.body.data).toBe(true);
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

// });


  /*=================================================*/
  function mockParticipantContacts() {
    Mock.participant = {
      objectType: 'Participant',
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

    Mock.participantContacts = {
      objectType: 'ParticipantContacts',
      mainPhoneNumber: '+55 011-1406',
      secondaryPhoneNumbers: ['0800-0000', '0800-1000', '0800-2000'],
      secondaryEmails: ['new_1_@mail.com', 'new_2_@mail.com'],
      mainAddress: {
        postalCode: "90010-907",
        street: 'Rua Um',
        streetNumber: 2,                               // seria melhor string, aqui? ou ainda: seria melhor juntar rua e número no mesmo campo?
        complements: 'Ap. 3',
        neighbourhood: 'Bairro Quatro',
        city: 'Cidade Cinco',
        country: 'Sexto país',
        observations: 'Ao lado do pórtico da cidade'
      },
      secondaryAddresses: [
        {
          postalCode: "90010-907",
          street: 'Rua dos Bobos',
          streetNumber: 0,
          complements: 'Feita com muito esmero!',
          neighbourhood: 'Centro',
          city: 'Porto Alegre',
          country: 'Brasil',
          observations: 'Casa da vizinha da minha tia.'
        },
        {
          postalCode: "H3500COA",
          street: 'Avenida Las Heras',
          streetNumber: 727,
          complements: 'Facultad de Ingeniería, segundo piso.',
          neighbourhood: 'Centro',
          city: 'Resistencia',
          country: 'Argentina',
          observations: 'Universidad Nacional del Nordeste.'
        }
      ],
    };

  };
  /*============================================================================*/

// var participantContacts = {
//   objectType: 'ParticipantContacts',
//   phoneNumber: '+55 011-1406',
//   email: 'email@mail.com',
//   secondaryAdresses: []
// };
// var participant = {
//   objectType: 'Participant',
//   email: 'email@mail.com'
// };

});