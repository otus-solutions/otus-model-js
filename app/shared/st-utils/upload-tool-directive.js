(function() {
  'use strict';

  angular
    .module('utils')
    .directive('uploadTool', directive);

  directive.$inject = [
    ];

  function directive(UploadToolService) {

    var ddo = {
      restrict: 'A',
      link: linkFunction,
      scope: {
        uploadTool: '='
      }
    };
    return ddo;

    function linkFunction($scope, $element, attributes) {
      var fileUploadElement;
      var uploadConfig = $scope.uploadTool;
      var callback = uploadConfig.callback || {};
      var uploadType = uploadConfig.type || 'any';
      var multiple = uploadConfig.multiple || false;

      $element.on('click', function(event) {
        fileUploadElement = _createInput(uploadType);
        fileUploadElement.click();

        fileUploadElement.addEventListener('change', function() {
          var filesToUpload = [];
          for (var i = 0; i < this.files.length; i++) {
            filesToUpload.push(this.files[i]);
          }
          if (filesToUpload.length !== 0) {
            callback(filesToUpload);
          }
        });
      });

      function _createInput(uploadType) {
        var acceptance = _uploadTypeResolver(uploadType);
        if (acceptance !== '') {
          fileUploadElement = document.createElement('input');
          fileUploadElement.setAttribute('type', 'file');
          fileUploadElement.setAttribute('accept', acceptance);
          if (multiple) {
             fileUploadElement.setAttribute('multiple', multiple);
          }
        } else {
          fileUploadElement = document.createElement('button');
        }

        return fileUploadElement;
      }
    }


    function _uploadTypeResolver(type) {
      var acceptance = '';
      if (type) {
        type = type.replace(/\s/g, "").split(',');
        for (var i = 0; i < type.length; i++) {
          var mappedType = _typeMapper(type[i]);
          if (mappedType) {
            acceptance += mappedType + ', ';
          }
        }
      }
      return acceptance || 'any';
    }

    function _typeMapper(type) {
      var typeMap = {
        'image': 'image/*',
        'jpg': '.jpg',
        'png': '.png',
        'json': '.json'
      };
      return typeMap[type];
    }
  }

}());
