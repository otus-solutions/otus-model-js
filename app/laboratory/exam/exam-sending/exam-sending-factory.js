(function () {
    'use strict';

    angular
        .module('otusjs.laboratory.exam.sending')
        .factory('otusjs.laboratory.exam.sending.ExamSendingFactory', Factory);

    Factory.$inject = [
        'otusjs.laboratory.exam.sending.ExamResultLot',
    ];

    function Factory(ExamResultLot) {
        var self = this;
        self.create = create;
        self.fromJson = fromJson;

        function create(ExamResultLot, examSendingInfo) {
            return new ExamSending(ExamResultLot, examSendingInfo);
        }

        function fromJson(ExamResultLot, examSendingInfo) {
            return new ExamSending(ExamResultLot, examSendingInfo);
        }

        return self;
    }

    function ExamSending(ExamResultLot, examSendingInfo) {
        var self = this;

        self.operator = examSendingInfo.operator || '';
        self.fileName = examSendingInfo.fileName || '';
        self.realizationDate = examSendingInfo.realizationDate || '';
        self.resultsQuantity = examSendingInfo.resultsQuantity || '';
        self.fieldCenter = examSendingInfo.fieldCenter || '';
        self.results = ExamResultLot.fromJson(examSendingInfo.results);

        function toJSON() {
            var json = {
                operator: self.operator,
                fileName: self.fileName,
                realizationDate: self.realizationDate,
                resultsQuantity: self.resultsQuantity,
                fieldCenter: self.fieldCenter,
                results: self.results
            };

            return json;
        }

    }

}());