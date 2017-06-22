xdescribe('NavigationTrackingItem', function() {
  var UNIT_NAME_FACTORY = 'otusjs.model.navigation.NavigationTrackingItemFactory';
  var Mock = {};
  var Inject = {};
  var trackingItem = {};

  beforeEach(function() {
    module('otusjs');
    inject(_setupTest);
  });

  describe('getObjectType method', function() {

    it('should return a string equal to NavigationTracker', function() {
      expect(trackingItem.getObjectType()).toEqual('NavigationTracker');
    });

  });

  function _setupTest(_$injector_) {
    /* Test data */

    /* Injactable mocks */
    mockNavigationTrackingItemFactory(_$injector_);
    trackingItem = _$injector_.get(UNIT_NAME_FACTORY, Inject).create(Mock.itemsToTrack);
  }

  function mockItemOptions() {
    Mock.itemOptionsA = {};
    Mock.itemOptionsA.id = 'NTI1';
    Mock.itemOptionsA.index = 0;
    Mock.itemOptionsA.state = 'NOT_VISITED';
    Mock.itemOptionsA.previous = null;
    Mock.itemOptionsA.inputs = [];
    Mock.itemOptionsA.outputs = ['NTI2', 'NTI3', 'NTI4'];

    Mock.itemOptionsB = {};
    Mock.itemOptionsB.id = 'NTI2';
    Mock.itemOptionsB.index = 1;
    Mock.itemOptionsB.state = 'NOT_VISITED';
    Mock.itemOptionsB.previous = null;
    Mock.itemOptionsB.inputs = ['NTI1'];
    Mock.itemOptionsB.outputs = ['NTI6'];

    Mock.itemOptionsC = {};
    Mock.itemOptionsC.id = 'NTI3';
    Mock.itemOptionsC.index = 2;
    Mock.itemOptionsC.state = 'NOT_VISITED';
    Mock.itemOptionsC.previous = null;
    Mock.itemOptionsC.inputs = ['NTI1'];
    Mock.itemOptionsC.outputs = ['NTI7'];

    Mock.itemOptionsD = {};
    Mock.itemOptionsD.id = 'NTI4';
    Mock.itemOptionsD.index = 3;
    Mock.itemOptionsD.state = 'NOT_VISITED';
    Mock.itemOptionsD.previous = null;
    Mock.itemOptionsD.inputs = ['NTI1', 'NTI3'];
    Mock.itemOptionsD.outputs = ['NTI5'];

    Mock.itemOptionsE = {};
    Mock.itemOptionsE.id = 'NTI5';
    Mock.itemOptionsE.index = 4;
    Mock.itemOptionsE.state = 'NOT_VISITED';
    Mock.itemOptionsE.previous = null;
    Mock.itemOptionsE.inputs = ['NTI3','NTI4'];
    Mock.itemOptionsE.outputs = ['NTI7'];

    Mock.itemOptionsF = {};
    Mock.itemOptionsF.id = 'NTI6';
    Mock.itemOptionsF.index = 5;
    Mock.itemOptionsF.state = 'NOT_VISITED';
    Mock.itemOptionsF.previous = null;
    Mock.itemOptionsF.inputs = ['NTI3'];
    Mock.itemOptionsF.outputs = ['NTI7'];

    Mock.itemOptionsG = {};
    Mock.itemOptionsG.id = 'NTI7';
    Mock.itemOptionsG.index = 6;
    Mock.itemOptionsG.state = 'NOT_VISITED';
    Mock.itemOptionsG.previous = null;
    Mock.itemOptionsG.inputs = ['NTI2', 'NTI5', 'NTI6'];
    Mock.itemOptionsG.outputs = [];
  }

  function mockNavigatedJson() {
    Mock.visitedJson = {};
    Mock.visitedJson.objectType = 'NavigationTracker';
    Mock.visitedJson.currentIndex = 0;
    Mock.visitedJson.items = [{
      objectType: 'NavigationTrackingItem',
      id: 'TPL1',
      state: 'NOT_VISITED'
    }, {
      objectType: 'NavigationTrackingItem',
      id: 'TPL2',
      state: 'NOT_VISITED'
    }, {
      objectType: 'NavigationTrackingItem',
      id: 'TPL3',
      state: 'NOT_VISITED'
    }, {
      objectType: 'NavigationTrackingItem',
      id: 'TPL4',
      state: 'NOT_VISITED'
    }, {
      objectType: 'NavigationTrackingItem',
      id: 'TPL5',
      state: 'NOT_VISITED'
    }, {
      objectType: 'NavigationTrackingItem',
      id: 'TPL6',
      state: 'NOT_VISITED'
    }];
  }
});
