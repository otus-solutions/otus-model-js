(function() {
  angular
    .module('otusjs.laboratory.configuration')
    .service('otusjs.laboratory.configuration.AliquotDescriptorsService', Service);

  function Service() {
    var self = this;

    self.getLabel = getLabel;
    self.listDescriptors = listDescriptors;
    self.listLabels = listLabels;

    var DESCRIPTORS =
      {
        "BIOCHEMICAL_SERUM":"Bioquímica Soro",
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
}());


