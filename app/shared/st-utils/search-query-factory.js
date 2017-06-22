(function() {
  'use strict';

  angular
    .module('utils')
    .factory('otusjs.utils.SearchQueryFactory', factory);

  factory.$inject = [
     '$q'
      ];

  function factory($q) {
    var self = this;

    /* Public Interface */
    self.newStringSearch = newStringSearch;
    self.newParticipantFilter = newParticipantFilter;


    function newStringSearch(datasource) {
      var options = {
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "value"
         ]
      };
      return new StringSearch(datasource, options);
    }

    function newParticipantFilter(datasource) {
      var options = {
         shouldSort: true,
          tokenize: true,
          threshold: 0.2,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
        keys: [
            "name",
            "stringfiedRN"
         ]
      };
      return new StringSearch(datasource, options);
    };


    /* -------- */
    function StringSearch(datasource, opt) { //perform a search in arrays of string
      var self = this;
      var options = opt || {
        threshold: 0.2,
        maxPatternLength: 10,
        minMatchCharLength: 1,
        location: 0,
        distance: 50,
        keys: [
          "value"
        ]
      };
      var fuse = new Fuse(datasource, options); // "datasource" is the item array

      /* Public Interface */
      self.perform = perform;


      function perform(text) {
        var deferred = $q.defer();
        deferred.resolve(text ? _filter(text) : []);
        return deferred.promise;
      }

      function _filter(typedText) {
        var matchIndexes = fuse.search(typedText);
        return matchIndexes;
      }

    }
    return self;
  }
}());
