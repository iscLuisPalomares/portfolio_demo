import { Component, OnInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  rootBarChart!: am5.Root;
  rootPieChart!: am5.Root;
  rootMapChart!: am5.Root;
  rootScatterChart!: am5.Root;
  rootXYValueChart!: am5.Root;
  constructor() { }

  ngOnInit(): void {
    // this.rootBarChart = am5.Root.new("barchart");
    // this.rootPieChart = am5.Root.new("piechart");
    // this.rootMapChart = am5.Root.new("mapchart");
    this.rootScatterChart = am5.Root.new("scatterchart");
    this.rootXYValueChart = am5.Root.new("xyvaluechart");

    // this.initializeBarsChart();
    // this.initializePieChart();
    // this.initializeMapChart();
    this.initializeScatterChart();
    this.initializeXYValueChart();
  }

  initializeXYValueChart() {
    this.rootXYValueChart.setThemes([
      am5themes_Animated.new(this.rootXYValueChart)
    ]);
    let chart = this.rootXYValueChart.container.children.push(
      am5xy.XYChart.new(this.rootXYValueChart, {
        panX: false,
        panY: false,
        wheelY: "zoomXY",
        pinchZoomX: true,
        pinchZoomY: true
      })
    );
    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(this.rootXYValueChart, {
        renderer: am5xy.AxisRendererX.new(this.rootXYValueChart, { minGridDistance: 50 }),
        tooltip: am5.Tooltip.new(this.rootXYValueChart, {})
      })
    );
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.rootXYValueChart, {
        renderer: am5xy.AxisRendererY.new(this.rootXYValueChart, {}),
        tooltip: am5.Tooltip.new(this.rootXYValueChart, {})
      })
    );
    let series0 = chart.series.push(
      am5xy.LineSeries.new(this.rootXYValueChart, {
        calculateAggregates: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "ay",
        valueXField: "x",
        valueField: "aValue",
        tooltip: am5.Tooltip.new(this.rootXYValueChart, {
          labelText: "x: {valueX}, y: {valueY}, value: {value}"
        })
      })
    );
    let ref_root = this.rootXYValueChart;
    let circleTemplate = am5.Template.new({});
    series0.bullets.push(function () {
      let graphics = am5.Circle.new(
        ref_root,
        {
          fill: series0.get("fill")
        }
      );
      return am5.Bullet.new(ref_root, {
        sprite: graphics
      });
    });
    series0.set("heatRules", [{
      target: circleTemplate,
      min: 3,
      max: 35,
      dataField: "value",
      key: "radius"
    }]);

    let starTemplate = am5.Template.new({});
    let series1 = chart.series.push(
      am5xy.LineSeries.new(this.rootXYValueChart, {
        calculateAggregates: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "by",
        valueXField: "x",
        valueField: "bValue",
        tooltip: am5.Tooltip.new(this.rootXYValueChart, {
          labelText: "x: {valueX}, y: {valueY}, value: {value}"
        })
      })
    );
    series1.bullets.push(function () {
      let graphics = am5.Star.new(ref_root, {
        fill: series1.get("fill"),
        spikes: 15,
        innerRadius: am5.percent(90)
      });
      return am5.Bullet.new(ref_root, {
        sprite: graphics
      });
    });
    series1.set("heatRules", [{
      target: starTemplate,
      min: 3,
      max: 50,
      dataField: "value",
      key: "radius"
    }]);
    chart.set("cursor", am5xy.XYCursor.new(this.rootXYValueChart, {
      xAxis: xAxis,
      yAxis: yAxis,
      behavior: "zoomXY"
    }));
    chart.set("scrollbarX", am5.Scrollbar.new(this.rootXYValueChart, {
      orientation: "horizontal"
    }));

    chart.set("scrollbarY", am5.Scrollbar.new(this.rootXYValueChart, {
      orientation: "vertical"
    }));

    let data = [
      {
        x: 1,
        ay: 6.5,
        by: 2.2,
        aValue: 15,
        bValue: 10
      },
      {
        x: 2,
        ay: 12.3,
        by: 4.9,
        aValue: 8,
        bValue: 3
      },
      {
        x: 3,
        ay: 12.3,
        by: 5.1,
        aValue: 16,
        bValue: 4
      },
      {
        x: 5,
        ay: 2.9,
        aValue: 9
      },
      {
        x: 7,
        by: 8.3,
        bValue: 13
      },
      {
        x: 10,
        ay: 2.8,
        by: 13.3,
        aValue: 9,
        bValue: 13
      },
      {
        x: 12,
        ay: 3.5,
        by: 6.1,
        aValue: 5,
        bValue: 2
      },
      {
        x: 13,
        ay: 5.1,
        aValue: 10
      },
      {
        x: 15,
        ay: 6.7,
        by: 10.5,
        aValue: 3,
        bValue: 10
      },
      {
        x: 16,
        ay: 8,
        by: 12.3,
        aValue: 5,
        bValue: 13
      },
      {
        x: 20,
        by: 4.5,
        bValue: 11
      },
      {
        x: 22,
        ay: 9.7,
        by: 15,
        aValue: 15,
        bValue: 10
      },
      {
        x: 23,
        ay: 10.4,
        by: 10.8,
        aValue: 1,
        bValue: 11
      },
      {
        x: 24,
        ay: 1.7,
        by: 19,
        aValue: 12,
        bValue: 3
      }
    ];

    series0.data.setAll(data);
    series1.data.setAll(data);
    series0.appear(1000);
    series1.appear(1000);

    chart.appear(1000, 100);
  }

  initializeScatterChart() {
    this.rootScatterChart.setThemes([
      am5themes_Animated.new(this.rootScatterChart)
    ]);

    let chart = this.rootScatterChart.container.children.push(am5xy.XYChart.new(this.rootScatterChart, {
      panX: true,
      panY: true,
      wheelY: "zoomXY",
      pinchZoomX: true,
      pinchZoomY: true
    }));

    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(this.rootScatterChart, {
      renderer: am5xy.AxisRendererX.new(this.rootScatterChart, { minGridDistance: 50 }),
      tooltip: am5.Tooltip.new(this.rootScatterChart, {})
    }));

    xAxis.ghostLabel.set("forceHidden", true);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.rootScatterChart, {
      renderer: am5xy.AxisRendererY.new(this.rootScatterChart, {}),
      tooltip: am5.Tooltip.new(this.rootScatterChart, {})
    }));
    yAxis.ghostLabel.set("forceHidden", true);

    let series0 = chart.series.push(am5xy.LineSeries.new(this.rootScatterChart, {
      calculateAggregates: true,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "ay",
      valueXField: "ax",
      tooltip: am5.Tooltip.new(this.rootScatterChart, {
        labelText: "x: {valueX} y:{valueY}"
      })
    }));
    let ref_root = this.rootScatterChart;
    series0.bullets.push(function () {
      let graphics = am5.Triangle.new(ref_root, {
        fill: series0.get("fill"),
        width: 15,
        height: 13
      });
      return am5.Bullet.new(ref_root, {
        sprite: graphics
      });
    });

    let series1 = chart.series.push(am5xy.LineSeries.new(this.rootScatterChart, {
      calculateAggregates: true,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "by",
      valueXField: "bx",
      tooltip: am5.Tooltip.new(this.rootScatterChart, {
        labelText: "x: {valueX} y:{valueY}"
      })
    }));

    series0.strokes.template.set("strokeOpacity", 0);
    series1.strokes.template.set("strokeOpacity", 0);

    series1.bullets.push(function () {
      let graphics = am5.Triangle.new(ref_root, {
        fill: series1.get("fill"),
        width: 15,
        height: 13,
        rotation: 180
      });
      return am5.Bullet.new(ref_root, {
        sprite: graphics
      });
    });

    let trendSeries0 = chart.series.push(am5xy.LineSeries.new(this.rootScatterChart, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "y",
      valueXField: "x",
      stroke: series0.get("stroke")
    }));

    trendSeries0.data.setAll([
      { x: 1, y: 2 },
      { x: 12, y: 11 }
    ]);

    let trendSeries1 = chart.series.push(am5xy.LineSeries.new(this.rootScatterChart, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "y",
      valueXField: "x",
      stroke: series1.get("stroke")
    }));

    trendSeries1.data.setAll([
      { x: 1, y: 1 },
      { x: 12, y: 19 }
    ])

    chart.set("cursor", am5xy.XYCursor.new(this.rootScatterChart, {
      xAxis: xAxis,
      yAxis: yAxis,
      snapToSeries: [series0, series1]
    }));
    chart.set("scrollbarX", am5.Scrollbar.new(this.rootScatterChart, {
      orientation: "horizontal"
    }));
    chart.set("scrollbarY", am5.Scrollbar.new(this.rootScatterChart, {
      orientation: "vertical"
    }));

    let data = [{
      "ax": 1,
      "ay": 0.5,
      "bx": 1,
      "by": 2.2
    }, {
      "ax": 2,
      "ay": 1.3,
      "bx": 2,
      "by": 4.9
    }, {
      "ax": 3,
      "ay": 2.3,
      "bx": 3,
      "by": 5.1
    }, {
      "ax": 4,
      "ay": 2.8,
      "bx": 4,
      "by": 5.3
    }, {
      "ax": 5,
      "ay": 3.5,
      "bx": 5,
      "by": 6.1
    }, {
      "ax": 6,
      "ay": 5.1,
      "bx": 6,
      "by": 8.3
    }, {
      "ax": 7,
      "ay": 6.7,
      "bx": 7,
      "by": 10.5
    }, {
      "ax": 8,
      "ay": 8,
      "bx": 8,
      "by": 12.3
    }, {
      "ax": 9,
      "ay": 8.9,
      "bx": 9,
      "by": 14.5
    }, {
      "ax": 10,
      "ay": 9.7,
      "bx": 10,
      "by": 15
    }, {
      "ax": 11,
      "ay": 10.4,
      "bx": 11,
      "by": 18.8
    }, {
      "ax": 12,
      "ay": 11.7,
      "bx": 12,
      "by": 19
    }];
    series0.data.setAll(data);
    series1.data.setAll(data);
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
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.rootBarChart, {
        renderer: am5xy.AxisRendererY.new(this.rootBarChart, {})
      })
    );
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(this.rootBarChart, {
        renderer: am5xy.AxisRendererX.new(this.rootBarChart, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

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
    this.rootScatterChart.dispose();
  }
}
