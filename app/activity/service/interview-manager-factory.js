(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.InterviewManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.model.activity.InterviewFactory'
  ];

  var Inject = {};

  function Factory(InterviewFactory) {
    Inject.InterviewFactory = InterviewFactory;

    var self = this;
    self.OBJECT_TYPE = 'InterviewManager';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new InterviewManager();
    }

    function fromJsonObject(interviewList) {
      var _interviews = [];
      interviewList.map(function (interview) {
        _interviews.push(Inject.InterviewFactory.fromJsonObject(interview));
      });

      var interviewManager = create();
      interviewManager.init(_interviews);
      return interviewManager;
    }

    return self;
  }

  function InterviewManager() {
    var self = this;
    var _interviews = [];

    self.init = init;
    self.newRegistry = newRegistry;
    self.getInterviewSizeOfList = getInterviewSizeOfList;
    self.getInterviews = getInterviews;
    self.getLastStatus = getLastStatus;
    self.toJSON = toJSON;

    function init(interview) {
      _interviews = interview || [];
    }

    function newRegistry(user) {
      _interviews.push(Inject.InterviewFactory.create(user));
    }

    function getInterviews() {
      return _interviews;
    }

    function getLastStatus() {
      return _interviews[_interviews.length - 1];
    }

    function getInterviewSizeOfList() {
      return _interviews.length;
    }

    function toJSON() {
      return _interviews;
    }
  }

})()