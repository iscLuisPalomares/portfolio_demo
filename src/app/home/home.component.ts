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
  user = 'Aquel Que Permanece';
  urlBackend = "http://192.168.1.70:3000/"

  storiesList: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  
}
