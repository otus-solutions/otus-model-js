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
    self.newStringSearch = function(datasource) {
      return new StringSearch(datasource);
    };


    /* -------- */
    function StringSearch(datasource, opt) { //perform a search in arrays of string
      var self = this;
      var options = opt || {
      //   id: "value",
      //   shouldSort: true,
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "value"
        ]
      };
      var fuse = new Fuse(datasource, options); // "datasource" is the item array

      /* Public Interface */
      self.perform = perform;


      function perform(text) {
        var deferred = $q.defer();
        deferred.resolve(text ? _filter(text) : datasource);
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
