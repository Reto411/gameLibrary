import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detailpage/game-detail.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpModule} from '@angular/http';
import {SharedModule} from './shared';
import { ImpressumComponent } from './impressum/impressum.component';
import { SafePipe } from './shared/pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent,
    ImpressumComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
