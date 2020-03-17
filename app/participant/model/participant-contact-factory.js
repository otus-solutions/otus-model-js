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

    function create(rn) {
      return new ParticipantContact(rn, {});
    }

    function fromJson(rn, participantContact) {
      return new ParticipantContact("", participantContact);
    }

    return self;
  }

  function ParticipantContact(rn, participantContact) {
    var self = this;

    self.objectType = 'ParticipantContact';
    self._id = participantContact._id ? participantContact._id : null;
    self.recruitNumber = participantContact.recruitmentNumber || rn;
    self.email = participantContact.email ? participantContact.email : {
      main: {value: {content: ""}, observation: ""},
      second: null,
      third: null,
      fourth: null,
      fifth: null,
    };
    self.phoneNumber = participantContact.phoneNumber ? participantContact.phoneNumber : {
      main: {value: {content: ""}, observation: ""},
      second: null,
      third: null,
      fourth: null,
      fifth: null,
    };
    self.address = participantContact.address ? participantContact.address : {
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
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json._id = self._id;
      json.recruitmentNumber = self.recruitmentNumber;
      json.email = self.email;
      json.phoneNumber = self.phoneNumber;
      json.address = self.address;

      return json;
    }

    return self;
  }

}());