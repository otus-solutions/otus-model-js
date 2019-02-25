// describe("GroupFactory", function() {
//   let factory;
//   const jsonGroups = {
//     name:"name",
//     surveys: [
//       "ACTA"
//     ]
//   };
//
//   beforeEach(function() {
//     angular.mock.module('otusjs.survey');
//
//     inject(function(_$injector_) {
//       factory = _$injector_.get('otusjs.model.survey.GroupManagerFactory');
//     });
//   });
//
//   describe(" the ccreate method", function() {
//     it("should return a new instance", function() {
//       expect(factory.create(json)).toBeDefined();
//     });
//
//   });
//
// });