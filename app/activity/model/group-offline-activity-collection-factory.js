(function () {

  'use strict';

  angular.module('otusjs.model.activity')
    .factory('otusjs.model.activity.GroupOfflineActivityCollection', Factory);

  Factory.$inject = [
    'otusjs.model.activity.OfflineActivityCollection'
  ];


  function Factory(OfflineActivityCollection) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    function create() {
      return new GroupOfflineActivityCollection({}, OfflineActivityCollection);
    }

    function fromJson(json) {
      return new GroupOfflineActivityCollection(json, OfflineActivityCollection);
    }

    function fromArray(jsonArray) {
      var _collections = Array.prototype.concat.apply(jsonArray);
      return _collections.map(function (jsonObject) {
          return new GroupOfflineActivityCollection(jsonObject, OfflineActivityCollection);
      });
    }

    return self;
  }

  function GroupOfflineActivityCollection(jsonObject, OfflineActivityCollection) {
    var self = this;

    const OBJECT_TYPE = 'OfflineActivityCollection';

    self.objectType = "GroupOfflineActivityCollection";
    self._id = jsonObject._id ? new ObjectId(jsonObject._id).toString() : new ObjectId().toString();
    self.observation = jsonObject.observation || '';
    self.collections = OfflineActivityCollection.fromArray(jsonObject.collections || []);


    self.addCollection = addCollection;
    self.addCollections = addCollections;
    self.removeCollection = removeCollection;

    self.toJSON = toJSON;


    function addCollection(collection) {
      if (_validateCollectionObject(collection)){
        collection.groupObservation = self.observation;
        collection.groupId = self._id;
        self.collections.push(OfflineActivityCollection.fromJson(collection));
      }
    }


    function addCollections(collections) {
      Array.prototype.concat.apply(collections).forEach(function (collection) {
        self.addCollection(collection);
      });
    }

    function removeCollection(index) {
      if(index >= 0 && index < self.activities.length){
        self.collections.splice(index, 1);
      }
    }

    function _validateCollectionObject(collection) {
      return collection.objectType === OBJECT_TYPE;
    }

    function toJSON() {
      var json = {};
      json._id = self._id;
      json.objectType = self.objectType;
      json.observation = self.observation;
      json.collections = self.collections;

      return json;
    }

  }
})();