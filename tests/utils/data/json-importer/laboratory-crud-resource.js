Test.utils.data.laboratoryCrudConfig = {
  groups: [
    {
      "name" : "DEFAULT",
      "type" : "DEFAULT",
      "tubeSet" : [
        {
          "count" : 8.0,
          "type" : "DBS",
          "moment" : "NONE",
          "group" : "DEFAULT"
        },
        {
          "count" : 2.0,
          "type" : "CRYOTUBE",
          "moment" : "NONE",
          "group" : "DEFAULT"
        },
        {
          "count" : 2.0,
          "type" : "MICROTAINER",
          "moment" : "NONE",
          "group" : "DEFAULT"
        }
      ]
    }
  ],
  tubes: [
    {
      "name" : "DBS",
      "label" : "DBS",
      "color" : "#0083ff"
    },
    {
      "name" : "CRYOTUBE",
      "label" : "Criotubo",
      "color" : "#ffbb00"
    },
    {
      "name" : "MICROTAINER",
      "label" : "Microtainer",
      "color" : "#f6ff00"
    }
  ],
  moments: [
    {
      "name" : "NONE",
      "label" : "Nenhum"
    }
  ],
  aliquots: [
    {
      "objectType" : "AliquotDescriptor",
      "name" : "SERUM",
      "label" : "Soro"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_STORAGE",
      "label" : "Backup_DBS_Armazenamento"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_1",
      "label" : "Backup_DBS_Reteste_1"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_2",
      "label" : "Backup_DBS_Reteste_2"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_3",
      "label" : "Backup_DBS_Reteste_3"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_4",
      "label" : "Backup_DBS_Reteste_4"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_5",
      "label" : "Backup_DBS_Reteste_5"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_6",
      "label" : "Backup_DBS_Reteste_6"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_7",
      "label" : "Backup_DBS_Reteste_7"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_8",
      "label" : "Backup_DBS_Reteste_8"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_9",
      "label" : "Backup_DBS_Reteste_9"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "BACKUP_DBS_RETEST_10",
      "label" : "Backup_DBS_Reteste_10"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "SERUM",
      "label" : "Soro"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "TPHA_SIFILIS",
      "label" : "TPHA Sifilis "
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "VDRL_SIFILIS",
      "label" : "VDRL Sifilis"
    },
    {
      "objectType" : "AliquotDescriptor",
      "name" : "IBR_HIV",
      "label" : "IBR HIV"
    }
  ],
  codeConfiguration: {
    "waveNumberToken" : 1,
    "tubeToken" : 1,
    "palletToken" : 3,
    "cryotubeToken" : 2,
    "lastInsertion" : 12577,
    "unattachedLaboratoryLastInsertion" : 510
  },
  aliquotCenterDescriptors: [
    {
      "objectType" : "AliquotCenterDescriptor",
      "name" : "ATITUDE",
      "aliquotCodeSizes" : [
        9
      ]
    }
  ],
  laboratoryMaterialConfigs: [
    {
      _id: "1234",
      center: "ATITUDE",
      group: {name: "DEFAULT"},
      moment: {
        _id: "3213540",
        name: "NONE",
        label: "NONE"
      },
      tube: {
        _id: "332133",
        type: "Cryotube",
        label: "Criotubo",
        color: "#02d45d",
        exams: [
          {
            _id: "123456",
            name: "TDHA syphilis",
            label: "TDHA sífilis exemplo"
          },
          {
            _id: "123456",
            name: "TDHA syphilis",
            label: "TDHA sífilis exemplo 2"
          }
        ],
        aliquots: [
          {
            _id: '123456',
            name: "TDHA syphilis",
            label: "TDHA sifilis",
            type: "exam",
            exams: [
              {
                _id: "123456",
                name: "TDHA syphilis",
                label: "TDHA sífilis"
              }
            ]
          },
          {
            _id: '123456',
            name: "TDHA syphilis",
            label: "TDHA sifilis",
            type: "exam",
            exams: [
              {
                _id: "123456",
                name: "TDHA syphilis",
                label: "TDHA sífilis"
              }
            ]
          }
        ]
      }
    }
  ]
}