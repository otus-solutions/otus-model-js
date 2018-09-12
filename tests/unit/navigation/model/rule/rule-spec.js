// xdescribe('Rule', function() {

//   var Mock = {};
//   var DIFF_OBJECT_TYPE = 'DiffRule';
//   var WHEN = 'QID';
//   var DIFF_WHEN = 'QID13';
//   var OPERATOR = 'equal';
//   var DIFF_OPERATOR = 'greater';
//   var ANSWER = 1;
//   var DIFF_ANSWER = 2;
//   var factory;  

//   beforeEach(function() {
//     angular.mock.module('otusjs');

//     inject(function(_$injector_) {
//       factory = _$injector_.get('otusjs.model.navigation.RuleFactory');
//     });
//   });

//   xdescribe('equals method', function() {

//     it('should return true when two objects have the same properties and equal values', function() {
//       var ruleA = factory.create(WHEN, OPERATOR, ANSWER);
//       var ruleB = factory.create(WHEN, OPERATOR, ANSWER);

//       expect(ruleA.equals(ruleB)).toBe(true);
//     });

//     it('should return false when two objects have different objectType value', function() {
//       var ruleA = factory.create(WHEN, OPERATOR, ANSWER);
//       var ruleB = factory.create(DIFF_WHEN, OPERATOR, ANSWER);
//       ruleB.objectType = DIFF_OBJECT_TYPE;

//       expect(ruleA.equals(ruleB)).toBe(false);
//     });

//     it('should return false when two objects have different when value', function() {
//       var ruleA = factory.create(WHEN, OPERATOR, ANSWER);
//       var ruleB = factory.create(DIFF_WHEN, OPERATOR, ANSWER);

//       expect(ruleA.equals(ruleB)).toBe(false);
//     });

//     it('should return false when two objects have different operator value', function() {
//       var ruleA = factory.create(WHEN, OPERATOR, ANSWER);
//       var ruleB = factory.create(WHEN, DIFF_OPERATOR, ANSWER);

//       expect(ruleA.equals(ruleB)).toBe(false);
//     });

//     it('should return false when two objects have different answer value', function() {
//       var ruleA = factory.create(WHEN, OPERATOR, ANSWER);
//       var ruleB = factory.create(WHEN, OPERATOR, DIFF_ANSWER);

//       expect(ruleA.equals(ruleB)).toBe(false);
//     });

//   });

//   xdescribe('selfsame method', function() {

//     it('should call Object.is', function() {
//       var ruleA = factory.create(WHEN, OPERATOR, ANSWER);
//       var ruleB = factory.create(WHEN, OPERATOR, ANSWER);
//       spyOn(Object, 'is').and.callThrough();

//       var resultA = ruleA.selfsame(ruleA);
//       var resultB = ruleA.selfsame(ruleB);

//       expect(Object.is).toHaveBeenCalled();
//       expect(resultA).toBe(true);
//       expect(resultB).toBe(false);
//     });

//   });

//   xdescribe('clone method', function() {

//     it('should call Object.assign', function() {
//       var ruleA = factory.create(WHEN, OPERATOR, ANSWER);
//       var clone = ruleA.clone();

//       expect(ruleA.equals(clone)).toBe(true);
//       expect(ruleA.selfsame(clone)).toBe(false);

//       clone.when = DIFF_WHEN;

//       expect(clone.equals(ruleA)).toBe(false);
//       expect(clone.selfsame(ruleA)).toBe(false);
//     });

//   });

//   xdescribe('toJson method', function() {

//     var json;

//     beforeEach(function() {
//       var ruleA = factory.create(WHEN, OPERATOR, ANSWER);
//       json = JSON.parse(ruleA.toJson());
//     });

//     it('result a json version with when attribute', function() {
//       expect(json.when).toEqual(WHEN);
//     });

//     it('result a json version with operator attribute', function() {
//       expect(json.operator).toEqual(OPERATOR);
//     });

//     it('result a json version with answer attribute', function() {
//       expect(json.answer).toEqual(ANSWER);
//     });

//   });

// });
