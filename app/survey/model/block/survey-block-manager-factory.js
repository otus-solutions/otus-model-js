(function () {
  'use strict';

  angular
    .module('otusjs.model.survey')
    .factory('otusjs.model.survey.BlockManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.model.survey.BlockFactory'
  ];

  function Factory(BlockFactory) {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(BlockFactory, blockList) {
      return new SurveyBlockManager(blockList);
    }


    return self;
  }

  function SurveyBlockManager(BlockFactory, blocks) {
    let self = this;
    let blockStructure = _buildBlockStructure(blocks);

    self.objectType = 'SurveyBlockManager';

    /* Public methods */
    self.createBlock = createBlock;
    self.getBlockList = getBlockList;
    self.getBlockNames = getBlockNames;
    self.getBlockSurveys = getBlockSurveys;
    self.getSurveyBlocks = getSurveyBlocks;
    self.toJSON = toJSON;

    //should create a new block and add it to structure
    function createBlock(name, surveys) {
      if (blockStructure.getName()) {
        throw new Error("Block already exists");
      }
      let block = BlockFactory.create(name, surveys);
      blockStructure[name] = block;
      return block;
    }

    //should return blocklist
    function getBlockList() {
      return Object.values(blockStructure);
    }

    function getBlockNames() {
      return Object.keys(blockStructure);
    }

    //should return the blocks survey array
    function getBlockSurveys(name) {
      let found = blockStructure[name];
      if (found) {
        return found.getSurveys();
      }

      return []; //todo: should this throw error?
    }

    //given survey, get blocks in which is present
    function getSurveyBlocks(surveyAcronym) {
      return getBlockList().filter(block => {
        return block.getSurveys().includes(surveyAcronym)
      });
    }

    function toJSON() {
      return getBlockList();
    }

    function _buildBlockStructure(blocks) {
      let json = {};

      blocks.forEach(jsonBlock => {
        let block = new BlockFactory(jsonBlock);
        json[block.getName()] = block;
      });

      return json;
    }
  }

}());
