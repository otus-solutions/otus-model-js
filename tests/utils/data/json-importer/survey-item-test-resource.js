Test.utils.data.autocompleteQuestion = {
  "extents": "AutocompleteQuestion",
  "objectType": "AutocompleteQuestion",
  "templateID": "ID_1",
  "customID": "ID_1",
  "dataType": "String",
  "dataSources": [],
  "label": {
    "ptBR": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    },
    "enUS": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    },
    "esES": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    }
  },
  "metadata": {
    "extents": "StudioObject",
    "objectType": "MetadataGroup",
    "options": []
  },
  "fillingRules": {
    "extends": "StudioObject",
    "objectType": "FillingRules",
    "options": {
      "mandatory": {
        "extends": "StudioObject",
        "objectType": "Rule",
        "validatorType": "mandatory",
        "data": {
          "canBeIgnored": false,
          "reference": true
        }
      }
    }
  }
};

Test.utils.data.fileUploadQuestionItem = {
  "extents": "SurveyItem",
  "objectType": "FileUploadQuestion",
  "templateID": "DQUOTETWO1",
  "customID": "DQUOTETWO1",
  "dataType": "Binary",
  "label": {
    "ptBR": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "\"aspas\"",
      "formattedText": "\"aspas\""
    },
    "enUS": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    },
    "esES": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    }
  },
  "metadata": {
    "extents": "StudioObject",
    "objectType": "MetadataGroup",
    "options": []
  },
  "fillingRules": {
    "extends": "StudioObject",
    "objectType": "FillingRules",
    "options": {
      "mandatory": {
        "extends": "StudioObject",
        "objectType": "Rule",
        "validatorType": "mandatory",
        "data": {
          "canBeIgnored": false,
          "reference": true
        }
      }
    }
  }
};

Test.utils.data.integerQuestionItem = {
  "extents": "SurveyItem",
  "objectType": "IntegerQuestion",
  "templateID": "TEMPLATE_ID",
  "customID": "TEMPLATE_ID",
  "dataType": "Integer",
  "label": {
    "ptBR": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    },
    "enUS": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    },
    "esES": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    }
  },
  "metadata": {
    "extents": "StudioObject",
    "objectType": "MetadataGroup",
    "options": []
  },
  "unit": {
    "ptBR": {
      "extends": "StudioObject",
      "objectType": "Unit",
      "oid": "1",
      "plainText": "Qual sua data de nascimento?",
      "formattedText": "Qual sua <b>data de nascimento</b>?"
    },
    "enUS": {
      "extends": "StudioObject",
      "objectType": "Unit",
      "oid": "2",
      "plainText": "What is your birth date?",
      "formattedText": "What is your <b>birth date</b>?"
    },
    "esES": {
      "extends": "StudioObject",
      "objectType": "Unit",
      "oid": "",
      "plainText": "¿Cuál es su fecha de nacimiento?",
      "formattedText": "¿Cuál es su fecha de <b>nacimiento</b>?"
    }
  },
  "fillingRules": {
    "extends": "StudioObject",
    "objectType": "FillingRules",
    "options": {
      "mandatory": {
        "extends": "StudioObject",
        "objectType": "Rule",
        "validatorType": "mandatory",
        "data": {
          "canBeIgnored": false,
          "reference": true
        }
      }
    }
  }
};

Test.utils.data.imageItem = {
  "extents": "SurveyItem",
  "objectType": "ImageItem",
  "templateID": "DQ2",
  "customID": "DQ2",
  "dataType": "String",
  "url": "",
  "footer": {
    "ptBR": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "\"texto\"",
      "formattedText": "\"texto\""
    },
    "enUS": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    },
    "esES": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    }
  }
};

Test.utils.data.singleSelectionQuestionItem = {
  "extents": "SurveyItem",
  "objectType": "SingleSelectionQuestion",
  "templateID": "TPL_ID",
  "customID": "TPL_ID",
  "dataType": "Integer",
  "label": {
    "ptBR": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "Gênero",
      "formattedText": "Gênero"
    },
    "enUS": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    },
    "esES": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    }
  },
  "options": [{
    "extents": "StudioObject",
    "objectType": "AnswerOption",
    "value": 1,
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Masculino",
        "formattedText": "Masculino"
      },
      "enUS": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "",
        "formattedText": ""
      },
      "esES": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "",
        "formattedText": ""
      }
    }
  }, {
    "extents": "StudioObject",
    "objectType": "AnswerOption",
    "value": 2,
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Feminino",
        "formattedText": "Feminino"
      },
      "enUS": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "",
        "formattedText": ""
      },
      "esES": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "",
        "formattedText": ""
      }
    }
  }],
  "metadata": {
    "extents": "StudioObject",
    "objectType": "MetadataGroup",
    "options": [{
      "extends": "StudioObject",
      "objectType": "MetadataAnswer",
      "dataType": "Integer",
      "value": 1,
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Outro",
          "formattedText": "Outro"
        },
        "enUS": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "",
          "formattedText": ""
        },
        "esES": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "",
          "formattedText": ""
        }
      }
    }]
  },
  "fillingRules": {
    "extends": "StudioObject",
    "objectType": "FillingRules",
    "options": {
      "mandatory": {
        "extends": "StudioObject",
        "objectType": "Rule",
        "validatorType": "mandatory",
        "data": {
          "canBeIgnored": false,
          "reference": true
        }
      }
    }
  }
};

Test.utils.data.textQuestionItem = {
  "extents": "SurveyItem",
  "objectType": "TextQuestion",
  "templateID": "TPL_ID",
  "customID": "TPL_ID",
  "dataType": "String",
  "label": {
    "ptBR": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "\"texto\"",
      "formattedText": "\"texto\""
    },
    "enUS": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    },
    "esES": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    }
  },
  "metadata": {
    "extents": "StudioObject",
    "objectType": "MetadataGroup",
    "options": []
  },
  "fillingRules": {
    "extends": "StudioObject",
    "objectType": "FillingRules",
    "options": {
      "mandatory": {
        "extends": "StudioObject",
        "objectType": "Rule",
        "validatorType": "mandatory",
        "data": {
          "canBeIgnored": false,
          "reference": true
        }
      }
    }
  }
};

Test.utils.data.calendarQuestionItem = {
  "extents": "SurveyItem",
  "objectType": "CalendarQuestion",
  "templateID": "TPL_ID",
  "customID": "TPL_ID",
  "dataType": "LocalDate",
  "label": {
    "ptBR": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "\"texto\"",
      "formattedText": "\"texto\""
    },
    "enUS": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    },
    "esES": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    }
  },
  "metadata": {
    "extents": "StudioObject",
    "objectType": "MetadataGroup",
    "options": []
  },
  "fillingRules": {
    "extends": "StudioObject",
    "objectType": "FillingRules",
    "options": {
      "mandatory": {
        "extends": "StudioObject",
        "objectType": "Rule",
        "validatorType": "mandatory",
        "data": {
          "canBeIgnored": false,
          "reference": true
        }
      }
    }
  }
};

