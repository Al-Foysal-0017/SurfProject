import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import LocksDataNew from "../json/swrv_locks.json"

am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
  var json;
  var volumes;
  var topholders;
  var vl_top;
  var vl_distribution;
  var vl_swrv_locks;
  var vl_swrv_locks_7d;
  var vl_veswrv_top;
  var vl_distribution_active;
  var covid_total_timeline;
  var deadweight;
  
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // am4core.useTheme(am4themes_dark);
  // Themes end
  
  
  //WEEKLY
  var wchart = am4core.create("wchart", am4charts.XYChart);
  //wchart.dateFormatter.inputDateFormat = "yyyy-mm-dd";
  wchart.numberFormatter.numberFormat = "#a";
  wchart.numberFormatter.bigNumberPrefixes = [
    { "number": 1e+3, "suffix": "K" },
    { "number": 1e+6, "suffix": "M" },
    { "number": 1e+9, "suffix": "B" }
  ];
  // wchart.data = tvlDataNew
  wchart.data = [{
    "date": LocksDataNew[0].day,
    "volume": LocksDataNew[0].swrv_total_locked,
    "color": wchart.colors.next()
  }, {
    "date": LocksDataNew[1].day,
    "volume": LocksDataNew[1].swrv_total_locked,
    "color": wchart.colors.next()
  }, {
    "date": LocksDataNew[2].day,
    "volume": LocksDataNew[2].swrv_total_locked,
    "color": wchart.colors.next()
  }, {
    "date": LocksDataNew[3].day,
    "volume": LocksDataNew[3].swrv_total_locked,
    "color": wchart.colors.next()
  }, {
    "date": LocksDataNew[4].day,
    "volume": LocksDataNew[4].swrv_total_locked,
    "color": wchart.colors.next()
  }, {
    "date": LocksDataNew[5].day,
    "volume": LocksDataNew[5].swrv_total_locked,
    "color": wchart.colors.next()
  }, {
    "date": LocksDataNew[6].day,
    "volume": LocksDataNew[6].swrv_total_locked,
    "color": wchart.colors.next()
  }];
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
  
  //TOP 10 Active Lockers veSWRV
  var topvechart = am4core.create("top10ve", am4charts.XYChart);
  topvechart.numberFormatter.numberFormat = "#a";
  topvechart.numberFormatter.bigNumberPrefixes = [
    { "number": 1e+3, "suffix": "K" },
    { "number": 1e+6, "suffix": "M" },
    { "number": 1e+9, "suffix": "B" }
  ];
  
  topvechart.data = vl_veswrv_top;
  
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
  
  var topvebullet = topveseries.bullets.create(am4charts.CircleBullet);
  
  topvechart.cursor = new am4charts.XYCursor();
  
  topvechart.scrollbarX = new am4core.Scrollbar();
  //topchart.scrollbarY = new am4core.Scrollbar();
  // Enable export
  topvechart.exporting.menu = new am4core.ExportMenu();
  topvechart.exporting.menu.align = "left";
  
  //END TOP 10 veSWRV
  
  
  //Pie Chart Distribution
  
  var chart = am4core.create("durationpie", am4charts.PieChart3D);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  
  chart.legend = new am4charts.Legend();
  
  // chart.data = [
  //   {
  //     asset: "< 1 Year",
  //     value: vl_distribution[0].locks
  //   },
  //   {
  //     asset: "1-2 Years",
  //     value: vl_distribution[1].locks
  //   },
  //   {
  //     asset: "2-3 Years",
  //     value: vl_distribution[2].locks
  //   },
  //   {
  //     asset: "3-4 Years",
  //     value: vl_distribution[3].locks
  //   }
  // ];
  
  var series = chart.series.push(new am4charts.PieSeries3D());
  series.dataFields.value = "value";
  series.dataFields.category = "asset";
  //series.ticks.template.disabled = true;
  series.labels.template.text = "{category}";
  series.slices.template.tooltipHTML = "{category}<br><span style='font-size:14px'><b>{value.value.formatNumber('###,###,###,###.')}</b> Locks ({value.percent.formatNumber('##.00')}%)</span>";
  //end pie chart
  
  //Distribution Active
  
  var chart = am4core.create("distribution_active", am4charts.PieChart3D);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  
  chart.legend = new am4charts.Legend();
  
  // chart.data = [
  //   {
  //     asset: "< 1 Year",
  //     value: vl_distribution_active[0].locks
  //   },
  //   {
  //     asset: "1-2 Years",
  //     value: vl_distribution_active[1].locks
  //   },
  //   {
  //     asset: "2-3 Years",
  //     value: vl_distribution_active[2].locks
  //   },
  //   {
  //     asset: "3-4 Years",
  //     value: vl_distribution_active[3].locks
  //   }
  // ];
  
  var series = chart.series.push(new am4charts.PieSeries3D());
  series.dataFields.value = "value";
  series.dataFields.category = "asset";
  //series.ticks.template.disabled = true;
  series.labels.template.text = "{category}";
  series.slices.template.tooltipHTML = "{category}<br><span style='font-size:14px'><b>{value.value.formatNumber('###,###,###,###.')}</b> Locks ({value.percent.formatNumber('##.00')}%)</span>";
  //end pie chart
  
  //NEW TEST
    //////////////////////////////////////////////////////////////////////////////
    // NEW TEST
    //////////////////////////////////////////////////////////////////////////////
  
  
  
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
  
    var countryColor = am4core.color("#3b3b3b");
    var countryStrokeColor = am4core.color("#000000");
    var buttonStrokeColor = am4core.color("#ffffff");
    var countryHoverColor = am4core.color("#1b1b1b");
    var activeCountryColor = am4core.color("#0f0f0f");
  
    var currentIndex;
    var currentCountry = "India";
  
    // last date of the data DATE ISSUE HERE
    // var lastDate = new Date(covid_total_timeline[covid_total_timeline.length-1].day);
    // var currentDate = lastDate;
    //var lastDate = "2020-4-17";
  
    var countryDataTimeout;
  
    var currentType;
  
    var currentTypeName;
  
    var sliderAnimation;
  
    //////////////////////////////////////////////////////////////////////////////
    // PREPARE DATA
    //////////////////////////////////////////////////////////////////////////////
  
  
  
    // calculated active cases in world data (active = confirmed - recovered)
    // for (var i = 0; i < covid_total_timeline.length; i++) {
    //   var di = covid_total_timeline[i];
    //   di.activelocks = di.cumulative_locks_active;
    //   di.totallocks = di.cumulative_total_locks;
    //   di.expiredlocks = di.cumulative_locks_expired;
    //   di.activeswrv = di.cumulative_swrv_active;
    //   di.totalswrv = di.cumulative_swrv_total;
    //   di.expiredswrv = di.cumulative_swrv_expired;
    //   di.activeveswrv = di.cumulative_veswrv_active;
    //   di.totalveswrv = di.cumulative_veswrv_total;
    //   di.expiredveswrv = di.cumulative_veswrv_expired;
  
    // }
  
  
    // END OF DATA
  
    //////////////////////////////////////////////////////////////////////////////
    // LAYOUT & CHARTS
    //////////////////////////////////////////////////////////////////////////////
  
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
  
  
    // what to do when slider is dragged
    // slider.events.on("rangechanged", function(event) {
    //   var index = Math.round((covid_total_timeline.length - 1) * slider.start);
    //   updateTotals(index);
    // })
    // stop animation if dragged
    // slider.startGrip.events.on("drag", () => {
    //   stop();
    //   if (sliderAnimation) {
    //     sliderAnimation.setProgress(slider.start);
    //   }
    // });
  
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
  
  
    // lineChart.plotContainer.events.on("up", function() {
    //   if (!legendDown) {
    //     slider.start = lineChart.cursor.xPosition * ((dateAxis.max - dateAxis.min) / (lastDate.getTime() - dateAxis.min));
    //   }
    // })
  
  
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
      if (name != "deaths") {
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
  
  
  
    // function updateSeriesTooltip() {
  
    //   var position = dateAxis.dateToPosition(currentDate);
    //   position = dateAxis.toGlobalPosition(position);
    //   var x = dateAxis.positionToCoordinate(position);
  
    //   lineChart.cursor.triggerMove({ x: x, y: 0 }, "soft", true);
    //   lineChart.series.each(function(series) {
    //     if (!series.isHidden) {
    //       series.tooltip.disabled = false;
    //       series.showTooltipAtDataItem(series.tooltipDataItem);
    //     }
    //   })
    // }
  
  
    // update total values in buttons
    // function updateTotals(index) {
    //   if (!isNaN(index)) {
    //     var di = covid_total_timeline[index];
    //     var date = new Date(di.day);
    //     currentDate = date;
  
    //     var position = dateAxis.dateToPosition(date);
    //     position = dateAxis.toGlobalPosition(position);
    //     var x = dateAxis.positionToCoordinate(position);
  
    //     if (lineChart.cursor) {
    //       lineChart.cursor.triggerMove({ x: x, y: 0 }, "soft", true);
    //     }
    //     for (var key in buttons) {
    //       var count = Number(lineChart.data[index][key])
    //       if (!isNaN(count)) {
    //         var ph ="";
    //             switch(key){
    //                 case "totallocks":
    //                 ph = "[bold {color}]Total # Locks[/]";
    //                 break;
    //                 case "activelocks":
  
    //                 ph = "[bold {color}]Active # Locks[/]";
    //                 break;
    //                 case "expiredlocks":
  
    //                 ph = "[bold {color}]Expired # Locks[/]";
    //                 break;
    //                 case "totalswrv":
  
    //                 ph = "[bold {color}]Total SWRV[/]";
    //                 break;
    //                 case "activeswrv":
  
    //                 ph = "[bold {color}]Active SWRV[/]";
    //                 break;
    //                 case "expiredswrv":
  
    //                 ph = "[bold {color}]Expired SWRV[/]";
    //                 break;
    //                 case "totalveswrv":
  
    //                 ph = "[bold {color}]Total veSWRV[/]";
    //                 break;
    //                 case "activeveswrv":
  
    //                 ph = "[bold {color}]Active veSWRV[/]";
    //                 break;
    //                 case "expiredveswrv":
  
    //                 ph = "[bold {color}]Expired veSWRV[/]";
    //                 break;
    //                 default:
    //                 ph = key;
    //                 break;
    //               }
    //         buttons[key].label.text = ph + ": " + numberFormatter.format(count.toFixed(0), '#,###');
    //       }
    //     }
    //     currentIndex = index;
    //   }
    // }
  
  
    // capitalize first letter
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    // set initial data and names
    changeDataType("activelocks");
  
    // setTimeout(updateSeriesTooltip, 3000);
  
  //END NEW TEST
  
  //   });
  // });
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
                {/* <div class="card-body" style={{ width: "100%", height: "420px" }}>
                    <div id="controls"></div>
                    <div id="mchart"></div>
                </div>

                <div class="card-body">
                  <div id="durationpie"></div>
                </div>


                <div class="card-body">
                  <div id="distribution_active"></div>
                </div>


                <div class="card-body">
                  <div id="top20"></div>
                </div>


                <div class="card-body">
                  <div id="top10ve"></div>
                </div>


                <div class="card-body">
                    <div id="nlchart"></div>
                </div> */}


                <div class="card-body">
                    <div id="wchart"></div>
                </div>
    </>
      
    );
  }
}

export default App;