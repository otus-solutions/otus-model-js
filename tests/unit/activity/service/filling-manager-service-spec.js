describe('FillingManagerService', function() {

  let Mock = {};
  let service = {};
  let QUESTION_FILL_TYPE = 'QuestionFill';
  let METADATA_FILL_TYPE = 'MetadataFill';
  let QID1 = 'QID1';
  let QID2 = 'QID2';
  let EMPTY_STRING = '';
  let COMMENT = 'Este é o meu comentário: comentário.';
  let NEW_COMMENT = 'Este é um novo comentário: comentário.';
  let ANSWER = 1;
  let METADATA = 2;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      /* Test data */
      mockQuestionItem();

      /* Helper mocks */
      mockQuestionFillFactory(_$injector_);

      service = _$injector_.get('FillingManagerService');
    });
  });

  describe('fillingListSize method', function() {
    let filling;

    beforeEach(function() {
      filling = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, COMMENT);
    });

    it('should return length of list equals one, when list has one filling', function() {
      service.updateFilling(filling);
      expect(service.listSize()).toEqual(1);
    });

    it('should return length equal zero, when list is empty', function() {
      expect(service.listSize()).toEqual(0);
    });

  });

  describe('getFillingIndex method', function() {
    let filling;

    beforeEach(function() {
      filling = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, COMMENT);
      service.updateFilling(filling);
    });

    it('should return index of elemente on list', function() {
      let index = service.getFillingIndex(QID1);

      expect(index).toBe(0);
    });

    it('should return null when element is not in the list', function() {
      let index = service.getFillingIndex(QID2);

      expect(index).toBe(null);
    });

  });

  describe('existsFillingTo method', function() {
    let filling;

    beforeEach(function() {
      filling = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, COMMENT);
      service.updateFilling(filling);
    });

    it('should return true when the filling exist in the list', function() {
      expect(service.existsFillingTo(QID1)).toBe(true);
    });

    it('should return false when the filling not exist in the list', function() {
      expect(service.existsFillingTo(QID2)).toBe(false);
    });

  });

  describe('searchFillingByID method', function() {
    let filling;

    beforeEach(function() {
      filling = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, COMMENT);
      service.updateFilling(filling);
    });

    it('should return correct filling, exist filling on list', function() {
      expect(service.searchFillingByID(QID1)).toEqual(filling);
    });

    it('should return undefined filling if it does not exist on list', function() {
      expect(service.searchFillingByID(QID2)).toBe(null);
    });

  });

  describe('updateFilling method', function() {
    let filling1, filling1Clone;

    beforeEach(function() {
      filling1 = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, COMMENT);
      filling2 = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, NEW_COMMENT);
    });

    it('should add new filling when not exists on list for the same questionID', function() {
      service.updateFilling(filling1);
      let result = service.searchFillingByID(filling1.questionID);

      expect(result).toEqual(filling1);
    });

    it('should replace filling when exists a filling with the same questionID', function() {
      service.updateFilling(filling1);
      service.updateFilling(filling2);

      let result = service.searchFillingByID(filling1.questionID);

      expect(result.comment).not.toEqual(filling1.comment);
      expect(result.comment).toEqual(filling2.comment);
      expect(service.listSize()).toBe(1);
    });

    it('should remove when filling is empty', function() {
      service.updateFilling(filling1);
      let emptyFilling1 = Mock.QuestionFillFactory.create(Mock.item);
      service.updateFilling(emptyFilling1);

      expect(service.listSize()).toBe(0);
    });

    it('should return size list equal zero when question is empty', function() {
      let emptyFilling1 = Mock.QuestionFillFactory.create(Mock.item);
      service.updateFilling(emptyFilling1);

      expect(service.listSize()).toBe(0);
    });

  });

  describe('add method', function() {
    let filling;

    beforeEach(function() {
      filling = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, COMMENT);
    });

    xit('should to include new filling in list', function() {
      service.add(filling);

      expect(service.searchFillingByID(QID1)).toEqual(filling);
    });

  });

  describe('removeFilling method', function() {
    let fillingQID1, fillingQID2;

    beforeEach(function() {
      fillingQID1 = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, COMMENT);
      fillingQID2 = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, COMMENT);
      service.add(fillingQID1);
      service.add(fillingQID2);
    });

    xit('should return object filling when removed element in list', function() {
      let result = service.removeFilling(fillingQID1.questionID);

      expect(result).toEqual(fillingQID1);
    });

    xit('should return null when none element removed of list', function() {
      service.removeFilling(fillingQID1.questionID);
      let result = service.removeFilling(fillingQID1.questionID);

      expect(result).toBe(null);
    });

    xit('should remove exactly the element requested', function() {
      service.removeFilling(fillingQID1.questionID);

      expect(service.existsFillingTo(QID1)).toBe(false);
      expect(service.existsFillingTo(QID2)).toBe(true);
    });

  });

  describe('replaceFilling method', function() {
    let filling1, filling2;

    beforeEach(function() {
      filling1 = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, COMMENT);
      service.add(filling1);
    });

    xit('should return object substituted on list', function() {
      let fillingModified = Mock.QuestionFillFactory.create(Mock.item, ANSWER, METADATA, NEW_COMMENT);
      let resultOfReplace = service.replaceFilling(fillingModified);
      let resultOfSearch = service.searchFillingByID(resultOfReplace.questionID);

      expect(resultOfReplace).toEqual(filling1);
      expect(resultOfSearch).toEqual(fillingModified);
    });

    xit('should return null when none element replace of list', function() {
      let result = service.replaceFilling(filling2);

      expect(result).toEqual(null);
    });

  });

  function mockQuestionItem() {
    Mock.item = {};
    Mock.item.customID = QID1;
    Mock.item.objectType = 'IntegerQuestion';
  }

  function mockQuestionFillFactory($injector) {
    Mock.QuestionFillFactory = $injector.get('QuestionFillFactory');
  }

});
