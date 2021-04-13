import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
   ],
  imports: [
    CommonModule,
    RouterModule, // modulo de rutas
    SharedModule, // modulo de componentes compartidos
    ComponentsModule, // modulo para el uso de componentes
  ]
})
export class PagesModule { }
