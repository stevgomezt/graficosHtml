
$(function () {
  const sectorChart = Highcharts.chart('container', {
    chart: {
      type: 'bar',
      animation: false
    },
    xAxis: {
      categories: ['Communication Strategies', 'Consumer Discretionary', 'Consumer Staples', 'Energy', 'Financials', 'Health Care', 'Industrials', 'Information Technology', 'Materials', 'Real Estate', 'Utilities']
    },
    yAxis: {
      title: {
        text: null
      }
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    tooltip: {
      shared: true,
      valueSuffix: '%'
    },
    plotOptions: {
      bar: {
        grouping: false,
        shadow: false,
        events: {
          legendItemClick: function () {
            return false;
          }
        }
      },
      allowPointSelect: false,
      series: {
        borderWidth: 0,
        colorByPoint: true,
        colors: ['#4ad594', '#6edda9', '#3baa76', '#5cd99e', '#42bf85', '#80e1b4', '#339567'],
        point: {
          events: {
            mouseOver: function () {
              changeIndexBarToLineAndColorize();
            },
            mouseOut: function () {
              changeIndexBarToLineAndColorize();
            }
          }
        }
      }
    },
    series: [{
      name: 'Large Cap Value',
      id: 'Fund',
      color: '#4ad594',
      data: [15.7, 13.5, 6.7, 5.5, 21.1, 14.2, 14.2, 7.7, 1.4],
      pointPadding: 0
    }, {
      name: 'Russell 1000',
      id: 'Index1',
      color: '#0a1c29',
      data: [15.4, 16.5, 8.7, 10.5, 11.6, 13.2, 8.2, 15.7, 3.4, 2.1, 1.3],
      pointPadding: -0.175
    }, {
      name: 'Russell 2000 Value',
      id: 'Index2',
      color: '#707589',
      data: [13.4, 12.5, 6.7, 13.5, 14.6, 9.2, 7.2, 12.7, 3.4, 1.1, 2.3],
      pointPadding: -0.175
    }]
  });
  sectorChart.series[2].hide(); //hide second index on load
  changeIndexBarToLineAndColorize();

  $(".series-link").on("click", function (e) {
    e.preventDefault();
    var series = parseInt($(this).data("series"), 0);
    switchIndices(series);
  });
  function switchIndices(indexToShow) {
    var indexToHide = indexToShow == 1 ? 2 : 1;
    sectorChart.series[indexToHide].hide();
    sectorChart.series[indexToShow].show();
    $(".series-" + indexToHide + " i").removeClass("fas").addClass("far");
    $(".series-" + indexToShow + " i").removeClass("far").addClass("fas");
    changeIndexBarToLineAndColorize();
  };
  function changeIndexBarToLineAndColorize() {
    $(".highcharts-series-1 rect").attr("height", "3").attr("fill", "#00000000");
    // $(".highcharts-series-1 rect").attr("height", "3").attr("fill", "#0a1c29");
    $(".highcharts-series-2 rect").attr("height", "3").attr("fill", "#707589");
  };
});
