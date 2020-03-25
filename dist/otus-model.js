'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.activity', ['otus.validation']);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.chart', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.fieldCenter', []);
})();
'use strict';

(function () {
   'use strict';

   angular.module('otusjs.laboratory', ['otusjs.laboratory.participant', 'otusjs.laboratory.configuration', 'otusjs.laboratory.transportation', 'otusjs.laboratory.exam']);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.locationPoint', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.misc', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.metadata', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.monitoring', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.outcome', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.model.participant', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.survey', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.pendency', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.staticVariable', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItemGroup', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.user', ['otusjs.user.permission']);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.validation', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.laboratory.configuration', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.laboratory.participant', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.laboratory.transportation', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.laboratory.exam', ['otusjs.laboratory.exam.lot', 'otusjs.laboratory.exam.sending']);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.user.permission', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.laboratory.exam.lot', []);
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.laboratory.exam.sending', []);
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs', ['otusjs.survey', 'otusjs.model.activity', 'otusjs.model.participant', 'otusjs.model.fieldCenter', 'otusjs.model.locationPoint', 'otusjs.model.monitoring', 'otusjs.model.outcome', 'otusjs.model.chart', 'otusjs.surveyItem', 'otusjs.surveyItemGroup', 'otusjs.staticVariable', 'otusjs.metadata', 'otusjs.misc', 'otusjs.model.navigation', 'otusjs.validation', 'otusjs.laboratory', 'otusjs.user', 'utils', 'otusjs.model.pendency']);
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

  angular.module('otusjs.laboratory').factory('otusjs.laboratory.WorkAliquotFactory', factory);

  factory.$inject = ['$filter', 'otusjs.laboratory.configuration.LaboratoryConfigurationService'];

  function factory($filter, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(aliquotInfo) {
      return new WorkAliquot($filter, LaboratoryConfigurationService, aliquotInfo);
    }

    function fromJson(aliquotInfoArray) {
      if (Array.isArray(aliquotInfoArray)) {
        return aliquotInfoArray.map(function (aliquotInfo) {
          return new WorkAliquot($filter, LaboratoryConfigurationService, aliquotInfo);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function WorkAliquot($filter, LaboratoryConfigurationService, aliquotInfo) {
    var self = this;
    var _aliquotDescriptor;
    var _participantBirthdate = aliquotInfo.birthdate;
    var _participantSex = aliquotInfo.sex;
    var _participantRecruitmentNumber = aliquotInfo.recruitmentNumber;

    /* Public Interface*/
    self.objectType = aliquotInfo.objectType || 'WorkAliquot';
    self.name = aliquotInfo.name || '';
    self.role = aliquotInfo.role || '';
    self.code = aliquotInfo.code || '';
    self.container = aliquotInfo.container || '';
    self.fieldCenter = aliquotInfo.fieldCenter || '';
    self.aliquotCollectionData = aliquotInfo.aliquotCollectionData;

    self.label = aliquotInfo.label || '';
    self.containerLabel = aliquotInfo.containerLabel || '';
    self.roleLabel = aliquotInfo.roleLabel || '';

    self.toJSON = toJSON;
    self.getAliquotToCsv = getAliquotToCsv;

    self.hasError = false;

    onInit();

    function onInit() {
      _aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptor(self.name);
      _runDescriptors(_aliquotDescriptor);
    }

    function _runDescriptors(aliquotDescriptor) {
      self.label = aliquotDescriptor.label;
      self.containerLabel = self.container.toUpperCase() === "CRYOTUBE" ? "Criotubo" : "Palheta";
      self.roleLabel = self.role.toUpperCase() === "EXAM" ? "Exame" : "Armazenamento";
    }

    function getAliquotToCsv() {
      var formattedDate = $filter('date')(new Date(_participantBirthdate.value), 'dd/MM/yyyy');

      return {
        aliquota: self.code,
        sexo: _participantSex,
        nascimento: formattedDate
      };
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        fieldCenter: self.fieldCenter,
        name: self.name,
        container: self.container,
        role: self.role,
        sex: _participantSex,
        birthdate: _participantBirthdate,
        recruitmentNumber: _participantRecruitmentNumber,
        aliquotCollectionData: self.aliquotCollectionData
      };
      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory').factory('otusjs.laboratory.WorkTubeFactory', factory);

  factory.$inject = ['$filter', 'otusjs.laboratory.configuration.LaboratoryConfigurationService'];

  function factory($filter, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(tubeInfo) {
      return new WorkTube($filter, LaboratoryConfigurationService, tubeInfo);
    }

    function fromJson(tubeInfoArray) {
      if (Array.isArray(tubeInfoArray)) {
        return tubeInfoArray.map(function (tubeInfo) {
          return new WorkTube($filter, LaboratoryConfigurationService, tubeInfo);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function WorkTube($filter, LaboratoryConfigurationService, tubeInfo) {
    var self = this;
    var _tubeDescriptor, _momentDescriptor;

    /* Public Interface*/
    self.objectType = tubeInfo.objectType || 'WorkTube';
    self.type = tubeInfo.type || '';
    self.moment = tubeInfo.moment || '';
    self.code = tubeInfo.code || '';
    self.groupName = tubeInfo.groupName || '';
    self.tubeCollectionData = tubeInfo.tubeCollectionData;

    self.typeLabel = tubeInfo.typeLabel || '';
    self.momentLabel = tubeInfo.momentLabel || '';

    self.toJSON = toJSON;
    self.getTubeToCsv = getTubeToCsv;

    self.hasError = false;

    onInit();

    function onInit() {
      _tubeDescriptor = LaboratoryConfigurationService.getTubeDescriptor(self.type);
      _momentDescriptor = LaboratoryConfigurationService.getMomentDescriptor(self.moment);
      _runDescriptors(_tubeDescriptor, _momentDescriptor);
    }

    function _runDescriptors(tubeDescriptor, _momentDescriptor) {
      self.typeLabel = tubeDescriptor.label;
      self.momentLabel = _momentDescriptor.label;
    }

    function getTubeToCsv() {
      return {
        tubo: self.code,
        tipo: self.typeLabel,
        momento: self.momentLabel
      };
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        type: self.type,
        moment: self.moment,
        groupName: self.groupName,
        tubeCollectionData: self.tubeCollectionData
      };
      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.staticVariable').factory('otusjs.staticVariable.StaticVariableFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new StaticVariable();
    }

    function fromJson(jsonObject) {
      var variable = new StaticVariable(jsonObject.label, jsonObject.name, jsonObject.sending, jsonObject.bindToWholeTemplate, jsonObject.customizations, jsonObject.bindTo);

      variable.value = jsonObject.value;
      return variable;
    }

    return self;
  }

  function StaticVariable(label, name, sending, wholeTemplate, customizations, bindTo) {
    var self = this;

    self.objectType = "StaticVariable";
    self.name = name || '';
    self.label = label || '';
    self.sending = sending || '';
    self.customized = false;
    self.bindToWholeTemplate = wholeTemplate === undefined ? true : wholeTemplate;
    self.bindTo = bindTo || [];
    self.value = '';
    self.customizations = customizations || [];

    _init();

    self.setCustomizations = setCustomizations;
    self.addCustomization = addCustomization;
    self.removeCustomization = removeCustomization;
    self.setValue = setValue;
    self.toJSON = toJSON;

    function _init() {
      self.customized = !!self.customizations.length;
      _translateValue();
    }

    function addCustomization(value, label) {
      if (!value) {
        throw new Error("Customization must have a value");
      }

      if (_findCustomization(value)) {
        throw new Error("Customization with value " + value + "already exists.");
      }

      self.customizations.push(new StaticVariableCustomization(value, label));
    }

    function removeCustomization(ix) {
      return self.customizations.splice(ix, 1);
    }

    function setValue(value) {
      self.value = value;
      _translateValue();
    }

    function setCustomizations(customizations) {
      self.customizations = customizations.map(function (custom) {
        return new StaticVariableCustomization(custom.value, custom.label);
      });
    }

    function _translateValue() {
      var stringValue = self.value.toString();
      var translation = self.customizations.find(function (custom) {
        return custom.value === stringValue;
      });

      if (!translation) {
        self.translatedValue = stringValue;
        return;
      }

      self.translatedValue = translation.label;
    }

    function _findCustomization(value) {
      return self.customizations.find(function (custom) {
        return custom.value === value;
      });
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.label = self.label;
      json.sending = self.sending;
      json.bindToWholeTemplate = self.bindToWholeTemplate;
      json.bindTo = self.bindTo;
      json.customizations = self.customizations;

      return json;
    }

    return self;
  }

  function StaticVariableCustomization(value, label) {
    var self = this;

    self.toJSON = toJSON;

    self.objectType = "StaticVariableCustomization";
    self.value = value;
    self.label = label || '';

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.value = self.value;
      json.label = self.label;

      return json;
    }

    return self;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.staticVariable').service('otusjs.staticVariable.StaticVariableManagerFactory', Factory);

  Factory.$inject = ['otusjs.staticVariable.StaticVariableFactory'];

  function Factory(SurveyStaticVariable) {
    var self = this;

    self.create = create;

    function create() {
      return new StaticVariableManager(SurveyStaticVariable);
    }
    return self;
  }

  function StaticVariableManager(SurveyStaticVariable) {
    var self = this;
    var _items = [];

    /* Public interface */
    self.loadJsonData = loadJsonData;
    self.create = create;
    self.add = add;
    self.remove = remove;
    self.update = update;
    self.getStaticVariableList = getStaticVariableList;
    self.fillVariables = fillVariables;
    self.getWholeTemplateVariables = getWholeTemplateVariables;
    self.getItemVariables = getItemVariables;

    function loadJsonData(itemsArray) {
      itemsArray.forEach(function (item) {
        try {
          add(SurveyStaticVariable.fromJson(item));
        } catch (e) {}
      });
    }

    function create() {
      return SurveyStaticVariable.create();
    }

    function add(variable) {
      _validateInsertion(variable);

      _findVariableIndex(variable.name, variable.sending);
      _items.push(variable);
    }

    function remove(index) {
      _items.splice(index, 1);
    }

    function update(index, variable) {
      _validateInsertion(variable);

      _items[index] = variable;
    }

    function getStaticVariableList() {
      return _items;
    }

    function _findVariableIndex(name, sending) {
      return _items.findIndex(function (item) {
        return item.name === name && item.sending === sending;
      });
    }

    function fillVariables(responseArray) {
      responseArray.forEach(function (resp) {
        var index = _findVariableIndex(resp.name, resp.sending);
        _items[index].setValue(resp.value);
      });
    }

    function getWholeTemplateVariables() {
      return _items.filter(function (item) {
        return item.bindToWholeTemplate === true;
      });
    }

    function getItemVariables(itemId) {
      return _items.filter(function (item) {
        return item.bindTo.includes(itemId);
      });
    }

    function _validateInsertion(variable) {
      if (!variable.name) {
        throw new Error("Variable with empty name can't be added");
      }

      if (!variable.sending) {
        throw new Error("Variable with empty sending id can't be added");
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItemGroup').factory('otusjs.surveyItemGroup.SurveyItemGroupFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(members) {
      return new SurveyItemGroup(members);
    }

    function fromJson(groupJson) {
      var group = new SurveyItemGroup();
      group.rewrite(groupJson);
      return group;
    }
    return self;
  }

  function SurveyItemGroup(members) {
    var self = this;
    var POSITION = {
      START: 'start',
      MIDDLE: 'middle',
      END: 'end'
    };

    self.objectType = "SurveyItemGroup";
    self.start = '';
    self.end = '';
    self.members = [];

    self.hasMember = hasMember;
    self.getMember = getMember;
    self.removeMember = removeMember;
    self.rewrite = rewrite;

    init();

    function init() {
      if (members && members.length) {
        var start = members.shift();
        var end = members.pop();
        self.start = start;
        self.end = end;
        self.members.push(new GroupMember(start, POSITION.START));
        members.forEach(function (member) {
          self.members.push(new GroupMember(member, POSITION.MIDDLE));
        });
        self.members.push(new GroupMember(end, POSITION.END));
      }
    }

    function getMember(id) {
      return self.members.find(function (member) {
        return member.id === id;
      });
    }

    function removeMember(id) {
      var member = self.getMember(id);
      if (self.members.length <= 2) {
        throw new Error("A group must have at least 2 members");
      }
      if (member) {
        if (member.position === 'start') {
          self.members.splice(0, 1);
          var newStart = self.members[0];
          self.start = newStart.id;
          newStart.position = 'start';
        } else if (member.position === 'end') {
          self.members.splice(-1, 1);
          var newEnd = self.members[self.members.length - 1];
          self.end = newEnd.id;
          newEnd.position = 'end';
        } else if (member.position === 'middle') {
          var indexToRemove = self.members.indexOf(member);
          self.members.splice(indexToRemove, 1);
        }
      }
    }

    function hasMember(id) {
      return !!getMember(id);
    }

    function rewrite(surveyItemGroup) {
      if (surveyItemGroup && surveyItemGroup.objectType === self.objectType) {
        self.start = surveyItemGroup.start;
        self.end = surveyItemGroup.end;
        self.members = surveyItemGroup.members;
      }
    }
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};
      json.objectType = self.objectType;
      json.start = self.start;
      json.end = self.end;
      json.members = self.members;
      return json;
    }
    return self;
  }

  function GroupMember(id, position) {
    return {
      id: id,
      position: position
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItemGroup').service('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory', Factory);

  Factory.$inject = ['otusjs.survey.ManagerCenterService', 'otusjs.surveyItemGroup.SurveyItemGroupFactory'];

  function Factory(ManagerCenterService, SurveyItemGroupFactory) {
    var self = this;
    self.create = create;

    function create() {
      return new SurveyItemGroupManager(ManagerCenterService, SurveyItemGroupFactory);
    }
    return self;
  }

  function SurveyItemGroupManager(ManagerCenterService, SurveyItemGroupFactory) {
    var self = this;
    var _groups = [];

    /* Public interface */
    self.loadJsonData = loadJsonData;
    self.allowItemMovement = allowItemMovement;
    self.removeItemFromGroup = removeItemFromGroup;

    self.getSurveyItemGroupList = getSurveyItemGroupList;
    self.getGroupByStart = getGroupByStart;
    self.getGroupByMember = getGroupByMember;

    self.createGroup = createGroup;
    self.deleteGroup = deleteGroup;
    self.getGroupCandidates = getGroupCandidates;

    function loadJsonData(groupsArray) {
      if (groupsArray) {
        _groups = groupsArray.map(function (groupJson) {
          return SurveyItemGroupFactory.fromJson(groupJson);
        });
      } else {
        _groups = [];
      }
    }

    function allowItemMovement(templateID, position) {
      var lastItemInPosition = ManagerCenterService.getSurveyItemManager().getItemByPosition(position);

      if (lastItemInPosition) {
        var groupCheck = getGroupByMember(lastItemInPosition.templateID);

        if (groupCheck) {
          var member = groupCheck.getMember(lastItemInPosition.templateID);
          if (member) {
            if (member.position !== 'start') {
              throw new Error("Can not move item to inside of an existing group");
            }
          }
        }
      }
      removeItemFromGroup(templateID);
    }

    function removeItemFromGroup(templateID) {
      var group = getGroupByMember(templateID);
      if (group) {
        if (group && group.members.length <= 2) {
          deleteGroup(group.start);
        } else {
          group.removeMember(templateID);
        }
      }
    }

    function getSurveyItemGroupList() {
      return _groups;
    }

    function getGroupByStart(startName) {
      return _groups.find(function (group) {
        return group.start === startName;
      });
    }

    function getGroupByMember(id) {
      var groupFound = void 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var group = _step.value;

          if (group.hasMember(id)) {
            groupFound = group;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return groupFound;
    }

    function createGroup(members) {
      validateGroupMembers(members);

      var group = SurveyItemGroupFactory.create(members);
      var existentGroup = getGroupByStart(group.start);

      if (existentGroup) {
        existentGroup.rewrite(group);
      } else {
        _groups.push(group);
      }
      return group;
    }

    function deleteGroup(start) {
      var ix = _groups.findIndex(function (group) {
        return group.start === start;
      });

      if (ix > -1) {
        _groups.splice(ix, 1);
        return true;
      }
    }

    function validateGroupMembers(members) {
      if (members.length < 2) {
        throw new Error('Groups should be composed of more than one member');
      }

      var candidates = getGroupCandidates(members[0]);
      members.forEach(function (member, ix) {
        if (candidates[ix] !== member) {
          throw new Error(member + ' cannot be added to the group');
        }
      });
    }

    function getGroupCandidates(startingPointID) {
      //gets id, returns every id that can be grouped with
      var navigation = ManagerCenterService.getNavigationManager().getNavigationByOrigin(startingPointID);
      var originalGroup = getGroupByMember(startingPointID);

      if (_allowedAsFirstMember(navigation)) {
        return chainGroupCandidates(originalGroup, navigation.getDefaultRoute().destination, [startingPointID]);
      } else {
        return [startingPointID];
      }
    }

    function chainGroupCandidates(originalGroup, origin, candidatesChain) {
      var navigation = ManagerCenterService.getNavigationManager().getNavigationByOrigin(origin);
      var group = getGroupByMember(origin);

      if (group) {
        if (!originalGroup || originalGroup.start !== group.start) {
          return candidatesChain;
        }
      }

      if (_allowedAsMiddleMember(navigation)) {
        candidatesChain.push(origin);
        return chainGroupCandidates(originalGroup, navigation.getDefaultRoute().destination, candidatesChain);
      }

      if (_allowedAsLastMember(navigation)) {
        candidatesChain.push(origin);
        return candidatesChain;
      }
      return candidatesChain;
    }

    function _allowedAsFirstMember(navigation) {
      return !navigation.isEndNode(navigation) && !navigation.hasMultipleOutRoutes(navigation);
    }

    function _allowedAsLastMember(navigation) {
      return !navigation.isEndNode(navigation) && !navigation.hasMultipleInNavigations(navigation);
    }

    function _allowedAsMiddleMember(navigation) {
      return !navigation.hasMultipleOutRoutes(navigation) && !navigation.isEndNode(navigation) && !navigation.hasMultipleInNavigations(navigation);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.ActivityFactory', Factory);

  Factory.$inject = ['otusjs.model.activity.StatusHistoryManagerFactory', 'otusjs.model.activity.FillingManagerFactory', 'otusjs.model.navigation.NavigationTrackerFactory', 'otusjs.model.activity.InterviewManagerFactory', 'SurveyFormFactory'];

  var Inject = {};

  function Factory(StatusHistoryManagerFactory, FillingManagerFactory, NavigationTrackerFactory, InterviewManagerFactory, SurveyFormFactory) {
    Inject.FillingManager = FillingManagerFactory.create();
    Inject.NavigationTrackerFactory = NavigationTrackerFactory;
    Inject.SurveyFormFactory = SurveyFormFactory;

    var self = this;
    self.OBJECT_TYPE = 'Activity';

    /* Public methods */
    self.create = create;
    self.createPaperActivity = createPaperActivity;
    self.createAutoFillActivity = createAutoFillActivity;
    self.createOfflineActivity = createOfflineActivity;
    self.fromJsonObject = fromJsonObject;

    function create(surveyForm, user, participant, activityConfiguration, id, externalID) {
      Inject.FillingManager.init();
      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      var interviews = InterviewManagerFactory.create();
      var activity = new ActivitySurvey(surveyForm, participant, statusHistory, interviews, id, externalID);
      activity.mode = 'ONLINE';
      activity.category = activityConfiguration.category;
      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      return activity;
    }

    function createPaperActivity(surveyForm, user, participant, paperActivityData, activityConfiguration, id, externalID) {
      Inject.FillingManager.init();
      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      statusHistory.newInitializedOfflineRegistry(paperActivityData);
      var interviews = InterviewManagerFactory.create();
      var activity = new ActivitySurvey(surveyForm, participant, statusHistory, interviews, id, externalID);
      activity.mode = 'PAPER';
      activity.category = activityConfiguration.category;
      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      return activity;
    }

    function createOfflineActivity(surveyForm, user) {
      Inject.FillingManager.init();
      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      var interviews = InterviewManagerFactory.create();
      var activity = new ActivitySurvey(surveyForm, {}, statusHistory, interviews);
      activity.mode = 'OFFLINE';
      activity.category = {};
      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      return activity;
    }

    function createAutoFillActivity(surveyForm, user, participant, activityConfiguration) {
      Inject.FillingManager.init();
      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      var interviews = InterviewManagerFactory.create();
      var activity = new ActivitySurvey(surveyForm, participant, statusHistory, interviews);
      activity.mode = 'AUTOFILL';
      activity.category = activityConfiguration.category;
      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      return activity;
    }

    function fromJsonObject(jsonObject) {
      var surveyForm = SurveyFormFactory.fromJsonObject(jsonObject.surveyForm);
      var participantData = jsonObject.participantData;
      var statusHistory = StatusHistoryManagerFactory.fromJsonObject(jsonObject.statusHistory);
      var interviews = InterviewManagerFactory.fromJsonObject(jsonObject.interviews);
      var id = jsonObject._id;
      var activity = new ActivitySurvey(surveyForm, participantData, statusHistory, interviews, id);
      activity.category = jsonObject.category;
      activity.fillContainer = FillingManagerFactory.fromJsonObject(jsonObject.fillContainer);
      activity.isDiscarded = jsonObject.isDiscarded;
      activity.mode = jsonObject.mode;
      activity.statusHistory = StatusHistoryManagerFactory.fromJsonObject(jsonObject.statusHistory);
      activity.interviews = InterviewManagerFactory.fromJsonObject(jsonObject.interviews);
      activity.externalID = jsonObject.externalID;

      _addBackCompatibility(activity, jsonObject);
      return activity;
    }

    function _addBackCompatibility(activity, jsonObject) {
      if (!jsonObject.navigationTracker) {
        activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      } else {
        activity.setNavigationTracker(Inject.NavigationTrackerFactory.fromJsonObject(jsonObject.navigationTracker));
      }
    }

    return self;
  }

  function ActivitySurvey(surveyForm, participant, statusHistory, interviews, id, externalID) {
    var self = this;
    var _id = id || null;

    self.objectType = 'Activity';
    self.surveyForm = surveyForm;
    self.participantData = participant;
    self.interviews = interviews;
    self.fillContainer = Inject.FillingManager;
    self.statusHistory = statusHistory;
    self.isDiscarded = false;
    self.externalID = externalID || null;

    /* Public methods */
    self.getID = getID;
    self.getItems = getItems;
    self.getGroupByItemID = getGroupByItemID;
    self.getGroupItemsByItemID = getGroupItemsByItemID;
    self.getNavigations = getNavigations;
    self.getExportableList = getExportableList;
    self.getTemplate = getTemplate;
    self.getIdentity = getIdentity;
    self.getName = getName;
    self.getRealizationDate = getRealizationDate;
    self.getNavigationTracker = getNavigationTracker;
    self.setNavigationTracker = setNavigationTracker;
    self.clearSkippedAnswers = clearSkippedAnswers;
    self.getDataSources = getDataSources;
    self.getStaticVariableList = getStaticVariableList;
    self.getWholeTemplateVariableList = getWholeTemplateVariableList;
    self.getItemStaticVariableList = getItemStaticVariableList;
    self.fillStaticVariablesValues = fillStaticVariablesValues;
    self.toJSON = toJSON;
    self.toObjectJson = toObjectJson;
    self.hasRequiredExternalID = hasRequiredExternalID;

    function getID() {
      return _id;
    }

    function getItems() {
      return getTemplate().getItems();
    }

    function getGroupByItemID(templateID) {
      return getTemplate().getGroupByItemID(templateID);
    }

    function getGroupItemsByItemID(templateID) {
      return getTemplate().getGroupItemsByItemID(templateID);
    }

    function getNavigations() {
      return getTemplate().NavigationManager.getNavigationList();
    }

    function getExportableList() {
      var fullList = getTemplate().NavigationManager.getNavigationList();
      return fullList.slice(2, fullList.length);
    }

    function getDataSources() {
      return getTemplate().getAllDataSources();
    }

    function getTemplate() {
      if (_existStructuralFailure()) {
        return self.surveyForm;
      } else {
        return self.surveyForm.surveyTemplate;
      }
    }

    function getIdentity() {
      var template = getTemplate();
      if (!template.identity) return template;else return template.identity;
    }

    function getName() {
      return getIdentity().name;
    }

    function getRealizationDate() {
      var finalizedRegistries = self.statusHistory.getFinalizedRegistries();
      var lastFinalizedStatus = finalizedRegistries[finalizedRegistries.length - 1];
      var offlineInitialization = self.statusHistory.getInitializedOfflineRegistry();

      if (lastFinalizedStatus) {
        return lastFinalizedStatus.date;
      } else if (offlineInitialization) {
        return offlineInitialization.date;
      } else {
        throw new Error('Can not determine the realization date of Activity.');
      }
    }

    function getNavigationTracker() {
      return self.navigationTracker;
    }

    function clearSkippedAnswers() {
      self.navigationTracker.getSkippedItems().forEach(function (itemTracking) {
        self.fillContainer.clearFilling(itemTracking.getID());
      });
    }

    function setNavigationTracker(stack) {
      self.navigationTracker = stack;
    }

    function getStaticVariableList() {
      return getTemplate().getStaticVariableList();
    }

    function getWholeTemplateVariableList() {
      return getTemplate().getWholeTemplateVariableList();
    }

    function getItemStaticVariableList(itemID) {
      return getTemplate().getItemStaticVariableList(itemID);
    }

    function fillStaticVariablesValues(fillingArray) {
      return getTemplate().fillStaticVariablesValues(fillingArray);
    }

    function toJSON() {
      var json = {};
      json.objectType = self.objectType;
      json._id = _id;
      json.surveyForm = self.surveyForm;
      json.participantData = self.participantData;
      json.category = self.category;
      json.mode = self.mode;
      json.fillContainer = self.fillContainer.buildJsonToFillContainer();
      json.statusHistory = self.statusHistory.toJSON().map(function (statusHistory) {
        return statusHistory;
      });
      json.interviews = self.interviews.toJSON().map(function (interview) {
        return interview;
      });
      json.isDiscarded = self.isDiscarded;
      json.navigationTracker = self.navigationTracker;
      json.externalID = self.externalID;

      return json;
    }

    function toObjectJson() {
      return JSON.parse(JSON.stringify(self));
    }

    /**
     * TODO: effectively to resolve the bug #252 (Mantis)
     * This method is an workaround for the reported bug #252 (on Mantis) and story OTUS-85 (on
     * Jira). The problem is: ActivitySurvey generation. In Otus Studio, the survey template goes to
     * activitie's property "surveyForm", but in the Otus the survey template goes to SurveyForm's
     * property "surveyTemplate" (this is the CORRECT way).
     */
    function _existStructuralFailure() {
      return !self.surveyForm.surveyTemplate ? true : false;
    }

    function hasRequiredExternalID() {
      return self.surveyForm.isRequiredExternalID();
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.ActivityParticipantDataFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'ActivityParticipantData';

    /* Public methods */
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
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.recruitmentNumber = self.recruitmentNumber;
      json.name = self.name;
      json.fieldCenter = self.fieldCenter;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.ActivityPermissionFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(surveyForm) {
      return new ActivityPermission(surveyForm);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (permission) {
          return new ActivityPermission(permission);
        });
      } else {
        return new ActivityPermission(jsonObject);
      }
    }

    return self;
  }

  function ActivityPermission(objectJson) {
    var self = this;

    self.showError = showError;

    self._id = '_id' in objectJson ? objectJson._id : null;
    self.objectType = 'ActivityPermission';

    self.acronym = 'surveyTemplate' in objectJson ? objectJson.surveyTemplate.identity.acronym.toUpperCase() : objectJson.acronym.toUpperCase();
    self.version = objectJson.version ? objectJson.version : self.showError('Version invalid');
    self.exclusiveDisjunction = Array.isArray(objectJson.exclusiveDisjunction) ? objectJson.exclusiveDisjunction : [];

    /* Public methods */
    self.addUser = addUser;
    self.removeUser = removeUser;
    self.isUserExists = isUserExists;
    self.toJSON = toJSON;

    function showError(msg) {
      throw new Error(msg);
    }

    function addUser(email) {
      if (!_validEmail(email)) {
        self.showError('Email invalid!');
      } else if (!self.isUserExists(email)) {
        self.exclusiveDisjunction.push(email.toLowerCase());
      }
    }

    function removeUser(email) {
      if (!_validEmail(email)) {
        self.showError('Email invalid!');
      } else if (self.isUserExists(email)) {
        var index = self.exclusiveDisjunction.indexOf(email.toLowerCase());
        if (index > -1) {
          self.exclusiveDisjunction.splice(index, 1);
        }
      }
    }

    function isUserExists(email) {
      var index = self.exclusiveDisjunction.indexOf(email.toLowerCase());
      return index > -1 ? true : false;
    }

    function _validEmail(email) {
      var Regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/gi;
      return Regex.test(email);
    }

    function toJSON() {
      var json = {};
      json._id = self._id;
      json.objectType = self.objectType;
      json.acronym = self.acronym;
      json.version = self.version;
      json.exclusiveDisjunction = self.exclusiveDisjunction;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.ActivityStatusFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'ActivityStatus';

    /* Public methods */
    self.createCreatedStatus = createCreatedStatus;
    self.createInitializedOfflineStatus = createInitializedOfflineStatus;
    self.createInitializedOnlineStatus = createInitializedOnlineStatus;
    self.createOpenedStatus = createOpenedStatus;
    self.createSavedStatus = createSavedStatus;
    self.createFinalizedStatus = createFinalizedStatus;
    self.fromJsonObject = fromJsonObject;

    function createCreatedStatus(user) {
      return new ActivityStatus('CREATED', user);
    }

    function createInitializedOfflineStatus(offlineData) {
      return new ActivityStatus('INITIALIZED_OFFLINE', offlineData.checker, offlineData.realizationDate);
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

    function fromJsonObject(jsonObject) {
      var status = new ActivityStatus(jsonObject.name, jsonObject.user);
      status.date = new Date(jsonObject.date);
      return status;
    }

    return self;
  }

  function ActivityStatus(name, user, statusDate) {
    var self = this;

    self.objectType = 'ActivityStatus';
    self.name = name;
    self.date = statusDate || new Date();
    self.user = user;

    /* Public methods */
    self.toJSON = toJSON;
    self.setUser = setUser;
    self.setDate = setDate;

    function setUser(user) {
      if (self.name === 'INITIALIZED_OFFLINE') {
        self.user = angular.copy(user);
      }
    }

    function setDate(date) {
      if (self.name === 'INITIALIZED_OFFLINE') {
        self.date = angular.copy(date);
      }
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.date = self.date;
      json.user = self.user;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.ActivityUserFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'ActivityUser';

    /* Public methods */
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

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.email = self.email;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.AnswerFillFactory', Factory);

  Factory.$inject = ['otusjs.model.activity.AnswerEvaluationService', 'otusjs.utils.ImmutableDate'];

  function Factory(AnswerEvaluationService, ImmutableDate) {
    var self = this;

    self.OBJECT_TYPE = 'AnswerFill';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(questionType, value) {
      return new AnswerFill(value, AnswerEvaluationService.getEvaluator(questionType), questionType);
    }

    function fromJsonObject(jsonObject) {
      //TODO montar serviço responsável por essa verificação
      if (jsonObject.type === "CalendarQuestion" || jsonObject.type === "TimeQuestion") {
        if (jsonObject.value !== null) {
          return create(jsonObject.type, new ImmutableDate(jsonObject.value.value));
        }
      }
      return create(jsonObject.type, jsonObject.value);
    }

    return self;
  }

  function AnswerFill(value, evaluator, questionType) {
    var self = this;

    self.objectType = 'AnswerFill';
    self.type = questionType;
    self.value = value === undefined ? null : value;
    self.eval = evaluator;

    /* Public methods */
    self.isFilled = isFilled;
    self.clear = clear;
    self.toJSON = toJSON;

    function isFilled() {
      return self.value !== null ? true : false;
    }

    function clear() {
      self.value = null;
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.type = self.type;
      json.value = self.value;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.InterviewFactory', Factory);

  Factory.$inject = ['otusjs.model.activity.InterviewerFactory'];

  function Factory(InterviewerFactory) {
    var self = this;

    self.OBJECT_TYPE = 'Interview';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(user) {
      var interviewer = InterviewerFactory.create(user);
      return new Interview(interviewer);
    }

    function fromJsonObject(jsonObject) {
      var interviewer = InterviewerFactory.fromJsonObject(jsonObject.interviewer);
      var interview = new Interview(interviewer);
      interview.date = new Date(jsonObject.date);
      return interview;
    }

    return self;
  }

  function Interview(interviewer) {
    var self = this;

    self.objectType = 'Interview';
    self.date = new Date();
    self.interviewer = interviewer;

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.date = self.date;
      json.interviewer = self.interviewer;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.InterviewerFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'Interviewer';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(userData) {
      return new Interviewer(userData || {});
    }

    function fromJsonObject(jsonObject) {
      return new Interviewer(jsonObject);
    }

    return self;
  }

  function Interviewer(userData) {
    var self = this;

    self.objectType = 'Interviewer';
    self.name = userData.name;
    self.surname = userData.surname;
    self.email = userData.email;

    /* Public methods */
    self.getFullname = getFullname;
    self.toJSON = toJSON;

    function getFullname() {
      return self.name + ' ' + self.surname;
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.surname = self.surname;
      json.email = self.email;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.MetadataFillFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'MetadataFill';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(value) {
      return new MetadataFill(value);
    }

    function fromJsonObject(jsonObject) {
      return create(jsonObject.value);
    }

    return self;
  }

  function MetadataFill(value) {
    var self = this;

    self.objectType = 'MetadataFill';
    self.value = value === undefined ? null : value;

    /* Public methods */
    self.isFilled = isFilled;
    self.clear = clear;
    self.toJSON = toJSON;

    function isFilled() {
      return self.value !== null ? true : false;
    }

    function clear() {
      self.value = null;
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.value = self.value;

      return json;
    }
  }
})();
'use strict';

(function () {

  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.OfflineActivityCollection', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    function create() {
      return new OfflineActivityCollection({});
    }

    function fromJson(json, email) {
      return new OfflineActivityCollection(json, email);
    }

    function fromArray(jsonArray, email) {
      var _collections = Array.prototype.concat.apply(jsonArray);
      return _collections.map(function (jsonObject) {
        return new OfflineActivityCollection(jsonObject, email);
      });
    }

    return self;
  }

  function OfflineActivityCollection(jsonObject, userEmail) {
    var self = this;

    var OBJECT_TYPE = 'Activity';
    var CREATED = 'CREATED';

    self.objectType = "OfflineActivityCollection";
    self._id = jsonObject._id ? new ObjectId(jsonObject._id).toString() : null;
    self.code = jsonObject._id ? new ObjectId(jsonObject._id).toString() : jsonObject.code || null;
    self.observation = jsonObject.observation || '';
    self.userId = jsonObject.userId ? new ObjectId(jsonObject.userId).toString() : null;
    self.userEmail = userEmail || null;
    self.date = jsonObject.date || null;
    self.activities = jsonObject.activities || [];
    self.geoJson = jsonObject.geoJson || null;
    self.hasInitialized = !!self.date;

    self.initialize = initialize;
    self.addActivity = addActivity;
    self.addActivities = addActivities;
    self.removeActivity = removeActivity;
    self.getActivitiesToSave = getActivitiesToSave;

    self.toJSON = toJSON;

    function initialize() {
      self.date = new Date().toISOString();
      self.geoJson = new GeoJSON();
      self.hasInitialized = true;
    }

    function addActivity(activity) {
      if (_validateActivityObject(activity)) {
        self.activities.push(activity);
      }
    }

    function getActivitiesToSave() {
      return self.activities.filter(function (activity) {
        return activity.statusHistory.getLastStatus().name != CREATED;
      });
    }

    function addActivities(activities) {
      Array.prototype.concat.apply(activities).forEach(function (activity) {
        self.addActivity(activity);
      });
    }

    function removeActivity(index) {
      if (index >= 0 && index < self.activities.length) {
        self.activities.splice(index, 1);
      }
    }

    function _validateActivityObject(activity) {
      return activity.objectType === OBJECT_TYPE;
    }

    function toJSON() {
      var json = {};
      json._id = self._id;
      json.code = self.code;
      json.objectType = self.objectType;
      json.observation = self.observation;
      json.userId = self.userId;
      json.userEmail = self.userEmail;
      self.date ? json.date = self.date : null;
      json.activities = self.activities;
      json.geoJson = self.geoJson;
      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.QuestionFillFactory', Factory);

  Factory.$inject = ['otusjs.model.activity.AnswerFillFactory', 'otusjs.model.activity.MetadataFillFactory'];

  function Factory(AnswerFillFactory, MetadataFillFactory) {
    var self = this;

    self.OBJECT_TYPE = 'QuestionFill';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(item, answer, metadata, comment) {
      var answerFill = AnswerFillFactory.create(item.objectType, answer);
      var metadataFill = MetadataFillFactory.create(metadata);
      return new QuestionFill(item, answerFill, metadataFill, comment);
    }

    function fromJsonObject(jsonObject) {
      var answerFill = AnswerFillFactory.fromJsonObject(jsonObject.answer);
      var metadataFill = MetadataFillFactory.fromJsonObject(jsonObject.metadata);

      var questionFill = new QuestionFill({ templateID: jsonObject.questionID }, answerFill, metadataFill, jsonObject.comment);
      questionFill.forceAnswer = jsonObject.forceAnswer;

      return questionFill;
    }

    return self;
  }

  function QuestionFill(item, answer, metadata, comment) {
    var self = this;

    self.objectType = 'QuestionFill';
    self.questionID = item.templateID;
    self.answer = answer;
    self.metadata = metadata;
    self.comment = comment === undefined ? '' : comment;
    self.forceAnswer = false;
    self.isFilled = isFilled;
    self.isIgnored = isIgnored;
    self.clear = clear;

    /* Public methods */
    self.toJSON = toJSON;

    function isFilled() {
      return self.answer.isFilled() || self.metadata.isFilled() || !!self.comment;
    }

    function isIgnored() {
      return self.answer.value === null || self.answer.value.trim() === '';
    }

    function clear() {
      self.answer.clear();
      self.metadata.clear();
      self.comment = '';
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.questionID = self.questionID;
      json.forceAnswer = self.forceAnswer;
      json.answer = self.answer;
      json.metadata = self.metadata;
      json.comment = self.comment;
      json.accept = self.accept;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.RevisionFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;
    self.fromJsonObject = fromJsonObject;

    function create(activityID, revisionDate) {
      validateRevision(activityID);
      return new Revision(activityID, revisionDate);
    }

    function fromJson(jsonArray) {
      if (Array.isArray(jsonArray)) {
        return jsonArray.map(function (revision) {
          return self.fromJsonObject(revision);
        });
      } else {
        throw new Error("Validation error: Malformed array");
      }
    }

    function fromJsonObject(jsonObject) {
      validateRevision(jsonObject.activityID);
      return new Revision(jsonObject.activityID, jsonObject.revisionDate, jsonObject.user);
    }

    function validateRevision(activityID) {
      if (!activityID) {
        throw new Error("Validation error: Activity ID not found");
      }
    }

    return self;
  }

  function Revision(activityID, statusDate, user) {
    var self = this;

    self.objectType = 'ActivityRevision';
    self.activityID = activityID || '';
    self.revisionDate = statusDate || new Date();
    self.user = user || null;

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.activityID = self.activityID;
      json.revisionDate = self.revisionDate;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.ActivityFacadeService', ActivityFacadeService);

  ActivityFacadeService.$inject = ['otusjs.model.activity.AnswerFillFactory', 'otusjs.model.activity.MetadataFillFactory', 'otusjs.model.activity.QuestionFillFactory', 'otusjs.model.activity.ActivityFactory', 'otusjs.model.activity.InterviewFactory', 'otusjs.model.activity.RevisionFactory'];

  function ActivityFacadeService(AnswerFillFactory, MetadataFillFactory, QuestionFillFactory, ActivityFactory, InterviewFactory, ActivityRevisionFactory) {
    var self = this;
    var _user = null;
    self.surveyActivity = null;

    /* Public interface */
    self.createActivity = createActivity;
    self.createPaperActivity = createPaperActivity;
    self.createQuestionFill = createQuestionFill;
    self.fillQuestion = fillQuestion;
    self.getInterviewer = getInterviewer;
    self.openActivitySurvey = openActivitySurvey;
    self.initializeActivitySurvey = initializeActivitySurvey;
    self.finalizeActivitySurvey = finalizeActivitySurvey;
    self.saveActivitySurvey = saveActivitySurvey;
    self.getFillingByQuestionID = getFillingByQuestionID;
    self.clearSkippedAnswers = clearSkippedAnswers;
    self.getNavigationTracker = getNavigationTracker;
    self.createActivityRevision = createActivityRevision;
    self.createActivityRevisionFromJson = createActivityRevisionFromJson;
    self.getWholeTemplateVariableList = getWholeTemplateVariableList;
    self.getItemStaticVariableList = getItemStaticVariableList;
    self.fillStaticVariablesValues = fillStaticVariablesValues;
    self.hasRequiredExternalID = hasRequiredExternalID;

    function createActivity(template, user, participant, activityConfiguration, externalID) {
      self.surveyActivity = ActivityFactory.create(template, user, participant, activityConfiguration, null, externalID);
    }

    function createPaperActivity(template, user, participant, paperActivityData, activityConfiguration, externalID) {
      self.surveyActivity = ActivityFactory.createPaperActivity(template, user, participant, paperActivityData, activityConfiguration, null, externalID);
    }

    function getInterviewer() {
      return _user;
    }

    function openActivitySurvey(user) {
      _user = user;
      self.surveyActivity.statusHistory.newOpenedRegistry(_user);
    }

    function initializeActivitySurvey() {
      self.surveyActivity.statusHistory.newInitializedOnlineRegistry(_user);
    }

    function finalizeActivitySurvey() {
      self.surveyActivity.statusHistory.newFinalizedRegistry(_user);
      self.surveyActivity.interviews.newRegistry(_user);
    }

    function saveActivitySurvey() {
      self.surveyActivity.statusHistory.newSavedRegistry(_user);
      self.surveyActivity.interviews.newRegistry(_user);
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

    function clearSkippedAnswers() {
      self.surveyActivity.clearSkippedAnswers();
    }

    function getNavigationTracker() {
      return self.surveyActivity.getNavigationTracker();
    }

    function createActivityRevision(activityId, revisionDate) {
      return ActivityRevisionFactory.create(activityId, revisionDate);
    }

    function createActivityRevisionFromJson(jsonArray) {
      return ActivityRevisionFactory.fromJson(jsonArray);
    }

    function getWholeTemplateVariableList() {
      return self.surveyActivity.getWholeTemplateVariableList();
    }

    function getItemStaticVariableList(itemID) {
      return self.surveyActivity.getItemStaticVariableList(itemID);
    }

    function fillStaticVariablesValues(fillingArray) {
      return self.surveyActivity.fillStaticVariablesValues(fillingArray);
    }

    function hasRequiredExternalID() {
      return self.surveyActivity.hasRequiredExternalID();
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.FillingManagerFactory', Factory);

  Factory.$inject = ['otusjs.model.activity.QuestionFillFactory'];

  function Factory(QuestionFillFactory) {
    var self = this;

    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new FillingManager();
    }

    function fromJsonObject(jsonObject) {
      var fillingList = jsonObject.fillingList.map(QuestionFillFactory.fromJsonObject);
      var fillingManager = new FillingManager();
      fillingManager.init(fillingList);

      return fillingManager;
    }

    return self;
  }

  function FillingManager() {
    var self = this;
    var _fillingList = [];

    /* Public methods */
    self.init = init;
    self.listSize = listSize;
    self.getFillingIndex = getFillingIndex;
    self.existsFillingTo = existsFillingTo;
    self.searchFillingByID = searchFillingByID;
    self.updateFilling = updateFilling;
    self.clearFilling = clearFilling;
    self.buildJsonToFillContainer = buildJsonToFillContainer;

    function init(fillingList) {
      _fillingList = fillingList || [];
    }

    function listSize() {
      return _fillingList.length;
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

    function clearFilling(questionID) {
      _removeFilling(questionID);
    }

    function buildJsonToFillContainer() {
      var json = {};

      json.fillingList = _fillingList.map(function (questionFill) {
        return questionFill.toJSON();
      });

      return json;
    }

    function _searchByID(questionID) {
      var result;

      _fillingList.forEach(function (filling, index) {
        if (filling.questionID === questionID) {
          result = {};
          result.filling = filling;
          result.index = index;
        }
      });

      return result;
    }

    function _add(filling) {
      _fillingList.push(filling);
    }

    function _replaceFilling(filling) {
      var result = _searchByID(filling.questionID);
      if (result !== undefined) {
        return _fillingList.splice(result.index, 1, filling)[0];
      } else {
        return null;
      }
    }

    function _removeFilling(questionID) {
      var result = _searchByID(questionID);
      if (result !== undefined) {
        return _fillingList.splice(result.index, 1)[0];
      } else {
        return null;
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.InterviewManagerFactory', Factory);

  Factory.$inject = ['otusjs.model.activity.InterviewFactory'];

  var Inject = {};

  function Factory(InterviewFactory) {
    Inject.InterviewFactory = InterviewFactory;

    var self = this;
    self.OBJECT_TYPE = 'InterviewManager';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new InterviewManager();
    }

    function fromJsonObject(interviewList) {
      var _interviews = [];
      interviewList.map(function (interview) {
        _interviews.push(Inject.InterviewFactory.fromJsonObject(interview));
      });

      var interviewManager = create();
      interviewManager.init(_interviews);
      return interviewManager;
    }

    return self;
  }

  function InterviewManager() {
    var self = this;
    var _interviews = [];

    self.init = init;
    self.newRegistry = newRegistry;
    self.getInterviewSizeOfList = getInterviewSizeOfList;
    self.getInterviews = getInterviews;
    self.getLastStatus = getLastStatus;
    self.toJSON = toJSON;

    function init(interview) {
      _interviews = interview || [];
    }

    function newRegistry(user) {
      _interviews.push(Inject.InterviewFactory.create(user));
    }

    function getInterviews() {
      return _interviews;
    }

    function getLastStatus() {
      return _interviews[_interviews.length - 1];
    }

    function getInterviewSizeOfList() {
      return _interviews.length;
    }

    function toJSON() {
      return _interviews;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').factory('otusjs.model.activity.StatusHistoryManagerFactory', Factory);

  Factory.$inject = ['otusjs.model.activity.ActivityStatusFactory'];

  var Inject = {};

  function Factory(ActivityStatusFactory) {
    Inject.ActivityStatusFactory = ActivityStatusFactory;

    var self = this;
    self.OBJECT_TYPE = 'StatusHistoryManager';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new StatusHistoryManager();
    }

    function fromJsonObject(statusList) {
      var history = [];
      statusList.map(function (status) {
        history.push(Inject.ActivityStatusFactory.fromJsonObject(status));
      });

      var statusHistoryManager = create();
      statusHistoryManager.init(history);
      return statusHistoryManager;
    }

    return self;
  }

  function StatusHistoryManager() {
    var self = this;
    var _history = [];

    self.init = init;
    self.historySize = historySize;
    self.getHistory = getHistory;
    self.getLastStatus = getLastStatus;
    self.getInitializedOfflineRegistry = getInitializedOfflineRegistry;
    self.getFinalizedRegistries = getFinalizedRegistries;
    self.newCreatedRegistry = newCreatedRegistry;
    self.newInitializedOfflineRegistry = newInitializedOfflineRegistry;
    self.newInitializedOnlineRegistry = newInitializedOnlineRegistry;
    self.newOpenedRegistry = newOpenedRegistry;
    self.newSavedRegistry = newSavedRegistry;
    self.newFinalizedRegistry = newFinalizedRegistry;
    self.toJSON = toJSON;

    function init(history) {
      _history = history || [];
    }

    function getHistory() {
      return _history;
    }

    function getLastStatus() {
      return _history[_history.length - 1];
    }

    function getInitializedOfflineRegistry() {
      var registry = _history.filter(function (status) {
        return status.name === 'INITIALIZED_OFFLINE';
      });

      return registry[0];
    }

    function getFinalizedRegistries() {
      return _history.filter(function (status) {
        return status.name === 'FINALIZED';
      });
    }

    function newCreatedRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createCreatedStatus(user));
    }

    function newInitializedOfflineRegistry(offlineData) {
      _history.push(Inject.ActivityStatusFactory.createInitializedOfflineStatus(offlineData));
    }

    function newInitializedOnlineRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createInitializedOnlineStatus(user));
    }

    function newOpenedRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createOpenedStatus(user));
    }

    function newSavedRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createSavedStatus(user));
    }

    function newFinalizedRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createFinalizedStatus(user));
    }

    function historySize() {
      return _history.length;
    }

    function toJSON() {
      return _history;
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

    angular.module('otusjs.surveyItem').service('LoadSurveyItemService', LoadSurveyItemService);

    function LoadSurveyItemService() {
        var self = this;

        self.execute = execute;

        function execute(item, survey) {
            return survey.loadItem(item.objectType, item.templateID);
        }
    }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').service('MoveSurveyItemService', MoveSurveyItemService);

  function MoveSurveyItemService() {
    var self = this;

    self.execute = execute;

    function execute(survey, item, position) {
      survey.moveItem(item, position);
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

    function execute(item, id, survey) {
      // it needs a service to validate if is a valid or available id
      item.customID = id;
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  'use strict';

  angular.module('otusjs.model.chart').factory('otusjs.model.chart.VerticalBarFactory', Factory);

  Factory.$inject = ['otusjs.laboratory.configuration.AliquotDescriptorsService'];

  function Factory(AliquotDescriptorsService) {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MonitoringPending();
    }

    function fromJsonObject(jsonObject, labels) {
      var dataset = [];
      var keys = [];
      if (Array.isArray(jsonObject) && (typeof labels === 'undefined' ? 'undefined' : _typeof(labels)) === "object") {
        keys = Object.keys(jsonObject[0]);

        var _loop = function _loop(i) {
          dataset.push(jsonObject.map(function (data) {
            var title = AliquotDescriptorsService.getLabel(data.title);
            title = title ? title : data.title;
            return new MonitoringPending(labels[keys[i]], title, data[keys[i]]).toJSON();
          }));
        };

        for (var i = 1; i < keys.length; i++) {
          _loop(i);
        }
        return dataset;
      } else {
        return [[]];
      }
    }

    return self;
  }

  function MonitoringPending(title, column, value) {
    var self = this;

    self.toJSON = toJSON;

    self.char_title = title || "";
    self.column = column || "";
    self.value = value || 0;

    function toJSON() {
      var json = {};
      json.char_title = self.char_title;
      json.column = self.column;
      json.value = self.value;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.fieldCenter').factory('otusjs.model.fieldCenter.FieldCenterFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new FieldCenter({});
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (center) {
          return new FieldCenter(center);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function FieldCenter(fieldCenter) {
    var self = this;

    self.toJSON = toJSON;

    self.name = fieldCenter.name || null;
    self.code = fieldCenter.code || null;
    self.acronym = fieldCenter.acronym || null;
    self.country = fieldCenter.country || null;
    self.state = fieldCenter.state || null;
    self.address = fieldCenter.address || null;
    self.complement = fieldCenter.complement || null;
    self.zip = fieldCenter.zip || null;
    self.phone = fieldCenter.phone || null;
    self.backgroundColor = fieldCenter.backgroundColor || null;
    self.borderColor = fieldCenter.borderColor || null;

    function toJSON() {
      var json = {};

      json.name = self.name;
      json.code = self.code;
      json.acronym = self.acronym;
      json.country = self.country;
      json.state = self.state;
      json.address = self.address;
      json.complement = self.complement;
      json.zip = self.zip;
      json.phone = self.phone;
      json.backgroundColor = self.backgroundColor;
      json.borderColor = self.borderColor;

      return json;
    }
  }
})();
'use strict';

(function () {
  angular.module('otusjs.laboratory.configuration').service('otusjs.laboratory.configuration.AliquotDescriptorsService', Service);

  function Service() {
    var self = this;

    self.getLabel = getLabel;
    self.listDescriptors = listDescriptors;
    self.listLabels = listLabels;

    var DESCRIPTORS = {
      "BIOCHEMICAL_SERUM": "Bioquímica Soro",
      "PCR": "PCR",
      "FASTING_HORMONE_CENTRAL": "Hormônios Jejum Central",
      "FASTING_HORMONE_LOCAL": "Hormônios Jejum Local",
      "FASTING_GLYCEMIA_CENTRAL": "Glicemia Jejum Central",
      "FASTING_GLYCEMIA_LOCAL": "Glicemia Jejum Local",
      "FASTING_SERUM": "Soro Jejum",
      "HBA1C": "HbA1C",
      "FASTING_EDTA": "EDTA Jejum",
      "BUFFY_COAT_RS": "Buffy Coat RS",
      "BUFFY_COAT_MG": "Buffy Coat MG",
      "POST_INSULINE_CENTRAL": "Insulina Pós Central",
      "POST_INSULINE_LOCAL": "Insulina Pós Local",
      "POST_GLYCEMIA": "Glicemia Pós",
      "POST_SERUM": "Soro Pós",
      "POST_GLYCEMIA_LOCAL": "Glicemia Pós Local",
      "BIOCHEMICAL_URINE": "Bioquimica de Urina",
      "URINARY_CALCIUM": "Cálcio Urinário",
      "URINE": "Urina",
      "POST_GLYCEMIA_1H": "Glicemia Pós-1h",
      "POST_INSULINE_1H": "Insulina Pós-1h",
      "FASTING_HORMONE": "Hormônios Jejum",
      "FASTING_GLYCEMIA": "Glicemia Jejum",
      "BUFFY_COAT": "Buffy Coat",
      "POST_INSULINE": "Insulina Pós",
      "CITRATED_PLASMA": "Plasma Citratato",
      "POST_GLYCEMIA_CENTRAL": "Glicemia Pós Central"
    };

    function getLabel(name) {
      return DESCRIPTORS[name];
    }

    function listDescriptors() {
      return Object.keys(DESCRIPTORS);
    }
    function listLabels() {
      return Object.values(DESCRIPTORS);
    }
  }
})();
'use strict';

(function () {
  angular.module('otusjs.laboratory.configuration').service('otusjs.laboratory.configuration.LaboratoryConfigurationService', service);

  function service() {
    var self = this;
    var _laboratoryDescriptor;
    var _aliquotConfiguration;
    var _tubeConfiguration;
    var _aliquotsDescriptors;
    var _tubesDescriptors;
    var _selectedParticipant;
    var _participantCQ;

    /* Public Interface */
    self.initializeParticipantConfiguration = initializeParticipantConfiguration;
    self.initializeLaboratoryConfiguration = initializeLaboratoryConfiguration;
    self.initializeAliquotsDescriptors = initializeAliquotsDescriptors;
    self.initializeTubesDescriptors = initializeTubesDescriptors;

    self.checkLaboratoryConfiguration = checkLaboratoryConfiguration;
    self.checkAliquotsDescriptors = checkAliquotsDescriptors;
    self.checkTubesDescriptors = checkTubesDescriptors;

    self.getAvaiableAliquots = getAvaiableAliquots;
    self.getAliquotDescriptor = getAliquotDescriptor;
    self.getTubeDescriptor = getTubeDescriptor;
    self.getMomentDescriptor = getMomentDescriptor;
    self.getAliquotContainer = getAliquotContainer;
    self.validateAliquotWave = validateAliquotWave;
    self.getCodeConfiguration = getCodeConfiguration;
    self.getAliquotLengths = getAliquotLengths;

    function initializeParticipantConfiguration(selectedParticipant, participantCQ) {
      _selectedParticipant = selectedParticipant;
      _participantCQ = participantCQ;
    }

    function initializeLaboratoryConfiguration(labDescriptor) {
      _laboratoryDescriptor = labDescriptor;

      //filling sub-descriptors
      _aliquotConfiguration = _laboratoryDescriptor.aliquotConfiguration;
      _tubeConfiguration = _laboratoryDescriptor.tubeConfiguration;
      _aliquotsDescriptors = _aliquotConfiguration.aliquotDescriptors;
      _tubesDescriptors = _tubeConfiguration.tubeDescriptors;
    }

    function initializeAliquotsDescriptors(aliquotsDescriptor) {
      _aliquotsDescriptors = aliquotsDescriptor;
    }

    function initializeTubesDescriptors(tubesDescriptor) {
      _tubesDescriptors = tubesDescriptor;
    }

    function checkAliquotsDescriptors(aliquotsDescriptor) {
      return !!_aliquotsDescriptors;
    }

    function checkTubesDescriptors(tubesDescriptor) {
      return !!_tubesDescriptors;
    }

    function checkLaboratoryConfiguration() {
      return !!_laboratoryDescriptor;
    }

    function getTubeDescriptor(type) {
      if (_laboratoryDescriptor) {
        return _laboratoryDescriptor.tubeConfiguration.tubeDescriptors.find(function (descriptor) {
          return descriptor.name == type;
        });
      } else {
        _descriptorErrorMessenger('laboratório');
      }
    }

    function getMomentDescriptor(momentName) {
      if (_laboratoryDescriptor) {
        return _laboratoryDescriptor.collectMomentConfiguration.momentDescriptors.find(function (descriptor) {
          return descriptor.name == momentName;
        });
      } else {
        _descriptorErrorMessenger('laboratório');
      }
    }

    function getAvaiableAliquots(momentName, tubeType) {
      if (_laboratoryDescriptor) {
        try {
          var centerDescriptor = _getCenterDescriptor();

          var groupDescriptor = centerDescriptor.aliquotGroupDescriptors.find(function (groupDescriptor) {
            return groupDescriptor.name === _participantCQ;
          });

          var aliquotsList = groupDescriptor.aliquotMomentDescriptors.find(function (momentDescriptor) {
            return momentDescriptor.name === momentName;
          }).aliquotTypesDescriptors.find(function (typeDescriptor) {
            return typeDescriptor.name === tubeType;
          }).aliquots;
          return aliquotsList.map(function (avaiableAliquot) {
            var aliqDescriptor = getAliquotDescriptor(avaiableAliquot.name);
            aliqDescriptor.role = avaiableAliquot.role;
            return aliqDescriptor;
          });
        } catch (e) {
          var msg = 'Configuração incompleta para: \n' + _selectedParticipant.recruitmentNumber + ' - ' + _selectedParticipant.fieldCenter.acronym + ' - ' + _participantCQ + ' - ' + momentName + ' - ' + tubeType;
          throw new Error(msg);
        }
      } else {
        _descriptorErrorMessenger('laboratório');
      }
    }

    function getAliquotDescriptor(aliquotName) {
      if (_aliquotsDescriptors) {
        var found = _aliquotsDescriptors.find(function (aliquotDescriptor) {
          return aliquotDescriptor.name == aliquotName;
        });
        if (found) {
          var completeAliquot = angular.copy(found);
          return completeAliquot;
        } else {
          var msg = 'Configuração incompleta para: ' + aliquotName;
          throw new Error(msg);
        }
      } else {
        _descriptorErrorMessenger('alíquota');
      }
    }

    function validateAliquotWave(aliquotCode) {
      var waveToken = _laboratoryDescriptor.codeConfiguration.waveNumberToken;
      var WAVE_TOKEN_POSITION = 0;
      var stringfiedCode = String(aliquotCode);
      return stringfiedCode[WAVE_TOKEN_POSITION] == waveToken;
    }

    //given the aliquot code, return the aliquot container
    function getAliquotContainer(code) {
      var CONTAINER_TOKEN_POSITION = 2;

      var stringfiedCode = String(code);
      var tubeToken = _laboratoryDescriptor.codeConfiguration.tubeToken;
      var palletToken = _laboratoryDescriptor.codeConfiguration.palletToken;
      var cryotubeToken = _laboratoryDescriptor.codeConfiguration.cryotubeToken;

      var token = stringfiedCode[CONTAINER_TOKEN_POSITION];

      switch (true) {
        case token == tubeToken:
          return 'TUBE';
        case token == palletToken:
          return 'PALLET';
        case token == cryotubeToken:
          return 'CRYOTUBE';
        default:
          return '';
      }
    }

    function getCodeConfiguration() {
      return _laboratoryDescriptor.codeConfiguration;
    }

    function getAliquotLengths() {
      var centerDescriptor = _getCenterDescriptor();
      return centerDescriptor.aliquotCodeSizes;
    }

    //private methods
    function _getCenterDescriptor() {
      return _aliquotConfiguration.aliquotCenterDescriptors.find(function (centerDescriptor) {
        return centerDescriptor.name === _selectedParticipant.fieldCenter.acronym;
      });
    }

    function _descriptorErrorMessenger(type) {
      var msg = 'Descritores de ' + type + ' não inicializados';
      throw new Error(msg);
    }
    return self;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.participant').factory('otusjs.laboratory.participant.ParticipantLaboratoryFactory', factory);

  factory.$inject = ['otusjs.laboratory.participant.ParticipanTubeFactory', 'otusjs.laboratory.configuration.LaboratoryConfigurationService'];

  function factory(ParticipanTubeFactory, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(labParticipant, loggedUser, selectedParticipant) {
      return new ParticipantLaboratory(ParticipanTubeFactory, LaboratoryConfigurationService, labParticipant, loggedUser, selectedParticipant);
    }

    function fromJson(labParticipant, loggedUser, selectedParticipant) {
      return new ParticipantLaboratory(ParticipanTubeFactory, LaboratoryConfigurationService, JSON.parse(labParticipant), loggedUser, selectedParticipant);
    }
    return self;
  }

  function ParticipantLaboratory(ParticipanTubeFactory, LaboratoryConfigurationService, labParticipant, loggedUser, selectedParticipant) {
    var self = this;
    var _backupJSON;

    self.objectType = labParticipant.objectType || 'ParticipantLaboratory';
    self.recruitmentNumber = labParticipant.recruitmentNumber;
    self.collectGroupName = labParticipant.collectGroupName; //CQ

    //tube handling
    self.tubes = [];
    self.exams = labParticipant.exams; //not in use yet

    self.reloadTubeList = reloadTubeList;
    self.updateTubeList = updateTubeList;
    self.toJSON = toJSON;

    onInit();

    function onInit() {
      _backupJSON = angular.copy(labParticipant);
      LaboratoryConfigurationService.initializeParticipantConfiguration(selectedParticipant, self.collectGroupName);
      _tubeHandling();
    }

    function _tubeHandling() {
      self.tubes = ParticipanTubeFactory.buildFromArray(labParticipant.tubes, loggedUser);
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        recruitmentNumber: self.recruitmentNumber,
        collectGroupName: self.collectGroupName,
        tubes: self.tubes,
        exams: self.exams
      };

      return json;
    }

    function reloadTubeList() {
      delete self.tubes;
      self.tubes = ParticipanTubeFactory.buildFromArray(angular.copy(_backupJSON.tubes), loggedUser);
    }

    function updateTubeList() {
      delete _backupJSON.tubes;
      _backupJSON.tubes = angular.copy(self.tubes);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory').factory('otusjs.laboratory.ParticipanTubeFactory', factory);

  factory.$inject = ['otusjs.laboratory.TubeCollectionDataFactory'];

  function factory(TubeCollectionDataFactory) {
    var self = this;

    _onInit();

    function _onInit() {}

    /* Public Methods */
    self.create = create;
    self.buildFromArray = buildFromArray;

    function create(tubeInfo, laboratoryConfiguration, operator) {
      var tube = new Tube(tubeInfo, laboratoryConfiguration, TubeCollectionDataFactory, operator);
      return tube;
    }

    function buildFromArray(tubeArray, laboratoryConfiguration, operator) {
      return tubeArray.map(function (tubeInfo) {
        return new Tube(tubeInfo, laboratoryConfiguration, TubeCollectionDataFactory, operator);
      });
    }

    return self;
  }

  function Tube(tubeInfo, laboratoryConfiguration, TubeCollectionDataFactory, operator) {
    var self = this;
    var _labConfig;
    var _operator;

    /* Public Interface */
    self.objectType = "Tube";

    self.type = tubeInfo.type;
    self.code = tubeInfo.code;
    self.moment = tubeInfo.moment;
    self.groupName = tubeInfo.groupName;
    self.aliquotes = tubeInfo.aliquotes;
    self.order = tubeInfo.order;
    self.tubeCollectionData = TubeCollectionDataFactory.create(tubeInfo.tubeCollectionData, operator);

    self.collect = collect;
    self.toJSON = toJSON;

    _onInit();

    function _onInit() {
      _operator = operator;
      _labConfig = laboratoryConfiguration;
      _fillDescriptors();
    }

    function _fillDescriptors() {
      var tubeDescriptor = _labConfig.tubeConfiguration.tubeDescriptors.find(function (descriptor) {
        return descriptor.name == self.type;
      });

      var momentDescriptor = _labConfig.collectMomentConfiguration.collectMomentDescriptors.find(function (descriptor) {
        return descriptor.name == self.moment;
      });

      self.label = tubeDescriptor ? tubeDescriptor.label : '';
      self.boxColor = tubeDescriptor ? tubeDescriptor.color : '';
      self.momentLabel = momentDescriptor.label !== '' ? momentDescriptor.label : 'Nenhum';
    }

    function collect() {
      self.tubeCollectionData.fill(_operator);
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        type: self.type,
        moment: self.moment,
        code: self.code,
        groupName: self.groupName,
        aliquotes: self.aliquotes,
        order: self.order,
        tubeCollectionData: self.tubeCollectionData
      };
      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory').factory('otusjs.laboratory.TubeCollectionDataFactory', factory);

  function factory() {
    var self = this;

    self.create = create;

    function create(collectionInfo) {
      return new TubeCollectionData(collectionInfo);
    }

    return self;
  }

  function TubeCollectionData(collectionInfo) {
    var self = this;

    self.objectType = 'TubeCollectionData';
    self.isCollected = collectionInfo.isCollected;
    self.metadata = collectionInfo.metadata;
    self.operator = collectionInfo.operator;
    self.time = collectionInfo.time;

    self.fill = fill;
    self.toJSON = toJSON;

    function fill(operator) {
      self.isCollected = true;
      self.metadata = "";
      self.operator = operator.email;
      self.time = new Date().toISOString();
    }

    function toJSON() {
      return {
        objectType: self.objectType,
        isCollected: self.isCollected,
        metadata: self.metadata,
        operator: self.operator,
        time: self.time
      };
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.transportation').factory('otusjs.laboratory.transportation.LotFactory', factory);

  factory.$inject = ['otusjs.laboratory.WorkAliquotFactory', 'otusjs.laboratory.WorkTubeFactory'];

  function factory(WorkAliquot, WorkTube) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new TransportationLot(WorkAliquot, WorkTube, {});
    }

    function fromJson(lotInfo) {
      return new TransportationLot(WorkAliquot, WorkTube, lotInfo);
    }

    return self;
  }

  function TransportationLot(WorkAliquot, WorkTube, lotInfo) {
    var self = this;

    self._id = lotInfo._id ? lotInfo._id.hasOwnProperty('$oid') ? lotInfo._id.$oid : lotInfo._id : null;
    self.objectType = 'TransportationLot';
    self.code = lotInfo.code || '';
    self.aliquotList = WorkAliquot.fromJson(lotInfo.aliquotList);
    self.tubeList = WorkTube.fromJson(lotInfo.tubeList);
    self.shipmentDate = lotInfo.shipmentDate || '';
    self.processingDate = lotInfo.processingDate || '';
    self.operator = lotInfo.operator || '';
    self.aliquotsInfo = lotInfo.aliquotsInfo || [];
    self.tubesInfo = lotInfo.tubesInfo || [];
    self.originLocationPoint = lotInfo.originLocationPoint ? lotInfo.originLocationPoint.hasOwnProperty('$oid') ? lotInfo.originLocationPoint.$oid : lotInfo.originLocationPoint : '';
    self.destinationLocationPoint = lotInfo.destinationLocationPoint ? lotInfo.destinationLocationPoint.hasOwnProperty('$oid') ? lotInfo.destinationLocationPoint.$oid : lotInfo.destinationLocationPoint : '';

    self.chartAliquotDataSet = _getStructureDataSet();
    self.chartTubeDataSet = _getStructureDataSet();

    self.insertAliquot = insertAliquot;
    self.insertTube = insertTube;
    self.insertAliquotList = insertAliquotList;
    self.insertTubeList = insertTubeList;
    self.removeAliquotByIndex = removeAliquotByIndex;
    self.removeTubeByIndex = removeTubeByIndex;
    self.getAliquotCodeList = getAliquotCodeList;
    self.getTubeCodeList = getTubeCodeList;
    self.getTubeForDynamicTable = getTubeForDynamicTable;
    self.toJSON = toJSON;

    _onInit();

    function _onInit() {
      _fillAliquotInfoLabel();
      _fillTubeInfoLabel();
    }

    function _getStructureDataSet() {
      return {
        labels: [],
        data: [],
        backgroundColor: [],
        chartId: self.code
      };
    }

    function getTubeForDynamicTable() {
      return self.tubeList.map(function (tube) {
        return {
          code: tube.code,
          label: tube.typeLabel + ' (' + tube.momentLabel + ')',
          containerLabel: 'Tubo',
          aliquotCollectionData: {
            processing: tube.tubeCollectionData.time
          },
          roleLabel: ''
        };
      });
    };

    function _fillAliquotInfoLabel() {
      self.aliquotsInfo.forEach(function (aliquotInfo) {
        var aliquot = self.aliquotList.find(function (aliquot) {
          return aliquot.name === aliquotInfo.aliquotName;
        });
        if (aliquot) {
          aliquotInfo.aliquotLabel = aliquot.label;
          aliquotInfo.role = aliquot.role;
          aliquotInfo.roleLabel = aliquot.roleLabel;
        }
      });

      if (self.aliquotList.length && !self.aliquotsInfo.length) {
        self.aliquotList.forEach(function (aliquot) {
          _addAliquotInfo(aliquot);
        });
      }

      _generateDataSetForAliquotChart();
    }

    function _fillTubeInfoLabel() {
      self.tubesInfo.forEach(function (tubeInfo) {
        var tube = self.tubeList.find(function (tube) {
          return tube.type === tubeInfo.type && tube.moment === tubeInfo.moment;
        });
        if (tube) {
          tubeInfo.typeLabel = tube.typeLabel;
          tubeInfo.moment = tube.moment;
          tubeInfo.momentLabel = tube.momentLabel;
        }
      });

      if (self.tubeList.length && !self.tubesInfo.length) {
        self.tubeList.forEach(function (tube) {
          _addTubeInfo(tube);
        });
      }

      _generateDataSetForTubeChart();
    }

    function _generateDataSetForTubeChart() {
      self.chartTubeDataSet.labels = [];
      self.chartTubeDataSet.data = [];

      if (self.tubesInfo.length) {
        self.tubesInfo.sort(function (a, b) {
          if (a.typeLabel < b.typeLabel) return -1;
          if (a.typeLabel > b.typeLabel) return 1;
          return 0;
        });

        self.tubesInfo.forEach(function (tubeInfo) {
          self.chartTubeDataSet.labels.push(tubeInfo.typeLabel + " (" + tubeInfo.momentLabel + ")");
          self.chartTubeDataSet.data.push(tubeInfo.quantity);
        });
      }
      var tmpDataSet = angular.copy(self.chartTubeDataSet);
      self.chartTubeDataSet = undefined;
      self.chartTubeDataSet = angular.copy(tmpDataSet);
      return self.chartTubeDataSet;
    }
    function _generateDataSetForAliquotChart() {
      self.chartAliquotDataSet.labels = [];
      self.chartAliquotDataSet.data = [];

      if (self.aliquotsInfo.length) {
        self.aliquotsInfo.sort(function (a, b) {
          if (a.aliquotLabel < b.aliquotLabel) return -1;
          if (a.aliquotLabel > b.aliquotLabel) return 1;
          return 0;
        });

        self.aliquotsInfo.forEach(function (aliquotInfo) {
          self.chartAliquotDataSet.labels.push(aliquotInfo.aliquotLabel + " (" + aliquotInfo.roleLabel + ")");
          self.chartAliquotDataSet.data.push(aliquotInfo.quantity);
        });
      }

      var tmpDataSet = angular.copy(self.chartAliquotDataSet);
      self.chartAliquotDataSet = undefined;
      self.chartAliquotDataSet = angular.copy(tmpDataSet);
      return self.chartAliquotDataSet;
    }

    function _findAliquotInfo(aliquot) {
      return self.aliquotsInfo.find(function (aliquotInfo) {
        return aliquotInfo.aliquotName === aliquot.name && aliquotInfo.role === aliquot.role;
      });
    }

    function _findTubeInfo(tube) {
      return self.tubesInfo.find(function (tubeInfo) {
        return tubeInfo.type === tube.type && tubeInfo.moment === tube.moment;
      });
    }

    function _findOthersTubeInfo(tube) {
      return self.tubesInfo.filter(function (tubeInfo) {
        return tubeInfo.type !== tube.type || tubeInfo.moment !== tube.moment;
      });
    }

    function _findOthersAliquotInfo(aliquot) {
      return self.aliquotsInfo.filter(function (aliquotInfo) {
        return aliquotInfo.aliquotName !== aliquot.name || aliquotInfo.role !== aliquot.role;
      });
    }

    function _addAliquotInfo(aliquot) {
      var aliquotInfo = _findAliquotInfo(aliquot);
      var newAliquotsInfo = _findOthersAliquotInfo(aliquot);

      aliquotInfo ? aliquotInfo.quantity++ : aliquotInfo = new AliquotInfoModel(aliquot);

      newAliquotsInfo.push(aliquotInfo);

      self.aliquotsInfo = newAliquotsInfo;
      _generateDataSetForAliquotChart();
    }

    function _addTubeInfo(tube) {
      var tubeInfo = _findTubeInfo(tube);
      var newTubesInfo = _findOthersTubeInfo(tube);

      tubeInfo ? tubeInfo.quantity++ : tubeInfo = new TubeInfoModel(tube);

      newTubesInfo.push(tubeInfo);

      self.tubesInfo = newTubesInfo;
      _generateDataSetForTubeChart();
    }

    function _removeAliquotInfo(aliquot) {
      var aliquotInfo = _findAliquotInfo(aliquot);
      var newAliquotsInfo = _findOthersAliquotInfo(aliquot);

      if (aliquotInfo && aliquotInfo.quantity > 1) {
        aliquotInfo.quantity--;
        newAliquotsInfo.push(aliquotInfo);
      }

      self.aliquotsInfo = newAliquotsInfo;
      _generateDataSetForAliquotChart();
    }

    function _removeTubeInfo(tube) {
      var tubeInfo = _findTubeInfo(tube);
      var newTubesInfo = _findOthersTubeInfo(tube);

      if (tubeInfo && tubeInfo.quantity > 1) {
        tubeInfo.quantity--;
        newTubesInfo.push(tubeInfo);
      }

      self.tubesInfo = newTubesInfo;
      _generateDataSetForTubeChart();
    }

    function insertAliquot(aliquotInfo) {
      var newAliquot = WorkAliquot.create(aliquotInfo);
      self.aliquotList.push(newAliquot);
      _addAliquotInfo(newAliquot);
      return newAliquot;
    }

    function insertTube(tubeInfo) {
      var newTube = WorkTube.create(tubeInfo);
      self.tubeList.push(newTube);
      _addTubeInfo(newTube);
      return newTube;
    }

    function removeAliquotByIndex(index) {
      _removeAliquotInfo(self.aliquotList[index]);
      return self.aliquotList.splice(index, 1);
    }

    function removeTubeByIndex(index) {
      _removeTubeInfo(self.tubeList[index]);
      return self.tubeList.splice(index, 1);
    }

    function getAliquotCodeList() {
      var aliquotCodeList = [];
      self.aliquotList.forEach(function (aliquot) {
        aliquotCodeList.push(aliquot.code);
      });
      return aliquotCodeList;
    }

    function getTubeCodeList() {
      var tubeCodeList = [];
      self.tubeList.forEach(function (tube) {
        tubeCodeList.push(tube.code);
      });
      return tubeCodeList;
    }

    function insertAliquotList(aliquotList) {
      self.aliquotList.push.apply(self.aliquotList, aliquotList.map(function (aliquot) {
        var workAliquot = WorkAliquot.create(aliquot);
        var aliquotInfo = _findAliquotInfo(workAliquot);

        //updates info array
        if (aliquotInfo) {
          aliquotInfo.quantity++;
        } else {
          self.aliquotsInfo.push(new AliquotInfoModel(workAliquot));
        }

        return workAliquot;
      }));

      _generateDataSetForAliquotChart();
    }

    function insertTubeList(tubeList) {
      self.tubeList.push.apply(self.tubeList, tubeList.map(function (tube) {
        var workTube = WorkTube.create(tube);
        var tubeInfo = _findTubeInfo(workTube);

        //updates info array
        if (tubeInfo) {
          tubeInfo.quantity++;
        } else {
          self.tubesInfo.push(new TubeInfoModel(workTube));
        }

        return workTube;
      }));

      _generateDataSetForTubeChart();
    }

    function AliquotInfoModel(workAliquot) {
      this.aliquotName = workAliquot.name;
      this.aliquotLabel = workAliquot.label;
      this.role = workAliquot.role;
      this.roleLabel = workAliquot.roleLabel;
      this.quantity = 1;
    }

    function TubeInfoModel(workTube) {
      this.type = workTube.type;
      this.typeLabel = workTube.typeLabel;
      this.moment = workTube.moment;
      this.momentLabel = workTube.momentLabel;
      this.quantity = 1;
    }

    function toJSON() {
      var json = {
        _id: self._id,
        objectType: self.objectType,
        code: self.code,
        shipmentDate: self.shipmentDate,
        processingDate: self.processingDate,
        operator: self.operator,
        originLocationPoint: self.originLocationPoint,
        destinationLocationPoint: self.destinationLocationPoint,
        tubeList: self.tubeList,
        aliquotList: self.aliquotList,
        aliquotsInfo: self.aliquotsInfo.map(function (aliquotInfo) {
          return { aliquotName: aliquotInfo.aliquotName, role: aliquotInfo.role, quantity: aliquotInfo.quantity };
        }),
        tubesInfo: self.tubesInfo.map(function (tubeInfo) {
          return { type: tubeInfo.type, moment: tubeInfo.moment, quantity: tubeInfo.quantity };
        })
      };

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.locationPoint').factory('otusjs.model.locationPoint.LocationPointFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.fromArray = fromArray;

    function create() {
      return new LocationPoint({});
    }

    function fromArray(arrayObject) {
      if (Array.isArray(arrayObject)) {
        return arrayObject.map(function (locationPoint) {
          return new LocationPoint(locationPoint);
        });
      } else {
        return [];
      }
    }

    function fromJsonObject(jsonObject) {
      return new LocationPoint(jsonObject);
    }

    return self;
  }

  function LocationPoint(locationPoint) {
    var self = this;

    self.toJSON = toJSON;

    self._id = locationPoint._id ? locationPoint["_id"].$oid : null;
    self.name = locationPoint.name || null;
    self.users = locationPoint.users || [];

    self.setUser = setUser;
    self.removeUser = removeUser;

    function setUser(email) {
      if (typeof email === "string" && !self.users.includes(email)) {
        self.users.push(email);
      }
    }

    function removeUser(email) {
      var _index = self.users.indexOf(email);
      if (_index > -1) {
        self.users.splice(_index, 1);
      }
    }

    function toJSON() {
      var json = {};

      json._id = self._id;
      json.name = self.name;
      json.users = self.users;

      return json;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new Idiom();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.IdiomFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var label = new Idiom();

      label.oid = jsonObject.oid;
      label.plainText = jsonObject.plainText;
      label.formattedText = jsonObject.formattedText;

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
    self.fromJsonObject = fromJsonObject;

    function create() {
      var labelObject = {};

      labelObject.ptBR = IdiomFactory.create();
      labelObject.enUS = IdiomFactory.create();
      labelObject.esES = IdiomFactory.create();

      return labelObject;
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.LabelFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = {};

      labelObject.ptBR = IdiomFactory.fromJsonObject(jsonObject.ptBR);
      labelObject.enUS = IdiomFactory.fromJsonObject(jsonObject.enUS);
      labelObject.esES = IdiomFactory.fromJsonObject(jsonObject.esES);

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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new Unit();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.UnitFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var unit = new Unit();

      unit.oid = jsonObject.oid;
      unit.plainText = jsonObject.plainText;
      unit.formattedText = jsonObject.formattedText;

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

  angular.module('otusjs.model.monitoring').factory('otusjs.model.monitoring.MonitoringCenterFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(monitoringCenter) {
      return new MonitoringCenter(monitoringCenter);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (monitoringCenter) {
          return new MonitoringCenter(monitoringCenter);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function MonitoringCenter(monitoringCenter) {
    var self = this;

    self.toJson = toJson;

    self.objectType = 'MonitoringCenter';
    self.name = monitoringCenter.name || null;
    self.goal = monitoringCenter.goal || null;
    self.backgroundColor = monitoringCenter.backgroundColor || null;
    self.borderColor = monitoringCenter.borderColor || null;

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.goal = self.goal;
      json.backgroundColor = self.backgroundColor;
      json.borderColor = self.borderColor;

      return JSON.stringify(json);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.monitoring').factory('otusjs.model.monitoring.MonitoringFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MonitoringInformation({});
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (center) {
          return new MonitoringInformation(center);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function MonitoringInformation(center) {
    var self = this;

    self.toJson = toJson;

    self.objectType = "MonitoringInformation";
    self.acronym = center.acronym || null;
    self.fieldCenter = center.fieldCenter || null;
    self.month = center.month || null;
    self.sum = center.sum || null;
    self.year = center.year || null;

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.acronym = self.acronym;
      json.fieldCenter = self.fieldCenter;
      json.month = self.month;
      json.sum = self.sum;
      json.year = self.year;

      return JSON.stringify(json);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.monitoring').factory('otusjs.model.monitoring.HeatMapActivityFactory', Factory);

  Factory.$inject = ['$filter'];

  function Factory($filter) {
    var self = this;

    self.STATUS = {
      'CREATED': 'CREATED',
      'SAVED': 'SAVED',
      'FINALIZED': 'FINALIZED',
      'DOES_NOT_APPLY': 'DOES_NOT_APPLY',
      'UNDEFINED': 'UNDEFINED',
      'MULTIPLE': 'MULTIPLE',
      'AMBIGUITY': 'AMBIGUITY'
    };

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.getStatus = getStatus;

    function create(json) {
      return new HeatMapActivityFactory($filter, self.getStatus(), json);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (activity) {
          return new HeatMapActivityFactory($filter, self.getStatus(), activity).toJSON();
        });
      } else {
        return [];
      }
    }

    function getStatus() {
      return self.STATUS;
    }

    return self;
  }

  function HeatMapActivityFactory($filter, STATUS) {
    var jsonData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var self = this;

    self.toJSON = toJSON;

    self.objectType = "HeatMapActivity";
    self.acronym = jsonData.acronym || null;
    self.name = jsonData.name || null;
    self.date = jsonData.activities ? jsonData.activities.length > 0 ? $filter('date')(jsonData.activities[0].statusHistory.date, 'dd/MM/yyyy') : null : null;
    self.information = null;
    self.observation = null;
    if (jsonData.status) {
      self.status = jsonData.status;
    } else {
      if (jsonData.activities) _buildStatus(jsonData);else self.status = null;
    }

    function _buildStatus(data) {
      if (data.doesNotApply) {
        if (data.activities.length == 0) {
          self.status = STATUS.DOES_NOT_APPLY;
          self.observation = data.doesNotApply ? data.doesNotApply.observation : undefined;
        } else {
          self.status = STATUS.AMBIGUITY;
          self.observation = data.doesNotApply ? data.doesNotApply.observation : undefined;
        }
      } else if (data.activities.length == 0) {
        self.status = STATUS.UNDEFINED;
      } else if (data.activities.length == 1) {
        self.status = STATUS[data.activities[0].statusHistory.name];
      } else if (data.activities.length > 1) {
        var information = [];
        data.activities.filter(function (activity) {
          information.push({
            'status': STATUS[activity.statusHistory.name],
            'date': $filter('date')(activity.statusHistory.date, 'dd/MM/yyyy')
          });
        });
        self.status = STATUS.MULTIPLE;
        self.information = information;
      } else {
        self.status = STATUS.UNDEFINED;
      }
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.acronym = self.acronym;
      json.name = self.name;
      json.status = self.status;
      json.date = self.date;
      json.information = self.information;
      json.observation = self.observation;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.monitoring').factory('otusjs.model.monitoring.HeatMapExamFactory', Factory);

  function Factory() {
    var self = this;

    self.STATUS = {
      'DOES_NOT_HAVE': 'DOES_NOT_HAVE',
      'HAVE': 'HAVE',
      'DOES_NOT_APPLY': 'DOES_NOT_APPLY',
      'AMBIGUITY': 'AMBIGUITY'
    };

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.getStatus = getStatus;

    function create(json) {
      return new HeatMapExamFactory(self.getStatus(), json);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (activity) {
          return new HeatMapExamFactory(self.getStatus(), activity).toJSON();
        });
      } else {
        return [];
      }
    }

    function getStatus() {
      return self.STATUS;
    }

    return self;
  }

  function HeatMapExamFactory(STATUS) {
    var jsonData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var self = this;

    self.toJSON = toJSON;

    self.objectType = "HeatMapExam";
    self.name = jsonData.name || null;
    self.quantity = jsonData.quantity || 0;
    self.observation = jsonData.observation || null;

    if (jsonData.status) {
      self.status = jsonData.status;
    } else {
      _buildStatus(jsonData);
    }

    function _buildStatus(data) {
      if (data.doesNotApply) {
        if (data.quantity == 0) {
          self.status = STATUS.DOES_NOT_APPLY;
          self.observation = data.doesNotApply.observation;
        } else {
          self.status = STATUS.AMBIGUITY;
          self.observation = data.doesNotApply.observation;
        }
      } else {
        if (data.quantity == 0) {
          self.status = STATUS.DOES_NOT_HAVE;
        } else if (data.quantity > 0) {
          self.status = STATUS.HAVE;
        } else {
          self.status = 'UNDEFINED';
        }
      }
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.quantity = self.quantity;
      json.status = self.status;
      json.observation = self.observation;

      return json;
    }
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
    self.fromJsonObject = fromJsonObject;

    function create(value, extractionValue) {
      var labelObject = LabelFactory.create();
      return new MetadataAnswer(value, extractionValue, labelObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MetadataAnswerFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      return new MetadataAnswer(jsonObject.value, jsonObject.extractionValue, labelObject);
    }

    return self;
  }

  function MetadataAnswer(value, extractionValue, labelObject) {
    var self = this;

    self.extends = 'StudioObject';
    self.objectType = 'MetadataAnswer';
    self.dataType = 'Integer';
    self.value = value;
    self.extractionValue = extractionValue;
    self.label = labelObject;

    self.setExtractionValue = setExtractionValue;

    function setExtractionValue(newExtractionValue) {
      self.extractionValue = newExtractionValue;
    }
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MetadataGroup(MetadataAnswerFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MetadataGroupFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var metadaGroup = new MetadataGroup(MetadataAnswerFactory);

      jsonObject.options.forEach(function (metadataAnswerOption) {
        metadaGroup.options.push(MetadataAnswerFactory.fromJsonObject(metadataAnswerOption));
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
    self.getOptionByExtractionValue = getOptionByExtractionValue;
    self.createOption = createOption;
    self.removeOption = removeOption;
    self.removeLastOption = removeLastOption;
    self.isAvailableExtractionValue = isAvailableExtractionValue;
    self.isAvailableValue = isAvailableValue;

    function getOptionListSize() {
      return self.options.length;
    }

    function getOptionByValue(value) {
      var filter = self.options.filter(function (option) {
        if (option.value === value) {
          return option;
        }
      });

      return filter[0];
    }

    function getOptionByExtractionValue(extractionValue) {
      var filter = self.options.filter(function (option) {
        if (option.extractionValue.toString() === extractionValue.toString()) {
          return option;
        }
      });

      return filter[0];
    }

    function createOption() {
      var value = self.options.length;

      do {
        value++;
      } while (!(isAvailableExtractionValue(value) && isAvailableValue(value)));

      var option = MetadataAnswerFactory.create(value, value);
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

    function isAvailableExtractionValue(newValue) {
      return getOptionByExtractionValue(newValue) ? false : true;
    }

    function isAvailableValue(value) {
      return getOptionByValue(value) ? false : true;
    }
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
    self.createInitial = createInitial;
    self.fromJson = fromJson;
    self.createNullNavigation = createNullNavigation;

    function create(origin) {
      if (!origin) {
        return createNullNavigation();
      }
      return new Navigation(origin);
    }

    function createInitial(origin) {
      var initialNavigation = new Navigation(origin);

      if (origin === 'BEGIN NODE') {
        initialNavigation.index = 0;
      } else {
        initialNavigation.index = 1;
      }
      return initialNavigation;
    }

    function createNullNavigation() {
      var navigation = create('NULL NAVIGATION');

      /* Object properties */
      navigation.index = null;
      navigation.inNavigations = [];
      navigation.outNavigations = [];
      navigation.routes = [];
      navigation.isOrphan = function () {
        return true;
      };
      navigation.hasOrphanRoot = function () {
        return true;
      };
      return navigation;
    }

    function fromJson(jsonData) {
      var navigation;
      if (jsonData.origin === 'BEGIN NODE' || jsonData.origin === 'END NODE') {
        navigation = createInitial(jsonData.origin);
      } else {
        if (!jsonData.routes || !jsonData.routes.length) {
          //TODO check if needed
          return createNullNavigation();
        }
        navigation = create(jsonData.origin);
      }

      if (navigation) {
        navigation.index = jsonData.index;
        navigation.inNavigations = jsonData.inNavigations;
        navigation.routes = jsonData.routes.map(function (route) {
          return RouteFactory.fromJson(route);
        });
      }

      return navigation;
    }
    return self;
  }

  function Navigation(origin) {
    var self = this;

    /* Object properties */
    self.extents = 'SurveyTemplateObject';
    self.objectType = 'Navigation';
    self.origin = origin;
    self.index = null;
    self.inNavigations = [];
    self.outNavigations = [];
    self.routes = [];

    /* Public methods */
    self.addInNavigation = addInNavigation;
    self.addOutNavigation = addOutNavigation;
    self.clone = clone;
    self.createAlternativeRoute = createAlternativeRoute;
    self.equals = equals;
    self.getDefaultRoute = getDefaultRoute;
    self.getRouteByName = getRouteByName;
    self.listRoutes = listRoutes;
    self.hasRoute = hasRoute;
    self.hasDefaultRoute = hasDefaultRoute;
    self.isOrphan = isOrphan;
    self.hasOrphanRoot = hasOrphanRoot;
    self.listRoutes = listRoutes;
    self.removeInNavigation = removeInNavigation;
    self.clearNavigation = clearNavigation;
    self.removeRouteByName = removeRouteByName;
    self.removeRouteByDestination = removeRouteByDestination;
    self.selfsame = selfsame;
    self.setupDefaultRoute = setupDefaultRoute;
    self.updateInNavigation = updateInNavigation;
    self.isDefaultRoute = isDefaultRoute;
    self.updateRoute = updateRoute;
    self.setRoutes = setRoutes;
    self.isEndNode = isEndNode;
    self.isBeginNode = isBeginNode;
    self.isOuterNode = isOuterNode;
    self.hasMultipleInNavigations = hasMultipleInNavigations;
    self.hasMultipleOutRoutes = hasMultipleOutRoutes;

    self.toJSON = toJSON;

    function isEndNode() {
      return self.origin === "END NODE";
    }

    function isBeginNode() {
      return self.origin === "BEGIN NODE";
    }

    function isOuterNode() {
      return isEndNode() || isBeginNode();
    }

    function hasMultipleInNavigations() {
      return _filterOutNullNavigations().length > 1;
    }

    function hasMultipleOutRoutes() {
      return self.routes.length > 1;
    }

    function _filterOutNullNavigations() {
      return self.inNavigations.filter(function (nav) {
        return nav && nav.origin !== 'NULL NAVIGATION';
      });
    }

    function addInNavigation(navigation) {
      navigation.addOutNavigation(self);
      self.inNavigations.push(navigation);
    }

    function addOutNavigation(navigation) {
      self.outNavigations.push(navigation);
    }

    function clone() {
      var clone = new self.constructor(self.origin, self.routes[0]);
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

    function getDefaultRoute() {
      return self.routes[0].clone();
    }

    function hasDefaultRoute() {
      return !self.routes[0] ? false : true;
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
      return self.routes[0] && route.name === self.routes[0].name;
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
      return self.index !== 0 && !self.inNavigations.length;
    }

    function listRoutes() {
      var clones = self.routes.map(function (route) {
        return route.clone();
      });
      return clones;
    }

    function setRoutes(routes) {
      self.routes = routes;
    }

    function removeInNavigation(navigationToRemove) {
      self.inNavigations.some(function (navigation, index) {
        if (navigation.origin === navigationToRemove.origin) {
          self.inNavigations.splice(index, 1);
          return true;
        }
      });
    }

    function clearNavigation() {
      self.inNavigations = [];
      self.routes = [];
    }

    function removeRouteByName(name) {
      self.routes.some(function (route, index) {
        if (route && route.name === name) {
          self.routes.splice(index, 1);
          if (route.isDefault) {
            self.routes[0] = null;
          }
          return true;
        }
      });
    }

    function removeRouteByDestination(destinationID) {
      self.routes = self.routes.filter(function (route) {
        return route.destination !== destinationID;
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
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.index = self.index;
      json.inNavigations = _buildJsonInNavigations();
      json.routes = self.routes.map(function (route) {
        return route;
      });
      return json;
    }

    function _buildJsonInNavigations() {
      return self.inNavigations.map(function (element) {
        if (element.origin !== 'NULL NAVIGATION') {
          return {
            origin: element.origin,
            index: element.index
          };
        }
      });
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

    function isDefaultRoute(destination) {
      var found = self.routes.find(function (route) {
        return route.destination === destination;
      });
      return found && found.isDefault;
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

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.NavigationTrackerFactory', Factory);

  Factory.$inject = ['otusjs.model.navigation.NavigationTrackingItemFactory'];

  function Factory(NavigationTrackingItemFactory) {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    /**
     * Creates a NavigationTracker. A NavigationTracker must have at least one item to track.
     * @param {array} itemsToTrack - the items that will be tracked
     * @returns {NavigationTracker}
     * @throws An error when no items are passed as parameter
     * @memberof NavigationTrackerFactory
     */
    function create(itemsToTrack, startIndex) {
      var validatedData = _applyPolicies(itemsToTrack, startIndex);
      var trackingItems = validatedData.itemsToTrack.map(_toNavigationTrackingItems);
      trackingItems.push(_buildEngNodeTrackingItem(trackingItems.length));
      return new NavigationTracker(trackingItems, validatedData.startIndex);
    }

    function fromJsonObject(jsonObject) {
      return create(jsonObject.items, jsonObject.lastVisitedIndex);
    }

    // TODO: Move these methods to another object
    function _applyPolicies(itemsToTrack, startIndex) {
      _applyAtLeastOneItemToTrackPolicy(itemsToTrack);

      try {
        _applyValidStartIndexPolicy(startIndex, itemsToTrack.length - 1);
      } catch (error) {
        startIndex = null;
      }

      return {
        itemsToTrack: itemsToTrack,
        startIndex: startIndex
      };
    }

    function _applyAtLeastOneItemToTrackPolicy(itemsToTrack) {
      if (!itemsToTrack || !itemsToTrack.length) {
        throw new Error('No item to track is detected.', 'navigation-tracker-factory.js', 51);
      }
    }

    function _applyValidStartIndexPolicy(value, maxIndex) {
      if (!value || isNaN(value) || value < 0 || maxIndex < value) {
        throw new Error('An invalid start index has passed to NavigationTracker.', 'navigation-tracker-factory.js', 57);
      }
    }

    function _toNavigationTrackingItems(itemToTrack, index) {
      var item = {};
      item.index = index;
      item.id = itemToTrack.id || itemToTrack.origin;
      item.state = itemToTrack.state;
      item.previous = itemToTrack.previous;
      item.inputs = itemToTrack.inputs || _buildInputs(itemToTrack);
      item.outputs = itemToTrack.outputs || _buildOutputs(itemToTrack);
      return NavigationTrackingItemFactory.create(item);
    }

    function _buildEngNodeTrackingItem(index) {
      return _toNavigationTrackingItems({
        id: "END NODE"
      }, index);
    }

    function _buildInputs(itemToTrack) {
      if (itemToTrack.inNavigations) {
        return itemToTrack.inNavigations.filter(function (navigation) {
          return navigation.origin !== 'BEGIN NODE';
        }).map(function (navigation) {
          return navigation.origin;
        });
      } else {
        return [];
      }
    }

    function _buildOutputs(itemToTrack) {
      if (itemToTrack.inNavigations) {
        return itemToTrack.listRoutes().filter(function (route) {
          return route.getDestination() !== 'END NODE';
        }).map(function (route) {
          return route.getDestination();
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function NavigationTracker(items, startIndex) {
    var self = this;
    var _objectType = 'NavigationTracker';
    var _currentItemGroup = [];
    var _currentItemGroupLength = 0;
    var _items = null;
    var _size = 0;

    /* Public methods */
    self.getObjectType = getObjectType;
    self.getItems = getItems;
    self.getCurrentItemGroup = getCurrentItemGroup;
    self.getCurrentIndex = getCurrentIndex;
    self.getItemCount = getItemCount;
    self.getSkippedItems = getSkippedItems;
    self.visitGroup = visitGroup;
    self.updateCurrentGroup = updateCurrentGroup;
    self.hasPreviousItem = hasPreviousItem;
    self.toJSON = toJSON;

    (function constructor() {
      _items = _createNavigationTrackingItemContainer(items);
      _size = items.length;
    })();

    function _createNavigationTrackingItemContainer(items) {
      var container = {};

      items.forEach(function (item, index) {
        container[item.getID()] = item;
      });

      return container;
    }

    /**
     * Returns the object type of instance.
     * @returns {String}
     * @memberof NavigationTracker
     */
    function getObjectType() {
      return _objectType;
    }

    /**
     * Returns all items that are on tracking.
     * @returns {Map}
     * @memberof NavigationTracker
     */
    function getItems() {
      return _items;
    }

    /**
     * Returns the item being visited.
     * @returns {NavigationTrackingItem}
     * @memberof NavigationTracker
     */
    function getCurrentItemGroup() {
      return _currentItemGroup;
    }

    /**
     * Returns the index of item being visited.
     * @returns {Integer}
     * @memberof NavigationTracker
     */
    function getCurrentIndex() {
      if (_currentItemGroupLength) {
        return _currentItemGroup[_currentItemGroupLength - 1].getIndex();
      } else {
        return null;
      }
    }

    /**
     * Returns count of all items on tracking.
     * @returns {Integer}
     * @memberof NavigationTracker
     */
    function getItemCount() {
      return _size;
    }

    /**
     * Returns all items that are currently skipped.
     * @returns {Array}
     * @memberof NavigationTracker
     */
    function getSkippedItems() {
      var skippedItems = [];

      for (var itemID in _items) {
        if (_items[itemID].isSkipped()) {
          skippedItems.push(_items[itemID]);
        }
      }

      return skippedItems;
    }

    /**
     * @memberof NavigationTracker
     */
    function visitGroup(idsToVisit) {
      if (_isMovingForward(idsToVisit)) {
        _setCurrentAsPrevious(idsToVisit);
        _move(idsToVisit);
        _resolveJumps();
      } else {
        _move(idsToVisit);
      }
    }

    /**
     * @memberof NavigationTracker
     */
    function updateCurrentGroup(itemsFilling) {
      _currentItemGroup.forEach(function (item) {
        var itemFilling = itemsFilling[item.getID()];
        if (itemFilling && itemFilling.isFilled) {
          if (itemFilling.isFilled()) {
            item.setAsAnswered();
          } else if (itemFilling.isIgnored()) {
            item.setAsIgnored();
          }
        }
      });
    }

    function hasPreviousItem() {
      if (!_currentItemGroupLength) {
        return false;
      } else {
        return _currentItemGroup[0].getIndex() > 0;
      }
    }

    /**
     * Returns the representation of instance in JSON format.
     * @returns {JSON}
     * @memberof NavigationTracker
     */
    function toJSON() {
      var json = {};

      json.objectType = _objectType;

      if (_currentItemGroupLength) {
        json.lastVisitedIndex = _currentItemGroup[_currentItemGroupLength - 1].getIndex();
      } else {
        json.lastVisitedIndex = null;
      }

      json.items = [];
      Object.keys(_items).forEach(function (itemID) {
        if (itemID !== "END NODE") {
          json.items.push(_items[itemID]);
        }
      });

      return json;
    }

    function _isMovingForward(idsToVisit) {
      if (!_currentItemGroupLength) {
        return true;
      }

      return _currentItemGroup[_currentItemGroupLength - 1].getIndex() < _items[idsToVisit[0]].getIndex();
    }

    function _move(idsToVisit) {
      _currentItemGroup = idsToVisit.map(function (idToVisit) {
        _items[idToVisit].setAsVisited();
        return _items[idToVisit];
      });
      _currentItemGroupLength = _currentItemGroup.length;
    }

    function _setCurrentAsPrevious(idsToVisit) {
      if (_currentItemGroupLength) {
        idsToVisit.forEach(function (id) {
          _items[id].setPrevious(_currentItemGroup[_currentItemGroupLength - 1].getID());
        });
      }
    }

    //---------------------------------------------------------------------------------------------
    // Skipping service
    //---------------------------------------------------------------------------------------------
    function _resolveJumps() {
      if (_existsSiblings()) {
        _skipUnreachableSiblings();
      }
    }

    function _existsSiblings() {
      if (!_currentItemGroup[0].getPrevious()) {
        return false;
      }

      return _items[_currentItemGroup[0].getPrevious()].getOutputs() !== 1;
    }

    function _skipUnreachableSiblings() {
      var previousItemId = _currentItemGroup[0].getPrevious();
      _items[previousItemId].getOutputs().forEach(function (siblingID) {
        if (!_isItemReachable(siblingID)) {
          _skipItem(siblingID);
          _tryPropagateSkip(siblingID);
        }
      });
    }

    function _isItemReachable(itemID) {
      if (_currentItemGroup[0].getID() === itemID) {
        return true;
      }
      return _currentItemGroup[_currentItemGroupLength - 1].getOutputs().some(function (outputID) {
        return outputID === itemID;
      });
    }

    function _tryPropagateSkip(skipedID) {
      _items[skipedID].getOutputs().forEach(function (outputID) {
        if (_isNotCurrentItem(outputID) && _isNotChildOfCurrentItem(outputID) && _isNotChildOfOriginItem(outputID)) {
          if (!_isOnPathOf(_currentItemGroup[_currentItemGroupLength - 1].getID(), outputID, skipedID)) {
            _skipItem(outputID);
            _tryPropagateSkip(outputID);
          }
        }
      });
    }

    function _isNotCurrentItem(itemID) {
      return _currentItemGroup[0].getID() !== itemID;
    }

    function _isNotChildOfCurrentItem(itemID) {
      return _currentItemGroup[_currentItemGroupLength - 1].getOutputs().indexOf !== itemID;
    }

    function _isNotChildOfOriginItem(itemID) {
      return _items[_currentItemGroup[0].getPrevious()].getOutputs().indexOf(itemID) === -1;
    }

    function _isOnPathOf(referenceID, idToTest, idToIgnore) {
      // If idToTest not comes after of the referenceID... is out of the way
      if (_items[idToTest].getIndex() <= _items[referenceID].getIndex()) {
        return false;
      }

      // If idToTest has direct access to referenceID... is on the way
      if (_items[idToTest].getInputs().indexOf(referenceID) !== -1) {
        return true;
      }

      // Verify if some input of idToTest is on the path of referenceID
      return _items[idToTest].getInputs().some(function (inputID) {
        if (idToIgnore !== inputID) {
          return _isOnPathOf(referenceID, inputID);
        }
      });
    }

    function _skipItem(itemID) {
      _items[itemID].setAsSkipped();
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.NavigationTrackingItemFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(options) {
      return new NavigationTrackingItem(options);
    }

    function fromJsonObject(jsonObject) {
      return new NavigationTrackingItem(jsonObject);
    }

    return self;
  }

  function NavigationTrackingItem(options) {
    var self = this;

    var ANSWERED = 'ANSWERED';
    var SKIPPED = 'SKIPPED';
    var NOT_VISITED = 'NOT_VISITED';
    var VISITED = 'VISITED';
    var IGNORED = 'IGNORED';

    var _objectType = 'NavigationTrackingItem';
    var _id = options.id;
    var _index = options.index;
    var _state = options.state || NOT_VISITED;
    var _previous = options.previous || null;
    var _inputs = options.inputs || [];
    var _outputs = options.outputs || [];

    /* Public methods */
    self.getObjectType = getObjectType;
    self.getID = getID;
    self.getIndex = getIndex;
    self.getState = getState;
    self.getPrevious = getPrevious;
    self.setPrevious = setPrevious;
    self.getInputs = getInputs;
    self.getOutputs = getOutputs;
    self.setAsVisited = setAsVisited;
    self.setAsAnswered = setAsAnswered;
    self.setAsIgnored = setAsIgnored;
    self.setAsSkipped = setAsSkipped;
    self.isAnswered = isAnswered;
    self.isIgnored = isIgnored;
    self.isSkipped = isSkipped;
    self.toJSON = toJSON;

    /**
     * Returns the object type of instance.
     * @returns {String}
     * @memberof NavigationTrackingItem
     */
    function getObjectType() {
      return _objectType;
    }

    function getID() {
      return _id;
    }

    function getIndex() {
      return _index;
    }

    function getState() {
      return _state;
    }

    function getPrevious() {
      return _previous;
    }

    function setPrevious(item) {
      _previous = item;
    }

    function getInputs() {
      return _inputs;
    }

    function getOutputs() {
      return _outputs;
    }

    function setAsVisited() {
      _state = VISITED;
    }

    function setAsAnswered() {
      _state = ANSWERED;
    }

    function setAsIgnored() {
      _state = IGNORED;
    }

    function setAsSkipped() {
      _state = SKIPPED;
      _previous = null;
    }

    function isAnswered() {
      return _state === ANSWERED ? true : false;
    }

    function isIgnored() {
      return _state === IGNORED ? true : false;
    }

    function isSkipped() {
      return _state === SKIPPED ? true : false;
    }

    function toJSON() {
      var json = {};

      json.objectType = _objectType;
      json.id = _id;
      json.index = _index;
      json.state = _state;
      json.previous = _previous;
      json.inputs = _inputs;
      json.outputs = _outputs;

      return json;
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
      return RuleFactory.fromJson(ruleJson);
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
    self.toJSON = toJSON;

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

    function toJSON() {
      var json = {};

      json.extents = 'StudioObject';
      json.objectType = 'RouteCondition';
      json.name = self.name;
      json.rules = self.rules;

      return json;
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
      var route = null;
      if (json.isDefault) {
        route = createDefault(json.origin, json.destination);
      } else {
        route = createAlternative(json.origin, json.destination, json.conditions.map(_rebuildConditions));
      }
      route.isDefault = json.isDefault;
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
    self.getDestination = getDestination;
    self.addCondition = addCondition;
    self.instanceOf = instanceOf;
    self.listConditions = listConditions;
    self.removeCondition = removeCondition;
    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJSON = toJSON;

    _init();

    function getDestination() {
      return self.destination;
    }

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

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.destination = self.destination;
      json.name = self.name;
      json.isDefault = self.isDefault;
      json.conditions = self.conditions.map(function (condition) {
        return condition;
      });

      return json;
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

      var rule = new Rule(json.when, json.operator, json.answer, json.isMetadata, json.isCustom);
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
    self.toJSON = toJSON;

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

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.when = self.when;
      json.operator = self.operator;
      json.answer = self.answer;
      json.isMetadata = self.isMetadata;
      json.isCustom = self.isCustom;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').factory('SurveyFactory', SurveyFactory);

  SurveyFactory.$inject = ['SurveyIdentityFactory', 'SurveyMetaInfoFactory', 'SurveyUUIDGenerator', 'otusjs.model.navigation.NavigationManagerFactory', 'SurveyItemManagerFactory', 'otusjs.model.survey.DataSourceDefinitionManagerFactory', 'SurveyDictionaryService', 'otusjs.staticVariable.StaticVariableManagerFactory', 'otusjs.surveyItemGroup.SurveyItemGroupManagerFactory', 'otusjs.survey.ManagerCenterService'];

  var Inject = {};

  function SurveyFactory(SurveyIdentityFactory, SurveyMetaInfoFactory, SurveyUUIDGenerator, NavigationManagerFactory, SurveyItemManagerFactory, DataSourceDefinitionManagerFactory, SurveyDictionaryService, StaticVariableManagerFactory, SurveyItemGroupManagerFactory, ManagerCenterService) {
    var self = this;

    self.OBJECT_TYPE = 'Survey';

    Inject.SurveyItemManagerFactory = SurveyItemManagerFactory;
    Inject.NavigationManagerFactory = NavigationManagerFactory;
    Inject.DataSourceDefinitionManagerFactory = DataSourceDefinitionManagerFactory;
    Inject.SurveyDictionaryService = SurveyDictionaryService;
    Inject.StaticVariableManagerFactory = StaticVariableManagerFactory;
    Inject.SurveyItemGroupManagerFactory = SurveyItemGroupManagerFactory;
    Inject.ManagerCenterService = ManagerCenterService;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.createDictionary = createDictionary;

    function create(name, acronym) {
      var UUID = SurveyUUIDGenerator.generateSurveyUUID();
      var metainfo = SurveyMetaInfoFactory.create();
      var identity = SurveyIdentityFactory.create(name, acronym);
      var survey = new Survey(metainfo, identity, UUID);

      survey.initialize();
      return survey;
    }

    function fromJsonObject(jsonObject) {
      var metainfo = SurveyMetaInfoFactory.fromJsonObject(jsonObject.metainfo);
      var identity = SurveyIdentityFactory.fromJsonObject(jsonObject.identity);
      var UUID = jsonObject.oid;
      var survey = new Survey(metainfo, identity, UUID);

      survey.SurveyItemManager.loadJsonDataObject(jsonObject.itemContainer);
      survey.NavigationManager.loadJsonData(jsonObject.navigationList);
      survey.DataSourceManager.loadJsonData(jsonObject.dataSources);
      survey.StaticVariableManager.loadJsonData(jsonObject.staticVariableList || []);
      survey.SurveyItemGroupManager.loadJsonData(jsonObject.surveyItemGroupList);
      return survey;
    }

    function createDictionary(jsonObject) {
      return Inject.SurveyDictionaryService.dictionaryConstructionByExtractionId(jsonObject);
    }

    return self;
  }

  function Survey(surveyMetainfo, surveyIdentity, uuid) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'Survey';
    self.oid = uuid;
    self.identity = surveyIdentity;
    self.metainfo = surveyMetainfo;
    self.SurveyItemManager = Inject.SurveyItemManagerFactory.create();
    self.NavigationManager = Inject.NavigationManagerFactory.create(self);
    self.DataSourceManager = Inject.DataSourceDefinitionManagerFactory.create();
    self.StaticVariableManager = Inject.StaticVariableManagerFactory.create();
    self.SurveyItemGroupManager = Inject.SurveyItemGroupManagerFactory.create();

    Inject.ManagerCenterService.initialize(self.SurveyItemManager, self.NavigationManager, self.SurveyItemGroupManager); //todo move to initialize if possible

    /* Public methods */
    self.initialize = initialize;
    self.addItem = addItem;
    self.removeItem = removeItem;
    self.moveItem = moveItem;
    self.updateItem = updateItem;
    self.loadItem = loadItem;
    self.getItems = getItems;
    self.getItemByTemplateID = getItemByTemplateID;
    self.getItemByCustomID = getItemByCustomID;
    self.getItemByID = getItemByID;
    self.isAvailableID = isAvailableID;
    self.isAvailableCustomID = isAvailableCustomID;
    self.getDataSource = getDataSource;
    self.getAllDataSources = getAllDataSources;
    self.createStaticVariable = createStaticVariable;
    self.getStaticVariableList = getStaticVariableList;
    self.fillStaticVariablesValues = fillStaticVariablesValues;
    self.getWholeTemplateVariableList = getWholeTemplateVariableList;
    self.getItemStaticVariableList = getItemStaticVariableList;
    self.getGroupByItemID = getGroupByItemID;
    self.getGroupItemsByItemID = getGroupItemsByItemID;
    self.toJSON = toJSON;

    function initialize() {
      self.SurveyItemManager.init();
      self.NavigationManager.initialize();
    }

    function addItem(type) {
      var item = self.SurveyItemManager.addItem(type, self.identity.acronym);
      self.NavigationManager.addNavigation();
      return item;
    }

    function removeItem(templateID) {
      self.SurveyItemGroupManager.removeItemFromGroup(templateID);
      self.SurveyItemManager.removeItem(templateID);
      self.NavigationManager.removeNavigation(templateID);
    }

    function moveItem(item, position) {
      self.SurveyItemGroupManager.allowItemMovement(item.templateID, position);
      self.SurveyItemManager.moveItem(item, position);
      self.NavigationManager.moveNavigation(item.templateID, position);
    }

    function updateItem(item) {
      self.navigationList[item.templateID] = item;
    }

    function loadItem(type, templateID) {
      var item = self.SurveyItemManager.loadItem(type, templateID, self.identity.acronym);
      self.NavigationManager.addNavigation();
      return item;
    }

    function getItems() {
      return self.SurveyItemManager.getItemList();
    }

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

    function getDataSource(name) {
      return self.DataSourceManager.getDataSourceDefinition(name);
    }

    function getAllDataSources() {
      return angular.copy(self.DataSourceManager.list());
    }

    /* Static Variables */
    function createStaticVariable() {
      return self.StaticVariableManager.create();
    }

    function getStaticVariableList() {
      return self.StaticVariableManager.getStaticVariableList();
    }

    function getWholeTemplateVariableList() {
      return self.StaticVariableManager.getWholeTemplateVariables();
    }

    function getItemStaticVariableList(itemID) {
      return self.StaticVariableManager.getItemVariables(itemID);
    }

    function fillStaticVariablesValues(fillingArray) {
      self.StaticVariableManager.fillVariables(fillingArray);
    }

    function getGroupByItemID(templateID) {
      return self.SurveyItemGroupManager.getGroupByMember(templateID);
    }

    function getGroupItemsByItemID(templateID) {
      var group = getGroupByItemID(templateID);
      if (group) {
        return group.members.map(function (member) {
          return getItemByTemplateID(member.id);
        });
      } else {
        return [getItemByTemplateID(templateID)];
      }
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.oid = self.oid;
      json.identity = self.identity;
      json.metainfo = self.metainfo;
      if (self.DataSourceManager.toJSON().length) {
        json.dataSources = self.DataSourceManager;
      } else {
        json.dataSources = [];
      }

      json.itemContainer = [];
      self.SurveyItemManager.getItemList().forEach(function (item) {
        json.itemContainer.push(item);
      });

      json.navigationList = [];
      self.NavigationManager.getNavigationList().forEach(function (navigation) {
        if (navigation) {
          json.navigationList.push(navigation);
        } else {
          json.navigationList.push({});
        }
      });

      json.staticVariableList = self.StaticVariableManager.getStaticVariableList();
      json.surveyItemGroupList = self.SurveyItemGroupManager.getSurveyItemGroupList();
      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').factory('SurveyFormFactory', Factory);

  Factory.$inject = ['SurveyFactory'];

  function Factory(SurveyFactory) {
    var self = this;

    self.OBJECT_TYPE = 'SurveyForm';

    /* Public interdace */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(options) {
      return new SurveyForm(options);
    }

    function fromJsonObject(jsonObject) {
      var surveyForm = new SurveyForm(jsonObject);
      if (jsonObject.surveyTemplate) {
        surveyForm.surveyTemplate = SurveyFactory.fromJsonObject(jsonObject.surveyTemplate);
      }
      return surveyForm;
    }

    return self;
  }

  function SurveyForm(options) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'SurveyForm';
    self._id = options._id || undefined;
    self.sender = options.sender || null;
    self.sendingDate = options.sendingDate || null;
    self.surveyFormType = options.surveyFormType || null;
    self.surveyTemplate = options.surveyTemplate || null;
    if (self.surveyTemplate) {
      self.acronym = self.surveyTemplate.identity.acronym || null;
      self.name = self.surveyTemplate.identity.name || null;
    } else {
      self.acronym = options.acronym || null;
      self.name = options.name || null;
    }
    self.version = options.version || null;
    self.isDiscarded = options.isDiscarded || false;
    self.requiredExternalID = options.requiredExternalID || false;

    /* Public methods */
    self.getItems = getItems;
    self.toJSON = toJSON;
    self.isRequiredExternalID = isRequiredExternalID;

    function getItems() {
      return self.surveyTemplate.getItems();
    }

    function isRequiredExternalID() {
      return self.requiredExternalID;
    }

    function toJSON() {
      var json = {};
      json.extents = self.extents;
      json.objectType = self.objectType;
      json._id = self._id;
      json.sender = self.sender;
      json.sendingDate = self.sendingDate;
      json.surveyFormType = self.surveyFormType;
      json.surveyTemplate = self.surveyTemplate;
      json.version = self.version;
      json.acronym = self.acronym;
      json.name = self.name;
      json.isDiscarded = self.isDiscarded;
      json.requiredExternalID = self.requiredExternalID;
      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').factory('SurveyIdentityFactory', SurveyIdentityFactory);

  function SurveyIdentityFactory() {
    var self = this;

    self.OBJECT_TYPE = 'SurveyIdentity';

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.survey.model.SurveyIdentityFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var surveyIdentity = new SurveyIdentity(jsonObject.name, jsonObject.acronym, jsonObject.version);

      surveyIdentity.recommendedTo = jsonObject.recommendedTo;
      surveyIdentity.description = jsonObject.description;
      surveyIdentity.keywords = jsonObject.keywords;

      return surveyIdentity;
    }

    function create(name, acronym) {
      return new SurveyIdentity(name, acronym);
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

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.name = self.name;
      json.acronym = self.acronym;
      json.recommendedTo = self.recommendedTo;
      json.description = self.description;
      json.keywords = self.keywords;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').factory('SurveyMetaInfoFactory', SurveyMetaInfoFactory);

  function SurveyMetaInfoFactory() {
    var self = this;

    self.OBJECT_TYPE = 'SurveyMetaInfo';

    /* Public interdace */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.survey.model.SurveyMetaInfoFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      return new SurveyMetaInfo(jsonObject.creationDatetime);
    }

    function create() {
      var now = new Date();
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

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.creationDatetime = self.creationDatetime;
      json.otusStudioVersion = self.otusStudioVersion;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.NavigationContainerFactory', Factory);

  Factory.$inject = ['otusjs.model.navigation.NavigationFactory'];

  function Factory(NavigationFactory) {
    var self = this;

    self.create = create;

    function create() {
      return new NavigationContainer(NavigationFactory);
    }

    return self;
  }

  function NavigationContainer(NavigationFactory) {
    var self = this;
    var _navigationList = [];

    /* Public methods */
    self.resetData = resetData;
    self.loadJsonData = loadJsonData;
    self.manageNavigation = manageNavigation;
    self.getNavigationByOrigin = getNavigationByOrigin;
    self.getNavigationByPosition = getNavigationByPosition;
    self.getNavigationPosition = getNavigationPosition;
    self.getNavigationPositionByOrigin = getNavigationPositionByOrigin;
    self.getNavigationList = getNavigationList;
    self.getNavigationListSize = getNavigationListSize;
    self.getBeginNode = getBeginNode;
    self.getEndNode = getEndNode;
    self.getOrphanNavigations = getOrphanNavigations;
    self.getLastNavigation = getLastNavigation;
    self.existsNavigationTo = existsNavigationTo;
    self.createNavigationTo = createNavigationTo;
    self.removeNavigationOf = removeNavigationOf;
    self.removeNavigationByIndex = removeNavigationByIndex;
    self.removeCurrentLastNavigation = removeCurrentLastNavigation;
    self.insertNavigation = insertNavigation;
    self.reorderNavigationIndex = reorderNavigationIndex;
    self.setInitialNodes = setInitialNodes;
    self.getPreviousOf = getPreviousOf;
    self.getNextOf = getNextOf;
    self.getEmptyNavigation = getEmptyNavigation;

    function resetData() {
      _navigationList = [];
    }

    function loadJsonData(jsonData) {
      resetData();
      // assumes previous load
      var navMap = _loadNavigations(jsonData);

      /* FIX IN NAVIGATIONS */
      var nullNavigation = NavigationFactory.createNullNavigation();
      _navigationList.forEach(function (navigation) {
        var replacer = [];
        navigation.inNavigations.forEach(function (inNav) {
          if (inNav && inNav.origin in navMap) {
            replacer.push(navMap[inNav.origin]);
          } else {
            replacer.push(nullNavigation);
          }
        });
        navigation.inNavigations = replacer.slice();
      });
    }

    function _loadNavigations(jsonData) {
      var navMap = {};
      var navigation;
      jsonData.forEach(function (newNavigation) {
        navigation = NavigationFactory.fromJson(newNavigation);
        _navigationList.push(navigation);
        navMap[navigation.origin] = navigation;
      });
      return navMap;
    }

    function getNavigationByOrigin(origin) {
      var found = _navigationList.find(function (navigation) {
        return _findByOrigin(navigation, origin);
      });
      return found;
    }

    function getEmptyNavigation(indexToRemove) {
      _navigationList[indexToRemove].routes = [];
      return _navigationList[indexToRemove];
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

    function getBeginNode() {
      return _navigationList[0];
    }

    function getEndNode() {
      return _navigationList[1];
    }

    function getPreviousOf(index) {
      if (index === 2) {
        return getNavigationByPosition(0);
      }
      return getNavigationByPosition(index - 1);
    }

    function getNextOf(index) {
      if (index === _navigationList.length - 1) {
        return getNavigationByPosition(1);
      }
      return getNavigationByPosition(index + 1);
    }

    function getNavigationByPosition(position) {
      return _navigationList[position];
    }

    function getNavigationPosition(navigation) {
      if (navigation) {
        return _navigationList.indexOf(navigation);
      } else {
        return null;
      }
    }

    function getNavigationPositionByOrigin(origin) {
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

    function getLastNavigation() {
      if (getNavigationListSize() === 2) {
        return getNavigationByPosition(0);
      } else {
        return getNavigationByPosition(getNavigationList().length - 1);
      }
    }

    function existsNavigationTo(origin) {
      return getNavigationByOrigin(origin) ? true : false;
    }

    function createNavigationTo(origin) {
      var newNavigation = NavigationFactory.create(origin);
      newNavigation.index = _navigationList.length;
      _navigationList.push(newNavigation);
      return newNavigation;
    }

    function setInitialNodes() {
      var beginNavigation = NavigationFactory.createInitial('BEGIN NODE', 'END NODE');
      var endNavigation = NavigationFactory.createInitial('END NODE', 'BEGIN NODE');

      _navigationList.unshift(endNavigation);
      _navigationList.unshift(beginNavigation);
    }

    function removeNavigationOf(questionID) {
      var navigationToRemove = _navigationList.find(function (navigation) {
        return _findByOrigin(navigation, questionID);
      });
      var indexToRemove = _navigationList.indexOf(navigationToRemove);
      if (indexToRemove > -1) {
        _navigationList.splice(indexToRemove, 1);
        _removeFromInNavigations(indexToRemove, navigationToRemove);
      }
    }

    function _removeFromInNavigations(indexToRemove, navigationToRemove) {
      var nullNavigation = NavigationFactory.createNullNavigation();
      var endNodeIndex = _navigationList[1].inNavigations.indexOf(navigationToRemove);
      if (endNodeIndex > -1) {
        _navigationList[1].inNavigations[endNodeIndex] = nullNavigation;
      }
      for (var i = indexToRemove; i < _navigationList.length; i++) {
        var inIndex = _navigationList[i].inNavigations.indexOf(navigationToRemove);
        if (inIndex > -1) {
          _navigationList[i].inNavigations[inIndex] = nullNavigation;
        }
      }
    }

    function removeNavigationByIndex(indexToRemove) {
      _navigationList.splice(indexToRemove, 1);
    }

    function removeCurrentLastNavigation() {
      _navigationList.splice(-1, 1);
    }

    function insertNavigation(navigation, originalPosition, position) {
      var actualPosition = originalPosition > position ? position + 2 : position + 1;

      _navigationList.splice(actualPosition, 0, navigation);

      return actualPosition;
    }

    function reorderNavigationIndex() {
      for (var i = 0; i < _navigationList.length; i++) {
        _navigationList[i].index = i;
      }
    }

    function _findByOrigin(navigation, questionID) {
      return navigation.origin === questionID;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').factory('otusjs.model.navigation.NavigationManagerFactory', Factory);

  Factory.$inject = ['otusjs.model.navigation.NavigationContainerFactory', 'otusjs.model.navigation.ContainerInitializationTaskService', 'otusjs.model.navigation.InitialNodesCreationTaskService', 'otusjs.model.navigation.NavigationCreationTaskService', 'otusjs.model.navigation.NavigationRemovalTaskService', 'otusjs.model.navigation.NavigationMovementTaskService', 'otusjs.model.navigation.NavigationInsertionTask', 'otusjs.model.navigation.DefaultRouteCreationTaskService', 'otusjs.model.navigation.AlternativeRouteCreationTaskService', 'otusjs.model.navigation.RouteRemovalTaskService', 'otusjs.model.navigation.RouteUpdateTaskService'];

  var Inject = {};

  function Factory(NavigationContainerFactory, ContainerInitializationTask, InitialNodesCreationTask, NavigationCreationTask, NavigationRemovalTask, NavigationMovementTaskService, NavigationInsertionTask, DefaultRouteCreationTaskService, AlternativeRouteCreationTaskService, RouteRemovalTaskService, RouteUpdateTaskService) {
    var self = this;

    self.create = create;

    function create(surveyTemplate) {
      var container = NavigationContainerFactory.create();
      _setupTaskServices(container);

      return new NavigationManager(surveyTemplate, container);
    }

    function _setupTaskServices(container) {
      ContainerInitializationTask.setContainer(container);
      NavigationCreationTask.setContainer(container);
      NavigationRemovalTask.setContainer(container);
      NavigationMovementTaskService.setContainer(container);
      NavigationInsertionTask.setContainer(container);
      DefaultRouteCreationTaskService.setContainer(container);
      AlternativeRouteCreationTaskService.setContainer(container);
      RouteRemovalTaskService.setContainer(container);
      RouteUpdateTaskService.setContainer(container);
      InitialNodesCreationTask.setContainer(container);

      Inject.ContainerInitializationTask = ContainerInitializationTask;
      Inject.NavigationCreationTask = NavigationCreationTask;
      Inject.NavigationRemovalTask = NavigationRemovalTask;
      Inject.NavigationMovementTaskService = NavigationMovementTaskService;
      Inject.NavigationInsertionTask = NavigationMovementTaskService;
      Inject.DefaultRouteCreationTaskService = DefaultRouteCreationTaskService;
      Inject.AlternativeRouteCreationTaskService = AlternativeRouteCreationTaskService;
      Inject.RouteRemovalTaskService = RouteRemovalTaskService;
      Inject.RouteUpdateTaskService = RouteUpdateTaskService;
      Inject.InitialNodesCreationTask = InitialNodesCreationTask;
    }
    return self;
  }

  function NavigationManager(surveyTemplate, container) {
    var self = this;
    var _selectedNavigation = null;

    /* Public interface */
    self.initialize = initialize;
    self.loadJsonData = loadJsonData;
    self.addNavigation = addNavigation;
    self.removeNavigation = removeNavigation;
    self.moveNavigation = moveNavigation;
    self.applyRoute = applyRoute;
    self.deleteRoute = deleteRoute;
    self.getNavigationList = getNavigationList;
    self.getExportableList = getExportableList;
    self.getDefaultNavigationPath = getDefaultNavigationPath;
    self.getAvaiableRuleCriterionTargets = getAvaiableRuleCriterionTargets;
    self.listOrphanNavigations = listOrphanNavigations;
    self.selectNavigationByOrigin = selectNavigationByOrigin;
    self.selectedNavigation = selectedNavigation;
    self.getNavigationByOrigin = getNavigationByOrigin;

    function initialize() {
      Inject.ContainerInitializationTask.execute();
    }

    function loadJsonData(data) {
      container.loadJsonData(data);
    }

    function addNavigation() {
      _ensuresInitialNodes();
      _selectedNavigation = Inject.NavigationCreationTask.execute(surveyTemplate.SurveyItemManager.getLastItem());
    }

    function moveNavigation(templateID, position) {
      Inject.NavigationMovementTaskService.execute(templateID, position);
    }

    function removeNavigation(templateID) {
      Inject.NavigationRemovalTask.execute(templateID);
    }

    function applyRoute(routeData) {
      if (_selectedNavigation.hasRoute(routeData)) {
        return Inject.RouteUpdateTaskService.execute(routeData, _selectedNavigation);
      } else if (routeData.isDefault) {
        Inject.DefaultRouteCreationTaskService.execute(routeData, _selectedNavigation);
      } else {
        Inject.AlternativeRouteCreationTaskService.execute(routeData, _selectedNavigation);
      }
    }

    function deleteRoute(routeData) {
      Inject.RouteRemovalTaskService.execute(routeData, _selectedNavigation);
    }

    function getNavigationList() {
      return container.getNavigationList();
    }

    function getNavigationByOrigin(origin) {
      return container.getNavigationByOrigin(origin);
    }

    function getExportableList() {
      var fullList = container.getNavigationList();
      return fullList.slice(2, fullList.length);
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

    function getAvaiableRuleCriterionTargets(referenceItemID) {
      var referenceItemIndex = surveyTemplate.SurveyItemManager.getItemPosition(referenceItemID);
      var allItems = surveyTemplate.SurveyItemManager.getItemList();

      var avaiableItems = allItems.filter(function (item, index) {
        return index <= referenceItemIndex;
      });
      return avaiableItems;
    }

    function listOrphanNavigations() {
      return NavigationContainer.getOrphanNavigations();
    }

    function selectNavigationByOrigin(origin) {
      _selectedNavigation = container.getNavigationByOrigin(origin);
      return _selectedNavigation;
    }

    function selectedNavigation() {
      return _selectedNavigation;
    }

    function _ensuresInitialNodes() {
      if (!container.getNavigationListSize()) {
        //TODO remove?
        Inject.InitialNodesCreationTask.execute();
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationValidatorService', service);

  service.$inject = ['SurveyItemContainerFactory'];

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
        if (question.templateID === questionID) {
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

  angular.module('otusjs.model.participant').factory('otusjs.model.participant.ParticipantFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    function create() {
      return new Participant({});
    }
    function fromJson(json) {
      return new Participant(json);
    }

    function fromArray(jsonObjects) {
      if (Array.isArray(jsonObjects)) {
        return jsonObjects.map(function (json) {
          return new Participant(json).toJSON();
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function Participant(participant) {
    var self = this;

    self.objectType = 'Participant';
    self.recruitmentNumber = participant.recruitmentNumber || "";
    self.name = participant.name || "";
    self.sex = participant.sex || "";
    self.birthdate = participant.birthdate || "";
    self.fieldCenter = participant.fieldCenter || {};
    self.email = participant.email || "";
    self.password = participant.password || "";
    self.registeredBy = participant.registeredBy;
    self.late = participant.late || false;
    self.identified = participant.identified;

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.recruitmentNumber = self.recruitmentNumber;
      if (self.name) json.name = self.name;
      if (self.sex) json.sex = self.sex;
      if (self.birthdate) json.birthdate = self.birthdate;
      json.fieldCenter = self.fieldCenter;
      json.late = self.late;
      json.identified = self.identified || !!(self.name && self.sex && self.birthdate);

      return json;
    }

    return self;
  }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.staticVariable').service('otusjs.staticVariable.AddStaticVariableTaskService', AddStaticVariableService);

    function AddStaticVariableService() {
        var self = this;

        self.execute = execute;

        function execute(survey, variable) {
            return survey.StaticVariableManager.add(variable);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.staticVariable').service('otusjs.staticVariable.RemoveStaticVariableTaskService', RemoveStaticVariableService);

    function RemoveStaticVariableService() {
        var self = this;

        self.execute = execute;

        function execute(survey, index) {
            return survey.StaticVariableManager.remove(index);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.staticVariable').service('otusjs.staticVariable.UpdateStaticVariableTaskService', UpdateStaticVariableService);

    function UpdateStaticVariableService() {
        var self = this;

        self.execute = execute;

        function execute(survey, index, variable) {
            return survey.StaticVariableManager.update(index, variable);
        }
    }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('SurveyItemFactory', SurveyItemFactory);

  SurveyItemFactory.$inject = [
  /* Question items */
  'CalendarQuestionFactory', 'IntegerQuestionFactory', 'DecimalQuestionFactory', 'SingleSelectionQuestionFactory', 'CheckboxQuestionFactory', 'TextQuestionFactory', 'TimeQuestionFactory', 'EmailQuestionFactory', 'PhoneQuestionFactory', 'AutocompleteQuestionFactory', 'FileUploadQuestionFactory', 'otusjs.model.question.GridTextQuestionFactory', 'otusjs.model.question.GridIntegerQuestionFactory',
  /* Miscelaneous items */
  'TextItemFactory', 'ImageItemFactory'];

  function SurveyItemFactory(CalendarQuestionFactory, IntegerQuestionFactory, DecimalQuestionFactory, SingleSelectionQuestionFactory, CheckboxQuestionFactory, TextQuestionFactory, TimeQuestionFactory, EmailQuestionFactory, PhoneQuestionFactory, AutocompleteQuestionFactory, FileUploadQuestionFactory, GridTextQuestionFactory, GridIntegerQuestionFactory, TextItemFactory, ImageItemFactory) {

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
      'AutocompleteQuestion': AutocompleteQuestionFactory,
      'FileUploadQuestion': FileUploadQuestionFactory,
      'GridTextQuestion': GridTextQuestionFactory,
      'GridIntegerQuestion': GridIntegerQuestionFactory,
      /* Miscelaneous items */
      'TextItem': TextItemFactory,
      'ImageItem': ImageItemFactory
    };

    /* Public interface */
    self.create = create;
    self.load = load;

    function create(itemType, templateID) {
      var item = new SurveyItem(templateID);
      return factoryMap[itemType].create(templateID, item);
    }

    function load(itemObject) {
      return factoryMap[itemObject.objectType].fromJsonObject(itemObject);
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

  angular.module('otusjs.surveyItem').factory('SurveyItemContainerFactory', Factory);

  Factory.$inject = ['SurveyItemFactory'];

  function Factory(SurveyItemFactory) {
    var self = this;

    self.create = create;

    function create() {
      return new SurveyItemContainer(SurveyItemFactory);
    }

    return self;
  }

  function SurveyItemContainer(SurveyItemFactory) {
    var self = this;
    var _itemList = []; // TODO: To implement Immutable collection

    /* Public methods */
    self.loadFromItemContainerObject = loadFromItemContainerObject;
    self.manageItems = manageItems;
    self.getItemList = getItemList;
    self.getItemListSize = getItemListSize;
    self.getItemByTemplateID = getItemByTemplateID;
    self.getItemByCustomID = getItemByCustomID;
    self.getItemByID = getItemByID;
    self.getAllCheckboxQuestion = getAllCheckboxQuestion;
    self.getAllGridTextQuestion = getAllGridTextQuestion;
    self.getAllGridIntegerQuestion = getAllGridIntegerQuestion;
    self.getItemByPosition = getItemByPosition;
    self.getItemPosition = getItemPosition;
    self.getLastItem = getLastItem;
    self.existsItem = existsItem;
    self.createItem = createItem;
    self.moveItem = moveItem;
    self.removeItem = removeItem;
    self.removeItemByPosition = removeItemByPosition;
    self.removeCurrentLastItem = removeCurrentLastItem;

    function loadFromItemContainerObject(itemContainerObject) {
      _itemList = [];
      itemContainerObject.forEach(function (item) {
        _itemList.push(SurveyItemFactory.load(item));
      });
    }

    function manageItems(itemsToManage) {
      _itemList = itemsToManage;
    }

    function getItemList() {
      return _itemList;
    }

    function getItemListSize() {
      return _itemList.length;
    }

    function getItemByTemplateID(templateID) {
      var filter = _itemList.filter(function (item) {
        return _findByTemplateID(item, templateID);
      });

      return filter[0];
    }

    function getItemByCustomID(customID) {
      var filter = _itemList.filter(function (item) {
        return _findByCustomID(item, customID);
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
      _itemList.filter(function (item) {
        if (item.objectType === "CheckboxQuestion") {
          occurences.push(item);
        }
      });
      return occurences;
    }

    function getAllGridTextQuestion() {
      var occurences = [];
      _itemList.filter(function (item) {
        if (item.objectType === "GridTextQuestion") {
          occurences.push(item);
        }
      });
      return occurences;
    }

    function getAllGridIntegerQuestion() {
      var occurences = [];
      _itemList.filter(function (item) {
        if (item.objectType === "GridIntegerQuestion") {
          occurences.push(item);
        }
      });
      return occurences;
    }

    function getItemByPosition(position) {
      return _itemList[position];
    }

    function getItemPosition(templateID) {
      var item = getItemByTemplateID(templateID);
      if (item) {
        return _itemList.indexOf(item);
      } else {
        return null;
      }
    }

    function getLastItem() {
      return _itemList[_itemList.length - 1];
    }

    function existsItem(id) {
      return getItemByTemplateID(id) || getItemByCustomID(id) ? true : false;
    }

    function createItem(itemType, templateID) {
      var item = SurveyItemFactory.create(itemType, templateID);
      _itemList.push(item);
      return item;
    }

    function removeItem(templateID) {
      var itemToRemove = _itemList.filter(function (item) {
        return _findByTemplateID(item, templateID);
      });

      var indexToRemove = _itemList.indexOf(itemToRemove[0]);
      if (indexToRemove > -1) {
        _itemList.splice(indexToRemove, 1);
      }
    }

    function removeItemByPosition(indexToRemove) {
      _itemList.splice(indexToRemove, 1);
    }

    function removeCurrentLastItem() {
      _itemList.splice(-1, 1);
    }

    function moveItem(templateID, destination) {
      var origin = _itemList.findIndex(function (item) {
        return _findByTemplateID(item, templateID);
      });
      _reorder(origin, destination);
    }

    function _reorder(origin, destination) {
      var itemToBeMoved = _itemList.splice(origin, 1)[0];

      if (origin >= destination) {
        _itemList.splice(destination, 0, itemToBeMoved);
      } else {
        _itemList.splice(destination - 1, 0, itemToBeMoved);
      }
    }

    function _findByTemplateID(item, templateID) {
      return item.templateID.toLowerCase() === templateID.toLowerCase();
    }

    function _findByCustomID(item, customID) {
      return item.customID.toLowerCase() === customID.toLowerCase();
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('SurveyItemManagerFactory', Factory);

  Factory.$inject = ['SurveyItemContainerFactory'];

  function Factory(SurveyItemContainerFactory) {
    var self = this;

    self.create = create;

    function create() {
      return new SurveyItemManager(SurveyItemContainerFactory.create());
    }

    return self;
  }

  function SurveyItemManager(surveyItemContainer) {
    var self = this;
    var incrementalIDValue = 0;

    /* Public interface */
    self.init = init;
    self.loadJsonDataObject = loadJsonDataObject;
    self.setIncrementalIDValue = setIncrementalIDValue;
    self.getItemList = getItemList;
    self.getItemListSize = getItemListSize;
    self.getItemByTemplateID = getItemByTemplateID;
    self.getItemByCustomID = getItemByCustomID;
    self.getItemByID = getItemByID;
    self.getItemByPosition = getItemByPosition;
    self.getItemPosition = getItemPosition;
    self.getAllCustomOptionsID = getAllCustomOptionsID;
    self.getLastItem = getLastItem;
    self.addItem = addItem;
    self.loadItem = loadItem;
    self.removeItem = removeItem;
    self.moveItem = moveItem;
    self.existsItem = existsItem;
    self.isAvailableCustomID = isAvailableCustomID;

    function init() {
      // surveyItemContainer.init();
      incrementalIDValue = 0;
    }

    function loadJsonDataObject(itemContainerObject) {
      surveyItemContainer.loadFromItemContainerObject(itemContainerObject);
    }

    function getItemList() {
      return surveyItemContainer.getItemList();
    }

    function getItemListSize() {
      return surveyItemContainer.getItemListSize();
    }

    function getItemByTemplateID(templateID) {
      return surveyItemContainer.getItemByTemplateID(templateID);
    }

    function getItemByCustomID(customID) {
      return surveyItemContainer.getItemByCustomID(customID);
    }

    function getItemByID(id) {
      return surveyItemContainer.getItemByID(id);
    }

    function getItemByPosition(position) {
      return surveyItemContainer.getItemByPosition(position);
    }

    function getItemPosition(customID) {
      return surveyItemContainer.getItemPosition(customID);
    }

    function getAllCustomOptionsID() {
      var customOptionsID = [];
      var checkboxQuestions = surveyItemContainer.getAllCheckboxQuestion();
      var gridTextQuestions = surveyItemContainer.getAllGridTextQuestion();
      var gridIntegerQuestions = surveyItemContainer.getAllGridIntegerQuestion();
      if (checkboxQuestions.length > 0) {
        checkboxQuestions.forEach(function (checkboxQuestion) {
          checkboxQuestion.getAllCustomOptionsID().forEach(function (customOptionID) {
            customOptionsID.push(customOptionID);
          });
        });
      }

      if (gridTextQuestions.length > 0) {
        gridTextQuestions.forEach(function (gridTextQuestion) {
          gridTextQuestion.getAllCustomOptionsID().forEach(function (arrayResult) {
            arrayResult.forEach(function (customOptionID) {
              customOptionsID.push(customOptionID);
            });
          });
        });
      }

      if (gridIntegerQuestions.length > 0) {
        gridIntegerQuestions.forEach(function (gridIntegerQuestion) {
          gridIntegerQuestion.getAllCustomOptionsID().forEach(function (arrayResult) {
            arrayResult.forEach(function (customOptionID) {
              customOptionsID.push(customOptionID);
            });
          });
        });
      }

      return customOptionsID;
    }

    function getLastItem() {
      return surveyItemContainer.getLastItem();
    }

    function loadItem(itemType, templateID, surveyAcronym) {
      var item = surveyItemContainer.createItem(itemType, templateID);
      self.setIncrementalIDValue(parseInt(templateID.split(surveyAcronym)[1]));
      return item;
    }

    function setIncrementalIDValue(id) {
      incrementalIDValue = id;
    }

    function addItem(itemType, templateIDPrefix) {
      var templateID;
      do {
        templateID = templateIDPrefix + _getNextIncrementalGenerator();
      } while (!isAvailableCustomID(templateID));
      return surveyItemContainer.createItem(itemType, templateID);
    }

    function removeItem(templateID) {
      surveyItemContainer.removeItem(templateID);
    }

    function moveItem(item, destination) {
      surveyItemContainer.moveItem(item.templateID, destination);
    }

    function _getNextIncrementalGenerator() {
      return ++incrementalIDValue;
    }

    function existsItem(id) {
      return surveyItemContainer.existsItem(id);
    }

    function isAvailableCustomID(id) {
      var foundCustomOptionID = false;
      getAllCustomOptionsID().forEach(function (customOptionID) {
        if (customOptionID === id) {
          foundCustomOptionID = true;
        }
      });
      return !(getItemByCustomID(id) || foundCustomOptionID);
    }
  }
})();
'use strict';

(function () {
  'use restrict';

  angular.module('otusjs.model.pendency').factory('otusjs.model.pendency.UserActivityPendencyFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(requester, receiver, creationDate, dueDate, activityId, activityInfo, _id) {
      return new UserActivityPendency(requester, receiver, creationDate, dueDate, activityId, activityInfo, _id);
    }

    function fromJsonObject(jsonObject) {
      //Destruct ES6
      var requester = jsonObject.requester,
          receiver = jsonObject.receiver,
          creationDate = jsonObject.creationDate,
          dueDate = jsonObject.dueDate,
          activityId = jsonObject.activityId,
          activityInfo = jsonObject.activityInfo,
          _id = jsonObject._id;

      return new UserActivityPendency(requester, receiver, creationDate, dueDate, activityId, activityInfo, _id);
    }

    return self;
  }

  function UserActivityPendency(requester, receiver, creationDate, dueDate, activityId, activityInfo, id) {
    var self = this;
    self.id = id || null;
    self.objectType = 'userActivityPendency';
    self.creationDate = creationDate || new Date();
    self.dueDate = dueDate;
    self.requester = requester;
    self.receiver = receiver;
    self.activityId = activityId;

    try {
      self.activityInfo = {
        acronym: activityInfo.acronym,
        name: activityInfo.name,
        recruitmentNumber: activityInfo.recruitmentNumber,
        lastStatusName: activityInfo.lastStatusName,
        externalID: activityInfo.externalID
      };
    } catch (e) {}

    /* Public Getter Methods */
    self.getID = function () {
      return self.id;
    };
    self.getCreationDate = function () {
      return self.creationDate;
    };
    self.getDueDate = function () {
      return self.dueDate;
    };
    self.getRequester = function () {
      return self.requester;
    };
    self.getReceiver = function () {
      return self.receiver;
    };
    self.getActivityID = function () {
      return self.activityId;
    };
    self.getActivityAcronym = function () {
      return self.activityInfo.acronym;
    };
    self.getActivityName = function () {
      return self.activityInfo.name;
    };
    self.getActivityRecruitmentNumber = function () {
      return self.activityInfo.recruitmentNumber;
    };
    self.getActivitylastStatusName = function () {
      return self.activityInfo.lastStatusName;
    };
    self.getActivityExternalID = function () {
      return self.activityInfo.externalID;
    };

    /* Public  Setter Methods */
    self.setReceiver = function (receiver) {
      return self.receiver = receiver;
    };
    self.setDueDate = function (date) {
      return self.dueDate = date;
    };

    /* Public  methods */
    self.toJSON = toJSON;

    function toJSON() {
      return {
        id: self.id,
        objectType: self.objectType,
        creationDate: self.creationDate,
        dueDate: self.dueDate,
        requester: self.requester,
        receiver: self.receiver,
        activityId: self.activityId
      };
    }
  }
})();
"use strict";

(function () {
  'use strict';

  angular.module("otusjs.user.permission").factory("otusjs.user.permission.LaboratoryPermissionFactory", Factory);

  function Factory() {
    var self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      return new LaboratoryPermission(permissionJson, userEmail);
    }

    return self;

    function LaboratoryPermission(permissionJson, userEmail) {
      var self = this;
      var _email = userEmail || permissionJson.email;

      self.objectType = "LaboratoryPermission";
      self.access = permissionJson.access || false;

      self.toJSON = toJSON;

      function toJSON() {
        var json = {};

        json.objectType = self.objectType;
        json.email = _email;
        json.access = self.access;

        return json;
      }

      return self;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.user.permission').factory('otusjs.user.permission.PermissionManagerFactory', Factory);

  Factory.$inject = ['otusjs.user.permission.PermissionMapper'];

  function Factory(PermissionMapper) {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(permissions, userEmail) {
      if (!userEmail) {
        throw new Error("Undefined user email");
      }

      return new UserPermissionManager(PermissionMapper, permissions, userEmail);
    }

    return self;
  }

  function UserPermissionManager(PermissionMapper, permissions, userEmail) {
    var self = this;
    var email = userEmail;

    self.objectType = 'UserPermissionManager';
    self.permissionList = _resolvePermissions(permissions) || [];

    /* Public Methods */
    self.findByType = findByType;

    function findByType(objectType) {
      var permission = self.permissionList.find(function (permission) {
        return permission.objectType === objectType;
      });
      if (!permission) {
        throw new Error("Permission not found: " + objectType);
      }

      return permission;
    }

    function _resolvePermissions(permissions) {
      return permissions.map(function (permission) {
        return PermissionMapper.create(permission, email);
      });
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.user.permission').service('otusjs.user.permission.PermissionMapper', Service);

  Service.$inject = ['otusjs.user.permission.SurveyGroupPermissionFactory', 'otusjs.user.permission.LaboratoryPermissionFactory'];

  function Service(SurveyGroupPermissionFactory, LaboratoryPermissionFactory) {
    var self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      switch (permissionJson.objectType) {
        case "SurveyGroupPermission":
          return SurveyGroupPermissionFactory.create(permissionJson, userEmail);

        case "LaboratoryPermission":
          return LaboratoryPermissionFactory.create(permissionJson, userEmail);

        default:
          throw Error("Undefined object type");
      }
    }
  }
})();
"use strict";

(function () {
  'use strict';

  angular.module("otusjs.user.permission").factory("otusjs.user.permission.SurveyGroupPermissionFactory", Factory);

  function Factory() {
    var self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      return new SurveyGroupPermission(permissionJson, userEmail);
    }

    return self;

    function SurveyGroupPermission(permissionJson, userEmail) {
      var self = this;
      var _email = userEmail || permissionJson.email;

      self.objectType = "SurveyGroupPermission";
      self.groups = permissionJson.groups || [];

      /* Public Methods */
      self.addGroup = addGroup;
      self.removeGroupByName = removeGroupByName;
      self.removeGroupByPosition = removeGroupByPosition;
      self.toJSON = toJSON;

      function addGroup(groupName) {
        self.groups.push(groupName);
      }

      function removeGroupByName(groupName) {
        var index = self.groups.indexOf(groupName);
        removeGroupByPosition(index);
        return self;
      }

      function removeGroupByPosition(index) {
        if (index === -1) {
          throw new Error("Group not found");
        }
        self.groups.splice(index, 1);

        return self;
      }

      function toJSON() {
        var json = {};
        json.objectType = self.objectType;
        json.email = _email;
        json.groups = self.groups;

        return json;
      }

      return self;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('FillingRulesDataFactory', FillingRulesDataFactory);

  FillingRulesDataFactory.$inject = ['otusjs.model.accept.AcceptAnswerFactory', 'AlphanumericValidatorFactory', 'DistinctValidatorFactory', 'FutureDateValidatorFactory', 'InValidatorFactory', 'LowerCaseValidatorFactory', 'LowerLimitValidatorFactory', 'MandatoryValidatorFactory', 'MaxDateValidatorFactory', 'MaxLengthValidatorFactory', 'MaxTimeValidatorFactory', 'MinDateValidatorFactory', 'MinLengthValidatorFactory', 'MinTimeValidatorFactory', 'ParameterValidatorFactory', 'PastDateValidatorFactory', 'PrecisionValidatorFactory', 'RangeDateValidatorFactory', 'ScaleValidatorFactory', 'SpecialsValidatorFactory', 'UpperCaseValidatorFactory', 'UpperLimitValidatorFactory', 'otusjs.model.validation.MinSelectedValidatorFactory', 'otusjs.model.validation.MaxSelectedValidatorFactory', 'otusjs.model.validation.QuantityValidatorFactory'];

  function FillingRulesDataFactory(AcceptAnswerFactory, AlphanumericValidatorFactory, DistinctValidatorFactory, FutureDateValidatorFactory, InValidatorFactory, LowerCaseValidatorFactory, LowerLimitValidatorFactory, MandatoryValidatorFactory, MaxDateValidatorFactory, MaxLengthValidatorFactory, MaxTimeValidatorFactory, MinDateValidatorFactory, MinLengthValidatorFactory, MinTimeValidatorFactory, ParameterValidatorFactory, PastDateValidatorFactory, PrecisionValidatorFactory, RangeDateValidatorFactory, ScaleValidatorFactory, SpecialsValidatorFactory, UpperCaseValidatorFactory, UpperLimitValidatorFactory, MinSelectedValidatorFactory, MaxSelectedValidatorFactory, QuantityValidatorFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(validator) {
      return validatorsTemplates[validator].create();
    }

    function fromJsonObject(jsonObject) {
      return validatorsTemplates[jsonObject.validatorType].fromJsonObject(jsonObject.data);
    }

    var validatorsTemplates = {
      accept: AcceptAnswerFactory,
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
      upperLimit: UpperLimitValidatorFactory,
      minSelected: MinSelectedValidatorFactory,
      maxSelected: MaxSelectedValidatorFactory,
      quantity: QuantityValidatorFactory
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new FillingRules(RulesFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.FillingRulesOptionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var fillingRules = new FillingRules(RulesFactory);
      for (var rule in jsonObject.options) {
        fillingRules.options[rule] = RulesFactory.fromJsonObject(jsonObject.options[rule]);
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

    _init();

    function _init() {
      self.createOption('mandatory');
    }

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
    self.fromJsonObject = fromJsonObject;

    function create(validatorType) {
      var validator = FillingRulesDataFactory.create(validatorType);
      return new Rule(validatorType, validator);
    }

    function fromJsonObject(jsonObject) {
      var validator = FillingRulesDataFactory.fromJsonObject(jsonObject);
      return new Rule(jsonObject.validatorType, validator);
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

  angular.module('otusjs.model.activity').service('otusjs.model.activity.ActivityImportService', Service);

  Service.$inject = ['ElementRegisterFactory', 'otusjs.validation.api.ValidationService', 'otusjs.model.activity.ActivityFactory', 'otusjs.model.activity.QuestionFillFactory', 'otusjs.model.activity.InterviewFactory', 'otusjs.model.activity.ValidationTypeService', 'otusjs.model.activity.FillingManagerFactory'];

  function Service(ElementRegisterFactory, ValidationService, ActivityFactory, QuestionFillFactory, InterviewFactory, ValidationTypeService, FillingManagerFactory) {
    var self = this;

    var _isValid = true;
    var _elementRegister = null;
    var _item = null;
    var _activity;
    var _activities = [];

    //Public methods
    self.fromJsonObject = fromJsonObject;
    self.create = create;

    function _setQuestionFill(answers, item) {
      if (answers[item.customID]) {
        _activity.fillContainer.updateFilling(QuestionFillFactory.create(item, answers[item.customID].value, answers[item.customID].metadata, answers[item.customID].comment));
      }
    }

    function _getQuestionsIdsMap(answers) {
      var _mapId = {};
      _activity.fillContainer = FillingManagerFactory.create();
      _activity.surveyForm.surveyTemplate.toJSON().itemContainer.forEach(function (item) {
        _mapId[item.templateID] = item.customID;
        _setQuestionFill(answers, item);
      });

      return _mapId;
    }

    function _setAnswersValues(answers) {
      var IDS = _getQuestionsIdsMap(answers);
      _activity.fillContainer.buildJsonToFillContainer().fillingList.forEach(function (question) {
        if (_isValid) {
          _item = _activity.surveyForm.surveyTemplate.SurveyItemManager.getItemByTemplateID(question.questionID);
          question.answer.value = answers[IDS[question.questionID]] ? answers[IDS[question.questionID]].value : null;
          question.answer.comment = answers[IDS[question.questionID]] ? answers[IDS[question.questionID]].comment : '';

          //checks the presence of metadata response
          if (answers[IDS[question.questionID]].metadata) _validateMetadata(_item.metadata.options, answers[IDS[question.questionID]].metadata, question);else question.metadata.value = null;

          _validateActivity(question.questionID, question.answer, _item, question.metadata);
          if (!_isValid) _activity.error = "Questão {" + IDS[question.questionID] + "} contém uma resposta inválida!";
        }
      });
      _activity.isValid = _isValid;
      _isValid = true;
    }

    function _validateMetadata(metadataOptions, answerMetadata, question) {
      var associated = metadataOptions.filter(function (options) {
        return options.extractionValue === answerMetadata;
      });

      if (associated.length) {
        metadataOptions.forEach(function (option, idx) {
          if (option.extractionValue === answerMetadata) {
            _isValid = true;
            question.metadata.value = ++idx;
          }
        });
      } else _isValid = false;
    }

    function _validateActivity(templateID, answer, _item, metadata) {
      if (_isValid) {
        _isValid = (answer.value || answer.value === 0) && metadata.value ? false : true;
        if (_isValid && !metadata.value) {
          _elementRegister = ElementRegisterFactory.create(templateID, { data: answer.value });
          _setupValidation(_item);
          ValidationService.validateElement(templateID, function (response) {
            response.forEach(function (validation) {
              validation.validatorsResponse.forEach(function (validator) {
                _isValid = validator.result && ValidationTypeService.isValid(_item.dataType, answer.value);
              });
            });
          });
        }
      }
    }

    function _setupValidation(_item) {
      Object.keys(_item.fillingRules.options).forEach(function (validator) {
        _addValidator(validator, _item);
      });

      ValidationService.unregisterElement(_elementRegister.id);
      ValidationService.registerElement(_elementRegister);
    }

    function _addValidator(validator, _item) {
      var reference = _item.fillingRules.options[validator].data;
      if (_item.objectType === "TimeQuestion" || _item.objectType === "CalendarQuestion") {
        _elementRegister.addValidator("ImmutableDate", reference);
      } else {
        _elementRegister.addValidator(validator, reference);
      }
    }

    function _createStatusHistoryPaper(json) {
      switch (json.status) {
        case 'OPENED':
          _activity.statusHistory.newOpenedRegistry(json.user);
          break;
        case 'SAVED':
          _activity.statusHistory.newOpenedRegistry(json.user);
          _activity.statusHistory.newSavedRegistry(json.user);
          break;
        case 'FINALIZED':
          _activity.statusHistory.newOpenedRegistry(json.user);
          _activity.statusHistory.newFinalizedRegistry(json.user);
          break;
      }
    }

    function _createStatusHistoryOnline(json) {
      switch (json.status) {
        case 'INITIALIZED_ONLINE':
          _activity.statusHistory.newInitializedOnlineRegistry(json.user);
          break;
        case 'OPENED':
          _activity.statusHistory.newInitializedOnlineRegistry(json.user);
          _activity.statusHistory.newOpenedRegistry(json.user);
          break;
        case 'SAVED':
          _activity.statusHistory.newInitializedOnlineRegistry(json.user);
          _activity.statusHistory.newOpenedRegistry(json.user);
          _activity.statusHistory.newSavedRegistry(json.user);
          break;
        case 'FINALIZED':
          _activity.statusHistory.newInitializedOnlineRegistry(json.user);
          _activity.statusHistory.newOpenedRegistry(json.user);
          _activity.statusHistory.newFinalizedRegistry(json.user);
          break;
      }
    }

    function _setInterview(user) {
      _activity.interviews.newRegistry(user);
    }

    function _isValidSurveys(acronym, json) {
      var _valid = true;
      json.forEach(function (activity) {
        if (_valid) {
          _valid = acronym == activity.acronym;
        }
      });
      return _valid;
    }

    function fromJsonObject(surveyForm, jsonObject, user) {
      _activities = [];
      if (Array.isArray(jsonObject)) {
        if (jsonObject.length > 0) {
          if (_isValidSurveys(surveyForm.surveyTemplate.identity.acronym, jsonObject)) {
            jsonObject.forEach(function (json) {
              _activities.push(self.create(surveyForm, json, user));
            });
          }
        }
      }
      return _activities;
    }

    function create(surveyForm, json, user) {
      self = this;
      _activity = null;
      if (json.acronym == surveyForm.surveyTemplate.identity.acronym) {
        if (json.mode === "PAPER" && json.offlineData) {
          _activity = ActivityFactory.createPaperActivity(surveyForm, user, json.participant, json.offlineData, json.activityConfiguration, json.id);
          _createStatusHistoryPaper(json);
        } else if (json.mode === "ONLINE") {
          _activity = ActivityFactory.create(surveyForm, user, json.participant, json.activityConfiguration, json.id);
          _createStatusHistoryOnline(json);
        }
        _setAnswersValues(json.answers);
        _setInterview(user);
        _activity.surveyForm.acronym = _activity.surveyForm.surveyTemplate.identity.acronym;
      }

      return angular.copy(_activity);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.AnswerEvaluationService', Service);

  Service.$inject = ['otusjs.model.activity.NumericRuleTestService', 'otusjs.model.activity.TextRuleTestService', 'otusjs.model.activity.CalendarRuleTestService', 'otusjs.model.activity.TimeRuleTestService', 'otusjs.model.activity.CheckboxRuleTestService'];

  function Service(NumericRuleTestService, TextRuleTestService, CalendarRuleTestService, TimeRuleTestService, CheckboxRuleTestService) {
    var self = this;
    var _evaluators = {};

    /* Public methods */
    self.getEvaluator = getEvaluator;

    _setupEvaluators();

    function getEvaluator(evaluator) {
      return _evaluators[evaluator];
    }

    function _setupEvaluators() {
      _evaluators.IntegerQuestion = NumericRuleTestService;
      _evaluators.DecimalQuestion = NumericRuleTestService;
      _evaluators.SingleSelectionQuestion = NumericRuleTestService;
      _evaluators.TextQuestion = TextRuleTestService;
      _evaluators.EmailQuestion = TextRuleTestService;
      _evaluators.TimeQuestion = TimeRuleTestService;
      _evaluators.CheckboxQuestion = CheckboxRuleTestService;
      _evaluators.AutocompleteQuestion = TextRuleTestService;
      _evaluators.FileUploadQuestion = NumericRuleTestService;
      _evaluators.GridTextQuestion = NumericRuleTestService;
      _evaluators.GridIntegerQuestion = NumericRuleTestService;
      _evaluators.CalendarQuestion = CalendarRuleTestService;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.CalendarRuleTestService', Service);

  Service.$inject = ['otusjs.model.activity.NumericRuleTestService', 'otusjs.utils.ImmutableDate'];

  function Service(NumericRuleTestService, ImmutableDate) {
    var self = this;
    var _runner = {};
    self.name = 'CalendarRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      _polyfillIsInteger();
      if (!rule.isMetadata && !answer) {
        return false;
      } else if (rule.isMetadata) {
        return NumericRuleTestService.run(rule, answer);
      } else {
        var resultRegex = rule.answer.match(/^(\d{1,2})[\/](\d{1,2})[\/](\d{4})$/);
        var immutableDate = createImmutableDate(resultRegex);
        return _runner[rule.operator](immutableDate, answer);
      }
    }

    _runner.equal = function (reference, answer) {
      return answer.getTime() == reference.getTime();
    };

    _runner.notEqual = function (reference, answer) {
      return answer.getTime() != reference.getTime();
    };

    _runner.greater = function (reference, answer) {
      return answer.getTime() > reference.getTime();
    };

    _runner.greaterEqual = function (reference, answer) {
      return answer.getTime() >= reference.getTime();
    };

    _runner.lower = function (reference, answer) {
      return answer.getTime() < reference.getTime();
    };

    _runner.lowerEqual = function (reference, answer) {
      return answer.getTime() <= reference.getTime();
    };

    function _polyfillIsInteger() {
      Number.isInteger = Number.isInteger || function (value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      };
    }

    function createImmutableDate(resultRegex) {
      var immutableDate = new ImmutableDate();
      immutableDate.resetDate();
      immutableDate.setDate(resultRegex[1]);
      immutableDate.setMonth(resultRegex[2] - 1);
      immutableDate.setFullYear(resultRegex[3]);
      immutableDate.setHours(0);
      immutableDate.setMinutes(0);
      immutableDate.setSeconds(0);
      immutableDate.setMilliseconds(0);
      return immutableDate;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.CheckboxRuleTestService', Service);

  Service.$inject = ['otusjs.model.activity.NumericRuleTestService'];

  function Service(NumericRuleTestService) {
    var self = this;
    var _runner = {};
    self.name = 'CheckboxRuleTest';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      _polyfillIsInteger();

      if (answer instanceof Array) {
        return _runner[rule.operator](rule.answer, answer);
      } else if (rule.isMetadata || Number.isInteger(answer)) {
        return NumericRuleTestService.run(rule, answer);
      } else {
        return false;
      }
    }

    _runner.equal = function (reference, answer) {
      var result = answer.filter(function (answer) {
        if (answer.option === reference && answer.state === true) {
          return true;
        }
      });
      return result.length > 0 ? true : false;
    };

    _runner.notEqual = function (reference, answer) {
      var result = answer.filter(function (answer) {
        if (answer.option === reference && answer.state === true) {
          return true;
        }
      });
      return result.length > 0 ? false : true;
    };

    _runner.contains = function (reference, answer) {
      var result = answer.filter(function (answer) {
        if (answer.option === reference && answer.state === true) {
          return true;
        }
      });
      return result.length > 0 ? true : false;
    };

    _runner.quantity = function (reference, answer) {
      var result = answer.filter(function (answer) {
        if (answer.state === true) {
          return true;
        }
      });
      return result.length == reference;
    };

    _runner.minSelected = function (reference, answer) {
      var result = answer.filter(function (answer) {
        if (answer.state === true) {
          return true;
        }
      });
      return result.length >= reference;
    };

    _runner.maxSelected = function (reference, answer) {
      var result = answer.filter(function (answer) {
        if (answer.state === true) {
          return true;
        }
      });

      return result.length <= reference;
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

  angular.module('otusjs.model.activity').service('otusjs.model.activity.NumericRuleTestService', Service);

  function Service() {
    var self = this;
    var _runner = {};
    self.name = 'NumericRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      _polyfillIsInteger();

      if (answer == null) {
        return false;
      }

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

  Service.$inject = ['otusjs.model.activity.NumericRuleTestService'];

  function Service(NumericRuleTestService) {
    var self = this;
    var _runner = {};
    self.name = 'TextRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      if (!rule.isMetadata && !answer) {
        return false;
      } else if (rule.isMetadata) {
        return NumericRuleTestService.run(rule, answer);
      } else {
        return _runner[rule.operator](rule.answer, answer.toString());
      }
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

  angular.module('otusjs.model.activity').service('otusjs.model.activity.TimeRuleTestService', Service);

  Service.$inject = ['otusjs.model.activity.NumericRuleTestService', 'otusjs.utils.ImmutableDate'];

  function Service(NumericRuleTestService, ImmutableDate) {
    var self = this;
    var _runner = {};
    self.name = 'TimeRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      _polyfillIsInteger();
      if (!rule.isMetadata && !answer) {
        return false;
      } else if (rule.isMetadata) {
        return NumericRuleTestService.run(rule, answer);
      } else {
        var resultRegex = rule.answer.split(':');
        var immutableDate = _createImmutableDate(resultRegex);
        return _runner[rule.operator](immutableDate, answer);
      }
    }

    _runner.equal = function (reference, answer) {
      return answer.getTime() == reference.getTime();
    };

    _runner.notEqual = function (reference, answer) {
      return answer.getTime() != reference.getTime();
    };

    _runner.greater = function (reference, answer) {
      return answer.getTime() > reference.getTime();
    };

    _runner.greaterEqual = function (reference, answer) {
      return answer.getTime() >= reference.getTime();
    };

    _runner.lower = function (reference, answer) {
      return answer.getTime() < reference.getTime();
    };

    _runner.lowerEqual = function (reference, answer) {
      return answer.getTime() <= reference.getTime();
    };

    function _polyfillIsInteger() {
      Number.isInteger = Number.isInteger || function (value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      };
    }

    function _createImmutableDate(resultRegex) {
      var immutableDate = new ImmutableDate();
      immutableDate.resetDate();
      immutableDate.setHours(resultRegex[0]);
      immutableDate.setMinutes(resultRegex[1]);
      immutableDate.setSeconds(resultRegex[2] != undefined ? resultRegex[2] : 0);
      immutableDate.setMilliseconds(resultRegex[3] != undefined ? resultRegex[3] : 0);
      return immutableDate;
    }
  }
})();
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.ValidationTypeService', Service);

  function Service() {
    var self = this;

    var STRING = "String";
    var INTEGER = "Integer";
    var LOCAL_DATE = "LocalDate";
    var LOCAL_TIME = "LocalTime";
    var BINARY = "Binary";
    var BOOLEAN = "Boolean";
    var DECIMAL = "Decimal";
    var ARRAY = "Array";

    self.isValid = isValid;

    function isValid(dataType, value) {
      var _validation = false;
      switch (dataType) {
        case STRING:
          var dateInvalid = new Date(value);
          _validation = typeof value === "string" && Number.isNaN(dateInvalid.getDate());
          break;
        case INTEGER:
          var numberInt = new Number(value);
          _validation = typeof value === "number" && Number.isInteger(numberInt.valueOf()) && !Number.isNaN(numberInt);
          break;
        case BOOLEAN:
          _validation = typeof value === "boolean";
          break;
        case ARRAY:
          _validation = Array.isArray(value);
          break;
        case LOCAL_DATE:
        case LOCAL_TIME:
          var anyNumber = typeof value === "number" && !Number.isNaN(new Number(value));
          var isBoolean = typeof value === "boolean";
          var date = new Date(value);
          _validation = !Number.isNaN(date.getDate()) && date instanceof Date && (typeof date === 'undefined' ? 'undefined' : _typeof(date)) === "object" && !anyNumber && !isBoolean;
          break;
        case DECIMAL:
          var numberDecimal = new Number(value).toFixed(9);
          _validation = typeof value === "number" && !Number.isInteger(numberDecimal.valueOf()) && !Number.isNaN(numberDecimal);
          break;
        case BINARY:
          _validation = true;
          break;
        default:
          _validation = false;
      }

      return _validation;
    }
  }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').service('AddOptionItemService', AddOptionItemService);

    function AddOptionItemService() {
        var self = this;

        self.execute = execute;

        function execute(item, optionName, optionValue) {
            return item.options.createOption(optionName, optionValue);
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('otusjs.surveyItem').service('RemoveOptionItemService', RemoveOptionItemService);

    function RemoveOptionItemService() {
        var self = this;

        self.execute = execute;

        function execute(item, optionName) {
            item.options.removeOption(optionName);
        }
    }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.participant').factory('otusjs.laboratory.participant.AliquotCollectionDataFactory', factory);

  function factory() {
    var self = this;

    self.create = create;

    function create(collectionInfo) {
      var _collectionInfo = collectionInfo || {};
      return new AliquotCollectionData(_collectionInfo);
    }

    return self;
  }

  function AliquotCollectionData(collectionInfo) {
    var self = this;

    self.objectType = 'AliquotCollectionData';
    self.metadata = collectionInfo.metadata || '';
    self.operator = collectionInfo.operator || '';
    self.time = collectionInfo.time || '';
    self.processing = collectionInfo.processing || '';

    self.fill = fill;
    self.toJSON = toJSON;

    function fill(operator, processing) {
      self.metadata = ""; // sem aplicação de metadados até o momento
      self.operator = operator.email;
      self.time = new Date().toISOString();
      self.processing = new Date(processing).toISOString();
    }

    function toJSON() {
      return {
        objectType: self.objectType,
        metadata: self.metadata,
        operator: self.operator,
        time: self.time,
        processing: self.processing
      };
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.participant').factory('otusjs.laboratory.participant.aliquot.AliquotHistoryFactory', factory);

  function factory() {

    var self = this;

    self.create = create;
    self.fromArray = fromArray;

    function create(operator, description) {
      return new HistoryData(operator, description);
    }

    function fromArray(historyArray) {
      if (Array.isArray(historyArray)) {
        return historyArray.map(function (history) {
          return new HistoryData(history.userEmail, history.description, history.type, history.date).toJSON();
        });
      } else {
        return [];
      }
    }
    return self;
  }

  function HistoryData(operator, description, type, date) {
    var self = this;

    self.toJSON = toJSON;

    self.objectType = 'AliquotEvent';
    self.type = type || 'CONVERTED_STORAGE';
    self.userEmail = operator || '';
    self.description = description || '';
    self.date = date || new Date().toISOString();

    function toJSON() {
      return {
        objectType: self.objectType,
        type: self.type,
        userEmail: self.userEmail,
        description: self.description,
        date: self.date
      };
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.participant').factory('otusjs.laboratory.participant.ParticipantAliquotFactory', factory);

  factory.$inject = ['otusjs.laboratory.participant.AliquotCollectionDataFactory', 'otusjs.laboratory.participant.aliquot.AliquotHistoryFactory', 'otusjs.laboratory.configuration.LaboratoryConfigurationService'];

  function factory(AliquotCollectionDataFactory, AliquotHistoryFactory, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJSON = fromJSON;

    function fromJSON(aliquotsArray, tubeInfo) {
      //builds the aliquots array that comes along with the tube from base
      return aliquotsArray.map(function (aliquotInfo) {
        return new ParticipantAliquot(AliquotCollectionDataFactory, AliquotHistoryFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo);
      });
    }

    function create(aliquotInfo, tubeInfo) {
      //used to build an filled aliquot
      var newInfo = angular.copy(aliquotInfo);
      return new ParticipantAliquot(AliquotCollectionDataFactory, AliquotHistoryFactory, LaboratoryConfigurationService, newInfo, tubeInfo);
    }
    return self;
  }

  function ParticipantAliquot(AliquotCollectionDataFactory, AliquotHistoryFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo) {
    var self = this;
    var _aliquotDescriptor;

    /* Public Interface*/
    self.objectType = "Aliquot";
    self.name = aliquotInfo.name;
    self.role = aliquotInfo.role;
    self.code = aliquotInfo.code || aliquotInfo.aliquotCode; //.aliquotCode
    self.container = aliquotInfo.container;

    self.aliquotCollectionData = AliquotCollectionDataFactory.create(aliquotInfo.aliquotCollectionData);
    self.aliquotHistory = AliquotHistoryFactory.fromArray(aliquotInfo.aliquotHistory);

    self.collect = collect;
    self.convertStorage = convertStorage;
    self.getHistoryByType = getHistoryByType;
    self.toJSON = toJSON;

    //Custom
    self.tubeCode = tubeInfo.code;

    onInit();

    function onInit() {
      _aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptor(self.name);
      _runDescriptors(_aliquotDescriptor);
      _convertHistory();
    }

    function getHistoryByType(type) {
      return self.aliquotHistory.filter(function (history) {
        return history.type === type;
      });
    }

    function _runDescriptors(aliquotDescriptor) {
      self.label = aliquotDescriptor.label;
    }

    function collect(operator, processing) {
      self.aliquotCollectionData.fill(operator, processing);
    }

    function convertStorage(operator, description, type) {
      self.aliquotHistory.push(AliquotHistoryFactory.create(operator, description));
      self.role = "EXAM";
      self.name = type;
      self.isConverted = true;
    }

    function _convertHistory() {
      self.isConverted = self.aliquotHistory.filter(function (history) {
        return history.type === "CONVERTED_STORAGE";
      }).length > 0;
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        name: self.name,
        container: self.container,
        role: self.role,
        aliquotCollectionData: self.aliquotCollectionData,
        aliquotHistory: self.aliquotHistory
      };
      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.participant').factory('otusjs.laboratory.participant.ParticipanTubeFactory', factory);

  factory.$inject = ['otusjs.laboratory.participant.TubeCollectionDataFactory', 'otusjs.laboratory.participant.ParticipantAliquotFactory', 'otusjs.laboratory.configuration.LaboratoryConfigurationService'];

  function factory(TubeCollectionDataFactory, ParticipantAliquotFactory, LaboratoryConfigurationService) {
    var self = this;

    _onInit();

    function _onInit() {}

    /* Public Methods */
    self.create = create;
    self.buildFromArray = buildFromArray;

    function create(tubeInfo, operator) {
      var tube = new Tube(tubeInfo, operator, TubeCollectionDataFactory, ParticipantAliquotFactory, LaboratoryConfigurationService);
      return tube;
    }

    function buildFromArray(tubeArray, operator) {
      return tubeArray.map(function (tubeInfo) {
        tubeInfo.aliquots = tubeInfo.aliquotes || tubeInfo.aliquots; //FIXME: backend gera .aliquotes, por enquanto
        return new Tube(tubeInfo, operator, TubeCollectionDataFactory, ParticipantAliquotFactory, LaboratoryConfigurationService);
      });
    }

    return self;
  }

  function Tube(tubeInfo, operator, TubeCollectionDataFactory, ParticipantAliquotFactory, LaboratoryConfigurationService) {
    var self = this;
    var _operator;

    /* Public Interface */
    self.objectType = "Tube";

    self.code = tubeInfo.code;

    self.type = tubeInfo.type;
    self.moment = tubeInfo.moment;
    self.groupName = tubeInfo.groupName;

    //TODO change name to self.aliquots - keep aliquots on toJSON method
    self.aliquots = tubeInfo.aliquots ? ParticipantAliquotFactory.fromJSON(tubeInfo.aliquots, self) : [];
    self.order = tubeInfo.order;
    self.tubeCollectionData = TubeCollectionDataFactory.create(tubeInfo.tubeCollectionData, operator);

    /* Custom Methods */
    self.collect = collect;
    self.toJSON = toJSON;

    //aliquot handling
    self.toAliquot = toAliquot;
    self.pushAliquot = pushAliquot;
    self.toAliquotAndPush = toAliquotAndPush;

    _onInit();

    function _onInit() {
      _operator = operator;
      _fillDescriptors();
      _manageAliquots();
    }

    function _fillDescriptors() {
      var tubeDescriptor = LaboratoryConfigurationService.getTubeDescriptor(self.type);
      var momentDescriptor = LaboratoryConfigurationService.getMomentDescriptor(self.moment);

      self.label = tubeDescriptor ? tubeDescriptor.label : '';
      self.boxColor = tubeDescriptor ? tubeDescriptor.color : '';
      self.momentLabel = momentDescriptor.label !== '' ? momentDescriptor.label : 'Nenhum';
      self.typeLabel = tubeDescriptor.label;
    }

    function _manageAliquots() {
      var availableAliquots = LaboratoryConfigurationService.getAvaiableAliquots(self.moment, self.type);
      self.availableAliquots = availableAliquots;
    }

    function collect() {
      self.tubeCollectionData.fill(_operator);
    }

    //aliquot handling
    function toAliquot(aliquotInfo) {
      var newAliquot = ParticipantAliquotFactory.create(aliquotInfo, self);
      newAliquot.collect(_operator, aliquotInfo.processing);
      return newAliquot;
    }

    function pushAliquot(aliquot) {
      self.aliquots.push(aliquot);
    }

    function toAliquotAndPush(aliquotInfo) {
      var newAliquot = ParticipantAliquotFactory.create(aliquotInfo, self);
      newAliquot.collect(_operator);
      self.aliquots.push(newAliquot);
    }

    function unAliquot(code) {
      var indexToRemove = self.aliquots.findIndex(function (aliquot) {
        return aliquot.code == code;
      });
      return self.aliquots.slice(indexToRemove, 1);
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        type: self.type,
        moment: self.moment,
        code: self.code,
        groupName: self.groupName,
        aliquotes: self.aliquots,
        order: self.order,
        tubeCollectionData: self.tubeCollectionData
      };
      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.participant').factory('otusjs.laboratory.participant.TubeCollectionDataFactory', factory);

  function factory() {
    var self = this;

    self.create = create;

    function create(collectionInfo) {
      return new TubeCollectionData(collectionInfo);
    }

    return self;
  }

  function TubeCollectionData(collectionInfo) {
    var self = this;

    self.objectType = 'TubeCollectionData';
    self.isCollected = collectionInfo.isCollected;
    self.metadata = collectionInfo.metadata;
    self.operator = collectionInfo.operator;
    self.time = collectionInfo.time;

    self.fill = fill;
    self.toJSON = toJSON;

    function fill(operator) {
      self.isCollected = true;
      self.metadata = "";
      self.operator = operator.email;
      self.time = new Date().toISOString();
    }

    function toJSON() {
      return {
        objectType: self.objectType,
        isCollected: self.isCollected,
        metadata: self.metadata,
        operator: self.operator,
        time: self.time
      };
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.transportation').service('otusjs.laboratory.transportation.TransportationService', service);

  service.$inject = ['otusjs.laboratory.transportation.LotFactory'];

  function service(LotFactory) {
    var self = this;

    self.createAliquotLot = createAliquotLot;
    self.buildAliquotLotFromJson = buildAliquotLotFromJson;

    function createAliquotLot() {
      return LotFactory.create();
    }

    function buildAliquotLotFromJson(lotJson) {
      return LotFactory.fromJson(lotJson);
    }

    return self;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.exam').factory('otusjs.laboratory.exam.ExamLotFactory', Factory);

  Factory.$inject = ['$filter', 'otusjs.laboratory.configuration.LaboratoryConfigurationService'];

  function Factory($filter, LaboratoryConfigurationService) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamLot($filter, LaboratoryConfigurationService, {});
    }

    function fromJson(lotInfo) {
      return new ExamLot($filter, LaboratoryConfigurationService, lotInfo);
    }

    return self;
  }

  function ExamLot($filter, LaboratoryConfigurationService, lotInfo) {
    var self = this;
    var _aliquotDescriptor;

    self.objectType = 'ExamLot';
    self._id = lotInfo._id || '';
    self.code = lotInfo.code || '';
    self.aliquotName = lotInfo.aliquotName || '';
    self.aliquotList = lotInfo.aliquotList || null;
    self.aliquotLabel = lotInfo.aliquotLabel || '';
    self.fieldCenter = lotInfo.fieldCenter || '';
    self.realizationDate = lotInfo.realizationDate || new Date();
    self.operator = lotInfo.operator || '';

    self.setAliquotName = setAliquotName;
    self.insertAliquot = insertAliquot;
    self.removeAliquotByIndex = removeAliquotByIndex;
    self.getAliquotsToCsv = getAliquotsToCsv;

    self.toJSON = toJSON;

    onInit();

    function onInit() {
      _updateAliquotLabel();
      _fixAliquots();
    }

    function _fixAliquots() {
      if (self.aliquotList) {
        if (self.aliquotList.length > 0) {
          self.aliquotList.map(function (aliquot) {
            _fillAliquotLabels(aliquot);
          });
        }
      }
    }

    function _updateAliquotLabel() {
      if (self.aliquotName.length) {
        _aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptor(self.aliquotName);
        self.aliquotLabel = _aliquotDescriptor.label;
      }
    }

    function setAliquotName(aliquotName) {
      self.aliquotName = aliquotName;
      _updateAliquotLabel();
    }

    function insertAliquot(aliquot) {
      _fillAliquotLabels(aliquot);
      self.aliquotList.push(aliquot);
      return aliquot;
    }

    function _fillAliquotLabels(aliquot) {
      aliquot.label = _getAliquotLabel(aliquot.name);
      aliquot.containerLabel = aliquot.container.toUpperCase() === "CRYOTUBE" ? "Criotubo" : "Palheta";
      aliquot.roleLabel = aliquot.role.toUpperCase() === "EXAM" ? "Exame" : "Armazenamento";
    }

    function _getAliquotLabel(aliquotName) {
      var aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptor(aliquotName);
      if (aliquotDescriptor) return aliquotDescriptor.label;
    }

    function removeAliquotByIndex(index) {
      return self.aliquotList.splice(index, 1);
    }

    function getAliquotsToCsv() {
      return self.aliquotList.map(function (aliquot) {
        var formattedDate = $filter('date')(new Date(aliquot.birthdate.value), 'dd/MM/yyyy');

        return {
          aliquota: aliquot.code,
          sexo: aliquot.sex,
          nascimento: formattedDate
        };
      });
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        _id: self._id,
        code: self.code,
        aliquotName: self.aliquotName,
        fieldCenter: self.fieldCenter,
        realizationDate: self.realizationDate,
        operator: self.operator,
        aliquotList: self.aliquotList
      };

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.exam.sending').factory('otusjs.laboratory.exam.sending.Exam', Factory);

  Factory.$inject = ['otusjs.laboratory.exam.sending.ExamResults', 'otusjs.laboratory.exam.sending.ExamObservation'];

  function Factory(ExamResults, ExamObservation) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new Exam(ExamResults, ExamObservation, {});
    }

    function fromJson(examInfoArray) {
      if (Array.isArray(examInfoArray)) {
        return examInfoArray.map(function (exam) {
          return new Exam(ExamResults, ExamObservation, exam);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function Exam(ExamResults, ExamObservation, exam) {
    var self = this;

    self.examResults = ExamResults.fromJson(exam.examResults);
    self.observations = ExamObservation.fromJson(exam.observations);

    self.objectType = 'Exam';
    self.name = exam.name || '';

    /* Public methods */
    self.toJSON = toJSON;
    self.insertObservation = insertObservation;
    self.insertResult = insertResult;
    self.removeResultByIndex = removeResultByIndex;
    self.removeObservationByIndex = removeObservationByIndex;

    function insertObservation(observation) {
      var newObservation = ExamObservation.fromJson([observation]);
      self.observations.push(newObservation[0]);
      return newObservation;
    }

    function insertResult(result) {
      var newResult = ExamResults.fromJson([result]);
      self.examResults.push(newResult[0]);
      return newResult;
    }

    function removeResultByIndex(index) {
      return self.examResults.splice(index, 1);
    }

    function removeObservationByIndex(index) {
      return self.observations.splice(index, 1);
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        name: self.name,
        examResults: self.examResults,
        observations: self.observations
      };

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.exam.sending').factory('otusjs.laboratory.exam.sending.ExamObservation', Factory);

  function Factory() {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamObservation({});
    }

    function fromJson(observationInfoArray) {
      if (Array.isArray(observationInfoArray)) {
        return observationInfoArray.map(function (observation) {
          return new ExamObservation(observation);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ExamObservation(observation) {
    var self = this;

    self.objectType = "ExamObservation";
    self.name = observation.name || '';
    self.value = observation.value || '';

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {
        objectType: self.objectType,
        name: self.name,
        value: self.value
      };

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.exam.sending').factory('otusjs.laboratory.exam.sending.ExamResults', Factory);

  Factory.$inject = ['otusjs.laboratory.exam.sending.ExamObservation'];

  function Factory(ExamObservation) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamResults(ExamObservation, {});
    }

    function fromJson(resultInfoArray) {
      if (Array.isArray(resultInfoArray)) {
        return resultInfoArray.map(function (result) {
          return new ExamResults(ExamObservation, result);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ExamResults(ExamObservation, result) {
    var self = this;

    self.observations = ExamObservation.fromJson(result.observations);

    self.objectType = 'ExamResults';
    self.examName = result.examName || '';
    self.aliquotCode = result.aliquotCode || '';
    self.releaseDate = result.releaseDate || '';
    self.resultName = result.resultName || '';
    self.value = result.value || '';
    self.aliquotValid = result.aliquotValid === false ? false : true;

    /* Public methods */
    self.toJSON = toJSON;
    self.insertObservation = insertObservation;
    self.removeObservationByIndex = removeObservationByIndex;

    function toJSON() {
      var json = {
        objectType: self.objectType,
        examName: self.examName,
        aliquotCode: self.aliquotCode,
        resultName: self.resultName,
        releaseDate: self.releaseDate,
        observations: self.observations,
        value: self.value,
        aliquotValid: self.aliquotValid
      };

      return json;
    }

    function insertObservation(observation) {
      var newObservation = ExamObservation.create(observation);
      self.observations.push(newObservation);
      return newObservation;
    }

    function removeObservationByIndex(index) {
      return self.observations.splice(index, 1);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.exam.sending').factory('otusjs.laboratory.exam.sending.ExamSendingFactory', Factory);

  Factory.$inject = ['otusjs.laboratory.exam.sending.ExamSendingLot', 'otusjs.laboratory.exam.sending.Exam'];

  function Factory(ExamSendingLot, Exam) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamSending(ExamSendingLot, Exam, {}, {});
    }

    function fromJson(examSendingLot, exams) {
      return new ExamSending(ExamSendingLot, Exam, examSendingLot, exams);
    }

    return self;
  }

  function ExamSending(ExamSendingLot, Exam, examSendingLot, exams) {
    var self = this;

    self.examSendingLot = ExamSendingLot.fromJson(examSendingLot);
    self.exams = Exam.fromJson(exams);

    /* Public methods */
    self.insertExam = insertExam;
    self.removeExamByIndex = removeExamByIndex;
    self.toJSON = toJSON;
    self.getExamList = getExamList;

    function insertExam(exam) {
      var newExam = Exam.fromJson([exam]);
      self.exams.push(newExam[0]);
      return newExam;
    }

    function removeExamByIndex(index) {
      return self.exams.splice(index, 1);
    }

    function toJSON() {
      var json = {
        examSendingLot: self.examSendingLot,
        exams: self.exams
      };

      return json;
    }

    function getExamList() {
      var _examList = [];
      self.exams.forEach(function (exam) {
        exam.examResults.forEach(function (result) {
          var _json = {
            aliquotCode: result.aliquotCode,
            examName: result.examName,
            resultName: result.resultName,
            value: result.value,
            releaseDate: result.releaseDate,
            aliquotValid: result.aliquotValid
          };
          _examList.push(_json);
        });
      });

      return _examList;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.exam.sending').factory('otusjs.laboratory.exam.sending.ExamSendingLot', Factory);

  function Factory() {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamSendingLot({});
    }

    function fromJson(examLot) {
      if (examLot instanceof Object) {
        return new ExamSendingLot(examLot);
      } else {
        return new ExamSendingLot({});
      }
    }

    return self;
  }

  function ExamSendingLot(examLot) {
    var self = this;

    self._id = examLot._id || '';

    self.objectType = 'ExamSendingLot';
    self.operator = examLot.operator || '';
    self.fileName = examLot.fileName || '';
    self.realizationDate = examLot.realizationDate || '';
    self.resultsQuantity = examLot.resultsQuantity || '';
    self.fieldCenter = examLot.fieldCenter || '';
    self.forcedSave = examLot.forcedSave === true ? true : false;

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {
        objectType: self.objectType,
        operator: self.operator,
        fileName: self.fileName,
        realizationDate: self.realizationDate,
        resultsQuantity: self.resultsQuantity,
        fieldCenter: self.fieldCenter,
        forcedSave: self.forcedSave
      };

      if (self._id) {
        json._id = self._id;
      }

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.outcome').factory('otusjs.model.outcome.FollowUpFactory', Factory);

  Factory.$inject = ['otusjs.model.outcome.ActivityAutoFillEventFactory'];

  function Factory(ActivityAutoFillEventFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    self.Model = {
      ActivityAutoFillEvent: ActivityAutoFillEventFactory
    };

    function create() {
      return new FollowUp({}, self.Model);
    }

    function fromJson(json) {
      return new FollowUp(json, self.Model);
    }

    function fromArray(jsonObjects) {
      if (Array.isArray(jsonObjects)) {
        return jsonObjects.map(function (json) {
          return new FollowUp(json, self.Model);
        });
      } else {
        return [];
      }
    }
    return self;
  }

  function FollowUp(JsonObject, Model) {
    var self = this;
    self._id = JsonObject._id;
    self.objectType = "FollowUp";
    self.description = JsonObject.description || '';
    self.order = JsonObject.order;
    self.windowBetween = JsonObject.windowBetween || null;
    self.time = JsonObject.time || null;
    self.deadline = JsonObject.deadline || {};
    self.participantEvents = JsonObject.participantEvents || [];
    self.events = Array.isArray(JsonObject.events) ? JsonObject.events.map(function (item) {
      return Model[item.objectType].fromJson(item);
    }) : [];

    self.createEvent = createEvent;
    self.removeEvent = removeEvent;
    self.toJSON = toJSON;

    function createEvent(objectTypeEvent, data) {
      if (data && objectTypeEvent) {
        return Model[objectTypeEvent].fromJson(data);
      } else {
        throw new Error('Insuficients parameters');
      }
    }

    function removeEvent(index) {
      self.events.splice(index, 1);
    }

    function toJSON() {
      var json = {};

      json._id = self._id;
      json.objectType = self.objectType;
      json.description = self.description;
      json.order = self.order;
      json.windowBetween = self.windowBetween;
      json.time = self.time;

      return json;
    }

    return self;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').service('otusjs.survey.ManagerCenterService', Service);

  /*
  * When using this service, do not request a manager on onInit type methods.
  * Doing this could cause a bug if the survey is changed and the new survey managers are yet not set on
  * the request moment
  * */

  function Service() {
    var self = this;
    var _surveyItemManager, _navigationManager, _surveyItemGroupManager;

    self.initialize = initialize;
    self.getSurveyItemManager = getSurveyItemManager;
    self.getNavigationManager = getNavigationManager;
    self.getSurveyItemGroupManager = getSurveyItemGroupManager;

    function initialize(surveyItemManager, navigationManager, surveyItemGroupManager) {
      _surveyItemManager = surveyItemManager;
      _navigationManager = navigationManager;
      _surveyItemGroupManager = surveyItemGroupManager;
    }

    function getSurveyItemManager() {
      return _surveyItemManager;
    }

    function getNavigationManager() {
      return _navigationManager;
    }

    function getSurveyItemGroupManager() {
      return _surveyItemGroupManager;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').service('SurveyDictionaryService', Service);

  function Service() {
    var self = this;
    self.dictionaryConstructionByExtractionId = dictionaryConstructionByExtractionId;

    function dictionaryConstructionByExtractionId(jsonObject) {
      var dictionary = [];

      jsonObject.itemContainer.forEach(function (item) {
        var json = void 0;
        switch (item.objectType) {
          case 'CheckboxQuestion':
          case 'GridTextQuestion':
          case 'GridIntegerQuestion':
            _itemContainerCaptureValues(item).forEach(function (internalItem) {
              json = {};
              _dictionaryAttributeFulfillment(jsonObject, json, item, internalItem);
              dictionary.push(json);
            });
            break;

          default:
            json = {};
            _dictionaryAttributeFulfillment(jsonObject, json, item);
            json.extractionValues = _itemContainerCaptureValues(item);
            dictionary.push(json);
            break;
        }
      });
      return dictionary;
    }
  }

  function _dictionaryAttributeFulfillment(jsonObject, json, item, internalItem) {
    json.acronym = jsonObject.identity.acronym;
    json.objectType = item.objectType;
    switch (item.objectType) {
      case 'CheckboxQuestion':
      case "GridTextQuestion":
      case "GridIntegerQuestion":
        json.extractionID = internalItem.customID;
        json.label = internalItem.label;
        json.extractionValues = internalItem.value;
        json.metadata = _itemContainerCaptureMetadata(item);
        json.validationTypes = _itemContainerCaptureValidatorTypes(item);
        break;

      default:
        json.extractionID = item.customID;
        _customQuestionTreatment(item, json);
        break;
    }
  }

  function _itemContainerCaptureValues(item) {
    var values = [];

    if (Array.isArray(item.options)) {
      item.options.map(function (option) {
        switch (option.objectType) {
          case "CheckboxAnswerOption":
            values.push({ customID: option.optionID, label: option.label.ptBR.plainText, value: [{ value: 0, label: false }, { value: 1, label: true }] });
            break;
          case "AnswerOption":
            values.push({ value: option.extractionValue, label: option.label.ptBR.plainText });
            break;
        }
      });
    }
    if (Array.isArray(item.lines)) {
      item.lines.map(function (line) {
        if (line.objectType == "GridTextLine") {
          line.gridTextList.map(function (gridText) {
            values.push({ customID: gridText.customID, label: gridText.label.ptBR.plainText, value: [] });
          });
        }
        if (line.objectType == "GridIntegerLine") {
          line.gridIntegerList.map(function (gridInteger) {
            values.push({ customID: gridInteger.customID, label: gridInteger.label.ptBR.plainText, value: [] });
          });
        }
      });
    }
    return values;
  }

  function _customQuestionTreatment(item, json) {
    if (item.objectType != "TextItem") {
      json.label = item.label.ptBR.plainText;
      json.metadata = _itemContainerCaptureMetadata(item) || [];
      json.validationTypes = _itemContainerCaptureValidatorTypes(item) || [];
    } else {
      json.label = item.value.ptBR.plainText;
      json.metadata = [];
      json.validationTypes = [];
    }
  }

  function _itemContainerCaptureMetadata(item) {
    var metadataList = [];
    item.metadata.options.map(function (md) {
      metadataList.push(md.label.ptBR.plainText + '(' + md.extractionValue + ')');
    });
    return metadataList;
  }

  function _itemContainerCaptureValidatorTypes(item) {
    var validators = [];

    if (item.fillingRules.options.mandatory) {
      validators.push({
        name: item.fillingRules.options.mandatory.validatorType,
        value: item.fillingRules.options.mandatory.data.reference
      });
    }
    if (item.fillingRules.options.accept) {
      validators.push({
        name: item.fillingRules.options.accept.validatorType,
        value: item.fillingRules.options.accept.data.reference
      });
    }
    if (item.fillingRules.options.distinct) {
      validators.push({
        name: item.fillingRules.options.distinct.validatorType,
        value: item.fillingRules.options.distinct.data.reference
      });
    }
    if (item.fillingRules.options.lowerLimit) {
      validators.push({
        name: item.fillingRules.options.lowerLimit.validatorType,
        value: item.fillingRules.options.lowerLimit.data.reference
      });
    }
    if (item.fillingRules.options.upperLimit) {
      validators.push({
        name: item.fillingRules.options.upperLimit.validatorType,
        value: item.fillingRules.options.upperLimit.data.reference
      });
    }
    if (item.fillingRules.options.precision) {
      validators.push({
        name: item.fillingRules.options.precision.validatorType,
        value: item.fillingRules.options.precision.data.reference
      });
    }
    if (item.fillingRules.options.scale) {
      validators.push({
        name: item.fillingRules.options.scale.validatorType,
        value: item.fillingRules.options.scale.data.reference
      });
    }
    if (item.fillingRules.options.in) {
      validators.push({
        name: item.fillingRules.options.in.validatorType, begin: item.fillingRules.options.in.data.reference.initial,
        end: item.fillingRules.options.in.data.reference.end
      });
    }
    if (item.fillingRules.options.minDate) {
      validators.push({
        name: item.fillingRules.options.minDate.validatorType,
        value: item.fillingRules.options.minDate.data.reference.value
      });
    }
    if (item.fillingRules.options.maxDate) {
      validators.push({
        name: item.fillingRules.options.maxDate.validatorType,
        value: item.fillingRules.options.maxDate.data.reference.value
      });
    }
    if (item.fillingRules.options.futureDate) {
      validators.push({
        name: item.fillingRules.options.futureDate.validatorType,
        value: item.fillingRules.options.futureDate.data.reference
      });
    }
    if (item.fillingRules.options.pastDate) {
      validators.push({
        name: item.fillingRules.options.pastDate.validatorType,
        value: item.fillingRules.options.pastDate.data.reference
      });
    }
    if (item.fillingRules.options.rangeDate) {
      validators.push({
        name: item.fillingRules.options.rangeDate.validatorType,
        begin: item.fillingRules.options.rangeDate.data.reference.initial.value,
        end: item.fillingRules.options.rangeDate.data.reference.end.value
      });
    }
    if (item.fillingRules.options.minSelected) {
      validators.push({
        name: item.fillingRules.options.minSelected.validatorType,
        value: item.fillingRules.options.minSelected.data.reference
      });
    }
    if (item.fillingRules.options.maxSelected) {
      validators.push({
        name: item.fillingRules.options.maxSelected.validatorType,
        value: item.fillingRules.options.maxSelected.data.reference
      });
    }
    if (item.fillingRules.options.quantity) {
      validators.push({
        name: item.fillingRules.options.quantity.validatorType,
        value: item.fillingRules.options.quantity.data.reference
      });
    }
    if (item.fillingRules.options.maxTime) {
      validators.push({
        name: item.fillingRules.options.maxTime.validatorType,
        value: item.fillingRules.options.maxTime.data.reference.value
      });
      if (item.fillingRules.options.minTime) {
        validators.push({
          name: item.fillingRules.options.minTime.validatorType,
          value: item.fillingRules.options.minTime.data.reference.value
        });
      }
    }
    return validators;
  };
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').factory('otusjs.model.survey.DataSourceDefinitionFactory', Factory);

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(name) {
      return new DataSourceDefinition(name);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.DataSourceDefinitionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var dataSource = new DataSourceDefinition(jsonObject.name);
      jsonObject.bindTo.forEach(function (itemID) {
        dataSource.performBind(itemID);
      });
      return dataSource;
    }

    return self;
  }

  function DataSourceDefinition(name) {
    var self = this;

    var _objectType = 'DataSourceDefinition';
    var _id;
    var _name = name;
    var _bindTo = [];

    /* Public methods */
    self.isBinded = isBinded;
    self.getID = getID;
    self.getName = getName;
    self.performBind = performBind;
    self.removeBind = removeBind;
    self.getBindedItems = getBindedItems;
    self.toJSON = toJSON;

    _init();

    function _init() {
      /**
        TODO
         When the Studio is connected with Otus Domain, the ID property must be the OID of the Document on MongoDB.
        For a while the ID will be the attribute name without blank spaces and lower case.
        Example:
          Lista de Medicamentos
          _id = listademedicamentos
      */
      _id = name.toLowerCase().replace(/\s/g, '');
    }

    function isBinded() {
      return _bindTo.length > 0 ? true : false;
    }

    function getID() {
      return _id;
    }

    function getName() {
      return _name;
    }

    function performBind(templateID) {
      _bindTo.push(templateID);
    }

    function removeBind(templateID) {
      var idx = _bindTo.indexOf(templateID);
      _bindTo.splice(idx, 1);
    }

    function getBindedItems() {
      return _bindTo;
    }

    function toJSON() {
      var json = {};

      json.objectType = _objectType;
      json.id = _id;
      json.name = _name;
      json.bindTo = _bindTo;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').factory('otusjs.model.survey.DataSourceDefinitionManagerFactory', Factory);

  Factory.$inject = ['otusjs.model.survey.DataSourceDefinitionFactory'];

  var Inject = {};

  function Factory(DataSourceDefinitionFactory) {
    Inject.DataSourceDefinitionFactory = DataSourceDefinitionFactory;

    var self = this;
    // Public methods
    self.create = create;

    function create() {
      return new DataSourceDefinitionManager();
    }

    return self;
  }

  function DataSourceDefinitionManager() {
    var self = this;
    var _dataSourcesDefinition = [];

    self.DataSourceDefinitionFactory = Inject.DataSourceDefinitionFactory;
    /* Public methods */
    self.getDataSourceDefinition = getDataSourceDefinition;
    self.getDataSourcesByItemID = getDataSourcesByItemID;
    self.list = list;
    self.toJSON = toJSON;
    self.loadJsonData = loadJsonData;

    // Returns a DataSource by name. If the required DataSource was not found then
    // it will create a new DataSource.
    function getDataSourceDefinition(name) {
      var dataSource = _findDataSource(name);
      if (!dataSource) {
        dataSource = self.DataSourceDefinitionFactory.create(name);
        _dataSourcesDefinition.push(dataSource);
      }
      return dataSource;
    }

    function getDataSourcesByItemID(id) {
      return _dataSourcesDefinition.filter(function (dataSource) {
        return dataSource.getBindedItems().includes(id);
      });
    }

    // Returns all DataSourcesDefinition
    function list() {
      return _dataSourcesDefinition;
    }

    function toJSON() {
      var result = [];
      _dataSourcesDefinition.filter(_bindedDataSources).forEach(function (dataSource) {
        result.push(dataSource.toJSON());
      });
      return result;
    }

    function loadJsonData(data) {
      if (data instanceof Array) {
        data.forEach(function (dataSource) {
          _dataSourcesDefinition.push(self.DataSourceDefinitionFactory.fromJsonObject(dataSource));
        });
      }
    }

    // Private methods
    function _findDataSource(name) {
      return _dataSourcesDefinition.find(function (datasource) {
        return name.toLowerCase() === datasource.getName().toLowerCase();
      });
    }

    function _bindedDataSources(dataSource) {
      return dataSource.isBinded();
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').factory('otusjs.survey.GroupFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;

    function create(name, surveyAcronyms) {
      if (typeof name !== "string") {
        throw Error("Name should be a string");
      }

      if (surveyAcronyms && !Array.isArray(surveyAcronyms)) {
        throw Error("surveyAcronyms should be an array");
      }

      return new SurveyGroup(name, surveyAcronyms);
    }

    function fromJson(groupJson) {
      return create(groupJson.name, groupJson.surveyAcronyms);
    }

    return self;
  }

  function SurveyGroup(name, surveyAcronyms) {
    var self = this;

    self.objectType = 'SurveyGroup';
    self.name = name;
    self.surveyAcronyms = surveyAcronyms || [];

    if (!self.name) {
      throw new Error("Name should be provided");
    }

    /* Public methods */
    self.getName = getName;
    self.getSurveys = getSurveys;
    self.addSurvey = addSurvey;
    self.removeSurvey = removeSurvey;
    self.toJSON = toJSON;

    function getName() {
      return self.name;
    }

    function getSurveys() {
      return self.surveyAcronyms;
    }

    function addSurvey(acronym) {
      if (self.surveyAcronyms.indexOf(acronym) !== -1) {
        throw new Error("Survey already in the group");
      }
      self.surveyAcronyms.push(acronym);
      return self;
    }

    function removeSurvey(acronym) {
      var index = self.surveyAcronyms.indexOf(acronym);

      if (index === -1) {
        throw new Error("Survey not found in the group");
      }
      self.surveyAcronyms.splice(index, 1);

      return self;
    }

    function toJSON() {
      return {
        name: self.name,
        surveyAcronyms: self.surveyAcronyms
      };
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.survey').factory('otusjs.survey.GroupManagerFactory', Factory);

  Factory.$inject = ['otusjs.survey.GroupFactory'];

  function Factory(GroupFactory) {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(groupList) {
      return new SurveyGroupManager(GroupFactory, groupList);
    }

    return self;
  }

  function SurveyGroupManager(GroupFactory, groups) {
    var self = this;
    var groupStructure = _buildGroupStructure(groups);

    self.objectType = 'SurveyGroupManager';

    /* Public methods */
    self.createGroup = createGroup;
    self.getGroup = getGroup;
    self.getGroupList = getGroupList;
    self.getGroupNames = getGroupNames;
    self.getGroupSurveys = getGroupSurveys;
    self.getSurveyGroups = getSurveyGroups;
    self.toJSON = toJSON;

    function createGroup(name, surveys) {
      if (getGroup(name)) {
        throw new Error("Group already exists");
      }
      var group = GroupFactory.create(name, surveys);
      groupStructure[name] = group;
      return group;
    }

    function getGroupList() {
      return Object.values(groupStructure);
    }

    function getGroup(name) {
      return groupStructure[name];
    }

    function getGroupNames() {
      return Object.keys(groupStructure);
    }

    function getGroupSurveys(name) {
      var found = getGroup(name);
      if (!found) {
        throw new Error("Group not found");
      }
      return found.getSurveys();
    }

    function getSurveyGroups(surveyAcronym) {
      return getGroupList().filter(function (group) {
        return group.getSurveys().includes(surveyAcronym);
      }).map(function (group) {
        return group.getName();
      });
    }

    function toJSON() {
      return self.getGroupList();
    }

    function _buildGroupStructure(groups) {
      var structure = {};

      if (groups) {
        groups.forEach(function (groupJson) {
          var group = GroupFactory.fromJson(groupJson);
          structure[group.getName()] = group;
        });
      }

      return structure;
    }
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
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      return new ImageItem(templateID, prototype, labelObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error('otusjs.model.misc.model.ImageItemFactory.fromJsonObject() method expects to receive a object instead a String');
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.footer);
      var prototype = {};
      prototype.objectType = 'SurveyItem';
      var question = new ImageItem(jsonObject.templateID, prototype, labelObject);
      question.customID = jsonObject.customID;
      question.url = jsonObject.url;

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
    self.toJSON = toJSON;

    function isQuestion() {
      return false;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.url = self.url;
      json.footer = self.footer;

      return json;
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
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      return new TextItem(templateID, prototype, labelObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.TextItem.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.value);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new TextItem(jsonObject.templateID, prototype, labelObject);
      question.customID = jsonObject.customID;

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
    self.toJSON = toJSON;

    function isQuestion() {
      return false;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.value = self.value;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('AnswerOptionFactory', AnswerOptionFactory);

  AnswerOptionFactory.$inject = ['LabelFactory'];

  function AnswerOptionFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;
    self.fromJsonObject = fromJsonObject;

    function create(value, extractionValue, parentQuestionID) {
      var labelObject = LabelFactory.create();
      return new AnswerOption(value, extractionValue, parentQuestionID, labelObject);
    }

    function fromJson(json) {
      return fromJsonObject(JSON.parse(json));
    }

    function fromJsonObject(jsonObject) {
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      return new AnswerOption(jsonObject.value, jsonObject.extractionValue, jsonObject.parentQuestionID, labelObject);
    }

    return self;
  }

  function AnswerOption(value, extractionValue, parentQuestionID, labelObject) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'AnswerOption';
    self.value = value;
    self.extractionValue = extractionValue;
    self.dataType = 'Integer';
    self.label = labelObject;
    self.parentQuestionID = parentQuestionID;

    /* Public methods */
    self.toJSON = toJSON;
    self.setExtractionValue = setExtractionValue;

    function setExtractionValue(newExtractionValue) {
      self.extractionValue = newExtractionValue;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.value = self.value;
      json.extractionValue = self.extractionValue;
      json.dataType = self.dataType;
      json.label = self.label;
      json.metadata = self.metadata;
      json.parentQuestionID = self.parentQuestionID;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('AutocompleteQuestionFactory', AutocompleteQuestionFactory);

  AutocompleteQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'FillingRulesOptionFactory'];

  function AutocompleteQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new AutocompleteQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.AutocompleteQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new AutocompleteQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = jsonObject.customID;
      question.dataSources = jsonObject.dataSources;

      return question;
    }

    return self;
  }

  function AutocompleteQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'AutocompleteQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
    self.dataSources = [];
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJSON = toJSON;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory'];
      return validatorsList;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.dataSources = self.dataSources;
      json.label = self.label;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;

      return json;
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
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new CalendarQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.CalendarQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new CalendarQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = jsonObject.customID;

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
    self.toJSON = toJSON;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'minDate', 'maxDate', 'rangeDate', 'futureDate', 'pastDate'];
      return validatorsList;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.label = self.label;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('CheckboxAnswerOptionFactory', CheckboxAnswerOptionFactory);

  CheckboxAnswerOptionFactory.$inject = ['LabelFactory'];

  function CheckboxAnswerOptionFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.createWithData = createWithData;

    function create(optionID) {
      var labelObject = LabelFactory.create();
      return new CheckboxAnswerOption(optionID, labelObject);
    }

    function createWithData(checkboxAnswerOptionJSON) {
      var parsedJson = JSON.parse(checkboxAnswerOptionJSON);
      return fromJsonObject(parsedJson);
    }

    function fromJsonObject(jsonObject) {
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var CheckboxAnswerOptionObject = new CheckboxAnswerOption(jsonObject.optionID, labelObject);
      CheckboxAnswerOptionObject.customOptionID = jsonObject.customOptionID;

      return CheckboxAnswerOptionObject;
    }

    return self;
  }

  function CheckboxAnswerOption(optionID, labelObject) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'CheckboxAnswerOption';
    self.optionID = optionID;
    self.customOptionID = optionID;
    self.dataType = 'Boolean';
    self.value = false;
    self.label = labelObject;

    /* Public methods */
    self.toJSON = toJSON;
    self.setCustomOptionID = setCustomOptionID;

    function setCustomOptionID(id) {
      self.customOptionID = id;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.optionID = self.optionID;
      json.customOptionID = self.customOptionID;
      json.dataType = self.dataType;
      json.value = self.value;
      json.label = self.label;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('CheckboxQuestionFactory', CheckboxQuestionFactory);

  CheckboxQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'CheckboxAnswerOptionFactory', 'FillingRulesOptionFactory'];

  function CheckboxQuestionFactory(LabelFactory, MetadataGroupFactory, CheckboxAnswerOptionFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new CheckboxQuestion(templateID, prototype, CheckboxAnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.CheckboxQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new CheckboxQuestion(jsonObject.templateID, prototype, CheckboxAnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);

      jsonObject.options.forEach(function (checkboxAnswerOption) {
        question.options.push(CheckboxAnswerOptionFactory.fromJsonObject(checkboxAnswerOption));
      });

      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function CheckboxQuestion(templateID, prototype, CheckboxAnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'CheckboxQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Array';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
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
    self.toJSON = toJSON;

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
      var validatorsList = ['mandatory', 'minSelected', 'maxSelected', 'quantity'];

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

    function toJSON() {
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

      return json;
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
    self.fromJsonObject = fromJsonObject;

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

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.DecimalQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);

      var unitObject = {};
      unitObject.ptBR = UnitFactory.fromJsonObject(jsonObject.unit.ptBR);
      unitObject.enUS = UnitFactory.fromJsonObject(jsonObject.unit.enUS);
      unitObject.esES = UnitFactory.fromJsonObject(jsonObject.unit.esES);

      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new DecimalQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, unitObject, fillingRulesObject);
      question.customID = jsonObject.customID;

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
    self.toJSON = toJSON;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'distinct', 'lowerLimit', 'upperLimit', 'in', 'scale'];

      return validatorsList;
    }

    function toJSON() {
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

      return json;
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
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new EmailQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.EmailQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new EmailQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = jsonObject.customID;

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
    self.toJSON = toJSON;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory'];
      return validatorsList;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.label = self.label;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('FileUploadQuestionFactory', FileUploadQuestionFactory);

  FileUploadQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'FillingRulesOptionFactory'];

  function FileUploadQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new FileUploadQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.FileUploadQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new FileUploadQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function FileUploadQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'FileUploadQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Binary';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJSON = toJSON;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory'];
      return validatorsList;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.label = self.label;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;

      return json;
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
    self.fromJsonObject = fromJsonObject;

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

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.IntegerQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);

      var unitObject = {};
      unitObject.ptBR = UnitFactory.fromJsonObject(jsonObject.unit.ptBR);
      unitObject.enUS = UnitFactory.fromJsonObject(jsonObject.unit.enUS);
      unitObject.esES = UnitFactory.fromJsonObject(jsonObject.unit.esES);

      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new IntegerQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, unitObject, fillingRulesObject);
      question.customID = jsonObject.customID;

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
    self.toJSON = toJSON;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'distinct', 'lowerLimit', 'upperLimit', 'precision', 'in'];
      return validatorsList;
    }

    function toJSON() {
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

      return json;
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
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new PhoneQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.PhoneQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new PhoneQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = jsonObject.customID;

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
    self.toJSON = toJSON;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory'];

      return validatorsList;
    }

    function toJSON() {
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

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('SingleSelectionQuestionFactory', SingleSelectionQuestionFactory);

  SingleSelectionQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'AnswerOptionFactory', 'FillingRulesOptionFactory'];

  function SingleSelectionQuestionFactory(LabelFactory, MetadataGroupFactory, AnswerOptionFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new SingleSelectionQuestion(templateID, prototype, AnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.SingleSelectionQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new SingleSelectionQuestion(jsonObject.templateID, prototype, AnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);

      jsonObject.options.forEach(function (answerOption) {
        question.options.push(AnswerOptionFactory.fromJsonObject(answerOption));
      });

      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function SingleSelectionQuestion(templateID, prototype, AnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'SingleSelectionQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Integer';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.options = [];

    /* Public methods */
    self.getOptionListSize = getOptionListSize;
    self.getOptionByValue = getOptionByValue;
    self.getOptionByExtractionValue = getOptionByExtractionValue;
    self.createOption = createOption;
    self.removeOption = removeOption;
    self.removeLastOption = removeLastOption;
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.isAvailableExtractionValue = isAvailableExtractionValue;
    self.isAvailableValue = isAvailableValue;
    self.toJSON = toJSON;

    function getOptionListSize() {
      return self.options.length;
    }

    function getOptionByValue(value) {
      var filter = self.options.filter(function (option) {
        if (option.value === value) {
          return option;
        }
      });

      return filter[0];
    }

    function getOptionByExtractionValue(extractionValue) {
      var filter = self.options.filter(function (option) {
        if (option.extractionValue.toString() === extractionValue.toString()) {
          return option;
        }
      });

      return filter[0];
    }

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory'];
      return validatorsList;
    }

    function createOption() {
      var value = self.options.length;

      do {
        value++;
      } while (!(isAvailableExtractionValue(value) && isAvailableValue(value)));

      var option = AnswerOptionFactory.create(value, value);
      self.options.push(option);

      return option;
    }

    function removeOption(value) {
      self.options.splice(value - 1, 1);
      _reorderOptionValues();
    }

    function removeLastOption() {
      self.options.splice(-1, 1);
    }

    function isAvailableExtractionValue(newValue) {
      return getOptionByExtractionValue(newValue) ? false : true;
    }

    function isAvailableValue(value) {
      return getOptionByValue(value) ? false : true;
    }

    function toJSON() {
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

      return json;
    }

    function _reorderOptionValues() {
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
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new TextQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.TextQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new TextQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = jsonObject.customID;

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
    self.toJSON = toJSON;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'alphanumeric', 'lowerCase', 'minLength', 'maxLength', 'specials', 'upperCase'];
      return validatorsList;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.label = self.label;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('TimeQuestionFactory', TimeQuestionFactory);

  TimeQuestionFactory.$inject = ['LabelFactory', 'MetadataGroupFactory', 'FillingRulesOptionFactory', 'QuestionOptionFactory'];

  function TimeQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory, QuestionOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();
      var questionOptionObject = QuestionOptionFactory.create();

      return new TimeQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject, questionOptionObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.TimeQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var questionOptionObject;
      if (jsonObject.options == undefined) {
        questionOptionObject = QuestionOptionFactory.create();
      } else {
        questionOptionObject = QuestionOptionFactory.fromJsonObject(jsonObject.options);
      }

      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new TimeQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject, questionOptionObject);
      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function TimeQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject, questionOptionObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'TimeQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'LocalTime';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.options = questionOptionObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJSON = toJSON;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory', 'minTime', 'maxTime'
      /* TODO: Verificar se não está sendo usado. Caso não esteja excluir. */
      // 'parameter'
      ];
      return validatorsList;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.label = self.label;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;
      json.options = self.options;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('otusjs.surveyItem.customAnswer.FileUploadAnswerFactory', factory);

  function factory() {
    var self = this;

    /* Public Interface */
    self.buildAnswer = buildAnswer;
    self.buildFromJson = buildFromJson;

    function buildAnswer(fileInfo) {
      return fileInfo.oid ? new FileUploadAnswer(fileInfo) : null;
    }

    function buildFromJson(fileArray) {
      var arrayResult = [];
      fileArray.forEach(function (jsonFile) {
        var file = new FileUploadAnswer(jsonFile);
        file.sentDate = new Date(jsonFile.sentDate);
        arrayResult.push(file);
      });
      return arrayResult;
    }
    return self;
  }

  function FileUploadAnswer(fileInfo) {
    var self = this;

    self.objectType = 'FileAnswer';
    self.name = fileInfo.name;
    self.size = fileInfo.size;
    self.type = fileInfo.type;
    self.sentDate = fileInfo.lastModifiedDate ? fileInfo.lastModifiedDate.toISOString() : '';
    self.oid = fileInfo.oid;
    self.printableSize = bytesToSize();

    function bytesToSize() {
      var bytes = self.size;
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('OptionItemFactory', OptionItemFactory);

  function OptionItemFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(optionValue) {
      return new Option(optionValue);
    }

    function fromJsonObject(option) {
      if (option.objectType === 'OptionItem') {
        return new Option(option.value);
      } else {
        return [];
      }
    }

    return self;
  }

  function Option(value) {
    var self = this;
    self.extends = 'StudioObject';
    self.objectType = 'OptionItem';
    self.value = value;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('QuestionOptionFactory', QuestionOptionFactory);

  QuestionOptionFactory.$inject = ['OptionItemFactory'];

  function QuestionOptionFactory(OptionItemFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new QuestionOption(OptionItemFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.QuestionOptionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var options = new QuestionOption(OptionItemFactory);
      for (var object in jsonObject.data) {
        options.data[object] = OptionItemFactory.fromJsonObject(jsonObject.data[object]);
      }
      return options;
    }

    return self;
  }

  function QuestionOption(OptionItemFactory) {
    var self = this;

    self.extends = 'StudioObject';
    self.objectType = 'QuestionOption';
    self.data = {};

    /* Public methods */
    self.createOption = createOption;
    self.removeOption = removeOption;

    function createOption(name, value) {
      var option = OptionItemFactory.create(value);
      self.data[name] = option;
      return option;
    }

    function removeOption(name) {
      delete self.data[name];
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('otusjs.model.accept.AcceptAnswerFactory', AcceptAnswerFactory);

  function AcceptAnswerFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new AcceptAnswer();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.AcceptAnswerFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new AcceptAnswer();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function AcceptAnswer() {
    var self = this;

    self.reference = false;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MandatoryValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MandatoryValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MandatoryValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MandatoryValidator() {
    var self = this;

    self.canBeIgnored = false;
    self.reference = true;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new ParameterValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.ParameterValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new ParameterValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function ParameterValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = '';
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.exam.sending').service('otusjs.laboratory.exam.sending.ExamSendingLotService', service);

  service.$inject = ['otusjs.laboratory.exam.sending.ExamSendingFactory'];

  function service(ExamSendingFactory) {
    var self = this;

    /* Public methods */
    self.createExamSending = createExamSending;
    self.buildExamSendingFromJson = buildExamSendingFromJson;

    function createExamSending() {
      return ExamSendingFactory.create();
    }

    function buildExamSendingFromJson(examSendingLot, exam) {
      return ExamSendingFactory.fromJson(examSendingLot, exam);
    }

    return self;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.laboratory.exam').service('otusjs.laboratory.exam.ExamService', Service);

  Service.$inject = ['otusjs.laboratory.exam.ExamLotFactory'];

  function Service(ExamLotFactory) {
    var self = this;

    self.createAliquotLot = createAliquotLot;
    self.buildAliquotLotFromJson = buildAliquotLotFromJson;

    function createAliquotLot() {
      return ExamLotFactory.create();
    }

    function buildAliquotLotFromJson(lotJson) {
      return ExamLotFactory.fromJson(lotJson);
    }

    return self;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.ContainerInitializationTaskService', Service);

  Service.$inject = ['otusjs.model.navigation.InitialNodesCreationTaskService'];

  function Service(InitialNodesCreationTask) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute() {
      _container.resetData();
      InitialNodesCreationTask.execute();
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.InitialNodesCreationTaskService', Service);

  Service.$inject = ['otusjs.model.navigation.DefaultRouteCreationTaskService'];

  function Service(DefaultRouteCreationTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(navigationContainer) {
      _container.setInitialNodes();

      var routeData = {
        'origin': _container.getBeginNode().origin,
        'destination': _container.getEndNode().origin
      };

      DefaultRouteCreationTaskService.execute(routeData, _container.getNavigationList()[0]);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationCreationTaskService', Service);

  Service.$inject = ['otusjs.model.navigation.RouteUpdateTaskService', 'otusjs.model.navigation.DefaultRouteCreationTaskService'];

  function Service(RouteUpdateTaskService, DefaultRouteCreationTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(originItem) {
      var _newNavigation = _container.createNavigationTo(originItem.templateID);
      var _previousNavigation;

      if (_newNavigation.index === 2) {
        _previousNavigation = _container.getPreviousOf(_newNavigation.index - 1);
      } else {
        _previousNavigation = _container.getPreviousOf(_newNavigation.index);
      }

      var routeData = {
        'origin': _newNavigation.origin,
        'destination': _previousNavigation.getDefaultRoute().destination
      };

      DefaultRouteCreationTaskService.execute(routeData, _newNavigation);

      var updateRouteData = {
        'origin': _previousNavigation.origin,
        'destination': _newNavigation.origin,
        'isDefault': true
      };

      RouteUpdateTaskService.execute(updateRouteData, _previousNavigation);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationInsertionTask', Service);

  Service.$inject = ['otusjs.model.navigation.DefaultRouteCreationTaskService', 'otusjs.model.navigation.RouteRemovalTaskService'];

  function Service(DefaultRouteCreationTaskService, RouteRemovalTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(navigationToMove, originalPosition, destination) {

      navigationToMove.clearNavigation();
      var newPosition = _container.insertNavigation(navigationToMove, originalPosition, destination);

      var navigationToUpdate = _container.getNextOf(newPosition);
      var routeData = _getRouteData(navigationToMove.origin, navigationToUpdate.origin);
      DefaultRouteCreationTaskService.execute(routeData, navigationToMove);

      if (destination === 0) {
        _adjustToFirstPosition(navigationToUpdate, navigationToMove);
      }

      _container.reorderNavigationIndex();
    }

    function _adjustToFirstPosition(navigationToUpdate, navigationToMove) {
      var beginNodeOriginName = "BEGIN NODE";

      var beginNode = _container.getNavigationByOrigin(beginNodeOriginName);
      var beginNodeRoute = _getRouteData(beginNodeOriginName, navigationToUpdate.origin);
      RouteRemovalTaskService.execute(beginNodeRoute, beginNode);

      var newBeginNodeRoute = _getRouteData(beginNodeOriginName, navigationToMove.origin);
      DefaultRouteCreationTaskService.execute(newBeginNodeRoute, beginNode);
    }

    function _getRouteData(origin, destination) {
      var routeData = {};

      routeData.isDefault = true;
      routeData.name = origin + "_" + destination;
      routeData.origin = origin;
      routeData.destination = destination;
      return routeData;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationMovementTaskService', Service);

  Service.$inject = ['otusjs.model.navigation.DefaultRouteCreationTaskService', 'otusjs.model.navigation.NavigationRemovalTaskService', 'otusjs.model.navigation.RouteRemovalTaskService', 'otusjs.model.navigation.NavigationInsertionTask'];

  function Service(DefaultRouteCreationTaskService, NavigationRemovalTaskService, RouteRemovalTaskService, NavigationInsertionTask) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(templateID, destination) {
      var navigationToMove = _container.getNavigationByOrigin(templateID);
      var originalPosition = _container.getNavigationPosition(navigationToMove);

      if (originalPosition === destination + 2) {
        return;
      }

      NavigationRemovalTaskService.execute(templateID);
      NavigationInsertionTask.execute(navigationToMove, originalPosition, destination);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.NavigationRemovalTaskService', Service);

  Service.$inject = ['otusjs.model.navigation.RouteUpdateTaskService'];

  function Service(RouteUpdateTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(templateID) {
      var navigationToRemove = _container.getNavigationByOrigin(templateID);
      var inNavigations = angular.copy(navigationToRemove.inNavigations);

      inNavigations.forEach(function (inNavigation) {
        return _updateInRoutes(inNavigation);
      });

      //TODO remove conditions that take navigationToRemove into account

      _container.removeNavigationOf(templateID);
      _container.reorderNavigationIndex();

      function _updateInRoutes(inNavigation) {
        var navigationToUpdate = _container.getNavigationByOrigin(inNavigation.origin);

        if (navigationToUpdate) {
          if (navigationToUpdate.isDefaultRoute(templateID)) {
            var routeData = _getRouteData(navigationToUpdate, navigationToRemove);
            RouteUpdateTaskService.execute(routeData, navigationToUpdate);
          } else {
            var navigation = _container.getNavigationByOrigin(inNavigation.origin);
            navigation.removeRouteByDestination(templateID);
          }
        }
      }
    }

    function _getRouteData(navigationToUpdate, navigationToRecycle) {
      var routeData = {};
      routeData.isDefault = true;
      routeData.origin = navigationToUpdate.routes[0].origin;
      routeData.destination = navigationToRecycle.routes[0].destination;

      if (navigationToUpdate.origin === "BEGIN NODE") {
        var newDestination = _container.getNextOf(_container.getNavigationPosition(navigationToRecycle));
        routeData.destination = newDestination.origin;
      }

      return routeData;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.AlternativeRouteCreationTaskService', Service);

  Service.$inject = ['otusjs.model.navigation.RouteFactory', 'otusjs.model.navigation.RouteConditionFactory', 'otusjs.model.navigation.RuleFactory'];

  function Service(RouteFactory, RouteConditionFactory, RuleFactory) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(routeData, navigation) {
      if (routeData.origin === 'BEGIN NODE') {
        return;
      }
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
      var when = ruleData.when.templateID || ruleData.when;
      var operator = ruleData.operator.type || ruleData.operator;
      var answer = ruleData.answer;
      return RuleFactory.create(when, operator, answer, ruleData.isMetadata, ruleData.isCustom);
    }

    function _notifyNewDefaultNavigation(newDefaultRoute, navigation) {
      var nextNavigation = _container.getNavigationByOrigin(newDefaultRoute.destination);
      nextNavigation.updateInNavigation(navigation);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.DefaultRouteCreationTaskService', Service);

  Service.$inject = ['otusjs.model.navigation.RouteFactory'];

  function Service(RouteFactory) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(routeData, navigation) {
      var route;
      if (navigation.hasDefaultRoute()) {
        var currentDefaultRoute = navigation.getDefaultRoute();
        route = RouteFactory.createDefault(routeData.origin, routeData.destination);
        navigation.setupDefaultRoute(route);

        _notifyPreviousDefaultNavigation(currentDefaultRoute, navigation);
        _notifyNewDefaultNavigation(route, navigation);
      } else {
        route = RouteFactory.createDefault(routeData.origin, routeData.destination);
        navigation.setupDefaultRoute(route);
        _notifyNewDefaultNavigation(route, navigation);
      }
    }

    function _notifyPreviousDefaultNavigation(currentDefaultRoute, navigation) {
      var nextNavigation = _container.getNavigationByOrigin(currentDefaultRoute.destination);
      nextNavigation.removeInNavigation(navigation);
    }

    function _notifyNewDefaultNavigation(newDefaultRoute, navigation) {
      var nextNavigation = _container.getNavigationByOrigin(newDefaultRoute.destination);
      nextNavigation.updateInNavigation(navigation);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.RouteRemovalTaskService', Service);

  function Service() {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(routeData, navigation) {
      navigation.removeRouteByName(routeData.name);
      var nextNavigation = _container.getNavigationByOrigin(routeData.destination);
      nextNavigation.removeInNavigation(navigation);
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.navigation').service('otusjs.model.navigation.RouteUpdateTaskService', Service);

  Service.$inject = ['otusjs.model.navigation.RuleFactory', 'otusjs.model.navigation.RouteConditionFactory', 'otusjs.model.navigation.RouteFactory', 'otusjs.model.navigation.DefaultRouteCreationTaskService'];

  function Service(RuleFactory, RouteConditionFactory, RouteFactory, DefaultRouteCreationTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(routeData, navigation) {
      if (_isCurrentDefaultRoute(routeData, navigation.getDefaultRoute())) {
        throw new Error('Is not possible update a default route.', 'update-route-task-service.js', 23);
      } else if (routeData.isDefault) {
        DefaultRouteCreationTaskService.execute(routeData, navigation);
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
      var when = ruleData.when.templateID || ruleData.when;
      var operator = ruleData.operator.type || ruleData.operator;
      var answer = ruleData.answer;
      return RuleFactory.create(when, operator, answer, ruleData.isMetadata, ruleData.isCustom);
    }

    function _notifyNextNavigation(routeData, navigation) {
      var nextNavigation = _container.getNavigationByOrigin(routeData.destination);
      if (nextNavigation) {
        nextNavigation.updateInNavigation(navigation);
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.model.outcome').factory('otusjs.model.outcome.ActivityAutoFillEventFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    function create() {
      return new ActivityAutoFillEvent({});
    }

    function fromJson(json) {
      return new ActivityAutoFillEvent(json);
    }

    function fromArray(jsonObjects) {
      if (Array.isArray(jsonObjects)) {
        return jsonObjects.map(function (json) {
          return new ActivityAutoFillEvent(json);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ActivityAutoFillEvent(JsonObject) {
    var self = this;

    self._id = JsonObject._id || null;
    self.objectType = "ActivityAutoFillEvent";
    self.icon = "home_work";
    self.name = JsonObject.name || '';
    self.order = JsonObject.order;
    self.acronym = JsonObject.acronym || '';
    self.activityId = JsonObject.activityId || '';
    self.description = JsonObject.description || '';
    self.participantEvents = JsonObject.participantEvents || [];

    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json._id = self._id;
      json.objectType = self.objectType;
      json.name = self.name;
      json.order = self.order;
      json.acronym = self.acronym;
      json.activityId = self.activityId;
      json.description = self.description;

      return json;
    }

    return self;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('otusjs.model.question.LayoutGridFactory', LayoutGridFactory);

  LayoutGridFactory.$inject = [];

  function LayoutGridFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(width) {
      return new LayoutGrid(width);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.LayoutGridFactory.fromJsonObject() method expects to receive a object instead a String");
      }

      var width = jsonObject.width;
      var layoutGrid = new LayoutGrid(width);

      return layoutGrid;
    }

    return self;
  }

  function LayoutGrid(width) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = "LayoutGrid";
    self.width = width || 100;

    /* Public methods */
    self.setWidth = setWidth;
    self.getWidth = getWidth;
    self.toJSON = toJSON;

    function setWidth(width) {
      self.width = width;
    }

    function getWidth() {
      return self.width;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.width = self.width;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('otusjs.model.validation.MaxSelectedValidatorFactory', Factory);

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MaxSelectedValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.validation.MaxSelectedValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MaxSelectedValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MaxSelectedValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('otusjs.model.validation.MinSelectedValidatorFactory', Factory);

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinSelectedValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.validation.MinSelectedValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinSelectedValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MinSelectedValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('otusjs.model.validation.QuantityValidatorFactory', Factory);

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new QuantityValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.validation.QuantityValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new QuantityValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function QuantityValidator() {
    var self = this;

    self.canBeIgnored = true;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new FutureDateValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.FutureDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new FutureDateValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function FutureDateValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = false;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MaxDateValidatorFactory', MaxDateValidatorFactory);

  MaxDateValidatorFactory.$inject = ['otusjs.utils.ImmutableDate'];

  function MaxDateValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MaxDateValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MaxDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MaxDateValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MaxDateValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = { value: null };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MinDateValidatorFactory', MinDateValidatorFactory);

  MinDateValidatorFactory.$inject = ['otusjs.utils.ImmutableDate'];

  function MinDateValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinDateValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MinDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinDateValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MinDateValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = { value: null };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('PastDateValidatorFactory', PastDateValidatorFactory);

  PastDateValidatorFactory.$inject = ['otusjs.utils.ImmutableDate'];

  function PastDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new PastDateValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.PastDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new PastDateValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function PastDateValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = false;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('RangeDateValidatorFactory', RangeDateValidatorFactory);

  RangeDateValidatorFactory.$inject = ['otusjs.utils.ImmutableDate'];

  function RangeDateValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new RangeDateValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.RangeDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new RangeDateValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function RangeDateValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = {
      initial: { value: null },
      end: { value: null }
    };
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new DistinctValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.DistinctValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new DistinctValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function DistinctValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new InValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.InValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new InValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function InValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = {
      'initial': null,
      'end': null
    };
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new LowerLimitValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.LowerLimitValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new LowerLimitValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;

      return validator;
    }

    return self;
  }

  function LowerLimitValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new UpperLimitValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.UpperLimitValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new UpperLimitValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;

      return validator;
    }

    return self;
  }

  function UpperLimitValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new AlphanumericValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.AlphanumericValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new AlphanumericValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function AlphanumericValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = true;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new LowerCaseValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.LowerCaseValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new LowerCaseValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function LowerCaseValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = true;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MaxLengthValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MaxLengthValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MaxLengthValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MaxLengthValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinLengthValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MinLengthValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinLengthValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MinLengthValidator() {
    var self = this;

    self.canBeIgnored = true;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new SpecialsValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.SpecialsValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new SpecialsValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function SpecialsValidator() {
    var self = this;

    self.canBeIgnored = true;
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new UpperCaseValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.UpperCaseValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new UpperCaseValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function UpperCaseValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = true;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MaxTimeValidatorFactory', MaxTimeValidatorFactory);

  MaxTimeValidatorFactory.$inject = ['otusjs.utils.ImmutableDate'];

  function MaxTimeValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MaxTimeValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MaxTimeValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MaxTimeValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MaxTimeValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = { value: '' };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.validation').factory('MinTimeValidatorFactory', MinTimeValidatorFactory);

  MinTimeValidatorFactory.$inject = ['otusjs.utils.ImmutableDate'];

  function MinTimeValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinTimeValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MinTimeValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinTimeValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MinTimeValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = { value: '' };
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new ScaleValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.ScaleValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new ScaleValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function ScaleValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('otusjs.model.question.GridIntegerFactory', GridIntegerFactory);

  GridIntegerFactory.$inject = ['LabelFactory', 'UnitFactory', 'otusjs.model.question.LayoutGridFactory'];

  function GridIntegerFactory(LabelFactory, UnitFactory, LayoutGridFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID) {
      var labelObject = LabelFactory.create();
      var layout = LayoutGridFactory.create();

      var unitObject = {};
      unitObject.ptBR = UnitFactory.create();
      unitObject.enUS = UnitFactory.create();
      unitObject.esES = UnitFactory.create();

      return new GridInteger(templateID, labelObject, layout, unitObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.GridIntegerFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);

      var unitObject = {};
      unitObject.ptBR = UnitFactory.fromJsonObject(jsonObject.unit.ptBR);
      unitObject.enUS = UnitFactory.fromJsonObject(jsonObject.unit.enUS);
      unitObject.esES = UnitFactory.fromJsonObject(jsonObject.unit.esES);

      var layout = LayoutGridFactory.fromJsonObject(jsonObject.layout);
      var gridInteger = new GridInteger(jsonObject.templateID, labelObject, layout, unitObject);
      gridInteger.customID = jsonObject.customID;

      return gridInteger;
    }

    return self;
  }

  function GridInteger(templateID, labelObject, layout, unitObject) {
    var self = this;

    self.extents = 'SurveyItem';
    self.objectType = 'GridInteger';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Integer';
    self.label = labelObject;
    self.layout = layout;
    self.unit = unitObject;

    /* Public methods */
    self.setWidth = setWidth;
    self.getWidth = getWidth;
    self.setColor = setColor;
    self.getColor = getColor;
    self.isQuestion = isQuestion;
    self.toJSON = toJSON;

    function setWidth(width) {
      self.layout.width = width;
    }

    function getWidth() {
      return self.layout.width;
    }

    function setColor(color) {
      self.layout.color = color;
    }

    function getColor() {
      return self.layout.color;
    }

    function isQuestion() {
      return true;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.label = self.label;
      json.layout = self.layout;
      json.unit = self.unit;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('otusjs.model.question.GridIntegerLineFactory', GridIntegerLineFactory);

  GridIntegerLineFactory.$inject = ['otusjs.model.question.GridIntegerFactory'];

  function GridIntegerLineFactory(GridIntegerFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new GridIntegerLine(GridIntegerFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.question.model.GridIntegerLine.fromJsonObject() method expects to receive a object instead a String");
      }
      var gridIntegerLine = new GridIntegerLine(GridIntegerFactory);
      gridIntegerLine.loadGridIntegerListFromJsonObject(jsonObject.gridIntegerList);

      return gridIntegerLine;
    }

    return self;
  }

  function GridIntegerLine(GridIntegerFactory) {
    var self = this;
    var _gridIntegerList = [];

    self.extents = 'StudioObject';
    self.objectType = 'GridIntegerLine';

    /* Public methods */
    self.addGridInteger = addGridInteger;
    self.removeGridInteger = removeGridInteger;
    self.removeLastGridInteger = removeLastGridInteger;
    self.filterItems = filterItems;
    self.getGridIntegerIndex = getGridIntegerIndex;
    self.getGridIntegerList = getGridIntegerList;
    self.getGridIntegerListSize = getGridIntegerListSize;
    self.getAllGridIntegerCustomOptionsID = getAllGridIntegerCustomOptionsID;
    self.loadGridIntegerListFromJsonObject = loadGridIntegerListFromJsonObject;
    self.toJSON = toJSON;

    function addGridInteger(templateID) {
      var gridInteger = GridIntegerFactory.create(templateID);
      _gridIntegerList.push(gridInteger);
      return gridInteger;
    }

    function removeGridInteger(index) {
      return _gridIntegerList.splice(index - 1, 1);
    }

    function removeLastGridInteger() {
      return _gridIntegerList.splice(-1, 1);
    }

    function filterItems(query) {
      return _gridIntegerList.filter(query);
    }

    function getGridIntegerIndex(index) {
      return _gridIntegerList.filter(function (gridInteger, i) {
        if (i === index) return gridInteger;
      });
    }

    function getGridIntegerList() {
      return _gridIntegerList;
    }

    function getGridIntegerListSize() {
      return _gridIntegerList.length;
    }

    function getAllGridIntegerCustomOptionsID() {
      return _gridIntegerList.map(function (gridInteger) {
        return gridInteger.customID;
      });
    }

    function loadGridIntegerListFromJsonObject(gridIntegerList) {
      _gridIntegerList = [];
      gridIntegerList.forEach(function (gridInteger) {
        _gridIntegerList.push(GridIntegerFactory.fromJsonObject(gridInteger));
      });
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.gridIntegerList = _gridIntegerList;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('otusjs.model.question.GridIntegerQuestionFactory', GridIntegerQuestionFactory);

  GridIntegerQuestionFactory.$inject = ['MetadataGroupFactory', 'FillingRulesOptionFactory', 'LabelFactory', 'otusjs.model.question.GridIntegerLineFactory'];

  function GridIntegerQuestionFactory(MetadataGroupFactory, FillingRulesOptionFactory, LabelFactory, GridIntegerLineFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();
      var labelObject = LabelFactory.create();

      return new GridIntegerQuestion(templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridIntegerLineFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.question.model.GridIntegerQuestion.fromJsonObject() method expects to receive a object instead a String");
      }
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);

      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new GridIntegerQuestion(jsonObject.templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridIntegerLineFactory);
      question.loadFromJsonLinesObject(jsonObject.lines);
      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function GridIntegerQuestion(templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridIntegerLineFactory) {
    var self = this;
    var _lines = [];

    self.extents = prototype.objectType;
    self.objectType = 'GridIntegerQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.label = labelObject;

    /* Public methods */
    self.createLine = createLine;
    self.removeLine = removeLine;
    self.removeLastLine = removeLastLine;
    self.filterItems = filterItems;
    self.getLineIndex = getLineIndex;
    self.getLinesList = getLinesList;
    self.getLinesListSize = getLinesListSize;
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.getAllCustomOptionsID = getAllCustomOptionsID;
    self.loadFromJsonLinesObject = loadFromJsonLinesObject;
    self.toJSON = toJSON;

    function createLine() {
      var line = GridIntegerLineFactory.create();
      _lines.push(line);
      return line;
    }

    function removeLine(index) {
      _lines.splice(index, 1);
    }

    function removeLastLine() {
      _lines.splice(-1, 1);
    }

    function filterItems(query) {
      return _lines.filter(query);
    }

    function getLineIndex(gridLine) {
      return _lines.indexOf(gridLine);
    }

    function getLinesList() {
      return _lines;
    }

    function getLinesListSize() {
      return _lines.length;
    }

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory'];
      return validatorsList;
    }

    function getAllCustomOptionsID() {
      return _lines.map(function (line) {
        return line.getAllGridIntegerCustomOptionsID();
      });
    }

    function loadFromJsonLinesObject(lines) {
      _lines = [];
      lines.forEach(function (gridIntegerLine) {
        _lines.push(GridIntegerLineFactory.fromJsonObject(gridIntegerLine));
      });
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;
      json.label = self.label;
      json.lines = [];
      _lines.forEach(function (line) {
        json.lines.push(line);
      });

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('otusjs.model.question.GridTextFactory', GridTextFactory);

  GridTextFactory.$inject = ['LabelFactory', 'UnitFactory', 'otusjs.model.question.LayoutGridFactory'];

  function GridTextFactory(LabelFactory, UnitFactory, LayoutGridFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID) {
      var labelObject = LabelFactory.create();
      var layout = LayoutGridFactory.create();

      var unitObject = {};
      unitObject.ptBR = UnitFactory.create();
      unitObject.enUS = UnitFactory.create();
      unitObject.esES = UnitFactory.create();

      return new GridText(templateID, labelObject, layout, unitObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.GridTextFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);

      var unitObject = {};
      unitObject.ptBR = UnitFactory.fromJsonObject(jsonObject.unit.ptBR);
      unitObject.enUS = UnitFactory.fromJsonObject(jsonObject.unit.enUS);
      unitObject.esES = UnitFactory.fromJsonObject(jsonObject.unit.esES);

      var layout = LayoutGridFactory.fromJsonObject(jsonObject.layout);
      var gridText = new GridText(jsonObject.templateID, labelObject, layout, unitObject);
      gridText.customID = jsonObject.customID;

      return gridText;
    }

    return self;
  }

  function GridText(templateID, labelObject, layout, unitObject) {
    var self = this;

    self.extents = 'SurveyItem';
    self.objectType = 'GridText';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
    self.label = labelObject;
    self.layout = layout;
    self.unit = unitObject;

    /* Public methods */
    self.setWidth = setWidth;
    self.getWidth = getWidth;
    self.setColor = setColor;
    self.getColor = getColor;
    self.isQuestion = isQuestion;
    self.toJSON = toJSON;

    function setWidth(width) {
      self.layout.width = width;
    }

    function getWidth() {
      return self.layout.width;
    }

    function setColor(color) {
      self.layout.color = color;
    }

    function getColor() {
      return self.layout.color;
    }

    function isQuestion() {
      return true;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.label = self.label;
      json.layout = self.layout;
      json.unit = self.unit;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('otusjs.model.question.GridTextLineFactory', GridTextLineFactory);

  GridTextLineFactory.$inject = ['otusjs.model.question.GridTextFactory'];

  function GridTextLineFactory(GridTextFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new GridTextLine(GridTextFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.question.model.GridTextLine.fromJsonObject() method expects to receive a object instead a String");
      }
      var gridTextLine = new GridTextLine(GridTextFactory);
      gridTextLine.loadGridTextListFromJsonObject(jsonObject.gridTextList);

      return gridTextLine;
    }

    return self;
  }

  function GridTextLine(GridTextFactory) {
    var self = this;
    var _gridTextList = [];

    self.extents = 'StudioObject';
    self.objectType = 'GridTextLine';

    /* Public methods */
    self.addGridText = addGridText;
    self.removeGridText = removeGridText;
    self.removeLastGridText = removeLastGridText;
    self.filterItems = filterItems;
    self.getGridTextIndex = getGridTextIndex;
    self.getGridTextList = getGridTextList;
    self.getGridTextListSize = getGridTextListSize;
    self.getAllGridTextCustomOptionsID = getAllGridTextCustomOptionsID;
    self.loadGridTextListFromJsonObject = loadGridTextListFromJsonObject;
    self.toJSON = toJSON;

    function addGridText(templateID) {
      var gridText = GridTextFactory.create(templateID);
      _gridTextList.push(gridText);
      return gridText;
    }

    function removeGridText(index) {
      return _gridTextList.splice(index - 1, 1);
    }

    function removeLastGridText() {
      return _gridTextList.splice(-1, 1);
    }

    function filterItems(query) {
      return _gridTextList.filter(query);
    }

    function getGridTextIndex(index) {
      return _gridTextList.filter(function (gridText, i) {
        if (i === index) return gridText;
      });
    }

    function getGridTextList() {
      return _gridTextList;
    }

    function getGridTextListSize() {
      return _gridTextList.length;
    }

    function getAllGridTextCustomOptionsID() {
      return _gridTextList.map(function (gridText) {
        return gridText.customID;
      });
    }

    function loadGridTextListFromJsonObject(gridTextList) {
      _gridTextList = [];
      gridTextList.forEach(function (gridText) {
        _gridTextList.push(GridTextFactory.fromJsonObject(gridText));
      });
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.gridTextList = _gridTextList;

      return json;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('otusjs.surveyItem').factory('otusjs.model.question.GridTextQuestionFactory', GridTextQuestionFactory);

  GridTextQuestionFactory.$inject = ['MetadataGroupFactory', 'FillingRulesOptionFactory', 'LabelFactory', 'otusjs.model.question.GridTextLineFactory'];

  function GridTextQuestionFactory(MetadataGroupFactory, FillingRulesOptionFactory, LabelFactory, GridTextLineFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();
      var labelObject = LabelFactory.create();

      return new GridTextQuestion(templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridTextLineFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.question.model.GridTextQuestion.fromJsonObject() method expects to receive a object instead a String");
      }
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);

      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new GridTextQuestion(jsonObject.templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridTextLineFactory);
      question.loadFromJsonLinesObject(jsonObject.lines);
      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function GridTextQuestion(templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridTextLineFactory) {
    var self = this;
    var _lines = [];

    self.extents = prototype.objectType;
    self.objectType = 'GridTextQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.label = labelObject;

    /* Public methods */
    self.createLine = createLine;
    self.removeLine = removeLine;
    self.removeLastLine = removeLastLine;
    self.filterItems = filterItems;
    self.getLineIndex = getLineIndex;
    self.getLinesList = getLinesList;
    self.getLinesListSize = getLinesListSize;
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.getAllCustomOptionsID = getAllCustomOptionsID;
    self.loadFromJsonLinesObject = loadFromJsonLinesObject;
    self.toJSON = toJSON;

    function createLine() {
      var line = GridTextLineFactory.create();
      _lines.push(line);
      return line;
    }

    function removeLine(index) {
      _lines.splice(index, 1);
    }

    function removeLastLine() {
      _lines.splice(-1, 1);
    }

    function filterItems(query) {
      return _lines.filter(query);
    }

    function getLineIndex(gridLine) {
      return _lines.indexOf(gridLine);
    }

    function getLinesList() {
      return _lines;
    }

    function getLinesListSize() {
      return _lines.length;
    }

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = ['mandatory'];
      return validatorsList;
    }

    function getAllCustomOptionsID() {
      return _lines.map(function (line) {
        return line.getAllGridTextCustomOptionsID();
      });
    }

    function loadFromJsonLinesObject(lines) {
      _lines = [];
      lines.forEach(function (gridTextLine) {
        _lines.push(GridTextLineFactory.fromJsonObject(gridTextLine));
      });
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;
      json.label = self.label;
      json.lines = [];
      _lines.forEach(function (line) {
        json.lines.push(line);
      });

      return json;
    }
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
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new PrecisionValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.PrecisionValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new PrecisionValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function PrecisionValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }
})();