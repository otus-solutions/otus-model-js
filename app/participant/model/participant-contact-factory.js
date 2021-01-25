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
    let email = participantContact.email || "";
    let phoneNumber = participantContact.phoneNumber || "";
    let address = participantContact.address || "";

    self.objectType = 'ParticipantContact';
    self._id = participantContact._id ? participantContact._id : null;
    self.recruitmentNumber = participantContact.recruitmentNumber ? participantContact.recruitmentNumber : "";
    self.email = {
      main: email.main ? email.main : {value: {content: ""}, observation: ""},
      second: email.second ? email.second : null,
      third: email.third ? email.third : null,
      fourth: email.fourth ? email.fourth : null,
      fifth: email.fifth ? email.fifth : null
    };
    self.phoneNumber = {
      main: phoneNumber.main ? phoneNumber.main :  {value: {content: ""}, observation: ""},
      second: phoneNumber.second ? phoneNumber.second : null,
      third: phoneNumber.third ? phoneNumber.third : null,
      fourth: phoneNumber.fourth ? phoneNumber.fourth : null,
      fifth: phoneNumber.fifth ? phoneNumber.fifth : null
    };
    self.address = {
      main: address.main ? address.main : {
        value: {
          postalCode: "",
          street: "",
          streetNumber: 0,
          complements: "",
          neighbourhood: "",
          city: "",
          state:"",
          country: "",
          census: "",
        }, observation: ""
      },
      second: address.second ? address.second : null,
      third: address.third  ? address.third  : null,
      fourth: address.fourth ? address.fourth : null,
      fifth: address.fifth  ? address.fifth  : null
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