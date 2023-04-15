import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = 'iscluispalomares';

  tasksList = [
    'add a service', 
    'add a pipe', 
    'generate a custom pipe', 
    'add login with jwt',
    'create a new directive',
    'dynamic css',
    'add formulary programmatically',
    'add radio buttons',
    'add check boxes',
    'add role-based links/pages',
    'pass values to child',
    'return values to parent',
    'add two way binding'
  ];

  storiesList: any = [];
  constructor(private storiesService: StoriesService) { }

  ngOnInit(): void {
    this.storiesList = this.storiesService.getStories();
    this.initializeMap();
  }
  
  initializeMap() {
    let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoNaturalEarth1(),
        homeZoomLevel: 3.5,
        
      })
    );
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color(0xdddddd),
        stroke: am5.color(0xffffff)
      })
    );
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true
    });
    
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xaaeeff)
    });

    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "properties": {
              "name": "New York City"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-73.778137, 40.641312]
            }
          }, {
            "type": "Feature",
            "properties": {
              "name": "London"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-0.454296, 51.470020]
            }
          }, {
            "type": "Feature",
            "properties": {
              "name": "Beijing"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [116.597504, 40.072498]
            }
          }]
      }
      })
    );
    pointSeries.bullets.push(function() {
      let countryCircle = am5.Circle.new(root, {
        radius: 5,
        fill: am5.ColorSet.new(root, {}).next(),
        tooltipText: "{name}"
      });
      
      countryCircle.animate({
        duration: 1000,
        key: 'fillOpacity',
        from: 1,
        to: 0,
        loops: Infinity
      });
      countryCircle.animate({
        duration: 1000,
        key: 'radius',
        from: 10,
        to: 15,
        loops: Infinity
      });
      return am5.Bullet.new(root, {
        sprite: countryCircle
      });
    });

    chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "properties": {
              "name": "New York City"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-73.778137, 40.641312]
            }
          }, {
            "type": "Feature",
            "properties": {
              "name": "London"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-0.454296, 51.470020]
            }
          }, {
            "type": "Feature",
            "properties": {
              "name": "Beijing"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [116.597504, 40.072498]
            }
          }]
      }
      })
    );
    pointSeries.bullets.push(function() {
      let countryCircle = am5.Circle.new(root, {
        radius: 5,
        fill: am5.ColorSet.new(root, {}).next(),
        tooltipText: "{name}"
      });
      return am5.Bullet.new(root, {
        sprite: countryCircle
      });
    });
  }
}
