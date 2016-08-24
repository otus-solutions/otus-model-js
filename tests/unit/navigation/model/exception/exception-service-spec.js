describe('ExceptionService', function() {
  var Mock = {};

  Mock.ORIGIN = 'Rota que refere-se a si mesma diretamente';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      service = _$injector_.get('otusjs.model.navigation.ExceptionService');
    });
  });

  describe('InvalidStateError method', function() {

    var exception;

    beforeEach(function() {
      exception = new service.InvalidStateError('Rota que refere-se a si mesma diretamente');
    });

    it('return should to be an instance of InvalidStateError', function() {
      expect(exception instanceof service.InvalidStateError).toBeTruthy();
    });

    it('should be an instance of Error exception Javascript', function() {
      expect(exception instanceof Error).toBeTruthy();
    });

    it('should return name of exception with InvalidStateError', function() {
      expect(exception.name).toEqual('InvalidRouteException');
    });

    it('should return the same message passed as parameter', function() {
      expect(exception.message).toEqual(Mock.ORIGIN);
    });

  });

});
