describe('NavigationContainerService', function() {
  var Mock = {};
  var service;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockJson();
      mockQuestions(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.NavigationContainerService', {
        NavigationFactory: mockNavigationFactory(_$injector_)
      });

      mockNavigationToManage(_$injector_);
    });
  });

  describe('init method', function() {

    xit('should clear the array of navigations', function() {
      service.createNavigationTo(Mock.questionOne.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionThree.templateID);
      service.createNavigationTo(Mock.questionFour.templateID);

      expect(service.getNavigationListSize()).toBe(4);
      service.init();
      expect(service.getNavigationListSize()).toBe(0);
    });

  });

  describe('loadJsonData method', function() {

    it('should', function() {
      service.loadJsonData(Mock.json);
    });

  });

  describe('manage method', function() {

    xit('should initialize the array of navigations', function() {
      service.init();
      expect(service.getNavigationListSize()).toBe(0);

      service.manageNavigation(Mock.navigationToManage);
      expect(service.getNavigationListSize()).toBe(3);
    });

  });

  describe('getNavigationList method', function() {

    xit('should return an array', function() {
      var returnedValue = service.getNavigationList();

      expect(Array.isArray(returnedValue)).toBe(true);
    });

  });

  describe('getNavigationListSize method', function() {

    xit('should return zero when navigation Array is empty', function() {
      expect(service.getNavigationListSize()).toBe(0);
    });

    xit('should return the number of added navigations', function() {
      service.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);
      service.createNavigationTo(Mock.questionThree.templateID, Mock.questionFour.templateID);
      service.createNavigationTo(Mock.questionFour.templateID);
      expect(service.getNavigationListSize()).toBe(4);

      service.removeNavigationOf(Mock.questionFour.templateID);
      expect(service.getNavigationListSize()).toBe(3);
    });

  });

  describe('getNavigationByOrigin method', function() {

    beforeEach(function() {
      service.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);
    });

    xit('should return the navigation when exists', function() {
      var returnedNavigation = service.getNavigationByOrigin(Mock.questionOne.templateID);

      expect(returnedNavigation.origin).toEqual(Mock.questionOne.templateID);
    });

    xit('should return undefined when navigation not exists', function() {
      var returnedNavigation = service.getNavigationByOrigin('Q4');

      expect(returnedNavigation).toBeUndefined();
    });

  });

  describe('getNavigationByPosition method', function() {

    beforeEach(function() {
      service.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);
    });

    xit('should return the navigation when exists', function() {
      var returnedNavigation = service.getNavigationByPosition(0);

      expect(returnedNavigation.origin).toEqual(Mock.questionOne.templateID);
    });

    xit('should return undefined when navigation not exists', function() {
      var returnedNavigation = service.getNavigationByPosition(10);

      expect(returnedNavigation).toBeUndefined();
    });

  });

  describe('getNavigationPosition method', function() {

    beforeEach(function() {
      service.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);
      service.createNavigationTo(Mock.questionThree.templateID, Mock.questionFour.templateID);
    });

    xit('should return an integer that represents the index of navigation', function() {
      var returnedValue = service.getNavigationPosition(Mock.questionOne.templateID);
      expect(returnedValue).toBe(0);

      returnedValue = service.getNavigationPosition(Mock.questionTwo.templateID);
      expect(returnedValue).toBe(1);

      returnedValue = service.getNavigationPosition(Mock.questionThree.templateID);
      expect(returnedValue).toBe(2);
    });

    xit('should return null when navigation does not exists', function() {
      var returnedValue = service.getNavigationPosition(Mock.questionFour.templateID);
      expect(returnedValue).toBe(null);
    });

  });

  describe('existsNavigationTo method', function() {

    xit('should return true when navigation exists', function() {
      service.createNavigationTo(Mock.questionOne.templateID);

      expect(service.existsNavigationTo(Mock.questionOne.templateID)).toBe(true);
    });

    xit('should return false when navigation not exists', function() {
      service.createNavigationTo(Mock.questionOne.templateID);

      expect(service.existsNavigationTo(Mock.questionTwo.templateID)).toBe(false);
    });

  });

  describe('createNavigationTo method', function() {

    beforeEach(function() {
      spyOn(Mock.NavigationFactory, 'create').and.callThrough();

      service.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
    });

    xit('should call NavigationFactory.create', function() {
      expect(Mock.NavigationFactory.create).toHaveBeenCalledWith(Mock.questionOne.templateID, Mock.questionTwo.templateID);
    });

    xit('should add a new Navigation in the navigationList', function() {
      expect(service.getNavigationListSize()).toBeGreaterThan(0);
    });

  });

  describe('removeNavigationOf method', function() {

    beforeEach(function() {
      service.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);
    });

    xit('should remove a navigation of navigationList', function() {
      service.removeNavigationOf(Mock.questionOne.templateID);

      expect(service.getNavigationListSize()).toBe(1);
    });

    xit('should remove the correct navigation of navigationList', function() {
      service.removeNavigationOf(Mock.questionOne.templateID);

      expect(service.getNavigationListSize()).toBe(1);
      expect(service.existsNavigationTo(Mock.questionTwo.templateID)).toBe(true);
    });

  });

  describe('removeNavigationByIndex method', function() {

    beforeEach(function() {
      service.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);
    });

    xit('should remove a navigation of index', function() {
      service.removeNavigationByIndex(0);

      expect(service.getNavigationListSize()).toBe(1);
      expect(service.existsNavigationTo(Mock.questionOne.templateID)).toBe(false);
      expect(service.existsNavigationTo(Mock.questionTwo.templateID)).toBe(true);
    });

  });

  describe('removeCurrentLastNavigation method', function() {

    beforeEach(function() {
      service.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);
    });

    xit('should remove the last navigation present in navigation list', function() {
      service.removeCurrentLastNavigation();

      expect(service.getNavigationListSize()).toBe(1);
      expect(service.existsNavigationTo(Mock.questionOne.templateID)).toBe(true);
      expect(service.existsNavigationTo(Mock.questionTwo.templateID)).toBe(false);
    });

  });

  function mockQuestions($injector) {
    Mock.questionOne = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
    Mock.questionTwo = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q2');
    Mock.questionThree = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q3');
    Mock.questionFour = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q4');
  }

  function mockNavigationFactory($injector) {
    Mock.NavigationFactory = $injector.get('otusjs.model.navigation.NavigationFactory');
    return Mock.NavigationFactory;
  }

  function mockNavigationToManage($injector) {
    Mock.navigationToManage = [];

    var navigation = Mock.NavigationFactory.create(Mock.questionOne.templateID, Mock.questionTwo.templateID);
    Mock.navigationToManage.push(navigation);

    navigation = Mock.NavigationFactory.create(Mock.questionTwo.templateID, Mock.questionThree.templateID);
    Mock.navigationToManage.push(navigation);

    navigation = Mock.NavigationFactory.create(Mock.questionThree.templateID, Mock.questionFour.templateID);
    Mock.navigationToManage.push(navigation);
  }

  function mockJson() {
    Mock.json = JSON.parse(JSON.stringify([{
        "extents": "StudioObject",
        "objectType": "Navigation",
        "origin": "CAD1",
        "index": 0,
        "inNavigations": [],
        "isDefault": true,
        "routes": [{
            "extents": "StudioObject",
            "objectType": "Route",
            "name": "CAD1_CAD2",
            "origin": "CAD1",
            "destination": "CAD2",
            "isDefault": true,
            "conditions": []
        }]
    }, {
        "extents": "StudioObject",
        "objectType": "Navigation",
        "origin": "CAD2",
        "index": 1,
        "inNavigations": [{
          "origin": "CAD1",
          "isDefaultPath": true,
          "isDefaultRoute": true
        }],
        "isDefault": true,
        "routes": [{
            "extents": "StudioObject",
            "objectType": "Route",
            "name": "CAD2_CAD3",
            "origin": "CAD2",
            "destination": "CAD3",
            "isDefault": true,
            "conditions": []
        }]
    }, {
        "extents": "StudioObject",
        "objectType": "Navigation",
        "origin": "CAD3",
        "index": 2,
        "inNavigations": [{
          "origin": "CAD2",
          "isDefaultPath": true,
          "isDefaultRoute": true
        }],
        "isDefault": true,
        "routes": [{
            "extents": "StudioObject",
            "objectType": "Route",
            "name": "CAD3_CAD4",
            "origin": "CAD3",
            "destination": "CAD4",
            "isDefault": true,
            "conditions": []
        }]
    }, {
        "extents": "StudioObject",
        "objectType": "Navigation",
        "origin": "CAD4",
        "index": 3,
        "inNavigations": [{
          "origin": "CAD3",
          "isDefaultPath": true,
          "isDefaultRoute": true
        }],
        "isDefault": true,
        "routes": [{
            "extents": "StudioObject",
            "objectType": "Route",
            "name": "CAD4_CAD5",
            "origin": "CAD4",
            "destination": "CAD5",
            "isDefault": true,
            "conditions": []
        }]
    }, {
        "extents": "StudioObject",
        "objectType": "Navigation",
        "origin": "CAD5",
        "index": 4,
        "inNavigations": [{
          "origin": "CAD4",
          "isDefaultPath": true,
          "isDefaultRoute": true
        }],
        "isDefault": true,
        "routes": [{
            "extents": "StudioObject",
            "objectType": "Route",
            "name": "CAD5_CAD6",
            "origin": "CAD5",
            "destination": "CAD6",
            "isDefault": true,
            "conditions": []
        }]
    }]));
  }

});
