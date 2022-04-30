import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
    ProdMonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DxButtonModule,
    DxDataGridModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'nafta', component: NaftaComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'newcontent', component: NewContentComponent },
      { path: 'climate', component: FetchDataComponent },
      { path: 'prodmonitor', component: ProdMonitorComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
