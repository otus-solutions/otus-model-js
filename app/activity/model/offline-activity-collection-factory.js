(function () {

  'use strict';

  angular.module('otusjs.model.activity')
    .factory('otusjs.model.activity.OfflineActivityCollection', Factory);

  Factory.$inject = [
    'otusjs.model.activity.ActivityFactory',
    'SurveyFormFactory'
  ];


  function Factory(ActivityFactory, SurveyFormFactory) {
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
    const ERROR_ACTIVITY_ADD = 'Insert only activity object';

    self.objectType = "OfflineActivityCollection";
    self._id = jsonObject._id ? jsonObject._id.hasOwnProperty('$oid') ? jsonObject._id.$oid : jsonObject._id : null;
    self.observation = jsonObject.observation || '';
    self.userId = jsonObject.userId ? jsonObject.userId.hasOwnProperty('$oid') ? jsonObject.userId.$oid : jsonObject.userId : null;
    self.date = jsonObject.date ? jsonObject.date : new Date().toISOString();
    self.activities = jsonObject.activities || [];
    self.geoJson = jsonObject.geoJson || new GeoJSON();

    self.addActivity = addActivity;
    self.addActivities = addActivities;
    self.removeActivity = removeActivity;
    self.toJSON = toJSON;


    function addActivity(activity) {
      if (_validateActivityObject(activity)){
        self.activities.push(activity);
      }
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
      json.observation = self.observation;
      json.userId = self.userId;
      json.date = self.date;
      json.activities = self.activities;
      json.geoJson = self.geoJson;
      return json;
    }

  }
})();