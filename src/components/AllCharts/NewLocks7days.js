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
  covid_total_timeline = SWRVLocksData;
  vl_swrv_locks_7d = covid_total_timeline.slice(covid_total_timeline.length-7,covid_total_timeline.length);
    
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