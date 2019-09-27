describe('otusjs.model.navigation.NavigationTrackerFactory', function () {

  var UNIT_NAME = 'otusjs.model.navigation.NavigationTrackerFactory';
  var Mock = {};
  var Inject = {};
  var trackerFactory = {};

  beforeEach(function () {
    angular.mock.module('otusjs');
    inject(_inject);
  });

  describe('create method', function () {

    describe('when a NavigationTracker is created', function () {

      it('it should be an instanceof NavigationTracker', function () {
        var tracker = trackerFactory.create(Mock.itemsToTrack);

        expect(tracker.getObjectType()).toEqual('NavigationTracker');
      });


      it('it should has exactly one NavigationTrackingItem for each item to track', function () {
        var tracker = trackerFactory.create(Mock.itemsToTrack);

        expect(tracker.getItemCount()).toBe(Mock.itemsToTrack.length + 1);
      });

      describe('and no start index is passed by paramenter', function () {

        it('the current index should be equal to null', function () {
          var tracker = trackerFactory.create(Mock.itemsToTrack);

          expect(tracker.getCurrentIndex()).toEqual(null);
        });

      });

    });

    describe('when no items to track are passed by parameter to create method', function () {

      it('the method should throw an Error (to empty array)', function () {
        var execution = function () {
          trackerFactory.create([]);
        };

        expect(execution).toThrowError('No item to track is detected.');
      });

      it('the method should throw an Error (to undefined array)', function () {
        var execution = function () {
          trackerFactory.create(undefined);
        };

        expect(execution).toThrowError('No item to track is detected.');
      });

      it('the method should throw an Error (to null array)', function () {
        var execution = function () {
          trackerFactory.create(null);
        };

        expect(execution).toThrowError('No item to track is detected.');
      });

      it('the method should throw an Error (to invalid type)', function () {
        var execution = function () {
          trackerFactory.create(new Date());
        };

        expect(execution).toThrowError('No item to track is detected.');
      });

    });

  });

  describe('the tracker, after the visit group method', function () {
    var tracker;
    let itemsToVisit = [];

    beforeEach(function () {
      tracker = trackerFactory.create(Mock.itemsToTrack);


      itemsToVisit.push(Mock.itemsToTrack[0].id);
      itemsToVisit.push(Mock.itemsToTrack[1].id);
      itemsToVisit.push(Mock.itemsToTrack[2].id);

      tracker.visitGroup(itemsToVisit);
    });

    it('should in current group every current visiting item', function () {

      expect(tracker.getCurrentItemGroup()[0].getID()).toBe(itemsToVisit[0]);
      expect(tracker.getCurrentItemGroup().length).toEqual(3);
    });

    it('should current index as the last item from group', function () {
      expect(tracker.getCurrentIndex()).toEqual(2);
    });

    it('should update the current group with the given filling setting items as answered', function () {
      let idToFill = Mock.itemsToTrack[0].id;
      let filling = {};
      filling[idToFill] = {
        isFilled: function () {}
      };

      spyOn(filling[idToFill], 'isFilled').and.returnValue(true);
      spyOn(tracker.getItems()[idToFill], 'setAsAnswered');
      spyOn(tracker.getItems()[idToFill], 'setAsIgnored');

      tracker.updateCurrentGroup(filling);
      expect(tracker.getItems()[idToFill].isSkipped()).toBe(false);
      expect(filling[idToFill].isFilled).toHaveBeenCalled();
      expect(tracker.getItems()[idToFill].setAsAnswered).toHaveBeenCalled();
      expect(tracker.getItems()[idToFill].setAsIgnored).not.toHaveBeenCalled();
    });

    it('should update the current group with the given filling setting items as ignored when not answered', function () {
      let idToFill = Mock.itemsToTrack[0].id;

      let filling = {};
      filling[idToFill] = {
        isFilled: function () {},
        isIgnored: function () {}
      };

      spyOn(filling[idToFill], 'isIgnored').and.returnValue(true);
      spyOn(tracker.getItems()[idToFill], 'setAsAnswered');
      spyOn(tracker.getItems()[idToFill], 'setAsIgnored');

      tracker.updateCurrentGroup(filling);

      expect(tracker.getItems()[idToFill].isSkipped()).toBe(false);
      expect(filling[idToFill].isIgnored).toHaveBeenCalled();
      expect(tracker.getItems()[idToFill].setAsAnswered).not.toHaveBeenCalled();
      expect(tracker.getItems()[idToFill].setAsIgnored).toHaveBeenCalled();
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
      id: 'TPL1'
    };
    Mock.tpl2 = {
      id: 'TPL2'
    };
    Mock.tpl3 = {
      id: 'TPL3'
    };
    Mock.tpl4 = {
      id: 'TPL4'
    };
    Mock.tpl5 = {
      id: 'TPL5'
    };
    Mock.tpl6 = {
      id: 'TPL6'
    };

    Mock.itemsToTrack = [Mock.tpl1, Mock.tpl2, Mock.tpl3, Mock.tpl4, Mock.tpl5, Mock.tpl6];
  }

  function mockNavigationTrackingItemFactory($injector) {
    Mock.NavigationTrackingItemFactory = $injector.get('otusjs.model.navigation.NavigationTrackingItemFactory');
    Inject.NavigationTrackingItemFactory = Mock.NavigationTrackingItemFactory;
  }
});
