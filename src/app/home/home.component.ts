import { Component, ViewChild, OnInit, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import * as AOS from 'aos';
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
    trigger('fadeInOnScroll', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition(':enter', [
        animate('500ms ease-in-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollTargetFecha') scrollTargetFecha: ElementRef | undefined;
  @ViewChild('scrollTargetBendicion') scrollTargetBendicion: ElementRef | undefined;
  @ViewChild('scrollTargetPadresLuis') scrollTargetPadresLuis: ElementRef | undefined;
  @ViewChild('scrollTargetPadresNahui') scrollTargetPadresNahui: ElementRef | undefined;
  @ViewChild('scrollTargetPadrinos') scrollTargetPadrinos: ElementRef | undefined;
  @ViewChild('scrollTargetAgradecimientos') scrollTargetAgradecimientos: ElementRef | undefined;

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
    this.createIntersectionObserver();
    // const ournames = this.el.nativeElement.querySelector('#idtitletext');
    // ournames.classList.remove('clearcolor');
    // ournames.classList.add('whitecolor');
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  private createIntersectionObserver() {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // 0 means as soon as one pixel is visible
    };

    const observerWhiteText = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.playFadeInOnScrollAnimation(entry.target, true);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    const observerBlackText = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.playFadeInOnScrollAnimation(entry.target, false);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observerWhiteText.observe(this.scrollTargetFecha?.nativeElement);
    observerWhiteText.observe(this.scrollTargetAgradecimientos?.nativeElement);
    
    observerBlackText.observe(this.scrollTargetBendicion?.nativeElement);
    observerBlackText.observe(this.scrollTargetPadresLuis?.nativeElement);
    observerBlackText.observe(this.scrollTargetPadresNahui?.nativeElement);
    observerBlackText.observe(this.scrollTargetPadrinos?.nativeElement);
  }

  private playFadeInOnScrollAnimation(target: Element, isWhite: boolean) {
    // Trigger the fadeInOnScroll animation here
    target.classList.remove('clearcolor');
    target.classList.add('animate-fade-in-on-scroll');
    (isWhite)? target.classList.add('whitecolor') : target.classList.add('blackcolor');
  }

}
