xdescribe('otusjs.model.navigation.NavigationTrackerFactory', function() {

  var UNIT_NAME = 'otusjs.model.navigation.NavigationTrackerFactory';
  var Mock = {};
  var Inject = {};
  var trackerFactory = {};

  beforeEach(function() {
    module('otusjs');
    inject(_inject);
  });

  describe('create method', function() {

    describe('when a NavigationTracker is created', function() {

      it('it should be an instanceof NavigationTracker', function() {
        var tracker = trackerFactory.create(Mock.itemsToTrack);

        expect(tracker.getObjectType()).toEqual('NavigationTracker');
      });

      it('it should has, for each item to track, an instance of NavigationTrackingItem', function() {
        var tracker = trackerFactory.create(Mock.itemsToTrack);

        Mock.itemsToTrack.forEach(function(itemToTrack) {
          tracker.visitItem(itemToTrack.templateID);
          expect(tracker.getCurrentItem().getID()).toBe(itemToTrack.templateID);
        });
      });

      it('it should has exactly one NavigationTrackingItem for each item to track', function() {
        var tracker = trackerFactory.create(Mock.itemsToTrack);

        expect(tracker.getItemCount()).toBe(Mock.itemsToTrack.length);
      });

      describe('and a start index is passed by paramenter', function() {

        describe('and the index is greater than zero and less than total of items to track', function() {

          it('the current index from instance should has the same value', function() {
            var tracker = trackerFactory.create(Mock.itemsToTrack, 3);

            expect(tracker.getCurrentIndex()).toEqual(3);
          });

        });

        describe('and the index is less than zero', function() {

          it('the current index from instance should be equal to null', function() {
            var tracker = trackerFactory.create(Mock.itemsToTrack, -1);

            expect(tracker.getCurrentIndex()).toBeDefined();
            expect(tracker.getCurrentIndex()).toEqual(null);
          });

        });

        describe('and the index is greater than total of items to track', function() {

          it('the current index from instance should be equal to null', function() {
            var tracker = trackerFactory.create(Mock.itemsToTrack, 70);

            expect(tracker.getCurrentIndex()).toBeDefined();
            expect(tracker.getCurrentIndex()).toEqual(null);
          });

        });

        describe('and the index is not a number', function() {

          it('the current index from instance should be equal to null ─ invalid type', function() {
            var tracker = trackerFactory.create(Mock.itemsToTrack, 'any value');

            expect(tracker.getCurrentIndex()).toBeDefined();
            expect(tracker.getCurrentIndex()).toEqual(null);
          });

          it('the current index from instance should be equal to null ─ undefined', function() {
            var tracker = trackerFactory.create(Mock.itemsToTrack, undefined);

            expect(tracker.getCurrentIndex()).toBeDefined();
            expect(tracker.getCurrentIndex()).toEqual(null);
          });

          it('the current index from instance should be equal to null ─ null', function() {
            var tracker = trackerFactory.create(Mock.itemsToTrack, null);

            expect(tracker.getCurrentIndex()).toBeDefined();
            expect(tracker.getCurrentIndex()).toEqual(null);
          });

        });

      });

      describe('and no start index is passed by paramenter', function() {

        it('the current index should be equal to null', function() {
          var tracker = trackerFactory.create(Mock.itemsToTrack);

          expect(tracker.getCurrentIndex()).toEqual(null);
        });

      });

    });

    describe('when no items to track are passed by parameter to create method', function() {

      it('the method should throw an Error (to empty array)', function() {
        var execution = function() {
          trackerFactory.create([]);
        };

        expect(execution).toThrowError('No item to track is detected.');
      });

      it('the method should throw an Error (to undefined array)', function() {
        var execution = function() {
          trackerFactory.create(undefined);
        };

        expect(execution).toThrowError('No item to track is detected.');
      });

      it('the method should throw an Error (to null array)', function() {
        var execution = function() {
          trackerFactory.create(null);
        };

        expect(execution).toThrowError('No item to track is detected.');
      });

      it('the method should throw an Error (to invalid type)', function() {
        var execution = function() {
          trackerFactory.create(new Date());
        };

        expect(execution).toThrowError('No item to track is detected.');
      });

    });

  });

  function _inject(_$injector_) {
    /* Test data */
    mockItemsToTrack();

    /* Injactable mocks */
    mockNavigationTrackingItemFactory(_$injector_);

    trackerFactory = _$injector_.get(UNIT_NAME, Inject);
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

    Mock.itemsToTrack = [Mock.tpl1, Mock.tpl2, Mock.tpl3, Mock.tpl4, Mock.tpl5, Mock.tpl6];
  }

  function mockNavigationTrackingItemFactory($injector) {
    Mock.NavigationTrackingItemFactory = $injector.get('otusjs.model.navigation.NavigationTrackingItemFactory');
    Inject.NavigationTrackingItemFactory = Mock.NavigationTrackingItemFactory;
  }
});
