describe('the exam sending lot service', function() {
  var Mock = {};
  var injections;

  beforeEach(angular.mock.module('otusjs.laboratory.exam.sending'));

  beforeEach(inject(function(_$injector_) {
    injections = {
      ExamSendingFactory: _$injector_.get('otusjs.laboratory.exam.sending.ExamSendingFactory')
    }

    mockExamSendingService(_$injector_, injections)
    mockCreateExamSending();
    mockBuildExamSendingFromJson();
  }));

  describe("createExamSending method", function() {
    beforeEach(function() {
      spyOn(Mock.examService, "createExamSending");
      Mock.examService.createExamSending();
    });
    it("should call method of createExamSending", function() {
      expect(Mock.examService.createExamSending).toBeDefined();
      expect(Mock.examService.createExamSending).toHaveBeenCalled();
    });
  });

  describe("buildExamSendingFromJson method", function() {
    beforeEach(function() {
      spyOn(Mock.examService, "buildExamSendingFromJson");
      Mock.examService.buildExamSendingFromJson(jasmine.any(Object), jasmine.any(Object));
    });

    it("should call method of buildExamSendingFromJson", function() {
      expect(Mock.examService.buildExamSendingFromJson).toBeDefined();
      expect(Mock.examService.buildExamSendingFromJson).toHaveBeenCalledWith(jasmine.any(Object), jasmine.any(Object));
    });

    it("should can't call method of buildExamSendingFromJson", function() {
      expect(Mock.examService.buildExamSendingFromJson).toBeDefined();
      expect(Mock.examService.buildExamSendingFromJson).not.toHaveBeenCalledWith(jasmine.any(Object));
    });
  });

  function mockExamSendingService(_$injector_, injections) {
    Mock.examService = _$injector_.get('otusjs.laboratory.exam.sending.ExamSendingLotService', injections);
  }

  function mockCreateExamSending() {
    Mock.createExamSending = Mock.examService.createExamSending();
  }

  function mockBuildExamSendingFromJson() {
    Mock.createExamSending = Mock.examService.buildExamSendingFromJson(jasmine.any(Object), jasmine.any(Object));
  }


});
