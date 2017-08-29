import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//carousel

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModelsComponent } from './models/models.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModelsComponent,
    NavbarComponent,
    InfoComponent
  ],
  imports: [
    CarouselModule.forRoot(),

    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
