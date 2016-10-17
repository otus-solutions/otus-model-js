'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.activity', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.metadata', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.misc', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.survey', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.validation', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs', ['otusjs.survey', 'otusjs.model.activity', 'otusjs.surveyItem', 'otusjs.metadata', 'otusjs.misc', 'otusjs.model.navigation', 'otusjs.validation', 'utils']);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs').service('ModelFacadeService', ModelFacadeService);

    ModelFacadeService.$inject = [
    /* Question */
    'SurveyItemFactory',
    /* Setter */
    'IdiomFactory', 'UnitFactory',
    /* Structure */
    'SurveyFactory', 'SurveyIdentityFactory', 'MetadataGroupFactory'];

    function ModelFacadeService(SurveyItemFactory, IdiomFactory, UnitFactory, SurveyFactory, SurveyIdentityFactory, MetadataGroupFactory) {
        var self = this;

        /* Public interface */
        self.getSurveyItemFactory = getSurveyItemFactory;
        self.getIdiomFactory = getIdiomFactory;
        self.getUnitFactory = getUnitFactory;
        self.getSurveyFactory = getSurveyFactory;
        self.getSurveyIdentityFactory = getSurveyIdentityFactory;
        self.getMetadataGroupFactory = getMetadataGroupFactory;

        function getSurveyItemFactory() {
            return SurveyItemFactory;
        }

        function getIdiomFactory() {
            return IdiomFactory;
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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.ActivityFacadeService', ActivityFacadeService);

  ActivityFacadeService.$inject = ['otusjs.model.activity.AnswerFillFactory', 'otusjs.model.activity.MetadataFillFactory', 'otusjs.model.activity.QuestionFillFactory', 'otusjs.model.activity.ActivitySurveyFactory'];

  function ActivityFacadeService(AnswerFillFactory, MetadataFillFactory, QuestionFillFactory, ActivitySurveyFactory) {
    var self = this;
    self.surveyActivity = null;

    /* Public interface */
    self.createActivity = createActivity;
    self.createQuestionFill = createQuestionFill;
    self.fillQuestion = fillQuestion;
    self.openActivitySurvey = openActivitySurvey;
    self.initializeActivitySurvey = initializeActivitySurvey;
    self.getFillingByQuestionID = getFillingByQuestionID;

    function createActivity(template) {
      self.surveyActivity = ActivitySurveyFactory.create(template);
    }

    function openActivitySurvey() {
      self.surveyActivity.statusHistory.newOpenedRegistry();
    }

    function initializeActivitySurvey() {
      self.surveyActivity.statusHistory.newInitializedOnlineRegistry();
    }

    function createQuestionFill(question, answer, metadata, comment) {
      return QuestionFillFactory.create(question, answer, metadata, comment);
    }

    function fillQuestion(filling) {
      self.surveyActivity.fillContainer.updateFilling(filling);
    }

    function getFillingByQuestionID(questionID) {
      return self.surveyActivity.fillContainer.searchFillingByID(questionID);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.FillingManagerService', FillingManagerService);

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
      return result ? result.index : null;
    }

    function existsFillingTo(questionID) {
      return _searchByID(questionID) ? true : false;
    }

    function searchFillingByID(questionID) {
      var result = _searchByID(questionID);
      return result ? result.filling : null;
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

      fillingList.forEach(function (filling, index) {
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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.StatusHistoryManagerService', StatusHistoryManagerService);

  StatusHistoryManagerService.$inject = ['otusjs.model.activity.ActivityStatusFactory'];

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
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.activity').factory('otusjs.model.activity.ActivityParticipantDataFactory', ActivityParticipantDataFactory);

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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.activity').factory('otusjs.model.activity.ActivityStatusFactory', ActivityStatusFactory);

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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.ActivitySurveyFactory', ActivitySurveyFactory);

  ActivitySurveyFactory.$inject = ['otusjs.model.activity.StatusHistoryManagerService', 'otusjs.model.activity.FillingManagerService', 'otusjs.model.navigation.NavigationPathFactory'];

  function ActivitySurveyFactory(StatusHistoryManagerService, FillingManagerService, NavigationStackFactory) {
    var self = this;

    self.create = create;

    function create(template) {
      StatusHistoryManagerService.newCreatedRegistry({});
      FillingManagerService.init();
      StatusHistoryManagerService.init();
      return new ActivitySurvey(template, FillingManagerService, StatusHistoryManagerService, NavigationStackFactory);
    }

    return self;
  }

  function ActivitySurvey(template, FillingManagerService, StatusHistoryManagerService, NavigationStackFactory) {
    var self = this;

    self.objectType = 'Activity';
    //TODO: O modo de utilização deve ser revisto
    self.activityID = 1;
    self.template = template;
    self.fillContainer = FillingManagerService;
    self.statusHistory = StatusHistoryManagerService;
    self.navigationStack = NavigationStackFactory.create();

    /* Public methods */
    self.getNavigationStack = getNavigationStack;
    self.toJson = toJson;

    function getNavigationStack() {
      self.navigationStack.goToBeginning();
      return self.navigationStack;
    }

    function setNavigationStack(stack) {
      return self.navigationStack = stack;
    }

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.activityID = self.activityID;
      json.template = self.template.toJson();
      json.fillContainer = self.fillContainer;
      json.statusHistory = self.statusHistory;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
    }
  }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.activity').factory('otusjs.model.activity.ActivityUserFactory', ActivityUserFactory);

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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.AnswerFillFactory', AnswerFillFactory);

  AnswerFillFactory.$inject = ['otusjs.model.activity.AnswerEvaluationService'];

  function AnswerFillFactory(AnswerEvaluationService) {
    var self = this;

    /* Public interface */
    self.create = create;

    function create(questionType, value) {
      return new AnswerFill(value, AnswerEvaluationService.getEvaluator(questionType));
    }

    return self;
  }

  function AnswerFill(value, evaluator) {
    var self = this;

    self.objectType = 'AnswerFill';
    self.value = value === undefined ? null : value;
    self.eval = evaluator;

    /* Public methods */
    self.isFilled = isFilled;
    self.toJson = toJson;

    function isFilled() {
      return self.value ? true : false;
    }

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.value = self.value;

      return JSON.stringify(json);
    }
  }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.activity').factory('otusjs.model.activity.InterviewFactory', InterviewFactory);

    InterviewFactory.$inject = ['otusjs.model.activity.InterviewerFactory'];

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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.activity').factory('otusjs.model.activity.InterviewerFactory', InterviewerFactory);

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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.MetadataFillFactory', MetadataFillFactory);

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
    self.value = value === undefined ? null : value;

    /* Public methods */
    self.isFilled = isFilled;
    self.toJson = toJson;

    function isFilled() {
      return self.value ? true : false;
    }

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.value = self.value;

      return JSON.stringify(json);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.QuestionFillFactory', QuestionFillFactory);

  QuestionFillFactory.$inject = ['otusjs.model.activity.AnswerFillFactory', 'otusjs.model.activity.MetadataFillFactory'];

  function QuestionFillFactory(AnswerFillFactory, MetadataFillFactory) {
    var self = this;

    self.create = create;

    function create(item, answer, metadata, comment) {
      var answerFill = AnswerFillFactory.create(item.objectType, answer);
      var metadataFill = MetadataFillFactory.create(metadata);
      return new QuestionFill(item, answerFill, metadataFill, comment);
    }

    return self;
  }

  function QuestionFill(item, answer, metadata, comment) {
    var self = this;

    self.objectType = 'QuestionFill';
    self.questionID = item.customID;
    self.answer = answer;
    self.metadata = metadata;
    self.comment = comment === undefined ? '' : comment;
    self.isFilled = isFilled;

    /* Public methods */
    self.toJson = toJson;

    function isFilled() {
      return self.answer.isFilled() || self.metadata.isFilled() || !!self.comment;
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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.metadata').service('AddMetadataAnswerService', AddMetadataAnswerService);

    function AddMetadataAnswerService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            return item.metadata.createOption();
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.metadata').service('RemoveMetadataOptionService', RemoveMetadataOptionService);

    function RemoveMetadataOptionService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            item.metadata.removeLastOption();
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.validation').service('AddFillingRulesService', AddFillingRulesService);

    function AddFillingRulesService() {
        var self = this;

        self.execute = execute;

        function execute(item, validatorType) {
            return item.fillingRules.createOption(validatorType);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.validation').service('RemoveFillingRulesWorkService', RemoveFillingRulesWorkService);

    function RemoveFillingRulesWorkService() {
        var self = this;

        self.execute = execute;

        function execute(item, fillingRuleType) {
            item.fillingRules.removeFillingRules(fillingRuleType);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').service('AddAnswerOptionService', AddAnswerOptionService);

    function AddAnswerOptionService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            return item.createOption();
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').service('AddSurveyItemService', AddSurveyItemService);

    function AddSurveyItemService() {
        var self = this;

        self.execute = execute;

        function execute(itemType, survey) {
            return survey.addItem(itemType);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').service('RemoveAnswerOptionService', RemoveAnswerOptionService);

    function RemoveAnswerOptionService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            item.removeLastOption();
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').service('RemoveSurveyItemService', RemoveSurveyItemService);

    function RemoveSurveyItemService() {
        var self = this;

        self.execute = execute;

        function execute(item, survey) {
            survey.removeItem(item.templateID);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').service('UpdateSurveyItemCustomID', UpdateSurveyItemCustomID);

    function UpdateSurveyItemCustomID() {
        var self = this;

        self.execute = execute;

        function execute(item, id) {
            // it needs a service to validate if is a valid or available id
            item.customID = id;
        }
    }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.misc').factory('IdiomFactory', IdiomFactory);

  function IdiomFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new Idiom();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.IdiomFactory.fromJson() method expects to receive a object instead a String");
      }
      var label = new Idiom();

      label.oid = json.oid;
      label.plainText = json.plainText;
      label.formattedText = json.formattedText;

      return label;
    }

    return self;
  }

  function Idiom() {
    var self = this;

    self.extends = "StudioObject";
    self.objectType = "Label";
    self.oid = '';
    self.plainText = '';
    self.formattedText = '';
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.misc').factory('LabelFactory', LabelFactory);

  LabelFactory.$inject = ['IdiomFactory'];

  function LabelFactory(IdiomFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      var labelObject = {};

      labelObject.ptBR = IdiomFactory.create();
      labelObject.enUS = IdiomFactory.create();
      labelObject.esES = IdiomFactory.create();

      return labelObject;
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.LabelFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = {};

      labelObject.ptBR = IdiomFactory.fromJson(json.ptBR);
      labelObject.enUS = IdiomFactory.fromJson(json.enUS);
      labelObject.esES = IdiomFactory.fromJson(json.esES);

      return labelObject;
    }

    return self;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.misc').factory('UnitFactory', UnitFactory);

  function UnitFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new Unit();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.UnitFactory.fromJson() method expects to receive a object instead a String");
      }
      var unit = new Unit();

      unit.oid = json.oid;
      unit.plainText = json.plainText;
      unit.formattedText = json.formattedText;

      return unit;
    }

    return self;
  }

  function Unit() {
    var self = this;

    self.extends = "StudioObject";
    self.objectType = "Unit";
    self.oid = '';
    self.plainText = '';
    self.formattedText = '';
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.metadata').factory('MetadataAnswerFactory', MetadataAnswerFactory);

  MetadataAnswerFactory.$inject = ['LabelFactory'];

  function MetadataAnswerFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(value) {
      var labelObject = LabelFactory.create();
      return new MetadataAnswer(value, labelObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MetadataAnswerFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      return new MetadataAnswer(json.value, labelObject);
    }

    return self;
  }

  function MetadataAnswer(value, labelObject) {
    var self = this;

    self.extends = 'StudioObject';
    self.objectType = 'MetadataAnswer';
    self.dataType = 'Integer';
    self.value = value;
    self.label = labelObject;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.metadata').factory('MetadataGroupFactory', MetadataGroupFactory);

  MetadataGroupFactory.$inject = ['MetadataAnswerFactory'];

  function MetadataGroupFactory(MetadataAnswerFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MetadataGroup(MetadataAnswerFactory);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MetadataGroupFactory.fromJson() method expects to receive a object instead a String");
      }
      var metadaGroup = new MetadataGroup();

      json.options.forEach(function (metadataAnswerOption) {
        metadaGroup.options.push(MetadataAnswerFactory.fromJson(metadataAnswerOption));
      });

      return metadaGroup;
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
      self.options.splice(value - 1, 1);
      reorderOptionValues();
    }

    function removeLastOption() {
      self.options.splice(-1, 1);
    }

    function reorderOptionValues() {
      self.options.forEach(function (option, index) {
        option.value = ++index;
      });
    }
  }
})();
'use strict';

(function () {

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationApiService', service);

  function service() {
    var self = this;

    /* Public methods */
    self.resolveNavigation = resolveNavigation;

    function resolveNavigation(CurrentItemService, navigation) {
      var totalRoutes = navigation.routes.length;

      if (totalRoutes === 1) {
        return navigation.routes[0].destination;
      } else {
        var index = 1;
        var route;

        for (index; index < totalRoutes; index++) {
          route = navigation.routes[index];
          _checkConditions(route.conditions, CurrentItemService.filling);
        }
      }
    }

    function _checkConditions(conditions, questionFilling) {
      conditions.some(function (condition) {

        condition.rules.every(function (rule) {
          return _checkRule(rule, questionFilling);
        });
      });
    }

    function _checkRule(rule, questionFilling) {}
  }

  function RuleChecker() {
    var self = this;
    var _filling;

    self.answer = answer;
    self.equal = equal;

    function answer(filling) {
      _filling = filling;
      return self;
    }

    function equal(reference) {}
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.ExceptionService', service);

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
})();
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.NavigationFactory', factory);

  factory.$inject = ['otusjs.model.navigation.RouteFactory'];

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

    function fromJson(json, inNavigations) {
      var jsonObj = _parse(json);

      if (!jsonObj.routes || !jsonObj.routes.length) {
        return null;
      }

      var navigation = create(jsonObj.origin, jsonObj.routes[0].destination);

      if (navigation) {
        navigation.index = jsonObj.index;
        navigation.inNavigations = inNavigations;
        navigation.routes = jsonObj.routes.map(function (route) {
          return RouteFactory.fromJson(JSON.stringify(route));
        });
      }

      return navigation;
    }

    function _parse(json) {
      if (typeof json === 'string') {
        return JSON.parse(json);
      } else if ((typeof json === 'undefined' ? 'undefined' : _typeof(json)) === 'object') {
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
    self.inNavigations = [];
    self.outNavigations = [];
    self.routes = [defaultRoute];

    /* Public methods */
    self.addInNavigation = addInNavigation;
    self.addOutNavigation = addOutNavigation;
    self.clone = clone;
    self.createAlternativeRoute = createAlternativeRoute;
    self.equals = equals;
    self.getDefaultRoute = getDefaultRoute;
    self.getRouteByName = getRouteByName;
    self.hasRoute = hasRoute;
    self.isOrphan = isOrphan;
    self.hasOrphanRoot = hasOrphanRoot;
    self.listRoutes = listRoutes;
    self.removeInNavigation = removeInNavigation;
    self.removeRouteByName = removeRouteByName;
    self.selfsame = selfsame;
    self.setupDefaultRoute = setupDefaultRoute;
    self.toJson = toJson;
    self.updateInNavigation = updateInNavigation;
    self.updateRoute = updateRoute;

    function addInNavigation(navigation) {
      navigation.addOutNavigation(self);
      self.inNavigations.push(navigation);
    }

    function addOutNavigation(navigation) {
      self.outNavigations.push(navigation);
    }

    function clone() {
      var clone = new self.constructor(self.origin, _defaultRoute);
      self.inNavigations.map(clone.addInNavigation);
      self.outNavigations.map(clone.addOutNavigation);
      var routes = self.listRoutes();
      routes.shift();
      routes.map(clone.createAlternativeRoute);
      return clone;
    }

    function createAlternativeRoute(routeData) {
      if (!routeData.conditions || !routeData.conditions.length) {
        throw new Error('There are no conditions for this route.', 'navigation-factory.js', 123);
      }

      if (getRouteByName(routeData.origin + '_' + routeData.destination)) {
        throw new Error('Route already exists.', 'navigation-factory.js', 127);
      }

      _createAlternativeRoute(routeData);
    }

    function _createAlternativeRoute(routeData) {
      var route = Inject.RouteFactory.createAlternative(self.origin, routeData.destination, routeData.conditions);
      routeData.conditions.map(route.addCondition);
      route.isDefault = false;
      self.routes.push(route);
    }

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.index !== self.index) {
        return false;
      }

      if (other.isDefault !== self.isDefault) {
        return false;
      }

      if (other.routes.length === self.routes.length) {

        if (self.routes.length > 0) {
          var hasEqualRoutes = other.routes.every(function (otherRoute) {
            return self.routes.some(function (selfRoute) {
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

    function _existsRouteAtIndex(index) {
      return self.routes[index] ? true : false;
    }

    function getDefaultRoute() {
      return _defaultRoute.clone();
    }

    function getRouteByName(name) {
      var routeToReturn = null;

      self.routes.some(function (route) {
        if (route.name === name) {
          routeToReturn = route.clone();
          return true;
        }
      });

      return routeToReturn;
    }

    function hasRoute(routeData) {
      return self.routes.some(function (route) {
        return getRouteByName(routeData.name) || route.origin === routeData.origin && route.destination === routeData.destination;
      });
    }

    function _isCurrentDefaultRoute(route) {
      return _defaultRoute && route.name === _defaultRoute.name;
    }

    function hasOrphanRoot() {
      var result = false;

      if (self.index === 0) {
        return result;
      }

      result = self.inNavigations.every(function (navigation) {
        return navigation.isOrphan() || navigation.hasOrphanRoot();
      });

      return result;
    }

    function isOrphan() {
      if (self.index !== 0 && !self.inNavigations.length) {
        return true;
      } else {
        return false;
      }
    }

    function listRoutes() {
      var clones = [];

      clones = self.routes.map(function (route) {
        return route.clone();
      });

      return clones;
    }

    function _removeDefaultRoute() {
      _defaultRoute = null;
      self.routes.shift();
    }

    function removeInNavigation(navigationToRemove) {
      self.inNavigations.some(function (navigation, index) {
        if (navigation.origin === navigationToRemove.origin) {
          self.inNavigations.splice(index, 1);
          return true;
        }
      });
    }

    function removeRouteByName(name) {
      self.routes.some(function (route, index) {
        if (route.name === name) {
          self.routes.splice(index, 1);
          if (route.isDefault) {
            _defaultRoute = null;
          }
          return true;
        }
      });
    }

    function selfsame(other) {
      return Object.is(self, other);
    }

    function setupDefaultRoute(route) {
      if (!route) {
        throw new TypeError('Default route should not be undefined or null.', 'navigation-factory.js', 285);
      }

      removeRouteByName(route.name);
      route.conditions = [];
      self.routes[0] = route;
      _defaultRoute = route;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.index = self.index;
      json.inNavigations = _buildJsonInNavigations();
      json.routes = self.routes.map(function (route) {
        return route.toJson();
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }

    function _buildJsonInNavigations() {
      return self.inNavigations.map(function (element) {
        return {
          origin: element.origin
        };
      });
    }

    function _updateDefaultRoute(route) {
      _defaultRoute = route;
      _defaultRoute.conditions = [];
      self.routes[0] = _defaultRoute;
    }

    function updateInNavigation(navigation) {
      var wasUpdated = self.inNavigations.some(function (inNavigation, index) {
        if (inNavigation.origin === navigation.origin) {
          self.inNavigations[index] = navigation;
          return true;
        }
      });

      if (!wasUpdated) {
        self.inNavigations.push(navigation);
      }
    }

    function updateRoute(routeToUpdate) {
      if (!_isCurrentDefaultRoute(routeToUpdate)) {
        if (routeToUpdate.isDefault) {
          setupDefaultRoute(routeToUpdate);
        } else {
          _updateRoute(routeToUpdate);
        }
      }
    }

    function _updateRoute(routeToUpdate) {
      self.routes.some(function (route, index) {
        if (route.name === routeToUpdate.name) {
          self.routes[index] = routeToUpdate;
          return true;
        }
      });
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.NavigationPathFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;

    function create() {
      return new NavigationStack();
    }

    return self;
  }

  function NavigationStack() {
    var self = this;
    var _size = 0;
    var _head = null;
    var _tail = null;
    var _current = null;
    var _currentIndex = null;

    /* Public methods */
    self.add = add;
    self.ahead = ahead;
    self.back = back;
    self.getCurrentItem = getCurrentItem;
    self.getSize = getSize;
    self.goToBeginning = goToBeginning;

    function add(item) {
      if (_notExistsHead()) {
        _setupHead(item);
      } else {
        _ensureCurrentValue();
        _setupTail(item);
        _setupCurrent();
      }
      _updateIndexation();
    }

    function ahead() {
      _current = _current.getNext();
      ++_currentIndex;
    }

    function back() {
      _current = _current.getPrevious();
      --_currentIndex;
      if (!_current) {
        _head = null;
      }
    }

    function getCurrentItem() {
      return _current;
    }

    function getSize() {
      return _size;
    }

    function goToBeginning() {
      _current = _head;
      _currentIndex = 0;
    }

    function _ensureCurrentValue() {
      _current = _current || _tail;
    }

    function _notExistsHead() {
      return !_head;
    }

    function _setupCurrent() {
      _current.setNext(_tail);
      _current = _tail;
    }

    function _setupHead(item) {
      _head = item;
      _head.setPrevious(null);
      _head.setNext(null);
      _current = _head;
    }

    function _setupTail(item) {
      _tail = item;
      _tail.setPrevious(_current);
      _tail.setNext(null);
    }

    function _updateIndexation() {
      if (_currentIndex < _size - 1) {
        _size = _currentIndex + 2;
        ++_currentIndex;
      } else {
        ++_size;
        _currentIndex = _size - 1;
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.NavigationPathItemFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(options) {
      return new NavigationStackItem(options);
    }

    return self;
  }

  function NavigationStackItem(options) {
    var self = this;

    var _id = options.id;
    var _label = options.label || '';
    var _type = options.type;
    var _answer = options.answer;
    var _metadata = options.metadata;

    var _previous = null;
    var _next = null;

    /* Public methods */
    self.getID = getID;
    self.getLabel = getLabel;
    self.getType = getType;
    self.getAnswer = getAnswer;
    self.getMetadata = getMetadata;
    self.getNext = getNext;
    self.setNext = setNext;
    self.getPrevious = getPrevious;
    self.setPrevious = setPrevious;

    function getID() {
      return _id;
    }

    function getLabel() {
      return _label;
    }

    function getType() {
      return _type;
    }

    function getAnswer() {
      return _answer;
    }

    function getMetadata() {
      return _metadata;
    }

    function getNext() {
      return _next;
    }

    function setNext(item) {
      return _next = item;
    }

    function getPrevious() {
      return _previous;
    }

    function setPrevious(item) {
      return _previous = item;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.RouteConditionFactory', factory);

  factory.$inject = ['otusjs.model.navigation.RuleFactory'];

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

      self.rules.forEach(function (rule) {
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
          var hasEqualRules = other.rules.every(function (otherRule) {
            return self.rules.some(function (selfRule) {
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
      return new self.constructor(self.name, self.rules);
    }

    function toJson() {
      var json = {};

      json.extents = 'StudioObject';
      json.objectType = 'RouteCondition';
      json.name = self.name;
      json.rules = self.rules.map(function (rule) {
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
      self.rules.some(function (rule, index) {
        if (ruleToSearch.equals(rule)) {
          result = index;
          return true;
        }
      });
      return result;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.RouteFactory', factory);

  factory.$inject = ['otusjs.model.navigation.RouteConditionFactory'];

  function factory(RouteConditionFactory) {
    var self = this;

    /* Public interface */
    self.createAlternative = createAlternative;
    self.createDefault = createDefault;
    self.fromJson = fromJson;

    function createDefault(origin, destination) {
      if (!origin || !destination) {
        return null;
      }

      var route = new Route(origin, destination, null);
      route.isDefault = true;
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
        route = createAlternative(jsonObj.origin, jsonObj.destination, jsonObj.conditions.map(_rebuildConditions));
      }
      route.isDefault = jsonObj.isDefault;
      return route;
    }

    function _rebuildConditions(condition) {
      condition = condition instanceof Object ? JSON.stringify(condition) : condition;
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
    self.addCondition = addCondition;
    self.instanceOf = instanceOf;
    self.listConditions = listConditions;
    self.removeCondition = removeCondition;
    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJson = toJson;

    _init();

    function addCondition(condition) {
      if (!self.isDefault && !_conditionExists(condition)) {
        self.conditions.push(condition);
      }
    }

    function instanceOf() {
      return 'Route';
    }

    function listConditions() {
      var clone = [];

      self.conditions.forEach(function (condition) {
        clone.push(condition);
      });

      return clone;
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

      if (other.isDefault !== self.isDefault) {
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
          var hasEqualConditions = other.conditions.every(function (otherCondition) {
            return self.conditions.some(function (selfCondition) {
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
      // TODO Imcompatibility
      //return Object.is(self, other);
    }

    function clone() {
      var clone = new self.constructor(self.origin, self.destination, self.conditions);
      clone.isDefault = self.isDefault;
      return clone;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.destination = self.destination;
      json.name = self.name;
      json.isDefault = self.isDefault;
      json.conditions = self.conditions.map(function (condition) {
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
      return self.conditions.some(function (condition) {
        return newCondition.equals(condition);
      });
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.RuleFactory', factory);

  function factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(when, operator, answer, isMetadata, isCustom) {
      return new Rule(when, operator, answer, isMetadata, isCustom);
    }

    function fromJson(json) {
      var jsonObj = JSON.parse(json);
      var rule = new Rule(jsonObj.when, jsonObj.operator, jsonObj.answer, jsonObj.isMetadata, jsonObj.isCustom);
      return rule;
    }

    return self;
  }

  function Rule(when, operator, answer, isMetadata, isCustom) {
    var self = this;

    self.extents = 'SurveyTemplateObject';
    self.objectType = 'Rule';
    self.when = when;
    self.operator = operator;
    self.answer = answer;
    self.isMetadata = isMetadata;
    self.isCustom = isCustom;

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

      if (other.isCustom !== self.isCustom) {
        return false;
      }

      if (other.isMetadata !== self.isMetadata) {
        return false;
      }

      return true;
    }

    function selfsame(other) {
      //TODO Imcompatibility
      //return Object.is(self, other);
    }

    function clone() {
      return new self.constructor(self.when, self.operator, self.answer, self.isMetadata, self.isCustom);
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.when = self.when;
      json.operator = self.operator;
      json.answer = self.answer;
      json.isMetadata = self.isMetadata;
      json.isCustom = self.isCustom;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationContainerService', service);

  service.$inject = ['otusjs.model.navigation.NavigationFactory'];

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
      data.forEach(function (navigationData) {
        var inNavigations = navigationData.inNavigations.map(function (inNavigation) {
          return getNavigationByOrigin(inNavigation.origin);
        });
        _navigationList.push(NavigationFactory.fromJson(navigationData, inNavigations));
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
      var filter = _navigationList.filter(function (navigation) {
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
      var orphans = _navigationList.filter(function (navigation) {
        return navigation.isOrphan();
      });

      return orphans;
    }

    function existsNavigationTo(origin) {
      return getNavigationByOrigin(origin) ? true : false;
    }

    function createNavigationTo(origin, destination) {
      var newNavigation = NavigationFactory.create(origin, destination);
      newNavigation.index = _navigationList.length;
      _addElementsPreviousTheNavigation(newNavigation);
      _navigationList.push(newNavigation);
    }

    function _addElementsPreviousTheNavigation(navigation) {
      if (_navigationList.length) {
        var previous = _navigationList[_navigationList.length - 1];
        navigation.addInNavigation(previous);
      }
    }

    function removeNavigationOf(questionID) {
      var navigationToRemove = _navigationList.filter(function (navigation) {
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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationManagerService', service);

  service.$inject = ['SurveyItemManagerService', 'otusjs.model.navigation.NavigationContainerService', 'otusjs.model.navigation.NavigationAddService', 'otusjs.model.navigation.NavigationRemoveService', 'otusjs.model.navigation.CreateDefaultRouteTaskService', 'otusjs.model.navigation.AddAlternativeRouteTaskService', 'otusjs.model.navigation.RemoveRouteTaskService', 'otusjs.model.navigation.UpdateRouteTaskService', 'otusjs.model.navigation.NavigationValidatorService'];

  function service(SurveyItemManagerService, NavigationContainerService, NavigationAddService, NavigationRemoveService, CreateDefaultRouteTaskService, AddAlternativeRouteTaskService, RemoveRouteTaskService, UpdateRouteTaskService, NavigationValidatorService) {
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

      navigations.forEach(function (navigation) {
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
      if (_selectedNavigation.hasRoute(routeData)) {
        return UpdateRouteTaskService.execute(routeData, _selectedNavigation);
      } else if (routeData.isDefault) {
        CreateDefaultRouteTaskService.execute(routeData, _selectedNavigation);
      } else {
        AddAlternativeRouteTaskService.execute(routeData, _selectedNavigation);
      }
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

      var avaiableItems = allItems.filter(function (item, index) {
        return index <= referenceItemIndex;
      });

      return avaiableItems;
    }

    function listOrphanNavigations() {
      return NavigationContainerService.getOrphanNavigations();
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationValidatorService', service);

  service.$inject = ['SurveyItemContainerService'];

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

      itemList.forEach(function (question, index) {
        if (question.customID === questionID) {
          result = {};
          result.question = question;
          result.index = index;
        }
      });
      return result;
    }
  }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.survey').factory('SurveyFactory', SurveyFactory);

    SurveyFactory.$inject = ['SurveyIdentityFactory', 'SurveyMetaInfoFactory', 'SurveyUUIDGenerator', 'otusjs.model.navigation.NavigationManagerService', 'SurveyItemManagerService'];

    function SurveyFactory(SurveyIdentityFactory, SurveyMetaInfoFactory, SurveyUUIDGenerator, NavigationManagerService, SurveyItemManagerService) {
        var self = this;

        /* Public interdace */
        self.create = create;
        self.load = load;

        function load(surveyTemplateJson) {
            var metainfo = SurveyMetaInfoFactory.fromJson(surveyTemplateJson.metainfo);
            var identity = SurveyIdentityFactory.fromJson(surveyTemplateJson.identity);
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

        function isAvailableID(id) {
            return !self.SurveyItemManager.existsItem(id);
        }

        function isAvailableCustomID(id) {
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
            self.SurveyItemManager.getItemList().forEach(function (item) {
                json.itemContainer.push(item.toJson());
            });

            json.navigationList = [];
            NavigationManagerService.getNavigationList().forEach(function (navigation) {
                if (navigation) {
                    json.navigationList.push(navigation.toJson());
                } else {
                    json.navigationList.push({});
                }
            });

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').factory('SurveyIdentityFactory', SurveyIdentityFactory);

  function SurveyIdentityFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.survey.model.SurveyIdentityFactory.fromJson() method expects to receive a object instead a String");
      }
      var surveyIdentity = new SurveyIdentity(json.name, json.acronym, json.version);

      surveyIdentity.recommendedTo = json.recommendedTo;
      surveyIdentity.description = json.description;
      surveyIdentity.keywords = json.keywords;

      return surveyIdentity;
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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.survey').factory('SurveyMetaInfoFactory', SurveyMetaInfoFactory);

    function SurveyMetaInfoFactory() {
        var self = this;

        /* Public interdace */
        self.create = create;
        self.fromJson = fromJson;

        function fromJson(json) {
            if (typeof json === 'string') {
                throw new Error("otusjs.model.survey.model.SurveyMetaInfoFactory.fromJson() method expects to receive a object instead a String");
            }
            return new SurveyMetaInfo(json.creationDatetime);
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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').factory('SurveyItemFactory', SurveyItemFactory);

    SurveyItemFactory.$inject = [
    /* Question items */
    'CalendarQuestionFactory', 'IntegerQuestionFactory', 'DecimalQuestionFactory', 'SingleSelectionQuestionFactory', 'CheckboxQuestionFactory', 'TextQuestionFactory', 'TimeQuestionFactory', 'EmailQuestionFactory', 'PhoneQuestionFactory',
    /* Miscelaneous items */
    'TextItemFactory', 'ImageItemFactory'];

    function SurveyItemFactory(CalendarQuestionFactory, IntegerQuestionFactory, DecimalQuestionFactory, SingleSelectionQuestionFactory, CheckboxQuestionFactory, TextQuestionFactory, TimeQuestionFactory, EmailQuestionFactory, PhoneQuestionFactory, TextItemFactory, ImageItemFactory) {

        var self = this;

        var factoryMap = {
            /* Question items */
            'CalendarQuestion': CalendarQuestionFactory,
            'IntegerQuestion': IntegerQuestionFactory,
            'DecimalQuestion': DecimalQuestionFactory,
            'SingleSelectionQuestion': SingleSelectionQuestionFactory,
            'CheckboxQuestion': CheckboxQuestionFactory,
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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').service('SurveyItemContainerService', SurveyItemContainerService);

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
            var filter = itemList.filter(function (item) {
                return findByTemplateID(item, templateID);
            });

            return filter[0];
        }

        function getItemByCustomID(customID) {
            var filter = itemList.filter(function (item) {
                return findByCustomID(item, customID);
            });

            return filter[0];
        }

        function getItemByID(id) {
            var item = getItemByTemplateID(id);
            if (item) {
                return item;
            } else {
                return getItemByCustomID(id);
            }
        }

        function getAllCheckboxQuestion() {
            var occurences = [];
            itemList.filter(function (item) {
                if (item.objectType === "CheckboxQuestion") {
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
            return getItemByTemplateID(id) || getItemByCustomID(id) ? true : false;
        }

        function createItem(itemType, templateID) {
            var item = SurveyItemFactory.create(itemType, templateID);
            itemList.push(item);
            return item;
        }

        function removeItem(templateID) {
            var itemToRemove = itemList.filter(function (item) {
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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').service('SurveyItemManagerService', SurveyItemManagerService);

    SurveyItemManagerService.$inject = ['SurveyItemContainerService'];

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
            if (checkboxQuestions.length > 0) {
                checkboxQuestions.forEach(function (checkboxQuestion) {
                    checkboxQuestion.getAllCustomOptionsID().forEach(function (customOptionID) {
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
            getAllCustomOptionsID().forEach(function (customOptionID) {
                if (customOptionID === id) {
                    foundCustomOptionID = true;
                }
            });
            return getItemByCustomID(id) || foundCustomOptionID ? false : true;
        }
    }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('FillingRulesDataFactory', FillingRulesDataFactory);

  FillingRulesDataFactory.$inject = ['AlphanumericValidatorFactory', 'DistinctValidatorFactory', 'FutureDateValidatorFactory', 'InValidatorFactory', 'LowerCaseValidatorFactory', 'LowerLimitValidatorFactory', 'MandatoryValidatorFactory', 'MaxDateValidatorFactory', 'MaxLengthValidatorFactory', 'MaxTimeValidatorFactory', 'MinDateValidatorFactory', 'MinLengthValidatorFactory', 'MinTimeValidatorFactory', 'ParameterValidatorFactory', 'PastDateValidatorFactory', 'PrecisionValidatorFactory', 'RangeDateValidatorFactory', 'ScaleValidatorFactory', 'SpecialsValidatorFactory', 'UpperCaseValidatorFactory', 'UpperLimitValidatorFactory'];

  function FillingRulesDataFactory(AlphanumericValidatorFactory, DistinctValidatorFactory, FutureDateValidatorFactory, InValidatorFactory, LowerCaseValidatorFactory, LowerLimitValidatorFactory, MandatoryValidatorFactory, MaxDateValidatorFactory, MaxLengthValidatorFactory, MaxTimeValidatorFactory, MinDateValidatorFactory, MinLengthValidatorFactory, MinTimeValidatorFactory, ParameterValidatorFactory, PastDateValidatorFactory, PrecisionValidatorFactory, RangeDateValidatorFactory, ScaleValidatorFactory, SpecialsValidatorFactory, UpperCaseValidatorFactory, UpperLimitValidatorFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(validator) {
      return validatorsTemplates[validator].create();
    }

    function fromJson(json) {
      return validatorsTemplates[json.validatorType].fromJson(json.data);
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
    };

    return self;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('FillingRulesOptionFactory', FillingRulesOptionFactory);

  FillingRulesOptionFactory.$inject = ['RulesFactory'];

  function FillingRulesOptionFactory(RulesFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new FillingRules(RulesFactory);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.FillingRulesOptionFactory.fromJson() method expects to receive a object instead a String");
      }
      var fillingRules = new FillingRules(RulesFactory);
      for (var rule in json.options) {
        fillingRules.options[rule] = RulesFactory.fromJson(json.options[rule]);
      }
      return fillingRules;
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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('RulesFactory', RulesFactory);

  RulesFactory.$inject = ['FillingRulesDataFactory'];

  function RulesFactory(FillingRulesDataFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(validatorType) {
      var validator = FillingRulesDataFactory.create(validatorType);
      return new Rule(validatorType, validator);
    }

    function fromJson(json) {
      var validator = FillingRulesDataFactory.fromJson(json);
      return new Rule(json.validatorType, validator);
    }

    return self;
  }

  function Rule(validatorType, validator) {
    var self = this;
    self.extends = 'StudioObject';
    self.objectType = 'Rule';
    self.validatorType = validatorType;
    self.data = validator;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.AnswerEvaluationService', Service);

  Service.$inject = ['otusjs.model.activity.NumericRuleTestService', 'otusjs.model.activity.TextRuleTestService', 'otusjs.model.activity.DateTimeRuleTestService'];

  function Service(NumericRuleTestService, TextRuleTestService, DateTimeRuleTestService) {
    var self = this;
    var _evaluators = {};

    /* Public methods */
    self.getEvaluator = getEvaluator;

    _setupEvaluators();

    function getEvaluator(evaluator) {
      return _evaluators[evaluator];
    }

    function _setupEvaluators() {
      _evaluators.CalendarQuestion = DateTimeRuleTestService;
      _evaluators.IntegerQuestion = NumericRuleTestService;
      _evaluators.SingleSelectionQuestion = NumericRuleTestService;
      _evaluators.TextQuestion = TextRuleTestService;
      _evaluators.TimeQuestion = DateTimeRuleTestService;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.DateTimeRuleTestService', Service);

  function Service() {
    var self = this;
    var _runner = {};
    self.name = 'DateTimeRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      if (Number.isNaN(Date.parse(answer))) {
        return false;
      }

      return _runner[rule.operator](Date.parse(rule.answer), answer.getTime());
    }

    _runner.equal = function (reference, answer) {
      return answer === reference;
    };

    _runner.notEqual = function (reference, answer) {
      return answer !== reference;
    };

    _runner.within = function (reference, answer) {
      return reference.some(function (value) {
        return _runner.contains(value, answer);
      });
    };

    _runner.greater = function (reference, answer) {
      return answer > reference;
    };

    _runner.greaterEqual = function (reference, answer) {
      return answer >= reference;
    };

    _runner.lower = function (reference, answer) {
      return answer < reference;
    };

    _runner.lowerEqual = function (reference, answer) {
      return answer <= reference;
    };

    _runner.between = function (reference, answer) {
      return _runner.greaterEqual(reference[0], answer) && _runner.lowerEqual(reference[1], answer);
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.NumericRuleTestService', Service);

  function Service() {
    var self = this;
    var _runner = {};
    self.name = 'NumericRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      _polyfillIsInteger();

      if (answer && !!answer['replace']) {
        answer = answer.replace(/,/, '.');
      }

      if (!Number.isInteger(Number(answer)) && !_isFloat(answer)) {
        return false;
      }

      return _runner[rule.operator](rule.answer, Number(answer));
    }

    function _isFloat(value) {
      return !isNaN(Number(value)) && !Number.isInteger(Number(value));
    }

    _runner.equal = function (reference, answer) {
      return answer === Number(reference);
    };

    _runner.notEqual = function (reference, answer) {
      return answer !== Number(reference);
    };

    _runner.within = function (reference, answer) {
      return reference.some(function (value) {
        if (!!value['replace']) {
          value = value.replace(/,/, '.');
        }
        return _runner.equal(value, answer);
      });
    };

    _runner.greater = function (reference, answer) {
      return answer > Number(reference);
    };

    _runner.greaterEqual = function (reference, answer) {
      return answer >= Number(reference);
    };

    _runner.lower = function (reference, answer) {
      return answer < Number(reference);
    };

    _runner.lowerEqual = function (reference, answer) {
      return answer <= Number(reference);
    };

    _runner.between = function (reference, answer) {
      return _runner.greaterEqual(reference[0], answer) && _runner.lowerEqual(reference[1], answer);
    };

    function _polyfillIsInteger() {
      Number.isInteger = Number.isInteger || function (value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      };
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.TextRuleTestService', Service);

  function Service() {
    var self = this;
    var _runner = {};
    self.name = 'TextRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      return _runner[rule.operator](rule.answer, answer.toString());
    }

    _runner.equal = function (reference, answer) {
      return answer === reference;
    };

    _runner.notEqual = function (reference, answer) {
      return answer !== reference;
    };

    _runner.within = function (reference, answer) {
      return reference.some(function (value) {
        return _runner.contains(value, answer);
      });
    };

    _runner.contains = function (reference, answer) {
      var reg = new RegExp(reference, 'i');
      return reg.test(answer);
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('ImageItemFactory', ImageItemFactory);

  ImageItemFactory.$inject = ['LabelFactory'];

  function ImageItemFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      return new ImageItem(templateID, prototype, labelObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.ImageItemFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new ImageItem(templateID, prototype, labelObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function ImageItem(templateID, prototype, labelObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'ImageItem';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
    self.url = '';
    self.footer = labelObject;

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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('TextItemFactory', TextItemFactory);

  TextItemFactory.$inject = ['LabelFactory'];

  function TextItemFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      return new TextItem(templateID, prototype, labelObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.TextItem.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new TextItem(templateID, prototype, labelObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function TextItem(templateID, prototype, labelObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'TextItem';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
    self.value = labelObject;

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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').factory('AnswerOptionFactory', AnswerOptionFactory);

    AnswerOptionFactory.$inject = ['IdiomFactory'];

    function AnswerOptionFactory(IdiomFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value, parentQuestionID) {
            return new AnswerOption(value, parentQuestionID, IdiomFactory);
        }

        return self;
    }

    function AnswerOption(value, parentQuestionID, IdiomFactory) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'AnswerOption';
        self.value = value;
        self.dataType = 'Integer';
        self.label = {
            ptBR: IdiomFactory.create(),
            enUS: IdiomFactory.create(),
            esES: IdiomFactory.create()
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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('CalendarQuestionFactory', CalendarQuestionFactory);

  CalendarQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'FillingRulesOptionFactory'];

  function CalendarQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new CalendarQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.CalendarQuestionFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var metadataGroupObject = MetadataGroupFactory.fromJson(json.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJson(json.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new CalendarQuestion(json.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function CalendarQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'CalendarQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'LocalDate';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'minDate', 'maxDate', 'rangeDate', 'futureDate', 'pastDate'];
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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').factory('CheckboxAnswerOptionFactory', CheckboxAnswerOptionFactory);

    CheckboxAnswerOptionFactory.$inject = ['IdiomFactory'];

    function CheckboxAnswerOptionFactory(IdiomFactory) {
        var self = this;

        /* Public interface */
        self.create = create;
        self.createWithData = createWithData;

        function create(optionID) {
            return new CheckboxAnswerOption(optionID, IdiomFactory);
        }

        function createWithData(checkboxAnswerOptionJSON) {
            var parsedJson = JSON.parse(checkboxAnswerOptionJSON);
            var CheckboxAnswerOptionObject = new CheckboxAnswerOption(parsedJson.optionID, IdiomFactory);

            CheckboxAnswerOptionObject.optionID = parsedJson.optionID;
            CheckboxAnswerOptionObject.customOptionID = parsedJson.customOptionID;
            CheckboxAnswerOptionObject.label = parsedJson.label;

            return CheckboxAnswerOptionObject;
        }

        return self;
    }

    function CheckboxAnswerOption(optionID, IdiomFactory) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'CheckboxAnswerOption';
        self.optionID = optionID;
        self.customOptionID = optionID;
        self.dataType = 'Boolean';
        self.value = false;
        self.label = {
            ptBR: IdiomFactory.create(),
            enUS: IdiomFactory.create(),
            esES: IdiomFactory.create()
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
            json.value = self.value;
            json.label = self.label;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').factory('CheckboxQuestionFactory', CheckboxQuestionFactory);

    CheckboxQuestionFactory.$inject = ['IdiomFactory', 'MetadataGroupFactory', 'CheckboxAnswerOptionFactory', 'FillingRulesOptionFactory'];

    function CheckboxQuestionFactory(IdiomFactory, MetadataGroupFactory, CheckboxAnswerOptionFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new CheckboxQuestion(templateID, prototype, IdiomFactory, MetadataGroupFactory, CheckboxAnswerOptionFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function CheckboxQuestion(templateID, prototype, IdiomFactory, MetadataGroupFactory, CheckboxAnswerOptionFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'CheckboxQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'Array';
        self.label = {
            ptBR: IdiomFactory.create(),
            enUS: IdiomFactory.create(),
            esES: IdiomFactory.create()
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
            var validatorsList = ['mandatory'];
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
            self.options.splice(value - 1, 1);
            reorderOptionValues();
        }

        function removeLastOption() {
            self.options.splice(-1, 1);
        }

        function getAllCustomOptionsID() {
            var customOptionsID = [];
            self.options.forEach(function (option) {
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
            self.options.forEach(function (option, index) {
                option.value = ++index;
            });
        }
    }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('DecimalQuestionFactory', DecimalQuestionFactory);

  DecimalQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'UnitFactory', 'FillingRulesOptionFactory'];

  function DecimalQuestionFactory(LabelFactory, MetadataGroupFactory, UnitFactory, FillingRulesOptionFactory) {
    var self = this;
    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      var unitObject = {};
      unitObject.ptBR = UnitFactory.create();
      unitObject.enUS = UnitFactory.create();
      unitObject.esES = UnitFactory.create();

      return new DecimalQuestion(templateID, prototype, labelObject, metadataGroupObject, unitObject, fillingRulesObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.DecimalQuestionFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var metadataGroupObject = MetadataGroupFactory.fromJson(json.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJson(json.fillingRules);

      var unitObject = {};
      unitObject.ptBR = UnitFactory.fromJson(json.unit.ptBR);
      unitObject.enUS = UnitFactory.fromJson(json.unit.enUS);
      unitObject.esES = UnitFactory.fromJson(json.unit.esES);

      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new DecimalQuestion(json.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function DecimalQuestion(templateID, prototype, labelObject, metadataGroupObject, unitObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'DecimalQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Decimal';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.unit = unitObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'distinct', 'lowerLimit', 'upperLimit', 'in', 'scale'];

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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('EmailQuestionFactory', EmailQuestionFactory);

  EmailQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'FillingRulesOptionFactory'];

  function EmailQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new EmailQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.EmailQuestionFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var metadataGroupObject = MetadataGroupFactory.fromJson(json.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJson(json.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new EmailQuestion(json.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function EmailQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'EmailQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory'];
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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('IntegerQuestionFactory', IntegerQuestionFactory);

  IntegerQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'UnitFactory', 'FillingRulesOptionFactory'];

  function IntegerQuestionFactory(LabelFactory, MetadataGroupFactory, UnitFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      var unitObject = {};
      unitObject.ptBR = UnitFactory.create();
      unitObject.enUS = UnitFactory.create();
      unitObject.esES = UnitFactory.create();

      return new IntegerQuestion(templateID, prototype, labelObject, metadataGroupObject, unitObject, fillingRulesObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.IntegerQuestionFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var metadataGroupObject = MetadataGroupFactory.fromJson(json.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJson(json.fillingRules);

      var unitObject = {};
      unitObject.ptBR = UnitFactory.fromJson(json.unit.ptBR);
      unitObject.enUS = UnitFactory.fromJson(json.unit.enUS);
      unitObject.esES = UnitFactory.fromJson(json.unit.esES);

      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new IntegerQuestion(json.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function IntegerQuestion(templateID, prototype, labelObject, metadataGroupObject, unitObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'IntegerQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Integer';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.unit = unitObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'distinct', 'lowerLimit', 'upperLimit', 'precision', 'in'];
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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('PhoneQuestionFactory', PhoneQuestionFactory);

  PhoneQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'FillingRulesOptionFactory'];

  function PhoneQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new PhoneQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.PhoneQuestionFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var metadataGroupObject = MetadataGroupFactory.fromJson(json.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJson(json.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new PhoneQuestion(json.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function PhoneQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'PhoneQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Integer';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory'];

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
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').factory('SingleSelectionQuestionFactory', SingleSelectionQuestionFactory);

    SingleSelectionQuestionFactory.$inject = ['IdiomFactory', 'MetadataGroupFactory', 'AnswerOptionFactory', 'FillingRulesOptionFactory'];

    function SingleSelectionQuestionFactory(IdiomFactory, MetadataGroupFactory, AnswerOptionFactory, FillingRulesOptionFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(templateID, prototype) {
            return new SingleSelectionQuestion(templateID, prototype, IdiomFactory, MetadataGroupFactory, AnswerOptionFactory, FillingRulesOptionFactory);
        }

        return self;
    }

    function SingleSelectionQuestion(templateID, prototype, IdiomFactory, MetadataGroupFactory, AnswerOptionFactory, FillingRulesOptionFactory) {
        var self = this;

        self.extents = prototype.objectType;
        self.objectType = 'SingleSelectionQuestion';
        self.templateID = templateID;
        self.customID = templateID;
        self.dataType = 'Integer';
        self.label = {
            ptBR: IdiomFactory.create(),
            enUS: IdiomFactory.create(),
            esES: IdiomFactory.create()
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
            var validatorsList = ['mandatory'];
            return validatorsList;
        }

        function createOption() {
            var option = AnswerOptionFactory.create(self.options.length + 1);
            self.options.push(option);
            return option;
        }

        function removeOption(value) {
            self.options.splice(value - 1, 1);
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
            self.options.forEach(function (option, index) {
                option.value = ++index;
            });
        }
    }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('TextQuestionFactory', TextQuestionFactory);

  TextQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'FillingRulesOptionFactory'];

  function TextQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new TextQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.TextQuestionFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var metadataGroupObject = MetadataGroupFactory.fromJson(json.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJson(json.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new TextQuestion(json.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function TextQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'TextQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'alphanumeric', 'lowerCase', 'minLength', 'maxLength', 'specials', 'upperCase'];
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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('TimeQuestionFactory', TimeQuestionFactory);

  TimeQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'FillingRulesOptionFactory'];

  function TimeQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new TimeQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.TimeQuestionFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var metadataGroupObject = MetadataGroupFactory.fromJson(json.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJson(json.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new TimeQuestion(json.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function TimeQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'TimeQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'LocalTime';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'minTime', 'maxTime'
      // 'parameter'
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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('AlphanumericValidatorFactory', AlphanumericValidatorFactory);

  function AlphanumericValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new AlphanumericValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.AlphanumericValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new AlphanumericValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function AlphanumericValidator() {
    var self = this;

    self.reference = true;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('DistinctValidatorFactory', DistinctValidatorFactory);

  function DistinctValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new DistinctValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.DistinctValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new DistinctValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function DistinctValidator() {
    var self = this;

    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('FutureDateValidatorFactory', FutureDateValidatorFactory);

  function FutureDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new FutureDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.FutureDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new FutureDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function FutureDateValidator() {
    var self = this;

    self.reference = false;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('InValidatorFactory', InValidatorFactory);

  function InValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new InValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.InValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new InValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function InValidator() {
    var self = this;

    self.reference = {
      'initial': null,
      'end': null
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('LowerCaseValidatorFactory', LowerCaseValidatorFactory);

  function LowerCaseValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new LowerCaseValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.LowerCaseValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new LowerCaseValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function LowerCaseValidator() {
    var self = this;

    self.reference = true;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('LowerLimitValidatorFactory', LowerLimitValidatorFactory);

  function LowerLimitValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new LowerLimitValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.LowerLimitValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new LowerLimitValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function LowerLimitValidator() {
    var self = this;

    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MandatoryValidatorFactory', MandatoryValidatorFactory);

  function MandatoryValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MandatoryValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MandatoryValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MandatoryValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MandatoryValidator() {
    var self = this;

    self.reference = false;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MaxDateValidatorFactory', MaxDateValidatorFactory);

  function MaxDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MaxDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MaxDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MaxDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MaxDateValidator() {
    var self = this;

    self.reference = new Date();
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MaxLengthValidatorFactory', MaxLengthValidatorFactory);

  function MaxLengthValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MaxLengthValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MaxLengthValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MaxLengthValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MaxLengthValidator() {
    var self = this;

    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MaxTimeValidatorFactory', MaxTimeValidatorFactory);

  function MaxTimeValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MaxTimeValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MaxTimeValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MaxTimeValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MaxTimeValidator() {
    var self = this;

    self.reference = '';
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MinDateValidatorFactory', MinDateValidatorFactory);

  function MinDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MinDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MinDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MinDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MinDateValidator() {
    var self = this;

    self.reference = new Date();
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MinLengthValidatorFactory', MinLengthValidatorFactory);

  function MinLengthValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MinLengthValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MinLengthValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MinLengthValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MinLengthValidator() {
    var self = this;

    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MinTimeValidatorFactory', MinTimeValidatorFactory);

  function MinTimeValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MinTimeValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MinTimeValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MinTimeValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MinTimeValidator() {
    var self = this;

    self.reference = '';
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('ParameterValidatorFactory', ParameterValidatorFactory);

  function ParameterValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ParameterValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.ParameterValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new ParameterValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function ParameterValidator() {
    var self = this;

    self.reference = '';
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('PastDateValidatorFactory', PastDateValidatorFactory);

  function PastDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new PastDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.PastDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new PastDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function PastDateValidator() {
    var self = this;

    self.reference = false;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('PrecisionValidatorFactory', PrecisionValidatorFactory);

  function PrecisionValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new PrecisionValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.PrecisionValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new PrecisionValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function PrecisionValidator() {
    var self = this;

    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('RangeDateValidatorFactory', RangeDateValidatorFactory);

  function RangeDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new RangeDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.RangeDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new RangeDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function RangeDateValidator() {
    var self = this;

    self.reference = {
      'initial': new Date(),
      'end': new Date()
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('ScaleValidatorFactory', ScaleValidatorFactory);

  function ScaleValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ScaleValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.ScaleValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new ScaleValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function ScaleValidator() {
    var self = this;

    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('SpecialsValidatorFactory', SpecialsValidatorFactory);

  function SpecialsValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new SpecialsValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.SpecialsValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new SpecialsValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function SpecialsValidator() {
    var self = this;

    self.reference = true;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('UpperCaseValidatorFactory', UpperCaseValidatorFactory);

  function UpperCaseValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new UpperCaseValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.UpperCaseValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new UpperCaseValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function UpperCaseValidator() {
    var self = this;

    self.reference = true;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('UpperLimitValidatorFactory', UpperLimitValidatorFactory);

  function UpperLimitValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new UpperLimitValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.UpperLimitValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new UpperLimitValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function UpperLimitValidator() {
    var self = this;

    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationAddService', service);

  service.$inject = ['otusjs.model.navigation.NavigationContainerService', 'SurveyItemContainerService'];

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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationRemoveService', service);

  service.$inject = ['otusjs.model.navigation.NavigationContainerService'];

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
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.AddAlternativeRouteTaskService', service);

  service.$inject = ['otusjs.model.navigation.RouteFactory', 'otusjs.model.navigation.RouteConditionFactory', 'otusjs.model.navigation.RuleFactory', 'otusjs.model.navigation.NavigationContainerService'];

  function service(RouteFactory, RouteConditionFactory, RuleFactory, NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      var conditions = routeData.conditions.map(_setupConditions);
      var route = RouteFactory.createAlternative(routeData.origin, routeData.destination, conditions);

      navigation.createAlternativeRoute(route);
      _notifyNewDefaultNavigation(route, navigation);

      return route;
    }

    function _setupConditions(conditionData) {
      var rules = conditionData.rules.map(_setupRules);
      return RouteConditionFactory.create(conditionData.name, rules);
    }

    function _setupRules(ruleData) {
      var when = ruleData.when.customID || ruleData.when;
      var operator = ruleData.operator.type || ruleData.operator;
      var answer = ruleData.answer;
      return RuleFactory.create(when, operator, answer, ruleData.isMetadata, ruleData.isCustom);
    }

    function _notifyNewDefaultNavigation(newDefaultRoute, navigation) {
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(newDefaultRoute.destination);
      nextNavigation.updateInNavigation(navigation);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.CreateDefaultRouteTaskService', service);

  service.$inject = ['otusjs.model.navigation.RouteFactory', 'otusjs.model.navigation.NavigationContainerService'];

  function service(RouteFactory, NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      var currentDefaultRoute = navigation.getDefaultRoute();
      var route = RouteFactory.createDefault(routeData.origin, routeData.destination);

      navigation.setupDefaultRoute(route);

      _notifyPreviousDefaultNavigation(currentDefaultRoute, navigation);
      _notifyNewDefaultNavigation(route, navigation);
    }

    function _notifyPreviousDefaultNavigation(currentDefaultRoute, navigation) {
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(currentDefaultRoute.destination);
      nextNavigation.removeInNavigation(navigation);
    }

    function _notifyNewDefaultNavigation(newDefaultRoute, navigation) {
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(newDefaultRoute.destination);
      nextNavigation.updateInNavigation(navigation);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.RemoveRouteTaskService', service);

  service.$inject = ['otusjs.model.navigation.NavigationContainerService'];

  function service(NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      navigation.removeRouteByName(routeData.name);
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(routeData.destination);
      nextNavigation.removeInNavigation(navigation);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.UpdateRouteTaskService', service);

  service.$inject = ['otusjs.model.navigation.RuleFactory', 'otusjs.model.navigation.RouteConditionFactory', 'otusjs.model.navigation.RouteFactory', 'otusjs.model.navigation.NavigationContainerService', 'otusjs.model.navigation.CreateDefaultRouteTaskService'];

  function service(RuleFactory, RouteConditionFactory, RouteFactory, NavigationContainerService, CreateDefaultRouteTaskService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      if (_isCurrentDefaultRoute(routeData, navigation.getDefaultRoute())) {
        throw new Error('Is not possible update a default route.', 'update-route-task-service.js', 23);
      } else if (routeData.isDefault) {
        CreateDefaultRouteTaskService.execute(routeData, navigation);
      } else {
        var conditions = routeData.conditions.map(_setupConditions);
        var route = RouteFactory.createAlternative(routeData.origin, routeData.destination, conditions);
        navigation.updateRoute(route);
        _notifyNextNavigation(route, navigation);
      }
    }

    function _isCurrentDefaultRoute(routeToUpdate, currentDefaultRoute) {
      var isSameOrigin = currentDefaultRoute.origin === routeToUpdate.origin;
      var isSameDestination = currentDefaultRoute.destination === routeToUpdate.destination;
      return isSameOrigin && isSameDestination;
    }

    function _setupConditions(conditionData) {
      var rules = conditionData.rules.map(_setupRules);
      return RouteConditionFactory.create(conditionData.name, rules);
    }

    function _setupRules(ruleData) {
      var when = ruleData.when.customID || ruleData.when;
      var operator = ruleData.operator.type || ruleData.operator;
      var answer = ruleData.answer;
      return RuleFactory.create(when, operator, answer, ruleData.isMetadata, ruleData.isCustom);
    }

    function _notifyNextNavigation(routeData, navigation) {
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(routeData.destination);
      if (nextNavigation) {
        nextNavigation.updateInNavigation(navigation);
      }
    }
  }
})();