import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import SWRVLocksData from "../json/swrv_locks.json"
// json/swrv_locks.json

am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
  var vl_swrv_locks_7d;
  var covid_total_timeline;
  

  // $.when(
  //   $.getJSON("json/tvl_swerve.json", function(data) {
  //     json = data;
  //     }),
  //   $.getJSON("json/vol_swerve.json", function(data) {
  //           volumes = data;
  //       }),
  //   $.getJSON("json/swerve_topholders.json", function(data) {
  //           topholders = data;
  //       }),
  //   $.getJSON("json/swrv_top_10_active.json", function(data) {
  //           vl_top = data;
  //       }),
  //   $.getJSON("json/swrv_locks_distribution.json", function(data) {
  //           vl_distribution = data;
  //       }),
  //   $.getJSON("json/swrv_top_10_veswrv.json", function(data) {
  //           vl_veswrv_top = data;
  //       }),
  //   $.getJSON("json/swrv_distribution_active.json", function(data) {
  //           vl_distribution_active = data;
  //       }),
  //   $.getJSON("json/swrv_locks.json", function(data) {
            covid_total_timeline = SWRVLocksData;
  //       }),
  //   $.getJSON("json/swrv_locks_deadweight.json", function(data) {
  //           document.getElementById("deadweight").innerHTML = "" + numberWithCommas(data[0].deadweight.toFixed(0)) + "</span>"; 
  //           deadweight =  data[0].deadweight.toFixed(0);
  //       })
  //   ).then(function() {
    
  //   var last = covid_total_timeline[covid_total_timeline.length-1];
    vl_swrv_locks_7d = covid_total_timeline.slice(covid_total_timeline.length-7,covid_total_timeline.length);
  //   document.getElementById("activeveswrv").innerHTML = "" + numberWithCommas(last.cumulative_veswrv_active.toFixed(0)-deadweight) + "</span>";
  //   var activevotes = last.cumulative_veswrv_active.toFixed(0)-deadweight;
  //   document.getElementById("quorum15").innerHTML = "" + (0.15*last.cumulative_veswrv_active/activevotes*100).toFixed(2) + " %</span>";
  //   document.getElementById("quorum30").innerHTML = "" + (0.30*last.cumulative_veswrv_active/activevotes*100).toFixed(2) + " %</span>";
  //   document.getElementById("totallocks").innerHTML = "" + numberWithCommas(last.cumulative_total_locks) + "</span>";  
  //   document.getElementById("veswrvlocked").innerHTML = "" + numberWithCommas(last.cumulative_veswrv_active.toFixed(0)) + "</span>";  
  //   document.getElementById("swrvlocked").innerHTML = "" + numberWithCommas(last.cumulative_swrv_active) + "</span>";  
  //   $.getJSON("json/swerve_cg.json", function(price){
  //   var vllocked = (last.cumulative_swrv_active *price.usd).toFixed(0);
  //   document.getElementById("valuelocked").innerHTML = "$ " + numberWithCommas(vllocked) + "</span>"; 
  //   })
    
  //   am4core.ready(function() {
    




  // Themes begin
  am4core.useTheme(am4themes_animated);
  // am4core.useTheme(am4themes_dark);
  // Themes end
  
  

  //WEEKLY
  var wchart = am4core.create("nlchart", am4charts.XYChart);
  //wchart.dateFormatter.inputDateFormat = "yyyy-mm-dd";
  wchart.numberFormatter.numberFormat = "#a";
  wchart.numberFormatter.bigNumberPrefixes = [
    { "number": 1e+3, "suffix": "K" },
    { "number": 1e+6, "suffix": "M" },
    { "number": 1e+9, "suffix": "B" }
  ];
  // Add data
  wchart.data = [{
    "date": vl_swrv_locks_7d[0].day,
    "volume": vl_swrv_locks_7d[0].total_locks,
    "color": wchart.colors.next()
  }, {
    "date": vl_swrv_locks_7d[1].day,
    "volume": vl_swrv_locks_7d[1].total_locks,
    "color": wchart.colors.next()
  }, {
    "date": vl_swrv_locks_7d[2].day,
    "volume": vl_swrv_locks_7d[2].total_locks,
    "color": wchart.colors.next()
  }, {
    "date": vl_swrv_locks_7d[3].day,
    "volume": vl_swrv_locks_7d[3].total_locks,
    "color": wchart.colors.next()
  }, {
    "date": vl_swrv_locks_7d[4].day,
    "volume": vl_swrv_locks_7d[4].total_locks,
    "color": wchart.colors.next()
  }, {
    "date": vl_swrv_locks_7d[5].day,
    "volume": vl_swrv_locks_7d[5].total_locks,
    "color": wchart.colors.next()
  }, {
    "date": vl_swrv_locks_7d[6].day,
    "volume": vl_swrv_locks_7d[6].total_locks,
    "color": wchart.colors.next()
  }];
  
  var categoryAxis = wchart.yAxes.push(new am4charts.DateAxis());
  categoryAxis.dataFields.category = "date";
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.location = 0;
  
  var valueAxis = wchart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.minGridDistance = 50;
  valueAxis.title.text = "Number of Locks";
  valueAxis.min = 0;
  
  var columnSeries = wchart.series.push(new am4charts.ColumnSeries());
  //columnSeries.dataFields.categoryY = "date";
  columnSeries.dataFields.dateY = "date";
  columnSeries.dataFields.valueX = "volume";
  //columnSeries.dataFields.openValueX = "startTime";
  columnSeries.calculatePercent = true;
  columnSeries.columns.template.tooltipText = "[bold]{categoryY}[/]\n {valueX} Locks";
  
  var columnTemplate = columnSeries.columns.template;
  columnTemplate.strokeOpacity = 0;
  columnTemplate.propertyFields.fill = "color";
  columnTemplate.height = am4core.percent(100);
  


  
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
    <>
      <div class="card-body" style={{ width: "100%", height: "420px" }}>
        <div id="nlchart"></div>
      </div>
    </>
      
    );
  }
}

export default App;