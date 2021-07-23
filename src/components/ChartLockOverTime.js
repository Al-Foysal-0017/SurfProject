import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import swrvData from "./json/swerve_topholders.json"

am4core.useTheme(am4themes_animated);



class App extends Component {
  componentDidMount() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // am4core.useTheme(am4themes_dark);
    // Themes end  

    var topholders = swrvData;

    var json;
var volumes;
// var topholders;
var vl_top;
var vl_distribution;
var vl_swrv_locks;
var vl_swrv_locks_7d;
var vl_veswrv_top;
var vl_distribution_active;
var covid_total_timeline;
var deadweight;

// Themes begin
// am4core.useTheme(am4themes_animated);
// am4core.useTheme(am4themes_dark);
// Themes end
// var last = covid_total_timeline[covid_total_timeline.length-1];
// vl_swrv_locks_7d = covid_total_timeline.slice(covid_total_timeline.length-7,covid_total_timeline.length);
// document.getElementById("activeveswrv").innerHTML = "" + numberWithCommas(last.cumulative_veswrv_active.toFixed(0)-deadweight) + "</span>";
// var activevotes = last.cumulative_veswrv_active.toFixed(0)-deadweight;
// document.getElementById("quorum15").innerHTML = "" + (0.15*last.cumulative_veswrv_active/activevotes*100).toFixed(2) + " %</span>";
// document.getElementById("quorum30").innerHTML = "" + (0.30*last.cumulative_veswrv_active/activevotes*100).toFixed(2) + " %</span>";
// document.getElementById("totallocks").innerHTML = "" + numberWithCommas(last.cumulative_total_locks) + "</span>";  
// document.getElementById("veswrvlocked").innerHTML = "" + numberWithCommas(last.cumulative_veswrv_active.toFixed(0)) + "</span>";  
// document.getElementById("swrvlocked").innerHTML = "" + numberWithCommas(last.cumulative_swrv_active) + "</span>";  
// $.getJSON("json/swerve_cg.json", function(price){
// var vllocked = (last.cumulative_swrv_active *price.usd).toFixed(0);
// document.getElementById("valuelocked").innerHTML = "$ " + numberWithCommas(vllocked) + "</span>"; 
// })


//WEEKLY
var wchart = am4core.create("wchart", am4charts.XYChart);
//wchart.dateFormatter.inputDateFormat = "yyyy-mm-dd";
wchart.numberFormatter.numberFormat = "#a";
wchart.numberFormatter.bigNumberPrefixes = [
  { "number": 1e+3, "suffix": "K" },
  { "number": 1e+6, "suffix": "M" },
  { "number": 1e+9, "suffix": "B" }
];
// Add data
// wchart.data = [{
//   "date": vl_swrv_locks_7d[0].day,
//   "volume": vl_swrv_locks_7d[0].swrv_total_locked,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[1].day,
//   "volume": vl_swrv_locks_7d[1].swrv_total_locked,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[2].day,
//   "volume": vl_swrv_locks_7d[2].swrv_total_locked,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[3].day,
//   "volume": vl_swrv_locks_7d[3].swrv_total_locked,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[4].day,
//   "volume": vl_swrv_locks_7d[4].swrv_total_locked,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[5].day,
//   "volume": vl_swrv_locks_7d[5].swrv_total_locked,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[6].day,
//   "volume": vl_swrv_locks_7d[6].swrv_total_locked,
//   "color": wchart.colors.next()
// }];

var categoryAxis = wchart.yAxes.push(new am4charts.DateAxis());
categoryAxis.dataFields.category = "date";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;

var valueAxis = wchart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minGridDistance = 50;
valueAxis.title.text = "SWRV";
valueAxis.min = 0;

var columnSeries = wchart.series.push(new am4charts.ColumnSeries());
//columnSeries.dataFields.categoryY = "date";
columnSeries.dataFields.dateY = "date";
columnSeries.dataFields.valueX = "volume";
//columnSeries.dataFields.openValueX = "startTime";
columnSeries.calculatePercent = true;
columnSeries.columns.template.tooltipText = "[bold]{categoryY}[/]\n {valueX} SWRV";

var columnTemplate = columnSeries.columns.template;
columnTemplate.strokeOpacity = 0;
columnTemplate.propertyFields.fill = "color";
columnTemplate.height = am4core.percent(100);

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
// wchart.data = [{
//   "date": vl_swrv_locks_7d[0].day,
//   "volume": vl_swrv_locks_7d[0].total_locks,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[1].day,
//   "volume": vl_swrv_locks_7d[1].total_locks,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[2].day,
//   "volume": vl_swrv_locks_7d[2].total_locks,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[3].day,
//   "volume": vl_swrv_locks_7d[3].total_locks,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[4].day,
//   "volume": vl_swrv_locks_7d[4].total_locks,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[5].day,
//   "volume": vl_swrv_locks_7d[5].total_locks,
//   "color": wchart.colors.next()
// }, {
//   "date": vl_swrv_locks_7d[6].day,
//   "volume": vl_swrv_locks_7d[6].total_locks,
//   "color": wchart.colors.next()
// }];

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

//TOP 10 Active Lockers
var topchart = am4core.create("top20", am4charts.XYChart);
topchart.numberFormatter.numberFormat = "#a";
topchart.numberFormatter.bigNumberPrefixes = [
  { "number": 1e+3, "suffix": "K" },
  { "number": 1e+6, "suffix": "M" },
  { "number": 1e+9, "suffix": "B" }
];

topchart.data = vl_top;

var topcategoryAxis = topchart.xAxes.push(new am4charts.CategoryAxis());
topcategoryAxis.renderer.grid.template.location = 0;
topcategoryAxis.dataFields.category = "Address";
topcategoryAxis.renderer.minGridDistance = 10;
topcategoryAxis.renderer.grid.template.location = 0.5;
topcategoryAxis.renderer.grid.template.strokeDasharray = "1,3";
topcategoryAxis.renderer.labels.template.rotation = -90;
topcategoryAxis.renderer.labels.template.horizontalCenter = "left";
topcategoryAxis.renderer.labels.template.location = 0.5;
topcategoryAxis.renderer.labels.template.disabled = true;

topcategoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
    return -target.maxRight / 2;
})

