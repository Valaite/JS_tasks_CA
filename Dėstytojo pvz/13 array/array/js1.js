const butai = [
  {
    miestas: "Vilnius",
    kaina: 200000,
    plotas: 50,
    plotoVienetas: "m2",
    kambariuSkaicius: 3,
  },
  {
    miestas: "Kaunas",
    kaina: 300000,
    plotas: 80,
    plotoVienetas: "m2",
    kambariuSkaicius: 5,
  },
  {
    miestas: "Alytus",
    kaina: 55000,
    plotas: 75,
    plotoVienetas: "m2",
    kambariuSkaicius: 4,
  },
  {
    miestas: "Vilnius",
    kaina: 155000,
    plotas: 75,
    plotoVienetas: "m2",
    kambariuSkaicius: 4,
  },
  {
    miestas: "Klaipeda",
    kaina: 170000,
    plotas: 75,
    plotoVienetas: "m2",
    kambariuSkaicius: 3,
  },
  {
    miestas: "Nida",
    kaina: 2000000,
    plotas: 52,
    plotoVienetas: "m2",
    kambariuSkaicius: 4,
  },
  {
    miestas: "Klaipeda",
    kaina: 250000,
    plotas: 100,
    plotoVienetas: "m2",
    kambariuSkaicius: 3,
  },
  {
    miestas: "Jonava",
    kaina: 100000,
    plotas: 75,
    plotoVienetas: "m2",
    kambariuSkaicius: 4,
  },
  {
    miestas: "Šiauliai",
    kaina: 350000,
    plotas: 70,
    plotoVienetas: "m2",
    kambariuSkaicius: 4,
  },
  {
    miestas: "Panevėžys",
    kaina: 100000,
    plotas: 60,
    plotoVienetas: "m2",
    kambariuSkaicius: 3,
  },
  {
    miestas: "Pakruojis",
    kaina: 72000,
    plotas: 68,
    plotoVienetas: "m2",
    kambariuSkaicius: 4,
  },
  {
    miestas: "Naujoji Akmenė",
    kaina: 30000,
    plotas: 70,
    plotoVienetas: "m2",
    kambariuSkaicius: 3,
  },
  {
    kaina: 30000,
    plotas: 70,
    plotoVienetas: "m2",
    kambariuSkaicius: 3,
  },
];

const raides = ["a", "b", "c", "e"];

// filter
butai.filter((butas) => {
  return butas.miestas === "Vilnius";
});

butai.filter((butas) => {
  return butas.kaina <= 100000 && butas.plotas >= 75;
});

// map
const modifikuotasButuObjektas = butai.map((butas) => {
  return {
    miestas: butas.miestas,
    kaina: butas.kaina,
  };
});

// some

butai.some((butas) => {
  return butas.miestas === "Vilnius";
});

butai.some((butas) => butas.miestas === "Vilnius");

// every

butai.every((butas) => butas.miestas);

// splice

butai.splice(1, 2);

// kas antras

butai.filter((butas, index) => {
  return index % 2 === 0;
});
