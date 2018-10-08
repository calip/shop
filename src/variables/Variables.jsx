// // // For tables
const itemHArray = ["SKU", "Name", "QTY", "Cost", "Status"];
const itemArray = [
  ["123QWE", "Gopro XS", 233, "23.99", "in-stock"],
  ["456ASD", "Drone 4M", 212, "23.78", "in-stock"],
  ["789OPK", "Camera MHG", 123, "56.14", "in-stock"]
];

const salesHArray = ["No Transaction", "Customer", "Item", "Amount Paid"];
const salesArray = [
  ["KKMJ223", "Jane Doe", "Gopro XS", "23.99"],
  ["HGJH455", "Mark Mattew", "Drone 4M", "23.78"],
  ["ASFJ787", "John Wise", "Camera MHG", "56.14"]
];
// // // // For dashboard's charts
// Data for Pie Chart
var dataPie = {
  labels: ["40%", "20%", "40%"],
  series: [40, 20, 40]
};
var legendPie = {
  names: ["In Stock", "Out of stock", "Pre Order"],
  types: ["info", "danger", "warning"]
};

// Data for Line Chart
var dataSales = {
  labels: [
    "9:00AM",
    "12:00AM",
    "3:00PM",
    "6:00PM",
    "9:00PM",
    "12:00PM",
    "3:00AM",
    "6:00AM"
  ],
  series: [
    [287, 385, 490, 492, 554, 586, 698, 695],
    [67, 152, 143, 240, 287, 335, 435, 437],
    [23, 113, 67, 108, 190, 239, 307, 308]
  ]
};
var optionsSales = {
  low: 0,
  high: 800,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var responsiveSales = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendSales = {
  names: ["Open", "Click", "Click Second Time"],
  types: ["info", "danger", "warning"]
};

module.exports = {
  itemHArray,
  itemArray,
  salesHArray,
  salesArray,
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales
};
