const areaSelected = [
  {
    id: "0",
    title: "Pallet Town",
    shape: "rect",
    name: "Pallet Town",
    fillColor: "#3e3d7b",
    preFillColor: "#3e3d7b",
    strokeColor: "black",
    coords: [110, 405, 134, 380],
    active: true,
  },
  {
    id: "1",
    title: "Road 1",
    shape: "rect",
    name: "Road 1",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [114, 375, 130, 308],
    active: true,
  },
  {
    id: "2",
    title: "Road 2 part 1",
    shape: "rect",
    name: "Road 2 part 1",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [114, 273, 130, 205],
    active: true,
  },
  {
    id: "3",
    title: "Viridian Forest",
    shape: "circle",
    name: "Viridian Forest",
    fillColor: "#3e3d7b",
    preFillColor: "#3e3d7b",
    strokeColor: "black",
    coords: [122, 188, 16],
    active: true,
  },
  {
    id: "4",
    title: "Diglett's Cave",
    shape: "circle",
    name: "Diglett's Cave",
    fillColor: "#3e3d7b",
    preFillColor: "#3e3d7b",
    strokeColor: "black",
    coords: [156, 154, 16],
    active: true,
  },
  {
    id: "5",
    title: "Road 2 part 2",
    shape: "rect",
    name: "Road 2 part 2",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [114, 172, 130, 138],
    active: true,
  },
  {
    id: "6",
    title: "Pewter City",
    shape: "rect",
    name: "Pewter City",
    fillColor: "#3e3d7b",
    preFillColor: "#3e3d7b",
    strokeColor: "black",
    coords: [110, 108, 134, 132],
    active: true,
  },
  {
    id: "7",
    title: "Road 3",
    shape: "rect",
    name: "Road 3",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [140, 110, 232, 130],
    active: true,
  },
  {
    id: "8",
    title: "Road 4 part 1",
    shape: "poly",
    name: "Road 4 part 1",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [215, 108, 215, 75, 242, 75, 242, 94, 232, 94, 232, 108],
    active: true,
    disabled: false,
    polygon: [
      [215, 108],
      [215, 75],
      [242, 75],
      [242, 94],
      [232, 94],
      [232, 108],
    ],
  },
  {
    id: "9",
    title: "Mount Moon",
    shape: "circle",
    name: "Mount Moon",
    fillColor: "#3e3d7b",
    preFillColor: "#3e3d7b",
    strokeColor: "black",
    coords: [259, 85, 16],
    active: true,
  },
  {
    id: "10",
    title: "Road 4 part 2",
    shape: "rect",
    name: "Road 4 part 2",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [275, 75, 377, 95],
    active: true,
    disabled: false,
  },
  {
    id: "11",
    title: "Road 5",
    shape: "rect",
    name: "Road 5",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [385, 104, 404, 170],
  },
  {
    id: "12",
    title: "Road 6",
    shape: "rect",
    name: "Road 6",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [385, 205, 404, 306],
  },
  {
    id: "13",
    title: "Road 7",
    shape: "rect",
    name: "Road 7",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [311, 180, 378, 197],
  },
  {
    id: "14",
    title: "Road 8",
    shape: "rect",
    name: "Road 8",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [412, 180, 515, 197],
  },
  {
    id: "15",
    title: "Road 9",
    shape: "rect",
    name: "Road 9",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [412, 75, 522, 94],
  },
  {
    id: "16",
    title: "Road 10 part 1",
    shape: "rect",
    name: "Road 10 part 1",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [522, 75, 540, 103],
  },
  {
    id: "17",
    title: "Rock Tunnel",
    shape: "circle",
    name: "Rock Tunnel",
    fillColor: "#3e3d7b",
    preFillColor: "#3e3d7b",
    strokeColor: "black",
    coords: [531, 120, 16],
    active: true,
  },
  {
    id: "18",
    title: "Power Plant",
    shape: "circle",
    name: "Power Plant",
    fillColor: "#3e3d7b",
    preFillColor: "#3e3d7b",
    strokeColor: "black",
    coords: [565, 153, 16],
    active: true,
  },
  {
    id: "19",
    title: "Road 10 part 2",
    shape: "rect",
    name: "Road 10 part 2",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [522, 138, 540, 170],
  },
  {
    id: "20",
    title: "Road 11",
    shape: "rect",
    name: "Road 11",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [412, 316, 522, 333],
  },
  {
    id: "21",
    title: "Road 12",
    shape: "rect",
    name: "Road 12",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [522, 205, 540, 383],
  },
  {
    id: "22",
    title: "Road 13",
    shape: "rect",
    name: "Road 13",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [438, 384, 540, 401],
  },
  {
    id: "23",
    title: "Road 14",
    shape: "rect",
    name: "Road 14",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [420, 384, 437, 469],
  },
  {
    id: "24",
    title: "Road 15",
    shape: "rect",
    name: "Road 15",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [344, 452, 419, 469],
  },
  {
    id: "25",
    title: "Road 16",
    shape: "rect",
    name: "Road 16",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [181, 180, 275, 197],
  },
  {
    id: "26",
    title: "Road 17",
    shape: "rect",
    name: "Road 17",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [181, 198, 199, 451],
  },
  {
    id: "27",
    title: "Road 18",
    shape: "rect",
    name: "Road 18",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [181, 452, 310, 470],
  },
  {
    id: "28",
    title: "Raod 19",
    shape: "rect",
    name: "Road 19",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [318, 478, 335, 537],
  },
  {
    id: "29",
    title: "Raod 20 part 1",
    shape: "rect",
    name: "Road 20 part 1",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [240, 521, 317, 537],
  },
  {
    id: "30",
    title: "Seafoam Islands",
    shape: "circle",
    name: "Seafoam Islands",
    fillColor: "#3e3d7b",
    preFillColor: "#3e3d7b",
    strokeColor: "black",
    coords: [224, 528, 16],
    active: true,
  },
  {
    id: "31",
    title: "Raod 20 part 2",
    shape: "rect",
    name: "Road 20 part 2",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [140, 521, 208, 537],
  },
  {
    id: "32",
    title: "Road 21",
    shape: "rect",
    name: "Road 21",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [114, 410, 130, 512],
    active: true,
  },
  {
    id: "33",
    title: "Road 22",
    shape: "rect",
    name: "Road 22",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [46, 282, 105, 298],
    active: true,
  },
  {
    id: "34",
    title: "Road 23 part 1",
    shape: "rect",
    name: "Road 23 part 1",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [46, 170, 62, 281],
    active: true,
  },
  {
    id: "35",
    title: "Victory Road",
    shape: "circle",
    name: "Victory Road",
    fillColor: "#3e3d7b",
    preFillColor: "#3e3d7b",
    strokeColor: "black",
    coords: [54, 153, 16],
    active: true,
  },
  {
    id: "36",
    title: "Road 23 part 2",
    shape: "rect",
    name: "Road 23 part 2",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [46, 103, 62, 137],
    active: true,
  },
  {
    id: "37",
    title: "Road 24",
    shape: "rect",
    name: "Road 24",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [385, 9, 404, 68],
  },
  {
    id: "38",
    title: "Road 25",
    shape: "rect",
    name: "Road 25",
    fillColor: "#CD5C5C",
    preFillColor: "#CD5C5C",
    strokeColor: "black",
    coords: [405, 9, 468, 26],
  },
];

export default areaSelected;
