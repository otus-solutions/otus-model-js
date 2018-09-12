    describe("Rulefactory", function () {

        var factory, rule, other;
    
        var WHEN = "today";
        var OPERATOR = "otus";
        var ANSWER = 1;
        var IS_METADATA = false;
        var IS_CUSTOM = false;
        var PARAMETER_TOOL = "for confirmation of use and comparison";
        var POSITIVE_BOOLEAN = true;        
        var NEGATIVE_BOOLEAN = false;        

    
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
                rule.within([PARAMETER_TOOL]);
                expect(rule.operator).toBe("within");
                expect(rule.answer[0]).toBe(PARAMETER_TOOL);
            });

            it('notEqualMethod should to modify operator and answer attributes', function(){                
                rule.notEqual(PARAMETER_TOOL);
                expect(rule.operator).toBe("notEqual");
                expect(rule.answer).toBe(PARAMETER_TOOL);
            });

            it('equalMethod should to modify operator and answer attributes', function(){                
                rule.equal(PARAMETER_TOOL);
                expect(rule.operator).toBe("equal");
                expect(rule.answer).toBe(PARAMETER_TOOL);
            });

            it('greatMethod should to modify operator and answer attributes', function(){                
                rule.greater(PARAMETER_TOOL);
                expect(rule.operator).toBe('greater');
                expect(rule.answer).toBe(PARAMETER_TOOL);
            });

            it('greaterEqualMethod should to modify operator and answer attributes', function(){                
                rule.greaterEqual(PARAMETER_TOOL);
                expect(rule.operator).toBe('greaterEqual');
                expect(rule.answer).toBe(PARAMETER_TOOL);
            });

            it('lowerMethod should to modify operator and answer attributes', function(){                
                rule.lower(PARAMETER_TOOL);
                expect(rule.operator).toBe('lower');
                expect(rule.answer).toBe(PARAMETER_TOOL);
            });

            it('lowerEqualMethod should to modify operator and answer attributes', function(){                
                rule.lowerEqual(PARAMETER_TOOL);
                expect(rule.operator).toBe('lowerEqual');
                expect(rule.answer).toBe(PARAMETER_TOOL);
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
                rule.contains(PARAMETER_TOOL);
                expect(rule.operator).toBe('contains');
                expect(rule.answer).toBe(PARAMETER_TOOL);
            });

            it('equalsMethod should return positive if objectTypeValues are equal', function(){                
                expect(rule.equals(other)).toBeTruthy();                
            });

            it('equalsMethod should return negative if objectTypeValues are not equal', function(){                
                other.objectType = PARAMETER_TOOL;
                expect(rule.equals(other)).toBeFalsy();                
            });

            it('equalsMethod should return negative if whenValues are not equal', function(){                
                other.when = PARAMETER_TOOL;
                expect(rule.equals(other)).toBeFalsy();                
            });

            it('equalsMethod should return negative if operatorValues are not equal', function(){                
                other.operator = PARAMETER_TOOL;
                expect(rule.equals(other)).toBeFalsy();                
            });

            it('equalsMethod should return negative if answerValues are not equal', function(){                
                other.answer = PARAMETER_TOOL;
                expect(rule.equals(other)).toBeFalsy();                
            });

            it('equalsMethod should return negative if isCustomValues are not equal', function(){                
                other.isCustom = POSITIVE_BOOLEAN;
                expect(rule.equals(other)).toBeFalsy();                
            });

            it('equalsMethod should return negative if isMetadata are not equal', function(){                
                other.isMetadata = POSITIVE_BOOLEAN;
                expect(rule.equals(other)).toBeFalsy();                
            });

            it('cloneMethod should return clone of Rule instance', function(){                
                var clone = rule.clone();
                // console.log(typeof clone);
                //console.log(instanceof rule);
                // expect(clone == rule).toBeTruthy();
            });




            
        });    
    });


