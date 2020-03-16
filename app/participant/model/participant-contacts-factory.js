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
    self._id = participant._id || null;
    self.recruitNumber = participant.recruitmentNumber || "";
    self.email = participantContacts.email || {
      main: {value: participant.email || "", observation: ""},
      second: null,
      third: null,
      fourth: null,
      fifth: null,
    };
    self.phoneNumber = participantContacts.phoneNumber || {
      main: {number: "", contact: ""},
      second: null,
      third: null,
      fourth: null,
      fifth: null,
    };
    self.address = participantContacts.address || {
      main: {
        value: {
          postalCode: "",
          street: "",
          streetNumber: 0,
          complements: "",
          neighbourhood: "",
          city: "",
          country: ""
        }, observation: ""
      },
      second: null,
      third: null,
      fourth: null,
      fifth: null,
    };

    /* Public methods */
    self.toJson = toJson;

    function toJson() {
      var json = {};

      json._id = self._id;
      json.objectType = self.objectType;
      json.recruitmentNumber = self.recruitmentNumber;
      json.email = self.email;
      json.phoneNumber = self.phoneNumber;
      json.address = self.address;

      return JSON.stringify(json);
    }

    return self;
  }

}());

/*===================================================================================================*/

// Coisas no OTUS:
// var contact = ParticipantContactsFactory.create();
//
// contact.campo = "";
// contact.emailsList.push("email@email");
// contact.addEmail("email@email");
