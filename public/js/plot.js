$(document).ready(function(){

var dates = JSON.parse(document.getElementById("dates").value);
var total_cases = JSON.parse(document.getElementById("total_cases").value);
var recovered = JSON.parse(document.getElementById("recovered").value);
var deaths = JSON.parse(document.getElementById("deaths").value);

  var total_cases = {
    x: dates,
    y: total_cases,
    type: 'scatter',
    name: "total_cases"
  };

  var recovered = {
    x: dates,
    y: recovered,
    yaxis: 'y2',
    type: 'scatter',
    name: "recovered"
  };

  var deaths = {
    x: dates,
    y: deaths,
    yaxis: 'y2',
    type: 'scatter',
    name:'deaths'
  };


  layout= {
    /////////////
    xaxis: {title:'Date',

    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'lightgrey'
    },

    showgrid: false,
    autotick: true,
    ticks: 'outside',
    tickcolor: '#000'
  },
  ////////
  yaxis: {title:"        No of Cases",

  titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'lightgrey'
      },
      tickangle: 45,
  domain: [0, 0.45],
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
        paper_bgcolor:"#FFF3"
  };
  var data = [recovered, deaths, total_cases];
  //var dataTotal = [total_cases];
  Plotly.newPlot('plot-death-rec', data, layout);
  //Plotly.newPlot('plot-total', dataTotal, layout);


});
