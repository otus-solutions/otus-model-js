(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.exam')
    .service('otusjs.laboratory.exam.ExamService', Service);

  Service.$inject = [
     'otusjs.laboratory.exam.ExamLotFactory'
  ];

  function Service(ExamLotFactory) {
    var self = this;

    self.createAliquotLot = createAliquotLot;
    self.buildAliquotLotFromJson = buildAliquotLotFromJson;

    function createAliquotLot() {
       return ExamLotFactory.create();
    }

    function buildAliquotLotFromJson(lotJson) {
      return ExamLotFactory.fromJson(lotJson);
    }

    return self;
  }
}());
