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
    self.createActivityInfo = createActivityInfo;

    function create(requester, receiver, dueDate, activity) {
      const activityInfo = createActivityInfo(activity);
      return new UserActivityPendency(requester, receiver, dueDate, activityInfo);
    }

    function fromJsonObject(jsonObject) {
      //Destruct ES6
      const {requester, receiver, dueDate, activityInfo, id} = JSON.parse(jsonObject);
      return new UserActivityPendency(requester, receiver, dueDate, activityInfo, id);
    }

    function createActivityInfo(activity){
      //console.log(activity)

      return {
        id: activity.getID(),
        acronym: activity.getIdentity().acronym,
        name: activity.getName(),
        recruitmentNumber: activity.participantData.recruitmentNumber,
        lastStatusName: 'CREATE',
        externalID: activity.externalID || null
      }
    }

    return self;
  }

  function UserActivityPendency(requester, receiver, dueDate, activityInfo,  id) {
    const self = this;
    let _id = id || null;

    self.objectType = 'userActivityPendency';
    self.creationDate = new Date();
    self.dueDate = dueDate;
    self.requester = requester;
    self.receiver = receiver;
    self.activityInfo = {
      id: activityInfo.id,
      acronym: activityInfo.acronym,
      recruitmentNumber: activityInfo.recruitmentNumber,
      lastStatusName: activityInfo.lastStatusName,
      externalID: activityInfo.externalID
    };


    /* Public Get methods */
    self.getId = () => _id;
    self.getCreationDate = () => self.creationDate;
    self.getDueDate = () => self.dueDate;
    self.getRequester = () => self.requester;
    self.getReceiver = () => self.receiver;
    self.getActivityId = () => self.activityInfo.id;
    self.getAcronym = () => self.activityInfo.acronym;
    self.getRecruitmentNumber = () => self.activityInfo.recruitmentNumber;
    self.lastStatusName = () => self.activityInfo.lastStatusName;
    self.externalId = () => self.activityInfo.externalId;

    /* Public  methods */
  //   self.toJSON = toJSON;
  //
  //   function toJSON() {
  //     let json = {
  //       objectType: self.objectType,
  //       creationDate: self.creationDate,
  //       acronym: self.acronym,
  //       recruitmentNumber: self.recruitmentNumber,
  //       requester: self.requester,
  //       receiver: self.receiver
  //     };
  //
  //     return JSON.stringify(json);
  //   }

  }
})();