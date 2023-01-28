import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { JwtConfig, JwtInterceptor } from '@auth0/angular-jwt/auth0-angular-jwt';
// import { JwtModule } from '@auth0/angular-jwt/auth0-angular-jwt';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { StrToMathPipe } from './common/pipes/str-to-math.pipe';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CounterComponent } from './counter/counter.component';
import { NewContentComponent } from './registry/new-content/new-content.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './dashboards/charts/charts.component';
import { NaftaComponent } from './dashboards/nafta/nafta.component';
import { NewCardComponent } from './registry/new-card/new-card/new-card.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProdMonitorComponent } from './mfg/prod-monitor/prod-monitor.component';

import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { ChatComponent } from './sockets/chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LoginformComponent } from './login/loginform/loginform.component';
import { JwtinterceptorService } from './services/interceptors/jwtinterceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from './services/login.service';

const config: SocketIoConfig = { url: getBackEndUrl(), options: {  } };

function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

function getBackEndUrl() {
  if (getBaseUrl().includes("localhost")) return "http://192.168.1.64:3000";
  return "https://portfolio-demo-service.azurewebsites.net/";
}

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    StrToMathPipe,
    NewContentComponent,
    HomeComponent,
    ChartsComponent,
    NaftaComponent,
    StrToMathPipe,
    NewCardComponent,
    ProdMonitorComponent,
    ChatComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxDataGridModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'nafta', component: NaftaComponent, canActivate: [AuthGuard] },
      { path: 'charts', component: ChartsComponent, canActivate: [AuthGuard] },
      { path: 'newcontent', component: NewContentComponent, canActivate: [AuthGuard] },
      { path: 'climate', component: FetchDataComponent, canActivate: [AuthGuard] },
      { path: 'prodmonitor', component: ProdMonitorComponent, canActivate: [AuthGuard] },
      { path: 'chat', component: ChatComponent },
      { path: 'login', component: LoginformComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true },
    AuthGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
