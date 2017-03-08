(function() {
  'use strict';

  angular
    .module('utils')
    .factory('otusjs.utils.ImmutableDate', factory);

  factory.$inject = [];

  function factory() {
    var constructor = function() {
      var date;
      if (Object.values(arguments).length) {
        date = new Date(Object.values(arguments));
      } else {
        date = new Date();
      }
      return new ImmutableDate(date);
    };
    return constructor;

    function ImmutableDate(date) {
      var self = this;

      self.objectType = 'ImmutableDate';
      self.date = (date.getTime()) ? date : undefined; //this check if date is a valid Date object. undefined starts an empty datepicker
      self.toJSON = toJSON;

      /*Date Methods*/
      self.setHours = setHours;
      self.getHours = getHours;
      self.setMinutes = setMinutes;
      self.getMinutes = getMinutes;
      self.setSeconds = setSeconds;
      self.getSeconds = getSeconds;
      self.setMilliseconds = setMilliseconds;
      self.setDate = setDate;
      self.setMonth = setMonth;
      self.setFullYear = setFullYear;
      self.getTime = getTime;
      self.resetDate = resetDate;
      self.resetTime = resetTime;
      self.toString = toString;

      function setHours(hours) {
        self.date.setHours(hours);
      }

      function getHours() {
        return self.date.getHours();
      }

      function setMinutes(minutes) {
        self.date.setMinutes(minutes);
      }

      function getMinutes() {
        return self.date.getMinutes();
      }

      function setSeconds(seconds) {
        self.date.setSeconds(seconds);
      }

      function getSeconds() {
        return self.date.getSeconds();
      }

      function setMilliseconds(milliseconds) {
        self.date.setMilliseconds(milliseconds);
      }

      function setDate(date) {
        self.date.setDate(date);
      }

      function setMonth(month) {
        self.date.setMonth(month);
      }

      function setFullYear(fullYear) {
        self.date.setFullYear(fullYear);
      }

      function getTime() {
        return self.date.getTime();
      }

      function resetDate() {
        if (!self.date) {
          return;
        }
        self.date.setDate(1);
        self.date.setMonth(0);
        self.date.setFullYear(1970);
      }

      function resetTime() {
        if (!self.date) {
          return;
        }
        self.date.setHours(0);
        self.date.setMinutes(0);
        self.date.setSeconds(0);
        self.date.setMilliseconds(0);
      }

      function toJSON() {
        return {
          objectType: self.objectType,
          value: self.toString()
        };
      }

      function toString() {
        if (!self.date) {
          return null; //TODO check what
        }
        var newDate = new Date(self.date.getTime());
        var year = '' + newDate.getFullYear(),
          month = _padLeadingZeroes(newDate.getMonth() + 1, 2),
          day = _padLeadingZeroes(newDate.getDate(), 2),
          hours = _padLeadingZeroes(newDate.getHours(), 2),
          minutes = _padLeadingZeroes(newDate.getMinutes(), 2),
          seconds = _padLeadingZeroes(newDate.getSeconds(), 2),
          milisseconds = _padLeadingZeroes(newDate.getMilliseconds(), 3);

        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + '.' + milisseconds;
      }

      function _padLeadingZeroes(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }

      return self;
    }
  }

}());
