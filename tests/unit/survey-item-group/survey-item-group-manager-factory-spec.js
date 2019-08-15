fdescribe('the SurveyItemGroupManagerFactory', function () {
  var factory;
  var Mock = {};

  beforeEach(function () {
    angular.mock.module('otusjs');


    inject(function (_$injector_) {
      mock(_$injector_);
      factory = _$injector_.get('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory');
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
      manager = factory.create();

      Mock.navigationContainer = Mock.NavigationContainerFactory.create();
      Mock.surveyItemContainer = Mock.SurveyItemContainerFactory.create();

      Mock.navigationContainer.loadJsonData(Mock.template.navigationList);
      Mock.surveyItemContainer.loadFromItemContainerObject(Mock.template.itemContainer);

      manager.setNavigationContainer(Mock.navigationContainer);
      manager.setSurveyItemContainer(Mock.surveyItemContainer);
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

  });


  function mock(_$injector_) {
    Mock.template = Test.utils.data.templateExampleWithAllQuestionsAndValidations;

    Mock.SurveyItemContainerFactory = _$injector_.get('SurveyItemContainerFactory');
    Mock.NavigationContainerFactory = _$injector_.get('otusjs.model.navigation.NavigationContainerFactory');
    Mock.SurveyItemGroupFactory = _$injector_.get('otusjs.surveyItemGroup.SurveyItemGroupFactory');

  }


});