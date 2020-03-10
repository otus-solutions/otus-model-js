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

      // function fromJson(jsonObject) { let contacts = new ParticipantContacts(jsonObject); }

      return self;
    }

    function ParticipantContacts(participant, participantContacts) {
      var self = this;

      self.objectType = 'ParticipantContacts';
      self.recruitNumber = participant.recruitmentNumber || "";

      self.mainEmail = participant.email || ""; //assumir que o e-mail sempre existirá no participant.email (adicionar erro se não houver??)

      if (participant.email) {
        self.emailsList = [participant.email + ' (principal)']; //[participant.email];
      } else {
        self.emailsList = [];
      }

      if (participantContacts.secondaryEmails) {
        self.emailsList = self.emailsList.concat(participantContacts.secondaryEmails);

      }


      self.phoneNumber = participantContacts.mainPhoneNumber || '';
      self.secondaryPhoneNumbers = participantContacts.secondaryPhoneNumbers || [];
      self.mainAddress = participantContacts.mainAddress || {};
      self.secondaryAddresses = participantContacts.secondaryAddresses || [];
      // self.secondaryAddresses = participantContacts.secondaryAddresses || [ // Colocar Objeto no formato ou simplesmente deixar o array vazio?
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

      // console.log(self.emailsList);

      // self.campo = info.campo || "";
      // self.emailsList = info.emailsList || [];
      // self.addEmail = addEmail;


      // function addEmail(email) {
      //   if (self.emailsList.length === 5) {
      //     self.emailsList.pop();
      //     // or
      //     // throw new Error("");
      //   }
      //   self.emailsList.push();
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
//         self.showError('Email is invalid!');
//       } else
//           if(!self.isUserExists(email)){
//             self.exclusiveDisjunction.push(email.toLowerCase())
//           }
//     }


// Coisas no OTUS:
// var contact = ParticipantContactsFactory.create();
//
// contact.campo = "";
// contact.emailsList.push("email@email");
// contact.addEmail("email@email");

//===================================================================================
// TODO busca automática dos campos, baseada no CEP.
//      "CEP": "90010-907", // verificar se há preocupação com o formato (com hífen?; apenas numérico?)
//
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
// }
//===================================================================================