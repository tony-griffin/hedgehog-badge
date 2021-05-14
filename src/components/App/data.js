const data = [
  {
    name: "Lion",
    scientificName: "Panthero leo",
    id: 1,
    size: 140,
    diet: ["meat"],
  },
  {
    name: "Gorilla",
    scientificName: "Gorilla beringei",
    id: 2,
    size: 205,
    diet: ["plants", "insects"],
    additional: {
      notes:
        "This is the eastern gorilla. There is also a western gorilla that is a different species.",
    },
  },
  {
    name: "Zebra",
    scientificName: "Equus quagga",
    id: 3,
    size: 322,
    diet: ["plants"],
    additional: {
      notes: "There are three different species of zebra.",
      link: "https://en.wikipedia.org/wiki/Zebra",
    },
  },
];

export default data;
