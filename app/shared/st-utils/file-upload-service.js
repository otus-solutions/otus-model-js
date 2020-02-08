(function() {
  'use strict';

  angular
    .module('utils')
    .factory('otusjs.utils.FileUploadFactory', factory);

  factory.$inject = [
    '$q',
    'otusjs.model.activity.ActivityFacadeService'

  ];

  function factory($q, ActivityFacadeService) {
    var self = this;
    var _resource;
    var _provided = false; //tell if otus provided a resource

    /* Public Interface */
    self.setUploadInterface = setUploadInterface;
    self.getUploadInterface = getUploadInterface;

    function setUploadInterface(_rest) {
      var defer = $q.defer();
      _resource = _rest;
      _provided = true;
      defer.resolve(true);
      return defer.promise;
    }

    function getUploadInterface() {
      if (_provided) {
        return new UploadInterface($q, _resource, ActivityFacadeService);
      } else {
        return new FakeUploadInterface($q);
      }
    }
    return self;
  }

  function UploadInterface($q, _resource, ActivityFacadeService) {
    var self = this;
    var _recruitment_number;
    var _requestCanceler;
    var _interviewer;

    _init();

    /* Public Interface */
    self.uploadFile = uploadFile;
    self.getFile = getFile;
    self.deleteFile = deleteFile;
    self.cancelRequest = cancelRequest;

    function _init() {
      _recruitment_number = ActivityFacadeService.surveyActivity.participantData.recruitmentNumber;
      _interviewer = null;
      _requestCanceler = {};
    }



    function uploadFile(file, questionID) {
      _requestCanceler[file.control] = $q.defer();
      var type = file.type,
        name = file.name,
        size = file.size,
        sentDate = file.lastModifiedDate.toISOString();

      var formData = new FormData();
      formData.append('file', file);
      formData.append('item_id', questionID);
      formData.append('recruitment_number', _recruitment_number);
      formData.append('interviewer', _interviewer);
      formData.append('sent_date', sentDate);
      formData.append('name', name);
      formData.append('type', type);
      formData.append('size', size);

      return _resource.post(formData, _requestCanceler[file.control].promise);
    }

    function cancelRequest(controlIndex) {
      _requestCanceler[controlIndex].resolve(true);
    }

    function getFile(fileInfo) {
      var defer = $q.defer();
      _resource.getByOID(fileInfo.oid)
        .then(function(response) {
          defer.resolve(_buildFile(response.data, fileInfo));
        }, function(err) {
          defer.reject(err);
        });
      return defer.promise;
    }

    function deleteFile(oid) {
      return _resource.deleteByOID(oid);
    }


    function _buildFile(arrayBuffer, fileInfo) {
      var file = new File([arrayBuffer], fileInfo.name, {
        type: fileInfo.type
      });
      return file;
    }
  }

  function FakeUploadInterface($q) { //for studio purposes
    var self = this;

    /* Public Interface */
    self.uploadFile = getsNothing;
    self.getFile = getsNothing;
    self.deleteFile = getsNothing;

    function getsNothing() {
      var defer = $q.defer();
      var response = {
        data: {
          data: 'fakeOID'
        }
      };
      defer.resolve(response);
      return defer.promise;
    }
  }
}());
