(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.surveyItem.customAnswer.FileUploadAnswerFactory', factory);

  function factory() {
    var self = this;

    /* Public Interface */
    self.buildAnswer = buildAnswer;
    self.buildFromJson = buildFromJson;

    function buildAnswer(fileInfo) {
      return fileInfo.oid ? new FileUploadAnswer(fileInfo) : null;
    }

    function buildFromJson(fileArray) {
      var arrayResult = [];
      fileArray.forEach(function(jsonFile) {
        var file = new FileUploadAnswer(jsonFile);
        file.sentDate = new Date(jsonFile.sentDate);
        arrayResult.push(file);
      });
      return arrayResult;
    }
    return self;
  }

  function FileUploadAnswer(fileInfo) {
    var self = this;

    self.objectType = 'FileAnswer';
    self.name = fileInfo.name;
    self.size = fileInfo.size;
    self.type = fileInfo.type;
    self.sentDate = fileInfo.lastModifiedDate ? fileInfo.lastModifiedDate.toISOString() : '';
    self.oid = fileInfo.oid;
    self.printableSize = bytesToSize();

    function bytesToSize() {
      var bytes = self.size;
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

  }


}());
