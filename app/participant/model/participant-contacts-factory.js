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
    var limitErrMsg = "Limite máximo atingido, por favor remova um campo para adicionar um novo contato."

    self.showError = showError;

    self.objectType = 'ParticipantContacts';
    self.recruitNumber = participant.recruitmentNumber || "";
    self.mainEmail = participant.email || "";
    self.secondaryEmails = participantContacts.secondaryEmails;
    self.phoneNumber = participantContacts.mainPhoneNumber || '';
    self.secondaryPhoneNumbers = participantContacts.secondaryPhoneNumbers || [];
    self.mainAddress = participantContacts.mainAddress || {};
    self.secondaryAddresses = participantContacts.secondaryAddresses || [{
      postalCode: '',
      street: '',
      streetNumber: '',
      complements: '',
      neighbourhood: '',
      city: '',
      country: '',
      observations: ''
    }];

    /* Public methods */
    self.toJson = toJson;
    self.addSecondaryEmail = addSecondaryEmails;

    function showError(msg) {
      throw new Error(msg);
    }

    function _validEmail(email) {
      var Regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/gi;
      return Regex.test(email);
    }

    //ToDo: Validar este método e replicar para secondaryPhoneNumbers & secondaryAddresses.
    function addSecondaryEmails(newEmail) {
      if (self.secondaryEmails.length === 5) {
        self.showError(limitErrMsg);
      } else if (!_validEmail(newEmail)) {
        self.showError('Email is invalid!');
      } else {
        self.secondaryEmails.push(newEmail.toLowerCase())
      }
    }

    function toJson() {
      var json = {};
      json.objectType = self.objectType;
      json.recruitmentNumber = self.recruitmentNumber;
      json.mainEmail = self.mainEmail;
      json.secondaryEmails = self.secondaryEmails;
      json.phoneNumber = self.phoneNumber;
      json.secondaryPhoneNumbers = self.secondaryPhoneNumbers;
      json.address = self.address;
      json.secondaryAddresses = self.secondaryAddresses;
      return JSON.stringify(json);
    }

    return self;
  }

}());


// Coisas no OTUS:
// var contact = ParticipantContactsFactory.create();
//
// contact.campo = "";
// contact.emailsList.push("email@email");
// contact.addEmail("email@email");
