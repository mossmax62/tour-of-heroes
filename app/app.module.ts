//Angular imports
import './rxjs-extensions';
import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//Components
import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }   from './hero-search.component';

//Services
import { HeroService }          from './hero.service';
import { HeroSearchService }          from './hero-search.service';

//Modules
import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  imports:[
  BrowserModule, 
  FormsModule, 
  AppRoutingModule, 
  HttpModule, 
  InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations:[AppComponent, HeroDetailComponent, DashboardComponent, HeroesComponent, HeroSearchComponent],
  providers:	[ HeroService, HeroSearchService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

