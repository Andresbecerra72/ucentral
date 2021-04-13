import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const childRoutes: Routes = [

  { path: 'home', component: HomeComponent, data: {titulo: 'Inicio'} },
  { path: 'about', component: AboutComponent, data: {titulo: 'Nosotros'} },
  { path: 'contact', component: ContactComponent, data: {titulo: 'Contactanos'} }

];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule]
})
export class ChildRoutesModule { }
