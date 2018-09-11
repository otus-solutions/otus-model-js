    describe("Rulefactory", function () {

        var factory, rule, other;
    
        var WHEN = "today";
        var OPERATOR = "otus";
        var ANSWER = 1;
        var IS_METADATA = false;
        var IS_CUSTOM = false;        

    
        beforeEach(function () {
            angular.mock.module('otusjs');
    
            angular.mock.inject(function (_$injector_) {
                factory = _$injector_.get('otusjs.model.navigation.RuleFactory');
            });
        });
    
        it('factoryExistence check', function () {
            expect(factory).toBeDefined();        
        });
    
        it('methodFactoryExistence check', function () {
            expect(factory.create).toBeDefined();
            expect(factory.fromJson).toBeDefined();
        });    
      
    
        describe('methods of object Rule', function(){
            
            beforeEach(function(){
                rule = factory.create(WHEN,OPERATOR, ANSWER, IS_METADATA, IS_CUSTOM);
                other = factory.create(WHEN,OPERATOR, ANSWER, IS_METADATA, IS_CUSTOM);
                
            });
            
            it('withinMethod should to modify operator and answer attributes', function(){                
                rule.within(['item']);
                expect(rule.operator).toBe("within");
                expect(rule.answer[0]).toBe("item");
            });

            it('notEqualMethod should to modify operator and answer attributes', function(){                
                rule.notEqual(Boolean.False);
                expect(rule.operator).toBe("notEqual");
                expect(rule.answer).toBe(Boolean.False);
            });

            it('equalMethod should to modify operator and answer attributes', function(){                
                rule.equal(Boolean.True);
                expect(rule.operator).toBe("equal");
                expect(rule.answer).toBe(Boolean.True);
            });

            it('greatMethod should to modify operator and answer attributes', function(){                
                rule.greater(Boolean.True);
                expect(rule.operator).toBe('greater');
                expect(rule.answer).toBe(Boolean.True);
            });

            it('greaterEqualMethod should to modify operator and answer attributes', function(){                
                rule.greaterEqual(Boolean.True);
                expect(rule.operator).toBe('greaterEqual');
                expect(rule.answer).toBe(Boolean.True);
            });

            it('lowerMethod should to modify operator and answer attributes', function(){                
                rule.lower(Boolean.True);
                expect(rule.operator).toBe('lower');
                expect(rule.answer).toBe(Boolean.True);
            });

            it('lowerEqualMethod should to modify operator and answer attributes', function(){                
                rule.lowerEqual(Boolean.True);
                expect(rule.operator).toBe('lowerEqual');
                expect(rule.answer).toBe(Boolean.True);
            });

            it('betweenMethod should to modify operator and answer attributes if first argument is array', function(){                
                rule.between([0], 1);
                expect(rule.operator).toBe('between');
                expect(rule.answer[0]).toBe(0);
            });

            it('betweenMethod should to modify operator and answer attributes if first argument is not array', function(){                
                rule.between(0,1);
                expect(rule.operator).toBe('between');
                expect(rule.answer[0]).toBe(0,1);
            });

            it('containsMethod should to modify operator and answer attributes if first argument is not array', function(){                
                rule.contains('context');
                expect(rule.operator).toBe('contains');
                expect(rule.answer).toBe('context');
            });

            it('equalsMethod should to modify operator and answer attributes if first argument is not array', function(){                
                expect(rule.equals(other)).toBe(true);
                
            });



            
        });    
    });


