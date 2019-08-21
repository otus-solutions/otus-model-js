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
  "dataSources": [],
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
    },
    "options": {
      "extends": "StudioObject",
      "objectType": "QuestionOption",
      "data": {}
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
      "origin": "TC1",
      "index": 0
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
      "origin": "TC2",
      "index": 1
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
      "origin": "TC3",
      "index": 2
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
      "origin": "TC4",
      "index": 3
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
      "origin": "TC5",
      "index": 4
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
      "origin": "TC6",
      "index": 5
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
      "origin": "TC7",
      "index": 6
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
      "origin": "TC8",
      "index": 7
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
      "origin": "TC9",
      "index": 8
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
  }],
  staticVariableList: [],
  surveyItemGroupList: []
};


/* Template DIC
*   Survey Groups
*   Every Survey Item and every validation
*   Routes
* */
Test.utils.data.templateExampleWithAllQuestionsAndValidations = {
  "extents": "StudioObject",
  "objectType": "Survey",
  "oid": "dXNlclVVSUQ6W3VuZGVmaW5lZF1zdXJ2ZXlVVUlEOlthNzhiZWZkMC05NjhhLTExZTktODMzYi01ZDE5NmJhNWQzOTFdcmVwb3NpdG9yeVVVSUQ6WyBOb3QgZG9uZSB5ZXQgXQ==",
  "identity": {
    "extents": "StudioObject",
    "objectType": "SurveyIdentity",
    "name": "OMJ-55",
    "acronym": "DIC",
    "recommendedTo": "",
    "description": "",
    "keywords": []
  },
  "metainfo": {
    "extents": "StudioObject",
    "objectType": "SurveyMetaInfo",
    "creationDatetime": "2019-06-24T14:16:27.213Z",
    "otusStudioVersion": ""
  },
  "dataSources": [
    {
      "objectType": "DataSourceDefinition",
      "id": "portoalegre",
      "name": "Porto Alegre",
      "bindTo": [
        "DIC11"
      ]
    }
  ],
  "itemContainer": [
    {
      "extents": "SurveyItem",
      "objectType": "SingleSelectionQuestion",
      "templateID": "DIC1",
      "customID": "DIC1",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question singleSelect",
          "formattedText": "question singleSelect"
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
      "options": [
        {
          "extents": "StudioObject",
          "objectType": "AnswerOption",
          "value": 1,
          "extractionValue": 1,
          "dataType": "Integer",
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "sim",
              "formattedText": "sim"
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
        },
        {
          "extents": "StudioObject",
          "objectType": "AnswerOption",
          "value": 2,
          "extractionValue": 2,
          "dataType": "Integer",
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "não",
              "formattedText": "não"
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
        }
      ],
      "metadata": {
        "extents": "StudioObject",
        "objectType": "MetadataGroup",
        "options": [
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 1,
            "extractionValue": 1,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDA",
                "formattedText": "MDA"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 2,
            "extractionValue": 2,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDB",
                "formattedText": "MDB"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 3,
            "extractionValue": 3,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDC",
                "formattedText": "MDC"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 4,
            "extractionValue": 4,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDD",
                "formattedText": "MDD"
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
          }
        ]
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
          "accept": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "accept",
            "data": {
              "reference": true
            }
          }
        }
      }
    },
    {
      "extents": "SurveyItem",
      "objectType": "IntegerQuestion",
      "templateID": "DIC2",
      "customID": "DIC2",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question integer",
          "formattedText": "question integer"
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
        "options": [
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 1,
            "extractionValue": 1,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDA",
                "formattedText": "MDA"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 2,
            "extractionValue": 2,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDB",
                "formattedText": "MDB"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 3,
            "extractionValue": 3,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDC",
                "formattedText": "MDC"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 4,
            "extractionValue": 4,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDD",
                "formattedText": "MDD"
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
          }
        ]
      },
      "unit": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Unit",
          "oid": "",
          "plainText": "",
          "formattedText": ""
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
          "lowerLimit": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "lowerLimit",
            "data": {
              "canBeIgnored": true,
              "reference": 1
            }
          },
          "upperLimit": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "upperLimit",
            "data": {
              "canBeIgnored": true,
              "reference": 4
            }
          },
          "accept": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "accept",
            "data": {
              "reference": true
            }
          },
          "distinct": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "distinct",
            "data": {
              "canBeIgnored": true,
              "reference": 3
            }
          },
          "precision": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "precision",
            "data": {
              "canBeIgnored": true,
              "reference": 1
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
                "end": 2
              }
            }
          }
        }
      }
    },
    {
      "extents": "SurveyItem",
      "objectType": "CalendarQuestion",
      "templateID": "DIC3",
      "customID": "DIC3",
      "dataType": "LocalDate",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question date",
          "formattedText": "question date"
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
        "options": [
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 1,
            "extractionValue": 1,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDA",
                "formattedText": "MDA"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 2,
            "extractionValue": 2,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDB",
                "formattedText": "MDB"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 3,
            "extractionValue": 3,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDC",
                "formattedText": "MDC"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 4,
            "extractionValue": 4,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDD",
                "formattedText": "MDD"
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
          }
        ]
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
          "minDate": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "minDate",
            "data": {
              "canBeIgnored": true,
              "reference": {
                "objectType": "ImmutableDate",
                "value": "2019-06-01 00:00:00.000"
              }
            }
          },
          "maxDate": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "maxDate",
            "data": {
              "canBeIgnored": true,
              "reference": {
                "objectType": "ImmutableDate",
                "value": "2019-06-30 00:00:00.000"
              }
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
          },
          "rangeDate": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "rangeDate",
            "data": {
              "canBeIgnored": true,
              "reference": {
                "initial": {
                  "objectType": "ImmutableDate",
                  "value": "2019-06-23 00:00:00.000"
                },
                "end": {
                  "objectType": "ImmutableDate",
                  "value": "2019-10-26 00:00:00.000"
                }
              }
            }
          }
        }
      }
    },
    {
      "extents": "SurveyItem",
      "objectType": "GridIntegerQuestion",
      "templateID": "DIC15",
      "customID": "DIC15",
      "metadata": {
        "extents": "StudioObject",
        "objectType": "MetadataGroup",
        "options": [
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 1,
            "extractionValue": 1,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDA",
                "formattedText": "MDA"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 2,
            "extractionValue": 2,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDB",
                "formattedText": "MDB"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 3,
            "extractionValue": 3,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDC",
                "formattedText": "MDC"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 4,
            "extractionValue": 4,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDD",
                "formattedText": "MDD"
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
          }
        ]
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
      },
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question GridNumber",
          "formattedText": "question GridNumber"
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
      "lines": [
        {
          "extents": "StudioObject",
          "objectType": "GridIntegerLine",
          "gridIntegerList": [
            {
              "extents": "SurveyItem",
              "objectType": "GridInteger",
              "templateID": "DIC15a",
              "customID": "DIC15a",
              "dataType": "Integer",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "GN1",
                  "formattedText": "GN1"
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
              "layout": {
                "extents": "StudioObject",
                "objectType": "LayoutGrid",
                "width": 100
              },
              "unit": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Unit",
                  "oid": "",
                  "plainText": "10",
                  "formattedText": "10"
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
              }
            },
            {
              "extents": "SurveyItem",
              "objectType": "GridInteger",
              "templateID": "DIC15b",
              "customID": "DIC15b",
              "dataType": "Integer",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "GN2",
                  "formattedText": "GN2"
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
              "layout": {
                "extents": "StudioObject",
                "objectType": "LayoutGrid",
                "width": 100
              },
              "unit": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Unit",
                  "oid": "",
                  "plainText": "20",
                  "formattedText": "20"
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
              }
            },
            {
              "extents": "SurveyItem",
              "objectType": "GridInteger",
              "templateID": "DIC15c",
              "customID": "DIC15c",
              "dataType": "Integer",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "GN3",
                  "formattedText": "GN3"
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
              "layout": {
                "extents": "StudioObject",
                "objectType": "LayoutGrid",
                "width": 100
              },
              "unit": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Unit",
                  "oid": "",
                  "plainText": "30",
                  "formattedText": "30"
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
              }
            }
          ]
        }
      ]
    },
    {
      "extents": "SurveyItem",
      "objectType": "DecimalQuestion",
      "templateID": "DIC4",
      "customID": "DIC4",
      "dataType": "Decimal",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question decimal",
          "formattedText": "question decimal"
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
          "oid": "",
          "plainText": "",
          "formattedText": ""
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
          "upperLimit": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "upperLimit",
            "data": {
              "canBeIgnored": true,
              "reference": 9
            }
          },
          "lowerLimit": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "lowerLimit",
            "data": {
              "canBeIgnored": true,
              "reference": 3
            }
          },
          "scale": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "scale",
            "data": {
              "canBeIgnored": true,
              "reference": 3
            }
          },
          "in": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "in",
            "data": {
              "canBeIgnored": true,
              "reference": {
                "initial": 5,
                "end": 6
              }
            }
          }
        }
      }
    },
    {
      "extents": "SurveyItem",
      "objectType": "CheckboxQuestion",
      "templateID": "DIC5",
      "customID": "DIC5",
      "dataType": "Array",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question checkbox",
          "formattedText": "question checkbox"
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
      "options": [
        {
          "extents": "StudioObject",
          "objectType": "CheckboxAnswerOption",
          "optionID": "DIC5a",
          "customOptionID": "DIC5a",
          "dataType": "Boolean",
          "value": false,
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "lbA",
              "formattedText": "lbA"
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
        },
        {
          "extents": "StudioObject",
          "objectType": "CheckboxAnswerOption",
          "optionID": "DIC5b",
          "customOptionID": "DIC5b",
          "dataType": "Boolean",
          "value": false,
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "lbB",
              "formattedText": "lbB"
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
        },
        {
          "extents": "StudioObject",
          "objectType": "CheckboxAnswerOption",
          "optionID": "DIC5c",
          "customOptionID": "DIC5c",
          "dataType": "Boolean",
          "value": false,
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "lbC",
              "formattedText": "lbC"
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
        },
        {
          "extents": "StudioObject",
          "objectType": "CheckboxAnswerOption",
          "optionID": "DIC5d",
          "customOptionID": "DIC5d",
          "dataType": "Boolean",
          "value": false,
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "lbD",
              "formattedText": "lbD"
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
        }
      ],
      "metadata": {
        "extents": "StudioObject",
        "objectType": "MetadataGroup",
        "options": [
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 1,
            "extractionValue": 1,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDA",
                "formattedText": "MDA"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 2,
            "extractionValue": 2,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDB",
                "formattedText": "MDB"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 3,
            "extractionValue": 3,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDC",
                "formattedText": "MDC"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 4,
            "extractionValue": 4,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDD",
                "formattedText": "MDD"
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
          }
        ]
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
    },
    {
      "extents": "SurveyItem",
      "objectType": "TextQuestion",
      "templateID": "DIC6",
      "customID": "DIC6",
      "dataType": "String",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question text",
          "formattedText": "question text"
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
          "minLength": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "minLength",
            "data": {
              "canBeIgnored": true,
              "reference": 1
            }
          },
          "maxLength": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "maxLength",
            "data": {
              "canBeIgnored": true,
              "reference": 2
            }
          }
        }
      }
    },
    {
      "extents": "SurveyItem",
      "objectType": "EmailQuestion",
      "templateID": "DIC7",
      "customID": "DIC7",
      "dataType": "String",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question email",
          "formattedText": "question email"
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
    },
    {
      "extents": "SurveyItem",
      "objectType": "TimeQuestion",
      "templateID": "DIC8",
      "customID": "DIC8",
      "dataType": "LocalTime",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question time",
          "formattedText": "question time"
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
          },
          "minTime": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "minTime",
            "data": {
              "canBeIgnored": true,
              "reference": {
                "objectType": "ImmutableDate",
                "value": "1970-01-01 01:00:00.000"
              }
            }
          },
          "maxTime": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "maxTime",
            "data": {
              "canBeIgnored": true,
              "reference": {
                "objectType": "ImmutableDate",
                "value": "1970-01-01 02:00:00.000"
              }
            }
          }
        }
      },
      "options": {
        "extends": "StudioObject",
        "objectType": "QuestionOption",
        "data": {}
      }
    },
    {
      "extents": "SurveyItem",
      "objectType": "PhoneQuestion",
      "templateID": "DIC9",
      "customID": "DIC9",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question fone",
          "formattedText": "question fone"
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
    },
    {
      "extents": "SurveyItem",
      "objectType": "AutocompleteQuestion",
      "templateID": "DIC11",
      "customID": "DIC11",
      "dataType": "String",
      "dataSources": [
        "Porto Alegre"
      ],
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question autocomplete",
          "formattedText": "question autocomplete"
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
          },
          "accept": {
            "extends": "StudioObject",
            "objectType": "Rule",
            "validatorType": "accept",
            "data": {
              "reference": true
            }
          }
        }
      }
    },
    {
      "extents": "SurveyItem",
      "objectType": "FileUploadQuestion",
      "templateID": "DIC12",
      "customID": "DIC12",
      "dataType": "Binary",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question fileUpload",
          "formattedText": "question fileUpload"
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
    },
    {
      "extents": "SurveyItem",
      "objectType": "GridTextQuestion",
      "templateID": "DIC13",
      "customID": "DIC13",
      "metadata": {
        "extents": "StudioObject",
        "objectType": "MetadataGroup",
        "options": [
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 1,
            "extractionValue": 1,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDA",
                "formattedText": "MDA"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 2,
            "extractionValue": 2,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDB",
                "formattedText": "MDB"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 3,
            "extractionValue": 3,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDC",
                "formattedText": "MDC"
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
          },
          {
            "extends": "StudioObject",
            "objectType": "MetadataAnswer",
            "dataType": "Integer",
            "value": 4,
            "extractionValue": 4,
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "MDD",
                "formattedText": "MDD"
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
          }
        ]
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
      },
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question gridText",
          "formattedText": "question gridText"
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
      "lines": [
        {
          "extents": "StudioObject",
          "objectType": "GridTextLine",
          "gridTextList": [
            {
              "extents": "SurveyItem",
              "objectType": "GridText",
              "templateID": "DIC13a",
              "customID": "DIC13a",
              "dataType": "String",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "GT1",
                  "formattedText": "GT1"
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
              "layout": {
                "extents": "StudioObject",
                "objectType": "LayoutGrid",
                "width": 100
              },
              "unit": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Unit",
                  "oid": "",
                  "plainText": "A",
                  "formattedText": "A"
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
              }
            },
            {
              "extents": "SurveyItem",
              "objectType": "GridText",
              "templateID": "DIC13b",
              "customID": "DIC13b",
              "dataType": "String",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "GT2",
                  "formattedText": "GT2"
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
              "layout": {
                "extents": "StudioObject",
                "objectType": "LayoutGrid",
                "width": 100
              },
              "unit": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Unit",
                  "oid": "",
                  "plainText": "B",
                  "formattedText": "B"
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
              }
            },
            {
              "extents": "SurveyItem",
              "objectType": "GridText",
              "templateID": "DIC13c",
              "customID": "DIC13c",
              "dataType": "String",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "GT3",
                  "formattedText": "GT3"
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
              "layout": {
                "extents": "StudioObject",
                "objectType": "LayoutGrid",
                "width": 100
              },
              "unit": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Unit",
                  "oid": "",
                  "plainText": "C",
                  "formattedText": "C"
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
              }
            }
          ]
        }
      ]
    },
    {
      "extents": "SurveyItem",
      "objectType": "TextItem",
      "templateID": "DIC14",
      "customID": "DIC14",
      "dataType": "String",
      "value": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question itemText",
          "formattedText": "question itemText"
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
    },
    {
      "extents": "SurveyItem",
      "objectType": "ImageItem",
      "templateID": "DIC16",
      "customID": "DIC16",
      "dataType": "String",
      "url": "",
      "footer": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "question image Item",
          "formattedText": "question image Item"
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
    }
  ],
  "navigationList": [
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "BEGIN NODE",
      "index": 0,
      "inNavigations": [],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "BEGIN NODE",
          "destination": "DIC1",
          "name": "BEGIN NODE_DIC1",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "END NODE",
      "index": 1,
      "inNavigations": [
        null,
        {
          "origin": "DIC11",
          "index": 12
        },
        {
          "origin": "DIC7",
          "index": 9
        },
        {
          "origin": "DIC16",
          "index": 16
        }
      ],
      "routes": []
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC1",
      "index": 2,
      "inNavigations": [
        {
          "origin": "BEGIN NODE",
          "index": 0
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC1",
          "destination": "DIC2",
          "name": "DIC1_DIC2",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC2",
      "index": 3,
      "inNavigations": [
        {
          "origin": "DIC1",
          "index": 2
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC2",
          "destination": "DIC3",
          "name": "DIC2_DIC3",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC3",
      "index": 4,
      "inNavigations": [
        {
          "origin": "DIC2",
          "index": 3
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC3",
          "destination": "DIC5",
          "name": "DIC3_DIC5",
          "isDefault": true,
          "conditions": []
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC3",
          "destination": "DIC7",
          "name": "DIC3_DIC7",
          "isDefault": false,
          "conditions": [
            {
              "extents": "StudioObject",
              "objectType": "RouteCondition",
              "name": "ROUTE_CONDITION_0",
              "rules": [
                {
                  "extents": "SurveyTemplateObject",
                  "objectType": "Rule",
                  "when": "DIC3",
                  "operator": "equal",
                  "answer": "17/07/2017",
                  "isMetadata": false,
                  "isCustom": true
                }
              ]
            }
          ]
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC3",
          "destination": "DIC14",
          "name": "DIC3_DIC14",
          "isDefault": false,
          "conditions": [
            {
              "extents": "StudioObject",
              "objectType": "RouteCondition",
              "name": "ROUTE_CONDITION_0",
              "rules": [
                {
                  "extents": "SurveyTemplateObject",
                  "objectType": "Rule",
                  "when": "DIC1",
                  "operator": "equal",
                  "answer": 1,
                  "isMetadata": false,
                  "isCustom": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC15",
      "index": 5,
      "inNavigations": [],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC15",
          "destination": "DIC4",
          "name": "DIC15_DIC4",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC4",
      "index": 6,
      "inNavigations": [
        {
          "origin": "DIC15",
          "index": 5
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC4",
          "destination": "DIC11",
          "name": "DIC4_DIC11",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC5",
      "index": 7,
      "inNavigations": [
        {
          "origin": "DIC3",
          "index": 4
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC5",
          "destination": "DIC6",
          "name": "DIC5_DIC6",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC6",
      "index": 8,
      "inNavigations": [
        {
          "origin": "DIC5",
          "index": 7
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC6",
          "destination": "DIC7",
          "name": "DIC6_DIC7",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC7",
      "index": 9,
      "inNavigations": [
        {
          "origin": "DIC6",
          "index": 8
        },
        {
          "origin": "DIC3",
          "index": 4
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC7",
          "destination": "END NODE",
          "name": "DIC7_END NODE",
          "isDefault": true,
          "conditions": []
        },
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC7",
          "destination": "DIC8",
          "name": "DIC7_DIC8",
          "isDefault": false,
          "conditions": [
            {
              "extents": "StudioObject",
              "objectType": "RouteCondition",
              "name": "ROUTE_CONDITION_0",
              "rules": [
                {
                  "extents": "SurveyTemplateObject",
                  "objectType": "Rule",
                  "when": "DIC7",
                  "operator": "equal",
                  "answer": "7",
                  "isMetadata": false,
                  "isCustom": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC8",
      "index": 10,
      "inNavigations": [
        {
          "origin": "DIC7",
          "index": 9
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC8",
          "destination": "DIC9",
          "name": "DIC8_DIC9",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC9",
      "index": 11,
      "inNavigations": [
        {
          "origin": "DIC8",
          "index": 10
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC9",
          "destination": "DIC12",
          "name": "DIC9_DIC12",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC11",
      "index": 12,
      "inNavigations": [
        null,
        {
          "origin": "DIC4",
          "index": 6
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC11",
          "destination": "END NODE",
          "name": "DIC11_END NODE",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC12",
      "index": 13,
      "inNavigations": [
        {
          "origin": "DIC9",
          "index": 11
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC12",
          "destination": "DIC13",
          "name": "DIC12_DIC13",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC13",
      "index": 14,
      "inNavigations": [
        {
          "origin": "DIC12",
          "index": 13
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC13",
          "destination": "DIC14",
          "name": "DIC13_DIC14",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC14",
      "index": 15,
      "inNavigations": [
        {
          "origin": "DIC13",
          "index": 14
        },
        {
          "origin": "DIC3",
          "index": 4
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC14",
          "destination": "DIC16",
          "name": "DIC14_DIC16",
          "isDefault": true,
          "conditions": []
        }
      ]
    },
    {
      "extents": "SurveyTemplateObject",
      "objectType": "Navigation",
      "origin": "DIC16",
      "index": 16,
      "inNavigations": [
        {
          "origin": "DIC14",
          "index": 15
        }
      ],
      "routes": [
        {
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "DIC16",
          "destination": "END NODE",
          "name": "DIC16_END NODE",
          "isDefault": true,
          "conditions": []
        }
      ]
    }
  ],
  "staticVariableList": [],
  "surveyItemGroupList": [
    {
      "objectType": "SurveyItemGroup",
      "start": "DIC1",
      "end": "DIC3",
      "members": [
        {
          id: "DIC1",
          position: 'start'
        },
        {
          id: "DIC2",
          position: 'middle'
        },
        {
          id: "DIC3",
          position: 'end'
        }
      ]
    },
    {
      "objectType": "SurveyItemGroup",
      "start": "DIC15",
      "end": "DIC11",
      "members": [
        {
          id: "DIC15",
          position: 'start'
        },
        {
          id: "DIC4",
          position: 'middle'
        },
        {
          id: "DIC11",
          position: 'end'
        }
      ]
    }

  ]
};
