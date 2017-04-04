describe('the immutable date factory', function() {
  var Mock = {};
  var ImmutableDate;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      ImmutableDate = _$injector_.get('otusjs.utils.ImmutableDate');
    });
  });

  describe('the constructor', function() {
    it('should return an immutable date object', function() {
      var immutableDate = new ImmutableDate();
      expect(immutableDate.objectType).toEqual('ImmutableDate');
    });

    it('should return a new immutable date object each time', function() {
      var immutableDate = new ImmutableDate();
      var anotherDate = new ImmutableDate();
      immutableDate.setHours(5);
      expect(anotherDate.date.getHours()).not.toEqual(immutableDate.date.getHours());
    });

    it('should build from target string and return same value for same format', function() {
      var target = '2017-02-06 19:31:22.000'; //ImmutableDate.toString() result type
      var immutableDate = new ImmutableDate(target);
      expect(immutableDate.toString()).toEqual(target);
    });

    it('should build a null ImmutableDate for null param', function() {
      var nullImmutableDate = new ImmutableDate(null);
      expect(nullImmutableDate.date).not.toBeDefined();
    });


  });

  describe('toString method', function() {
    it('should return a string', function() {
      var toStr = new ImmutableDate().toString();
      expect(angular.isString(toStr)).toBe(true);
    });

    it('should return a js readable format', function() {
      var toStr = new ImmutableDate().toString();
      expect(angular.isDate(new Date(toStr))).toBe(true);
    });

    it('should pad leading zeroes when necessary', function() {
      var toStr = new ImmutableDate();
      toStr.setHours(5);
      toStr.setMinutes(13);
      toStr.setMilliseconds(1);
      var str = toStr.toString();
      var timeSplited = str.split(' ')[1].split(':');
      var hours = timeSplited[0];
      var minutes = timeSplited[1];
      var milliseconds = timeSplited[2].split('.')[1];

      expect(hours.length).toBe(2);
      expect(minutes.length).toBe(2);
      expect(milliseconds.length).toBe(3);
      expect(milliseconds).toEqual('001');
    });

  });

  describe('toJSON method', function() {
    beforeEach(function() {
      var immutableDate = new ImmutableDate();
    });

    it('should contain an ImmutableDate objectType', function() {
      var immutableDate = new ImmutableDate();
      expect(immutableDate.toJSON().objectType).toEqual('ImmutableDate');
    });

    it('should produces the same result for value as toString() method', function() {
      var immutableDate = new ImmutableDate();
      expect(immutableDate.toJSON().value).toEqual(immutableDate.toString());
    });

    it('should call the toString method when stringfied', function() {
      var immutableDate = new ImmutableDate();
      spyOn(immutableDate, 'toString').and.callThrough();

      JSON.stringify(immutableDate).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
      expect(immutableDate.toString).toHaveBeenCalled();

    });

  });

});
