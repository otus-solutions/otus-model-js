describe("FileUploadFactory", function() {
  var Mock = {};
  var factory;

  /* @BeforeScenario */
  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get(
        'otusjs.surveyItem.customAnswer.FileUploadAnswerFactory');
    });
    mockFileInfo();
  });

  describe("buildAnswer method", function() {

    it("should build an answer file", function() {
      spyOn(factory, "buildAnswer").and.callThrough();
      factory.buildAnswer([]);
      expect(factory.buildAnswer).toHaveBeenCalled();

    });
  });

  describe("build from json", function() {
    it("should build from json", function() {
      spyOn(factory, "buildFromJson").and.callThrough();
      Mock.file.oid = "";
      factory.buildFromJson(Mock.file);
      expect(factory.buildFromJson).toHaveBeenCalled();
      expect(factory.buildFromJson).toHaveBeenCalledWith(Mock.file);
      //expect(factory.buildFromJson.calls.all()).toEqual();
    });
  });


  function mockFileInfo() {
    Mock.file = [{
      "name": "File",
      "size": 0,
      "type": ".pdf",
      "lastModifiedDate": new Date(),
      oid: ""

    }, {
      "name": "File2",
      "size": "10 KB",
      "type": ".pdf",
      "lastModifiedDate": new Date(),
      oid: ""

    }]
  }

});
