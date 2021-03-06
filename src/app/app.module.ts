import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { TabsModule, TabsetConfig } from 'ng2-bootstrap/tabs';
//import { TabsetConfig } from 'ng2-bootstrap/tabs/tabset.config';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';

import {MoviesService} from './services/movies.service';
import { ConvertJsonToArrayPipe } from './pipes/convert-json-to-array.pipe';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ConvertJsonToArrayPipe,
    MovieDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    TabsModule,
    AppRoutingModule
  ],
  providers: [MoviesService,TabsetConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
