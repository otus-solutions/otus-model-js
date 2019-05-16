describe(' HistoryRoleFactory_UnitTest_Suite', function () {
  var factory;
  var Mock = {};

  beforeEach(function () {
    angular.mock.module('otusjs.laboratory');

    angular.mock.inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.laboratory.participant.aliquot.AliquotHistoryFactory');
    });

    mockHistoryData();
  });

  it('factoryExistence_check', function () {
    expect(factory).toBeDefined();
  });

  it('factoryMethodsExistence_check', function () {
    expect(factory.create).toBeDefined();
    expect(factory.fromArray).toBeDefined();
  });

  it('create_method_should_return_object', function () {
    var historyInfo = factory.create(Mock.testOperator,Mock.testDescription);
    expect(JSON.stringify(historyInfo)).toEqual(JSON.stringify(Mock.historyDataEmpty));
  });

  it('fromArray_method_should_return_the_array_of_objects', function () {
    var historyInfo = factory.fromArray([Mock.historyDataFull,Mock.historyDataFull]);
    expect(JSON.stringify(historyInfo)).toEqual(JSON.stringify([Mock.historyDataFull,Mock.historyDataFull]));
  });

  it('fromArray_method_should_not_return_the_array_of_objects', function () {
    var historyInfo = factory.fromArray(Mock.test);
    expect(JSON.stringify(historyInfo)).toEqual(JSON.stringify([]));
  });

  function mockHistoryData(){
    Mock.testOperator = "";
    Mock.testDescription = "";

    Mock.historyDataEmpty = {
      objectType : "AliquotHistory",
      type : "CONVERTED_STORAGE",
      userEmail : "",
      description : "",
      date : new Date().toISOString()
    };

    Mock.historyDataFull = {
      objectType : 'AliquotHistory',
      type : 'CONVERTED_STORAGE',
      userEmail : 'LALA@GMAIL.COM',
      description : 'teste',
      date : '2019-06-22T21:43:06.086Z'
    }
  }
});
