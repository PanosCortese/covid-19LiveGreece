$(document).ready(function(){

var dates = JSON.parse(document.getElementById("dates").value);
var total_cases = JSON.parse(document.getElementById("total_cases").value);
var recovered = JSON.parse(document.getElementById("recovered").value);
var deaths = JSON.parse(document.getElementById("deaths").value);

  var total_cases = {
    x: dates,
    y: total_cases,
    yaxis: 'y2',
    type: 'scatter',
    line:{color:"#996100", width:3},
    name: "total_cases"
  };

  var recovered = {
    x: dates,
    y: recovered,
    type: 'scatter',
    line:{color:"#0d853d", width:3},
    name: "recovered"
  };

  var deaths = {
    x: dates,
    y: deaths,
    type: 'scatter',
    line:{color:"#d42828", width:3},
    name:'deaths'
  };

  layout= {
    title: {
    text:"Coronavirus cases in Greece over time",
    font: {
      family: 'Courier New, monospace',
      size: 28
    }
  },
    ///////////// XAXIS
    xaxis: {
       type: 'date',
       tickformat: "%H:%M <br> %d-%b ",

    tickfont: {
        family: 'Old Standard TT, serif',
        size: 20,
        color: 'black'
      },
    showgrid: false,
    autotick: true,
    zeroline: false,
    ticks: 'outside',
    tickcolor: '#000'
  },
  //////// YAXIS
  yaxis: {
  titlefont: {
        family: 'Arial, sans-serif',
        size: 28,
        color: 'black'
      },
      tickangle: 45,
  domain: [0, .45],
  tickfont: {
      family: 'Old Standard TT, serif',
      size: 20,
      color: 'black'
    },
    autotick: true,
    ticks: 'outside',
    tickcolor: '#000'
  },
  ///////////// YAXIS2
  yaxis2: {
  domain: [.55, 1],
  tickangle: 45,

  tickfont: {
      family: 'Old Standard TT, serif',
      size: 20,
      color: 'black'
    },
    autotick: true,
    ticks: 'outside',
    tickcolor: '#000'
  },
  plot_bgcolor:"#f5f5f5",
  paper_bgcolor:"#E0E0E0",
  ///// annotations
  annotations: [{
    textangle :-90,
    font: {
    family: "Arial, sans serif",
    size: 21,
    color: "black",
  },
    xref: 'paper',
    yref: 'paper',
    x: 1,
    xanchor: 'right',
    y: 0.3,
    yanchor: 'bottom',
    text: 'Num of cases',
    showarrow: false
  }],
  ////////// legend
  legend:{
    font: {
      family: 'sans-serif',
      size: 18,
      color: '#000'
    },
    bgcolor: '#E2E2E2',
    bordercolor: '#FFFFFF',
    borderwidth: 2
  }
  };

  var data = [recovered, deaths, total_cases];
  //var dataTotal = [total_cases];
  Plotly.newPlot('plot-death-rec', data, layout);
  //Plotly.newPlot('plot-total', dataTotal, layout);


});
