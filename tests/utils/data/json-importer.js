var Test = {};
Test.utils = {};
Test.utils.data = {};


Test.utils.data.selectedParticipant = {
  recruitmentNumber: 5003388,
  name: "CAROLINA CELIA BRANDÃƒÆ’O FLORES",
  sex: "F",
  birthdate: {
    objectType: "ImmutableDate",
    value: "1977-0314 :0:00.000"
  },
  fieldCenter: {
    name: "Rio Grande do Sul",
    code: 5,
    acronym: "RS"
  },
  meta: {
    revision: 0,
    created: 0,
    version: 0
  },
  stringfiedRN: "5003388"
};

Test.utils.data.otusLoggedUser = {
  "name": "Fulano",
  "surname": "Detal",
  "fieldCenter": {},
  "phone": "51999999999",
  "email": "fulanodetal@mail.com",
  "token": "edasEQW"
};


Test.utils.data.latestSurveyTemplate = {
  "extents": "StudioObject",
  "objectType": "Survey",
  "oid": "dXNlclVVSUQ6W3VuZGVmaW5lZF1zdXJ2ZXlVVUlEOlsxMjExOWQ0MC05NmRhLTExZTYtOThlMy1lZDc1NDYxYWJlMWNdcmVwb3NpdG9yeVVVSUQ6WyBOb3QgZG9uZSB5ZXQgXQ==",
  "identity": {
    "extents": "StudioObject",
    "objectType": "SurveyIdentity",
    "name": "Complete",
    "acronym": "TC",
    "recommendedTo": "",
    "description": "",
    "keywords": []
  },
  "metainfo": {
    "extents": "StudioObject",
    "objectType": "SurveyMetaInfo",
    "creationDatetime": 1476977403155,
    "otusStudioVersion": ""
  },
  "itemContainer": [{
    "extents": "SurveyItem",
    "objectType": "CalendarQuestion",
    "templateID": "TC1",
    "customID": "C1",
    "dataType": "LocalDate",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Qual sua data de nascimento?",
        "formattedText": "Qual sua data de nascimento?"
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
            "plainText": "Não sabe",
            "formattedText": "<font color='#0afe2e'>Não sabe</font>"
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
      }, {
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 2,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer responder",
            "formattedText": "<font color='#0afe2e'>Não quer responder</font>"
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
      }, {
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 3,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplica",
            "formattedText": "<font color='#0afe2e'>Não se aplica</font>"
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
        },
        "rangeDate": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "rangeDate",
          "data": {
            "canBeIgnored": true,
            "reference": {
              "canBeIgnored": false,
              "initial": "2016-10-03T03:00:00.000Z",
              "end": "2016-10-03T03:00:00.000Z"
            }
          }
        },
        "minDate": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "minDate",
          "data": {
            "canBeIgnored": true,
            "reference": "2016-10-20T15:39:56.079Z"
          }
        },
        "maxDate": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "maxDate",
          "data": {
            "canBeIgnored": true,
            "reference": "2016-10-20T15:39:57.203Z"
          }
        },
        "futureDate": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "futureDate",
          "data": {
            "canBeIgnored": true,
            "reference": true
          }
        },
        "pastDate": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "pastDate",
          "data": {
            "canBeIgnored": true,
            "reference": true
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "TC2",
    "customID": "C2",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Quantidade de filhos?",
        "formattedText": "Quantidade de filhos?"
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
            "plainText": "Não sabe",
            "formattedText": "<span style='letter-spacing: 0.14px; background-color: rgb(164, 161, 116);'>Não sabe</span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 2,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer responder",
            "formattedText": "<span style='letter-spacing: 0.14px;'>Não quer <span style='background-color: rgb(164, 161, 116);'>responder</span></span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 3,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplica",
            "formattedText": "<span style='letter-spacing: 0.14px; background-color: rgb(164, 161, 116);'>Não se aplica</span>"
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
    "unit": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Unit",
        "oid": "",
        "plainText": "Filhos",
        "formattedText": "Filhos"
      },
      "enUS": {
        "extends": "StudioObject",
        "objectType": "Unit",
        "oid": "",
        "plainText": "",
        "formattedText": ""
      },
      "esES": {
        "extends": "StudioObject",
        "objectType": "Unit",
        "oid": "",
        "plainText": "",
        "formattedText": ""
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
        },
        "distinct": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "distinct",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        },
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 20
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 50
          }
        },
        "precision": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "precision",
          "data": {
            "canBeIgnored": true,
            "reference": 2
          }
        },
        "in": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "in",
          "data": {
            "canBeIgnored": true,
            "reference": {
              "initial": 1,
              "end": 50
            }
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "TC3",
    "customID": "C3",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Peso",
        "formattedText": "Peso"
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
            "plainText": "Não sabe",
            "formattedText": "<span style='letter-spacing: 0.14px;'>Não <span style='background-color: rgb(164, 161, 116);'>sabe</span></span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 2,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer responder",
            "formattedText": "<span style='letter-spacing: 0.14px; background-color: rgb(164, 161, 116);'>Não quer responder</span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 3,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplica",
            "formattedText": "<span style='letter-spacing: 0.14px;'><span style='background-color: rgb(116, 165, 165);'>Não </span>se aplica</span>"
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
    "unit": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Unit",
        "oid": "",
        "plainText": "Quilos",
        "formattedText": "Quilos"
      },
      "enUS": {
        "extends": "StudioObject",
        "objectType": "Unit",
        "oid": "",
        "plainText": "",
        "formattedText": ""
      },
      "esES": {
        "extends": "StudioObject",
        "objectType": "Unit",
        "oid": "",
        "plainText": "",
        "formattedText": ""
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
        },
        "distinct": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "distinct",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        },
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 20
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 50
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 2
          }
        },
        "in": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "in",
          "data": {
            "canBeIgnored": true,
            "reference": {
              "initial": 20,
              "end": 50
            }
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "TC4",
    "customID": "C4",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Gênero:",
        "formattedText": "Gênero:"
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
            "plainText": "Não sabe",
            "formattedText": "<span style='letter-spacing: 0.14px;'><u>Não </u>sabe</span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 2,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer responder",
            "formattedText": "<span style='letter-spacing: 0.14px;'>Não <b>quer </b>responder</span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 3,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplica",
            "formattedText": "<span style='letter-spacing: 0.14px;'><strike>Não se aplica</strike></span>"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "CheckboxQuestion",
    "templateID": "TC5",
    "customID": "C5",
    "dataType": "Array",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Itens que possui em casa:",
        "formattedText": "Itens que possui em casa:"
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
      "objectType": "CheckboxAnswerOption",
      "optionID": "TC5a",
      "customOptionID": "TC5a",
      "dataType": "Boolean",
      "value": false,
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Geladeira",
          "formattedText": "Geladeira"
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
      "objectType": "CheckboxAnswerOption",
      "optionID": "TC5b",
      "customOptionID": "TC5b",
      "dataType": "Boolean",
      "value": false,
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Fogão",
          "formattedText": "Fogão"
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
      "objectType": "CheckboxAnswerOption",
      "optionID": "TC5c",
      "customOptionID": "TC5c",
      "dataType": "Boolean",
      "value": false,
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Microondas",
          "formattedText": "Microondas"
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
            "plainText": "Não sabe",
            "formattedText": "<span style='letter-spacing: 0.14px; background-color: rgb(116, 165, 165);'>Não sabe</span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 2,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer responder",
            "formattedText": "<span style='letter-spacing: 0.14px; background-color: rgb(116, 165, 165);'>Não quer responder</span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 3,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplica",
            "formattedText": "<span style='letter-spacing: 0.14px; background-color: rgb(116, 165, 165);'>Não se aplica</span>"
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
      "options": {}
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "TC6",
    "customID": "C6",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Qual o seu nome completo?",
        "formattedText": "Qual o seu nome completo?"
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
            "plainText": "Não sabe",
            "formattedText": "<span style='letter-spacing: 0.14px;'><font color='#ff0c0c'>Não sabe</font></span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 2,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer responder",
            "formattedText": "<span style='letter-spacing: 0.14px;'><font color='#ff0c0c'>Não quer responder</font></span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 3,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplica",
            "formattedText": "<span style='letter-spacing: 0.14px;'><font color='#ff0c0c'>Não se aplica</font></span>"
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
        },
        "alphanumeric": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "alphanumeric",
          "data": {
            "canBeIgnored": true,
            "reference": true
          }
        },
        "lowerCase": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerCase",
          "data": {
            "canBeIgnored": true,
            "reference": true
          }
        },
        "upperCase": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperCase",
          "data": {
            "canBeIgnored": true,
            "reference": true
          }
        },
        "specials": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "specials",
          "data": {
            "canBeIgnored": true,
            "reference": true
          }
        },
        "minLength": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "minLength",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        },
        "maxLength": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "maxLength",
          "data": {
            "canBeIgnored": true,
            "reference": 90
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "EmailQuestion",
    "templateID": "TC7",
    "customID": "C7",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Email:",
        "formattedText": "Email:"
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
            "plainText": "Não sabe",
            "formattedText": "<font color='#737373'>Não sabe</font>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 2,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer respondern",
            "formattedText": "<div style='text-align: right;'><span style='letter-spacing: 0.14px;'>Não quer responder</span></div>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 3,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplica",
            "formattedText": "<span style='letter-spacing: 0.14px;'><strike>Não se aplica</strike></span>"
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
            "reference": false
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "TimeQuestion",
    "templateID": "TC8",
    "customID": "C8",
    "dataType": "LocalTime",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Horário do exame:",
        "formattedText": "Horário do exame:"
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
            "plainText": "Não saben",
            "formattedText": "<div style='text-align: center;'><span style='letter-spacing: 0.14px;'>Não sabe</span></div>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 2,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer respondern",
            "formattedText": "<div style='text-align: center;'><span style='letter-spacing: 0.14px;'>Não quer responder</span></div>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 3,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplican",
            "formattedText": "<div style='text-align: center;'><span style='letter-spacing: 0.14px;'>Não se aplica</span></div>"
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
        },
        "minTime": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "minTime",
          "data": {
            "canBeIgnored": true,
            "reference": "Wed Mar 25 2015 02:00:00 GMT-0300 (Hora oficial do Brasil)"
          }
        },
        "maxTime": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "maxTime",
          "data": {
            "canBeIgnored": true,
            "reference": "Thu Oct 20 2016 03:00:00 GMT-0200 (Horário brasileiro de verão)"
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "PhoneQuestion",
    "templateID": "TC9",
    "customID": "C9",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Telefone:",
        "formattedText": "Telefone:"
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
            "plainText": "Não sabe",
            "formattedText": "<span style='letter-spacing: 0.14px;'><b>Não sabe</b></span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 2,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer responder",
            "formattedText": "<span style='letter-spacing: 0.14px;'><i>Não quer responder</i></span>"
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
        "extends": "StudioObject",
        "objectType": "MetadataAnswer",
        "dataType": "Integer",
        "value": 3,
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplica",
            "formattedText": "<span style='letter-spacing: 0.14px;'><u>Não se aplica</u></span>"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextItem",
    "templateID": "TC10",
    "customID": "C10",
    "dataType": "String",
    "value": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Algum texto qualquer.",
        "formattedText": "Algum texto qualquer."
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
    "extents": "SurveyItem",
    "objectType": "ImageItem",
    "templateID": "TC11",
    "customID": "C11",
    "dataType": "String",
    "url": "https://s-media-cache-ak0.pinimg.com/564x/c4/f4/8f/c4f48f5b8186ec1aa17aee9749a0f725.jpg",
    "footer": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Rodapé",
        "formattedText": "Rodapé"
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
  "navigationList": [{
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC1",
    "index": 0,
    "inNavigations": [],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC1",
      "destination": "TC2",
      "name": "TC1_TC2",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC2",
    "index": 1,
    "inNavigations": [{
      "origin": "TC1"
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC2",
      "destination": "TC3",
      "name": "TC2_TC3",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC3",
    "index": 2,
    "inNavigations": [{
      "origin": "TC2"
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC3",
      "destination": "TC4",
      "name": "TC3_TC4",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC4",
    "index": 3,
    "inNavigations": [{
      "origin": "TC3"
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC4",
      "destination": "TC5",
      "name": "TC4_TC5",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC5",
    "index": 4,
    "inNavigations": [{
      "origin": "TC4"
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC5",
      "destination": "TC6",
      "name": "TC5_TC6",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC6",
    "index": 5,
    "inNavigations": [{
      "origin": "TC5"
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC6",
      "destination": "TC7",
      "name": "TC6_TC7",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC7",
    "index": 6,
    "inNavigations": [{
      "origin": "TC6"
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC7",
      "destination": "TC8",
      "name": "TC7_TC8",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC8",
    "index": 7,
    "inNavigations": [{
      "origin": "TC7"
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC8",
      "destination": "TC9",
      "name": "TC8_TC9",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC9",
    "index": 8,
    "inNavigations": [{
      "origin": "TC8"
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC9",
      "destination": "TC10",
      "name": "TC9_TC10",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "TC10",
    "index": 9,
    "inNavigations": [{
      "origin": "TC9"
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "TC10",
      "destination": "TC11",
      "name": "TC10_TC11",
      "isDefault": true,
      "conditions": []
    }]
  }]
};
Test.utils.data.participantLaboratory = {

  "objectType": null,
  "recruitmentNumber": 5003304,
  "collectGroupName": "DEFAULT",
  "tubes": [{
    "objectType": "Tube",
    "type": "GEL",
    "moment": "FASTING",
    "code": "341002263",
    "groupName": "DEFAULT",
    "aliquots": [{
      "objectType": "Aliquot",
      "code": 34200252,
      "name": "BIOSORO",
      "container": "CRYOTUBE",
      "role": "EXAM",
      "collectionData": {
        "objectType": "AliquotCollectionData",
        "metadata": "",
        "operator": "LALA@GMAIL.COM",
        "time": "2017-06-22T21:43:06.086Z"
      }
    }],
    "order": 1,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": true,
      "metadata": "",
      "operator": "lalala@gmail.com",
      "time": "2017-06-06T15:15:28.958Z"
    }
  }, {
    "objectType": "Tube",
    "type": "EDTA",
    "moment": "FASTING",
    "code": "361009386",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 2,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "FLUORIDE",
    "moment": "FASTING",
    "code": "361009389",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 3,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "GEL",
    "moment": "FASTING",
    "code": "361009381",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 4,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "GEL",
    "moment": "FASTING",
    "code": "361009382",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 5,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "GEL",
    "moment": "FASTING",
    "code": "361009383",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 6,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "EDTA",
    "moment": "FASTING",
    "code": "361009387",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 7,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "EDTA",
    "moment": "FASTING",
    "code": "361009388",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 8,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "GEL",
    "moment": "POST_OVERLOAD",
    "code": "361009390",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 9,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "GEL",
    "moment": "POST_OVERLOAD",
    "code": "361009391",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 10,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "FLUORIDE",
    "moment": "POST_OVERLOAD",
    "code": "361009385",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 11,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }, {
    "objectType": "Tube",
    "type": "URINE",
    "moment": "NONE",
    "code": "361009384",
    "groupName": "DEFAULT",
    "aliquots": [],
    "order": 12,
    "tubeCollectionData": {
      "objectType": "TubeCollectionData",
      "isCollected": false,
      "metadata": "",
      "operator": "",
      "time": null
    }
  }],
  "exams": []
};
Test.utils.data.laboratoryConfiguration = {
    "codeConfiguration" : {
        "waveNumberToken" : 3,
        "tubeToken" : 1,
        "palletToken" : 2,
        "cryotubeToken" : 3,
        "lastInsertion" : 1367
    },
    "aliquotConfiguration" : {
        "objectType" : "AliquotConfiguration",
        "aliquotCenterDescriptors" : [
            {
                "objectType" : "AliquotCenterDescriptor",
                "name" : "RS",
                "aliquotGroupDescriptors" : [
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "DEFAULT",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "URINE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "MIDDLE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ1",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro CQ1",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento Customizado CQ1",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "URINE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "MIDDLE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ2",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "MIDDLE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ3",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "MIDDLE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ4",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "MIDDLE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ5",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "MIDDLE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "objectType" : "AliquotCenterDescriptor",
                "name" : "MG",
                "aliquotGroupDescriptors" : [
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "DEFAULT",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "CITRATE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "URINE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ1",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "CITRATE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ2",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "CITRATE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "MIDDLE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ3",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "CITRATE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "MIDDLE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ4",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "CITRATE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ5",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "CITRATE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "objectType" : "AliquotCenterDescriptor",
                "name" : "ES",
                "aliquotGroupDescriptors" : [
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "DEFAULT",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "URINE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ1",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ2",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ3",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ4",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ5",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "objectType" : "AliquotCenterDescriptor",
                "name" : "RJ",
                "aliquotGroupDescriptors" : [
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "DEFAULT",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "URINE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ1",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ2",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ3",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ4",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ5",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "objectType" : "AliquotCenterDescriptor",
                "name" : "BA",
                "aliquotGroupDescriptors" : [
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "DEFAULT",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "URINE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ1",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ2",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ3",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ4",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ5",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA_DNA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "objectType" : "AliquotCenterDescriptor",
                "name" : "SP",
                "aliquotGroupDescriptors" : [
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "DEFAULT",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "URINE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ1",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ2",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR CQ2",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento Customizado CQ2",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "NONE",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "URINE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ3",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "POST_OVERLOAD",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "FLUORIDE",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ4",
                        "aliquotMomentDescriptors" : [
                            {
                                "objectType" : "AliquotMomentDescriptor",
                                "name" : "FASTING",
                                "aliquotTypesDescriptors" : [
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "GEL",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    },
                                    {
                                        "objectType" : "AliquotTypesDescriptor",
                                        "name" : "EDTA",
                                        "aliquots" : [
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "BIOSORO",
                                                "label" : "Bioquímica Soro",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "PCR",
                                                "label" : "PCR",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "FASTING_INSULINE",
                                                "label" : "Insulina Jejum",
                                                "role" : "EXAM"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            },
                                            {
                                                "objectType" : "AliquotDescriptor",
                                                "name" : "STORAGE",
                                                "label" : "Armazenamento",
                                                "role" : "STORAGE"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "objectType" : "AliquotGroupDescriptor",
                        "name" : "CQ5",
                        "aliquotMomentDescriptors" : []
                    }
                ]
            }
        ]
    },
    "tubeConfiguration" : {
        "tubeDescriptors" : [
            {
                "name" : "EDTA_DNA",
                "label" : "EDTA DNA",
                "color" : "#ffcc00"
            },
            {
                "name" : "EDTA",
                "label" : "EDTA",
                "color" : "#660066"
            },
            {
                "name" : "CITRATE",
                "label" : "Citrato",
                "color" : "#66ccff"
            },
            {
                "name" : "GEL",
                "label" : "Gel",
                "color" : "#ffcc00"
            },
            {
                "name" : "FLUORIDE",
                "label" : "Fluoreto",
                "color" : "#666666"
            },
            {
                "name" : "URINE",
                "label" : "Urina",
                "color" : "#ffffff"
            }
        ]
    },
    "collectMomentConfiguration" : {
        "momentDescriptors" : [
            {
                "name" : "FASTING",
                "label" : "Jejum"
            },
            {
                "name" : "MIDDLE",
                "label" : "Meio"
            },
            {
                "name" : "POST_OVERLOAD",
                "label" : "Pós"
            },
            {
                "name" : "NONE",
                "label" : ""
            }
        ]
    },
    "collectGroupConfiguration" : {
        "groupDescriptors" : [
            {
                "name" : "CQ1",
                "type" : "QUALITY_CONTROL",
                "tubeSet" : [
                    {
                        "count" : 3,
                        "type" : "GEL",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 1,
                        "type" : "FLUORIDE",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 2,
                        "type" : "EDTA",
                        "moment" : "FASTING"
                    }
                ]
            },
            {
                "name" : "MG",
                "type" : "CENTER",
                "tubeSet" : [
                    {
                        "count" : 2,
                        "type" : "EDTA_DNA",
                        "moment" : "NONE"
                    },
                    {
                        "count" : 1,
                        "type" : "CITRATE",
                        "moment" : "NONE"
                    }
                ]
            },
            {
                "name" : "DEFAULT",
                "type" : "DEFAULT",
                "tubeSet" : [
                    {
                        "count" : 1,
                        "type" : "FLUORIDE",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 4,
                        "type" : "GEL",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 1,
                        "type" : "URINE",
                        "moment" : "NONE"
                    },
                    {
                        "count" : 1,
                        "type" : "FLUORIDE",
                        "moment" : "POST_OVERLOAD"
                    },
                    {
                        "count" : 2,
                        "type" : "GEL",
                        "moment" : "POST_OVERLOAD"
                    },
                    {
                        "count" : 3,
                        "type" : "EDTA",
                        "moment" : "FASTING"
                    }
                ]
            },
            {
                "name" : "CQ2",
                "type" : "QUALITY_CONTROL",
                "tubeSet" : [
                    {
                        "count" : 3,
                        "type" : "EDTA",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 3,
                        "type" : "GEL",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 1,
                        "type" : "FLUORIDE",
                        "moment" : "FASTING"
                    }
                ]
            },
            {
                "name" : "BA",
                "type" : "CENTER",
                "tubeSet" : [
                    {
                        "count" : 3,
                        "type" : "EDTA_DNA",
                        "moment" : "NONE"
                    }
                ]
            },
            {
                "name" : "CQ3",
                "type" : "QUALITY_CONTROL",
                "tubeSet" : [
                    {
                        "count" : 1,
                        "type" : "FLUORIDE",
                        "moment" : "POST_OVERLOAD"
                    },
                    {
                        "count" : 3,
                        "type" : "GEL",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 2,
                        "type" : "EDTA",
                        "moment" : "FASTING"
                    }
                ]
            },
            {
                "name" : "RJ",
                "type" : "CENTER",
                "tubeSet" : [
                    {
                        "count" : 1,
                        "type" : "EDTA",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 1,
                        "type" : "FLUORIDE",
                        "moment" : "POST_OVERLOAD"
                    },
                    {
                        "count" : 1,
                        "type" : "GEL",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 2,
                        "type" : "EDTA_DNA",
                        "moment" : "NONE"
                    },
                    {
                        "count" : 1,
                        "type" : "FLUORIDE",
                        "moment" : "FASTING"
                    }
                ]
            },
            {
                "name" : "CQ4",
                "type" : "QUALITY_CONTROL",
                "tubeSet" : [
                    {
                        "count" : 3,
                        "type" : "GEL",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 2,
                        "type" : "EDTA",
                        "moment" : "FASTING"
                    }
                ]
            },
            {
                "name" : "RS",
                "type" : "CENTER",
                "tubeSet" : [
                    {
                        "count" : 2,
                        "type" : "EDTA_DNA",
                        "moment" : "NONE"
                    },
                    {
                        "count" : 1,
                        "type" : "GEL",
                        "moment" : "MIDDLE"
                    },
                    {
                        "count" : 1,
                        "type" : "FLUORIDE",
                        "moment" : "MIDDLE"
                    }
                ]
            },
            {
                "name" : "ES",
                "type" : "CENTER",
                "tubeSet" : [
                    {
                        "count" : 2,
                        "type" : "GEL",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 1,
                        "type" : "GEL",
                        "moment" : "POST_OVERLOAD"
                    },
                    {
                        "count" : 1,
                        "type" : "EDTA",
                        "moment" : "FASTING"
                    },
                    {
                        "count" : 2,
                        "type" : "EDTA_DNA",
                        "moment" : "NONE"
                    }
                ]
            }
        ]
    },
    "labelPrintConfiguration" : {
        "CQ1" : [
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ1",
                "type" : "FLUORIDE",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ1",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ1",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ1",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ1",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ1",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "URINE",
                "moment" : "NONE"
            }
        ],
        "CQ3" : [
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ3",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ3",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ3",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ3",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ3",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "CQ3",
                "type" : "FLUORIDE",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "URINE",
                "moment" : "NONE"
            }
        ],
        "CQ2" : [
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ2",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ2",
                "type" : "FLUORIDE",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ2",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ2",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ2",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ2",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ2",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "URINE",
                "moment" : "NONE"
            }
        ],
        "CQ5" : [
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "URINE",
                "moment" : "NONE"
            }
        ],
        "CQ4" : [
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ4",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ4",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ4",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ4",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "CQ4",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "URINE",
                "moment" : "NONE"
            }
        ],
        "DEFAULT" : [
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "EDTA",
                "moment" : "FASTING"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "GEL",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "FLUORIDE",
                "moment" : "POST_OVERLOAD"
            },
            {
                "groupName" : "DEFAULT",
                "type" : "URINE",
                "moment" : "NONE"
            }
        ]
    },
    "metadataConfiguration" : [
        {
            "objectType" : "MetadataConfiguration",
            "extractionValue" : ".vp",
            "label" : {
                "ptBR" : {
                    "extends" : "StudioObject",
                    "objectType" : "Label",
                    "oid" : "",
                    "plainText" : "Volume Parcial",
                    "formattedText" : ""
                },
                "enUS" : {
                    "extends" : "StudioObject",
                    "objectType" : "Label",
                    "oid" : "",
                    "plainText" : "",
                    "formattedText" : ""
                },
                "esES" : {
                    "extends" : "StudioObject",
                    "objectType" : "Label",
                    "oid" : "",
                    "plainText" : "",
                    "formattedText" : ""
                }
            }
        },
        {
            "objectType" : "MetadataConfiguration",
            "extractionValue" : ".nc",
            "label" : {
                "ptBR" : {
                    "extends" : "StudioObject",
                    "objectType" : "Label",
                    "oid" : "",
                    "plainText" : "Não coletado",
                    "formattedText" : ""
                },
                "enUS" : {
                    "extends" : "StudioObject",
                    "objectType" : "Label",
                    "oid" : "",
                    "plainText" : "",
                    "formattedText" : ""
                },
                "esES" : {
                    "extends" : "StudioObject",
                    "objectType" : "Label",
                    "oid" : "",
                    "plainText" : "",
                    "formattedText" : ""
                }
            }
        }
    ]
};
