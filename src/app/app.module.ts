import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlacesListComponent } from './components/places/places-list/places-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiHttpService } from './api-http.service';

@NgModule({
  declarations: [AppComponent, PlacesListComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: ApiHttpService, useClass: ApiHttpService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
