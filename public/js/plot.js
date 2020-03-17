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
    name: "total_cases"
  };

  var recovered = {
    x: dates,
    y: recovered,
    type: 'scatter',
    name: "recovered"
  };

  var deaths = {
    x: dates,
    y: deaths,
    type: 'scatter',
    name:'deaths'
  };

  layout= {
    title:"Coronavirus cases in Greece over time",
    ///////////// XAXIS
    xaxis: {
    tickfont: {
        family: 'Old Standard TT, serif',
        size: 20,
        color: 'black'
      },
    showgrid: false,
    autotick: true,
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
  plot_bgcolor:"#A9A9A9",
  paper_bgcolor:"#FFF3",
  ///// annotations
  annotations: [{
    textangle :-90,
    font: {
    family: "Arial, sans serif",
    size: 28,
    color: "black",
  },
    xref: 'paper',
    yref: 'paper',
    x: -.03,
    xanchor: 'right',
    y: 0.25,
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
