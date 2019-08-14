(function () {
  'use strict';

  angular
    .module('otusjs.surveyItemGroup')
    .factory('otusjs.surveyItemGroup.SurveyItemGroupFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;

    function create(members) {
      return new SurveyItemGroup(members);
    }

    return self;
  }

  function SurveyItemGroup(members) {
    var self = this;

    self.objectType = "SurveyItemGroup";
    self.start = '';
    self.members = [];


    init();

    function init() {
      let start = members.shift();
      let end = members.pop();
      self.members.push(new GroupMember(start, POSITION.START));

      members.forEach(member => {
        self.members.push(new GroupMember(member, POSITION.MIDDLE));
      });

      self.members.push(new GroupMember(end, POSITION.END));

    }

    self.toJSON = toJSON;


    function toJSON() {
      let json = {};

      return json;
    }

    return self;
  }

  function GroupMember(id, position) {
    return {
      id: id,
      position: position
    }
  }

  const POSITION = {
    START: 'start',
    MIDDLE: 'middle',
    END: 'end'
  };


  var group = {
    name: 'group 1',
    members: [
      {
        id: "CSJ1",
        position: 'start'
      },
      {
        id: "CSJ2",
        position: 'end'
      }
    ]
  };

}());