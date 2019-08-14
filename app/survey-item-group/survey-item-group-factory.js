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
    self.fromJson = fromJson;

    function create() {
      return new SurveyItemGroup();
    }

    function fromJson() {
      var group = new SurveyItemGroup();

      return group;
    }

    return self;
  }

  function SurveyItemGroup() {
    var self = this;

    self.objectType = "SurveyItemGroup";
    self.name = '';
    self.items = [];

    self.toJSON = toJSON;

    function insertInStartPosition(id) {
      let previousStart = self.items.find(item => {
        return item.position === POSITION.START;
      });

      previousStart.position = POSITION.MIDDLE;

      self.items.unshift({
        id: id,
        position: POSITION.START
      })
    }

    function insertInEndPosition(id) {
      let previousEnd = self.items.find(item => {
        return item.position === POSITION.END;
      });

      previousEnd.position = POSITION.MIDDLE;

      self.items.unshift({
        id: id,
        position: POSITION.START
      })
    }


    function toJSON() {
      let json = {};

      return json;
    }

    return self;
  }

  function GroupMember(id, position) {

  }

  const POSITION = {
    START: 'start',
    MIDDLE: 'middle',
    END: 'end'
  };


  var group = {
    name:'group 1',
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