describe("ParticipantContactFactory", function () {

  var RN = 7654321;
  var Mock = {};
  var newContactData;
  var participantContactData;
  var factory;

  beforeEach(function () {
    angular.mock.module('otusjs.model.participant');

    inject(function (_$injector_) {
      mockParticipantContact();
      factory = _$injector_.get('otusjs.model.participantContact.ParticipantContactFactory');
    });

    newContactData = factory.create(Mock.emptyParticipantContact);
    participantContactData = factory.fromJson(Mock.participantContact);
  });

  describe('Create method', function () {

    it("should return an object containing objectType with attribute value equal to 'ParticipantContact'.", function () {
      expect(newContactData).toBeDefined("There was a problem to define the object: 'newContactData'.");
      expect(newContactData.objectType).toBeDefined("The 'objectType' of 'newContactData' was not defined.");
      expect(newContactData.objectType).toEqual('ParticipantContact');
    });

    it("should return an object with recruitmentNumber attribute value equal to RN.", function () {
      expect(newContactData.recruitmentNumber).toBeDefined("The 'recruitmentNumber' of 'newContactData' was not defined.");
      expect(newContactData.recruitmentNumber).toEqual(RN);
    });

    it("should return an empty value for main e-mail's 'content', also 'null' for secondary e-mails.", function () {
      var email = newContactData.email;
      expect(email).toBeDefined("The element 'email' was not defined, when creating a ParticipantContact.");
      expect(email.main.value.content).toEqual("");
      expect(email.second).toBeNull();
      expect(email.third).toBeNull();
      expect(email.fourth).toBeNull();
      expect(email.fifth).toBeNull();
    });

    it("should return an empty value for main phone number's 'content', also 'null' for secondary phone numbers.", function () {
      var phone = newContactData.phoneNumber;
      expect(phone).toBeDefined("The element 'phoneNumber' was not defined, when creating a ParticipantContact.");
      expect(phone.main.value.content).toEqual("");
      expect(phone.second).toBeNull();
      expect(phone.third).toBeNull();
      expect(phone.fourth).toBeNull();
      expect(phone.fifth).toBeNull();
    });

    it("should return empty values for main 'address' and street number equal to 0. Secondary addresses must be 'null'.", function () {
      var address = newContactData.address;
      expect(address).toBeDefined("The element 'address' was not defined, when creating a ParticipantContact.");
      expect(address.main.value.postalCode).toEqual("");
      expect(address.main.value.streetNumber).toEqual(0);
      expect(address.second).toBeNull();
      expect(address.third).toBeNull();
      expect(address.fourth).toBeNull();
      expect(address.fifth).toBeNull();
    });

    it('should return stringify of toJSON method', function () {
      expect(newContactData.toJSON()).toEqual(Mock.emptyParticipantContact);
    });

  });

  describe('fromJson method', function () {

    it("should check if the object 'participantContactData' was created.", function () {
      expect(participantContactData).toBeDefined("There was a problem to define the object: 'participantContactData'.");
    });

    it('should return an object with recruitmentNumber attribute value equal to participant recruitment number', function () {
      expect(participantContactData.recruitmentNumber).toEqual(Mock.participantContact.recruitmentNumber);
    });

    it("should return an object with name attribute value equal to participantContact's 'objectType' element.", function () {
      expect(participantContactData.objectType).toEqual(Mock.participantContact.objectType);
    });

    it("should return an object with name attribute value equal to participantContact's '_id' element.", function () {
      expect(participantContactData._id).toEqual(Mock.participantContact._id);
    });

    it("should return an object with attribute value equal to participantContact's 'recruitmentNumber' element.", function () {
      expect(participantContactData.recruitmentNumber).toEqual(Mock.participantContact.recruitmentNumber);
    });

    it("should return an object with attribute values equal to participantContact's 'email' element.", function () {
      expect(participantContactData.email).toEqual(Mock.participantContact.email);
    });

    it("should return an object with attribute values equal to participantContact's 'phoneNumber' element.", function () {
      expect(participantContactData.phoneNumber).toEqual(Mock.participantContact.phoneNumber);
    });

    it("should return an object with attribute values equal to participantContact's 'address' element.", function () {
      expect(participantContactData.address).toEqual(Mock.participantContact.address);
    });

    it('should return stringify of toJSON method', function () {
      expect(participantContactData.toJSON()).toEqual(Mock.participantContact);
    });

  });

  function mockParticipantContact() {

    Mock.emptyParticipantContact = {
      objectType: "ParticipantContact",
      _id: null,
      recruitmentNumber: RN,
      email: {
        main: {value: {content: ""}, observation: ""},
        second: null,
        third: null,
        fourth: null,
        fifth: null
      },
      phoneNumber: {
        main: {value: {content: ""}, observation: ""},
        second: null,
        third: null,
        fourth: null,
        fifth: null
      },
      address: {
        main: {
          value: {
            postalCode: "",
            street: "",
            streetNumber: 0,
            complements: "",
            neighbourhood: "",
            city: "",
            state: "",
            country: ""
          },
          observation: ""
        },
        second: null,
        third: null,
        fourth: null,
        fifth: null
      }
    };

    Mock.participantContact = {
      _id: "5e6a45dd2273ad0a40d4050b",
      objectType: "ParticipantContact",
      recruitmentNumber: RN,
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
        },
        fourth: null,
        fifth: null
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
            state: "Rio Grande do Sul",
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
            State: "Chaco",
            country: "Argentina"
          },
          observations: "Universidad Nacional del Nordeste."
        },
        third: null,
        fourth: null,
        fifth: null
      },
      phoneNumber: {
        main: {
          value: {content: "+55 (51) 2345-6789"},
          observation: "Casa"
        },
        second: {
          value: {content: "51987654321"},
          observation: "Celular"
        },
        third: null,
        fourth: null,
        fifth: null
      }

    };
  }
});