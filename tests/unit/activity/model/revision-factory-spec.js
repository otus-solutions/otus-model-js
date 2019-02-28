describe("Tests revision factory", function () {
  var factory;
  var Mock = {};
  var EMAIL_USER = "otus@email.com";
  var OBJECT_TYPE = "ActivityRevision";
  var ACTIVITY_ID = 'someID';
  var DATE = new Date(2019,1, 11);

  beforeEach(function () {
    angular.mock.module("otusjs.model.activity");

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.model.activity.RevisionFactory');
    });

    Mock.jsonObject = {
      user: EMAIL_USER,
      revisionDate : DATE,
      activityID: ACTIVITY_ID
    }

    Mock.malformedJsonObject = {
      activityID: null,
      statusDate: DATE,
    };
  });

  it('should have been defined factory', function () {
    expect(factory).toBeDefined();
  });

  it('should create a revision', function () {
    var revision = factory.create(ACTIVITY_ID, DATE);
    expect(revision).toBeDefined();
    expect(revision.objectType).toEqual(OBJECT_TYPE);
    expect(revision.revisionDate instanceof Date).toEqual(true);
    expect(revision.user).toEqual(null);

    expect(revision.toJSON().objectType).toBeDefined();
    expect(revision.toJSON().revisionDate).toBeDefined();
  });

  it('should create revision from json', function () {
    var revision = factory.fromJsonObject(Mock.jsonObject);
    expect(revision.user).toEqual(EMAIL_USER);
    expect(revision.revisionDate).toEqual(DATE);
  });

  it('should create from json array', function () {
    var jsonArray = [
      Mock.jsonObject,
      Mock.jsonObject,
      Mock.jsonObject
    ];
    var revisionArray = factory.fromJson(jsonArray);
    expect(revisionArray[0].user).toEqual(EMAIL_USER);
    expect(revisionArray[0].revisionDate).toEqual(DATE);
    expect(revisionArray.length).toEqual(jsonArray.length);
  });

  it('should ensure the activityId', function () {
    expect(function () {
      factory.create();
    }).toThrowError("Validation error: Activity ID not found");
  });

});
