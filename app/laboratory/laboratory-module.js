(function() {
    'use strict';

    angular
        .module('otusjs.laboratory', [
           'otusjs.laboratory.participant',
           'otusjs.laboratory.configuration',
           'otusjs.laboratory.transportation',
           'otusjs.laboratory.exam',
           'otusjs.laboratory.laboratoryCrud'
        ]);

}());
