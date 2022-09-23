import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { IndiaComponent } from './components/contact/india/india.component';
import { UsaComponent } from './components/contact/usa/usa.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact', component: ContactComponent, children: [
      { path: 'india', component: IndiaComponent },
      { path: 'usa', component: UsaComponent }
    ]
  },
  { path: 'category/:cname', component: DropdownComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
