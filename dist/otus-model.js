(function() {
    'use strict';

    angular
        .module('otusjs.metadata', []);

}());

(function() {
    'use strict';

    angular
        .module('otusjs.misc', []);

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation', []);

}());

(function() {
    'use strict';

    angular
        .module('otusjs.pageItem', []);

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question', []);

}());

(function() {
    'use strict';

    angular
        .module('otusjs.survey', []);

}());

(function() {
    'use strict';

    angular
        .module('otusjs', [
            'otusjs.metadata',
            'otusjs.misc',
            'otusjs.navigation',
            'otusjs.pageItem',
            'otusjs.question',
            'otusjs.survey',
            'utils'
        ]);

}());

(function() {
    'use strict';

    angular
        .module('otusjs')
        .service('ModelFacadeService', ModelFacadeService);

    ModelFacadeService.$inject = [
        /* Question */
        'QuestionFactory',
        /* Setter */
        'LabelFactory',
        'UnitFactory',
        /* Structure */
        'SurveyFactory',
        'SurveyIdentityFactory',
        'MetadataGroupFactory'
    ];

    function ModelFacadeService(QuestionFactory, LabelFactory, UnitFactory, SurveyFactory, SurveyIdentityFactory, MetadataGroupFactory) {
        var self = this;

        /* Public interface */
        self.getQuestionFactory = getQuestionFactory;
        self.getLabelFactory = getLabelFactory;
        self.getUnitFactory = getUnitFactory;
        self.getSurveyFactory = getSurveyFactory;
        self.getSurveyIdentityFactory = getSurveyIdentityFactory;
        self.getMetadataGroupFactory = getMetadataGroupFactory;

        function getQuestionFactory() {
            return QuestionFactory;
        }

        function getLabelFactory() {
            return LabelFactory;
        }

        function getUnitFactory() {
            return UnitFactory;
        }

        function getSurveyFactory() {
            return SurveyFactory;
        }

        function getSurveyIdentityFactory() {
            return SurveyIdentityFactory;
        }

        function getMetadataGroupFactory() {
        	return MetadataGroupFactory;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.metadata')
        .service('AddMetadataAnswerService', AddMetadataAnswerService);

    AddMetadataAnswerService.$inject = [
        'WorkspaceService',
        'MetadataAnswerFactory'
    ];

    function AddMetadataAnswerService(WorkspaceService, MetadataAnswerFactory) {
        var self = this;

        self.execute = execute;

        function execute(question) {
            var metadataOption = MetadataAnswerFactory.create(question.metadata.option.length, question.templateID);
            question.metadata.addOption(metadataOption);
            return metadataOption;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.metadata')
        .service('RemoveMetadataOptionService', RemoveMetadataOptionService);

    function RemoveMetadataOptionService() {
        var self = this;

        self.execute = execute;

        function execute(question) {
            question.metadata.removeLastOption();
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('AddRouteConditionService', AddRouteConditionService);

    AddRouteConditionService.$inject = [
        'WorkspaceService',
        'RouteConditionFactory'
    ];

    function AddRouteConditionService(WorkspaceService, RouteConditionFactory) {
        var self = this;

        self.execute = execute;

        function execute(conditionName, route) {
            var routeCondition = RouteConditionFactory.create(conditionName);
            route.addCondition(routeCondition);
            return routeCondition;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('AddRouteService', AddRouteService);

    AddRouteService.$inject = [
        'WorkspaceService',
        'RouteFactory'
    ];

    function AddRouteService(WorkspaceService, RouteFactory) {
        var self = this;

        self.execute = execute;

        function execute(routeData) {
            var route = RouteFactory.create(routeData.name, routeData.parentNavigation.origin, routeData.destination);
            routeData.parentNavigation.addRoute(route);
            return route;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('AddRuleService', AddRuleService);

    AddRuleService.$inject = [
        'WorkspaceService',
        'RuleFactory'
    ];

    function AddRuleService(WorkspaceService, RuleFactory) {
        var self = this;

        self.execute = execute;

        function execute(ruleData, route) {
            var newRule = RuleFactory.create(ruleData.when, ruleData.operator, ruleData.answer);
            route.conditionSet[0].addRule(newRule);
            return newRule;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('RemoveRouteService', RemoveRouteService);

    function RemoveRouteService() {
        var self = this;

        self.execute = execute;

        function execute(routeData) {
            routeData.parentNavigation.removeRoute(routeData.name);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('RemoveRuleService', RemoveRuleService);

    function RemoveRuleService() {
        var self = this;

        self.execute = execute;

        function execute(rule, route) {
            route.conditionSet[0].removeRule(rule);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.pageItem')
        .service('AddPageItemService', AddPageItemService);

    AddPageItemService.$inject = [
        'WorkspaceService',
        'PageItemFactory'
    ];

    function AddPageItemService(WorkspaceService, PageItemFactory) {
        var self = this;

        self.execute = execute;

        function execute(itemType) {
            var survey = WorkspaceService.getSurvey();
            var newItem = PageItemFactory.create(itemType, survey.identity.acronym + survey.questionsCount());
            survey.addQuestion(newItem);
            return newItem;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('AddAnswerOptionService', AddAnswerOptionService);

    AddAnswerOptionService.$inject = [
        'WorkspaceService',
        'AnswerOptionFactory'
    ];

    function AddAnswerOptionService(WorkspaceService, AnswerOptionFactory) {
        var self = this;

        self.execute = execute;

        function execute(question) {
            var answerOption = AnswerOptionFactory.create(question.option.length, question.templateID);
            question.addOption(answerOption);
            return answerOption;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('AddQuestionService', AddQuestionService);

    AddQuestionService.$inject = [
        'WorkspaceService',
        'QuestionFactory'
    ];

    function AddQuestionService(WorkspaceService, QuestionFactory) {
        var self = this;

        self.execute = execute;

        function execute(questionType) {
            return WorkspaceService.getSurvey().addQuestion(questionType);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('RemoveAnswerOptionService', RemoveAnswerOptionService);

    function RemoveAnswerOptionService() {
        var self = this;

        self.execute = execute;

        function execute(question) {
            question.removeLastOption();
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('RemoveQuestionService', RemoveQuestionService);

    function RemoveQuestionService() {
        var self = this;

        self.execute = execute;

        function execute(question, survey) {
            survey.removeQuestion(question.templateID);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('UpdateQuestionService', UpdateQuestionService);

    UpdateQuestionService.$inject = [
        'WorkspaceService',
        'QuestionFactory'
    ];

    function UpdateQuestionService(WorkspaceService, QuestionFactory) {
        var self = this;

        self.execute = execute;

        function execute(data) {
            var survey = WorkspaceService.getSurvey();
            survey.updateQuestion(data.ngModel);
            return data;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.metadata')
        .factory('MetadataAnswerFactory', MetadataAnswerFactory);

    MetadataAnswerFactory.$inject = ['LabelFactory'];

    function MetadataAnswerFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value, parentQuestionID) {
            return new MetadataAnswer(value, parentQuestionID, LabelFactory);
        }

        return self;
    }

    function MetadataAnswer(value, parentQuestionID, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'MetadataAnswer';
        self.value = value;
        self.parentQuestionID = parentQuestionID;
        self.dataType = 'Integer';
        self.label = {
            'ptBR': LabelFactory.create(),
            'enUS': LabelFactory.create(),
            'esES': LabelFactory.create()
        };
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.metadata')
        .factory('MetadataGroupFactory', MetadataGroupFactory);

    MetadataGroupFactory.$inject = ['MetadataAnswerFactory'];

    function MetadataGroupFactory(MetadataAnswerFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(name, questionOID) {
            return new MetadataGroup(name, questionOID);
        }

        return self;
    }

    function MetadataGroup(name, questionOID) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'MetadataGroup';
        self.name = name;
        self.parentQuestion = questionOID;
        self.option = [];

        self.addOption = addOption;
        self.removeOption = removeOption;
        self.removeLastOption = removeLastOption;

        function addOption(option) {
            self.option.push(option);
        }

        function removeOption(option) {
            var indexToRemove = 0;

            self.option.forEach(function(o) {
                if (o.value === option.value) return;
                else ++indexToRemove;
            });

            self.option.splice(indexToRemove, 1);
        }

        function removeLastOption() {
            self.option.splice(-1, 1);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.misc')
        .factory('LabelFactory', LabelFactory);

    function LabelFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create() {
            return new Label();
        }

        return self;
    }

    function Label() {
        Object.defineProperty(this, 'extends', {
            value: 'StudioObject',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'objectType', {
            value: 'Label',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'oid', {
            value: '',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'plainText', {
            value: '',
            writable: true,
            enumerable: true
        });

        Object.defineProperty(this, 'formattedText', {
            value: '',
            writable: true,
            enumerable: true
        });
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.misc')
        .factory('UnitFactory', UnitFactory);

    function UnitFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create() {
            return new Unit();
        }

        return self;
    }

    function Unit() {
        Object.defineProperty(this, 'extends', {
            value: 'StudioObject',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'objectType', {
            value: 'Unit',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'oid', {
            value: '',
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'plainText', {
            value: '',
            writable: true,
            enumerable: true
        });

        Object.defineProperty(this, 'formattedText', {
            value: '',
            writable: true,
            enumerable: true
        });
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .factory('NavigationFactory', NavigationFactory);

    NavigationFactory.$inject = ['RouteFactory'];

    function NavigationFactory(RouteFactory) {
        var self = this;

        self.create = create;

        function create(origin, destination) {
            var navigation = new Navigation(origin);

            if (destination) {
                var defaultRoute = RouteFactory.create('1', navigation.origin, destination);
                navigation.addRoute(defaultRoute);
            }

            return navigation;
        }

        return self;
    }

    function Navigation(origin) {
        var self = this;

        /* Object properties */
        self.extents = 'StudioObject';
        self.objectType = 'Navigation';
        self.origin = origin;
        self.routes = [];

        /* Public methods */
        self.listRoutes = listRoutes;
        self.addRoute = addRoute;
        self.removeRoute = removeRoute;
        self.updateRoute = updateRoute;
        self.toJson = toJson;

        function listRoutes() {
            var clone = [];

            self.routes.forEach(function(route) {
                clone.push(route);
            });

            return clone;
        }

        function addRoute(route) {
            self.routes.push(route);
        }

        function removeRoute(name) {
            var routeToRemove = self.routes.filter(function(route) {
                return route.name === name;
            });

            var indexToRemove = self.routes.indexOf(routeToRemove[0]);
            if (indexToRemove > -1) self.routes.splice(indexToRemove, 1);
            return routeToRemove[0];
        }

        function updateRoute(route) {
            self.routes.forEach(function(currentRoute) {
                if (currentRoute.index === route.index) {
                    self.routes[currentRoute.index] = route;
                }
            });
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.origin = self.origin;
            json.routes = [];
            self.routes.forEach(function(route) {
                json.routes.push(route.toJson());
            });

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }

    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .factory('RouteConditionFactory', RouteConditionFactory);

    function RouteConditionFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(name) {
            return new RouteCondition(name);
        }

        return self;
    }

    function RouteCondition(conditionName) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'RouteCondition';
        self.name = conditionName;
        self.rules = [];

        self.listRules = listRules;
        self.addRule = addRule;
        self.removeRule = removeRule;
        self.toJson = toJson;

        function listRules() {
            var clone = [];

            self.rules.forEach(function(rule) {
                clone.push(rule);
            });

            return clone;
        }

        function addRule(rule) {
            var ruleNotExist = (self.rules.indexOf(rule) === -1);
            if (ruleNotExist) self.rules.push(rule);
        }

        function removeRule(rule) {
            var indexToRemove = self.rules.indexOf(rule);
            self.rules.splice(indexToRemove, 1);
        }

        function toJson() {
            var json = {
                extents: 'StudioObject',
                objectType: 'RouteCondition',
                name: self.name,
                rules: []
            };

            self.rules.forEach(function(rule) {
                json.rules.push(rule.toJson());
            });

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .factory('RouteFactory', RouteFactory);

    function RouteFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(name, origin, destination) {
            return new Route(name, origin, destination);
        }

        return self;
    }

    function Route(routeName, routeOrigin, routeDestination) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'Route';
        self.origin = routeOrigin;
        self.destination = routeDestination;
        self.conditionSet = [];
        self.name = routeName;

        /* Public interface */
        self.getConditionSet = getConditionSet;
        self.addCondition = addCondition;
        self.removeCondition = removeCondition;
        self.getConditionSetSize = getConditionSetSize;
        self.toJson = toJson;

        function getConditionSet() {
            var clone = [];

            self.conditionSet.forEach(function(condition) {
                clone.push(condition);
            });

            return clone;
        }

        function getConditionSetSize() {
            return getConditionSet().length;
        }

        function addCondition(condition) {
            condition.name += getConditionSetSize() + 1;
            self.conditionSet.push(condition);
        }

        function removeCondition(condition) {
            var conditionToRemove = self.conditionSet.filter(function(condition) {
                return condition.name === name;
            });

            var indexToRemove = self.conditionSet.indexOf(conditionToRemove[0]);
            if (indexToRemove > -1) self.conditionSet.splice(indexToRemove, 1);
            return conditionToRemove[0];
        }

        function toJson() {
            var json = {
                extents: self.extents,
                objectType: self.objectType,
                name: self.name,
                origin: self.origin,
                destination: self.destination,
                index: self.index
            };

            if (self.conditionSet) {
                json.conditionSet = {};

                for (var conditionName in self.conditionSet) {
                    json.conditionSet[conditionName] = self.conditionSet[conditionName].toJson();
                }
            }

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .factory('RuleFactory', RuleFactory);

    function RuleFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(when, operator, answer) {
            return new Rule(when, operator, answer);
        }

        return self;
    }

    function Rule(when, operator, answer) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'Rule';
        self.when = when;
        self.answer = answer;
        self.operator = operator;

        self.within = within;
        self.equal = equal;
        self.greater = greater;
        self.greaterEqual = greaterEqual;
        self.lower = lower;
        self.lowerEqual = lowerEqual;
        self.between = between;
        self.contains = contains;
        self.toJson = toJson;

        function within(arrayValues) {
            defineAnswer('within', arrayValues);
        }

        function equal(value) {
            defineAnswer('equal', value);
        }

        function greater(value) {
            defineAnswer('greater', value);
        }

        function greaterEqual(value) {
            defineAnswer('greaterEqual', value);
        }

        function lower(value) {
            defineAnswer('lower', value);
        }

        function lowerEqual(value) {
            defineAnswer('lowerEqual', value);
        }

        function between(start, end) {
            if (Array.isArray(start)) {
                defineAnswer('between', start);
            } else {
                defineAnswer('between', [start, end]);
            }
        }

        function contains(value) {
            defineAnswer('contains', value);
        }

        function defineAnswer(operator, value) {
            answer = {};
            answer[operator] = value;
        }

        function toJson() {
            var json = {
                when: when,
                operator: operator,
                answer: answer
            };

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('NavigationAddService', NavigationAddService);

    NavigationAddService.$inject = [
        'NavigationContainerService',
        'QuestionContainerService'
    ];

    function NavigationAddService(NavigationContainerService, QuestionContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute() {
            var questionCount = QuestionContainerService.getQuestionListSize();

            if (questionCount > 1) {
                var origin = QuestionContainerService.getQuestionByPosition(questionCount - 2);
                var destination = QuestionContainerService.getQuestionByPosition(questionCount - 1);

                NavigationContainerService.createNavigationTo(origin.templateID, destination.templateID);
            }
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('NavigationContainerService', NavigationContainerService);

    NavigationContainerService.$inject = ['NavigationFactory'];

    function NavigationContainerService(NavigationFactory) {
        var self = this;
        var navigationList = []; // TODO: To implement Immutable collection

        /* Public methods */
        self.init = init;
        self.manageNavigation = manageNavigation;
        self.getNavigationByOrigin = getNavigationByOrigin;
        self.getNavigationByPosition = getNavigationByPosition;
        self.getNavigationPosition = getNavigationPosition;
        self.getNavigationList = getNavigationList;
        self.getNavigationListSize = getNavigationListSize;
        self.existsNavigationTo = existsNavigationTo;
        self.createNavigationTo = createNavigationTo;
        self.removeNavigationOf = removeNavigationOf;
        self.removeNavigationByIndex = removeNavigationByIndex;
        self.removeCurrentLastNavigation = removeCurrentLastNavigation;

        function init() {
            navigationList = [];
        }

        function manageNavigation(navigationToManage) {
            navigationList = navigationToManage;
        }

        function getNavigationList() {
            return navigationList;
        }

        function getNavigationListSize() {
            return navigationList.length;
        }

        function getNavigationByOrigin(origin) {
            var filter = navigationList.filter(function(navigation) {
                return findByOrigin(navigation, origin);
            });

            return filter[0];
        }

        function getNavigationByPosition(position) {
            return navigationList[position];
        }

        function getNavigationPosition(origin) {
            var navigation = getNavigationByOrigin(origin);
            if (navigation) {
                return navigationList.indexOf(navigation);
            } else {
                return null;
            }
        }

        function existsNavigationTo(origin) {
            return (getNavigationByOrigin(origin)) ? true : false;
        }

        function createNavigationTo(origin, destination) {
            navigationList.push(NavigationFactory.create(origin, destination));
        }

        function removeNavigationOf(questionID) {
            var navigationToRemove = navigationList.filter(function(navigation) {
                return findByOrigin(navigation, questionID);
            });

            var indexToRemove = navigationList.indexOf(navigationToRemove[0]);
            if (indexToRemove > -1) navigationList.splice(indexToRemove, 1);
        }

        function removeNavigationByIndex(indexToRemove) {
            navigationList.splice(indexToRemove, 1);
        }

        function removeCurrentLastNavigation(indexToRemove) {
            navigationList.splice(-1, 1);
        }

        /* Private methods */
        function findByOrigin(navigation, questionID) {
            return navigation.origin === questionID;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('NavigationManagerService', NavigationManagerService);

    NavigationManagerService.$inject = [
        'NavigationContainerService',
        'NavigationAddService',
        'NavigationRemoveService'
    ];

    function NavigationManagerService(NavigationContainerService, NavigationAddService, NavigationRemoveService) {
        var self = this;

        /* Public interface */
        self.init = init;
        self.getNavigationList = getNavigationList;
        self.getNavigationByOrigin = getNavigationByOrigin;
        self.addNavigation = addNavigation;
        self.removeNavigation = removeNavigation;

        function init() {
            NavigationContainerService.init();
        }

        function getNavigationList() {
            return NavigationContainerService.getNavigationList();
        }

        function getNavigationByOrigin(origin) {
            return NavigationContainerService.getNavigationByOrigin(origin);
        }

        function addNavigation() {
            NavigationAddService.execute();
        }

        function removeNavigation(templateID) {
            NavigationRemoveService.execute(templateID);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('NavigationRemoveService', NavigationRemoveService);

    NavigationRemoveService.$inject = ['NavigationContainerService'];

    function NavigationRemoveService(NavigationContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute(templateID) {
            if (NavigationContainerService.existsNavigationTo(templateID)) {
                var navigationToRecicle = NavigationContainerService.getNavigationByOrigin(templateID);
                var positionToRecicle = NavigationContainerService.getNavigationPosition(templateID);

                if (positionToRecicle && positionToRecicle !== 0) {
                    var navigationToUpdate = NavigationContainerService.getNavigationByPosition(positionToRecicle - 1);
                    navigationToUpdate.routes[0].destination = navigationToRecicle.routes[0].destination;
                }

                NavigationContainerService.removeNavigationOf(templateID);
            } else {
                NavigationContainerService.removeCurrentLastNavigation();
            }
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.pageItem')
        .factory('ImageItemFactory', ImageItemFactory);

    ImageItemFactory.$inject = ['LabelFactory'];

    function ImageItemFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new ImageItem(templateID, prototype, LabelFactory);
        }

        return self;
    }

    function ImageItem(templateID, prototype, LabelFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'ImageItem';
        self.templateID = templateID;
        self.dataType = 'String';
        self.url = '';
        self.footer = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.url = self.url;
            json.footer = self.footer;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.pageItem')
        .factory('PageItemFactory', PageItemFactory);

    PageItemFactory.$inject = [
        'TextItemFactory',
        'ImageItemFactory'
    ];

    function PageItemFactory(TextItemFactory, ImageItemFactory) {
        var self = this,

            factoryMap = {
                'TextItem': TextItemFactory,
                'ImageItem': ImageItemFactory,
            };

        /* Public interface */
        self.create = create;

        function create(itemType, templateID) {
            var item = new PageItem(templateID);
            return factoryMap[itemType].create(templateID, item);
        }

        return self;
    }

    function PageItem(templateID) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'PageItem';
        self.templateID = templateID;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.pageItem')
        .factory('TextItemFactory', TextItemFactory);

    TextItemFactory.$inject = ['LabelFactory'];

    function TextItemFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new TextItem(templateID, prototype, LabelFactory);
        }

        return self;
    }

    function TextItem(templateID, prototype, LabelFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'TextItem';
        self.templateID = templateID;
        self.dataType = 'String';
        self.value = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.value = self.value;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('AnswerOptionFactory', AnswerOptionFactory);

    AnswerOptionFactory.$inject = ['LabelFactory'];

    function AnswerOptionFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value, parentQuestionID) {
            return new QuestionAnswerOption(value, parentQuestionID, LabelFactory);
        }

        return self;
    }

    function QuestionAnswerOption(value, parentQuestionID, LabelFactory) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'AnswerOption';
        self.value = value;
        self.dataType = 'Integer';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.parentQuestionID = parentQuestionID;

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.value = self.value;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.parentQuestionID = self.parentQuestionID;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('CalendarQuestionFactory', CalendarQuestionFactory);

    function CalendarQuestionFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new CalendarQuestion(templateID, prototype);
        }

        return self;
    }

    function CalendarQuestion(templateID, prototype) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'CalendarQuestion';
        self.templateID = templateID;
        self.dataType = 'LocalDate';
        self.label = prototype.label;
        self.metadata = prototype.metadata;

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('DecimalQuestionFactory', DecimalQuestionFactory);

    DecimalQuestionFactory.$inject = ['UnitFactory'];

    function DecimalQuestionFactory(UnitFactory) {
        var self = this;
        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new DecimalQuestion(templateID, prototype, UnitFactory);
        }

        return self;
    }

    function DecimalQuestion(templateID, prototype, UnitFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'DecimalQuestion';
        self.templateID = templateID;
        self.dataType = 'Decimal';
        self.label = prototype.label;
        self.metadata = prototype.metadata;
        self.unit = {
            ptBR: UnitFactory.create(),
            enUS: UnitFactory.create(),
            esES: UnitFactory.create()
        };

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.unit = self.unit;

            return JSON.stringify(json);
        }
    }
}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('EmailQuestionFactory', EmailQuestionFactory);

    function EmailQuestionFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new EmailQuestion(templateID, prototype);
        }

        return self;
    }

    function EmailQuestion(templateID, prototype) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'EmailQuestion';
        self.templateID = templateID;
        self.dataType = 'String';
        self.label = prototype.label;
        self.metadata = prototype.metadata;

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('IntegerQuestionFactory', IntegerQuestionFactory);

    IntegerQuestionFactory.$inject = ['UnitFactory'];

    function IntegerQuestionFactory(UnitFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new IntegerQuestion(templateID, prototype, UnitFactory);
        }

        return self;
    }

    function IntegerQuestion(templateID, prototype, UnitFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'IntegerQuestion';
        self.templateID = templateID;
        self.dataType = 'Integer';
        self.label = prototype.label;
        self.metadata = prototype.metadata;
        self.unit = {
            ptBR: UnitFactory.create(),
            enUS: UnitFactory.create(),
            esES: UnitFactory.create()
        };

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.unit = self.unit;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('PhoneQuestionFactory', PhoneQuestionFactory);

    PhoneQuestionFactory.$inject = ['UnitFactory'];

    function PhoneQuestionFactory(UnitFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new PhoneQuestion(templateID, prototype, UnitFactory);
        }

        return self;
    }

    function PhoneQuestion(templateID, prototype, UnitFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'PhoneQuestion';
        self.templateID = templateID;
        self.dataType = 'Integer';
        self.label = prototype.label;
        self.metadata = prototype.metadata;
        self.unit = {
            ptBR: UnitFactory.create(),
            enUS: UnitFactory.create(),
            esES: UnitFactory.create()
        };

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.unit = self.unit;

            return JSON.stringify(json);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('QuestionFactory', QuestionFactory);

    QuestionFactory.$inject = [
        'CalendarQuestionFactory',
        'IntegerQuestionFactory',
        'DecimalQuestionFactory',
        'SingleSelectionQuestionFactory',
        'TextQuestionFactory',
        'TimeQuestionFactory',
        'EmailQuestionFactory',
        'LabelFactory',
        'MetadataGroupFactory',
        'PhoneQuestionFactory'
    ];

    function QuestionFactory(CalendarQuestionFactory, IntegerQuestionFactory, DecimalQuestionFactory, SingleSelectionQuestionFactory, TextQuestionFactory, TimeQuestionFactory, EmailQuestionFactory, LabelFactory, MetadataGroupFactory, PhoneQuestionFactory) {
        var self = this,

            factoryMap = {
                'CalendarQuestion': CalendarQuestionFactory,
                'IntegerQuestion': IntegerQuestionFactory,
                'DecimalQuestion': DecimalQuestionFactory,
                'SingleSelectionQuestion': SingleSelectionQuestionFactory,
                'TextQuestion': TextQuestionFactory,
                'TimeQuestion': TimeQuestionFactory,
                'EmailQuestion': EmailQuestionFactory,
                'PhoneQuestion': PhoneQuestionFactory
            };

        /* Public interface */
        self.create = create;

        function create(questionType, templateID) {
            var question = new Question(templateID, LabelFactory, MetadataGroupFactory);
            return factoryMap[questionType].create(templateID, question);
        }

        return self;
    }

    function Question(templateID, LabelFactory, MetadataGroupFactory) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'Question';
        self.templateID = templateID;
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('SingleSelectionQuestionFactory', SingleSelectionQuestionFactory);

    SingleSelectionQuestionFactory.$inject = ['AnswerOptionFactory'];

    function SingleSelectionQuestionFactory(AnswerOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new SingleSelectionQuestion(templateID, prototype, AnswerOptionFactory);
        }

        return self;
    }

    function SingleSelectionQuestion(templateID, prototype, AnswerOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'SingleSelectionQuestion';
        self.templateID = templateID;
        self.dataType = 'Integer';
        self.label = prototype.label;
        self.option = [];
        self.metadata = prototype.metadata;

        self.addOption = addOption;
        self.removeLastOption = removeLastOption;
        self.toJson = toJson;

        function addOption(option) {
            self.option.push(option);
        }

        function removeLastOption() {
            self.option.splice(-1);
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.option = self.option;
            json.metadata = self.metadata;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('TextQuestionFactory', TextQuestionFactory);

    function TextQuestionFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new TextQuestion(templateID, prototype);
        }

        return self;
    }

    function TextQuestion(templateID, prototype) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'TextQuestion';
        self.templateID = templateID;
        self.dataType = 'String';
        self.label = prototype.label;
        self.metadata = prototype.metadata;

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .factory('TimeQuestionFactory', TimeQuestionFactory);

    TimeQuestionFactory.$inject = ['UnitFactory'];

    function TimeQuestionFactory(UnitFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new TimeQuestion(templateID, prototype, UnitFactory);
        }

        return self;
    }

    function TimeQuestion(templateID, prototype, UnitFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'TimeQuestion';
        self.templateID = templateID;
        self.dataType = 'LocalTime';
        self.label = prototype.label;
        self.metadata = prototype.metadata;

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('QuestionAddService', QuestionAddService);

    QuestionAddService.$inject = ['QuestionContainerService'];

    function QuestionAddService(QuestionContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute(questionType, templateID) {
            return QuestionContainerService.createQuestion(questionType, templateID);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('QuestionContainerService', QuestionContainerService);

    QuestionContainerService.$inject = ['QuestionFactory'];

    function QuestionContainerService(QuestionFactory) {
        var self = this;
        var questionList = []; // TODO: To implement Immutable collection

        /* Public methods */
        self.init = init;
        self.manageQuestions = manageQuestions;
        self.getQuestionByTemplateID = getQuestionByTemplateID;
        self.getQuestionByPosition = getQuestionByPosition;
        self.getQuestionPosition = getQuestionPosition;
        self.getQuestionList = getQuestionList;
        self.getQuestionListSize = getQuestionListSize;
        self.existsQuestion = existsQuestion;
        self.createQuestion = createQuestion;
        self.removeQuestion = removeQuestion;
        self.removeQuestionByPosition = removeQuestionByPosition;
        self.removeCurrentLastQuestion = removeCurrentLastQuestion;

        function init() {
            questionList = [];
        }

        function manageQuestions(questionsToManage) {
            questionList = questionsToManage;
        }

        function getQuestionList() {
            return questionList;
        }

        function getQuestionListSize() {
            return questionList.length;
        }

        function getQuestionByTemplateID(templateID) {
            var filter = questionList.filter(function(question) {
                return findByOrigin(question, templateID);
            });

            return filter[0];
        }

        function getQuestionByPosition(position) {
            return questionList[position];
        }

        function getQuestionPosition(templateID) {
            var question = getQuestionByTemplateID(templateID);
            if (question) {
                return questionList.indexOf(question);
            } else {
                return null;
            }
        }

        function existsQuestion(templateID) {
            return (getQuestionByTemplateID(templateID)) ? true : false;
        }

        function createQuestion(questionType, templateID) {
            var question = QuestionFactory.create(questionType, templateID);
            questionList.push(question);
            return question;
        }

        function removeQuestion(templateID) {
            var questionToRemove = questionList.filter(function(question) {
                return findByOrigin(question, templateID);
            });

            var indexToRemove = questionList.indexOf(questionToRemove[0]);
            if (indexToRemove > -1) questionList.splice(indexToRemove, 1);
        }

        function removeQuestionByPosition(indexToRemove) {
            questionList.splice(indexToRemove, 1);
        }

        function removeCurrentLastQuestion(indexToRemove) {
            questionList.splice(-1, 1);
        }

        /* Private methods */
        function findByOrigin(question, templateID) {
            return question.templateID === templateID;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('QuestionManagerService', QuestionManagerService);

    QuestionManagerService.$inject = [
        'QuestionContainerService',
        'QuestionAddService',
        'QuestionRemoveService'
    ];

    function QuestionManagerService(QuestionContainerService, QuestionAddService, QuestionRemoveService) {
        var self = this;

        var incrementalIDValue = -1;

        /* Public interface */
        self.init = init;
        self.getQuestionList = getQuestionList;
        self.getQuestionListSize = getQuestionListSize;
        self.getQuestionByTemplateID = getQuestionByTemplateID;
        self.addQuestion = addQuestion;
        self.removeQuestion = removeQuestion;

        function init() {
            QuestionContainerService.init();
        }

        function getQuestionList() {
            return QuestionContainerService.getQuestionList();
        }

        function getQuestionListSize() {
            return QuestionContainerService.getQuestionListSize();
        }

        function getQuestionByTemplateID(templateID) {
            return QuestionContainerService.getQuestionByTemplateID(templateID);
        }

        function addQuestion(questionType, templateIDPrefix) {
            var templateID = templateIDPrefix + getNextIncrementalGenerator();
            var question = QuestionAddService.execute(questionType, templateID);
            return question;
        }

        function removeQuestion(templateID) {
            QuestionRemoveService.execute(templateID);
        }

        function getNextIncrementalGenerator() {
            console.log(incrementalIDValue);
            return ++incrementalIDValue;
        }

    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('QuestionRemoveService', QuestionRemoveService);

    QuestionRemoveService.$inject = ['QuestionContainerService'];

    function QuestionRemoveService(QuestionContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute(templateID) {
            QuestionContainerService.removeQuestion(templateID);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.survey')
        .factory('SurveyFactory', SurveyFactory);

    SurveyFactory.$inject = [
        'SurveyIdentityFactory',
        'SurveyMetaInfoFactory',
        'SurveyUUIDGenerator',
        'NavigationManagerService',
        'QuestionManagerService'
    ];

    function SurveyFactory(SurveyIdentityFactory, SurveyMetaInfoFactory, SurveyUUIDGenerator, NavigationManagerService, QuestionManagerService) {
        var self = this;

        /* Public interdace */
        self.create = create;

        function create(name, acronym) {
            var metainfo = SurveyMetaInfoFactory.create();
            var identity = SurveyIdentityFactory.create(name, acronym);
            var UUID = SurveyUUIDGenerator.generateSurveyUUID();

            return new Survey(metainfo, identity, UUID, NavigationManagerService, QuestionManagerService);
        }

        return self;
    }

    function Survey(surveyMetainfo, surveyIdentity, uuid, NavigationManagerService, QuestionManagerService) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'Survey';
        self.oid = uuid;
        self.identity = surveyIdentity;
        self.metainfo = surveyMetainfo;
        self.QuestionManager = QuestionManagerService;
        self.NavigationManager = NavigationManagerService;

        self.NavigationManager.init();

        /* Public methods */
        self.getQuestionByTemplateID = getQuestionByTemplateID;
        self.addQuestion = addQuestion;
        self.removeQuestion = removeQuestion;
        self.updateQuestion = updateQuestion;
        self.toJson = toJson;

        function getQuestionByTemplateID(templateID) {
            return self.QuestionManager.getQuestionByTemplateID(templateID);
        }

        function addQuestion(questionType) {
            var question = self.QuestionManager.addQuestion(questionType, self.identity.acronym);
            self.NavigationManager.addNavigation();
            return question;
        }

        function removeQuestion(templateID) {
            self.QuestionManager.removeQuestion(templateID);
            self.NavigationManager.removeNavigation(templateID);
        }

        function updateQuestion(question) {
            self.navigationList[question.templateID] = question;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.oid = self.oid;
            json.identity = self.identity.toJson();
            json.metainfo = self.metainfo.toJson();

            json.questionContainer = [];
            self.QuestionManager.getQuestionList().forEach(function(question) {
                json.questionContainer.push(question.toJson());
            });

            json.navigationList = [];
            NavigationManagerService.getNavigationList().forEach(function(navigation) {
                json.navigationList.push(navigation.toJson());
            });

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.survey')
        .factory('SurveyIdentityFactory', SurveyIdentityFactory);

    function SurveyIdentityFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(name, acronym, version) {
            return new SurveyIdentity(name, acronym, version);
        }

        return self;
    }

    function SurveyIdentity(name, acronym, version) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'SurveyIdentity';
        self.name = name;
        self.acronym = acronym;
        // self.version = version;
        self.recommendedTo = '';
        self.description = '';
        self.keywords = [];

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.name = self.name;
            json.acronym = self.acronym;
            // json.version = self.version;
            json.recommendedTo = self.recommendedTo;
            json.description = self.description;
            json.keywords = self.keywords;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.survey')
        .factory('SurveyMetaInfoFactory', SurveyMetaInfoFactory);

    function SurveyMetaInfoFactory() {
        var self = this;

        /* Public interdace */
        self.create = create;

        function create() {
            var now = Date.now();
            return new SurveyMetaInfo(now);
        }

        return self;
    }

    function SurveyMetaInfo(creationDatetime) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'SurveyMetaInfo';
        self.creationDatetime = creationDatetime;
        self.otusStudioVersion = '';

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.creationDatetime = self.creationDatetime;
            json.otusStudioVersion = self.otusStudioVersion;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());
