import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import VESWRVDATA from "../json/swrv_top_10_veswrv.json"
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_dark);
  // Themes end
  
  //TOP 10 Active Lockers veSWRV
  var topvechart = am4core.create("top10ve", am4charts.XYChart);
  topvechart.numberFormatter.numberFormat = "#a";
  topvechart.numberFormatter.bigNumberPrefixes = [
    { "number": 1e+3, "suffix": "K" },
    { "number": 1e+6, "suffix": "M" },
    { "number": 1e+9, "suffix": "B" }
  ];
  
  topvechart.data = VESWRVDATA;
  
  var topvecategoryAxis = topvechart.xAxes.push(new am4charts.CategoryAxis());
  topvecategoryAxis.renderer.grid.template.location = 0;
  topvecategoryAxis.dataFields.category = "Address";
  topvecategoryAxis.renderer.minGridDistance = 10;
  topvecategoryAxis.renderer.grid.template.location = 0.5;
  topvecategoryAxis.renderer.grid.template.strokeDasharray = "1,3";
  topvecategoryAxis.renderer.labels.template.rotation = -90;
  topvecategoryAxis.renderer.labels.template.horizontalCenter = "left";
  topvecategoryAxis.renderer.labels.template.location = 0.5;
  topvecategoryAxis.renderer.labels.template.disabled = true;
  
  topvecategoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
      return -target.maxRight / 2;
  })
  
  var topvevalueAxis = topvechart.yAxes.push(new am4charts.ValueAxis());
  topvevalueAxis.tooltip.disabled = true;
  topvevalueAxis.renderer.ticks.template.disabled = true;
  topvevalueAxis.renderer.axisFills.template.disabled = true;
  topvevalueAxis.title.text = "veSWRV";
  
  var topveseries = topvechart.series.push(new am4charts.ColumnSeries());
  topveseries.dataFields.categoryX = "Address";
  topveseries.dataFields.valueY = "veswrv";
  topveseries.dataFields.days = "days";
  topveseries.tooltipText = `Locked: [bold]{valueY.value.formatNumber('###,###,###,###.00')}[/] veSWRV
  Days: [bold]{days}[/]`;
  topveseries.sequencedInterpolation = true;
  topveseries.fillOpacity = 0;
  topveseries.strokeOpacity = 1;
  topveseries.strokeDashArray = "1,3";
  topveseries.columns.template.width = 0.01;
  topveseries.tooltip.pointerOrientation = "vertical";
  
  topveseries.bullets.create(am4charts.CircleBullet);

  topvechart.cursor = new am4charts.XYCursor();
  
  topvechart.scrollbarX = new am4core.Scrollbar();
  //topchart.scrollbarY = new am4core.Scrollbar();
  // Enable export
  topvechart.exporting.menu = new am4core.ExportMenu();
  topvechart.exporting.menu.align = "left";
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
        <div id="top10ve"></div>
      </div>
    </>
      
    );
  }
}

export default App;