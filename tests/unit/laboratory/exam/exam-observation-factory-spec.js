describe('the exam results factory', function() {
  var Mock = {};
  var injections;

  beforeEach(function() {
    window.module("otusjs.laboratory.exam.sending");
  });

  beforeEach(function() {
    inject(function(_$injector_) {

      mockExamObservationFactory(_$injector_);
      mockExamObservation();
      mockExamObservationFromJson(jasmine.any(Object));
      mockObservationJson();

    });
  });

  describe("expect method create been called", function() {
    var _obj;
    beforeEach(function() {
      spyOn(Mock.ExamObservationFactory, "create");
      Mock.ExamObservationFactory.create();

    });

    it("should build a factory", function() {
      expect(Mock.ExamObservationFactory.create).toHaveBeenCalled();
      expect(Mock.ExamObservationFactory.create).not.toHaveBeenCalledWith(jasmine.any(Object));
      expect(Mock.ExamObservationFactory.create).toBeDefined();
      expect(Mock.ExamObservationFactory).toEqual(jasmine.any(Object));
    });
  });

  describe("expect method fromJson been called", function() {
    beforeEach(function functionName() {
      spyOn(Mock.ExamObservationFactory, "fromJson");
      Mock.ExamObservationFactory.fromJson(jasmine.any(Object));

    });

    it("should call method fromJson", function() {
      expect(Mock.ExamObservationFactory.fromJson).toHaveBeenCalled();
      expect(Mock.ExamObservationFactory.fromJson).toHaveBeenCalledWith(jasmine.any(Object));
      expect(Mock.ExamObservationFactory.fromJson).toHaveBeenCalledWith(Mock.ExamObservationJson);
      expect(Mock.ExamObservationFactory.fromJson).toBeDefined();
      expect(Mock.ExamObservationFactory.fromJson).not.toBe(null);
    });
  });

  describe('toJSON method', function() {
    beforeEach(function() {

      mockExamObservationFromJson(Mock.observation);
    });

    it('expect return from toJson method to equal the mocked JSON',
      function() {
        expect(JSON.stringify(Mock.ExamObservationFromJson[0])).toEqual(JSON.stringify(Mock.ExamObservationJson));
      });

  });

  function mockObservationJson() {
    Mock.observation = [{
      objectType: "ExamObservation",
      name: "",
      value: ""
    }]
  }

  function mockExamObservationFactory(_$injector_, injections) {
    Mock.ExamObservationFactory = _$injector_.get("otusjs.laboratory.exam.sending.ExamObservation");
  }

  function mockExamObservation() {
    Mock.ExamObservationJson = Mock.ExamObservationFactory.create();
  }

  function mockExamObservationFromJson(json) {
    Mock.ExamObservationFromJson = Mock.ExamObservationFactory.fromJson(json);
  }
});
