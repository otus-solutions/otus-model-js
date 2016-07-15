(function() {
    'use strict';

    angular
        .module('otusjs.activity', []);

}());

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
        .module('otusjs.survey', []);

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem', []);

}());

(function() {
    'use strict';

    angular
        .module('otusjs', [
            'otusjs.survey',
            'otusjs.activity',
            'otusjs.surveyItem',
            'otusjs.metadata',
            'otusjs.misc',
            'otusjs.navigation',
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
        'SurveyItemFactory',
        /* Setter */
        'LabelFactory',
        'UnitFactory',
        /* Structure */
        'SurveyFactory',
        'SurveyIdentityFactory',
        'MetadataGroupFactory'
    ];

    function ModelFacadeService(SurveyItemFactory, LabelFactory, UnitFactory, SurveyFactory, SurveyIdentityFactory, MetadataGroupFactory) {
        var self = this;

        /* Public interface */
        self.getSurveyItemFactory = getSurveyItemFactory;
        self.getLabelFactory = getLabelFactory;
        self.getUnitFactory = getUnitFactory;
        self.getSurveyFactory = getSurveyFactory;
        self.getSurveyIdentityFactory = getSurveyIdentityFactory;
        self.getMetadataGroupFactory = getMetadataGroupFactory;

        function getSurveyItemFactory() {
            return SurveyItemFactory;
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
        .module('otusjs.activity')
        .factory('ActivityParticipantDataFactory', ActivityParticipantDataFactory);


    function ActivityParticipantDataFactory() {
        var self = this;

        self.create = create;

        function create(participant) {
            return new ActivityParticipantData(participant);
        }

        return self;
    }

    function ActivityParticipantData(participant) {
        var self = this;

        self.objectType = 'ActivityParticipantData';
        self.recruitmentNumber = participant.recruitmentNumber;
        self.name = participant.name;
        self.fieldCenter = participant.fieldCenter;

        /* Public methods */
        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.recruitmentNumber = self.recruitmentNumber;
            json.name = self.name;
            json.fieldCenter = self.fieldCenter;

            return JSON.stringify(json);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('ActivityStatusFactory', ActivityStatusFactory);

    function ActivityStatusFactory() {
        var self = this;

        /* Public interface */
        self.createCreatedStatus = createCreatedStatus;
        self.createInitializedOfflineStatus = createInitializedOfflineStatus;
        self.createInitializedOnlineStatus = createInitializedOnlineStatus;
        self.createOpenedStatus = createOpenedStatus;
        self.createSavedStatus = createSavedStatus;
        self.createFinalizedStatus = createFinalizedStatus;

        function createCreatedStatus(user) {
            return new ActivityStatus('CREATED', user);
        }

        function createInitializedOfflineStatus(user) {
            return new ActivityStatus('INITIALIZED_OFFLINE', user);
        }

        function createInitializedOnlineStatus(user) {
            return new ActivityStatus('INITIALIZED_ONLINE', user);
        }

        function createOpenedStatus(user) {
            return new ActivityStatus('OPENED', user);
        }

        function createSavedStatus(user) {
            return new ActivityStatus('SAVED', user);
        }

        function createFinalizedStatus(user) {
            return new ActivityStatus('FINALIZED', user);
        }

        return self;
    }

    function ActivityStatus(name, user) {
        var self = this;

        self.objectType = 'ActivityStatus';
        self.name = name;
        self.date = Date.now();
        self.user = user;

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.name = self.name;
            json.date = self.date;
            json.user = self.user.toJson();

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('ActivitySurveyFactory', ActivitySurveyFactory);

    ActivitySurveyFactory.$inject = [
        'StatusHistoryManagerService',
        'FillingManagerService'
    ];

    function ActivitySurveyFactory(StatusHistoryManagerService, FillingManagerService) {
        var self = this;

        self.create = create;

        function create(category, group, templateOID, user) {
            StatusHistoryManagerService.newCreatedRegistry(user);
            return new ActivitySurvey(category, group, templateOID, FillingManagerService, StatusHistoryManagerService);
        }

        return self;
    }

    function ActivitySurvey(category, group, templateOID, FillingManagerService, StatusHistoryManagerService) {
        var self = this;

        self.objectType = 'Activity';
        //TODO: O modo de utilização deve ser revisto
        self.activityID = 1;
        self.category = category;
        self.group = group;
        self.templateOID = templateOID;
        self.fillContainer = FillingManagerService;
        self.statusHistory = StatusHistoryManagerService;

        /* Public methods */
        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.activityID = self.activityID;
            json.category = self.category;
            json.group = self.group;
            json.templateOID = self.templateOID;
            json.fillContainer = self.fillContainer;
            json.statusHistory = self.statusHistory;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('ActivityUserFactory', ActivityUserFactory);

    function ActivityUserFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(name, email) {
            return new ActivityUser(name, email);
        }

        return self;
    }

    function ActivityUser(name, email) {
        var self = this;

        self.objectType = 'ActivityUser';
        self.name = name;
        self.email = email;

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.name = self.name;
            json.email = self.email;

            return JSON.stringify(json);
        }

    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('AnswerFillFactory', AnswerFillFactory);

    function AnswerFillFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new AnswerFill(value);
        }

        return self;
    }

    function AnswerFill(value) {
        var self = this;

        self.objectType = 'AnswerFill';
        self.value = (value === undefined) ? null : value;

        /* Public methods */
        self.isFilled = isFilled;
        self.toJson = toJson;

        function isFilled() {
            return (self.value) ? true : false;
        }

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.value = self.value;

            return JSON.stringify(json);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('InterviewFactory', InterviewFactory);

    InterviewFactory.$inject = ['InterviewerFactory'];

    function InterviewFactory(InterviewerFactory) {
        var self = this;

        self.create = create;

        function create(user) {
            var interviewer = InterviewerFactory.create(user);
            return new Interview(interviewer);
        }

        return self;
    }

    function Interview(interviewer) {
        var self = this;

        self.objectType = 'Interview';
        self.date = Date.now();
        self.interviewer = interviewer;

        /* Public methods */
        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.date = self.date;
            json.interviewer = self.interviewer.toJson();

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('InterviewerFactory', InterviewerFactory);

    function InterviewerFactory() {
        var self = this;

        self.create = create;

        function create(userData) {
            return new Interviewer(userData);
        }

        return self;
    }

    function Interviewer(userData) {
        var self = this;

        self.objectType = 'Interviewer';
        self.name = userData.name;
        self.email = userData.email;

        /* Public methods */
        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.name = self.name;
            json.email = self.email;

            return JSON.stringify(json);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('MetadataFillFactory', MetadataFillFactory);

    function MetadataFillFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MetadataFill(value);
        }

        return self;
    }

    function MetadataFill(value) {
        var self = this;

        self.objectType = 'MetadataFill';
        self.value = (value === undefined) ? null : value;

        /* Public methods */
        self.isFilled = isFilled;
        self.toJson = toJson;

        function isFilled() {
            return (self.value) ? true : false;
        }

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.value = self.value;

            return JSON.stringify(json);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('QuestionFillFactory', QuestionFillFactory);

    QuestionFillFactory.$inject = ['AnswerFillFactory', 'MetadataFillFactory'];

    function QuestionFillFactory(AnswerFillFactory, MetadataFillFactory) {
        var self = this;

        self.create = create;

        function create(questionID, answer, metadata, comment) {
            var answerFill = AnswerFillFactory.create(answer);
            var metadataFill = MetadataFillFactory.create(metadata);
            return new QuestionFill(questionID, answerFill, metadataFill, comment);
        }

        return self;
    }

    function QuestionFill(questionID, answer, metadata, comment) {
        var self = this;

        self.objectType = 'QuestionFill';
        self.questionID = questionID;
        self.answer = answer;
        self.metadata = metadata;
        self.comment = (comment === undefined) ? '' : comment;
        self.isFilled = isFilled;

        /* Public methods */
        self.toJson = toJson;

        function isFilled() {
            return  self.answer.isFilled() || self.metadata.isFilled() || !!self.comment;
        }

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.questionID = self.questionID;
            json.answer = self.answer.toJson();
            json.metadata = self.metadata.toJson();
            json.comment = self.comment;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('ActivityFacadeService', ActivityFacadeService);

    ActivityFacadeService.$inject = [
        'AnswerFillFactory',
        'MetadataFillFactory',
        'QuestionFillFactory',
        'ActivitySurveyFactory'
    ];

    function ActivityFacadeService(AnswerFillFactory, MetadataFillFactory, QuestionFillFactory, ActivitySurveyFactory) {
        var self = this;
        self.activitySurvey = null;

        /* Public interface */
        self.createActivity = createActivity;
        self.createQuestionFill = createQuestionFill;
        self.openActivitySurvey = openActivitySurvey;
        self.initializeActivitySurvey = initializeActivitySurvey;


        function createActivity(category, group, templateOID, user) {
            self.activitySurvey = ActivitySurveyFactory.create(category, group, templateOID, user);
        }

        function openActivitySurvey() {
            self.activitySurvey.statusHistory.newOpenedRegistry();
        }

        function initializeActivitySurvey() {
            self.activitySurvey.statusHistory.newInitializedOnlineRegistry();
        }

        function createQuestionFill(questionID, answer, metadata, comment) {
            var answerFill = AnswerFillFactory.create(answer);
            var metadataFill = MetadataFillFactory.create(metadata);
            var question = QuestionFillFactory.create(questionID, answerFill, metadata, comment);
            self.activitySurvey.fillContainer.updateFilling(question);
            return question;
        }

    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('FillingManagerService', FillingManagerService);

    function FillingManagerService() {
        var self = this;
        var fillingList = [];

        /* Public methods */
        self.init = init;
        self.listSize = listSize;
        self.getFillingIndex = getFillingIndex;
        self.existsFillingTo = existsFillingTo;
        self.searchFillingByID = searchFillingByID;
        self.updateFilling = updateFilling;

        init();

        function init() {
            fillingList = [];
        }

        function listSize() {
            return fillingList.length;
        }

        function getFillingIndex(questionID) {
            var result = _searchByID(questionID);
            return (result) ? result.index : null;
        }

        function existsFillingTo(questionID) {
            return (_searchByID(questionID)) ? true : false;
        }

        function searchFillingByID(questionID) {
            var result = _searchByID(questionID);
            return (result) ? result.filling : null;
        }

        function updateFilling(filling) {
            if (filling.isFilled()) {
                if (!existsFillingTo(filling.questionID)) {
                    _add(filling);
                } else {
                    return _replaceFilling(filling);
                }
            } else {
                return _removeFilling(filling.questionID);
            }
        }

        function _searchByID(questionID) {
            var result;

            fillingList.forEach(function(filling, index) {
                if (filling.questionID === questionID) {
                    result = {};
                    result.filling = filling;
                    result.index = index;
                }
            });

            return result;
        }

        function _add(filling) {
            fillingList.push(filling);
        }

        function _replaceFilling(filling) {
            var result = _searchByID(filling.questionID);
            if (result !== undefined) {
                return fillingList.splice(result.index, 1, filling)[0];
            } else {
                return null;
            }
        }

        function _removeFilling(questionID) {
            var result = _searchByID(questionID);
            if (result !== undefined) {
                return fillingList.splice(result.index, 1)[0];
            } else {
                return null;
            }
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('StatusHistoryManagerService', StatusHistoryManagerService);

    StatusHistoryManagerService.$inject = ['ActivityStatusFactory'];

    function StatusHistoryManagerService(ActivityStatusFactory) {
        var self = this;
        var history;

        self.init = init;
        self.historySize = historySize;
        self.getHistory = getHistory;
        self.newCreatedRegistry = newCreatedRegistry;
        self.newInitializedOfflineRegistry = newInitializedOfflineRegistry;
        self.newInitializedOnlineRegistry = newInitializedOnlineRegistry;
        self.newOpenedRegistry = newOpenedRegistry;
        self.newSavedRegistry = newSavedRegistry;
        self.newFinalizedRegistry = newFinalizedRegistry;
        self.toJson = toJson;

        init();

        function init() {
            history = [];
        }

        function getHistory() {
            return history;
        }

        function newCreatedRegistry(user) {
            history.push(ActivityStatusFactory.createCreatedStatus(user));
        }

        function newInitializedOfflineRegistry(user) {
            history.push(ActivityStatusFactory.createInitializedOfflineStatus(user));
        }

        function newInitializedOnlineRegistry(user) {
            history.push(ActivityStatusFactory.createInitializedOnlineStatus(user));
        }

        function newOpenedRegistry(user) {
            history.push(ActivityStatusFactory.createOpenedStatus(user));
        }

        function newSavedRegistry(user) {
            history.push(ActivityStatusFactory.createSavedStatus(user));
        }

        function newFinalizedRegistry(user) {
            history.push(ActivityStatusFactory.createFinalizedStatus(user));
        }

        function historySize() {
            return history.length;
        }

        function toJson() {
            return JSON.stringify(history);
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('otusjs.metadata')
        .service('AddMetadataAnswerService', AddMetadataAnswerService);

    function AddMetadataAnswerService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            return item.metadata.createOption();
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

        function execute(item) {
            item.metadata.removeLastOption();
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('AddRouteConditionService', AddRouteConditionService);

    AddRouteConditionService.$inject = [
        'RouteConditionFactory'
    ];

    function AddRouteConditionService(RouteConditionFactory) {
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
        'RouteFactory'
    ];

    function AddRouteService(RouteFactory) {
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
        'RuleFactory'
    ];

    function AddRuleService(RuleFactory) {
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
        .module('otusjs.surveyItem')
        .service('AddAnswerOptionService', AddAnswerOptionService);

    function AddAnswerOptionService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            return item.createOption();
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('AddSurveyItemService', AddSurveyItemService);

    function AddSurveyItemService() {
        var self = this;

        self.execute = execute;

        function execute(itemType, survey) {
            return survey.addItem(itemType);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('RemoveAnswerOptionService', RemoveAnswerOptionService);

    function RemoveAnswerOptionService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            item.removeLastOption();
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('RemoveSurveyItemService', RemoveSurveyItemService);

    function RemoveSurveyItemService() {
        var self = this;

        self.execute = execute;

        function execute(item, survey) {
            survey.removeItem(item.templateID);
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

        function create(value) {
            return new MetadataAnswer(value, LabelFactory);
        }

        return self;
    }

    function MetadataAnswer(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'MetadataAnswer';
        self.dataType = 'Integer';
        self.value = value;
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

        function create() {
            return new MetadataGroup(MetadataAnswerFactory);
        }

        return self;
    }

    function MetadataGroup(MetadataAnswerFactory) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'MetadataGroup';
        self.options = [];

        /* Public methods */
        self.getOptionListSize = getOptionListSize;
        self.getOptionByValue = getOptionByValue;
        self.createOption = createOption;
        self.removeOption = removeOption;
        self.removeLastOption = removeLastOption;

        function getOptionListSize() {
            return self.options.length;
        }

        function getOptionByValue(value) {
            return self.options[value - 1];
        }

        function createOption() {
            var option = MetadataAnswerFactory.create(self.options.length + 1);
            self.options.push(option);
            return option;
        }

        function removeOption(value) {
            self.options.splice((value - 1), 1);
            reorderOptionValues();
        }

        function removeLastOption() {
            self.options.splice(-1, 1);
        }

        function reorderOptionValues() {
            self.options.forEach(function(option, index) {
                option.value = ++index;
            });
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
            if (indexToRemove > -1) {
                self.routes.splice(indexToRemove, 1);
            }

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
            if (ruleNotExist) {
                self.rules.push(rule);
            }
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

        function removeCondition() {
            var conditionToRemove = self.conditionSet.filter(function(condition) {
                return condition.name === name;
            });

            var indexToRemove = self.conditionSet.indexOf(conditionToRemove[0]);
            if (indexToRemove > -1) {
                self.conditionSet.splice(indexToRemove, 1);
            }

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
        'SurveyItemContainerService'
    ];

    function NavigationAddService(NavigationContainerService, SurveyItemContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute() {
            var itemCount = SurveyItemContainerService.getItemListSize();

            if (itemCount > 1) {
                var origin = SurveyItemContainerService.getItemByPosition(itemCount - 2);
                var destination = SurveyItemContainerService.getItemByPosition(itemCount - 1);

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
            if (indexToRemove > -1) {
                navigationList.splice(indexToRemove, 1);
            }
        }

        function removeNavigationByIndex(indexToRemove) {
            navigationList.splice(indexToRemove, 1);
        }

        function removeCurrentLastNavigation() {
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
        .module('otusjs.survey')
        .factory('SurveyFactory', SurveyFactory);

    SurveyFactory.$inject = [
        'SurveyIdentityFactory',
        'SurveyMetaInfoFactory',
        'SurveyUUIDGenerator',
        'NavigationManagerService',
        'SurveyItemManagerService'
    ];

    function SurveyFactory(SurveyIdentityFactory, SurveyMetaInfoFactory, SurveyUUIDGenerator, NavigationManagerService, SurveyItemManagerService) {
        var self = this;

        /* Public interdace */
        self.create = create;
        self.load = load;

        function load(surveyTemplateJson) {
          var metainfo = SurveyMetaInfoFactory.load(surveyTemplateJson.metainfo);
          var identity = SurveyIdentityFactory.load(surveyTemplateJson.identity);
          var UUID = surveyTemplateJson.oid;

          return new Survey(metainfo, identity, UUID, NavigationManagerService, SurveyItemManagerService);
        }

        function create(name, acronym) {
            var metainfo = SurveyMetaInfoFactory.create();
            var identity = SurveyIdentityFactory.create(name, acronym);
            var UUID = SurveyUUIDGenerator.generateSurveyUUID();

            return new Survey(metainfo, identity, UUID, NavigationManagerService, SurveyItemManagerService);
        }

        return self;
    }

    function Survey(surveyMetainfo, surveyIdentity, uuid, NavigationManagerService, SurveyItemManagerService) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'Survey';
        self.oid = uuid;
        self.identity = surveyIdentity;
        self.metainfo = surveyMetainfo;
        self.SurveyItemManager = SurveyItemManagerService;
        self.NavigationManager = NavigationManagerService;

        self.NavigationManager.init();
        self.SurveyItemManager.init();

        /* Public methods */
        self.getItemByTemplateID = getItemByTemplateID;
        self.addItem = addItem;
        self.addItem = addItem;
        self.removeItem = removeItem;
        self.updateItem = updateItem;
        self.toJson = toJson;

        function getItemByTemplateID(templateID) {
            return self.SurveyItemManager.getItemByTemplateID(templateID);
        }

        function addItem(type) {
            var item = self.SurveyItemManager.addItem(type, self.identity.acronym);
            self.NavigationManager.addNavigation();
            return item;
        }

        function removeItem(templateID) {
            self.SurveyItemManager.removeItem(templateID);
            self.NavigationManager.removeNavigation(templateID);
        }

        function updateItem(item) {
            self.navigationList[item.templateID] = item;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.oid = self.oid;
            json.identity = self.identity.toJson();
            json.metainfo = self.metainfo.toJson();

            json.itemContainer = [];
            self.SurveyItemManager.getItemList().forEach(function(item) {
                json.itemContainer.push(item.toJson());
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
        self.load = load;

        function load(surveyIdentityJson) {
            return new SurveyIdentity(surveyIdentityJson.name,
                surveyIdentityJson.acronym,
                surveyIdentityJson.version);
        }

        function create(name, acronym, version) {
            return new SurveyIdentity(name, acronym, version);
        }

        return self;
    }

    function SurveyIdentity(name, acronym) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'SurveyIdentity';
        self.name = name;
        self.acronym = acronym;
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
        self.load = load;

        function load(surveyMetaInfoJson) {
          return new SurveyMetaInfo(surveyMetaInfoJson.creationDatetime);
        }

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

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('SurveyItemFactory', SurveyItemFactory);

    SurveyItemFactory.$inject = [
        /* Question items */
        'CalendarQuestionFactory',
        'IntegerQuestionFactory',
        'DecimalQuestionFactory',
        'SingleSelectionQuestionFactory',
        'CheckboxQuestionFactory',
        'TextQuestionFactory',
        'TimeQuestionFactory',
        'EmailQuestionFactory',
        'PhoneQuestionFactory',
        /* Miscelaneous items */
        'TextItemFactory',
        'ImageItemFactory'
    ];

    function SurveyItemFactory(
        CalendarQuestionFactory,
        IntegerQuestionFactory,
        DecimalQuestionFactory,
        SingleSelectionQuestionFactory,
        CheckboxQuestionFactory,
        TextQuestionFactory,
        TimeQuestionFactory,
        EmailQuestionFactory,
        PhoneQuestionFactory,
        TextItemFactory,
        ImageItemFactory) {

        var self = this;

        var factoryMap = {
            /* Question items */
            'CalendarQuestion': CalendarQuestionFactory,
            'IntegerQuestion': IntegerQuestionFactory,
            'DecimalQuestion': DecimalQuestionFactory,
            'SingleSelectionQuestion': SingleSelectionQuestionFactory,
            'CheckboxQuestion' : CheckboxQuestionFactory,
            'TextQuestion': TextQuestionFactory,
            'TimeQuestion': TimeQuestionFactory,
            'EmailQuestion': EmailQuestionFactory,
            'PhoneQuestion': PhoneQuestionFactory,
            /* Miscelaneous items */
            'TextItem': TextItemFactory,
            'ImageItem': ImageItemFactory
        };

        /* Public interface */
        self.create = create;

        function create(itemType, templateID) {
            var item = new SurveyItem(templateID);
            return factoryMap[itemType].create(templateID, item);
        }

        return self;
    }

    function SurveyItem(templateID) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'SurveyItem';
        self.templateID = templateID;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('SurveyItemContainerService', SurveyItemContainerService);

    SurveyItemContainerService.$inject = ['SurveyItemFactory'];

    function SurveyItemContainerService(SurveyItemFactory) {
        var self = this;
        var itemList = []; // TODO: To implement Immutable collection

        /* Public methods */
        self.init = init;
        self.manageItems = manageItems;
        self.getItemByTemplateID = getItemByTemplateID;
        self.getItemByPosition = getItemByPosition;
        self.getItemPosition = getItemPosition;
        self.getItemList = getItemList;
        self.getItemListSize = getItemListSize;
        self.existsItem = existsItem;
        self.createItem = createItem;
        self.removeItem = removeItem;
        self.removeItemByPosition = removeItemByPosition;
        self.removeCurrentLastItem = removeCurrentLastItem;

        function init() {
            itemList = [];
        }

        function manageItems(itemsToManage) {
            itemList = itemsToManage;
        }

        function getItemList() {
            return itemList;
        }

        function getItemListSize() {
            return itemList.length;
        }

        function getItemByTemplateID(templateID) {
            var filter = itemList.filter(function(item) {
                return findByTemplateID(item, templateID);
            });

            return filter[0];
        }

        function getItemByPosition(position) {
            return itemList[position];
        }

        function getItemPosition(templateID) {
            var item = getItemByTemplateID(templateID);
            if (item) {
                return itemList.indexOf(item);
            } else {
                return null;
            }
        }

        function existsItem(templateID) {
            return (getItemByTemplateID(templateID)) ? true : false;
        }

        function createItem(itemType, templateID) {
            var item = SurveyItemFactory.create(itemType, templateID);
            itemList.push(item);
            return item;
        }

        function removeItem(templateID) {
            var itemToRemove = itemList.filter(function(item) {
                return findByTemplateID(item, templateID);
            });

            var indexToRemove = itemList.indexOf(itemToRemove[0]);
            if (indexToRemove > -1) {
                itemList.splice(indexToRemove, 1);
            }
        }

        function removeItemByPosition(indexToRemove) {
            itemList.splice(indexToRemove, 1);
        }

        function removeCurrentLastItem() {
            itemList.splice(-1, 1);
        }

        /* Private methods */
        function findByTemplateID(item, templateID) {
            return item.templateID === templateID;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('SurveyItemManagerService', SurveyItemManagerService);

    SurveyItemManagerService.$inject = [
        'SurveyItemContainerService'
    ];

    function SurveyItemManagerService(SurveyItemContainerService) {
        var self = this;

        var incrementalIDValue = 0;

        /* Public interface */
        self.init = init;
        self.getItemList = getItemList;
        self.getItemListSize = getItemListSize;
        self.getItemByTemplateID = getItemByTemplateID;
        self.addItem = addItem;
        self.removeItem = removeItem;

        function init() {
            SurveyItemContainerService.init();
            incrementalIDValue = 0;
        }

        function getItemList() {
            return SurveyItemContainerService.getItemList();
        }

        function getItemListSize() {
            return SurveyItemContainerService.getItemListSize();
        }

        function getItemByTemplateID(templateID) {
            return SurveyItemContainerService.getItemByTemplateID(templateID);
        }

        function addItem(itemType, templateIDPrefix) {
            var templateID = templateIDPrefix + getNextIncrementalGenerator();
            var item = SurveyItemContainerService.createItem(itemType, templateID);
            return item;
        }

        function removeItem(templateID) {
            SurveyItemContainerService.removeItem(templateID);
        }

        function getNextIncrementalGenerator() {
            return ++incrementalIDValue;
        }

    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
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

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return false;
        }

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
        .module('otusjs.surveyItem')
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

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return false;
        }

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
        .module('otusjs.surveyItem')
        .factory('AnswerOptionFactory', AnswerOptionFactory);

    AnswerOptionFactory.$inject = ['LabelFactory'];

    function AnswerOptionFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value, parentQuestionID) {
            return new AnswerOption(value, parentQuestionID, LabelFactory);
        }

        return self;
    }

    function AnswerOption(value, parentQuestionID, LabelFactory) {
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

        /* Public methods */
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
        .module('otusjs.surveyItem')
        .factory('CalendarQuestionFactory', CalendarQuestionFactory);

    CalendarQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
    ];

    function CalendarQuestionFactory(LabelFactory, MetadataGroupFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new CalendarQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory);
        }

        return self;
    }

    function CalendarQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'CalendarQuestion';
        self.templateID = templateID;
        self.dataType = 'LocalDate';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

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
        .module('otusjs.surveyItem')
        .factory('CheckboxQuestionFactory', CheckboxQuestionFactory);

    CheckboxQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
        'AnswerOptionFactory'
    ];

    function CheckboxQuestionFactory(LabelFactory, MetadataGroupFactory, AnswerOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new CheckboxQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, AnswerOptionFactory);
        }

        return self;
    }

    function CheckboxQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, AnswerOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'CheckboxQuestion';
        self.templateID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.options = [];

        /* Public methods */
        self.getOptionListSize = getOptionListSize;
        self.getOptionByValue = getOptionByValue;
        self.createOption = createOption;
        self.removeOption = removeOption;
        self.removeLastOption = removeLastOption;
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function getOptionListSize() {
            return self.options.length;
        }

        function getOptionByValue(value) {
            return self.options[value - 1];
        }

        function isQuestion() {
            return true;
        }

        function createOption() {
            var option = AnswerOptionFactory.create(self.options.length + 1);
            self.options.push(option);
            return option;
        }

        function removeOption(value) {
            self.options.splice((value - 1), 1);
            reorderOptionValues();
        }

        function removeLastOption() {
            self.options.splice(-1, 1);
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.options = self.options;
            json.metadata = self.metadata;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }

        function reorderOptionValues() {
            self.options.forEach(function(option, index) {
                option.value = ++index;
            });
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('DecimalQuestionFactory', DecimalQuestionFactory);

    DecimalQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
        'UnitFactory'
    ];

    function DecimalQuestionFactory(LabelFactory, MetadataGroupFactory, UnitFactory) {
        var self = this;
        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new DecimalQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory);
        }

        return self;
    }

    function DecimalQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'DecimalQuestion';
        self.templateID = templateID;
        self.dataType = 'Decimal';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.unit = {
            ptBR: UnitFactory.create(),
            enUS: UnitFactory.create(),
            esES: UnitFactory.create()
        };

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

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
        .module('otusjs.surveyItem')
        .factory('EmailQuestionFactory', EmailQuestionFactory);

    EmailQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
    ];

    function EmailQuestionFactory(LabelFactory, MetadataGroupFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new EmailQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory);
        }

        return self;
    }

    function EmailQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'EmailQuestion';
        self.templateID = templateID;
        self.dataType = 'String';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

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
        .module('otusjs.surveyItem')
        .factory('IntegerQuestionFactory', IntegerQuestionFactory);

    IntegerQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
        'UnitFactory'
    ];

    function IntegerQuestionFactory(LabelFactory, MetadataGroupFactory, UnitFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new IntegerQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory);
        }

        return self;
    }

    function IntegerQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'IntegerQuestion';
        self.templateID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.unit = {
            ptBR: UnitFactory.create(),
            enUS: UnitFactory.create(),
            esES: UnitFactory.create()
        };

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

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
        .module('otusjs.surveyItem')
        .factory('PhoneQuestionFactory', PhoneQuestionFactory);

    PhoneQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
    ];

    function PhoneQuestionFactory(LabelFactory, MetadataGroupFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new PhoneQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory);
        }

        return self;
    }

    function PhoneQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'PhoneQuestion';
        self.templateID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

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
        .module('otusjs.surveyItem')
        .factory('SingleSelectionQuestionFactory', SingleSelectionQuestionFactory);

    SingleSelectionQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
        'AnswerOptionFactory'
    ];

    function SingleSelectionQuestionFactory(LabelFactory, MetadataGroupFactory, AnswerOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new SingleSelectionQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, AnswerOptionFactory);
        }

        return self;
    }

    function SingleSelectionQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, AnswerOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'SingleSelectionQuestion';
        self.templateID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.options = [];

        /* Public methods */
        self.getOptionListSize = getOptionListSize;
        self.getOptionByValue = getOptionByValue;
        self.createOption = createOption;
        self.removeOption = removeOption;
        self.removeLastOption = removeLastOption;
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function getOptionListSize() {
            return self.options.length;
        }

        function getOptionByValue(value) {
            return self.options[value - 1];
        }

        function isQuestion() {
            return true;
        }

        function createOption() {
            var option = AnswerOptionFactory.create(self.options.length + 1);
            self.options.push(option);
            return option;
        }

        function removeOption(value) {
            self.options.splice((value - 1), 1);
            reorderOptionValues();
        }

        function removeLastOption() {
            self.options.splice(-1, 1);
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.options = self.options;
            json.metadata = self.metadata;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }

        function reorderOptionValues() {
            self.options.forEach(function(option, index) {
                option.value = ++index;
            });
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('TextQuestionFactory', TextQuestionFactory);

    TextQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
    ];

    function TextQuestionFactory(LabelFactory, MetadataGroupFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new TextQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory);
        }

        return self;
    }

    function TextQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'TextQuestion';
        self.templateID = templateID;
        self.dataType = 'String';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

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
        .module('otusjs.surveyItem')
        .factory('TimeQuestionFactory', TimeQuestionFactory);

    TimeQuestionFactory.$inject = [
        'LabelFactory',
        'MetadataGroupFactory',
    ];

    function TimeQuestionFactory(LabelFactory, MetadataGroupFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new TimeQuestion(templateID, prototype,LabelFactory, MetadataGroupFactory);
        }

        return self;
    }

    function TimeQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'TimeQuestion';
        self.templateID = templateID;
        self.dataType = 'LocalTime';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

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
