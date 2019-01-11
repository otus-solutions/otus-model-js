describe("Tests activity revision factory", function () {
  var factory, activityRevision,REVISION_1, REVISION_2;
  var revisionList;
  var Mock = {};
  var Injections = {};
  var EMAIL_USER_1 = "otus@email.com";
  var EMAIL_USER_2 = "email@otus.com";
  var OBJECT_TYPE = "ActivityRevision";

  beforeEach(function () {
    angular.mock.module("otusjs.model.revision");

    inject(function (_$injector_) {
      Injections.RevisionFactory = _$injector_.get('otusjs.model.revision.RevisionFactory');
      factory = _$injector_.get('otusjs.model.revision.ActivityRevisionFactory', Injections);
    });
    revisionList = [];
    REVISION_1 = Injections.RevisionFactory.create(EMAIL_USER_1);
    REVISION_2 = Injections.RevisionFactory.create(EMAIL_USER_2);
    revisionList.push(REVISION_1);
    revisionList.push(REVISION_2);
    Mock.fakeRevision = {objectType: null};
    Mock.activityId = "65as4dfas4a8sd";

    spyOn(Injections.RevisionFactory, "create").and.callThrough();
  });

  it('should have been defined factory', function () {
    expect(factory).toBeDefined();
  });

  it('should create an activity revision', function () {
    activityRevision = factory.create();
    expect(activityRevision).toBeDefined();
    expect(activityRevision.objectType).toEqual(OBJECT_TYPE);
    expect(activityRevision.activityId).toBeDefined();
    expect(activityRevision.toJSON).toBeDefined();
    expect(activityRevision.init).toBeDefined();
    expect(activityRevision.setRevision).toBeDefined();
    expect(Array.isArray(activityRevision.revisionHistory)).toEqual(true);
  });

  it('should init revision list an activity revision', function () {
    activityRevision = factory.create();
    activityRevision.init(revisionList);
    expect(activityRevision.revisionHistory.length).toEqual(2);
  });

  it('should set revision an activity revision', function () {
    activityRevision = factory.create();
    expect(activityRevision.revisionHistory.length).toEqual(0);
    activityRevision.setRevision(REVISION_1);
    expect(activityRevision.revisionHistory.length).toEqual(1);
  });

  it('should not set revision an activity revision', function () {
    activityRevision = factory.create();
    expect(activityRevision.revisionHistory.length).toEqual(0);
    activityRevision.setRevision(Mock.fakeRevision);
    expect(activityRevision.revisionHistory.length).toEqual(0);
  });

  it('should return a object in toJSON methhod', function () {
    activityRevision = factory.create();
    expect(activityRevision.toJSON().objectType).toEqual(OBJECT_TYPE);
    expect(activityRevision.toJSON().activityId).toBeDefined();
    expect(activityRevision.toJSON().revisionHistory).toBeDefined();
  });

  it('should fromJsonObject an activity revision with activityId without revisionList', function () {
    activityRevision = factory.fromJsonObject(Mock.activityId);
    expect(activityRevision.activityId).toEqual(Mock.activityId);
    expect(activityRevision.toJSON().activityId).toEqual(Mock.activityId);
    expect(activityRevision.revisionHistory.length).toEqual(0);
    expect(activityRevision.toJSON().revisionHistory.length).toEqual(0);
  });

  it('should fromJsonObject an activity revision with activityId with revisionList', function () {
    activityRevision = factory.fromJsonObject(Mock.activityId, revisionList);
    expect(activityRevision.activityId).toEqual(Mock.activityId);
    expect(activityRevision.toJSON().activityId).toEqual(Mock.activityId);
    expect(activityRevision.revisionHistory.length).toEqual(2);
    expect(activityRevision.toJSON().revisionHistory.length).toEqual(2);
  });

});