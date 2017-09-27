xdescribe('NavigationTracker', function() {
  var UNIT_NAME_FACTORY =
    'otusjs.model.navigation.NavigationTrackerFactory';
  var Mock = {};
  var Inject = {};
  var tracker = {};

  beforeEach(function() {
    angular.mock.module('otusjs');
    inject(_setupTest);
  });

  describe('getObjectType method', function() {

    it('should return a string equal to NavigationTracker', function() {
      expect(tracker.getObjectType()).toEqual('NavigationTracker');
    });

  });

  describe('getItems method', function() {

    it(
      'should return an object with all navigation tracking items as your properties ─ objectType',
      function() {
        var itemsContainer = tracker.getItems();
        var item = null;

        for (item in itemsContainer) {
          expect(itemsContainer[item].getObjectType()).toEqual(
            'NavigationTrackingItem');
        }
      });

    it(
      'should return an object with all navigation tracking items as your properties ─ count',
      function() {
        expect(Object.keys(tracker.getItems()).length).toEqual(6);
      });

    it(
      'should return an object with all navigation tracking items as your properties ─ IDs and order',
      function() {
        var itemsContainer = tracker.getItems();
        var item = null;
        var position = 0;

        for (item in itemsContainer) {
          expect(itemsContainer[item].getID()).toEqual(Mock.itemsToTrack[
            position].templateID);
          ++position;
        }
      });

  });

  describe('getCurrentItem method', function() {

    it('should return an item that corresponds to current visited item',
      function() {
        tracker.visitItem('TPL1');
        expect(tracker.getCurrentItem().getID()).toEqual('TPL1');

        tracker.visitItem('TPL3');
        expect(tracker.getCurrentItem().getID()).toEqual('TPL3');

        tracker.visitItem('TPL2');
        expect(tracker.getCurrentItem().getID()).toEqual('TPL2');
      });

    it('should return a NavigationTrackingItem', function() {
      tracker.visitItem('TPL1');
      expect(tracker.getCurrentItem().getObjectType()).toEqual(
        'NavigationTrackingItem');
    });

  });

  describe('getCurrentIndex method', function() {

    it('should return the index that corresponds to current item',
      function() {
        tracker.visitItem('TPL1');
        expect(tracker.getCurrentIndex()).toBe(0);

        tracker.visitItem('TPL2');
        expect(tracker.getCurrentIndex()).toBe(1);

        tracker.visitItem('TPL3');
        expect(tracker.getCurrentIndex()).toBe(2);

        tracker.visitItem('TPL1');
        expect(tracker.getCurrentIndex()).toBe(0);
      });

  });

  describe('getItemCount method', function() {

    it('should return total of items on tracking', function() {
      expect(tracker.getItemCount()).toBe(Mock.itemsToTrack.length);
    });

  });

  describe('visitItem method', function() {

    describe('when the item id is passed as parameter', function() {

      beforeEach(function() {
        tracker.visitItem('TPL1');
        tracker.visitItem('TPL4');
      });

      it('the current item id should be equal to the paramenter',
        function() {
          expect(tracker.getCurrentItem().getID()).toEqual('TPL4');
        });

      it(
        'the items between the current item and the item to visit should have the state equal to SKIPPED',
        function() {
          expect(tracker.getItems().TPL1.isSkipped()).not.toEqual(
            'VISITED');
          expect(tracker.getItems().TPL2.isSkipped()).not.toEqual(
            'SKIPPED');
          expect(tracker.getItems().TPL3.isSkipped()).not.toEqual(
            'SKIPPED');
          expect(tracker.getItems().TPL4.isSkipped()).not.toEqual(
            'VISITED');
        });

      describe('and the item never was previously visited',
        function() {

          it('the current item state should be equal to VISITED',
            function() {
              expect(tracker.getCurrentItem().getState()).toEqual(
                'VISITED');
            });

        });

      describe('and the item already was previously answered',
        function() {

          beforeEach(function() {
            tracker.updateCurrentItem(Mock.answeredItem);
            tracker.visitItem('TPL1');
            tracker.visitItem('TPL4');
          });

          it('the current item state should be equal to ANSWERED',
            function() {
              expect(tracker.getCurrentItem().getState()).toEqual(
                'ANSWERED');
            });

        });

      describe('and the item already was previously ignored',
        function() {

          beforeEach(function() {
            tracker.updateCurrentItem(Mock.ignoredItem);
            tracker.visitItem('TPL1');
            tracker.visitItem('TPL4');
          });

          it('the current item state should be equal to VISITED',
            function() {
              expect(tracker.getCurrentItem().getState()).toEqual(
                'VISITED');
            });

        });

      describe('and the item already was previously skipped',
        function() {

          beforeEach(function() {
            tracker.visitItem('TPL2');
          });

          it('the current item state should be equal to VISITED',
            function() {
              expect(tracker.getCurrentItem().getState()).toEqual(
                'VISITED');
            });

        });

    });

  });

  describe('updateCurrentItem method', function() {

    describe('when exists a current item', function() {

      beforeEach(function() {
        tracker.visitItem('TPL1');
      });

      describe('and exists an answer to the current item', function() {

        it('the current item state should be equal to ANSWERED',
          function() {
            tracker.updateCurrentItem(Mock.answeredItem);
            expect(tracker.getCurrentItem().isAnswered()).toBe(
              true);
          });

      });

      describe('and the item is ignored', function() {

        it('the current item state should be equal to IGNORED',
          function() {
            tracker.updateCurrentItem(Mock.ignoredItem);
            expect(tracker.getCurrentItem().isIgnored()).toBe(
              true);
          });

      });

    });

  });

  xdescribe('toJson method', function() {

    it(
      'should return the instance parsed to JSON format ─ untouched json',
      function() {
        expect(Mock.untouchedJson).toEqual(tracker.toJson());
      });

    it(
      'should return the instance parsed to JSON format ─ visited json',
      function() {
        tracker.visitItem('TPL1');
        tracker.visitItem('TPL4');
        expect(Mock.visitedJson).toEqual(tracker.toJson());

      });

  });

  function _setupTest(_$injector_) {
    /* Test data */
    mockItemsToTrack();
    mockItemFilling();
    mockUntouchedJson();
    mockNavigatedJson();

    /* Injactable mocks */
    mockNavigationTrackingItemFactory(_$injector_);

    tracker = _$injector_.get(UNIT_NAME_FACTORY, Inject).create(Mock.itemsToTrack);
  }

  function mockItemsToTrack() {
    Mock.itemsToTrack = [];

    Mock.tpl1 = {
      templateID: 'TPL1'
    };
    Mock.tpl2 = {
      templateID: 'TPL2'
    };
    Mock.tpl3 = {
      templateID: 'TPL3'
    };
    Mock.tpl4 = {
      templateID: 'TPL4'
    };
    Mock.tpl5 = {
      templateID: 'TPL5'
    };
    Mock.tpl6 = {
      templateID: 'TPL6'
    };

    Mock.itemsToTrack = [Mock.tpl1, Mock.tpl2, Mock.tpl3, Mock.tpl4, Mock.tpl5,
      Mock.tpl6
    ];
  }

  function mockItemFilling() {
    Mock.answeredItem = {};
    Mock.answeredItem.isIgnored = jasmine.createSpy().and.returnValue(false);
    Mock.answeredItem.isFilled = jasmine.createSpy().and.returnValue(true);

    Mock.ignoredItem = {};
    Mock.ignoredItem.isIgnored = jasmine.createSpy().and.returnValue(true);
    Mock.ignoredItem.isFilled = jasmine.createSpy().and.returnValue(false);
  }

  function mockNavigationTrackingItemFactory($injector) {
    Mock.NavigationTrackingItemFactory = $injector.get(
      'otusjs.model.navigation.NavigationTrackingItemFactory');
    Inject.NavigationTrackingItemFactory = Mock.NavigationTrackingItemFactory;
  }

  function mockUntouchedJson() {
    Mock.untouchedJson = {};
    Mock.untouchedJson.objectType = 'NavigationTracker';
    Mock.untouchedJson.currentIndex = 0;
    Mock.untouchedJson.items = [{
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
