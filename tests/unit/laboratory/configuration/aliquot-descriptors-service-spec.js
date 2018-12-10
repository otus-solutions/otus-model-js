fdescribe("Aliquot Descriptor Service Test", function () {
  var Mock = {};
  var service;

  beforeEach(function () {
    angular.mock.module("otusjs");
  });

  beforeEach(function () {
    inject(function (_$injector_) {
      service = _$injector_.get('otusjs.laboratory.configuration.AliquotDescriptorsService');
      mockData();
    })
  });

  it('should service to be defined', function () {
    expect(service).toBeDefined();
    expect(service.getLabel).toBeDefined();
    expect(service.listDescriptors).toBeDefined();
    expect(service.listLabels).toBeDefined();
  });

  it('should test listDescriptors method', function () {
    expect(service.listDescriptors()).toEqual(Mock.NAMES);
  });

  it('should test listLabels method', function () {
    expect(service.listLabels()).toEqual(Mock.LABELS);
  });

  it('should test getLabel method', function () {
    for (var i = 0; i < Mock.NAMES.length; i++) {
      expect(service.getLabel(Mock.NAMES[i])).toEqual(Mock.LABELS[i]);
    }
  });

  function mockData() {
    Mock.LABELS = [
      "Bioquímica Soro",
      "PCR",
      "Hormônios Jejum Central",
      "Hormônios Jejum Local",
      "Glicemia Jejum Central",
      "Glicemia Jejum Local",
      "Soro Jejum",
      "HbA1C",
      "EDTA Jejum",
      "Buffy Coat RS",
      "Buffy Coat MG",
      "Insulina Pós Central",
      "Insulina Pós Local",
      "Glicemia Pós",
      "Soro Pós",
      "Glicemia Pós Local",
      "Bioquimica de Urina",
      "Cálcio Urinário",
      "Urina",
      "Glicemia Pós-1h",
      "Insulina Pós-1h",
      "Hormônios Jejum",
      "Glicemia Jejum",
      "Buffy Coat",
      "Insulina Pós",
      "Plasma Citratato",
      "Glicemia Pós Central"
    ];

    Mock.NAMES =[
      "BIOCHEMICAL_SERUM",
      "PCR",
      "FASTING_HORMONE_CENTRAL",
      "FASTING_HORMONE_LOCAL",
      "FASTING_GLYCEMIA_CENTRAL",
      "FASTING_GLYCEMIA_LOCAL",
      "FASTING_SERUM",
      "HBA1C",
      "FASTING_EDTA",
      "BUFFY_COAT_RS",
      "BUFFY_COAT_MG",
      "POST_INSULINE_CENTRAL",
      "POST_INSULINE_LOCAL",
      "POST_GLYCEMIA",
      "POST_SERUM",
      "POST_GLYCEMIA_LOCAL",
      "BIOCHEMICAL_URINE",
      "URINARY_CALCIUM",
      "URINE",
      "POST_GLYCEMIA_1H",
      "POST_INSULINE_1H",
      "FASTING_HORMONE",
      "FASTING_GLYCEMIA",
      "BUFFY_COAT",
      "POST_INSULINE",
      "CITRATED_PLASMA",
      "POST_GLYCEMIA_CENTRAL"
    ];
    Mock.DESCRIPTORS =
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
  }
})