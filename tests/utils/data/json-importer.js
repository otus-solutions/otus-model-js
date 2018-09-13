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

Test.utils.data.ruleItem = {
  "extents": "SurveyTemplateObject",
  "objectType": "Rule",
  "when": "today",
  "operator": "otus",
  "answer": 1,
  "isMetadata": false,
  "isCustom": false
}

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
}

Test.utils.data.ImageItem = {
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
}

Test.utils.data.calendarItemJson = {
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
}

Test.utils.data.survey = {
  "extents": "StudioObject",
  "objectType": "SurveyForm",
  "_id": "dXNlclVVSUQ6W3VuZGVmaW5lZF1zdXJ2ZXlVVUlEOls5N2M4NDVmMC1mODQ3LTExZTYtOGI2NC1iZDIyZTYyYzA4YTJdcmVwb3NpdG9yeVVVSUQ6WyBOb3QgZG9uZSB5ZXQgXQ==",
  "sender": "diogo.rosas.ferreira@gmail.com",
  "sendingDate": "2017-04-12T02:57:33.873Z",
  "surveyFormType": "FORM_INTERVIEW",
  "surveyTemplate": {
    "extents": "StudioObject",
    "objectType": "Survey",
    "oid": "dXNlclVVSUQ6W3VuZGVmaW5lZF1zdXJ2ZXlVVUlEOls5N2M4NDVmMC1mODQ3LTExZTYtOGI2NC1iZDIyZTYyYzA4YTJdcmVwb3NpdG9yeVVVSUQ6WyBOb3QgZG9uZSB5ZXQgXQ==",
    "identity": {
      "extents": "StudioObject",
      "objectType": "SurveyIdentity",
      "name": "ANTROPOMETRIA",
      "acronym": "ANTC",
      "recommendedTo": "",
      "description": "Mapa: 2C.9_ANT_2017-02-26",
      "keywords": []
    },
    "metainfo": {
      "extents": "StudioObject",
      "objectType": "SurveyMetaInfo",
      "creationDatetime": "2017-02-21T15:08:25.424Z",
      "otusStudioVersion": ""
    },
    "dataSources": [],
    "itemContainer": [
      {
        "extents": "SurveyItem",
        "objectType": "DecimalQuestion",
        "templateID": "ANTC1",
        "customID": "PASC2",
        "dataType": "Decimal",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "01. Circunferência do Pescoço:n",
            "formattedText": "<div>01. Circunferência do Pescoço:</div>"
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
              "extractionValue": ".Q",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não quer responder",
                  "formattedText": "Não quer responder"
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
              "extractionValue": ".S",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não sabe",
                  "formattedText": "Não sabe"
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
              "extractionValue": ".A",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não se aplica",
                  "formattedText": "Não se aplica"
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
              "extractionValue": ".F",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não há dados",
                  "formattedText": "Não há dados"
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
            "plainText": "cm",
            "formattedText": "cm"
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
            "scale": {
              "extends": "StudioObject",
              "objectType": "Rule",
              "validatorType": "scale",
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
                "reference": 50
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
        "objectType": "SingleSelectionQuestion",
        "templateID": "ANTC2",
        "customID": "ANTCalt",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Alteração do Protocolo:n",
            "formattedText": "<div>Alteração do Protocolo:</div>"
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
            "extractionValue": "1",
            "dataType": "Integer",
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "Sim",
                "formattedText": "Sim"
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
            "extractionValue": "0",
            "dataType": "Integer",
            "label": {
              "ptBR": {
                "extends": "StudioObject",
                "objectType": "Label",
                "oid": "",
                "plainText": "Não",
                "formattedText": "Não"
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
              "extractionValue": ".Q",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não quer respondern",
                  "formattedText": "<div>Não quer responder</div>"
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
              "extractionValue": ".S",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não sabe",
                  "formattedText": "Não sabe"
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
              "extractionValue": ".A",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não se aplica",
                  "formattedText": "Não se aplica"
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
              "extractionValue": ".F",
              "label": {
                "ptBR": {
                  "extends": "StudioObject",
                  "objectType": "Label",
                  "oid": "",
                  "plainText": "Não há dados",
                  "formattedText": "Não há dados"
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
        "templateID": "ANTC3",
        "customID": "ANTCaltq",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Alteração do Protocolo - Qual: n",
            "formattedText": "<div><span style='letter-spacing: 0.01em;'>Alteração do Protocolo - Qual:&nbsp;</span><br></div>"
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
                "reference": 300
              }
            }
          }
        }
      },
      {
        "extents": "SurveyItem",
        "objectType": "TextItem",
        "templateID": "ANTC4",
        "customID": "ANTCZ",
        "dataType": "String",
        "value": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Obrigado(a).",
            "formattedText": "<i>Obrigado(a).</i>"
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
            "destination": "ANTC1",
            "name": "BEGIN NODE_ANTC1",
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
          {
            "origin": "ANTC4",
            "index": 5
          }
        ],
        "routes": []
      },
      {
        "extents": "SurveyTemplateObject",
        "objectType": "Navigation",
        "origin": "ANTC1",
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
            "origin": "ANTC1",
            "destination": "ANTC2",
            "name": "ANTC1_ANTC2",
            "isDefault": true,
            "conditions": []
          }
        ]
      },
      {
        "extents": "SurveyTemplateObject",
        "objectType": "Navigation",
        "origin": "ANTC2",
        "index": 3,
        "inNavigations": [
          {
            "origin": "ANTC1",
            "index": 2
          }
        ],
        "routes": [
          {
            "extents": "SurveyTemplateObject",
            "objectType": "Route",
            "origin": "ANTC2",
            "destination": "ANTC4",
            "name": "ANTC2_ANTC4",
            "isDefault": true,
            "conditions": []
          },
          {
            "extents": "SurveyTemplateObject",
            "objectType": "Route",
            "origin": "ANTC2",
            "destination": "ANTC3",
            "name": "ANTC2_ANTC3",
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
                    "when": "ANTC2",
                    "operator": "equal",
                    "answer": "1",
                    "isMetadata": false
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
        "origin": "ANTC3",
        "index": 4,
        "inNavigations": [
          {
            "origin": "ANTC2",
            "index": 3
          }
        ],
        "routes": [
          {
            "extents": "SurveyTemplateObject",
            "objectType": "Route",
            "origin": "ANTC3",
            "destination": "ANTC4",
            "name": "ANTC3_ANTC4",
            "isDefault": true,
            "conditions": []
          }
        ]
      },
      {
        "extents": "SurveyTemplateObject",
        "objectType": "Navigation",
        "origin": "ANTC4",
        "index": 5,
        "inNavigations": [
          {
            "origin": "ANTC3",
            "index": 4
          },
          {
            "origin": "ANTC2",
            "index": 3
          }
        ],
        "routes": [
          {
            "extents": "SurveyTemplateObject",
            "objectType": "Route",
            "origin": "ANTC4",
            "destination": "END NODE",
            "name": "ANTC4_END NODE",
            "isDefault": true,
            "conditions": []
          }
        ]
      }
    ]
  },
  "version": 1,
  "isDiscarded": true
};


Test.utils.data.otusLoggedUser = {
  "name": "Fulano",
  "surname": "Detal",
  "fieldCenter": {},
  "phone": "51999999999",
  "email": "fulanodetal@mail.com",
  "token": "edasEQW"
};

