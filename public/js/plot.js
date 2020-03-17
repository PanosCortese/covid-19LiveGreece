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
    /////////////
    xaxis: {title:'Date',

    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'black'
    },

    showgrid: false,
    autotick: true,
    ticks: 'outside',
    tickcolor: '#000'
  },
  ////////
  yaxis: {title:"No of Cases",

  titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'black'
      },
      tickangle: 45,
  domain: [0, .45],
    autotick: true,
    ticks: 'outside',
    tickcolor: '#000'
  },
  /////////////
  yaxis2: {
  domain: [.55, 1],
  tickangle: 45,
    autotick: true,
    ticks: 'outside',
    tickcolor: '#000'
  },
  plot_bgcolor:"#A9A9A9",
  paper_bgcolor:"#FFF3",
  annotations: [{
    xref: 'paper',
    yref: 'paper',
    x: 0,
    xanchor: 'right',
    y: 1,
    angle:90,
    yanchor: 'bottom',
    text: 'X axis label',
    showarrow: false
  }]
  };
  var data = [recovered, deaths, total_cases];
  //var dataTotal = [total_cases];
  Plotly.newPlot('plot-death-rec', data, layout);
  //Plotly.newPlot('plot-total', dataTotal, layout);


});
