(function (){
  'use restrict';

  angular
    .module('otusjs.model.pendency')
    .factory('otusjs.model.pendency.PendencyActivityReview', Factory);

  Factory.$inject = [];

  function Factory() {

    let self = this;

    /* Public methods */
    self.create = create;

    function create(){
      let pendency = new PendencyActivityReview();
      return pendency;
    }

    return self;
  }

  function PendencyActivityReview(){
    const self = this;
    self.objectType = 'PendencyActivityReview';
    self.creationDate = ''
    self.acronym = '';
    self.recruitmentNumber = '';
    self.fromUser = '';
    self.toUser = '';
  }


})();