(function () {
  'use restrict';

  angular
    .module('otusjs.model.pendency')
    .factory('otusjs.model.pendency.UserActivityPendencyFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    const self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.createActivityInfo = createActivityInfo;

    function create(receiver, dueDate, activity, requester, id) {
      const activityInfo = createActivityInfo(activity);
      return new UserActivityPendency( receiver, dueDate, activityInfo, requester, id);
    }

    function fromJsonObject(jsonObject) {
      //Destruct ES6
      const { receiver, dueDate, activityInfo, requester, _id} = JSON.parse(jsonObject);
      return new UserActivityPendency( receiver, dueDate, activityInfo, requester, _id);
    }

    function createActivityInfo(activity) {
      return {
        id: activity.getID(),
        acronym: activity.getIdentity().acronym,
        name: activity.getName(),
        recruitmentNumber: activity.participantData.recruitmentNumber,
        lastStatusName: activity.statusHistory.getLastStatus().name,
        externalID: activity.externalID || null
      }
    }

    return self;
  }

  function UserActivityPendency(receiver, dueDate, activityInfo, requester, id) {
    const self = this;
    self._id = id || null;
    self.objectType = 'userActivityPendency';
    self.creationDate = new Date();
    self.dueDate = dueDate;
    self.requester = requester || null;
    self.receiver = receiver;
    self.activityInfo = {
      id: activityInfo.id,
      acronym: activityInfo.acronym,
      recruitmentNumber: activityInfo.recruitmentNumber,
      lastStatusName: activityInfo.lastStatusName,
      externalID: activityInfo.externalID
    };

    /* Public Getter Methods */
    self.getID = () => self._id;
    self.getCreationDate = () => self.creationDate;
    self.getDueDate = () => self.dueDate;
    self.getRequester = () => self.requester;
    self.getReceiver = () => self.receiver;
    self.getActivityID = () => self.activityInfo.id;
    self.getActivityAcronym = () => self.activityInfo.acronym;
    self.getActivityRecruitmentNumber = () => self.activityInfo.recruitmentNumber;
    self.getActivitylastStatusName = () => self.activityInfo.lastStatusName;
    self.getActivityExternalID = () => self.activityInfo.externalID;

    /* Public  Setter Methods */
    self.setReceiver = (receiver) => self.receiver = receiver;
    self.setDueDate = (date) => self.dueDate = date;

    /* Public  methods */
    self.toJSON = toJSON;

    function toJSON() {
      let json = {
        _id: self._id,
        objectType: self.objectType,
        creationDate: self.creationDate,
        dueDate: self.dueDate,
        requester: self.requester,
        receiver: self.receiver,
        activityInfo: {
          id: self.activityInfo.id,
          acronym: self.activityInfo.acronym,
          recruitmentNumber: self.activityInfo.recruitmentNumber,
          lastStatusName: self.activityInfo.lastStatusName,
          externalID: self.activityInfo.externalID
        }
      };
      return JSON.stringify(json);
    }

  }
})();