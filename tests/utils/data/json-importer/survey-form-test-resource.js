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
    "itemContainer": [{
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
        "options": [{
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
        "destination": "ANTC1",
        "name": "BEGIN NODE_ANTC1",
        "isDefault": true,
        "conditions": []
      }]
    },
      {
        "extents": "SurveyTemplateObject",
        "objectType": "Navigation",
        "origin": "END NODE",
        "index": 1,
        "inNavigations": [{
          "origin": "ANTC4",
          "index": 5
        }],
        "routes": []
      },
      {
        "extents": "SurveyTemplateObject",
        "objectType": "Navigation",
        "origin": "ANTC1",
        "index": 2,
        "inNavigations": [{
          "origin": "BEGIN NODE",
          "index": 0
        }],
        "routes": [{
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "ANTC1",
          "destination": "ANTC2",
          "name": "ANTC1_ANTC2",
          "isDefault": true,
          "conditions": []
        }]
      },
      {
        "extents": "SurveyTemplateObject",
        "objectType": "Navigation",
        "origin": "ANTC2",
        "index": 3,
        "inNavigations": [{
          "origin": "ANTC1",
          "index": 2
        }],
        "routes": [{
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
            "conditions": [{
              "extents": "StudioObject",
              "objectType": "RouteCondition",
              "name": "ROUTE_CONDITION_0",
              "rules": [{
                "extents": "SurveyTemplateObject",
                "objectType": "Rule",
                "when": "ANTC2",
                "operator": "equal",
                "answer": "1",
                "isMetadata": false
              }]
            }]
          }
        ]
      },
      {
        "extents": "SurveyTemplateObject",
        "objectType": "Navigation",
        "origin": "ANTC3",
        "index": 4,
        "inNavigations": [{
          "origin": "ANTC2",
          "index": 3
        }],
        "routes": [{
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "ANTC3",
          "destination": "ANTC4",
          "name": "ANTC3_ANTC4",
          "isDefault": true,
          "conditions": []
        }]
      },
      {
        "extents": "SurveyTemplateObject",
        "objectType": "Navigation",
        "origin": "ANTC4",
        "index": 5,
        "inNavigations": [{
          "origin": "ANTC3",
          "index": 4
        },
          {
            "origin": "ANTC2",
            "index": 3
          }
        ],
        "routes": [{
          "extents": "SurveyTemplateObject",
          "objectType": "Route",
          "origin": "ANTC4",
          "destination": "END NODE",
          "name": "ANTC4_END NODE",
          "isDefault": true,
          "conditions": []
        }]
      }
    ]
  },
  "version": 1,
  "acronym": "ANTC",
  "name": "ANTROPOMETRIA",
  "isDiscarded": true,
  "requiredExternalID":true,
};
