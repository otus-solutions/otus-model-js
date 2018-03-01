(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .service('otusjs.laboratory.exam.sending.ExamSendingLotService', service);

  service.$inject = [
    'otusjs.laboratory.exam.sending.ExamSendingFactory'
  ];

  function service(ExamSendingFactory) {
    var self = this;

    /* Public methods */
    self.createExamSending = createExamSending;
    self.buildExamSendingFromJson = buildExamSendingFromJson;

    function createExamSending() {
      return ExamSendingFactory.create();
    }

    function buildExamSendingFromJson(examSendingLot, exam) {
      return ExamSendingFactory.fromJson(examSendingLot, exam);
    }

    return self;
  }
}());
