(function () {
  'use strict';

  angular
    .module('otusjs.model.participant')
    .factory('otusjs.model.participant.ParticipantContactFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;

    function create() {
      return new ParticipantContact();
    }
    // function fromJson(jsonObject) { let contact = new ParticipantContact(jsonObject); }
    return self;
  }

  function ParticipantContact(info) {
    var self = this;

    self.campo = info.campo || "";
    self.emailList = info.emailList || [];
    self.addEmail = addEmail;


    function addEmail(email) {
      if (self.emailList.length === 5) {
        self.emailList.pop();
        // or
        // throw new Error("");
      }
      self.emailList.push();
    }

  }
}());

// Coisas no OTUS:
// var contact = ParticipantContactFactory.create();
//
// contact.campo = "";
// contact.emailList.push("email@email");
// contact.addEmail("email@email");