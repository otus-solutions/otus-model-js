(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.MomentTypeManagerFactory', factory);

  factory.$inject = [
      '$q'
   ];

  function factory($q) {
    var self = this;

    self.create = create;

    function create(tube) {
      var manager = new MomentTypeManager($q, tube);
      return manager;
    }

    return self;
  }

  function MomentTypeManager($q, tube) {
    var self = this;

    /* Public Interface */
    self.type = tube.type;
    self.moment = tube.moment;
    self.momentLabel = tube.momentLabel;
    self.typeLabel = tube.typeLabel;
    self.boxColor = tube.boxColor;
    self.collectedAliquots = [];
    self.availableAliquots = [];
    self.tubeList = [];

    //

    self.addTube = addTube;
    self.setAvailableAliquots = setAvailableAliquots;
    self.persist = persist;

    onInit();

    function onInit() {}

    function addTube(tube) {
      self.collectedAliquots = self.collectedAliquots.concat(tube.aliquotes);
      self.tubeList.push(tube);
    }

    function setAvailableAliquots(availableAliquots) {
      self.availableAliquots = availableAliquots;
    }


    function persist(aliquotsArray, forceResult) {
      var defer = $q.defer();

      //generate new TubesArray

      aliquotsArray.forEach(function(aliquot) {
         var tube = _findTube(aliquot.tubeCode);
         tube.toAliquot(aliquot);
      });

      // return new TubesArray

      if (forceResult) {
        defer.resolve(aliquotsArray);
      } else {
        defer.reject(aliquotsArray.slice(1, 4));
      }

      return defer.promise;
    }



  }
}());
