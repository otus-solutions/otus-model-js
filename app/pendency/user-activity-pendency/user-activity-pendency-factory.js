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

    function create(requester, receiver, dueDate, activityId, activityInfo, id) {
      return new UserActivityPendency(requester, receiver, dueDate, activityId, activityInfo, id);
    }

    function fromJsonObject(jsonObject) {
      //Destruct ES6
      const {requester, receiver, dueDate, activityId, activityInfo, id} = jsonObject;
      return new UserActivityPendency(requester, receiver, dueDate, activityId, activityInfo, id);
    }

    return self;
  }

  function UserActivityPendency(requester, receiver, dueDate, activityId, activityInfo, id) {
    const self = this;
    self.id = id || null;
    self.objectType = 'userActivityPendency';
    self.creationDate = new Date();
    self.dueDate = dueDate;
    self.requester = requester;
    self.receiver = receiver;
    self.activityId = activityId;
    self.activityInfo = {
      acronym: activityInfo.acronym,
      name: activityInfo.name,
      recruitmentNumber: activityInfo.recruitmentNumber,
      lastStatusName: activityInfo.lastStatusName,
      externalID: activityInfo.externalID
    };

    /* Public Getter Methods */
    self.getID = () => self.id;
    self.getCreationDate = () => self.creationDate;
    self.getDueDate = () => self.dueDate;
    self.getRequester = () => self.requester;
    self.getReceiver = () => self.receiver;
    self.getActivityID = () => self.activityId;
    self.getActivityAcronym = () => self.activityInfo.acronym;
    self.getActivityName = () => self.activityInfo.name;
    self.getActivityRecruitmentNumber = () => self.activityInfo.recruitmentNumber;
    self.getActivitylastStatusName = () => self.activityInfo.lastStatusName;
    self.getActivityExternalID = () => self.activityInfo.externalID;

    /* Public  Setter Methods */
    self.setReceiver = (receiver) => self.receiver = receiver;
    self.setDueDate = (date) => self.dueDate = date;

    /* Public  methods */
    self.toJSON = toJSON;

    function toJSON() {
      return {
        id: self.id,
        objectType: self.objectType,
        creationDate: self.creationDate,
        dueDate: self.dueDate,
        requester: self.requester,
        receiver: self.receiver,
        activityId: self.activityId
      };
    }

  }
})();