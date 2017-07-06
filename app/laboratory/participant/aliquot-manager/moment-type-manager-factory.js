(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.MomentTypeManagerFactory', factory);

  function factory() {
    var self = this;

    self.create = create;

    function create(tube) {
      var manager = new MomentTypeManager(tube);      
      return manager;
    }

    return self;
  }

  function MomentTypeManager(tube) {
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

    onInit();

    function onInit() {}

    function addTube(tube) {
      self.collectedAliquots = self.collectedAliquots.concat(tube.aliquotes);
      self.tubeList.push(tube);
    }

    function setAvailableAliquots(availableAliquots) {
      self.availableAliquots = availableAliquots;
    }


  }
}());
