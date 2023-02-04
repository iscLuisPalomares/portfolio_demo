import { Component, OnInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  
  // private root: am5.Root;
  
  rootBarChart!: am5.Root;
  rootPieChart!: am5.Root;
  rootMapChart!: am5.Root;
  constructor() {}

  ngOnInit(): void {
    this.rootBarChart = am5.Root.new("barchart");
    this.rootPieChart = am5.Root.new("piechart");
    this.rootMapChart = am5.Root.new("mapchart");
    
    this.initializeBarsChart();
    this.initializePieChart();
    this.initializeMapChart();
  }
  
  initializeBarsChart() {
    let chart = this.rootBarChart.container.children.push(
      am5xy.XYChart.new(this.rootBarChart, {})
    );
    let data = [
      {
        category: "Research",
        value1: 1000,
        value2: 588
      },
      {
        category: "Marketing",
        value1: 1200,
        value2: 1800
      },
      {
        category: "Sales",
        value1: 850,
        value2: 1230
      }
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.rootBarChart, {
        renderer: am5xy.AxisRendererY.new(this.rootBarChart, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(this.rootBarChart, {
        renderer: am5xy.AxisRendererX.new(this.rootBarChart, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(this.rootBarChart, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category"
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(this.rootBarChart, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category"
      })
    );
    series2.data.setAll(data);

    // Add legend
    // let legend = chart.children.push(am5.Legend.new(root, {}));
    // legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(this.rootBarChart, {}));

    // this.root = root;
  }
  
  initializePieChart() {
    // Create root and chart
    let chart = this.rootPieChart.container.children.push( 
      am5percent.PieChart.new(this.rootPieChart, {
        layout: this.rootPieChart.verticalLayout
      }) 
    );

    // Define data
    let data = [{
      country: "France",
      sales: 100000
    }, {
      country: "Spain",
      sales: 160000
    }, {
      country: "United Kingdom",
      sales: 80000
    }];

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(this.rootPieChart, {
        name: "Series",
        valueField: "sales",
        categoryField: "country"
      })
    );
    series.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(this.rootPieChart, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      layout: this.rootPieChart.horizontalLayout
    }));

    legend.data.setAll(series.dataItems);
  }

  initializeMapChart() {
    // Create root and chart
    let chart = this.rootMapChart.container.children.push(
      am5map.MapChart.new(this.rootMapChart, {
        panX: "rotateX",
        projection: am5map.geoOrthographic()
      })
    );
    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(this.rootMapChart, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );
  }

  ngOnDestroy() {
    this.rootBarChart.dispose();
    this.rootPieChart.dispose();
    this.rootMapChart.dispose();
  }
}
