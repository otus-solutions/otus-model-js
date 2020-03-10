(function () {
    'use strict';

    angular
      .module('otusjs.model.participant')
      .factory('otusjs.model.participantContacts.ParticipantContactsFactory', Factory);

    function Factory() {
      var self = this;

      /* Public methods */
      self.create = create;

      function create(participant, participantContacts) {
        return new ParticipantContacts(participant, participantContacts);
      }

      // function fromJson(jsonObject) { let contact = new ParticipantContacts(jsonObject); }
      return self;
    }

    function ParticipantContacts(participant, participantContacts) {
      var self = this;

      self.objectType = 'ParticipantContact';
      self.recruitNumber = participant.recruitmentNumber;

      self.mainEmail = participant.email || ""; //assumir que o e-mail sempre existirá no participant.email (adicionar erro se não houver??)

      if (participant.email) {
        self.secondaryEmails = [participant.email + ' (principal)'];
      } else {
        self.secondaryEmails = [];
      }

      if (participantContacts.secondaryEmails) {
        self.secondaryEmails = self.secondaryEmails.concat(participantContacts.secondaryEmails);
      }


      self.phoneNumber = participantContacts.mainPhoneNumber || '';
      self.secondaryPhoneNumbers = participantContacts.secondaryPhoneNumbers || [];
      self.mainAddress = participantContacts.mainAddress || {};
      self.secondaryAddresses = participantContacts.secondaryAddresses || [];
      // self.secondaryAddresses = participantContacts.secondaryAddresses || [ // Colocar Objeto ou simplesmente deixar o array vazio?
      //   {
      //     postalCode: '',
      //     street: '',
      //     streetNumber: 0,
      //     complements: '',
      //     neighbourhood: '',
      //     city: '',
      //     country: '',
      //     observations: ''
      //   }
      //   ];

      // console.log(self.secondaryEmails);

      // self.campo = info.campo || "";
      // self.secondaryEmails = info.secondaryEmails || [];
      // self.addEmail = addEmail;


      // function addEmail(email) {
      //   if (self.secondaryEmails.length === 5) {
      //     self.secondaryEmails.pop();
      //     // or
      //     // throw new Error("");
      //   }
      //   self.secondaryEmails.push();
      // }
      self.toJson = toJson;

      function toJson() {
        var json = {};

        json.phoneNumber = self.phoneNumber;
        json.email = self.email;
        json.address = self.address;

        return JSON.stringify(json);
      }
    }
  }

  ()
);


// function addUser(email) {
//       if (!_validEmail(email)){
//         self.showError('Email invalid!');
//       } else
//           if(!self.isUserExists(email)){
//             self.exclusiveDisjunction.push(email.toLowerCase())
//           }
//     }


// Coisas no OTUS:
// var contact = ParticipantContactFactory.create();
//
// contact.campo = "";
// contact.secondaryEmails.push("email@email");
// contact.addEmail("email@email");

//===================================================================================
//Requisito: ler/verificar se já existem dados do participante.
// participant = {
//   objectType = "Participant",
//   recruitmentNumber: 1234567,
//   name: 'Zé da Silva',
//   sex = "M",
//   birthdate = '1954-09-22T00:00:00.000Z',
//   fieldCenter = 'RS',
//   late = 'false',
//   email: 'email@mail.com',
//   password:'P@$$W0rD'
// }
//===================================================================================
// Possível forma de organização dos dados: verificar idioma das variáveis antes de finalizar.
// participantContacts = {
//   objectType: 'ParticipantContacts',
//   phoneNumber: '+55 011-1406',
//   email: 'email@mail.com',
//   addresslist: [
//   {
// TODO busca automática dos campos, baseada no CEP.
//      "CEP": "90010-907", // verificar se há preocupação com o formato (com hífen?; apenas numérico?)
//
//      logradouro: 'Rua dos Bobos',
//      numero: 0,                               // seria melhor string, aqui?
//      complemento: 'Feita com muito esmero!',
//      bairro: 'Centro',
//      cidade: 'Porto Alegre',
//      pais: 'Brasil',                          // o participante pode ter endereço em outro país.
//      observacoes: 'Casa da vizinha da minha tia.'
//    },
//    {
//      "CEP": "90010-907",
//      logradouro: 'Rua dos Bobos',
//      numero: 0,
//      complemento: 'Feita com muito esmero!',
//      bairro: 'Centro',
//      cidade: 'Porto Alegre',
//      pais: 'Brasil',                          // o participante pode ter endereço em outro país.
//      observacoes: 'Casa da vizinha da minha tia.'
//    }
//   ],
//   socialMediaList = [
//   {
// TODO: adicionar uma flag para salientar se é a rede social principal?

//   redeSocial: 'facebook',
//   contato: 'mybuddy@fakemail.com'
//   observacoes: 'Face do meu colega de apartamento, o nome dele é João da Silva.'
//   },
//   {
//   redeSocial: 'whatsapp',
//   contato: '+55 51 99999-9999'
//   observacoes: 'É o meu zap-zap pessoal, sempre confiro antes de dormir!'
//   }
//   ],
//   outrosContatosParaVerMaisAdiante: 'preencher aqui!',
//   email: 'email@mail.com',
//   password:'P@$$W0rD'
// }
//===================================================================================