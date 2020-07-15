(function () {
  'use strict';

  angular.module('utils')
    .factory('ObjectId', Factory);

  function Factory() {
    var constructor = function (value) {
      return new ObjectId(value);
    };

    function ObjectId(value) {
      var mongoObjectId = function () {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
          return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
      };

      var checkForHexRegExp = new RegExp(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i);

      if (value) {
        var rawValue;
        if (value.hasOwnProperty('$oid')) {
          rawValue = value.$oid;
        } else {
          rawValue = value;
        }
        if (checkForHexRegExp.test(rawValue)) {
          this.$oid = rawValue
        } else {
          throw new Error('Invalid value for ObjectId.');
        }
      } else {
        this.$oid = mongoObjectId();
      }

      return this;
    }

    ObjectId.prototype.toString = function () {
      return ''.concat(this.$oid);
    };

    return constructor;
  }
}());


