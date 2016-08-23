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
    .module('otusjs.model.navigation', []);

}());

(function() {
    'use strict';

    angular
        .module('otusjs.misc', []);

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
      route.conditionSet[0].removeRule(rule);
    }
  }
})();

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
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.ExceptionService', service);

  function service() {
    var self = this;

    self.InvalidStateError = createErrorType('InvalidRouteException');

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
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.ExceptionService'
  ];

  function factory(RouteFactory, ExceptionService) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(origin, destination) {
      var navigation = new Navigation(origin, ExceptionService);

      if (destination) {
        var defaultRoute = RouteFactory.create('1', navigation.origin, destination);
        navigation.addRoute(defaultRoute);
      }

      return navigation;
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        var jsonObj = JSON.parse(json);
      } else if (typeof json === 'object') {
        var jsonObj = JSON.parse(JSON.stringify(json));
      }

      var navigation = new Navigation(jsonObj.origin);

      jsonObj.routes.forEach(function(route) {
        var newRoute = RouteFactory.fromJson(JSON.stringify(route));
        navigation.addRoute(newRoute);
      });

      return navigation;
    }

    return self;
  }

  function Navigation(origin, ExceptionService) {
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
      if (route.origin !== route.destination) {
        self.routes.push(route);
      } else {
        throw new ExceptionService.InvalidStateError('Rota que refere-se a si mesma diretamente');
      }
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

    function create(name) {
      return new RouteCondition(name);
    }

    function fromJson(json) {
      var jsonObj = JSON.parse(json);
      var condition = new RouteCondition(jsonObj.name);

      jsonObj.rules.forEach(function(rule) {
        var newRule = RuleFactory.fromJson(JSON.stringify(rule));
        condition.addRule(newRule);
      });

      return condition;
    }

    return self;
  }

  function RouteCondition(conditionName) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'RouteCondition';
    self.name = conditionName;
    self.rules = [];

    /* Public methods */
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
      var json = {};

      json.extents = 'StudioObject';
      json.objectType = 'RouteCondition';
      json.name = self.name;
      json.rules = [];

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
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.RouteFactory', factory);

  factory.$inject = [
    'otusjs.model.navigation.RouteConditionFactory'
  ];

  function factory(RouteConditionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(name, origin, destination) {
      return new Route(name, origin, destination);
    }

    function fromJson(json) {
      var jsonObj = JSON.parse(json);
      var route = new Route(jsonObj.name, jsonObj.origin, jsonObj.destination);

      jsonObj.conditionSet.forEach(function(condition) {
        condition = (condition instanceof Object) ? JSON.stringify(condition) : condition;
        var newCondition = RouteConditionFactory.fromJson(condition);
        route.addCondition(newCondition);
      });

      return route;
    }

    return self;
  }

  function Route(routeName, routeOrigin, routeDestination) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'Route';
    self.name = routeName;
    self.origin = routeOrigin;
    self.destination = routeDestination;
    self.conditionSet = [];

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
      return self.conditionSet.length;
    }

    function addCondition(condition) {
      condition.name += getConditionSetSize() + 1;
      self.conditionSet.push(condition);
    }

    function removeCondition(name) {
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
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.name = self.name;
      json.origin = self.origin;
      json.destination = self.destination;
      json.index = self.index;
      json.conditionSet = [];

      if (self.conditionSet) {
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
      var rule = new Rule(jsonObj.when);
      var operator;
      var answerValue;

      for (operator in jsonObj.answer) {
        answerValue = jsonObj.answer[operator];
        break;
      }

      rule.answer[operator] = answerValue;

      return rule;
    }

    return self;
  }

  function Rule(when, operator, answer) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'Rule';
    self.when = when;
    self.answer = answer || {};
    self.operator = operator;

    /* Public methods */
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
      self.answer = {};
      self.answer[operator] = value;
    }

    function toJson() {
      var json = {}

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
    .service('otusjs.model.navigation.NavigationContainerService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationFactory'
  ];

  function service(NavigationFactory) {
    var self = this;
    var navigationList = []; // TODO: To implement Immutable collection

    /* Public methods */
    self.init = init;
    self.loadJsonData = loadJsonData;
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

    function loadJsonData(data) {
      init();
      data.forEach(function(navigationData) {
        navigationList.push(NavigationFactory.fromJson(navigationData));
      });
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
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationManagerService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService',
    'otusjs.model.navigation.NavigationAddService',
    'otusjs.model.navigation.NavigationRemoveService',
    'SurveyItemManagerService'
  ];

  function service(NavigationContainerService, NavigationAddService, NavigationRemoveService, SurveyItemManagerService) {
    var self = this;

    /* Public interface */
    self.init = init;
    self.loadJsonData = loadJsonData;
    self.getNavigationList = getNavigationList;
    self.getNavigationByOrigin = getNavigationByOrigin;
    self.addNavigation = addNavigation;
    self.removeNavigation = removeNavigation;
    self.getAvaiableRuleCriterionTargets = getAvaiableRuleCriterionTargets;

    function init() {
      NavigationContainerService.init();
    }

    function loadJsonData(data) {
      NavigationContainerService.loadJsonData(data);
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

    function getAvaiableRuleCriterionTargets(referenceItemID) {
      var referenceItemIndex = SurveyItemManagerService.getItemPosition(referenceItemID);
      var allItems = SurveyItemManagerService.getItemList();

      var avaiableItems = allItems.filter(function(item, index) {
        return index < referenceItemIndex;
      });

      return avaiableItems;
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
