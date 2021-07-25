import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import LocksDataNew from "../json/swrv_locks.json"

am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
  var covid_total_timeline;
  covid_total_timeline = LocksDataNew;
  
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // am4core.useTheme(am4themes_dark);
  // Themes end
  
  
    var numberFormatter = new am4core.NumberFormatter();
  
    var backgroundColor = am4core.color("#1e2128");
    var activeColor = am4core.color("#84F8E6");
    var totalColor = am4core.color("#7D66D7");
    var expiredColor = am4core.color("#6794DC");
    var activelocksColor = am4core.color("#84F8E6");
    var totallocksColor = am4core.color("#7D66D7");
    var expiredlocksColor = am4core.color("#6794DC");
    var activeswrvColor = am4core.color("#84F8E6");
    var totalswrvColor = am4core.color("#7D66D7");
    var expiredswrvColor = am4core.color("#6794DC");
    var activeveswrvColor = am4core.color("#84F8E6");
    var totalveswrvColor = am4core.color("#7D66D7");
    var expiredveswrvColor = am4core.color("#6794DC");
  
    // for an easier access by key
    var colors = { activelocks: activelocksColor, totallocks: totallocksColor, expiredlocks: expiredlocksColor, activeswrv: activeswrvColor, totalswrv: totalswrvColor, expiredswrv: expiredswrvColor, activeveswrv: activeveswrvColor, totalveswrv: totalveswrvColor, expiredveswrv: expiredveswrvColor };
  
    // var countryColor = am4core.color("#3b3b3b");
    // var countryStrokeColor = am4core.color("#000000");
    var buttonStrokeColor = am4core.color("#ffffff");
    // var countryHoverColor = am4core.color("#1b1b1b");
    // var activeCountryColor = am4core.color("#0f0f0f");
  
    // var currentIndex;
    // var currentCountry = "India";
  
    // last date of the data DATE ISSUE HERE
    // var lastDate = new Date(covid_total_timeline[covid_total_timeline.length-1].day);
    // var currentDate = lastDate;
    //var lastDate = "2020-4-17";
  
    // var countryDataTimeout;
  
    var currentType;
  
    var currentTypeName;
  
    
    // main container
    // https://www.amcharts.com/docs/v4/concepts/svg-engine/containers/
    var container = am4core.create("mchart", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
  
    container.tooltip = new am4core.Tooltip();
    container.tooltip.background.fill = am4core.color("#000000");
    container.tooltip.background.stroke = activeColor;
    container.tooltip.fontSize = "0.9em";
    container.tooltip.getFillFromObject = false;
    container.tooltip.getStrokeFromObject = false;
  
    // buttons & chart container
    var buttonsAndChartContainer = container.createChild(am4core.Container);
    buttonsAndChartContainer.layout = "vertical";
    buttonsAndChartContainer.height = am4core.percent(100); // make this bigger if you want more space for the chart
    buttonsAndChartContainer.width = am4core.percent(100);
  
    // country name and buttons container
    var nameAndButtonsContainer = buttonsAndChartContainer.createChild(am4core.Container)
    nameAndButtonsContainer.width = am4core.percent(100);
    nameAndButtonsContainer.padding(0, 10, 5, 20);
    nameAndButtonsContainer.layout = "horizontal";
  
  
    // buttons container (active/confirmed/recovered/deaths)
    var buttonsContainer = nameAndButtonsContainer.createChild(am4core.Container);
    buttonsContainer.layout = "grid";
    buttonsContainer.width = am4core.percent(100);
    buttonsContainer.x = 10;
    buttonsContainer.contentAlign = "left";
    buttonsContainer.fontSize = "0.65em";
  
    // Chart & slider container
    var chartAndSliderContainer = buttonsAndChartContainer.createChild(am4core.Container);
    chartAndSliderContainer.layout = "vertical";
    chartAndSliderContainer.height = am4core.percent(100);
    chartAndSliderContainer.width = am4core.percent(100);
    chartAndSliderContainer.background = new am4core.RoundedRectangle();
    chartAndSliderContainer.background.fill = am4core.color("#000000");
    chartAndSliderContainer.background.cornerRadius(30, 30, 0, 0)
    chartAndSliderContainer.background.fillOpacity = 0.25;
    chartAndSliderContainer.paddingTop = 30;
    chartAndSliderContainer.paddingBottom = 0;
  
    // Slider container
    var sliderContainer = chartAndSliderContainer.createChild(am4core.Container);
    sliderContainer.width = am4core.percent(100);
    sliderContainer.padding(0, 15, 15, 10);
    sliderContainer.layout = "horizontal";
  
    var slider = sliderContainer.createChild(am4core.Slider);
    slider.width = am4core.percent(100);
    slider.valign = "middle";
    slider.background.opacity = 0.4;
    slider.opacity = 0.7;
    slider.background.fill = am4core.color("#ffffff");
    slider.marginLeft = 20;
    slider.marginRight = 35;
    slider.height = 15;
    slider.start = 1;
  
    // make slider grip look like play button
    //slider.startGrip.background.fill = playButton.background.fill;
    slider.startGrip.background.strokeOpacity = 0;
    slider.startGrip.icon.stroke = am4core.color("#ffffff");
    //slider.startGrip.background.states.copyFrom(playButton.background.states)
  
    // CHART
    // https://www.amcharts.com/docs/v4/chart-types/xy-chart/
    var lineChart = chartAndSliderContainer.createChild(am4charts.XYChart);
    lineChart.fontSize = "0.8em";
    lineChart.paddingRight = 30;
    lineChart.paddingLeft = 30;
    lineChart.maskBullets = false;
    lineChart.zoomOutButton.disabled = true;
    lineChart.paddingBottom = 5;
    lineChart.paddingTop = 3;
  
    // make a copy of data as we will be modifying it
    lineChart.data = covid_total_timeline;
    // date axis
    // https://www.amcharts.com/docs/v4/concepts/axes/date-axis/
    var dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.grid.template.stroke = am4core.color("#000000");
    dateAxis.renderer.grid.template.strokeOpacity = 0.25;
    // dateAxis.max = lastDate.getTime() + am4core.time.getDuration("day", 5);
    dateAxis.tooltip.label.fontSize = "0.8em";
    dateAxis.tooltip.background.fill = activeColor;
    dateAxis.tooltip.background.stroke = activeColor;
    dateAxis.renderer.labels.template.fill = am4core.color("#ffffff");
    
    dateAxis.renderer.labels.template.adapter.add("fillOpacity", function(fillOpacity, target){
        return dateAxis.valueToPosition(target.dataItem.value) + 0.1;
    })
  
    // value axis
    // https://www.amcharts.com/docs/v4/concepts/axes/value-axis/
    var valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = true;
    valueAxis.interpolationDuration = 3000;
    valueAxis.renderer.grid.template.stroke = am4core.color("#000000");
    valueAxis.renderer.grid.template.strokeOpacity = 0.25;
    valueAxis.renderer.minGridDistance = 30;
    valueAxis.renderer.maxLabelPosition = 0.98;
    //valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.tooltip.disabled = true;
    valueAxis.extraMax = 0.05;
    valueAxis.maxPrecision = 0;
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.verticalCenter = "bottom";
    valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");
    valueAxis.renderer.labels.template.padding(2, 2, 2, 2);
    valueAxis.adapter.add("max", function(max, target) {
      if (max < 5) {
        max = 5
      }
      return max;
    })
  
    valueAxis.adapter.add("min", function(min, target) {
      if (!seriesTypeSwitch.isActive) {
        if (min < 0) {
          min = 0;
        }
      }
      return min;
    })
  
    // cursor
    // https://www.amcharts.com/docs/v4/concepts/chart-cursor/
    lineChart.cursor = new am4charts.XYCursor();
    lineChart.cursor.maxTooltipDistance = 0;
    lineChart.cursor.behavior = "none"; // set zoomX for a zooming possibility
    lineChart.cursor.lineY.disabled = true;
    lineChart.cursor.lineX.stroke = activeColor;
    lineChart.cursor.xAxis = dateAxis;
  
    // legend
    // https://www.amcharts.com/docs/v4/concepts/legend/  
    lineChart.legend = new am4charts.Legend();
    lineChart.legend.parent = lineChart.plotContainer;
    lineChart.legend.labels.template.fill = am4core.color("#ffffff");
    lineChart.legend.markers.template.height = 8;
    lineChart.legend.contentAlign = "left";
    lineChart.legend.position = "absolute";
    lineChart.legend.layout="vertical";
    lineChart.legend.x = 0;
    lineChart.legend.y=0;
    lineChart.legend.fontSize = "11px";
    lineChart.legend.itemContainers.template.valign = "middle";
    var legendDown = false;
    lineChart.legend.itemContainers.template.events.on("down", function() {
      legendDown = true;
    })
    lineChart.legend.itemContainers.template.events.on("up", function() {
      setTimeout(function() {
        legendDown = false;
      }, 100)
    })
  
  
    var seriesTypeSwitch = lineChart.legend.createChild(am4core.SwitchButton);
    seriesTypeSwitch.leftLabel.text = "totals";
    seriesTypeSwitch.rightLabel.text = "day change"
    seriesTypeSwitch.leftLabel.fill = am4core.color("#ffffff");
    seriesTypeSwitch.rightLabel.fill = am4core.color("#ffffff");
  
    seriesTypeSwitch.events.on("down", function() {
      legendDown = true;
    })
    seriesTypeSwitch.events.on("up", function() {
      setTimeout(function() {
        legendDown = false;
      }, 100)
    })
  
    seriesTypeSwitch.events.on("toggled", function() {
      if (seriesTypeSwitch.isActive) {
        if (!columnSeries) {
          createColumnSeries();
        }
  
        for (var key in columnSeries) {
         columnSeries[key].hide();
        }
  
        for (var key in series) {
          series[key].hiddenInLegend = true;
          series[key].hide();
        }
  
        columnSeries[currentType].show();
      }
      else {
        for (var key in columnSeries) {
          columnSeries[key].hiddenInLegend = true;
          columnSeries[key].hide();
        }
  
        for (var key in series) {
          series[key].hiddenInLegend = false;
          series[key].hide();
        }
  
        series[currentType].show();
  
      }
    })
  
    function updateColumnsFill() {
      columnSeries.active.columns.each(function(column) {
        if (column.dataItem.values.valueY.previousChange < 0) {
          column.fillOpacity = 0;
          column.strokeOpacity = 0.6;
        }
        else {
          column.fillOpacity = 0.6;
          column.strokeOpacity = 0;
        }
      })
    }
  
  
    // create series
    var activelocksSeries = addSeries("activelocks", activeColor);
    // active series is visible initially
    activelocksSeries.tooltip.disabled = true;
    activelocksSeries.hidden = false;
    var expiredlocksSeries = addSeries("expiredlocks", expiredColor);
    var totallocksSeries = addSeries("totallocks", totalColor);
    var activeswrvSeries = addSeries("activeswrv", activeColor);
    var expiredswrvSeries = addSeries("expiredswrv", expiredColor);
    var totalswrvSeries = addSeries("totalswrv", totalColor);
    var activeveswrvSeries = addSeries("activeveswrv", activeColor);
    var expiredveswrvSeries = addSeries("expiredveswrv", expiredColor);
    var totalveswrvSeries = addSeries("totalveswrv", totalColor);
  
    var series = { activelocks: activelocksSeries, totallocks: totallocksSeries, expiredlocks: expiredlocksSeries, activeswrv: activeswrvSeries, totalswrv: totalswrvSeries, expiredswrv: expiredswrvSeries, activeveswrv: activeveswrvSeries, totalveswrv: totalveswrvSeries, expiredveswrv: expiredveswrvSeries };
    // add series
    function addSeries(name, color) {
      var series = lineChart.series.push(new am4charts.LineSeries())
      switch(name){
        case "totallocks":
        series.dataFields.valueY = "cumulative_total_locks";
        series.legendSettings.labelText = "[bold {color}]Total # Locks[/]";
        break;
        case "activelocks":
        series.dataFields.valueY = "cumulative_locks_active";
        series.legendSettings.labelText = "[bold {color}]Active # Locks[/]";
        break;
        case "expiredlocks":
        series.dataFields.valueY = "cumulative_locks_expired";
        series.legendSettings.labelText = "[bold {color}]Expired # Locks[/]";
        break;
        case "totalswrv":
        series.dataFields.valueY = "cumulative_swrv_total";
        series.legendSettings.labelText = "[bold {color}]Total SWRV Locks[/]";
        break;
        case "activeswrv":
        series.dataFields.valueY = "cumulative_swrv_active";
        series.legendSettings.labelText = "[bold {color}]Active SWRV Locks[/]";
        break;
        case "expiredswrv":
        series.dataFields.valueY = "cumulative_swrv_expired";
        series.legendSettings.labelText = "[bold {color}]Expired SWRV Locks[/]";
        break;
        case "totalveswrv":
        series.dataFields.valueY = "cumulative_veswrv_total";
        series.legendSettings.labelText = "[bold {color}]Total veSWRV[/]";
        break;
        case "activeveswrv":
        series.dataFields.valueY = "cumulative_veswrv_active";
        series.legendSettings.labelText = "[bold {color}]Active veSWRV[/]";
        break;
        case "expiredveswrv":
        series.dataFields.valueY = "cumulative_veswrv_expired";
        series.legendSettings.labelText = "[bold {color}]Expired veSWRV[/]";
        break;
        default:
        series.dataFields.valueY = name;
        break;
      }
      series.dataFields.dateX = "day";
      series.name = capitalizeFirstLetter(name);
      series.strokeOpacity = 0.6;
      series.stroke = color;
      series.fill = color;
      series.maskBullets = false;
      series.minBulletDistance = 10;
      series.hidden = true;
      series.hideTooltipWhileZooming = true;
  
  
      // series bullet
      var bullet = series.bullets.push(new am4charts.CircleBullet());
  
      // only needed to pass it to circle
      var bulletHoverState = bullet.states.create("hover");
      bullet.setStateOnChildren = true;
  
      bullet.circle.fillOpacity = 1;
      bullet.circle.fill = backgroundColor;
      bullet.circle.radius = 2;
  
      var circleHoverState = bullet.circle.states.create("hover");
      circleHoverState.properties.fillOpacity = 1;
      circleHoverState.properties.fill = color;
      circleHoverState.properties.scale = 1.4;
  
      // tooltip setup
      series.tooltip.pointerOrientation = "down";
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fillOpacity = 0.2;
      series.tooltip.background.fill = am4core.color("#000000");
      series.tooltip.dy = -4;
      series.tooltip.fontSize = "0.8em";
          switch(name){
        case "totallocks":
        series.tooltipText = "Total Locks: {valueY}";
        break;
        case "activelocks":
        series.tooltipText = "Active Locks: {valueY}";
        break;
        case "expiredlocks":
        series.tooltipText = "Expired Locks: {valueY}";
        break;
        case "totalswrv":
        series.tooltipText = "Total SWRV: {valueY}";
        break;
        case "activeswrv":
        series.tooltipText = "Active SWRV: {valueY}";
        break;
        case "expiredswrv":
        series.tooltipText = "Expired SWRV: {valueY}";
        break;
        case "totalveswrv":
        series.tooltipText = "Total veSWRV: {valueY}";
        break;
        case "activeveswrv":
        series.tooltipText = "Active veSWRV: {valueY}";
        break;
        case "expiredveswrv":
        series.tooltipText = "Expired veSWRV: {valueY}";
        break;
        default:
        // sseries.tooltipText = "{name}: {valueY}";
        break;
      }
  
      return series;
    }
  
  
    var series = { activelocks: activelocksSeries, totallocks: totallocksSeries, expiredlocks: expiredlocksSeries, activeswrv: activeswrvSeries, totalswrv: totalswrvSeries, expiredswrv: expiredswrvSeries, activeveswrv: activeveswrvSeries, totalveswrv: totalveswrvSeries, expiredveswrv: expiredveswrvSeries };
  
    var columnSeries;
  
    function createColumnSeries() {
      columnSeries = {}
      columnSeries.activelocks = addColumnSeries("activelocks", activeColor);
      columnSeries.activelocks.events.on("validated", function() {
        //updateColumnsFill();
      })
  
      columnSeries.expiredlocks = addColumnSeries("expiredlocks", expiredColor);
      columnSeries.totallocks = addColumnSeries("totallocks", totalColor);
      columnSeries.activeswrv = addColumnSeries("activeswrv", activeColor);
      columnSeries.expiredswrv = addColumnSeries("expiredswrv", expiredColor);
      columnSeries.totalswrv = addColumnSeries("totalswrv", totalColor);
      columnSeries.activeveswrv = addColumnSeries("activeveswrv", activeColor);
      columnSeries.expiredveswrv = addColumnSeries("expiredveswrv", expiredColor);
      columnSeries.totalveswrv = addColumnSeries("totalveswrv", totalColor);
    }
  
    // add series
    function addColumnSeries(name, color) {
      var series = lineChart.series.push(new am4charts.ColumnSeries())
          //var series = lineChart.series.push(new am4charts.LineSeries())
      switch(name){
        case "totallocks":
        series.dataFields.valueY = "cumulative_total_locks";
        break;
        case "activelocks":
        series.dataFields.valueY = "cumulative_locks_active";
        break;
        case "expiredlocks":
        series.dataFields.valueY = "cumulative_locks_expired";
        break;
        case "totalswrv":
        series.dataFields.valueY = "cumulative_swrv_total";
        break;
        case "activeswrv":
        series.dataFields.valueY = "cumulative_swrv_active";
        break;
        case "expiredswrv":
        series.dataFields.valueY = "cumulative_swrv_expired";
        break;
        case "totalveswrv":
        series.dataFields.valueY = "cumulative_veswrv_total";
        break;
        case "activeveswrv":
        series.dataFields.valueY = "cumulative_veswrv_active";
        break;
        case "expiredveswrv":
        series.dataFields.valueY = "cumulative_veswrv_expired";
        break;
        default:
        series.dataFields.valueY = name;
        break;
      }
      series.dataFields.valueYShow = "previousChange";
      series.dataFields.dateX = "day";
      series.name = capitalizeFirstLetter(name);
      series.hidden = true;
      series.stroke = color;
      series.fill = color;
      series.columns.template.fillOpacity = 0.6;
      series.columns.template.strokeOpacity = 0;
      series.hideTooltipWhileZooming = true;
      series.clustered = false;
      series.hiddenInLegend = true;
      series.columns.template.width = am4core.percent(50);
  
      // tooltip setup
      series.tooltip.pointerOrientation = "down";
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fillOpacity = 0.2;
      series.tooltip.background.fill = am4core.color("#000000");
      series.tooltip.fontSize = "0.8em";
      series.tooltipText = "{name}: {valueY.previousChange.formatNumber('+#,###|#,###|0')}";
  
      return series;
    }
  
  
    // data warning label
    var label = lineChart.plotContainer.createChild(am4core.Label);
    //label.text = "Current day stats may be incomplete until states submit their data.";
    label.fill = am4core.color("#ffffff");
    label.fontSize = "0.8em";
    label.paddingBottom = 4;
    label.opacity = 0.5;
    label.align = "right";
    label.horizontalCenter = "right";
    label.verticalCenter = "bottom";
  
    // BUTTONS
    // create buttons
    var activeButton = addButton("activelocks", activeColor);
    var expiredButton = addButton("expiredlocks", expiredColor);
    var totalButton = addButton("totallocks", totalColor);
    var activeswrvButton = addButton("activeswrv", activeColor);
    var expiredswrvButton = addButton("expiredswrv", expiredColor);
    var totalswrvButton = addButton("totalswrv", totalColor);
    var activeveswrvButton = addButton("activeveswrv", activeColor);
    var expiredveswrvButton = addButton("expiredveswrv", expiredColor);
    var totalveswrvButton = addButton("totalveswrv", totalColor);
  
    var buttons = { activelocks: activeButton, totallocks: totalButton, expiredlocks: expiredButton, activeswrv: activeswrvButton, totalswrv: totalswrvButton, expiredswrv: expiredswrvButton, activeveswrv: activeveswrvButton, totalveswrv: totalveswrvButton, expiredveswrv: expiredveswrvButton  };
  
    // add button
    function addButton(name, color) {
      var button = buttonsContainer.createChild(am4core.Button)
      button.label.valign = "middle"
      button.label.fill = am4core.color("#ffffff");
      //button.label.fontSize = "11px";
      button.background.cornerRadius(30, 30, 30, 30);
      button.background.strokeOpacity = 0.3
      button.background.fillOpacity = 0;
      button.background.stroke = buttonStrokeColor;
      button.background.padding(2, 3, 2, 3);
      button.states.create("active");
      button.setStateOnChildren = true;
  
      var activeHoverState = button.background.states.create("hoverActive");
      activeHoverState.properties.fillOpacity = 0;
  
      var circle = new am4core.Circle();
      circle.radius = 8;
      circle.fillOpacity = 0.3;
      circle.fill = buttonStrokeColor;
      circle.strokeOpacity = 0;
      circle.valign = "middle";
      circle.marginRight = 5;
      button.icon = circle;
  
      // save name to dummy data for later use
      button.dummyData = name;
  
      var circleActiveState = circle.states.create("active");
      circleActiveState.properties.fill = color;
      circleActiveState.properties.fillOpacity = 0.5;
  
      button.events.on("hit", handleButtonClick);
  
      return button;
    }
  
    // handle button clikc
    function handleButtonClick(event) {
      // we saved name to dummy data
      changeDataType(event.target.dummyData);
    }
  
    // change data type (active/confirmed/recovered/deaths)
    function changeDataType(name) {
      currentType = name;
      currentTypeName = name;
      if (name !== "deaths") {
        currentTypeName += " cases";
      }
      // make button active
      var activeButton = buttons[name];
      activeButton.isActive = true;
      // make other buttons inactive
      for (var key in buttons) {
        if (buttons[key] != activeButton) {
          buttons[key].isActive = false;
        }
      }
  
  
      dateAxis.tooltip.background.fill = colors[name];
      dateAxis.tooltip.background.stroke = colors[name];
      lineChart.cursor.lineX.stroke = colors[name];
  
      // show series
      if (seriesTypeSwitch.isActive) {
        var currentSeries = columnSeries[name];
        currentSeries.show();
        // hide other series
        for (var key in columnSeries) {
          if (columnSeries[key] != currentSeries) {
            columnSeries[key].hide();
          }
        }
      }
      else {
        var currentSeries = series[name];
        currentSeries.show();
        // hide other series
        for (var key in series) {
          if (series[key] != currentSeries) {
            series[key].hide();
          }
        }
      }
  
    }
  
    // capitalize first letter
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    // set initial data and names
    changeDataType("activelocks");
  
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
    <>
      <div class="card-body" style={{ width: "100%", height: "620px" }}>
        <div id="controls"></div>
        <div id="mchart"></div>
      </div>
    </>
      
    );
  }
}

export default App;