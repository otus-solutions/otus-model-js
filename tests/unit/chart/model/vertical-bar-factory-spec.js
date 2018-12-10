describe('Vertical Bar Chart Factory Test', function () {
  var Mock = {};
  var Injections = {};
  var factory;

  beforeEach(function() {
    angular.mock.module("otusjs");
  });

  beforeEach(function() {
    inject(function(_$injector_) {
      Injections = {
        AliquotDescriptorsService: _$injector_.get('otusjs.laboratory.configuration.AliquotDescriptorsService')
      }
      factory = _$injector_.get('otusjs.model.chart.VerticalBarFactory', Injections);
      mockData();
    });
  });

  it('should test factory create method', function () {
    var object = factory.create();
    expect(object.toJSON()).toEqual(Mock.jsonCreated);

  });

  it('should test factory fromJsonObject method with values', function () {
    var object = factory.fromJsonObject(Mock.data, Mock.labels);
    expect(object.length).toEqual(2);
    expect(object).toEqual(Mock.json);
  });

  it('should test factory fromJsonObject method without values', function () {
    var object = factory.fromJsonObject();
    expect(object.length).toEqual(1);
    expect(object[0].length).toEqual(0);
    expect(object).toEqual([[]]);
  });


  function mockData() {
    Mock.labels = {
      waiting : "Aguardando",
      received : "Recebidos",
    };
    Mock.jsonCreated = {char_title: "", column: "", value: 0}
    Mock.json = [
      [
        {char_title: "Aguardando", column: "Hormônios Jejum Local", value: 36},
        {char_title: "Aguardando", column: "Glicemia Jejum Local", value: 48},
        {char_title: "Aguardando", column: "Buffy Coat MG", value: 1614},
        {char_title: "Aguardando", column: "Insulina Pós Central", value: 106},
        {char_title: "Aguardando", column: "Glicemia Pós", value: 92},
        {char_title: "Aguardando", column: "Bioquimica de Urina", value: 96},
        {char_title: "Aguardando", column: "Hormônios Jejum", value: 88},
        {char_title: "Aguardando", column: "Soro Pós", value: 9706},
        {char_title: "Aguardando", column: "Glicemia Pós Local", value: 9434},
        {char_title: "Aguardando", column: "Cálcio Urinário", value: 272}
      ],
      [
        {char_title: "Recebidos", column: "Hormônios Jejum Local", value: 36},
        {char_title: "Recebidos", column: "Glicemia Jejum Local", value: 48},
        {char_title: "Recebidos", column: "Buffy Coat MG", value: 1614},
        {char_title: "Recebidos", column: "Insulina Pós Central", value: 106},
        {char_title: "Recebidos", column: "Glicemia Pós", value: 92},
        {char_title: "Recebidos", column: "Bioquimica de Urina", value: 96},
        {char_title: "Recebidos", column: "Hormônios Jejum", value: 88},
        {char_title: "Recebidos", column: "Soro Pós", value: 9706},
        {char_title: "Recebidos", column: "Glicemia Pós Local", value: 9434},
        {char_title: "Recebidos", column: "Cálcio Urinário", value: 272}
      ]
    ];
    Mock.data = [
      {
        'title': "FASTING_HORMONE_LOCAL",
        'waiting': 36,
        'received': 36
      },
      {
        'title': "FASTING_GLYCEMIA_LOCAL",
        'waiting': 48,
        'received': 48
      },
      {
        'title': "BUFFY_COAT_MG",
        'waiting': 1614,
        'received': 1614
      },
      {
        'title': "POST_INSULINE_CENTRAL",
        'waiting': 106,
        'received': 106
      },
      {
        'title': "POST_GLYCEMIA",
        'waiting': 92,
        'received': 92
      },
      {
        'title': "BIOCHEMICAL_URINE",
        'waiting': 96,
        'received': 96
      },
      {
        'title': "FASTING_HORMONE",
        'waiting': 88,
        'received': 88
      },
      {
        'title': 'POST_SERUM',
        'waiting': 9706,
        'received': 9706
      },
      {
        'title': 'POST_GLYCEMIA_LOCAL',
        'waiting': 9434,
        'received': 9434
      },
      {
        'title': 'URINARY_CALCIUM',
        'waiting': 272,
        'received': 272
      }
      ]

  }


});
