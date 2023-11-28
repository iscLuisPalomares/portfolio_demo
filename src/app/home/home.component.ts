import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import { StoriesService } from '../services/stories.service';
// import * as am5 from "@amcharts/amcharts5";
// import * as am5map from "@amcharts/amcharts5/map";
// import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)' // Adjust the distance of upward movement
      })),
      transition('void <=> *', animate(700)), // Adjust the duration as needed
    ]),
    trigger('fadeInUpDelayed', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition('void <=> *', [
        animate('1000ms 500ms ease-in-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  user = 'Aquel Que Permanece';
  urlBackend = "http://192.168.1.70:3000/"
  alreadyshown = false;
  storiesList: any = [];
  isMobile: boolean = false;
  
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  ngAfterViewInit() {
    const ournames = this.el.nativeElement.querySelector('#idtitletext');
    ournames.classList.remove('clearcolor');
    ournames.classList.add('whitecolor');
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

}
