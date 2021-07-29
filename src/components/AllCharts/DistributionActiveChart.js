import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import SWRVDistributionActiveData from "../json/swrv_distribution_active.json"
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

am4core.useTheme(am4themes_animated);

let dark = localStorage.getItem('theme')=== 'theme-dark';

class App extends Component {
  componentDidMount() {
  var vl_distribution_active;
  vl_distribution_active = SWRVDistributionActiveData;
  
  // Themes begin
  am4core.useTheme(am4themes_animated);
  if(dark){
    am4core.useTheme(am4themes_dark)
  }
  // Themes end
  
  //Distribution Active
  var chart = am4core.create("distribution_active", am4charts.PieChart3D);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  
  chart.legend = new am4charts.Legend();
  
  chart.data = [
    {
      asset: "< 1 Year",
      value: vl_distribution_active[0].locks
    },
    {
      asset: "1-2 Years",
      value: vl_distribution_active[1].locks
    },
    {
      asset: "2-3 Years",
      value: vl_distribution_active[2].locks
    },
    {
      asset: "3-4 Years",
      value: vl_distribution_active[3].locks
    }
  ];
  
  var series = chart.series.push(new am4charts.PieSeries3D());
  series.dataFields.value = "value";
  series.dataFields.category = "asset";
  //series.ticks.template.disabled = true;
  series.labels.template.text = "{category}";
  series.slices.template.tooltipHTML = "{category}<br><span style='font-size:14px'><b>{value.value.formatNumber('###,###,###,###.')}</b> Locks ({value.percent.formatNumber('##.00')}%)</span>";
  //end pie chart
  
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
    <>
      <div class="card-body" style={{paddingTop:"50px", width: "100%", height: "420px" }}>
        <div id="distribution_active"></div>
      </div>
    </>
      
    );
  }
}

export default App;