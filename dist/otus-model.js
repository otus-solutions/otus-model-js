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
    .module('otusjs.model.navigation', []);

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
        .module('otusjs.validation', []);

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
      'otusjs.model.navigation',
      'otusjs.validation',
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
            var question = QuestionFillFactory.create(questionID, answer, metadata, comment);
            self.activitySurvey.fillContainer.updateFilling(question);
            //console.log(self.activitySurvey);
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
        .module('otusjs.validation')
        .service('AddFillingRulesService', AddFillingRulesService);


    function AddFillingRulesService(){
        var self = this;

        self.execute = execute;

        function execute(item, validatorType) {
            return item.fillingRules.createOption(validatorType);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .service('RemoveFillingRulesWorkService', RemoveFillingRulesWorkService);

    function RemoveFillingRulesWorkService() {
        var self = this;

        self.execute = execute;

        function execute(item, fillingRuleType) {
            item.fillingRules.removeFillingRules(fillingRuleType);
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
        .module('otusjs.surveyItem')
        .service('UpdateSurveyItemCustomID', UpdateSurveyItemCustomID);

    function UpdateSurveyItemCustomID() {
        var self = this;

        self.execute = execute;

        function execute(item, id) {
            // it needs a service to validate if is a valid or available id
            item.customID = id;
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

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationApiService', service);

  service.$inject = [
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.RouteConditionFactory',
    'otusjs.model.navigation.RuleFactory'
  ];

  function service(RouteFactory, RouteConditionFactory, RuleFactory) {
    var self = this;

    /* Public methods */
    self.addRoute = addRoute;
    self.addRouteCondition = addRouteCondition;
    self.addConditionRule = addConditionRule;
    self.removeRoute = removeRoute;
    self.removeRouteCondition = removeRouteCondition;
    self.removeConditionRule = removeConditionRule;

    function addRoute(routeData, navigation) {
      var route = RouteFactory.create(routeData.name, routeData.origin, routeData.destination);
      navigation.addRoute(route);
      return route;
    }

    function addRouteCondition(conditionName, route) {
      var routeCondition = RouteConditionFactory.create(conditionName);
      route.addCondition(routeCondition);
      return routeCondition;
    }

    function addConditionRule(ruleData, routeCondition) {
      var newRule = RuleFactory.create(ruleData.when, ruleData.operator, ruleData.answer);
      routeCondition.addRule(newRule);
      return newRule;
    }

    function removeRoute() {
      routeData.parentNavigation.removeRoute(routeData.name);
    }

    function removeRouteCondition() {

    }

    function removeConditionRule() {
      route.conditions[0].removeRule(rule);
    }
  }
})();

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
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.ExceptionService', service);

  function service() {
    var self = this;

    self.InvalidStateError = createErrorType('InvalidStateError');

    function createErrorType(name) {
      function E(message) {
        this.message = message;
      }
      E.prototype = Object.create(Error.prototype);
      E.prototype.name = name;
      E.prototype.constructor = E;
      return E;
    }
  }
}());

(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.NavigationFactory', factory);

  factory.$inject = [
    'otusjs.model.navigation.RouteFactory'
  ];

  var Inject = {
    RouteFactory: null
  };

  function factory(RouteFactory) {
    var self = this;

    Inject.RouteFactory = RouteFactory;

    self.create = create;
    self.fromJson = fromJson;

    function create(origin, destination) {
      if (!origin || !destination) {
        return null;
      }

      var defaultRoute = RouteFactory.createDefault(origin, destination);
      if (!defaultRoute) {
        return null;
      }

      defaultRoute.index = 0;
      return new Navigation(origin, defaultRoute);
    }

    function fromJson(json) {
      var jsonObj = _parse(json);

      if (!jsonObj.routes || !jsonObj.routes.length) {
        return null;
      }

      var navigation = create(jsonObj.origin, jsonObj.routes[0].destination);

      if (navigation) {
        navigation.index = jsonObj.index;
        navigation.inNavigations = jsonObj.inNavigations;
        navigation.isDefault = jsonObj.isDefault;
        navigation.routes = jsonObj.routes.map(function(route) {
          return RouteFactory.fromJson(JSON.stringify(route));
        });
      }

      return navigation;
    }

    function _parse(json) {
      if (typeof json === 'string') {
        return JSON.parse(json);
      } else if (typeof json === 'object') {
        return JSON.parse(JSON.stringify(json));
      }
    }

    return self;
  }

  function Navigation(origin, defaultRoute) {
    var self = this;
    var _defaultRoute = defaultRoute;

    /* Object properties */
    self.extents = 'SurveyTemplateObject';
    self.objectType = 'Navigation';
    self.origin = origin;
    self.index = null;
    self.isDefault = true;
    self.inNavigations = [];
    self.routes = [defaultRoute];

    /* Public methods */
    self.listRoutes = listRoutes;
    self.getRoute = getRoute;
    self.getDefaultRoute = getDefaultRoute;
    self.setupDefaultRoute = setupDefaultRoute;
    self.createAlternativeRoute = createAlternativeRoute;
    self.removeRouteByName = removeRouteByName;
    self.updateRoute = updateRoute;
    self.hasRoute = hasRoute;
    self.addInNavigation = addInNavigation;
    self.removeInNavigation = removeInNavigation;
    self.updateInNavigation = updateInNavigation;
    self.isOrphan = isOrphan;
    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJson = toJson;

    function listRoutes() {
      var clone = [];

      clone = self.routes.map(function(route) {
        if (route) {
          return route.clone();
        } else {
          return null;
        }
      });

      return clone;
    }

    function getRoute(routeData) {
      var routeToReturn = null;

      self.routes.some(function(route) {
        if (route.name === routeData.name) {
          routeToReturn = route;
          return true;
        } else {
          return false;
        }
      });

      return routeToReturn.clone();
    }

    function getDefaultRoute() {
      if (!_defaultRoute) {
        return null;
      } else {
        return _defaultRoute.clone();
      }
    }

    function createAlternativeRoute(routeData) {
      var origin = routeData.origin;
      var destination = routeData.destination;
      var conditions = routeData.conditions;
      var route = Inject.RouteFactory.createAlternative(origin, destination, conditions);

      if (route && route.conditions.length && !_routeExists(route)) {
        routeData.conditions.map(route.addCondition);
        route.isDefault = false;
        self.routes.push(route);
      }
    }

    function removeRouteByName(name) {
      self.routes.some(function(route, index) {
        if (route.name === name) {
          self.routes.splice(index, 1);
          if (route.isDefault) {
            _defaultRoute = null;
          }
          return true;
        }
      });
    }

    function updateRoute(route) {
      self.routes.some(function(currentRoute, index) {
        if (_isCurrentDefaultRoute(route)) {
          if (route.isDefault) {
            _updateDefaultRoute(route);
          } else {
            _removeDefaultRoute();
            createAlternativeRoute(route);
          }
          return true;
        } else {
          if (route.isDefault) {
            self.routes.splice(index, 1);
            setupDefaultRoute(route);
          } else {
            self.routes[index] = route;
          }
        }
      });
    }

    function setupDefaultRoute(route) {
      if (self.routes[0]) {
        if (!self.routes[0].isDefault) {
          self.routes.unshift(route);
        } else {
          if (hasRoute(route)) {
            updateRoute(route);
          } else {            
            _defaultRoute = route;
            self.routes[0] = _defaultRoute;
          }
        }
      } else {
        _defaultRoute = route;
        self.routes.push(_defaultRoute);
      }
    }

    function hasRoute(routeData) {
      if (routeData.name) {
        return self.routes.some(function(route) {
          return route.name === routeData.name;
        });
      } else if (routeData.origin && routeData.destination) {
        return self.routes.some(function(route) {
          return (route.origin === routeData.origin && route.destination === routeData.destination);
        });
      } else {
        // TODO Lançar uma exceção aqui porque ficou impossível de determinar
        return undefined;
      }
    }

    function addInNavigation(navigation) {
      self.inNavigations.push(navigation);
      self.isDefault = self.inNavigations.some(function(inNavigation) {
        return inNavigation.isDefaultPath && inNavigation.isDefaultRoute;
      });
    }

    function removeInNavigation(origin) {
      self.inNavigations.some(function(navigation, index) {
        if (navigation === origin) {
          self.inNavigations.splice(index, 1);
          return true;
        }
      });
    }

    function updateInNavigation(navigation) {
      self.inNavigations.some(function(inNavigation, index) {
        if (inNavigation.origin === navigation.origin) {
          self.inNavigations[index] = navigation;
          return true;
        }
      });

      self.isDefault = self.inNavigations.some(function(inNavigation) {
        return inNavigation.isDefaultPath && inNavigation.isDefaultRoute;
      });
    }

    function isOrphan() {
      return !self.inNavigations.length && self.index > 0;
    }

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.index !== self.index) {
        return false;
      }

      if (other.routes.length === self.routes.length) {

        if (self.routes.length > 0) {
          var hasEqualRoutes = other.routes.some(function(otherRoute) {
            return self.routes.some(function(selfRoute) {
              return selfRoute.equals(otherRoute);
            });
          });

          if (!hasEqualRoutes) {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }

      return true;
    }

    function selfsame(other) {
      return Object.is(self, other);
    }

    function clone() {
      return Object.assign(new Navigation(), self);
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.index = self.index;
      json.isDefault = self.isDefault;
      json.inNavigations = self.inNavigations;
      json.routes = self.routes.map(function(route) {
        return route.toJson();
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }

    function _routeExists(newRoute) {
      return self.routes.some(function(route) {
        return route && newRoute.equals(route);
      });
    }

    function _isCurrentDefaultRoute(route) {
      return (_defaultRoute && route.name === _defaultRoute.name);
    }

    function _updateDefaultRoute(route) {
      _defaultRoute = route;
      _defaultRoute.conditions = [];
      self.routes[0] = _defaultRoute;
    }

    function _removeDefaultRoute() {
      _defaultRoute = null;
      self.routes.shift();
    }
  }
}());

(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.RouteConditionFactory', factory);

  factory.$inject = [
    'otusjs.model.navigation.RuleFactory'
  ];

  function factory(RuleFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(name, rules) {
      if (rules && rules.length) {
        return new RouteCondition(name, rules);
      } else {
        return null;
      }
    }

    function fromJson(json) {
      var jsonObj = JSON.parse(json);
      var rules = jsonObj.rules.map(_rebuildRules);
      return create(jsonObj.name, rules);
    }

    function _rebuildRules(ruleJson) {
      return RuleFactory.fromJson(JSON.stringify(ruleJson));
    }

    return self;
  }

  function RouteCondition(name, rules) {
    var self = this;

    self.extents = 'SurveyTemplateObject';
    self.objectType = 'RouteCondition';
    self.name = name || 'ROUTE_CONDITION';
    self.index = null;
    self.rules = [];

    /* Public methods */
    self.addRule = addRule;
    self.removeRule = removeRule;
    self.updateRule = updateRule;
    self.listRules = listRules;
    self.getRuleByIndex = getRuleByIndex;

    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJson = toJson;

    _init();

    function addRule(newRule) {
      if (!_ruleExists(newRule)) {
        self.rules.push(newRule);
      }
    }

    function removeRule(rule) {
      if (self.rules.length > 1) {
        var index = self.rules.indexOf(rule);
        if (index > -1) {
          self.rules.splice(index, 1);
        }
      }
    }

    function updateRule(rule) {
      var indexToUpdate = _findRuleIndex(rule);
      var ruleToUpdate = getRuleByIndex(indexToUpdate);
      ruleToUpdate.when = rule.when;
      ruleToUpdate[rule.operator](rule.answer);
    }

    function listRules() {
      var clone = [];

      self.rules.forEach(function(rule) {
        clone.push(rule.clone());
      });

      return clone;
    }

    function getRuleByIndex(index) {
      return self.rules[index];
    }

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.name !== self.name) {
        return false;
      }

      if (other.rules.length === self.rules.length) {
        if (self.rules.length > 0) {
          var hasEqualRules = other.rules.some(function(otherRule) {
            return self.rules.some(function(selfRule) {
              return selfRule.equals(otherRule);
            });
          });

          if (!hasEqualRules) {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }

      return true;
    }

    function selfsame(other) {
      return Object.is(self, other);
    }

    function clone() {
      return Object.assign(new RouteCondition(self.name, self.rules), self);
    }

    function toJson() {
      var json = {};

      json.extents = 'StudioObject';
      json.objectType = 'RouteCondition';
      json.name = self.name;
      json.rules = self.rules.map(function(rule) {
        return rule.toJson();
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }

    function _init() {
      rules.map(self.addRule);
    }

    function _ruleExists(newRule) {
      if (_findRuleIndex(newRule) > -1) {
        return true;
      } else {
        return false;
      }
    }

    function _findRuleIndex(ruleToSearch) {
      var result = -1;
      self.rules.some(function(rule, index) {
        if (ruleToSearch.equals(rule)) {
          result = index;
          return true;
        }
      });
      return result;
    }
  }
}());

(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.RouteFactory', factory);

  factory.$inject = [
    'otusjs.model.navigation.RouteConditionFactory'
  ];

  function factory(RouteConditionFactory) {
    var self = this;

    /* Public interface */
    self.createAlternative = createAlternative;
    self.createDefault = createDefault;
    self.fromJson = fromJson;

    function createDefault(origin, destination) {
      var route = new Route(origin, destination, null);

      if (route) {
        route.isDefault = true;
      }

      return route;
    }

    function createAlternative(origin, destination, conditions) {
      if (conditions && conditions.length) {
        return new Route(origin, destination, conditions);
      } else {
        return null;
      }
    }

    function fromJson(json) {
      var jsonObj = JSON.parse(json);
      var route = null;
      if (jsonObj.isDefault) {
        route = createDefault(jsonObj.origin, jsonObj.destination);
      } else {
        route = createAlternative(jsonObj.origin, jsonObj.destination, jsonObj.conditions);
      }
      route.conditions = jsonObj.conditions.map(_rebuildConditions);
      route.isDefault = jsonObj.isDefault;
      return route;
    }

    function _rebuildConditions(condition) {
      condition = (condition instanceof Object) ? JSON.stringify(condition) : condition;
      return RouteConditionFactory.fromJson(condition);
    }

    return self;
  }

  function Route(routeOrigin, routeDestination, conditions) {
    var self = this;

    self.extents = 'SurveyTemplateObject';
    self.objectType = 'Route';
    self.origin = routeOrigin;
    self.destination = routeDestination;
    self.name = routeOrigin + '_' + routeDestination;
    self.isDefault = false;
    self.conditions = [];

    /* Public interface */
    self.listConditions = listConditions;
    self.addCondition = addCondition;
    self.removeCondition = removeCondition;
    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJson = toJson;

    _init();

    function listConditions() {
      var clone = [];

      self.conditions.forEach(function(condition) {
        clone.push(condition);
      });

      return clone;
    }

    function addCondition(condition) {
      if (!self.isDefault && !_conditionExists(condition)) {
        self.conditions.push(condition);
      }
    }

    function removeCondition(condition) {
      if (self.conditions.length > 1) {
        var index = self.conditions.indexOf(condition);
        if (index > -1) {
          self.conditions.splice(index, 1);
        }
      }
    }

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.origin !== self.origin) {
        return false;
      }

      if (other.destination !== self.destination) {
        return false;
      }

      if (other.name !== self.name) {
        return false;
      }

      if (other.conditions.length === self.conditions.length) {
        if (self.conditions.length > 0) {
          var hasEqualConditions = other.conditions.some(function(otherCondition) {
            return self.conditions.some(function(selfCondition) {
              return selfCondition.equals(otherCondition);
            });
          });

          if (!hasEqualConditions) {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }

      return true;
    }

    function selfsame(other) {
      return Object.is(self, other);
    }

    function clone() {
      return Object.assign(new Route(), self);
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.destination = self.destination;
      json.name = self.name;
      json.isDefault = self.isDefault;
      json.conditions = self.conditions.map(function(condition) {
        return condition.toJson();
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }

    function _init() {
      if (conditions) {
        conditions.map(self.addCondition);
      }
    }

    function _conditionExists(newCondition) {
      return self.conditions.some(function(condition) {
        return newCondition.equals(condition);
      });
    }
  }
}());

(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.RuleFactory', factory);

  function factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(when, operator, answer) {
      return new Rule(when, operator, answer);
    }

    function fromJson(json) {
      var jsonObj = JSON.parse(json);
      var rule = new Rule(jsonObj.when, jsonObj.operator, jsonObj.answer);
      return rule;
    }

    return self;
  }

  function Rule(when, operator, answer) {
    var self = this;

    self.extents = 'SurveyTemplateObject';
    self.objectType = 'Rule';
    self.when = when;
    self.operator = operator;
    self.answer = answer;

    /* Public methods */
    self.within = within;
    self.equal = equal;
    self.notEqual = notEqual;
    self.greater = greater;
    self.greaterEqual = greaterEqual;
    self.lower = lower;
    self.lowerEqual = lowerEqual;
    self.between = between;
    self.contains = contains;

    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJson = toJson;

    function within(arrayValues) {
      defineAnswer('within', arrayValues);
    }

    function notEqual(value) {
      defineAnswer('notEqual', value);
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
      self.operator = operator;
      self.answer = value;
    }

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.when !== self.when) {
        return false;
      }

      if (other.operator !== self.operator) {
        return false;
      }

      if (other.answer !== self.answer) {
        return false;
      }

      return true;
    }

    function selfsame(other) {
      return Object.is(self, other);
    }

    function clone() {
      var clone = new Rule();
      return Object.assign(clone, self);
    }

    function toJson() {
      var json = {}

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.when = self.when;
      json.operator = self.operator;
      json.answer = self.answer;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }
}());

(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationContainerService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationFactory'
  ];

  function service(NavigationFactory) {
    var self = this;
    var _navigationList = []; // TODO: To implement Immutable collection

    /* Public methods */
    self.init = init;
    self.loadJsonData = loadJsonData;
    self.manageNavigation = manageNavigation;
    self.getNavigationByOrigin = getNavigationByOrigin;
    self.getNavigationByPosition = getNavigationByPosition;
    self.getNavigationPosition = getNavigationPosition;
    self.getNavigationList = getNavigationList;
    self.getNavigationListSize = getNavigationListSize;
    self.getOrphanNavigations = getOrphanNavigations;
    self.existsNavigationTo = existsNavigationTo;
    self.createNavigationTo = createNavigationTo;
    self.removeNavigationOf = removeNavigationOf;
    self.removeNavigationByIndex = removeNavigationByIndex;
    self.removeCurrentLastNavigation = removeCurrentLastNavigation;

    function init() {
      _navigationList = [];
    }

    function loadJsonData(data) {
      init();
      data.forEach(function(navigationData) {
        _navigationList.push(NavigationFactory.fromJson(navigationData));
      });
    }

    function manageNavigation(navigationToManage) {
      _navigationList = navigationToManage;
    }

    function getNavigationList() {
      return _navigationList;
    }

    function getNavigationListSize() {
      return _navigationList.length;
    }

    function getNavigationByOrigin(origin) {
      var filter = _navigationList.filter(function(navigation) {
        return findByOrigin(navigation, origin);
      });

      return filter[0];
    }

    function getNavigationByPosition(position) {
      return _navigationList[position];
    }

    function getNavigationPosition(origin) {
      var navigation = getNavigationByOrigin(origin);
      if (navigation) {
        return _navigationList.indexOf(navigation);
      } else {
        return null;
      }
    }

    function getOrphanNavigations() {
      var orphans = _navigationList.filter(function(navigation) {
        return navigation.isOrphan();
      });

      return orphans;
    }

    function existsNavigationTo(origin) {
      return (getNavigationByOrigin(origin)) ? true : false;
    }

    function createNavigationTo(origin, destination) {
      var newNavigation = NavigationFactory.create(origin, destination);
      newNavigation.index = _navigationList.length;
      _navigationList.push(newNavigation);
    }

    function removeNavigationOf(questionID) {
      var navigationToRemove = _navigationList.filter(function(navigation) {
        return findByOrigin(navigation, questionID);
      });

      var indexToRemove = _navigationList.indexOf(navigationToRemove[0]);
      if (indexToRemove > -1) {
        _navigationList.splice(indexToRemove, 1);
      }
    }

    function removeNavigationByIndex(indexToRemove) {
      _navigationList.splice(indexToRemove, 1);
    }

    function removeCurrentLastNavigation() {
      _navigationList.splice(-1, 1);
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
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationManagerService', service);

  service.$inject = [
    'SurveyItemManagerService',
    'otusjs.model.navigation.NavigationContainerService',
    'otusjs.model.navigation.NavigationAddService',
    'otusjs.model.navigation.NavigationRemoveService',
    'otusjs.model.navigation.AddRouteTaskService',
    'otusjs.model.navigation.RemoveRouteTaskService',
    'otusjs.model.navigation.UpdateRouteTaskService',
    'otusjs.model.navigation.NavigationValidatorService'
  ];

  function service(SurveyItemManagerService, NavigationContainerService, NavigationAddService, NavigationRemoveService, AddRouteTaskService, RemoveRouteTaskService, UpdateRouteTaskService, NavigationValidatorService) {
    var self = this;
    var _selectedNavigation = null;

    /* Public interface */
    self.init = init;
    self.loadJsonData = loadJsonData;
    self.getNavigationList = getNavigationList;
    self.getDefaultNavigationPath = getDefaultNavigationPath;
    self.selectNavigationByOrigin = selectNavigationByOrigin;
    self.selectedNavigation = selectedNavigation;
    self.addNavigation = addNavigation;
    self.applyRoute = applyRoute;
    self.deleteRoute = deleteRoute;
    self.removeNavigation = removeNavigation;
    self.getAvaiableRuleCriterionTargets = getAvaiableRuleCriterionTargets;
    self.listOrphanNavigations = listOrphanNavigations;

    function init() {
      NavigationContainerService.init();
    }

    function loadJsonData(data) {
      NavigationContainerService.loadJsonData(data);
    }

    function getNavigationList() {
      return NavigationContainerService.getNavigationList();
    }

    function getDefaultNavigationPath() {
      var navigations = getNavigationList();
      var currentPathState = navigations[0];
      var defaultPath = [currentPathState];

      navigations.forEach(function(navigation) {
        if (navigation.origin === currentPathState.getDefaultRoute().destination) {
          defaultPath.push(navigation);
          currentPathState = navigation;
        }
      });

      return defaultPath;
    }

    function selectNavigationByOrigin(origin) {
      _selectedNavigation = NavigationContainerService.getNavigationByOrigin(origin);
      return _selectedNavigation;
    }

    function selectedNavigation() {
      return _selectedNavigation;
    }

    function addNavigation() {
      NavigationAddService.execute();
    }

    function applyRoute(routeData) {
      // if (NavigationValidatorService.isRouteValid(routeData.origin, routeData.destination)) {
        if (_selectedNavigation.hasRoute(routeData)) {
          return UpdateRouteTaskService.execute(routeData, _selectedNavigation);
        } else {
          return AddRouteTaskService.execute(routeData, _selectedNavigation);
        }
      // }
    }

    function deleteRoute(routeData) {
      RemoveRouteTaskService.execute(routeData, _selectedNavigation);
    }

    function removeNavigation(templateID) {
      NavigationRemoveService.execute(templateID);
    }

    function getAvaiableRuleCriterionTargets(referenceItemID) {
      var referenceItemIndex = SurveyItemManagerService.getItemPosition(referenceItemID);
      var allItems = SurveyItemManagerService.getItemList();

      var avaiableItems = allItems.filter(function(item, index) {
        return index <= referenceItemIndex;
      });

      return avaiableItems;
    }

    function listOrphanNavigations() {
      return NavigationContainerService.getOrphanNavigations();
    }
  }
}());

(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationValidatorService', service);

  service.$inject = [
    'SurveyItemContainerService'
  ];

  function service(SurveyItemContainerService) {
    var self = this;
    var itemList = [];

    /* Public methods */
    self.init = init;
    self.isRouteValid = isRouteValid;

    init();

    function init() {
      itemList = SurveyItemContainerService.getItemList();
    }

    function isRouteValid(origin, destination) {
      if (origin === destination) {
        return false;
      } else {
        var origenInList = _searchByID(origin);
        var destinationInList = _searchByID(destination);
        if (origenInList.index < destinationInList.index) {
          return true;
        } else {
          return false;
        }
      }
    }

    function _searchByID(questionID) {
      var result = null;

      itemList.forEach(function(question, index) {
        if (question.customID === questionID) {
          result = {};
          result.question = question;
          result.index = index;
        }
      });
      return result;
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
        .module('otusjs.survey')
        .factory('SurveyFactory', SurveyFactory);

    SurveyFactory.$inject = [
        'SurveyIdentityFactory',
        'SurveyMetaInfoFactory',
        'SurveyUUIDGenerator',
        'otusjs.model.navigation.NavigationManagerService',
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
        self.addItem = addItem;
        self.removeItem = removeItem;
        self.getItemByTemplateID = getItemByTemplateID;
        self.getItemByCustomID = getItemByCustomID;
        self.getItemByID = getItemByID;
        self.isAvailableID = isAvailableID;
        self.isAvailableCustomID = isAvailableCustomID;
        self.updateItem = updateItem;
        self.toJson = toJson;

        function getItemByTemplateID(templateID) {
            return self.SurveyItemManager.getItemByTemplateID(templateID);
        }

        function getItemByCustomID(customID) {
            return self.SurveyItemManager.getItemByCustomID(customID);
        }

        function getItemByID(id) {
            return self.SurveyItemManager.getItemByID(id);
        }

        function isAvailableID(id){
            return !self.SurveyItemManager.existsItem(id);
        }

        function isAvailableCustomID(id){
            return self.SurveyItemManager.isAvailableCustomID(id);
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
                if (navigation) {
                  json.navigationList.push(navigation.toJson());
                } else {
                  json.navigationList.push({});                  
                }
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
        .service('SurveyItemContainerService', SurveyItemContainerService);

    SurveyItemContainerService.$inject = ['SurveyItemFactory'];

    function SurveyItemContainerService(SurveyItemFactory) {
        var self = this;
        var itemList = []; // TODO: To implement Immutable collection

        /* Public methods */
        self.init = init;
        self.manageItems = manageItems;
        self.getItemList = getItemList;
        self.getItemListSize = getItemListSize;
        self.getItemByTemplateID = getItemByTemplateID;
        self.getItemByCustomID = getItemByCustomID;
        self.getItemByID = getItemByID;
        self.getAllCheckboxQuestion = getAllCheckboxQuestion;
        self.getItemByPosition = getItemByPosition;
        self.getItemPosition = getItemPosition;
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

        function getItemByCustomID(customID) {
            var filter = itemList.filter(function(item) {
                return findByCustomID(item, customID);
            });

            return filter[0];
        }

        function getItemByID(id) {
            var item = getItemByTemplateID(id);
            if(item) {
                return item;
            } else {
                return getItemByCustomID(id);
            }
        }

        function getAllCheckboxQuestion() {
            var occurences = [];
            itemList.filter(function(item) {
                if(item.objectType === "CheckboxQuestion") {
                    occurences.push(item);
                }
            });
            return occurences;
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

        function existsItem(id) {
            return (getItemByTemplateID(id) || getItemByCustomID(id)) ? true : false;
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
            return item.templateID.toLowerCase() === templateID.toLowerCase();
        }

        function findByCustomID(item, customID) {
            return item.customID.toLowerCase() === customID.toLowerCase();
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
        self.getItemByCustomID = getItemByCustomID;
        self.getItemByID = getItemByID;
        self.getItemPosition = getItemPosition;
        self.getAllCustomOptionsID = getAllCustomOptionsID;
        self.addItem = addItem;
        self.removeItem = removeItem;
        self.existsItem = existsItem;
        self.isAvailableCustomID = isAvailableCustomID;

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

        function getItemByCustomID(customID) {
            return SurveyItemContainerService.getItemByCustomID(customID);
        }

        function getItemByID(id) {
            return SurveyItemContainerService.getItemByID(id);
        }

        function getItemPosition(customID) {
            return SurveyItemContainerService.getItemPosition(customID);
        }

        function getAllCustomOptionsID() {
            var customOptionsID = [];
            var checkboxQuestions = SurveyItemContainerService.getAllCheckboxQuestion();
            if(checkboxQuestions.length > 0) {
                checkboxQuestions.forEach(function(checkboxQuestion){
                    checkboxQuestion.getAllCustomOptionsID().forEach(function(customOptionID){
                        customOptionsID.push(customOptionID);
                    });
                });
            }
            return customOptionsID;
        }

        function addItem(itemType, templateIDPrefix) {
            var templateID;
            do {
                templateID = templateIDPrefix + getNextIncrementalGenerator();
            } while (!isAvailableCustomID(templateID));
            var item = SurveyItemContainerService.createItem(itemType, templateID);
            return item;
        }

        function removeItem(templateID) {
            SurveyItemContainerService.removeItem(templateID);
        }

        function getNextIncrementalGenerator() {
            return ++incrementalIDValue;
        }

        function existsItem(id) {
            return SurveyItemContainerService.existsItem(id);
        }

        function isAvailableCustomID(id) {
            var foundCustomOptionID = false;
            getAllCustomOptionsID().forEach(function(customOptionID){
                if(customOptionID === id) {
                    foundCustomOptionID = true;
                }
            });
            return (getItemByCustomID(id) || foundCustomOptionID) ? false : true;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('FillingRulesDataFactory', FillingRulesDataFactory);

    FillingRulesDataFactory.$inject = [
        'AlphanumericValidatorFactory',
        'DistinctValidatorFactory',
        'FutureDateValidatorFactory',
        'InValidatorFactory',
        'LowerCaseValidatorFactory',
        'LowerLimitValidatorFactory',
        'MandatoryValidatorFactory',
        'MaxDateValidatorFactory',
        'MaxLengthValidatorFactory',
        'MaxTimeValidatorFactory',
        'MinDateValidatorFactory',
        'MinLengthValidatorFactory',
        'MinTimeValidatorFactory',
        'ParameterValidatorFactory',
        'PastDateValidatorFactory',
        'PrecisionValidatorFactory',
        'RangeDateValidatorFactory',
        'ScaleValidatorFactory',
        'SpecialsValidatorFactory',
        'UpperCaseValidatorFactory',
        'UpperLimitValidatorFactory'
    ];

    function FillingRulesDataFactory(AlphanumericValidatorFactory, DistinctValidatorFactory, FutureDateValidatorFactory, InValidatorFactory, LowerCaseValidatorFactory, LowerLimitValidatorFactory, MandatoryValidatorFactory, MaxDateValidatorFactory, MaxLengthValidatorFactory, MaxTimeValidatorFactory, MinDateValidatorFactory, MinLengthValidatorFactory, MinTimeValidatorFactory, ParameterValidatorFactory, PastDateValidatorFactory, PrecisionValidatorFactory, RangeDateValidatorFactory, ScaleValidatorFactory, SpecialsValidatorFactory, UpperCaseValidatorFactory, UpperLimitValidatorFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(validator) {
          return validatorsTemplates[validator].create();
        }

        var validatorsTemplates = {
            alphanumeric: AlphanumericValidatorFactory,
            distinct: DistinctValidatorFactory,
            futureDate: FutureDateValidatorFactory,
            in: InValidatorFactory,
            lowerLimit: LowerLimitValidatorFactory,
            lowerCase: LowerCaseValidatorFactory,
            mandatory: MandatoryValidatorFactory,
            maxDate: MaxDateValidatorFactory,
            maxLength: MaxLengthValidatorFactory,
            maxTime: MaxTimeValidatorFactory,
            minDate: MinDateValidatorFactory,
            minLength: MinLengthValidatorFactory,
            minTime: MinTimeValidatorFactory,
            parameter: ParameterValidatorFactory,
            pastDate: PastDateValidatorFactory,
            precision: PrecisionValidatorFactory,
            rangeDate: RangeDateValidatorFactory,
            scale: ScaleValidatorFactory,
            specials: SpecialsValidatorFactory,
            upperCase: UpperCaseValidatorFactory,
            upperLimit: UpperLimitValidatorFactory
        }


        return self;

    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('FillingRulesOptionFactory', FillingRulesOptionFactory);

    FillingRulesOptionFactory.$inject = ['RulesFactory'];

    function FillingRulesOptionFactory(RulesFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create() {
            return new FillingRules(RulesFactory);
        }

        return self;
    }

    function FillingRules(RulesFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'FillingRules';
        self.options = {};

        /* Public methods */
        self.createOption = createOption;
        self.removeFillingRules = removeFillingRules;

        function createOption(type) {
            var option = RulesFactory.create(type);
            self.options[type] = option;
            return option;
        }

        function removeFillingRules(type) {
            delete self.options[type];
        }

    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('RulesFactory', RulesFactory);

    RulesFactory.$inject = [
        'FillingRulesDataFactory'
    ];

    function RulesFactory(FillingRulesDataFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(validatorType) {
            return new Rule(FillingRulesDataFactory, validatorType);
        }

        return self;
    }

    function Rule(FillingRulesDataFactory, validatorType) {
        var self = this;
        self.extends = 'StudioObject';
        self.objectType = 'Rule';
        self.validatorType = validatorType;
        self.data = FillingRulesDataFactory.create(validatorType)
    }

}());

(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.AddRouteTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.RouteConditionFactory',
    'otusjs.model.navigation.RuleFactory',
    'otusjs.model.navigation.NavigationContainerService'
  ];

  function service(RouteFactory, RouteConditionFactory, RuleFactory, NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {

      var origin = routeData.origin;
      var destination = routeData.destination;
      var route = null;

      if (routeData.isDefault) {
        route = RouteFactory.createDefault(origin, destination);
        navigation.setupDefaultRoute(route);
      } else {
        var conditions = routeData.conditions.map(_setupConditions);
        route = RouteFactory.createAlternative(origin, destination, conditions);
        navigation.createAlternativeRoute(route);
      }

      var nextNavigation = NavigationContainerService.getNavigationByOrigin(routeData.destination);
      if (nextNavigation) {
        nextNavigation.addInNavigation({ origin: routeData.origin, isDefaultPath: navigation.isDefault, isDefaultRoute: route.isDefault });
      }

      return route;
    }

    function _setupConditions(conditionData) {
      var rules = conditionData.rules.map(_setupRules);
      return RouteConditionFactory.create(conditionData.name, rules);
    }

    function _setupRules(ruleData) {
      var when = ruleData.when.customID || ruleData.when;
      var operator = ruleData.operator.type || ruleData.operator;
      var answer = (ruleData.answer.option) ? ruleData.answer.option.value : ruleData.answer;
      return RuleFactory.create(when, operator, answer);
    }
  }
}());

(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationAddService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService',
    'SurveyItemContainerService'
  ];

  function service(NavigationContainerService, SurveyItemContainerService) {
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
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationRemoveService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService'
  ];

  function service(NavigationContainerService) {
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
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.RemoveRouteTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService'
  ]

  function service(NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      navigation.removeRouteByName(routeData.name);
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(routeData.destination);
      nextNavigation.removeInNavigation(routeData.origin);
    }
  }
}());

(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.UpdateRouteTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.RuleFactory',
    'otusjs.model.navigation.RouteConditionFactory',
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.NavigationContainerService'
  ];

  function service(RuleFactory, RouteConditionFactory, RouteFactory, NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      var origin = routeData.origin;
      var destination = routeData.destination;
      var route = null;

      if (routeData.isDefault) {
        route = RouteFactory.createDefault(origin, destination);
        navigation.setupDefaultRoute(route);
      } else {
        var conditions = routeData.conditions.map(_setupConditions);
        route = RouteFactory.createAlternative(origin, destination, conditions);
      }

      var nextNavigation = NavigationContainerService.getNavigationByOrigin(routeData.destination);
      if (nextNavigation) {
        nextNavigation.updateInNavigation({ origin: routeData.origin, isDefaultPath: navigation.isDefault, isDefaultRoute: route.isDefault });
      }

      return navigation.updateRoute(route);
    }

    function _setupConditions(conditionData) {
      var rules = conditionData.rules.map(_setupRules);
      return RouteConditionFactory.create(conditionData.name, rules);
    }

    function _setupRules(ruleData) {
      var when = ruleData.when.customID || ruleData.when;
      var operator = ruleData.operator.type || ruleData.operator;
      var answer = (ruleData.answer.option) ? ruleData.answer.option.value : ruleData.answer;
      return RuleFactory.create(when, operator, answer);
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
        self.customID = templateID;
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
            json.customID = self.customID;
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
        self.customID = templateID;
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
            json.customID = self.customID;
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
        'FillingRulesOptionFactory'
    ];

    function CalendarQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new CalendarQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function CalendarQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'CalendarQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'LocalDate';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.toJson = toJson;


        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory',
                'minDate',
                'maxDate',
                'rangeDate',
                'futureDate',
                'pastDate'
            ];
            return validatorsList;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.fillingRules = self.fillingRules;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .factory('CheckboxAnswerOptionFactory', CheckboxAnswerOptionFactory);

    CheckboxAnswerOptionFactory.$inject = ['LabelFactory'];

    function CheckboxAnswerOptionFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;
        self.createWithData = createWithData;

        function create(optionID) {
            return new CheckboxAnswerOption(optionID, LabelFactory);
        }

        function createWithData(checkboxAnswerOptionJSON) {
            var parsedJson = JSON.parse(checkboxAnswerOptionJSON);
            var CheckboxAnswerOptionObject = new CheckboxAnswerOption(parsedJson.optionID, LabelFactory);

            CheckboxAnswerOptionObject.optionID = parsedJson.optionID;
            CheckboxAnswerOptionObject.customOptionID = parsedJson.customOptionID;
            CheckboxAnswerOptionObject.label = parsedJson.label;

            return CheckboxAnswerOptionObject;
        }

        return self;
    }

    function CheckboxAnswerOption(optionID, LabelFactory) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'CheckboxAnswerOption';
        self.optionID = optionID;
        self.customOptionID = optionID;
        self.dataType = 'Boolean';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };

        /* Public methods */
        self.toJson = toJson;
        self.setCustomOptionID = setCustomOptionID;

        function setCustomOptionID(id) {
            self.customOptionID = id;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.optionID = self.optionID;
            json.customOptionID = self.customOptionID;
            json.dataType = self.dataType;
            json.label = self.label;

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
        'CheckboxAnswerOptionFactory',
        'FillingRulesOptionFactory'
    ];

    function CheckboxQuestionFactory(LabelFactory, MetadataGroupFactory, CheckboxAnswerOptionFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new CheckboxQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, CheckboxAnswerOptionFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function CheckboxQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, CheckboxAnswerOptionFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'CheckboxQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'Array';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();

        self.options = [];

        /* Public methods */
        self.getOptionList = getOptionList;
        self.getOptionListSize = getOptionListSize;
        self.getOptionByValue = getOptionByValue;
        self.getOptionByOptionID = getOptionByOptionID;
        self.getOptionByCustomOptionID = getOptionByCustomOptionID;
        self.createOption = createOption;
        self.loadJsonOption = loadJsonOption;
        self.removeOption = removeOption;
        self.removeLastOption = removeLastOption;
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.getAllCustomOptionsID = getAllCustomOptionsID;
        self.toJson = toJson;

        function getOptionList() {
            return self.options;
        }

        function getOptionListSize() {
            return self.options.length;
        }

        function getOptionByOptionID(optionID) {
            var aux = null;
            for (var i = 0; i < self.options.length; i++) {
                if (self.options[i].optionID === optionID) {
                    aux = self.options[i];
                }
            }
            return aux;
        }

        function getOptionByCustomOptionID(customOptionID) {
            var aux = null;
            for (var i = 0; i < self.options.length; i++) {
                if (self.options[i].customOptionID === customOptionID) {
                    aux = self.options[i];
                }
            }
            return aux;
        }

        function getOptionByValue(value) {
            return self.options[value - 1];
        }

        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory'
            ];
            return validatorsList;

        }

        function createOption(id) {
            var option = CheckboxAnswerOptionFactory.create(id);
            self.options.push(option);
            return option;
        }

        function loadJsonOption(checkboxAnswerOptionJSON) {
            var option = CheckboxAnswerOptionFactory.createWithData(checkboxAnswerOptionJSON);
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

        function getAllCustomOptionsID() {
            var customOptionsID = [];
            self.options.forEach(function(option){
                customOptionsID.push(option.customOptionID);
            });
            return customOptionsID;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.options = self.options;
            json.metadata = self.metadata;
            json.fillingRules = self.fillingRules;

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
        'UnitFactory',
        'FillingRulesOptionFactory'
    ];

    function DecimalQuestionFactory(LabelFactory, MetadataGroupFactory, UnitFactory, FillingRulesOptionFactory) {
        var self = this;
        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new DecimalQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function DecimalQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'DecimalQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'Decimal';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();
        self.unit = {
            ptBR: UnitFactory.create(),
            enUS: UnitFactory.create(),
            esES: UnitFactory.create()
        };

        /* Public methods */
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory',
                'distinct',
                'lowerLimit',
                'upperLimit',
                'in',
                'scale'
            ];

            return validatorsList;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.unit = self.unit;
            json.fillingRules = self.fillingRules;


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
        'FillingRulesOptionFactory'
    ];

    function EmailQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new EmailQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function EmailQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'EmailQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'String';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory'
            ];
            return validatorsList;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.fillingRules = self.fillingRules;


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
        'UnitFactory',
        'FillingRulesOptionFactory'
    ];

    function IntegerQuestionFactory(LabelFactory, MetadataGroupFactory, UnitFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new IntegerQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function IntegerQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, UnitFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'IntegerQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();
        self.unit = {
            ptBR: UnitFactory.create(),
            enUS: UnitFactory.create(),
            esES: UnitFactory.create()
        };

        /* Public methods */
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory',
                'distinct',
                'lowerLimit',
                'upperLimit',
                'precision',
                'in'
            ];
            return validatorsList;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.unit = self.unit;
            json.fillingRules = self.fillingRules;


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
        'FillingRulesOptionFactory'
    ];

    function PhoneQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new PhoneQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function PhoneQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'PhoneQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory'
            ];

            return validatorsList;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.unit = self.unit;
            json.fillingRules = self.fillingRules;


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
        'AnswerOptionFactory',
        'FillingRulesOptionFactory'
    ];

    function SingleSelectionQuestionFactory(LabelFactory, MetadataGroupFactory, AnswerOptionFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new SingleSelectionQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, AnswerOptionFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function SingleSelectionQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, AnswerOptionFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'SingleSelectionQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();
        self.options = [];

        /* Public methods */
        self.getOptionListSize = getOptionListSize;
        self.getOptionByValue = getOptionByValue;
        self.createOption = createOption;
        self.removeOption = removeOption;
        self.removeLastOption = removeLastOption;
        self.isQuestion = isQuestion;
        self.validators = validators;
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

        function validators() {
            var validatorsList = [
                'mandatory'
            ];
            return validatorsList;
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
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.options = self.options;
            json.metadata = self.metadata;
            json.fillingRules = self.fillingRules;

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
        'FillingRulesOptionFactory'
    ];

    function TextQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new TextQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function TextQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'TextQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'String';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory',
                'alphanumeric',
                'lowerCase',
                'minLength',
                'maxLength',
                'specials',
                'upperCase'
            ];
            return validatorsList;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.fillingRules = self.fillingRules;


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
        'FillingRulesOptionFactory'
    ];

    function TimeQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new TimeQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function TimeQuestion(templateID, prototype, LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'TimeQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'LocalTime';
        self.label = {
            ptBR: LabelFactory.create(),
            enUS: LabelFactory.create(),
            esES: LabelFactory.create()
        };
        self.metadata = MetadataGroupFactory.create();
        self.fillingRules = FillingRulesOptionFactory.create();

        /* Public methods */
        self.isQuestion = isQuestion;
        self.validators = validators;
        self.toJson = toJson;

        function isQuestion() {
            return true;
        }

        function validators() {
            var validatorsList = [
                'mandatory',
                'minTime',
                'maxTime'
                // 'parameter'
            ];
            return validatorsList
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.templateID = self.templateID;
            json.customID = self.customID;
            json.dataType = self.dataType;
            json.label = self.label;
            json.metadata = self.metadata;
            json.fillingRules = self.fillingRules;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('AlphanumericValidatorFactory', AlphanumericValidatorFactory);

    AlphanumericValidatorFactory.$inject = ['LabelFactory'];

    function AlphanumericValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new AlphanumericValidator(value, LabelFactory);
        }

        return self;
    }

    function AlphanumericValidator(value, LabelFactory) {
        var self = this;

        self.reference = true;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('DistinctValidatorFactory', DistinctValidatorFactory);

    DistinctValidatorFactory.$inject = ['LabelFactory'];

    function DistinctValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new DistinctValidatorFactory(value, LabelFactory);
        }

        return self;
    }

    function DistinctValidator(value, LabelFactory) {
        var self = this;

        self.reference = null;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('FutureDateValidatorFactory', FutureDateValidatorFactory);

    function FutureDateValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new FutureDateValidator(value);
        }

        return self;
    }

    function FutureDateValidator(value) {
        var self = this;

        self.reference = new Date();
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('InValidatorFactory', InValidatorFactory);

    InValidatorFactory.$inject = ['LabelFactory'];

    function InValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new InValidator(value, LabelFactory);
        }

        return self;
    }

    function InValidator(value, LabelFactory) {
        var self = this;

        self.reference = {'initial':null, 'end': null};
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('LowerCaseValidatorFactory', LowerCaseValidatorFactory);

    LowerCaseValidatorFactory.$inject = ['LabelFactory'];

    function LowerCaseValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new LowerCaseValidator(value, LabelFactory);
        }

        return self;
    }

    function LowerCaseValidator(value, LabelFactory) {
        var self = this;

        self.reference = true;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('LowerLimitValidatorFactory', LowerLimitValidatorFactory);

    LowerLimitValidatorFactory.$inject = ['LabelFactory'];

    function LowerLimitValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new LowerLimitValidator(value, LabelFactory);
        }

        return self;
    }

    function LowerLimitValidator(value, LabelFactory) {
        var self = this;

        self.reference = null;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MandatoryValidatorFactory', MandatoryValidatorFactory);

    MandatoryValidatorFactory.$inject = ['LabelFactory'];

    function MandatoryValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MandatoryValidator(value, LabelFactory);
        }

        return self;
    }

    function MandatoryValidator(value, LabelFactory) {
        var self = this;

        self.reference = false;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MaxDateValidatorFactory', MaxDateValidatorFactory);

    MaxDateValidatorFactory.$inject = ['LabelFactory'];

    function MaxDateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MaxDateValidator(value, LabelFactory);
        }

        return self;
    }

    function MaxDateValidator(value, LabelFactory) {
        var self = this;

        self.reference = new Date();
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MaxLengthValidatorFactory', MaxLengthValidatorFactory);

    MaxLengthValidatorFactory.$inject = ['LabelFactory'];

    function MaxLengthValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MaxLengthValidator(value, LabelFactory);
        }

        return self;
    }

    function MaxLengthValidator(value, LabelFactory) {
        var self = this;

        self.size = null;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MaxTimeValidatorFactory', MaxTimeValidatorFactory);

    MaxTimeValidatorFactory.$inject = ['LabelFactory'];

    function MaxTimeValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MaxTimeValidator(value, LabelFactory);
        }

        return self;
    }

    function MaxTimeValidator(value, LabelFactory) {
        var self = this;

        self.reference = '';
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MinDateValidatorFactory', MinDateValidatorFactory);

    MinDateValidatorFactory.$inject = ['LabelFactory'];

    function MinDateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MinDateValidator(value, LabelFactory);
        }

        return self;
    }

    function MinDateValidator(value, LabelFactory) {
        var self = this;

        self.reference = new Date();
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MinLengthValidatorFactory', MinLengthValidatorFactory);

    MinLengthValidatorFactory.$inject = ['LabelFactory'];

    function MinLengthValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MinLengthValidator(value, LabelFactory);
        }

        return self;
    }

    function MinLengthValidator(value, LabelFactory) {
        var self = this;

        self.size = null;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MinTimeValidatorFactory', MinTimeValidatorFactory);

    MinTimeValidatorFactory.$inject = ['LabelFactory'];

    function MinTimeValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MinTimeValidator(value, LabelFactory);
        }

        return self;
    }

    function MinTimeValidator(value, LabelFactory) {
        var self = this;

        self.reference = '';
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('ParameterValidatorFactory', ParameterValidatorFactory);

    ParameterValidatorFactory.$inject = ['LabelFactory'];

    function ParameterValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new ParameterValidator(value, LabelFactory);
        }

        return self;
    }

    function ParameterValidator(value, LabelFactory) {
        var self = this;

        self.reference = '';
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('PastDateValidatorFactory', PastDateValidatorFactory);

    PastDateValidatorFactory.$inject = ['LabelFactory'];

    function PastDateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new PastDateValidator(value, LabelFactory);
        }

        return self;
    }

    function PastDateValidator(value, LabelFactory) {
        var self = this;

        self.reference = new Date();
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('PrecisionValidatorFactory', PrecisionValidatorFactory);

    PrecisionValidatorFactory.$inject = ['LabelFactory'];

    function PrecisionValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new PrecisionValidator(value, LabelFactory);
        }

        return self;
    }

    function PrecisionValidator(value, LabelFactory) {
        var self = this;

        self.reference = null;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('RangeDateValidatorFactory', RangeDateValidatorFactory);

    RangeDateValidatorFactory.$inject = ['LabelFactory'];

    function RangeDateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new RangeDateValidator(value, LabelFactory);
        }

        return self;
    }

    function RangeDateValidator(value, LabelFactory) {
        var self = this;

        self.reference = {'initial': new Date(), 'end': new Date()};
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('ScaleValidatorFactory', ScaleValidatorFactory);

    ScaleValidatorFactory.$inject = ['LabelFactory'];

    function ScaleValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new ScaleValidator(value, LabelFactory);
        }

        return self;
    }

    function ScaleValidator(value, LabelFactory) {
        var self = this;

        self.reference = null;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('SpecialsValidatorFactory', SpecialsValidatorFactory);

    SpecialsValidatorFactory.$inject = ['LabelFactory'];

    function SpecialsValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new SpecialsValidator(value, LabelFactory);
        }

        return self;
    }

    function SpecialsValidator(value, LabelFactory) {
        var self = this;

        self.reference = true;

    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('UpperCaseValidatorFactory', UpperCaseValidatorFactory);

    UpperCaseValidatorFactory.$inject = ['LabelFactory'];

    function UpperCaseValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new UpperCaseValidator(value, LabelFactory);
        }

        return self;
    }

    function UpperCaseValidator(value, LabelFactory) {
        var self = this;

        self.reference = true;
    }

}());

(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('UpperLimitValidatorFactory', UpperLimitValidatorFactory);

    UpperLimitValidatorFactory.$inject = ['LabelFactory'];

    function UpperLimitValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new UpperLimitValidator(value, LabelFactory);
        }

        return self;
    }

    function UpperLimitValidator(value, LabelFactory) {
        var self = this;

        self.reference = null;
    }

}());
