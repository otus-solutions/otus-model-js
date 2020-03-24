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

    function create(participantContact) {
      return new ParticipantContact(participantContact);
    }

    function fromJson(participantContact) {
      return new ParticipantContact(participantContact);
    }

    return self;
  }

  function ParticipantContact(participantContact) {
    var self = this;

    self.objectType = 'ParticipantContact';
    self._id = participantContact._id ? participantContact._id : null;
    self.recruitmentNumber = participantContact.recruitmentNumber ? participantContact.recruitmentNumber : "";
    self.email = {
      main: participantContact.email.main ? participantContact.email.main : {value: {content: ""}, observation: ""},
      second: participantContact.email.second ? participantContact.email.second : null,
      third: participantContact.email.third ? participantContact.email.third : null,
      fourth: participantContact.email.fourth ? participantContact.email.fourth : null,
      fifth: participantContact.email.fifth ? participantContact.email.fifth : null
    };
    self.phoneNumber = {
      main: participantContact.phoneNumber.main ? participantContact.phoneNumber.main :  {value: {content: ""}, observation: ""},
      second: participantContact.phoneNumber.second ? participantContact.phoneNumber.second : null,
      third: participantContact.phoneNumber.third ? participantContact.phoneNumber.third : null,
      fourth: participantContact.phoneNumber.fourth ? participantContact.phoneNumber.fourth : null,
      fifth: participantContact.phoneNumber.fifth ? participantContact.phoneNumber.fifth : null
    };
    self.address = {
      main: participantContact.address.main ? participantContact.address.main : {
        value: {
          postalCode: "",
          street: "",
          streetNumber: 0,
          complements: "",
          neighbourhood: "",
          city: "",
          state:"",
          country: ""
        }, observation: ""
      },
      second: participantContact.address.second ? participantContact.address.second : null,
      third: participantContact.address.third  ? participantContact.address.third  : null,
      fourth: participantContact.address.fourth ? participantContact.address.fourth : null,
      fifth: participantContact.address.fifth  ? participantContact.address.fifth  : null
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