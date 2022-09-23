import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { IndiaComponent } from './components/contact/india/india.component';
import { UsaComponent } from './components/contact/usa/usa.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { Page1Component } from './components/dropdown/page1/page1.component';
import { Page2Component } from './components/dropdown/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    NavComponent,
    ContactComponent,
    IndiaComponent,
    UsaComponent,
    DropdownComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //adding this so we can have immediate update on search
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
