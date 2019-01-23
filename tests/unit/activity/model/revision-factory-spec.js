describe("Tests revision factory", function () {
  var factory, revision;
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
  });

  it('should have been defined factory', function () {
    expect(factory).toBeDefined();
  });

  it('should create a revision', function () {
    revision = factory.create(ACTIVITY_ID, DATE);
    console.log(revision);
    expect(revision).toBeDefined();
    expect(revision.objectType).toEqual(OBJECT_TYPE);
    expect(revision.revisionDate instanceof Date).toEqual(true);
    expect(revision.user).toEqual(null);

    expect(revision.toJSON().objectType).toBeDefined();
    expect(revision.toJSON().revisionDate).toBeDefined();
  });

  it('should fromJsonObject', function () {
    revision = factory.fromJsonObject(Mock.jsonObject);
    expect(revision.user).toEqual(EMAIL_USER);
    expect(revision.revisionDate).toEqual(DATE);
  });

  it('should ensure the activityId', function () {
    expect(function () {
      factory.create();
    }).toThrowError("Validation error: Activity ID not found");
  });

});
