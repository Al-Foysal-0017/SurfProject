import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import swrvTop10ActiveJson from "../json/swrv_top_10_active.json"
am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
  var vl_top;

  vl_top = swrvTop10ActiveJson;

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // am4core.useTheme(am4themes_dark);
  // Themes end

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
  topchart.exporting.menu = new am4core.ExportMenu();
  topchart.exporting.menu.align = "left";
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
        <div id="top20"></div>
      </div>
    </>
      
    );
  }
}

export default App;