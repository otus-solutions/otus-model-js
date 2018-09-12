// xdescribe('RuleFactory', function() {

//   var Mock = {};
//   var rule = null;
//   var EXTENTS = 'SurveyTemplateObject';
//   var OBJECT_TYPE = 'Rule';
//   var WHEN = 'QID';
//   var OPERATOR = 'equal';
//   var ANSWER = 1;
//   var factory;

//   beforeEach(function() {
//     angular.mock.module('otusjs');

//     inject(function(_$injector_) {
//       factory = _$injector_.get('otusjs.model.navigation.RuleFactory');
//     });
//   });

//   xdescribe('create method', function() {

//     beforeEach(function() {
//       rule = factory.create(WHEN, OPERATOR,ANSWER);
//     });

//     it('should return a Rule object with extends value equal to "SurveyTemplateObject"', function() {
//       expect(rule.extents).toBe(EXTENTS);
//     });

//     it('should return a Rule object with objectType value equal to "Rule"', function() {
//       expect(rule.objectType).toBe(OBJECT_TYPE);
//     });

//     it('should return a Rule object with a valid when value', function() {
//       expect(rule.when).toEqual(WHEN);
//     });

//     it('should return a Rule object with a valid operator value', function() {
//       expect(rule.operator).toEqual(OPERATOR);
//     });

//     it('should return a Rule object with a valid answer value', function() {
//       expect(rule.answer).toEqual(ANSWER);
//     });

//   });

//   xdescribe('fromJson method', function() {

//     beforeEach(function() {
//       mockJson();
//       rule = factory.fromJson(Mock.json);
//     });

//     it('should return a Rule object with extends value equal to "SurveyTemplateObject"', function() {
//       expect(rule.extents).toBe(EXTENTS);
//     });

//     it('should return a Rule object with objectType value equal to "Rule"', function() {
//       expect(rule.objectType).toBe(OBJECT_TYPE);
//     });

//     it('should return a Rule object with a valid when value', function() {
//       expect(rule.when).toEqual(WHEN);
//     });

//     it('should return a Rule object with a valid when value', function() {
//       expect(rule.operator).toEqual(OPERATOR);
//     });

//     it('should return a Rule object with a valid answer', function() {
//       expect(rule.answer).toBe(ANSWER);
//     });

//   });

//   function mockJson() {
//     Mock.json = JSON.stringify({
//       extents: EXTENTS,
//       objectType: OBJECT_TYPE,
//       when: WHEN,
//       operator: OPERATOR,
//       answer: ANSWER
//     });
//   }

// });
