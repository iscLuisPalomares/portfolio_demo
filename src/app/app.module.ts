import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgDragDropModule } from 'ng-drag-drop';

//import { JwtConfig, JwtInterceptor } from '@auth0/angular-jwt/auth0-angular-jwt';
// import { JwtModule } from '@auth0/angular-jwt/auth0-angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { StrToMathPipe } from './common/pipes/str-to-math.pipe';
// import { NavMenuComponent } from './nav-menu/nav-menu.component';
// import { CounterComponent } from './counter/counter.component';
// import { NewContentComponent } from './registry/new-content/new-content.component';
import { HomeComponent } from './home/home.component';
// import { ChartsComponent } from './dashboards/charts/charts.component';
// import { NaftaComponent } from './dashboards/nafta/nafta.component';
// import { NewCardComponent } from './registry/new-card/new-card/new-card.component';
// import { FetchDataComponent } from './fetch-data/fetch-data.component';
// import { ProdMonitorComponent } from './mfg/prod-monitor/prod-monitor.component';

// import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
// import { ChatComponent } from './sockets/chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { LoginformComponent } from './login/loginform/loginform.component';
// import { JwtinterceptorService } from './services/interceptors/jwtinterceptor.service';
// import { AuthGuard } from './guards/auth.guard';
// import { LoginService } from './services/login.service';
// import { DbsmanagerComponent } from './fetch-data/mongodbs/dbsmanager/dbsmanager.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './ngrx/login.reducer';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { CommonModule } from '@angular/common';
// import { AboutmeComponent } from './home/aboutme/aboutme.component';
// import { ComingsoonComponent } from './home/comingsoon/comingsoon.component';
// import { BlackjackComponent } from './home/minigames/blackjack/blackjack.component';
// import { ColorPickerComponent } from './home/colorpicker/colorpicker.component';
// import { SavedcolorComponent } from './home/colorpicker/savedcolor/savedcolor.component';
// import { PaintComponent } from './home/minigames/paint/paint.component';
// import { ContentsService } from './services/contents.service';
// import { LongCtoShortPipe } from './common/pipes/long-cto-short.pipe';
// import { LogoutComponent } from './login/logout/logout.component';

const config: SocketIoConfig = { url: getBackEndUrl(), options: { extraHeaders: {"my-custom-header": "abcd"} } };

function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

function getBackEndUrl() {
  if (getBaseUrl().includes("localhost") || getBaseUrl().includes("192.168")) return "http://localhost:3000";
  return "http://3.82.4.101:4000/";
}

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    // NavMenuComponent,
    HomeComponent,
    AboutmeComponent,
    // CounterComponent,
    // FetchDataComponent,
    // StrToMathPipe,
    // NewContentComponent,
    // HomeComponent,
    // ChartsComponent,
    // NaftaComponent,
    // StrToMathPipe,
    // NewCardComponent,
    // ProdMonitorComponent,
    // ChatComponent,
    // LoginformComponent,
    // DbsmanagerComponent,
    // AboutmeComponent,
    // ComingsoonComponent,
    // BlackjackComponent,
    // ColorPickerComponent,
    // SavedcolorComponent,
    // PaintComponent,
    // LongCtoShortPipe,
    // LogoutComponent
  ],
  imports: [
    // NgDragDropModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right'}),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // DxButtonModule,
    // DxDataGridModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'invitesresume', component: AboutmeComponent },
      // { path: 'chat', component: ChatComponent },
      // { path: 'nafta', component: NaftaComponent, canActivate: [AuthGuard] },
      // { path: 'charts', component: ChartsComponent, canActivate: [AuthGuard] },
      // { path: 'newcontent', component: NewContentComponent, canActivate: [AuthGuard] },
      // { path: 'weather', component: FetchDataComponent, canActivate: [AuthGuard] },
      // // { path: 'prodmonitor', component: ProdMonitorComponent, canActivate: [AuthGuard] },
      // { path: 'dbsmanager', component: DbsmanagerComponent, canActivate: [AuthGuard] },
      // { path: 'login', component: LoginformComponent, canActivate: [AuthGuard] },
      // { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
      // { path: 'chat', component: ChatComponent },
      // { path: 'aboutme', component: AboutmeComponent },
      // { path: 'comingsoon', component: ComingsoonComponent },
      // { path: 'blackjack', component: BlackjackComponent },
      // { path: 'colorpicker', component: ColorPickerComponent },
      // { path: 'paint', component: PaintComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
    StoreModule.forRoot({ loginstate: loginReducer }),
    CommonModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true },
    // AuthGuard,
    // LoginService,
    // ContentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
