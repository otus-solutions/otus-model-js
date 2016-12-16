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

    it('should clear the array of navigations', function() {
      service.setInitialNodes();
      service.createNavigationTo(Mock.questionOne.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionThree.templateID);
      service.createNavigationTo(Mock.questionFour.templateID);

      expect(service.getNavigationListSize()).toBe(6);
      service.init();
      expect(service.getNavigationListSize()).toBe(0);
    });

  });

  describe('loadJsonData method', function() {

    it('should build an navigation map', function() {
      service.loadJsonData(Mock.json);
      expect(service.getNavigationList().length).toEqual(Mock.json.length);
    });

    it('should initialize begin/end nodes', function() {
      service.loadJsonData(Mock.json);
      expect(service.getNavigationList()[0].origin).toEqual('BEGIN NODE');
      expect(service.getNavigationList()[1].origin).toEqual('END NODE');
    });

    it('should set null navigations', function() {
      service.loadJsonData(Mock.json);
      expect(service.getNavigationList()[3].inNavigations[1].origin).toBe('NULL NAVIGATION');
    });

  });

  describe('manage method', function() {

    it('should initialize the array of navigations', function() {
      service.init();
      expect(service.getNavigationListSize()).toBe(0);

      service.manageNavigation(Mock.navigationToManage);
      expect(service.getNavigationListSize()).toBe(3);
    });

  });

  describe('getNavigationList method', function() {

    it('should return an array', function() {
      var returnedValue = service.getNavigationList();

      expect(Array.isArray(returnedValue)).toBe(true);
    });

  });

  describe('getNavigationListSize method', function() {

    it('should return zero when navigation Array is empty', function() {
      service.init();
      expect(service.getNavigationListSize()).toBe(0);
    });

    it('should return the number of added navigations', function() {
      service.setInitialNodes();
      service.createNavigationTo(Mock.questionOne.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionThree.templateID);
      service.createNavigationTo(Mock.questionFour.templateID);
      expect(service.getNavigationListSize()).toBe(6);

      service.removeNavigationOf(Mock.questionFour.templateID);
      expect(service.getNavigationListSize()).toBe(5);
    });

  });

  describe('getNavigationByOrigin method', function() {

    beforeEach(function() {
      service.setInitialNodes();
      service.createNavigationTo(Mock.questionOne.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID);
    });

    it('should return the navigation when exists', function() {
      var returnedNavigation = service.getNavigationByOrigin(Mock.questionOne.templateID);

      expect(returnedNavigation.origin).toEqual(Mock.questionOne.templateID);
    });

    it('should return undefined when navigation not exists', function() {
      var returnedNavigation = service.getNavigationByOrigin('Q4');

      expect(returnedNavigation).toBeUndefined();
    });

  });

  describe('getNavigationByPosition method', function() {

    beforeEach(function() {
      service.setInitialNodes();
      service.createNavigationTo(Mock.questionOne.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID);
    });

    it('should return the navigation when exists', function() {
      var returnedNavigation = service.getNavigationByPosition(0);
      expect(returnedNavigation.origin).toEqual('BEGIN NODE');

      returnedNavigation = service.getNavigationByPosition(2);
      expect(returnedNavigation.origin).toEqual(Mock.questionOne.templateID);
    });

    it('should return undefined when navigation not exists', function() {
      var returnedNavigation = service.getNavigationByPosition(10);

      expect(returnedNavigation).toBeUndefined();
    });

  });

  describe('getNavigationPositionByOrigin method', function() {

    beforeEach(function() {
      service.setInitialNodes();
      service.createNavigationTo(Mock.questionOne.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID);
      service.createNavigationTo(Mock.questionThree.templateID);
    });

    it('should return an integer that represents the index of navigation', function() {
      var returnedValue = service.getNavigationPositionByOrigin(Mock.questionOne.templateID);
      expect(returnedValue).toBe(2);


      returnedValue = service.getNavigationPositionByOrigin(Mock.questionTwo.templateID);
      expect(returnedValue).toBe(3);

      returnedValue = service.getNavigationPositionByOrigin(Mock.questionThree.templateID);
      expect(returnedValue).toBe(4);
    });

    it('should return null when navigation does not exists', function() {
      returnedValue = service.getNavigationPositionByOrigin(Mock.questionFour.templateID);
      expect(returnedValue).toBe(null);
    });

  });

  describe('existsNavigationTo method', function() {

    it('should return true when navigation exists', function() {
      service.createNavigationTo(Mock.questionOne.templateID);

      expect(service.existsNavigationTo(Mock.questionOne.templateID)).toBe(true);
    });

    it('should return false when navigation not exists', function() {
      service.createNavigationTo(Mock.questionOne.templateID);

      expect(service.existsNavigationTo(Mock.questionTwo.templateID)).toBe(false);
    });

  });

  describe('createNavigationTo method', function() {

    beforeEach(function() {
      Mock.navigation = Mock.NavigationFactory.create(Mock.questionOne.templateID);

      spyOn(Mock.NavigationFactory, 'create').and.returnValue(Mock.navigation);
      spyOn(Mock.navigation, 'addInNavigation').and.callThrough();

      service.createNavigationTo(Mock.questionOne.templateID);
    });

    it('should call NavigationFactory.create', function() {
      expect(Mock.NavigationFactory.create).toHaveBeenCalledWith(Mock.questionOne.templateID);
    });

    it('should add a new Navigation in the navigationList', function() {
      expect(service.getNavigationListSize()).toBeGreaterThan(0);
    });

  });

  describe('removeNavigationOf method', function() {

    beforeEach(function() {
      service.setInitialNodes();
      service.createNavigationTo(Mock.questionOne.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID);
    });

    it('should remove a navigation of navigationList', function() {
      service.removeNavigationOf(Mock.questionOne.templateID);

      expect(service.getNavigationListSize()).toBe(3);
    });

    it('should remove the correct navigation of navigationList', function() {
      service.removeNavigationOf(Mock.questionOne.templateID);

      expect(service.getNavigationListSize()).toBe(3);
      expect(service.existsNavigationTo(Mock.questionTwo.templateID)).toBe(true);
    });

  });

  describe('removeNavigationByIndex method', function() {

    beforeEach(function() {
      service.createNavigationTo(Mock.questionOne.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID);
    });

    it('should remove a navigation of index', function() {
      service.removeNavigationByIndex(0);

      expect(service.getNavigationListSize()).toBe(1);
      expect(service.existsNavigationTo(Mock.questionOne.templateID)).toBe(false);
      expect(service.existsNavigationTo(Mock.questionTwo.templateID)).toBe(true);
    });

  });

  describe('removeCurrentLastNavigation method', function() {

    beforeEach(function() {
      service.createNavigationTo(Mock.questionOne.templateID);
      service.createNavigationTo(Mock.questionTwo.templateID);
    });

    it('should remove the last navigation present in navigation list', function() {
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

    var navigation = Mock.NavigationFactory.create(Mock.questionOne.templateID);
    Mock.navigationToManage.push(navigation);

    navigation = Mock.NavigationFactory.create(Mock.questionTwo.templateID);
    Mock.navigationToManage.push(navigation);

    navigation = Mock.NavigationFactory.create(Mock.questionThree.templateID);
    Mock.navigationToManage.push(navigation);
  }

  function mockJson() {
    Mock.json = JSON.parse(JSON.stringify([{
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "BEGIN NODE",
      "index": 0,
      "inNavigations": [],
      "routes": [{
        "extents": "SurveyTemplateObject",
        "objectType": "Route",
        "origin": "BEGIN NODE",
        "destination": "CAD1",
        "name": "BEGIN NODE_CAD1",
        "isDefault": true,
        "conditions": []
      }]
    }, {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "END NODE",
      "index": 1,
      "inNavigations": [{
        "origin": "CAD5"
      }],
      "routes": []
    }, {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "CAD1",
      "index": 2,
      "inNavigations": [{
        "origin": "BEGIN NODE"
      }],
      "routes": [{
        "extents": "SurveyTemplateObject",
        "objectType": "Route",
        "origin": "CAD1",
        "destination": "CAD2",
        "name": "CAD1_CAD2",
        "isDefault": true,
        "conditions": []
      }]
    }, {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "CAD2",
      "index": 3,
      "inNavigations": [{
        "origin": "CAD1"
      }, {
        "origin": "FAKE_NAV"
      }],
      "routes": [{
        "extents": "SurveyTemplateObject",
        "objectType": "Route",
        "origin": "CAD2",
        "destination": "CAD3",
        "name": "CAD2_CAD3",
        "isDefault": true,
        "conditions": []
      }]
    }, {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "CAD3",
      "index": 4,
      "inNavigations": [{
        "origin": "CAD2"
      }],
      "routes": [{
        "extents": "SurveyTemplateObject",
        "objectType": "Route",
        "origin": "CAD3",
        "destination": "CAD4",
        "name": "CAD3_CAD4",
        "isDefault": true,
        "conditions": []
      }]
    }, {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "CAD4",
      "index": 5,
      "inNavigations": [{
        "origin": "CAD3"
      }],
      "routes": [{
        "extents": "SurveyTemplateObject",
        "objectType": "Route",
        "origin": "CAD4",
        "destination": "CAD5",
        "name": "CAD4_CAD5",
        "isDefault": true,
        "conditions": []
      }]
    }, {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "CAD5",
      "index": 6,
      "inNavigations": [{
        "origin": "CAD4"
      }],
      "routes": [{
        "extents": "SurveyTemplateObject",
        "objectType": "Route",
        "origin": "CAD5",
        "destination": "END NODE",
        "name": "CAD5_END NODE",
        "isDefault": true,
        "conditions": []
      }]
    }]));
  }

});
