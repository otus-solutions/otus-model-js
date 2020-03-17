(function () {
  'use strict';

  angular
    .module('otusjs.model.participant')
    .factory('otusjs.model.participantContact.ParticipantContactFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;

    function create(participant,{}) {
      return new ParticipantContact(participant, {});
    }

    function fromJson(participant, participantContact) {
      return new ParticipantContact(participant, participantContact);
    }

    return self;
  }

  function ParticipantContact(participant, participantContact) {
    var self = this;

    self.objectType = 'ParticipantContact';
    self._id = null;
    self.recruitNumber = participant.recruitmentNumber || "";
    self.email = participantContact.email || {
      main: {value: {content: participant.email} || {content: ""}, observation: ""},
      second: null,
      third: null,
      fourth: null,
      fifth: null,
    };
    self.phoneNumber = participantContact.phoneNumber || {
      main: {value: {content: ""}, observation: ""},
      second: null,
      third: null,
      fourth: null,
      fifth: null,
    };
    self.address = participantContact.address || {
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
// var contact = ParticipantContactFactory.create();
//
// contact.campo = "";
// contact.emailsList.push("email@email");
// contact.addEmail("email@email");
