const a = '20';
const b = '10';
const c = '30';
const ctx = document.getElementById('chart');
const myChart = new Chart(ctx, {
  type: 'radar',
  data: [],
  options: {},
});
const planetChartData = {
  type: 'radar',
  data: {
    labels: ['Adaptability', '', 'Competencies', '', 'Pay-back', '', 'Security', ''],
    datasets: [
      {
        label: 'A',
        data: [a, a - b - 0.5, b, 9.5, 20, 14.5, 20, 14.5],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
        ],
        borderWidth: 0
      }
    ]
  },
  options: {
    elements: {
      point: {
        radius: 0
      }
    },
    responsive: true,
    lineTension: 1,
    legend: {
      display: false,
    },
    scale: {
      pointLabels: {
        fontSize: 20
      },
      gridLines: {
        circular: true
      },
      ticks: {
        display: false,
        beginAtZero: true
      },
    },
    scales: {
      // yAxes: [{
      //   ticks: {
      //     beginAtZero: true,
      //     padding: 25,
      //   }
      // }]
    }
  }
};
var app = new Vue({
  el: "#app",
  data() {
    return {
      planetChartData: planetChartData,
    }
  },
  mounted() {
    this.createChart('chart', this.planetChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  }
})

Chart.defaults.global.defaultFontFamily = "Calibri";