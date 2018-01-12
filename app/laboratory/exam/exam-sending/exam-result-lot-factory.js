(function () {
    'use strict';

    angular
        .module('otusjs.laboratory.exam.sending')
        .factory('otusjs.laboratory.exam.sending.ExamResultLot', Factory);

    function Factory() {
        var self = this;
        self.create = create;
        self.fromJson = fromJson;

        function create(results) {
            return new ExamLot(results);
        }

        function fromJson(results) {
            return new ExamLot(results);
        }

        return self;
    }

    function ExamResultLot() {

    }


}());