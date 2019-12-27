(function () {
  'use restrict';

  angular
    .module('otusjs.model.pendency')
    .factory('otusjs.model.pendency.UserActivityPendency', Factory);

  Factory.$inject = [];

  function Factory() {

    const self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(acronym, recruitmentNumber, requester, receiver) {
      return new UserActivityPendency(acronym, recruitmentNumber, requester, receiver);
    }

    function fromJsonObject(jsonObject) {
      //Destruct ES6
      const {acronym, recruitmentNumber, requester, receiver, id} = JSON.parse(jsonObject);
      return new UserActivityPendency(acronym, recruitmentNumber, requester, receiver, id);
    }

    return self;
  }

  function UserActivityPendency(acronym, recruitmentNumber, requester, receiver, id) {
    const self = this;
    let _id = id || null;

    self.objectType = 'userActivityPendency';
    self.creationDate = new Date();
    self.acronym = acronym;
    self.recruitmentNumber = recruitmentNumber;
    self.requester = requester;
    self.receiver = receiver;
    // self.dueDate = dueDate;

    /* Public Get methods */
    self.getID = () => _id;
    self.getCreationDate = () => self.creationDate;
    self.getAcronym = () => self.acronym;
    self.getRecruitmentNumber = () => self.recruitmentNumber;
    self.getRequester = () => self.requester;
    self.getReceiver = () => self.receiver;

    /* Public  methods */
    self.toJSON = toJSON;

    function toJSON() {
      let json = {
        objectType: self.objectType,
        creationDate: self.creationDate,
        acronym: self.acronym,
        recruitmentNumber: self.recruitmentNumber,
        requester: self.requester,
        receiver: self.receiver
      };

      return JSON.stringify(json);
    }
  }


})();