describe('CheckboxAnswerOptionFactory', function() {
  var Mock = {};
  var option;
  var factory;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('CheckboxAnswerOptionFactory');
    });

    Mock.TEMPLATE_ID = 'TPL-IDa';
    Mock.CUSTOM_ID = 'myCustomizedID';
  });

  describe('create method', function() {

    beforeEach(function() {
      option = factory.create(Mock.TEMPLATE_ID);
    });

    it('returned object should extends StudioObject', function() {
      expect(option.extents).toBe('StudioObject');
    });

    it('returned object should have objectType equal to CheckboxAnswerOptionFactory', function() {
      expect(option.objectType).toBe('CheckboxAnswerOption');
    });

    it('returned object should have optionID equal passed param', function() {
      expect(option.optionID).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have customID equal passed param', function() {
      expect(option.customOptionID).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have dataType equal to Boolean', function() {
      expect(option.dataType).toBe('Boolean');
    });

    it('returned object should have a label object for ptBR locale', function() {
      expect(option.label.ptBR).not.toBeNull();
      expect(option.label.ptBR).not.toBeUndefined();
    });

    it('returned object should have a label object for enUS locale', function() {
      expect(option.label.enUS).not.toBeNull();
      expect(option.label.enUS).not.toBeUndefined();
    });

    it('returned object should have a label object for enUS locale', function() {
      expect(option.label.esES).not.toBeNull();
      expect(option.label.esES).not.toBeUndefined();
    });

  });

  describe('createWithData method', function() {

    beforeEach(function() {
      option = factory.create(Mock.TEMPLATE_ID);
      option.setCustomOptionID(Mock.CUSTOM_ID);
      optionJson = option.toJson();
      optionCreatedWithJSON = factory.createWithData(optionJson);

    });

    it('returned object should extends StudioObject', function() {
      expect(optionCreatedWithJSON.extents).toBe('StudioObject');
    });

    it('returned object should have objectType equal to CheckboxAnswerOptionFactory', function() {
      expect(optionCreatedWithJSON.objectType).toBe('CheckboxAnswerOption');
    });

    it('returned object should have optionID equal passed param', function() {
      expect(optionCreatedWithJSON.optionID).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have customID equal passed param', function() {
      expect(optionCreatedWithJSON.customOptionID).toBe(Mock.CUSTOM_ID);
    });

    it('returned object should have dataType equal to Boolean', function() {
      expect(optionCreatedWithJSON.dataType).toBe('Boolean');
    });

    it('returned object should have a label object for ptBR locale', function() {
      expect(optionCreatedWithJSON.label.ptBR).not.toBeNull();
      expect(optionCreatedWithJSON.label.ptBR).not.toBeUndefined();
    });

    it('returned object should have a label object for enUS locale', function() {
      expect(optionCreatedWithJSON.label.enUS).not.toBeNull();
      expect(optionCreatedWithJSON.label.enUS).not.toBeUndefined();
    });

    it('returned object should have a label object for enUS locale', function() {
      expect(optionCreatedWithJSON.label.esES).not.toBeNull();
      expect(optionCreatedWithJSON.label.esES).not.toBeUndefined();
    });

  });

});