Test.utils.data.SurveyTemplate = {
  "extents": "SurveyItem",
  "objectType": "SingleSelectionQuestion",
  "templateID": "MEDC9",
  "customID": "MEDC9c_11",
  "dataType": "Integer",
  "label": {
    "ptBR": {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "05c. Unidade de tempo:",
      "formattedText": "05c. Unidade de tempo:"
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
    "extractionValue": 1,
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Dia",
        "formattedText": "Dia"
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
    "extractionValue": 2,
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Semana",
        "formattedText": "Semana"
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
    "value": 3,
    "extractionValue": 3,
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Mês",
        "formattedText": "Mês"
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
      "extractionValue": ".Q",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não quer responder",
          "formattedText": "Não quer responder"
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
      "extractionValue": ".S",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não sabe",
          "formattedText": "Não sabe"
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
      "extractionValue": ".A",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não se aplica",
          "formattedText": "Não se aplica"
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
      "value": 4,
      "extractionValue": ".F",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não há dados",
          "formattedText": "Não há dados"
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
}

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
  "dataSources" : [],
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
        "mandatory":{
          "extends":"StudioObject",
          "objectType":"Rule",
          "validatorType":"mandatory",
          "data": {
            "canBeIgnored":false,
            "reference":true
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
      "name": "BIOCHEMICAL_SERUM",
      "container": "CRYOTUBE",
      "role": "EXAM",
      "aliquotCollectionData": {
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
  "codeConfiguration": {
    "waveNumberToken": 3,
    "tubeToken": 1,
    "palletToken": 4,
    "cryotubeToken": 3,
    "lastInsertion": 2673
  },
  "aliquotConfiguration": {
    "objectType": "AliquotConfiguration",
    "aliquotCenterDescriptors": [{
      "objectType": "AliquotCenterDescriptor",
      "name": "RS",
      "aliquotGroupDescriptors": [{
        "objectType": "AliquotGroupDescriptor",
        "name": "DEFAULT",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE_LOCAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HEMOGRAM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BUFFY_COAT_RS",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BUFFY_COAT_MG",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_LOCAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_LOCAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_LOCAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "LOCAL_DNA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "DNA",
              "role": "STORAGE"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "MIDDLE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_1H",
              "role": "EXAM"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_1H",
              "role": "EXAM"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ1",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE LOCAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "DNA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "LOCAL_DNA",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ2",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE_LOCAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "DNA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "LOCAL_DNA",
              "role": "STORAGE"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "MIDDLE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_1H",
              "role": "EXAM"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_1H",
              "role": "EXAM"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ3",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": []
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": []
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": []
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_LOCAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": []
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "DNA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "LOCAL_DNA",
              "role": "STORAGE"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "MIDDLE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_1H",
              "role": "EXAM"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_1H",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_1H",
              "role": "EXAM"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ4",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": []
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": []
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": []
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": []
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": []
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "DNA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "LOCAL_DNA",
              "role": "STORAGE"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "MIDDLE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_1H",
              "role": "EXAM"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_1H",
              "role": "EXAM"
            }]
          }]
        }]
      }],
      "aliquotCodeSize": 10
    }, {
      "objectType": "AliquotCenterDescriptor",
      "name": "MG",
      "aliquotGroupDescriptors": [{
        "objectType": "AliquotGroupDescriptor",
        "name": "DEFAULT",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BUFFY_COAT",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "CITRATE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ1",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BUFFY_COAT",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "CITRATE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ2",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BUFFY_COAT",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "CITRATE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ3",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BUFFY_COAT",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "CITRATE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ4",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BUFFY_COAT",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "CITRATE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "CITRATED_PLASMA",
              "role": "STORAGE"
            }]
          }]
        }]
      }],
      "aliquotCodeSize": 9
    }, {
      "objectType": "AliquotCenterDescriptor",
      "name": "ES",
      "aliquotGroupDescriptors": [{
        "objectType": "AliquotGroupDescriptor",
        "name": "DEFAULT",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ1",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ2",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ3",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ4",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }],
      "aliquotCodeSize": 9
    }, {
      "objectType": "AliquotCenterDescriptor",
      "name": "RJ",
      "aliquotGroupDescriptors": [{
        "objectType": "AliquotGroupDescriptor",
        "name": "DEFAULT",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ1",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ2",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ3",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ4",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }],
      "aliquotCodeSize": 9
    }, {
      "objectType": "AliquotCenterDescriptor",
      "name": "BA",
      "aliquotGroupDescriptors": [{
        "objectType": "AliquotGroupDescriptor",
        "name": "DEFAULT",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ1",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ2",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ3",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ4",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA_CENTRAL",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA_DNA",
            "aliquots": []
          }]
        }]
      }],
      "aliquotCodeSize": 9
    }, {
      "objectType": "AliquotCenterDescriptor",
      "name": "SP",
      "aliquotGroupDescriptors": [{
        "objectType": "AliquotGroupDescriptor",
        "name": "DEFAULT",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ1",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ2",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ3",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }, {
        "objectType": "AliquotGroupDescriptor",
        "name": "CQ4",
        "aliquotMomentDescriptors": [{
          "objectType": "AliquotMomentDescriptor",
          "name": "FASTING",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_SERUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "PCR",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_HORMONE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "EDTA",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "HBA1C",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "FASTING_EDTA",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "FASTING_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "POST_OVERLOAD",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "GEL",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_INSULINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "POST_SERUM",
              "role": "STORAGE"
            }]
          }, {
            "objectType": "AliquotTypesDescriptor",
            "name": "FLUORIDE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "POST_GLYCEMIA",
              "role": "EXAM"
            }]
          }]
        }, {
          "objectType": "AliquotMomentDescriptor",
          "name": "NONE",
          "aliquotTypesDescriptors": [{
            "objectType": "AliquotTypesDescriptor",
            "name": "URINE",
            "aliquots": [{
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "BIOCHEMICAL_URINE",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINARY_CALCIUM",
              "role": "EXAM"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }, {
              "objectType": "AliquotDescriptor",
              "name": "URINE",
              "role": "STORAGE"
            }]
          }]
        }]
      }],
      "aliquotCodeSize": 9
    }],
    "aliquotDescriptors": [{
      "objectType": "AliquotDescriptor",
      "name": "BIOCHEMICAL_SERUM",
      "label": "Bioquímica Soro"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "PCR",
      "label": "PCR"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "FASTING_HORMONE_CENTRAL",
      "label": "Hormônios Jejum Central"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "FASTING_HORMONE_LOCAL",
      "label": "Hormônios Jejum Local"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "FASTING_SERUM",
      "label": "Soro Jejum"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "HBA1C",
      "label": "HbA1C"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "HEMOGRAM",
      "label": "Hemograma"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "BUFFY_COAT_RS",
      "label": "Buffy Coat RS"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "BUFFY_COAT_MG",
      "label": "Buffy Coat MG"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "FASTING_EDTA",
      "label": "EDTA Jejum"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "FASTING_GLYCEMIA_CENTRAL",
      "label": "Glicemia Jejum Central"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "FASTING_GLYCEMIA_LOCAL",
      "label": "Glicemia Jejum Local"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "POST_INSULINE_CENTRAL",
      "label": "Insulina Pós Central"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "POST_INSULINE_LOCAL",
      "label": "Insulina Pós Local"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "POST_SERUM",
      "label": "Soro Pós"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "POST_GLYCEMIA_CENTRAL",
      "label": "Glicemia Pós Central"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "POST_GLYCEMIA_LOCAL",
      "label": "Glicemia Pós Local"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "BIOCHEMICAL_URINE",
      "label": "Bioquimica de Urina"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "URINARY_CALCIUM",
      "label": "Cálcio Urinário"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "URINE",
      "label": "Urina"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "LOCAL_DNA",
      "label": "DNA Local"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "DNA",
      "label": "DNA"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "POST_GLYCEMIA_1H",
      "label": "Glicemia Pós-1h"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "POST_INSULINE_1H",
      "label": "Insulina Pós-1h"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "FASTING_HORMONE LOCAL",
      "label": "Hormônios Jejum Local"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "FASTING_HORMONE",
      "label": "Hormônios Jejum"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "FASTING_GLYCEMIA",
      "label": "Glicemia Jejum"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "BUFFY_COAT",
      "label": "Buffy Coat"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "POST_INSULINE",
      "label": "Insulina Pós"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "POST_GLYCEMIA",
      "label": "Glicemia Pós"
    }, {
      "objectType": "AliquotDescriptor",
      "name": "CITRATED_PLASMA",
      "label": "Plasma Citrado"
    }]
  },
  "tubeConfiguration": {
    "tubeDescriptors": [{
      "name": "GEL",
      "label": "Gel",
      "color": "#ffcc00"
    }, {
      "name": "EDTA_DNA",
      "label": "EDTA DNA",
      "color": "#660066"
    }, {
      "name": "FLUORIDE",
      "label": "Fluoreto",
      "color": "#666666"
    }, {
      "name": "CITRATE",
      "label": "Citrato",
      "color": "#66ccff"
    }, {
      "name": "EDTA",
      "label": "EDTA",
      "color": "#660066"
    }, {
      "name": "URINE",
      "label": "Urina",
      "color": "#ffffff"
    }]
  },
  "collectMomentConfiguration": {
    "momentDescriptors": [{
      "name": "FASTING",
      "label": "Jejum"
    }, {
      "name": "NONE",
      "label": ""
    }, {
      "name": "POST_OVERLOAD",
      "label": "Pós"
    }, {
      "name": "MIDDLE",
      "label": "Meio"
    }]
  },
  "collectGroupConfiguration": {
    "groupDescriptors": [{
      "name": "CQ4",
      "type": "QUALITY_CONTROL",
      "tubeSet": [{
        "count": 2,
        "type": "EDTA",
        "moment": "FASTING"
      }, {
        "count": 3,
        "type": "GEL",
        "moment": "FASTING"
      }]
    }, {
      "name": "MG",
      "type": "CENTER",
      "tubeSet": [{
        "count": 2,
        "type": "EDTA_DNA",
        "moment": "NONE"
      }, {
        "count": 1,
        "type": "CITRATE",
        "moment": "NONE"
      }]
    }, {
      "name": "RJ",
      "type": "CENTER",
      "tubeSet": [{
        "count": 1,
        "type": "EDTA",
        "moment": "FASTING"
      }, {
        "count": 1,
        "type": "FLUORIDE",
        "moment": "FASTING"
      }, {
        "count": 1,
        "type": "GEL",
        "moment": "FASTING"
      }, {
        "count": 1,
        "type": "FLUORIDE",
        "moment": "POST_OVERLOAD"
      }, {
        "count": 2,
        "type": "EDTA_DNA",
        "moment": "NONE"
      }]
    }, {
      "name": "BA",
      "type": "CENTER",
      "tubeSet": [{
        "count": 3,
        "type": "EDTA_DNA",
        "moment": "NONE"
      }]
    }, {
      "name": "DEFAULT",
      "type": "DEFAULT",
      "tubeSet": [{
        "count": 3,
        "type": "EDTA",
        "moment": "FASTING"
      }, {
        "count": 1,
        "type": "FLUORIDE",
        "moment": "POST_OVERLOAD"
      }, {
        "count": 4,
        "type": "GEL",
        "moment": "FASTING"
      }, {
        "count": 2,
        "type": "GEL",
        "moment": "POST_OVERLOAD"
      }, {
        "count": 1,
        "type": "URINE",
        "moment": "NONE"
      }, {
        "count": 1,
        "type": "FLUORIDE",
        "moment": "FASTING"
      }]
    }, {
      "name": "CQ3",
      "type": "QUALITY_CONTROL",
      "tubeSet": [{
        "count": 2,
        "type": "EDTA",
        "moment": "FASTING"
      }, {
        "count": 1,
        "type": "FLUORIDE",
        "moment": "POST_OVERLOAD"
      }, {
        "count": 3,
        "type": "GEL",
        "moment": "FASTING"
      }]
    }, {
      "name": "ES",
      "type": "CENTER",
      "tubeSet": [{
        "count": 1,
        "type": "GEL",
        "moment": "POST_OVERLOAD"
      }, {
        "count": 1,
        "type": "EDTA",
        "moment": "FASTING"
      }, {
        "count": 2,
        "type": "EDTA_DNA",
        "moment": "NONE"
      }, {
        "count": 2,
        "type": "GEL",
        "moment": "FASTING"
      }]
    }, {
      "name": "RS",
      "type": "CENTER",
      "tubeSet": [{
        "count": 1,
        "type": "FLUORIDE",
        "moment": "MIDDLE"
      }, {
        "count": 1,
        "type": "GEL",
        "moment": "MIDDLE"
      }, {
        "count": 2,
        "type": "EDTA_DNA",
        "moment": "NONE"
      }]
    }, {
      "name": "CQ2",
      "type": "QUALITY_CONTROL",
      "tubeSet": [{
        "count": 3,
        "type": "EDTA",
        "moment": "FASTING"
      }, {
        "count": 3,
        "type": "GEL",
        "moment": "FASTING"
      }, {
        "count": 1,
        "type": "FLUORIDE",
        "moment": "FASTING"
      }]
    }, {
      "name": "CQ1",
      "type": "QUALITY_CONTROL",
      "tubeSet": [{
        "count": 1,
        "type": "FLUORIDE",
        "moment": "FASTING"
      }, {
        "count": 3,
        "type": "GEL",
        "moment": "FASTING"
      }, {
        "count": 2,
        "type": "EDTA",
        "moment": "FASTING"
      }]
    }]
  },
  "labelPrintConfiguration": {
    "CQ1": [{
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "FASTING"
    }, {
      "groupName": "CQ1",
      "type": "FLUORIDE",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ1",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ1",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ1",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "CQ1",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "CQ1",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "URINE",
      "moment": "NONE"
    }],
    "CQ3": [{
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ3",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ3",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ3",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "CQ3",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "CQ3",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "CQ3",
      "type": "FLUORIDE",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "URINE",
      "moment": "NONE"
    }],
    "CQ2": [{
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "CQ2",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "FASTING"
    }, {
      "groupName": "CQ2",
      "type": "FLUORIDE",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ2",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ2",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ2",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "CQ2",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "CQ2",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "URINE",
      "moment": "NONE"
    }],
    "CQ5": [{
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "URINE",
      "moment": "NONE"
    }],
    "CQ4": [{
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ4",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ4",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "CQ4",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "CQ4",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "CQ4",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "URINE",
      "moment": "NONE"
    }],
    "DEFAULT": [{
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "EDTA",
      "moment": "FASTING"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "GEL",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "FLUORIDE",
      "moment": "POST_OVERLOAD"
    }, {
      "groupName": "DEFAULT",
      "type": "URINE",
      "moment": "NONE"
    }]
  },
  "metadataConfiguration": [{
    "objectType": "MetadataConfiguration",
    "extractionValue": ".vp",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Volume Parcial",
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
    }
  }, {
    "objectType": "MetadataConfiguration",
    "extractionValue": ".nc",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Não coletado",
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
    }
  }]
};


Test.utils.data.workAliquotsList = [{
  "objectType": "WorkAliquot",
  "code": "333000001",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "BIOCHEMICAL_SERUM",
  "container": "CRYOTUBE",
  "role": "EXAM",
  "sex": "F",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1970-09-20 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:02:51.417Z"
  }
}, {
  "objectType": "WorkAliquot",
  "code": "333000002",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "PCR",
  "container": "CRYOTUBE",
  "role": "EXAM",
  "sex": "F",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1970-09-20 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:02:51.417Z"
  }
}, {
  "objectType": "WorkAliquot",
  "code": "333000003",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "FASTING_INSULINE",
  "container": "CRYOTUBE",
  "role": "EXAM",
  "sex": "F",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1970-10-20 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:02:51.417Z"
  }
}, {
  "objectType": "WorkAliquot",
  "code": "333025896",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "BIOCHEMICAL_SERUM",
  "container": "CRYOTUBE",
  "role": "EXAM",
  "sex": "M",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1954-09-20 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:03:10.036Z"
  }
}, {
  "objectType": "WorkAliquot",
  "code": "333021476",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "PCR",
  "container": "CRYOTUBE",
  "role": "EXAM",
  "sex": "M",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1955-09-23 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:03:10.036Z"
  }
}, {
  "objectType": "WorkAliquot",
  "code": "332012458",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "FASTING_INSULINE",
  "container": "PALLET",
  "role": "EXAM",
  "sex": "F",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1962-12-12 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:03:10.036Z"
  }
}, {
  "objectType": "WorkAliquot",
  "code": "332021543",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "BIOCHEMICAL_SERUM",
  "container": "PALLET",
  "role": "EXAM",
  "sex": "M",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1954-09-20 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:03:27.816Z"
  }
}, {
  "objectType": "WorkAliquot",
  "code": "333026598",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "PCR",
  "container": "CRYOTUBE",
  "role": "EXAM",
  "sex": "F",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1954-09-20 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:03:27.816Z"
  }
}, {
  "objectType": "WorkAliquot",
  "code": "332026598",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "STORAGE",
  "container": "PALLET",
  "role": "STORAGE",
  "sex": "F",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1954-09-20 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:03:41.968Z"
  }
}, {
  "objectType": "WorkAliquot",
  "code": "333026590",
  "fieldCenter": {
    "name": "Bahia",
    "acronym": "BA",
    "code": 1
  },
  "name": "STORAGE",
  "container": "CRYOTUBE",
  "role": "STORAGE",
  "sex": "F",
  "birthdate": {
    "objectType": "ImmutableDate",
    "value": "1954-09-20 00:00:00.000"
  },
  "recruitmentNumber": "3051442",
  "aliquotCollectionData": {
    "objectType": "AliquotCollectionData",
    "metadata": "",
    "operator": "fulano.detal@gmail.com",
    "time": "2017-07-27T17:03:41.968Z"
  }
}];

