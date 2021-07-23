import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4themes_dark from "@amcharts/amcharts4/themes/animated";

import data from "./json/tvl_swerve.json"

am4core.useTheme(am4themes_animated);



class App extends Component {
  componentDidMount() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // am4core.useTheme(am4themes_dark);
  // Themes end


    

    var last = data[data.length - 1];

    var chart = am4core.create("durationpie", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        asset: "USDT",
        value: last.usdt
      },
      {
        asset: "USDC",
        value: last.usdc
      },
      {
        asset: "TUSD",
        value: last.tusd
      },
      {
        asset: "DAI",
        value: last.dai
      }
    ];

    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "asset";
    //series.ticks.template.disabled = true;
    series.labels.template.text = "{category}";
    series.slices.template.tooltipHTML = "{category}<br><span style='font-size:14px'><b>$ {value.value.formatNumber('###,###,###,###.')}</b> ({value.percent.formatNumber('##.00')}%)</span>";

    }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div class="card-body" style={{paddingTop:"50px", width: "100%", height: "420px" }}>
        <div id="durationpie"></div>
      </div>
    );
  }
}

export default App;