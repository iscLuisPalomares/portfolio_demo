import { Component, ViewChild, OnInit, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ContentsService } from '../services/contents.service';
// import { HttpParams } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
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
        transform: 'translateY(40px)' // Adjust the distance of upward movement
      })),
      transition('void <=> *', animate(1000)), // Adjust the duration as needed
    ]),
    trigger('fadeInUpDelayed', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(40px)'
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
        transform: 'translateY(40px)'
      })),
      transition(':enter', [
        animate('1000ms ease-in-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  // @ViewChild('scrollTargetReglas') scrollTargetReglas: ElementRef | undefined;
  @ViewChild('scrollTargetConfirmarAsistencia') scrollTargetConfirmarAsistencia: ElementRef | undefined;
  // @ViewChild('scrollTargetParroquia') scrollTargetParroquia: ElementRef | undefined;
  // @ViewChild('scrollTargetCelebracionFiesta') scrollTargetCelebracionFiesta: ElementRef | undefined;
  

  @ViewChild('scrollTargetAgradecimientos') scrollTargetAgradecimientos: ElementRef | undefined;
  @ViewChild('scrollTargetBendicion') scrollTargetBendicion: ElementRef | undefined;
  @ViewChild('scrollTargetPadresLuis') scrollTargetPadresLuis: ElementRef | undefined;
  @ViewChild('scrollTargetPadresNahui') scrollTargetPadresNahui: ElementRef | undefined;
  @ViewChild('scrollTargetPadrinos') scrollTargetPadrinos: ElementRef | undefined;
  @ViewChild('scrollTargetLugarYFecha') scrollTargetLugarYFecha: ElementRef | undefined;
  @ViewChild('scrollTargetLugarYFecha2') scrollTargetLugarYFecha2: ElementRef | undefined;
  @ViewChild('scrollTargetCeremoniaReligiosa') scrollTargetCeremoniaReligiosa: ElementRef | undefined;
  @ViewChild('scrollTargetCelebracion') scrollTargetCelebracion: ElementRef | undefined;
  @ViewChild('scrollTargetDressCode') scrollTargetDressCode: ElementRef | undefined;
  @ViewChild('scrollTargetColorCode') scrollTargetColorCode: ElementRef | undefined;
  @ViewChild('scrollTargetColorForbidden') scrollTargetColorForbidden: ElementRef | undefined;
  @ViewChild('scrollTargetNoChildren') scrollTargetNoChildren: ElementRef | undefined;
  @ViewChild('scrollTargetGaleria') scrollTargetGaleria: ElementRef | undefined;

  @ViewChild('scrollTargetMesaDeRegalos') scrollTargetMesaDeRegalos: ElementRef | undefined;
  @ViewChild('scrollTargetMesaMensaje') scrollTargetMesaMensaje: ElementRef | undefined;
  @ViewChild('scrollTargetMesaTarjetaImg') scrollTargetMesaTarjetaImg: ElementRef | undefined;
  @ViewChild('scrollTargetMesaBanco') scrollTargetMesaBanco: ElementRef | undefined;
  @ViewChild('scrollTargetMesaNombre') scrollTargetMesaNombre: ElementRef | undefined;
  @ViewChild('scrollTargetMesaTarjeta') scrollTargetMesaTarjeta: ElementRef | undefined;
  
  
  alreadyshown = false;
  storiesList: any = [];
  isMobile: boolean = false;
  content: ContentsService;
  invitesname: string = "";
  maxinvites: number = 1;
  invitescode: string = '';
  howmany: number = 1;
  isinvitecodedefined: boolean = false;
  days: number = 100;
  hours: number = 24;
  minutes: number = 30;
  seconds: number = 10;


  constructor(private el: ElementRef, content: ContentsService, private route: ActivatedRoute) {
    this.content = content;
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.route.queryParams
      .subscribe(params => {
        console.log("checking query params");
        if (params['invitescode']) {
          this.invitescode = params['invitescode'];
          this.content.getInvitesByCode(params['invitescode']).subscribe((response) => {
            console.log(response);
            this.invitesname = response['names'];
            this.maxinvites = response['max'];
            this.isinvitecodedefined = this.invitesname.length > 0;
          }, (error) => {
            console.log(error);
          });
        } else {
          console.log("no invitescode detected");
        }
      });
    this.updateCountdown();
  }

  updateCountdown(): void {
    // const countdownElement = document.getElementById('countdown');
  
    // if (!countdownElement) {
    //   console.error("Countdown element not found.");
    //   return;
    // }
  
    setInterval(() => {
      // Parse target date and time
      const targetDateTime = new Date(`2024-06-08T19:00:00`);
  
      // Get the current date and time
      const currentDate = new Date();
  
      // Calculate the difference in milliseconds
      const timeDifference = targetDateTime.getTime() - currentDate.getTime();
  
      // if (timeDifference <= 0) {
      //   // The target date and time have already passed
      //   countdownElement.innerText = "Countdown expired";
      //   return;
      // }
  
      // Calculate days, hours, minutes, and seconds
      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      // Format the result
      // const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      // Update the countdown element
      // countdownElement.innerText = countdownString;
    }, 1000); // Update every second
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  ngAfterViewInit() {
    this.createIntersectionObserver();
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

    const observerGoldText = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.goldFontTransition(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // observerWhiteText.observe(this.scrollTargetReglas?.nativeElement);
    observerWhiteText.observe(this.scrollTargetAgradecimientos?.nativeElement);
    observerWhiteText.observe(this.scrollTargetCelebracion?.nativeElement);
    observerWhiteText.observe(this.scrollTargetMesaDeRegalos?.nativeElement);
    observerWhiteText.observe(this.scrollTargetMesaMensaje?.nativeElement);
    observerWhiteText.observe(this.scrollTargetMesaTarjetaImg?.nativeElement);
    observerWhiteText.observe(this.scrollTargetMesaBanco?.nativeElement);
    observerWhiteText.observe(this.scrollTargetMesaNombre?.nativeElement);
    observerWhiteText.observe(this.scrollTargetMesaTarjeta?.nativeElement);
    // observerWhiteText.observe(this.scrollTargetParroquia?.nativeElement);
    observerWhiteText.observe(this.scrollTargetCeremoniaReligiosa?.nativeElement);
    observerWhiteText.observe(this.scrollTargetDressCode?.nativeElement);
    observerWhiteText.observe(this.scrollTargetColorCode?.nativeElement);
    observerWhiteText.observe(this.scrollTargetColorForbidden?.nativeElement);
    observerWhiteText.observe(this.scrollTargetNoChildren?.nativeElement);
    
    observerGoldText.observe(this.scrollTargetPadrinos?.nativeElement);
    observerGoldText.observe(this.scrollTargetPadresNahui?.nativeElement);
    observerGoldText.observe(this.scrollTargetPadresLuis?.nativeElement);
    observerGoldText.observe(this.scrollTargetBendicion?.nativeElement);
    observerGoldText.observe(this.scrollTargetLugarYFecha?.nativeElement);
    observerGoldText.observe(this.scrollTargetLugarYFecha2?.nativeElement);
    observerGoldText.observe(this.scrollTargetGaleria?.nativeElement);

  }

  private playFadeInOnScrollAnimation(target: Element, isWhite: boolean) {
    // Trigger the fadeInOnScroll animation here
    target.classList.remove('clearcolor');
    target.classList.add('animate-fade-in-on-scroll');
    (isWhite) ? target.classList.add('whitecolor') : target.classList.add('blackcolor');
  }

  private goldFontTransition(target: Element) {
    target.classList.remove('clearcolor');
    target.classList.add('animate-fade-in-on-scroll');
    target.classList.add('goldcolor');
  }

  confirmar(isgoing: boolean) {
    this.content.postInvitesConfimation(this.invitescode, isgoing, this.howmany).subscribe((value) => {
      console.log(value);
      if (value['status'] == 'saved' && isgoing) {
        alert(`Confirmado para ${this.howmany}`);
      }
      if (value['status'] == 'saved' && !isgoing) {
        alert(`Gracias por notificarnos.`);
      }
      if (value['status'] == 'not saved') {
        alert('Hubo un problema al guardar confirmacion. Intente de nuevo mas tarde.');
      }
    });
  }
}
