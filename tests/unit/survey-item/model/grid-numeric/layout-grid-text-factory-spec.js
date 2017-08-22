describe('LayoutGridNumericFactory', function() {
  var layout;

  var Mock = {};

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.model.question.LayoutGridNumericFactory');
    });

    layout = factory.create(Mock.WIDTH_1);
  });

  describe('create method', function(){
    it('expected valid instance of layoutNumeric', function(){
      expect(layout).toBeDefined();
    });

    it('should return the same width past', function(){
      expect(layout.getWidth()).toEqual(Mock.WIDTH_1);
    });

  });

  describe('setWidth method', function(){
    beforeEach(function () {
      layout.setWidth(Mock.WIDTH_2);
    });

    it('should width same informed', function(){
      expect(layout.getWidth()).toEqual(Mock.WIDTH_2);
    });
  });

  describe('toJson method', function(){
    beforeEach(function () {
      layout.setWidth(Mock.WIDTH_1);
    });

    it('should return a json valid', function(){
      var json = JSON.parse(layout.toJson());
      expect(json.width).toEqual(Mock.WIDTH_1);
    });
  });

  function mockJsonObject(){
    Mock.WIDTH_1 = '100px';
    Mock.WIDTH_2 = '50px';
  }
});
