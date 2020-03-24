(function () {

  'use strict';

  angular.module('otusjs.model.activity')
    .factory('otusjs.model.activity.OfflineActivityCollection', Factory);

  Factory.$inject = [];


  function Factory() {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    function create() {
      return new OfflineActivityCollection({});
    }

    function fromJson(json) {
      return new OfflineActivityCollection(json);
    }

    function fromArray(jsonArray) {
      var _collections = Array.prototype.concat.apply(jsonArray);
      return _collections.map(function (jsonObject) {
          return new OfflineActivityCollection(jsonObject);
      });
    }

    return self;
  }

  function OfflineActivityCollection(jsonObject) {
    var self = this;

    const OBJECT_TYPE = 'Activity';
    const CREATED = 'CREATED';

    self.objectType = "OfflineActivityCollection";
    self._id = jsonObject._id ? new ObjectId(jsonObject._id).toString() : null;
    self.observation = jsonObject.observation || '';
    self.userId = jsonObject.userId ? new ObjectId(jsonObject.userId).toString() :  null;
    self.userEmail = jsonObject.userEmail || null;
    self.date = jsonObject.date || null;
    self.activities = jsonObject.activities || [];
    self.geoJson = jsonObject.geoJson || null;
    self.hasInitialized = !!self.date;

    self.initialize = initialize;
    self.addActivity = addActivity;
    self.addActivities = addActivities;
    self.removeActivity = removeActivity;
    self.getActivitiesToSave = getActivitiesToSave;

    self.toJSON = toJSON;


    function initialize() {
      self.date = new Date().toISOString();
      self.geoJson = new GeoJSON();
      self.hasInitialized = true;
    }

    function addActivity(activity) {
      if (_validateActivityObject(activity)){
        self.activities.push(activity);
      }
    }

    function getActivitiesToSave() {
      return self.activities.filter(function (activity) {
        return activity.statusHistory.getLastStatus().name != CREATED;
      });
    }

    function addActivities(activities) {
      Array.prototype.concat.apply(activities).forEach(function (activity) {
        self.addActivity(activity);
      });
    }

    function removeActivity(index) {
      if(index >= 0 && index < self.activities.length){
        self.activities.splice(index, 1);
      }
    }

    function _validateActivityObject(activity) {
      return activity.objectType === OBJECT_TYPE;
    }

    function toJSON() {
      var json = {};
      json._id = self._id;
      json.objectType = self.objectType;
      json.observation = self.observation;
      json.userId = self.userId;
      json.userEmail = self.userEmail;
      self.date ? json.date = self.date : null;
      json.activities = self.activities;
      json.geoJson =  self.geoJson;
      return json;
    }

  }
})();