var topvalueAxis = topchart.yAxes.push(new am4charts.ValueAxis());
topvalueAxis.tooltip.disabled = true;
topvalueAxis.renderer.ticks.template.disabled = true;
topvalueAxis.renderer.axisFills.template.disabled = true;
topvalueAxis.title.text = "SWRV";

var topseries = topchart.series.push(new am4charts.ColumnSeries());
topseries.dataFields.categoryX = "Address";
topseries.dataFields.valueY = "swrv";
topseries.dataFields.days = "days";
topseries.tooltipText = `Locked: [bold]{valueY.value.formatNumber('###,###,###,###.00')}[/] SWRV
Days: [bold]{days}[/]`;
topseries.sequencedInterpolation = true;
topseries.fillOpacity = 0;
topseries.strokeOpacity = 1;
topseries.strokeDashArray = "1,3";
topseries.columns.template.width = 0.01;
topseries.tooltip.pointerOrientation = "vertical";

var topbullet = topseries.bullets.create(am4charts.CircleBullet);

topchart.cursor = new am4charts.XYCursor();

topchart.scrollbarX = new am4core.Scrollbar();
//topchart.scrollbarY = new am4core.Scrollbar();
// Enable export
topchart.exporting.menu = new am4core.ExportMenu();
topchart.exporting.menu.align = "left";

//END TOP 10


    }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
    <>
      {/* <div class="card-body" style={{ width: "100%", height: "420px" }}>
        <div id="top20"></div>
      </div> */}
                <div class="card-body" style={{ width: "100%", height: "420px" }}>
                    <div id="controls"></div>
                    <div id="mchart"></div>
                </div>
    </>
      
    );
  }
}

export default App;