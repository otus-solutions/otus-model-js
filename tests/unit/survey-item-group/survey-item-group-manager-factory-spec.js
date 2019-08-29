describe('the SurveyItemGroupManagerFactory', function () {
  var factory;
  var Mock = {};
  var Injections = {};

  beforeEach(function () {
    angular.mock.module('otusjs');


    inject(function (_$injector_) {
      mock(_$injector_);

      factory = _$injector_.get('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory', Injections);
    });


  });

  describe('the creation method', function () {
    it('should create an defined object', function () {
      var manager = factory.create();
      expect(manager).toBeDefined();
    });

  });

  describe('the manager methods', function () {
    var manager;
    beforeEach(function () {
      Mock.navigationManager = Mock.NavigationManagerFactory.create();
      Mock.surveyItemManager = Mock.SurveyItemManagerFactory.create();

      Injections.ManagerCenterService.initialize(Mock.surveyItemManager, Mock.navigationManager);

      manager = factory.create();


      Mock.navigationManager.loadJsonData(Mock.template.navigationList);
      Mock.surveyItemManager.loadJsonDataObject(Mock.template.itemContainer);

    });


    describe('the loadJsonData method', function () {
      it('should load as empty array when passed undefined value (for compatibility purposes)', function () {
        manager.loadJsonData(undefined);
        expect(manager.getSurveyItemGroupList()).toEqual([]);
      });

      it('should load as empty array when passed undefined value (for compatibility purposes)', function () {
        manager.loadJsonData(Mock.template.surveyItemGroupList);
        expect(manager.getSurveyItemGroupList().length).toEqual(2);
      });
    });

    describe('the getGroupByStart method', function () {
      it('should get the group by the starting member', function () {
        manager.loadJsonData(Mock.template.surveyItemGroupList);
        let group = manager.getGroupByStart("DIC15");

        expect(group).toBeDefined();
        expect(group.start).toEqual("DIC15");
        expect(group.objectType).toEqual("SurveyItemGroup");
      });

    });

    describe('the getGroupCandidates method', function () {

      it('should provide the candidates for a group', function () {
        expect(manager.getGroupCandidates('DIC1')).toEqual(['DIC1', 'DIC2', 'DIC3']);
        expect(manager.getGroupCandidates('DIC8')).toEqual(['DIC8', 'DIC9', 'DIC12', 'DIC13']);
        expect(manager.getGroupCandidates('DIC5')).toEqual(['DIC5', 'DIC6']);
        expect(manager.getGroupCandidates('DIC15')).toEqual(['DIC15', 'DIC4', 'DIC11']);
        expect(manager.getGroupCandidates('DIC14')).toEqual(['DIC14', 'DIC16']);
      });

      it('should return the element alone when its not possible to form a group starting from it', function () {
        expect(manager.getGroupCandidates('DIC3')).toEqual(['DIC3']);
        expect(manager.getGroupCandidates('DIC16')).toEqual(['DIC16']);
      });

    });

    describe('the createGroup method', function () {
      it('should create a new group and return it', function () {
        let group = manager.createGroup(['DIC8', 'DIC9']);
        expect(group).toBeDefined();
      });

      it('should throw error when pass impossible group', function () {
        expect(function () {
          manager.createGroup(['DIC8', 'DIC9', 'DIC11']);
        }).toThrowError();
      });

      it('should throw error when pass an array  out of order besides valid group', function () {
        expect(function () {
          manager.createGroup(['DIC8', 'DIC13', 'DIC9']);
        }).toThrowError();
      });

      it('should throw error when pass an array with less than 2 items', function () {
        expect(function () {
          manager.createGroup(['DIC8']);
        }).toThrowError();
      });

      it('should rewrite a group', function () {
        manager.createGroup(['DIC8', 'DIC9']);
        expect(manager.getGroupByStart('DIC8').members.length).toEqual(2);

        manager.createGroup(['DIC8', 'DIC9', 'DIC12']);
        expect(manager.getGroupByStart('DIC8').members.length).toEqual(3);

        manager.createGroup(['DIC8', 'DIC9']);
        expect(manager.getGroupByStart('DIC8').members.length).toEqual(2);

        expect(manager.getSurveyItemGroupList().filter(group => group.start === 'DIC8').length).toEqual(1);
      });

    });

    describe('the deleteGroup method', function () {
      beforeEach(function () {
        manager.loadJsonData(Mock.template.surveyItemGroupList);
      });

      it('should delete a group given the starting element', function () {
        let idToExclude = 'DIC15';
        manager.deleteGroup(idToExclude);
        expect(manager.getGroupByStart(idToExclude)).toBeFalsy();
      });

      it('should not modify the group list when passed a not found group start', function () {
        let idToExclude = 'DIC15231123';
        let beforeDeletionList = manager.getSurveyItemGroupList();
        manager.deleteGroup(idToExclude);
        expect(manager.getSurveyItemGroupList()).toEqual(beforeDeletionList);
      });

    });

    describe('the getGroupByMember method', function () {
      beforeEach(function () {
        manager.loadJsonData(Mock.template.surveyItemGroupList);
      });

      it('should return the group to which the member belongs to', function () {
        let id = 'DIC4';

        expect(manager.getGroupByMember(id)).toBeDefined();
        expect(manager.getGroupByMember(id).members).toContain({
          id: 'DIC4',
          position: 'middle'
        });

      });

      it('should return undefined when dont find any group with given id', function () {
        let id = 'DIC12';

        expect(manager.getGroupByMember(id)).not.toBeDefined();
      });

    });

    describe('the allowItemMovement method', function () {
      beforeEach(function () {
        manager.loadJsonData(Mock.template.surveyItemGroupList);
      });

      it('should allow movement when last item in position is not a group member', function () {
        expect(function () {
          manager.allowItemMovement("DIC5", 9);
        }).not.toThrowError();

      });

      it('should allow movement when last item in position is the start of a group', function () {
        expect(function () {
          manager.allowItemMovement("DIC5", 0);
        }).not.toThrowError();

      });

      it('should not allow movement to inside a group', function () {
        expect(function () {
          manager.allowItemMovement("DIC5", 1);
        }).toThrowError();

      })
    });


    describe('the removeItemFromGroup method', function () {
      let group;
      beforeEach(function () {
        group = manager.createGroup(["DIC1", "DIC2", "DIC3"]);
      });

      it('should remove item with no modification to group', function () {
        manager.removeItemFromGroup("DIC2");
        expect(group).toBeDefined();
        expect(group.start).toEqual("DIC1");
        expect(group.end).toEqual("DIC3");
        expect(group.members.length).toEqual(2);
      });

      it('should displace the start position when removing start item', function () {
        manager.removeItemFromGroup("DIC1");
        group = manager.getGroupByStart("DIC1");
        expect(group).not.toBeDefined();

        group = manager.getGroupByStart("DIC2");
        expect(group.start).toEqual("DIC2");
        expect(group.end).toEqual("DIC3");
        expect(group.members.length).toEqual(2);
      });

      it('should displace the end position when removing end item', function () {
        manager.removeItemFromGroup("DIC3");
        group = manager.getGroupByStart("DIC1");
        expect(group).toBeDefined();
        expect(group.start).toEqual("DIC1");
        expect(group.end).toEqual("DIC2");
        expect(group.members.length).toEqual(2);
      });

      it('should delete the group when less than two remaining items', function () {

        manager.removeItemFromGroup("DIC2");
        manager.removeItemFromGroup("DIC3");
        expect(manager.getGroupByStart("DIC1")).not.toBeDefined();
      });

    });
  });


  function mock(_$injector_) {
    Mock.template = Test.utils.data.templateExampleWithAllQuestionsAndValidations;

    Injections.ManagerCenterService = _$injector_.get('otusjs.survey.ManagerCenterService');
    Injections.SurveyItemGroupFactory = _$injector_.get('otusjs.surveyItemGroup.SurveyItemGroupFactory');

    Mock.SurveyItemManagerFactory = _$injector_.get('SurveyItemManagerFactory');
    Mock.NavigationManagerFactory = _$injector_.get('otusjs.model.navigation.NavigationManagerFactory');

  }


});