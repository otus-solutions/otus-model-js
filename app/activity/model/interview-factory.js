(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.InterviewFactory', Factory);

  Factory.$inject = [
    'otusjs.model.activity.InterviewerFactory'
  ];

  function Factory(InterviewerFactory) {
    var self = this;

    self.OBJECT_TYPE = 'Interview';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(user) {
      var interviewer = InterviewerFactory.create(user);
      return new Interview(interviewer);
    }

    function fromJsonObject(jsonObject) {
      var interviewer = InterviewerFactory.fromJsonObject(jsonObject.interviewer);
      var interview = new Interview(interviewer);
      interview.date = new Date(jsonObject.date); 
      return interview;
    }

    return self;
  }

  function Interview(interviewer) {
    var self = this;

    self.objectType = 'Interview';
    self.date = new Date();
    self.interviewer = interviewer;

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.date = self.date;
      json.interviewer = self.interviewer;

      return json;
    }
  }

}());