Test.utils.data.jsonObject = {
  "extents": "StudioObject",
  "objectType": "Survey",
  "oid": "dXNlclVVSUQ6W3VuZGVmaW5lZF1zdXJ2ZXlVVUlEOlszODA5MTg0MC05NmZhLTExZTctODk3Yi00YjM4MGMzODZiZGJdcmVwb3NpdG9yeVVVSUQ6WyBOb3QgZG9uZSB5ZXQgXQ==",
  "identity": {
    "extents": "StudioObject",
    "objectType": "SurveyIdentity",
    "name": "USO DE MEDICAMENTOS 2",
    "acronym": "MEDC",
    "recommendedTo": "",
    "description": "",
    "keywords": []
  },
  "metainfo": {
    "extents": "StudioObject",
    "objectType": "SurveyMetaInfo",
    "creationDatetime": "2017-09-11T14:05:08.420Z",
    "otusStudioVersion": ""
  },
  "dataSources": [{
    "objectType": "DataSourceDefinition",
    "id": "medicamentos",
    "name": "medicamentos",
    "bindTo": ["MEDC2", "MEDC13", "MEDC24", "MEDC35", "MEDC46", "MEDC68",
      "MEDC79", "MEDC90"
    ]
  }],
  "itemContainer": [{
    "extents": "SurveyItem",
    "objectType": "TextItem",
    "templateID": "MEDC1",
    "customID": "MEDC02",
    "dataType": "String",
    "value": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "ACRESCENTE AQUI SE O PARTICIPANTE TEM MAIS DE 10 MEDICAMENTOS OU SE ESQUECEU OS MEDICAMENTOS DE DIABETES, HIPERTENSÃO, ANSIEDADE E/OU DEPRESSÃO.",
        "formattedText": "<b>ACRESCENTE AQUI SE O PARTICIPANTE TEM MAIS DE 10 MEDICAMENTOSnOU SE ESQUECEU OS MEDICAMENTOS DE DIABETES, HIPERTENSÃO, ANSIEDADEnE/OU DEPRESSÃO.</b>"
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
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC2",
    "customID": "MEDC2_11",
    "dataType": "String",
    "dataSources": ["medicamentos"],
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "ENTREVISTADOR: UTILIZE A EMBALAGEM, RECEITA OU INFORMAÇÃO DO(A) PARTICIPANTE. NO CASO DE DISCORDÂNCIA ENTRE A INFORMAÇÃO RELATADA, INFORMAÇÃO DA EMBALAGEM E INFORMAÇÃO DA RECEITA, A INFORMAÇÃO CONSIDERADA DEVERÁ SER AQUELA REFERIDA PELO(A) PARTICIPANTE. nnMEDICAMENTO 11:n02. Nome Comercial e Concentração: n",
        "formattedText": "<b>ENTREVISTADOR: UTILIZE A EMBALAGEM, RECEITA OU INFORMAÇÃO DO(A)nPARTICIPANTE. NO CASO DE DISCORDÂNCIA ENTRE A INFORMAÇÃO RELATADA,nINFORMAÇÃO DA EMBALAGEM E INFORMAÇÃO DA RECEITA, A INFORMAÇÃOnCONSIDERADA DEVERÁ SER AQUELA REFERIDA PELO(A) PARTICIPANTE.&nbsp;</b><div><b><br></b></div><div><b>MEDICAMENTO 11:</b><div><span style='letter-spacing: 0.01em;'>02. Nome Comercial e Concentração:&nbsp;</span><br></div></div>"
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
        "extractionValue": ".Q",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não quer responder",
            "formattedText": "Não quer responder"
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
        "extractionValue": ".S",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não sabe",
            "formattedText": "Não sabe"
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
        "extractionValue": ".A",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não se aplica",
            "formattedText": "Não se aplica"
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
        "value": 4,
        "extractionValue": ".F",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Não há dados",
            "formattedText": "Não há dados"
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
    "objectType": "GridTextQuestion",
    "templateID": "MEDC3",
    "customID": "MEDC02_11",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "QUAL OUTRO MEDICAMENTO 11: n(Se mais de um fármaco utilizar “;” como separador)n",
        "formattedText": "<b>QUAL OUTRO MEDICAMENTO 11:&nbsp;</b><div><b><u>(Se mais de um fármaco utilizar “;” como separador)</u></b></div>"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridTextLine",
      "gridTextList": [{
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_11a",
        "customID": "MEDC2_11qou",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Outro (especifique):",
            "formattedText": "Outron(especifique):"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_11b",
        "customID": "MEDC2_11qouc",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Concentração:",
            "formattedText": "Concentração:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_11c",
        "customID": "MEDC2_11qouu",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Unidade:",
            "formattedText": "Unidade:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC4",
    "customID": "MEDC3_11",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "03. Forma Física:",
        "formattedText": "03. Forma Física:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido ou pastilha, cápsula, drágea = ORAL",
          "formattedText": "Comprimido ou pastilha, cápsula, drágea = ORAL"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido revestido ou de liberação prolongada = ORAL",
          "formattedText": "Comprimido revestido ou de liberação prolongada = ORAL"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Xarope ou solução, suspensão = ORAL",
          "formattedText": "Xarope ou solução, suspensão = ORAL"
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
      "value": 4,
      "extractionValue": 4,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Injetável",
          "formattedText": "Injetável"
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
      "value": 5,
      "extractionValue": 5,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE",
          "formattedText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE"
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
      "value": 6,
      "extractionValue": 6,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Supositório = RETAL",
          "formattedText": "Supositório = RETAL"
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
      "value": 7,
      "extractionValue": 7,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Óvulo ou creme = VAGINAL",
          "formattedText": "Óvulo ou creme = VAGINAL"
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
      "value": 8,
      "extractionValue": 8,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Adesivos = TRANSDÉRMICO",
          "formattedText": "Adesivos = TRANSDÉRMICO"
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
      "value": 9,
      "extractionValue": 9,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Aerossol, bombinha, nebulização = INALATÓRIO",
          "formattedText": "Aerossol, bombinha, nebulização = INALATÓRIO"
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
      "value": 10,
      "extractionValue": 10,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Colírio = OFTÁLMICO",
          "formattedText": "Colírio = OFTÁLMICO"
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
      "value": 11,
      "extractionValue": 11,
      "dataType": "Integer",
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
    }],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC5",
    "customID": "MEDC3a_11",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Outro (especifique):",
        "formattedText": "Outro (especifique):"
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
            "reference": 300
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC6",
    "customID": "MEDC6_11",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "04. Trouxe a receita ou embalagem ou cartela ou bula?",
        "formattedText": "04. Trouxe a receita ou embalagem ou cartela ou bula?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": "0",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC7",
    "customID": "MEDC9a_11",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?n05a. Unidade por vez:n",
        "formattedText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?<div>05a. Unidade por vez:</div>"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC8",
    "customID": "MEDC9b_11",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05b. Nº de vezes: ",
        "formattedText": "05b. Nº de vezes:&nbsp;"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC9",
    "customID": "MEDC9c_11",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05c. Unidade de tempo:",
        "formattedText": "05c. Unidade de tempo:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Dia",
          "formattedText": "Dia"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Semana",
          "formattedText": "Semana"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Mês",
          "formattedText": "Mês"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC10",
    "customID": "MEDC10_11",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?",
        "formattedText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC11",
    "customID": "MEDC011_11",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?",
        "formattedText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridIntegerLine",
      "gridIntegerList": [{
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_11a",
        "customID": "MEDC011_11a",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Anos:",
            "formattedText": "Anos:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_11b",
        "customID": "MEDC011_11b",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Meses:",
            "formattedText": "Meses:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_11c",
        "customID": "MEDC011_11c",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Dias:",
            "formattedText": "Dias:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC12",
    "customID": "MEDC11o_11",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "ENTREVISTADOR: OUTRO MEDICAMENTO?",
        "formattedText": "<b>ENTREVISTADOR: OUTRO MEDICAMENTO?</b>"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC13",
    "customID": "MEDC2_12",
    "dataType": "String",
    "dataSources": ["medicamentos"],
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "MEDICAMENTO 12:n02. Nome Comercial e Concentração:",
        "formattedText": "<div><b>MEDICAMENTO 12:</b><br></div>02. Nome Comercial e Concentração:"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "GridTextQuestion",
    "templateID": "MEDC14",
    "customID": "MEDC02_12",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "QUAL OUTRO MEDICAMENTO 12:n(Se mais de um fármaco utilizar “;” como separador)n",
        "formattedText": "<b>QUAL OUTRO MEDICAMENTO 12:</b><div><b>(Se mais de um fármaco utilizar “;” como separador)</b></div>"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridTextLine",
      "gridTextList": [{
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_12a",
        "customID": "MEDC2_12qou",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Outro (especifique):",
            "formattedText": "Outron(especifique):"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_12b",
        "customID": "MEDC2_12qouc",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Concentração:",
            "formattedText": "Concentração:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_12c",
        "customID": "MEDC2_12qouu",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Unidade:",
            "formattedText": "Unidade:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC15",
    "customID": "MEDC3_12",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "03. Forma Física:",
        "formattedText": "03. Forma Física:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido ou pastilha, cápsula, drágea = ORAL",
          "formattedText": "Comprimido ou pastilha, cápsula, drágea = ORAL"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido revestido ou de liberação prolongada = ORAL",
          "formattedText": "Comprimido revestido ou de liberação prolongada = ORAL"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Xarope ou solução, suspensão = ORAL",
          "formattedText": "Xarope ou solução, suspensão = ORAL"
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
      "value": 4,
      "extractionValue": 4,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Injetável",
          "formattedText": "Injetável"
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
      "value": 5,
      "extractionValue": 5,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE",
          "formattedText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE"
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
      "value": 6,
      "extractionValue": 6,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Supositório = RETAL",
          "formattedText": "Supositório = RETAL"
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
      "value": 7,
      "extractionValue": 7,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Óvulo ou creme = VAGINAL",
          "formattedText": "Óvulo ou creme = VAGINAL"
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
      "value": 8,
      "extractionValue": 8,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Adesivos = TRANSDÉRMICO",
          "formattedText": "Adesivos = TRANSDÉRMICO"
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
      "value": 9,
      "extractionValue": 9,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Aerossol, bombinha, nebulização = INALATÓRIO",
          "formattedText": "Aerossol, bombinha, nebulização = INALATÓRIO"
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
      "value": 10,
      "extractionValue": 10,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Colírio = OFTÁLMICO",
          "formattedText": "Colírio = OFTÁLMICO"
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
      "value": 11,
      "extractionValue": 11,
      "dataType": "Integer",
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
    }],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC16",
    "customID": "MEDC3a_12",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Outro (especifique):",
        "formattedText": "Outro (especifique):"
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
            "reference": 300
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC17",
    "customID": "MEDC6_12",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "04. Trouxe a receita ou embalagem ou cartela ou bula?",
        "formattedText": "04. Trouxe a receita ou embalagem ou cartela ou bula?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": "0",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC18",
    "customID": "MEDC9a_12",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas? .n05a. Unidade por vez:n",
        "formattedText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas? .<div>05a. Unidade por vez:</div>"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC19",
    "customID": "MEDC9b_12",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05b. Nº de vezes: ",
        "formattedText": "05b. Nº de vezes:&nbsp;"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC20",
    "customID": "MEDC9c_12",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05c. Unidade de tempo:",
        "formattedText": "05c. Unidade de tempo:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Dia",
          "formattedText": "Dia"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Semana",
          "formattedText": "Semana"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Mês",
          "formattedText": "Mês"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC21",
    "customID": "MEDC10_12",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?",
        "formattedText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC22",
    "customID": "MEDC011_12",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?",
        "formattedText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridIntegerLine",
      "gridIntegerList": [{
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_12a",
        "customID": "MEDC11a_12",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Anos:",
            "formattedText": "Anos:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_12b",
        "customID": "MEDC11b_12",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Meses:",
            "formattedText": "Meses:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_12c",
        "customID": "MEDC11c_12",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Dias:",
            "formattedText": "Dias:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC23",
    "customID": "MEDC11o_12",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": " ENTREVISTADOR: OUTRO MEDICAMENTO?",
        "formattedText": "<b>&nbsp;ENTREVISTADOR: OUTRO MEDICAMENTO?</b>"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC24",
    "customID": "MEDC2_13",
    "dataType": "String",
    "dataSources": ["medicamentos"],
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "MEDICAMENTO 13:n02. Nome Comercial e Concentração:n",
        "formattedText": "<b>MEDICAMENTO 13:</b><div><b>02. Nome Comercial e Concentração:<br></b></div>"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "GridTextQuestion",
    "templateID": "MEDC25",
    "customID": "MEDC02_13",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "QUAL OUTRO MEDICAMENTO 13:n(Se mais de um fármaco utilizar “;” como separador)n",
        "formattedText": "<div><b>QUAL OUTRO MEDICAMENTO 13:</b></div><div><u><b>(Se mais de um fármaco utilizar “;” como separador)</b></u></div>"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridTextLine",
      "gridTextList": [{
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_13a",
        "customID": "MEDC2_13qou",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Outro (especifique):n",
            "formattedText": "<div>Outro&nbsp;<span style='letter-spacing: 0.01em;'>(especifique):</span></div>"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_13b",
        "customID": "MEDC2_13qouc",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Concentração:",
            "formattedText": "Concentração:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_13c",
        "customID": "MEDC2_13qouu",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Unidade:",
            "formattedText": "Unidade:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC26",
    "customID": "MEDC3_13",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "03. Forma Física:",
        "formattedText": "03. Forma Física:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido ou pastilha, cápsula, drágea = ORAL",
          "formattedText": "Comprimido ou pastilha, cápsula, drágea = ORAL"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido revestido ou de liberação prolongada = ORAL",
          "formattedText": "Comprimido revestido ou de liberação prolongada = ORAL"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Xarope ou solução, suspensão = ORAL",
          "formattedText": "Xarope ou solução, suspensão = ORAL"
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
      "value": 4,
      "extractionValue": 4,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Injetável",
          "formattedText": "Injetável"
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
      "value": 5,
      "extractionValue": 5,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE",
          "formattedText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE"
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
      "value": 6,
      "extractionValue": 6,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Supositório = RETAL",
          "formattedText": "Supositório = RETAL"
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
      "value": 7,
      "extractionValue": 7,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Óvulo ou creme = VAGINAL",
          "formattedText": "Óvulo ou creme = VAGINAL"
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
      "value": 8,
      "extractionValue": 8,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Adesivos = TRANSDÉRMICO",
          "formattedText": "Adesivos = TRANSDÉRMICO"
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
      "value": 9,
      "extractionValue": 9,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Aerossol, bombinha, nebulização = INALATÓRIO",
          "formattedText": "Aerossol, bombinha, nebulização = INALATÓRIO"
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
      "value": 10,
      "extractionValue": 10,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Colírio = OFTÁLMICO",
          "formattedText": "Colírio = OFTÁLMICO"
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
      "value": 11,
      "extractionValue": 11,
      "dataType": "Integer",
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
    }],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC27",
    "customID": "MEDC3a_13",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Outro (especifique):",
        "formattedText": "Outro (especifique):"
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
            "reference": 300
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC28",
    "customID": "MEDC6_13",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "04. Trouxe a receita ou embalagem ou cartela ou bula?",
        "formattedText": "04. Trouxe a receita ou embalagem ou cartela ou bula?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": "0",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC29",
    "customID": "MEDC9a_13",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?n05a. Unidade por vez:n",
        "formattedText": "<div>05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?</div><div>05a. Unidade por vez:</div>"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC30",
    "customID": "MEDC9b_13",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05b. Nº de vezes: ",
        "formattedText": "05b. Nº de vezes:&nbsp;"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC31",
    "customID": "MEDC9c_13",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05c. Unidade de tempo:",
        "formattedText": "05c. Unidade de tempo:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Dia",
          "formattedText": "Dia"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Semana",
          "formattedText": "Semana"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Mês",
          "formattedText": "Mês"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC32",
    "customID": "MEDC10_13",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?",
        "formattedText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC33",
    "customID": "MEDC011_13",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?",
        "formattedText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridIntegerLine",
      "gridIntegerList": [{
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_13a",
        "customID": "MEDC11a_13",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Anos:",
            "formattedText": "Anos:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_13b",
        "customID": "MEDC11b_13",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Meses:",
            "formattedText": "Meses:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_13c",
        "customID": "MEDC11c_13",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Dias:",
            "formattedText": "Dias:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC34",
    "customID": "MEDC11o_13",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": " ENTREVISTADOR: OUTRO MEDICAMENTO?",
        "formattedText": "&nbsp;<b>ENTREVISTADOR: OUTRO MEDICAMENTO?</b>"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC35",
    "customID": "MEDC2_14",
    "dataType": "String",
    "dataSources": ["medicamentos"],
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "MEDICAMENTO 14:n02. Nome Comercial e Concentração:n",
        "formattedText": "<b>MEDICAMENTO 14:</b><div>02. Nome Comercial e Concentração:<br></div>"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "GridTextQuestion",
    "templateID": "MEDC36",
    "customID": "MEDC02_14",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "QUAL OUTRO MEDICAMENTO 14: n(Se mais de um fármaco utilizar “;” como separador)n",
        "formattedText": "<b>QUAL OUTRO MEDICAMENTO 14:&nbsp;</b><div><u><b>(Se mais de um fármaco utilizar “;” como separador)</b></u></div>"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridTextLine",
      "gridTextList": [{
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_14a",
        "customID": "MEDC2_14qou",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Outro (especifique):n",
            "formattedText": "<div>Outro&nbsp;<span style='letter-spacing: 0.01em;'>(especifique):</span></div>"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_14b",
        "customID": "MEDC2_14qouc",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Concentração:",
            "formattedText": "Concentração:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_14c",
        "customID": "MEDC2_14qouu",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Unidade:",
            "formattedText": "Unidade:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC37",
    "customID": "MEDC3_14",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "03. Forma Física:",
        "formattedText": "03. Forma Física:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido ou pastilha, cápsula, drágea = ORAL",
          "formattedText": "Comprimido ou pastilha, cápsula, drágea = ORAL"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido revestido ou de liberação prolongada = ORAL",
          "formattedText": "Comprimido revestido ou de liberação prolongada = ORAL"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Xarope ou solução, suspensão = ORAL",
          "formattedText": "Xarope ou solução, suspensão = ORAL"
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
      "value": 4,
      "extractionValue": 4,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Injetável",
          "formattedText": "Injetável"
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
      "value": 5,
      "extractionValue": 5,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE",
          "formattedText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE"
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
      "value": 6,
      "extractionValue": 6,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Supositório = RETAL",
          "formattedText": "Supositório = RETAL"
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
      "value": 7,
      "extractionValue": 7,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Óvulo ou creme = VAGINAL",
          "formattedText": "Óvulo ou creme = VAGINAL"
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
      "value": 8,
      "extractionValue": 8,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Adesivos = TRANSDÉRMICO",
          "formattedText": "Adesivos = TRANSDÉRMICO"
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
      "value": 9,
      "extractionValue": 9,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Aerossol, bombinha, nebulização = INALATÓRIO",
          "formattedText": "Aerossol, bombinha, nebulização = INALATÓRIO"
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
      "value": 10,
      "extractionValue": 10,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Colírio = OFTÁLMICO",
          "formattedText": "Colírio = OFTÁLMICO"
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
      "value": 11,
      "extractionValue": 11,
      "dataType": "Integer",
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
    }],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC38",
    "customID": "MEDC3a_14",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Outro (especifique):",
        "formattedText": "Outro (especifique):"
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
            "reference": 300
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC39",
    "customID": "MEDC6_14",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "04. Trouxe a receita ou embalagem ou cartela ou bula?",
        "formattedText": "04. Trouxe a receita ou embalagem ou cartela ou bula?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": "0",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC40",
    "customID": "MEDC9a_14",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?n05a. Unidade por vez:n",
        "formattedText": "<div>05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?</div><div>05a. Unidade por vez:</div>"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC41",
    "customID": "MEDC9b_14",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05b. Nº de vezes: ",
        "formattedText": "05b. Nº de vezes:&nbsp;"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC42",
    "customID": "MEDC9c_14",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05c. Unidade de tempo:",
        "formattedText": "05c. Unidade de tempo:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Dia",
          "formattedText": "Dia"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Semana",
          "formattedText": "Semana"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Mês",
          "formattedText": "Mês"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC43",
    "customID": "MEDC10_14",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?",
        "formattedText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC44",
    "customID": "MEDC011_14",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?",
        "formattedText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridIntegerLine",
      "gridIntegerList": [{
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_14a",
        "customID": "MEDC11a_14",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Anos:",
            "formattedText": "Anos:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_14b",
        "customID": "MEDC11b_14",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Meses:",
            "formattedText": "Meses:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_14c",
        "customID": "MEDC11c_14",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Dias:",
            "formattedText": "Dias:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC45",
    "customID": "MEDC11o_14",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "ENTREVISTADOR: OUTRO MEDICAMENTO?",
        "formattedText": "<b>ENTREVISTADOR: OUTRO MEDICAMENTO?</b>"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC46",
    "customID": "MEDC2_15",
    "dataType": "String",
    "dataSources": ["medicamentos"],
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "MEDICAMENTO 15:n02. Nome Comercial e Concentração:n",
        "formattedText": "<b>MEDICAMENTO 15:</b><div>02. Nome Comercial e Concentração:</div>"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "GridTextQuestion",
    "templateID": "MEDC47",
    "customID": "MEDC02_15",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "QUAL OUTRO MEDICAMENTO 15:n(Se mais de um fármaco utilizar “;” como separador)n",
        "formattedText": "<div><b>QUAL OUTRO MEDICAMENTO 15:</b></div><div><u><b>(Se mais de um fármaco utilizar “;” como separador)</b></u></div>"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridTextLine",
      "gridTextList": [{
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_15a",
        "customID": "MEDC2_15qou",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Outro (especifique):n",
            "formattedText": "<div>Outro&nbsp;<span style='letter-spacing: 0.01em;'>(especifique):</span></div>"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_15b",
        "customID": "MEDC2_15qouc",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Concentração:",
            "formattedText": "Concentração:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_15c",
        "customID": "MEDC2_15qouu",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Unidade:",
            "formattedText": "Unidade:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC48",
    "customID": "MEDC3_15",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "03. Forma Física:",
        "formattedText": "03. Forma Física:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido ou pastilha, cápsula, drágea = ORAL",
          "formattedText": "Comprimido ou pastilha, cápsula, drágea = ORAL"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido revestido ou de liberação prolongada = ORAL",
          "formattedText": "Comprimido revestido ou de liberação prolongada = ORAL"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Xarope ou solução, suspensão = ORAL",
          "formattedText": "Xarope ou solução, suspensão = ORAL"
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
      "value": 4,
      "extractionValue": 4,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Injetável",
          "formattedText": "Injetável"
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
      "value": 5,
      "extractionValue": 5,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE",
          "formattedText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE"
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
      "value": 6,
      "extractionValue": 6,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Supositório = RETAL",
          "formattedText": "Supositório = RETAL"
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
      "value": 7,
      "extractionValue": 7,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Óvulo ou creme = VAGINAL",
          "formattedText": "Óvulo ou creme = VAGINAL"
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
      "value": 8,
      "extractionValue": 8,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Adesivos = TRANSDÉRMICO",
          "formattedText": "Adesivos = TRANSDÉRMICO"
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
      "value": 9,
      "extractionValue": 9,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Aerossol, bombinha, nebulização = INALATÓRIO",
          "formattedText": "Aerossol, bombinha, nebulização = INALATÓRIO"
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
      "value": 10,
      "extractionValue": 10,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Colírio = OFTÁLMICO",
          "formattedText": "Colírio = OFTÁLMICO"
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
      "value": 11,
      "extractionValue": 11,
      "dataType": "Integer",
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
    }],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC49",
    "customID": "MEDC3a_15",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Outro (especifique): ",
        "formattedText": "Outro (especifique):&nbsp;"
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
            "reference": 300
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC50",
    "customID": "MEDC6_15",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "04. Trouxe a receita ou embalagem ou cartela ou bula?",
        "formattedText": "04. Trouxe a receita ou embalagem ou cartela ou bula?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": "0",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC51",
    "customID": "MEDC9a_15",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?n05a. Unidade por vez:n",
        "formattedText": "<div>05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?</div><div>05a. Unidade por vez:</div>"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC52",
    "customID": "MEDC9b_15",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05b. Nº de vezes: ",
        "formattedText": "05b. Nº de vezes:&nbsp;"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC53",
    "customID": "MEDC9c_15",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05c. Unidade de tempo:",
        "formattedText": "05c. Unidade de tempo:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Dia",
          "formattedText": "Dia"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Semana",
          "formattedText": "Semana"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Mês",
          "formattedText": "Mês"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC54",
    "customID": "MEDC10_15",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?",
        "formattedText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC55",
    "customID": "MEDC011_15",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?",
        "formattedText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridIntegerLine",
      "gridIntegerList": [{
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_15a",
        "customID": "MEDC11a_15",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Anos:",
            "formattedText": "Anos:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_15b",
        "customID": "MEDC11b_15",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Meses:",
            "formattedText": "Meses:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_15c",
        "customID": "MEDC11c_15",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Dias:",
            "formattedText": "Dias:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC56",
    "customID": "MEDC11o_15",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "ENTREVISTADOR: OUTRO MEDICAMENTO?",
        "formattedText": "<b>ENTREVISTADOR: OUTRO MEDICAMENTO?</b>"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC57",
    "customID": "MEDC2_16",
    "dataType": "String",
    "dataSources": [],
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "MEDICAMENTO 16:n02. Nome Comercial e Concentração:n",
        "formattedText": "<b>MEDICAMENTO 16:</b><div>02. Nome Comercial e Concentração:<br></div>"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "GridTextQuestion",
    "templateID": "MEDC58",
    "customID": "MEDC02_16",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "QUAL OUTRO MEDICAMENTO 16:n(Se mais de um fármaco utilizar “;” como separador)n",
        "formattedText": "<div><b>QUAL OUTRO MEDICAMENTO 16:</b></div><div><b><u>(Se mais de um fármaco utilizar “;” como separador)</u></b></div>"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridTextLine",
      "gridTextList": [{
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_16a",
        "customID": "MEDC2_16qou",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Outro (especifique):n",
            "formattedText": "<div>Outro&nbsp;<span style='letter-spacing: 0.01em;'>(especifique):</span></div>"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_16b",
        "customID": "MEDC2_16qouc",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Concentração:",
            "formattedText": "Concentração:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_16c",
        "customID": "MEDC2_16qouu",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Unidade:",
            "formattedText": "Unidade:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC59",
    "customID": "MEDC3_16",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "03. Forma Física:",
        "formattedText": "03. Forma Física:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido ou pastilha, cápsula, drágea = ORAL",
          "formattedText": "Comprimido ou pastilha, cápsula, drágea = ORAL"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido revestido ou de liberação prolongada = ORAL",
          "formattedText": "Comprimido revestido ou de liberação prolongada = ORAL"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Xarope ou solução, suspensão = ORAL",
          "formattedText": "Xarope ou solução, suspensão = ORAL"
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
      "value": 4,
      "extractionValue": 4,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Injetável",
          "formattedText": "Injetável"
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
      "value": 5,
      "extractionValue": 5,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE",
          "formattedText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE"
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
      "value": 6,
      "extractionValue": 6,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Supositório = RETAL",
          "formattedText": "Supositório = RETAL"
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
      "value": 7,
      "extractionValue": 7,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Óvulo ou creme = VAGINAL",
          "formattedText": "Óvulo ou creme = VAGINAL"
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
      "value": 8,
      "extractionValue": 8,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Adesivos = TRANSDÉRMICO",
          "formattedText": "Adesivos = TRANSDÉRMICO"
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
      "value": 9,
      "extractionValue": 9,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Aerossol, bombinha, nebulização = INALATÓRIO",
          "formattedText": "Aerossol, bombinha, nebulização = INALATÓRIO"
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
      "value": 10,
      "extractionValue": 10,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Colírio = OFTÁLMICO",
          "formattedText": "Colírio = OFTÁLMICO"
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
      "value": 11,
      "extractionValue": 11,
      "dataType": "Integer",
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
    }],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC60",
    "customID": "MEDC3a_16",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Outro (especifique):n",
        "formattedText": "<div>Outro&nbsp;<span style='letter-spacing: 0.01em;'>(especifique):</span></div>"
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
            "reference": 300
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC61",
    "customID": "MEDC6_16",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "04. Trouxe a receita ou embalagem ou cartela ou bula?",
        "formattedText": "04. Trouxe a receita ou embalagem ou cartela ou bula?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": "0",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC62",
    "customID": "MEDC9a_16",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?n05a. Unidade por vez:n",
        "formattedText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?<div>05a. Unidade por vez:<br></div>"
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
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
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
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC63",
    "customID": "MEDC9b_16",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05b. No de vezes:",
        "formattedText": "05b. No de vezes:"
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
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
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
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC64",
    "customID": "MEDC9c_16",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05c. Unidade de tempo:",
        "formattedText": "05c. Unidade de tempo:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Dia",
          "formattedText": "Dia"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Semana",
          "formattedText": "Semana"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Mês",
          "formattedText": "Mês"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC65",
    "customID": "MEDC10_16",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?",
        "formattedText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC66",
    "customID": "MEDC011_16",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?",
        "formattedText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridIntegerLine",
      "gridIntegerList": [{
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_16a",
        "customID": "MEDC11a_16",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Anos:",
            "formattedText": "Anos:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_16b",
        "customID": "MEDC11b_16",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Meses:",
            "formattedText": "Meses:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_16c",
        "customID": "MEDC11c_16",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Dias:",
            "formattedText": "Dias:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC67",
    "customID": "MEDC11o_16",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "ENTREVISTADOR: OUTRO MEDICAMENTO?",
        "formattedText": "<b>ENTREVISTADOR: OUTRO MEDICAMENTO?</b>"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC68",
    "customID": "MEDC2_17",
    "dataType": "String",
    "dataSources": ["medicamentos"],
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "MEDICAMENTO 17:n02. Nome Comercial e Concentração:n",
        "formattedText": "<b>MEDICAMENTO 17:</b><div>02. Nome Comercial e Concentração:<br></div>"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "GridTextQuestion",
    "templateID": "MEDC69",
    "customID": "MEDC02_17",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "QUAL OUTRO MEDICAMENTO 17:n(Se mais de um fármaco utilizar “;” como separador)n",
        "formattedText": "<b>QUAL OUTRO MEDICAMENTO 17:</b><div><b>(Se mais de um fármaco utilizar “;” como separador)</b><br></div>"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridTextLine",
      "gridTextList": [{
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_17a",
        "customID": "MEDC2_17qou",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Outro (especifique):n",
            "formattedText": "<div>Outro&nbsp;<span style='letter-spacing: 0.01em;'>(especifique):</span></div>"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_17b",
        "customID": "MEDC2_17qouc",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Concentração:",
            "formattedText": "Concentração:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_17c",
        "customID": "MEDC2_17qouu",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Unidade:",
            "formattedText": "Unidade:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC70",
    "customID": "MEDC3_17",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "03. Forma Física:",
        "formattedText": "03. Forma Física:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido ou pastilha, cápsula, drágea = ORAL",
          "formattedText": "Comprimido ou pastilha, cápsula, drágea = ORAL"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido revestido ou de liberação prolongada = ORAL",
          "formattedText": "Comprimido revestido ou de liberação prolongada = ORAL"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Xarope ou solução, suspensão = ORAL",
          "formattedText": "Xarope ou solução, suspensão = ORAL"
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
      "value": 4,
      "extractionValue": 4,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Injetável",
          "formattedText": "Injetável"
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
      "value": 5,
      "extractionValue": 5,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE",
          "formattedText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE"
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
      "value": 6,
      "extractionValue": 6,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Supositório = RETAL",
          "formattedText": "Supositório = RETAL"
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
      "value": 7,
      "extractionValue": 7,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Óvulo ou creme = VAGINAL",
          "formattedText": "Óvulo ou creme = VAGINAL"
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
      "value": 8,
      "extractionValue": 8,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Adesivos = TRANSDÉRMICO",
          "formattedText": "Adesivos = TRANSDÉRMICO"
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
      "value": 9,
      "extractionValue": 9,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Aerossol, bombinha, nebulização = INALATÓRIO",
          "formattedText": "Aerossol, bombinha, nebulização = INALATÓRIO"
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
      "value": 10,
      "extractionValue": 10,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Colírio = OFTÁLMICO",
          "formattedText": "Colírio = OFTÁLMICO"
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
      "value": 11,
      "extractionValue": 11,
      "dataType": "Integer",
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
    }],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC71",
    "customID": "MEDC3a_17",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Outro (especifique):n",
        "formattedText": "<div>Outro&nbsp;<span style='letter-spacing: 0.01em;'>(especifique):</span></div>"
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
            "reference": 300
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC72",
    "customID": "MEDC6_17",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "04. Trouxe a receita ou embalagem ou cartela ou bula?",
        "formattedText": "04. Trouxe a receita ou embalagem ou cartela ou bula?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": "0",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC73",
    "customID": "MEDC9a_17",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?n05a. Unidade por vez:n",
        "formattedText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?<div>05a. Unidade por vez:<br></div>"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC74",
    "customID": "MEDC9b_17",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05b. No de vezes:",
        "formattedText": "05b. No de vezes:"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC75",
    "customID": "MEDC9c_17",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05c. Unidade de tempo:",
        "formattedText": "05c. Unidade de tempo:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Dia",
          "formattedText": "Dia"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Semana",
          "formattedText": "Semana"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Mês",
          "formattedText": "Mês"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC76",
    "customID": "MEDC10_17",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?",
        "formattedText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC77",
    "customID": "MEDC011_17",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?",
        "formattedText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridIntegerLine",
      "gridIntegerList": [{
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_17a",
        "customID": "MEDC11a_17",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Anos:",
            "formattedText": "Anos:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_17b",
        "customID": "MEDC11b_17",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Meses:",
            "formattedText": "Meses:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_17c",
        "customID": "MEDC11c_17",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Dias:",
            "formattedText": "Dias:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC78",
    "customID": "MEDC11o_17",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "ENTREVISTADOR: OUTRO MEDICAMENTO?",
        "formattedText": "<b>ENTREVISTADOR: OUTRO MEDICAMENTO?</b>"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC79",
    "customID": "MEDC2_18",
    "dataType": "String",
    "dataSources": ["medicamentos"],
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "MEDICAMENTO 18:n02. Nome Comercial e Concentração:n",
        "formattedText": "<b>MEDICAMENTO 18:</b><div>02. Nome Comercial e Concentração:</div>"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "GridTextQuestion",
    "templateID": "MEDC80",
    "customID": "MEDC02_18",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "QUAL OUTRO MEDICAMENTO 18:n(Se mais de um fármaco utilizar “;” como separador)n",
        "formattedText": "<div><b>QUAL OUTRO MEDICAMENTO 18:</b></div><div><span style='letter-spacing: 0.01em;'><b>(Se mais de um fármaco utilizar “;” como separador)</b></span></div>"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridTextLine",
      "gridTextList": [{
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_18a",
        "customID": "MEDC2_18qou",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Outro (especifique)",
            "formattedText": "Outro (especifique)"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_18b",
        "customID": "MEDC2_18qouc",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Concentração:",
            "formattedText": "Concentração:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_18c",
        "customID": "MEDC2_18qouu",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Unidade:",
            "formattedText": "Unidade:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC81",
    "customID": "MEDC3_18",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "03. Forma Física:",
        "formattedText": "03. Forma Física:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido ou pastilha, cápsula, drágea = ORAL",
          "formattedText": "Comprimido ou pastilha, cápsula, drágea = ORAL"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido revestido ou de liberação prolongada = ORAL",
          "formattedText": "Comprimido revestido ou de liberação prolongada = ORAL"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Xarope ou solução, suspensão = ORAL",
          "formattedText": "Xarope ou solução, suspensão = ORAL"
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
      "value": 4,
      "extractionValue": 4,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Injetável",
          "formattedText": "Injetável"
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
      "value": 5,
      "extractionValue": 5,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE",
          "formattedText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE"
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
      "value": 6,
      "extractionValue": 6,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Supositório = RETAL",
          "formattedText": "Supositório = RETAL"
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
      "value": 7,
      "extractionValue": 7,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Óvulo ou creme = VAGINAL",
          "formattedText": "Óvulo ou creme = VAGINAL"
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
      "value": 8,
      "extractionValue": 8,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Adesivos = TRANSDÉRMICO",
          "formattedText": "Adesivos = TRANSDÉRMICO"
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
      "value": 9,
      "extractionValue": 9,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Aerossol, bombinha, nebulização = INALATÓRIO",
          "formattedText": "Aerossol, bombinha, nebulização = INALATÓRIO"
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
      "value": 10,
      "extractionValue": 10,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Colírio = OFTÁLMICO",
          "formattedText": "Colírio = OFTÁLMICO"
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
      "value": 11,
      "extractionValue": 11,
      "dataType": "Integer",
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
    }],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC82",
    "customID": "MEDC3a_18",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Outro (especifique):n",
        "formattedText": "<div>Outro&nbsp;<span style='letter-spacing: 0.01em;'>(especifique):</span></div>"
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
            "reference": 300
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC83",
    "customID": "MEDC6_18",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "04. Trouxe a receita ou embalagem ou cartela ou bula?",
        "formattedText": "04. Trouxe a receita ou embalagem ou cartela ou bula?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": "0",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC84",
    "customID": "MEDC9a_18",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?n05a. Unidade por vez:n",
        "formattedText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?<div>05a. Unidade por vez:<br></div>"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC85",
    "customID": "MEDC9b_18",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05b. No de vezes:",
        "formattedText": "05b. No de vezes:"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC86",
    "customID": "MEDC9c_18",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05c. Unidade de tempo:",
        "formattedText": "05c. Unidade de tempo:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Dia",
          "formattedText": "Dia"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Semana",
          "formattedText": "Semana"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Mês",
          "formattedText": "Mês"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC87",
    "customID": "MEDC10_18",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?",
        "formattedText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC88",
    "customID": "MEDC011_18",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?",
        "formattedText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridIntegerLine",
      "gridIntegerList": [{
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_18a",
        "customID": "MEDC11a_18",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Anos:",
            "formattedText": "Anos:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_18b",
        "customID": "MEDC11b_18",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Meses:",
            "formattedText": "Meses:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_18c",
        "customID": "MEDC11c_18",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Dias:",
            "formattedText": "Dias:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC89",
    "customID": "MEDC11o_18",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "ENTREVISTADOR: OUTRO MEDICAMENTO?",
        "formattedText": "<b>ENTREVISTADOR: OUTRO MEDICAMENTO?</b>"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC90",
    "customID": "MEDC2_19",
    "dataType": "String",
    "dataSources": ["medicamentos"],
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "MEDICAMENTO 19:n02. Nome Comercial e Concentração:n",
        "formattedText": "<b>MEDICAMENTO 19:</b><div>02. Nome Comercial e Concentração:<br></div>"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "GridTextQuestion",
    "templateID": "MEDC91",
    "customID": "MEDC02_19",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "QUAL OUTRO MEDICAMENTO 19:n(Se mais de um fármaco utilizar “;” como separador)n",
        "formattedText": "<div><b>QUAL OUTRO MEDICAMENTO 19:</b></div><div><span style='letter-spacing: 0.01em;'><b>(Se mais de um fármaco utilizar “;” como separador)</b></span></div>"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridTextLine",
      "gridTextList": [{
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_19a",
        "customID": "MEDC02_19a",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Outro (especifique):",
            "formattedText": "Outro (especifique):"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_19b",
        "customID": "MEDC02_19b",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Concentração:",
            "formattedText": "Concentração:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridText",
        "templateID": "MEDC02_19c",
        "customID": "MEDC02_19c",
        "dataType": "String",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Unidade:",
            "formattedText": "Unidade:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC92",
    "customID": "MEDC3_19",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "03. Forma Física:",
        "formattedText": "03. Forma Física:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido ou pastilha, cápsula, drágea = ORAL",
          "formattedText": "Comprimido ou pastilha, cápsula, drágea = ORAL"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Comprimido revestido ou de liberação prolongada = ORAL",
          "formattedText": "Comprimido revestido ou de liberação prolongada = ORAL"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Xarope ou solução, suspensão = ORAL",
          "formattedText": "Xarope ou solução, suspensão = ORAL"
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
      "value": 4,
      "extractionValue": 4,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Injetável",
          "formattedText": "Injetável"
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
      "value": 5,
      "extractionValue": 5,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE",
          "formattedText": "Pomada ou creme, gel, spray, xampu = TÓPICO PARA PELE"
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
      "value": 6,
      "extractionValue": 6,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Supositório = RETAL",
          "formattedText": "Supositório = RETAL"
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
      "value": 7,
      "extractionValue": 7,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Óvulo ou creme = VAGINAL",
          "formattedText": "Óvulo ou creme = VAGINAL"
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
      "value": 8,
      "extractionValue": 8,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Adesivos = TRANSDÉRMICO",
          "formattedText": "Adesivos = TRANSDÉRMICO"
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
      "value": 9,
      "extractionValue": 9,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Aerossol, bombinha, nebulização = INALATÓRIO",
          "formattedText": "Aerossol, bombinha, nebulização = INALATÓRIO"
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
      "value": 10,
      "extractionValue": 10,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Colírio = OFTÁLMICO",
          "formattedText": "Colírio = OFTÁLMICO"
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
      "value": 11,
      "extractionValue": 11,
      "dataType": "Integer",
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
    }],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC93",
    "customID": "MEDC3a_19",
    "dataType": "String",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "Outro (especifique):n",
        "formattedText": "<div>Outro&nbsp;<span style='letter-spacing: 0.01em;'>(especifique):</span></div>"
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
            "reference": 300
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC94",
    "customID": "MEDC6_19",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "04. Trouxe a receita ou embalagem ou cartela ou bula?",
        "formattedText": "04. Trouxe a receita ou embalagem ou cartela ou bula?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": "0",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC95",
    "customID": "MEDC9a_19",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?n05a. Unidade por vez:n",
        "formattedText": "05. Como o(a) Sr(a) usou esse medicamento nas últimas duas semanas?<div>05a. Unidade por vez:<br></div>"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999999
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC96",
    "customID": "MEDC9b_19",
    "dataType": "Decimal",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05b. No de vezes:",
        "formattedText": "05b. No de vezes:"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 999999999999997
          }
        },
        "scale": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "scale",
          "data": {
            "canBeIgnored": true,
            "reference": 1
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC97",
    "customID": "MEDC9c_19",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "05c. Unidade de tempo:",
        "formattedText": "05c. Unidade de tempo:"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Dia",
          "formattedText": "Dia"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Semana",
          "formattedText": "Semana"
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
      "value": 3,
      "extractionValue": 3,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Mês",
          "formattedText": "Mês"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC98",
    "customID": "MEDC10_19",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?",
        "formattedText": "06. Quantos dias o(a) Sr(a) usou esse medicamento nas últimas 2 semanas?"
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
        "lowerLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "lowerLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 0
          }
        },
        "upperLimit": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "upperLimit",
          "data": {
            "canBeIgnored": true,
            "reference": 14
          }
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC99",
    "customID": "MEDC011_19",
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
    },
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?",
        "formattedText": "07. Há quanto tempo o(a) Sr(a) usa esse medicamento?"
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
    "lines": [{
      "extents": "StudioObject",
      "objectType": "GridIntegerLine",
      "gridIntegerList": [{
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_19a",
        "customID": "MEDC11a_19",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Anos:",
            "formattedText": "Anos:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_19b",
        "customID": "MEDC11b_19",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Meses:",
            "formattedText": "Meses:"
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
        }
      }, {
        "extents": "SurveyItem",
        "objectType": "GridInteger",
        "templateID": "MEDC011_19c",
        "customID": "MEDC11c_19",
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Dias:",
            "formattedText": "Dias:"
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
        }
      }]
    }]
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC100",
    "customID": "MEDC11o_19",
    "dataType": "Integer",
    "label": {
      "ptBR": {
        "extends": "StudioObject",
        "objectType": "Label",
        "oid": "",
        "plainText": "ENTREVISTADOR: OUTRO MEDICAMENTO?",
        "formattedText": "ENTREVISTADOR: OUTRO MEDICAMENTO?"
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
      "extractionValue": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Sim",
          "formattedText": "Sim"
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
      "extractionValue": 2,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Não",
          "formattedText": "Não"
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
  }, {
    "extents": "SurveyItem",
    "objectType": "AutocompleteQuestion",
    "templateID": "MEDC101",
    "customID": "MEDC2_20",
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
  }, {
    "extents": "SurveyItem",
    "objectType": "GridTextQuestion",
    "templateID": "MEDC102",
    "customID": "MEDC02_20",
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
    },
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
    "lines": []
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC103",
    "customID": "MEDC3_20",
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
    "options": [],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextQuestion",
    "templateID": "MEDC104",
    "customID": "MEDC3a_20",
    "dataType": "String",
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
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC105",
    "customID": "MEDC6_20",
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
    "options": [],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC106",
    "customID": "MEDC9a_20",
    "dataType": "Decimal",
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
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "DecimalQuestion",
    "templateID": "MEDC107",
    "customID": "MEDC9b_20",
    "dataType": "Decimal",
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
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC108",
    "customID": "MEDC9c_20",
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
    "options": [],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "IntegerQuestion",
    "templateID": "MEDC109",
    "customID": "MEDC10_20",
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
        }
      }
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "GridIntegerQuestion",
    "templateID": "MEDC110",
    "customID": "MEDC011_20",
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
    },
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
    "lines": []
  }, {
    "extents": "SurveyItem",
    "objectType": "SingleSelectionQuestion",
    "templateID": "MEDC111",
    "customID": "MEDC11o_20",
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
    "options": [],
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
  }, {
    "extents": "SurveyItem",
    "objectType": "TextItem",
    "templateID": "MEDC112",
    "customID": "MEDC002Z",
    "dataType": "String",
    "value": {
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
    }
  }, {
    "extents": "SurveyItem",
    "objectType": "TextItem",
    "templateID": "MEDC113",
    "customID": "MEDC02Z",
    "dataType": "String",
    "value": {
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
    }
  }],
  "navigationList": [{
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "BEGIN NODE",
    "index": 0,
    "inNavigations": [],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "BEGIN NODE",
      "destination": "MEDC1",
      "name": "BEGIN NODE_MEDC1",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "END NODE",
    "index": 1,
    "inNavigations": [{
      "origin": "MEDC113",
      "index": 114
    }],
    "routes": []
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC1",
    "index": 2,
    "inNavigations": [{
      "origin": "BEGIN NODE",
      "index": 0
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC1",
      "destination": "MEDC2",
      "name": "MEDC1_MEDC2",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC2",
    "index": 3,
    "inNavigations": [{
      "origin": "MEDC1",
      "index": 2
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC2",
      "destination": "MEDC3",
      "name": "MEDC2_MEDC3",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC3",
    "index": 4,
    "inNavigations": [{
      "origin": "MEDC2",
      "index": 3
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC3",
      "destination": "MEDC4",
      "name": "MEDC3_MEDC4",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC4",
    "index": 5,
    "inNavigations": [{
      "origin": "MEDC3",
      "index": 4
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC4",
      "destination": "MEDC5",
      "name": "MEDC4_MEDC5",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC5",
    "index": 6,
    "inNavigations": [{
      "origin": "MEDC4",
      "index": 5
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC5",
      "destination": "MEDC6",
      "name": "MEDC5_MEDC6",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC6",
    "index": 7,
    "inNavigations": [{
      "origin": "MEDC5",
      "index": 6
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC6",
      "destination": "MEDC7",
      "name": "MEDC6_MEDC7",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC7",
    "index": 8,
    "inNavigations": [{
      "origin": "MEDC6",
      "index": 7
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC7",
      "destination": "MEDC8",
      "name": "MEDC7_MEDC8",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC8",
    "index": 9,
    "inNavigations": [{
      "origin": "MEDC7",
      "index": 8
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC8",
      "destination": "MEDC9",
      "name": "MEDC8_MEDC9",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC9",
    "index": 10,
    "inNavigations": [{
      "origin": "MEDC8",
      "index": 9
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC9",
      "destination": "MEDC10",
      "name": "MEDC9_MEDC10",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC10",
    "index": 11,
    "inNavigations": [{
      "origin": "MEDC9",
      "index": 10
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC10",
      "destination": "MEDC11",
      "name": "MEDC10_MEDC11",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC11",
    "index": 12,
    "inNavigations": [{
      "origin": "MEDC10",
      "index": 11
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC11",
      "destination": "MEDC12",
      "name": "MEDC11_MEDC12",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC12",
    "index": 13,
    "inNavigations": [{
      "origin": "MEDC11",
      "index": 12
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC12",
      "destination": "MEDC13",
      "name": "MEDC12_MEDC13",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC13",
    "index": 14,
    "inNavigations": [{
      "origin": "MEDC12",
      "index": 13
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC13",
      "destination": "MEDC14",
      "name": "MEDC13_MEDC14",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC14",
    "index": 15,
    "inNavigations": [{
      "origin": "MEDC13",
      "index": 14
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC14",
      "destination": "MEDC15",
      "name": "MEDC14_MEDC15",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC15",
    "index": 16,
    "inNavigations": [{
      "origin": "MEDC14",
      "index": 15
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC15",
      "destination": "MEDC16",
      "name": "MEDC15_MEDC16",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC16",
    "index": 17,
    "inNavigations": [{
      "origin": "MEDC15",
      "index": 16
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC16",
      "destination": "MEDC17",
      "name": "MEDC16_MEDC17",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC17",
    "index": 18,
    "inNavigations": [{
      "origin": "MEDC16",
      "index": 17
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC17",
      "destination": "MEDC18",
      "name": "MEDC17_MEDC18",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC18",
    "index": 19,
    "inNavigations": [{
      "origin": "MEDC17",
      "index": 18
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC18",
      "destination": "MEDC19",
      "name": "MEDC18_MEDC19",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC19",
    "index": 20,
    "inNavigations": [{
      "origin": "MEDC18",
      "index": 19
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC19",
      "destination": "MEDC20",
      "name": "MEDC19_MEDC20",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC20",
    "index": 21,
    "inNavigations": [{
      "origin": "MEDC19",
      "index": 20
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC20",
      "destination": "MEDC21",
      "name": "MEDC20_MEDC21",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC21",
    "index": 22,
    "inNavigations": [{
      "origin": "MEDC20",
      "index": 21
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC21",
      "destination": "MEDC22",
      "name": "MEDC21_MEDC22",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC22",
    "index": 23,
    "inNavigations": [{
      "origin": "MEDC21",
      "index": 22
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC22",
      "destination": "MEDC23",
      "name": "MEDC22_MEDC23",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC23",
    "index": 24,
    "inNavigations": [{
      "origin": "MEDC22",
      "index": 23
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC23",
      "destination": "MEDC24",
      "name": "MEDC23_MEDC24",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC24",
    "index": 25,
    "inNavigations": [{
      "origin": "MEDC23",
      "index": 24
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC24",
      "destination": "MEDC25",
      "name": "MEDC24_MEDC25",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC25",
    "index": 26,
    "inNavigations": [{
      "origin": "MEDC24",
      "index": 25
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC25",
      "destination": "MEDC26",
      "name": "MEDC25_MEDC26",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC26",
    "index": 27,
    "inNavigations": [{
      "origin": "MEDC25",
      "index": 26
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC26",
      "destination": "MEDC27",
      "name": "MEDC26_MEDC27",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC27",
    "index": 28,
    "inNavigations": [{
      "origin": "MEDC26",
      "index": 27
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC27",
      "destination": "MEDC28",
      "name": "MEDC27_MEDC28",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC28",
    "index": 29,
    "inNavigations": [{
      "origin": "MEDC27",
      "index": 28
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC28",
      "destination": "MEDC29",
      "name": "MEDC28_MEDC29",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC29",
    "index": 30,
    "inNavigations": [{
      "origin": "MEDC28",
      "index": 29
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC29",
      "destination": "MEDC30",
      "name": "MEDC29_MEDC30",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC30",
    "index": 31,
    "inNavigations": [{
      "origin": "MEDC29",
      "index": 30
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC30",
      "destination": "MEDC31",
      "name": "MEDC30_MEDC31",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC31",
    "index": 32,
    "inNavigations": [{
      "origin": "MEDC30",
      "index": 31
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC31",
      "destination": "MEDC32",
      "name": "MEDC31_MEDC32",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC32",
    "index": 33,
    "inNavigations": [{
      "origin": "MEDC31",
      "index": 32
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC32",
      "destination": "MEDC33",
      "name": "MEDC32_MEDC33",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC33",
    "index": 34,
    "inNavigations": [{
      "origin": "MEDC32",
      "index": 33
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC33",
      "destination": "MEDC34",
      "name": "MEDC33_MEDC34",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC34",
    "index": 35,
    "inNavigations": [{
      "origin": "MEDC33",
      "index": 34
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC34",
      "destination": "MEDC35",
      "name": "MEDC34_MEDC35",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC35",
    "index": 36,
    "inNavigations": [{
      "origin": "MEDC34",
      "index": 35
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC35",
      "destination": "MEDC36",
      "name": "MEDC35_MEDC36",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC36",
    "index": 37,
    "inNavigations": [{
      "origin": "MEDC35",
      "index": 36
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC36",
      "destination": "MEDC37",
      "name": "MEDC36_MEDC37",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC37",
    "index": 38,
    "inNavigations": [{
      "origin": "MEDC36",
      "index": 37
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC37",
      "destination": "MEDC38",
      "name": "MEDC37_MEDC38",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC38",
    "index": 39,
    "inNavigations": [{
      "origin": "MEDC37",
      "index": 38
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC38",
      "destination": "MEDC39",
      "name": "MEDC38_MEDC39",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC39",
    "index": 40,
    "inNavigations": [{
      "origin": "MEDC38",
      "index": 39
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC39",
      "destination": "MEDC40",
      "name": "MEDC39_MEDC40",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC40",
    "index": 41,
    "inNavigations": [{
      "origin": "MEDC39",
      "index": 40
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC40",
      "destination": "MEDC41",
      "name": "MEDC40_MEDC41",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC41",
    "index": 42,
    "inNavigations": [{
      "origin": "MEDC40",
      "index": 41
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC41",
      "destination": "MEDC42",
      "name": "MEDC41_MEDC42",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC42",
    "index": 43,
    "inNavigations": [{
      "origin": "MEDC41",
      "index": 42
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC42",
      "destination": "MEDC43",
      "name": "MEDC42_MEDC43",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC43",
    "index": 44,
    "inNavigations": [{
      "origin": "MEDC42",
      "index": 43
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC43",
      "destination": "MEDC44",
      "name": "MEDC43_MEDC44",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC44",
    "index": 45,
    "inNavigations": [{
      "origin": "MEDC43",
      "index": 44
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC44",
      "destination": "MEDC45",
      "name": "MEDC44_MEDC45",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC45",
    "index": 46,
    "inNavigations": [{
      "origin": "MEDC44",
      "index": 45
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC45",
      "destination": "MEDC46",
      "name": "MEDC45_MEDC46",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC46",
    "index": 47,
    "inNavigations": [{
      "origin": "MEDC45",
      "index": 46
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC46",
      "destination": "MEDC47",
      "name": "MEDC46_MEDC47",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC47",
    "index": 48,
    "inNavigations": [{
      "origin": "MEDC46",
      "index": 47
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC47",
      "destination": "MEDC48",
      "name": "MEDC47_MEDC48",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC48",
    "index": 49,
    "inNavigations": [{
      "origin": "MEDC47",
      "index": 48
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC48",
      "destination": "MEDC49",
      "name": "MEDC48_MEDC49",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC49",
    "index": 50,
    "inNavigations": [{
      "origin": "MEDC48",
      "index": 49
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC49",
      "destination": "MEDC50",
      "name": "MEDC49_MEDC50",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC50",
    "index": 51,
    "inNavigations": [{
      "origin": "MEDC49",
      "index": 50
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC50",
      "destination": "MEDC51",
      "name": "MEDC50_MEDC51",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC51",
    "index": 52,
    "inNavigations": [{
      "origin": "MEDC50",
      "index": 51
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC51",
      "destination": "MEDC52",
      "name": "MEDC51_MEDC52",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC52",
    "index": 53,
    "inNavigations": [{
      "origin": "MEDC51",
      "index": 52
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC52",
      "destination": "MEDC53",
      "name": "MEDC52_MEDC53",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC53",
    "index": 54,
    "inNavigations": [{
      "origin": "MEDC52",
      "index": 53
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC53",
      "destination": "MEDC54",
      "name": "MEDC53_MEDC54",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC54",
    "index": 55,
    "inNavigations": [{
      "origin": "MEDC53",
      "index": 54
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC54",
      "destination": "MEDC55",
      "name": "MEDC54_MEDC55",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC55",
    "index": 56,
    "inNavigations": [{
      "origin": "MEDC54",
      "index": 55
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC55",
      "destination": "MEDC56",
      "name": "MEDC55_MEDC56",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC56",
    "index": 57,
    "inNavigations": [{
      "origin": "MEDC55",
      "index": 56
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC56",
      "destination": "MEDC57",
      "name": "MEDC56_MEDC57",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC57",
    "index": 58,
    "inNavigations": [{
      "origin": "MEDC56",
      "index": 57
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC57",
      "destination": "MEDC58",
      "name": "MEDC57_MEDC58",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC58",
    "index": 59,
    "inNavigations": [{
      "origin": "MEDC57",
      "index": 58
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC58",
      "destination": "MEDC59",
      "name": "MEDC58_MEDC59",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC59",
    "index": 60,
    "inNavigations": [{
      "origin": "MEDC58",
      "index": 59
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC59",
      "destination": "MEDC60",
      "name": "MEDC59_MEDC60",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC60",
    "index": 61,
    "inNavigations": [{
      "origin": "MEDC59",
      "index": 60
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC60",
      "destination": "MEDC61",
      "name": "MEDC60_MEDC61",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC61",
    "index": 62,
    "inNavigations": [{
      "origin": "MEDC60",
      "index": 61
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC61",
      "destination": "MEDC62",
      "name": "MEDC61_MEDC62",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC62",
    "index": 63,
    "inNavigations": [{
      "origin": "MEDC61",
      "index": 62
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC62",
      "destination": "MEDC63",
      "name": "MEDC62_MEDC63",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC63",
    "index": 64,
    "inNavigations": [{
      "origin": "MEDC62",
      "index": 63
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC63",
      "destination": "MEDC64",
      "name": "MEDC63_MEDC64",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC64",
    "index": 65,
    "inNavigations": [{
      "origin": "MEDC63",
      "index": 64
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC64",
      "destination": "MEDC65",
      "name": "MEDC64_MEDC65",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC65",
    "index": 66,
    "inNavigations": [{
      "origin": "MEDC64",
      "index": 65
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC65",
      "destination": "MEDC66",
      "name": "MEDC65_MEDC66",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC66",
    "index": 67,
    "inNavigations": [{
      "origin": "MEDC65",
      "index": 66
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC66",
      "destination": "MEDC67",
      "name": "MEDC66_MEDC67",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC67",
    "index": 68,
    "inNavigations": [{
      "origin": "MEDC66",
      "index": 67
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC67",
      "destination": "MEDC68",
      "name": "MEDC67_MEDC68",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC68",
    "index": 69,
    "inNavigations": [{
      "origin": "MEDC67",
      "index": 68
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC68",
      "destination": "MEDC69",
      "name": "MEDC68_MEDC69",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC69",
    "index": 70,
    "inNavigations": [{
      "origin": "MEDC68",
      "index": 69
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC69",
      "destination": "MEDC70",
      "name": "MEDC69_MEDC70",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC70",
    "index": 71,
    "inNavigations": [{
      "origin": "MEDC69",
      "index": 70
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC70",
      "destination": "MEDC71",
      "name": "MEDC70_MEDC71",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC71",
    "index": 72,
    "inNavigations": [{
      "origin": "MEDC70",
      "index": 71
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC71",
      "destination": "MEDC72",
      "name": "MEDC71_MEDC72",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC72",
    "index": 73,
    "inNavigations": [{
      "origin": "MEDC71",
      "index": 72
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC72",
      "destination": "MEDC73",
      "name": "MEDC72_MEDC73",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC73",
    "index": 74,
    "inNavigations": [{
      "origin": "MEDC72",
      "index": 73
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC73",
      "destination": "MEDC74",
      "name": "MEDC73_MEDC74",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC74",
    "index": 75,
    "inNavigations": [{
      "origin": "MEDC73",
      "index": 74
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC74",
      "destination": "MEDC75",
      "name": "MEDC74_MEDC75",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC75",
    "index": 76,
    "inNavigations": [{
      "origin": "MEDC74",
      "index": 75
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC75",
      "destination": "MEDC76",
      "name": "MEDC75_MEDC76",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC76",
    "index": 77,
    "inNavigations": [{
      "origin": "MEDC75",
      "index": 76
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC76",
      "destination": "MEDC77",
      "name": "MEDC76_MEDC77",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC77",
    "index": 78,
    "inNavigations": [{
      "origin": "MEDC76",
      "index": 77
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC77",
      "destination": "MEDC78",
      "name": "MEDC77_MEDC78",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC78",
    "index": 79,
    "inNavigations": [{
      "origin": "MEDC77",
      "index": 78
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC78",
      "destination": "MEDC79",
      "name": "MEDC78_MEDC79",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC79",
    "index": 80,
    "inNavigations": [{
      "origin": "MEDC78",
      "index": 79
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC79",
      "destination": "MEDC80",
      "name": "MEDC79_MEDC80",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC80",
    "index": 81,
    "inNavigations": [{
      "origin": "MEDC79",
      "index": 80
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC80",
      "destination": "MEDC81",
      "name": "MEDC80_MEDC81",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC81",
    "index": 82,
    "inNavigations": [{
      "origin": "MEDC80",
      "index": 81
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC81",
      "destination": "MEDC82",
      "name": "MEDC81_MEDC82",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC82",
    "index": 83,
    "inNavigations": [{
      "origin": "MEDC81",
      "index": 82
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC82",
      "destination": "MEDC83",
      "name": "MEDC82_MEDC83",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC83",
    "index": 84,
    "inNavigations": [{
      "origin": "MEDC82",
      "index": 83
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC83",
      "destination": "MEDC84",
      "name": "MEDC83_MEDC84",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC84",
    "index": 85,
    "inNavigations": [{
      "origin": "MEDC83",
      "index": 84
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC84",
      "destination": "MEDC85",
      "name": "MEDC84_MEDC85",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC85",
    "index": 86,
    "inNavigations": [{
      "origin": "MEDC84",
      "index": 85
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC85",
      "destination": "MEDC86",
      "name": "MEDC85_MEDC86",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC86",
    "index": 87,
    "inNavigations": [{
      "origin": "MEDC85",
      "index": 86
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC86",
      "destination": "MEDC87",
      "name": "MEDC86_MEDC87",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC87",
    "index": 88,
    "inNavigations": [{
      "origin": "MEDC86",
      "index": 87
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC87",
      "destination": "MEDC88",
      "name": "MEDC87_MEDC88",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC88",
    "index": 89,
    "inNavigations": [{
      "origin": "MEDC87",
      "index": 88
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC88",
      "destination": "MEDC89",
      "name": "MEDC88_MEDC89",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC89",
    "index": 90,
    "inNavigations": [{
      "origin": "MEDC88",
      "index": 89
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC89",
      "destination": "MEDC90",
      "name": "MEDC89_MEDC90",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC90",
    "index": 91,
    "inNavigations": [{
      "origin": "MEDC89",
      "index": 90
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC90",
      "destination": "MEDC91",
      "name": "MEDC90_MEDC91",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC91",
    "index": 92,
    "inNavigations": [{
      "origin": "MEDC90",
      "index": 91
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC91",
      "destination": "MEDC92",
      "name": "MEDC91_MEDC92",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC92",
    "index": 93,
    "inNavigations": [{
      "origin": "MEDC91",
      "index": 92
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC92",
      "destination": "MEDC93",
      "name": "MEDC92_MEDC93",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC93",
    "index": 94,
    "inNavigations": [{
      "origin": "MEDC92",
      "index": 93
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC93",
      "destination": "MEDC94",
      "name": "MEDC93_MEDC94",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC94",
    "index": 95,
    "inNavigations": [{
      "origin": "MEDC93",
      "index": 94
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC94",
      "destination": "MEDC95",
      "name": "MEDC94_MEDC95",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC95",
    "index": 96,
    "inNavigations": [{
      "origin": "MEDC94",
      "index": 95
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC95",
      "destination": "MEDC96",
      "name": "MEDC95_MEDC96",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC96",
    "index": 97,
    "inNavigations": [{
      "origin": "MEDC95",
      "index": 96
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC96",
      "destination": "MEDC97",
      "name": "MEDC96_MEDC97",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC97",
    "index": 98,
    "inNavigations": [{
      "origin": "MEDC96",
      "index": 97
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC97",
      "destination": "MEDC98",
      "name": "MEDC97_MEDC98",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC98",
    "index": 99,
    "inNavigations": [{
      "origin": "MEDC97",
      "index": 98
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC98",
      "destination": "MEDC99",
      "name": "MEDC98_MEDC99",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC99",
    "index": 100,
    "inNavigations": [{
      "origin": "MEDC98",
      "index": 99
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC99",
      "destination": "MEDC100",
      "name": "MEDC99_MEDC100",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC100",
    "index": 101,
    "inNavigations": [{
      "origin": "MEDC99",
      "index": 100
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC100",
      "destination": "MEDC101",
      "name": "MEDC100_MEDC101",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC101",
    "index": 102,
    "inNavigations": [{
      "origin": "MEDC100",
      "index": 101
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC101",
      "destination": "MEDC102",
      "name": "MEDC101_MEDC102",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC102",
    "index": 103,
    "inNavigations": [{
      "origin": "MEDC101",
      "index": 102
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC102",
      "destination": "MEDC103",
      "name": "MEDC102_MEDC103",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC103",
    "index": 104,
    "inNavigations": [{
      "origin": "MEDC102",
      "index": 103
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC103",
      "destination": "MEDC104",
      "name": "MEDC103_MEDC104",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC104",
    "index": 105,
    "inNavigations": [{
      "origin": "MEDC103",
      "index": 104
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC104",
      "destination": "MEDC105",
      "name": "MEDC104_MEDC105",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC105",
    "index": 106,
    "inNavigations": [{
      "origin": "MEDC104",
      "index": 105
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC105",
      "destination": "MEDC106",
      "name": "MEDC105_MEDC106",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC106",
    "index": 107,
    "inNavigations": [{
      "origin": "MEDC105",
      "index": 106
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC106",
      "destination": "MEDC107",
      "name": "MEDC106_MEDC107",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC107",
    "index": 108,
    "inNavigations": [{
      "origin": "MEDC106",
      "index": 107
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC107",
      "destination": "MEDC108",
      "name": "MEDC107_MEDC108",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC108",
    "index": 109,
    "inNavigations": [{
      "origin": "MEDC107",
      "index": 108
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC108",
      "destination": "MEDC109",
      "name": "MEDC108_MEDC109",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC109",
    "index": 110,
    "inNavigations": [{
      "origin": "MEDC108",
      "index": 109
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC109",
      "destination": "MEDC110",
      "name": "MEDC109_MEDC110",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC110",
    "index": 111,
    "inNavigations": [{
      "origin": "MEDC109",
      "index": 110
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC110",
      "destination": "MEDC111",
      "name": "MEDC110_MEDC111",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC111",
    "index": 112,
    "inNavigations": [{
      "origin": "MEDC110",
      "index": 111
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC111",
      "destination": "MEDC112",
      "name": "MEDC111_MEDC112",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC112",
    "index": 113,
    "inNavigations": [{
      "origin": "MEDC111",
      "index": 112
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC112",
      "destination": "MEDC113",
      "name": "MEDC112_MEDC113",
      "isDefault": true,
      "conditions": []
    }]
  }, {
    "extents": "SurveyTemplateObject",
    "objectType": "Navigation",
    "origin": "MEDC113",
    "index": 114,
    "inNavigations": [{
      "origin": "MEDC112",
      "index": 113
    }],
    "routes": [{
      "extents": "SurveyTemplateObject",
      "objectType": "Route",
      "origin": "MEDC113",
      "destination": "END NODE",
      "name": "MEDC113_END NODE",
      "isDefault": true,
      "conditions": []
    }]
  }]
}
