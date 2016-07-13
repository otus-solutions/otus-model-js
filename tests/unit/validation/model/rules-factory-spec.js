describe('RulesFactory', function() {
    var Mock = {};
    var factory;
    beforeEach(function() {
        module('otusjs.validation');

        inject(function(_$injector_) {
          factory = _$injector_.get('RulesFactory');
        });
        mockRule();
    });


    describe('create method', function() {

        it('should create a new rule given specific type', function() {
            expect(JSON.stringify(factory.create('upperCase'))).toBe(Mock.rule);
        });
    });
    function mockRule(){
      Mock.rule = JSON.stringify({
        extends: 'StudioObject',
        objectType: 'Rule',
        type: 'upperCase'
      });
    };

});
